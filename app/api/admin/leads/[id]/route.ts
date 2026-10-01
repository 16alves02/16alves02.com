import { NextResponse } from "next/server";
import { hasAdminSession } from "@/lib/admin-auth";
import { isDatabaseConfigured, supabaseRequest } from "@/lib/supabase-admin";

const leadStatuses = new Set(["new", "contacted", "qualified", "closed"]);

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
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

    const { id } = await params;
    const body = await request.json();

    const status = leadStatuses.has(body.status) ? body.status : "new";
    const adminNotes =
      typeof body.adminNotes === "string"
        ? body.adminNotes.trim().slice(0, 4000)
        : "";

    await supabaseRequest(
      `contact_submissions?id=eq.${encodeURIComponent(id)}`,
      {
        method: "PATCH",
        headers: { Prefer: "return=minimal" },
        body: JSON.stringify({
          status,
          admin_notes: adminNotes,
        }),
      },
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "Unable to update lead." },
      { status: 500 },
    );
  }
}
