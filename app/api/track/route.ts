import { NextResponse } from "next/server";
import { isDatabaseConfigured, supabaseRequest } from "@/lib/supabase-admin";

const allowedEvents = new Set([
  "page_view",
  "click",
  "language_change",
  "contact_form_start",
  "contact_submit",
  "scroll_depth",
]);

function cleanString(value: unknown, max = 180) {
  return typeof value === "string" ? value.trim().slice(0, max) : null;
}

function cleanReferrer(value: unknown) {
  const raw = cleanString(value, 600);
  if (!raw) return null;

  try {
    const url = new URL(raw);
    return `${url.origin}${url.pathname}`.slice(0, 300);
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  try {
    if (!isDatabaseConfigured()) {
      return new NextResponse(null, { status: 204 });
    }

    const body = await request.json();
    const eventName = cleanString(body.eventName, 64);

    if (!eventName || !allowedEvents.has(eventName)) {
      return new NextResponse(null, { status: 204 });
    }

    const sessionId = cleanString(body.sessionId, 80);
    const page = cleanString(body.page, 200) ?? "/";
    const language = cleanString(body.language, 20) ?? "en";
    const target = cleanString(body.target, 180);
    const device = cleanString(body.device, 20);
    const referrer = cleanReferrer(body.referrer);

    await supabaseRequest("site_events", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({
        event_name: eventName,
        session_id: sessionId,
        page,
        language,
        target,
        device,
        referrer,
        metadata:
          body.metadata && typeof body.metadata === "object"
            ? body.metadata
            : {},
      }),
    });

    return new NextResponse(null, { status: 204 });
  } catch {
    return new NextResponse(null, { status: 204 });
  }
}
