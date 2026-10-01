import { NextResponse } from "next/server";
import { hasAdminSession } from "@/lib/admin-auth";
import { isDatabaseConfigured, supabaseRequest } from "@/lib/supabase-admin";

type EventRow = {
  created_at: string;
  event_name: string;
  page: string | null;
  language: string | null;
  target: string | null;
  device: string | null;
  session_id: string | null;
};

type LeadRow = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  business: string | null;
  service: string | null;
  budget: string | null;
  timeline: string | null;
  message: string;
  language: string;
  status: string;
  source_path: string | null;
  admin_notes: string | null;
};

function groupCount(rows: string[]) {
  const map = new Map<string, number>();

  for (const value of rows) {
    if (!value) continue;
    map.set(value, (map.get(value) ?? 0) + 1);
  }

  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([label, count]) => ({ label, count }));
}

export async function GET(request: Request) {
  try {
    if (!(await hasAdminSession())) {
      return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
    }

    if (!isDatabaseConfigured()) {
      return NextResponse.json(
        { message: "Database is not configured." },
        { status: 503 },
      );
    }

    const { searchParams } = new URL(request.url);
    const days = Math.min(
      Math.max(Number(searchParams.get("days")) || 30, 1),
      365,
    );
    const since = new Date(
      Date.now() - days * 24 * 60 * 60 * 1000,
    ).toISOString();

    const events = await supabaseRequest<EventRow[]>(
      `site_events?select=created_at,event_name,page,language,target,device,session_id&created_at=gte.${encodeURIComponent(since)}&order=created_at.desc&limit=10000`,
    );

    const leads = await supabaseRequest<LeadRow[]>(
      `contact_submissions?select=id,created_at,name,email,business,service,budget,timeline,message,language,status,source_path,admin_notes&created_at=gte.${encodeURIComponent(since)}&order=created_at.desc&limit=100`,
    );

    const pageViews = events.filter(
      (event) => event.event_name === "page_view",
    );
    const clicks = events.filter((event) => event.event_name === "click");
    const sessions = new Set(
      pageViews.map((event) => event.session_id).filter(Boolean),
    );

    return NextResponse.json({
      rangeDays: days,
      generatedAt: new Date().toISOString(),
      metrics: {
        pageViews: pageViews.length,
        uniqueSessions: sessions.size,
        clicks: clicks.length,
        leads: leads.length,
        trackedLeadRate:
          sessions.size > 0
            ? Number(((leads.length / sessions.size) * 100).toFixed(1))
            : 0,
      },
      languages: groupCount(pageViews.map((event) => event.language ?? "")),
      pages: groupCount(pageViews.map((event) => event.page ?? "")),
      clicksByTarget: groupCount(
        clicks.map((event) => event.target ?? ""),
      ),
      devices: groupCount(pageViews.map((event) => event.device ?? "")),
      eventsByType: groupCount(events.map((event) => event.event_name)),
      leads,
    });
  } catch {
    return NextResponse.json(
      { message: "Unable to load dashboard data." },
      { status: 500 },
    );
  }
}
