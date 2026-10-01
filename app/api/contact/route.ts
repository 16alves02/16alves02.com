import { NextResponse } from "next/server";
import {
  buildAutoReply,
  buildNotificationEmail,
  isEmailConfigured,
  sendEmail,
} from "@/lib/email";
import { isDatabaseConfigured, supabaseRequest } from "@/lib/supabase-admin";

const contactEmail = "16alves02@gmail.com";

function clean(value: unknown, max = 2500) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function trustedOrigin(request: Request) {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configured) return true;

  const origin = request.headers.get("origin");
  if (!origin) return true;

  return origin === configured || origin === configured.replace(/\/$/, "");
}

export async function POST(request: Request) {
  try {
    if (!trustedOrigin(request)) {
      return NextResponse.json({ message: "Invalid origin." }, { status: 403 });
    }

    if (!isDatabaseConfigured()) {
      return NextResponse.json(
        { message: "Contact storage is not configured yet." },
        { status: 503 },
      );
    }

    const body = await request.json();

    if (clean(body.website, 100)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 120);
    const email = clean(body.email, 320);
    const business = clean(body.business, 180);
    const service = clean(body.service, 80);
    const budget = clean(body.budget, 80);
    const timeline = clean(body.timeline, 80);
    const message = clean(body.message, 5000);
    const language = clean(body.language, 20) || "en";
    const sourcePath = clean(body.sourcePath, 200) || "/#contact";
    const sessionId = clean(body.sessionId, 80) || null;

    if (
      name.length < 2 ||
      !isValidEmail(email) ||
      !service ||
      message.length < 20 ||
      !body.privacy
    ) {
      return NextResponse.json(
        { message: "Please complete the required fields." },
        { status: 400 },
      );
    }

    const leadIdRows = await supabaseRequest<Array<{ id: string }>>(
      "contact_submissions?select=id",
      {
        method: "POST",
        headers: { Prefer: "return=representation" },
        body: JSON.stringify({
          name,
          email,
          business,
          service,
          budget,
          timeline,
          message,
          language,
          source_path: sourcePath,
          session_id: sessionId,
          privacy_acknowledged: true,
        }),
      },
    );

    const leadId = leadIdRows[0]?.id;
    let notificationSent = false;
    let autoReplySent = false;

    if (isEmailConfigured()) {
      const notification = buildNotificationEmail({
        name,
        email,
        business,
        service,
        budget,
        timeline,
        message,
        language,
      });

      try {
        await sendEmail({
          to: contactEmail,
          replyTo: email,
          subject: notification.subject,
          text: notification.text,
          html: notification.html,
        });
        notificationSent = true;
      } catch {
        notificationSent = false;
      }

      if (process.env.RESEND_AUTOREPLY_ENABLED === "true") {
        try {
          const reply = buildAutoReply(name, language);
          await sendEmail({
            to: email,
            subject: reply.subject,
            text: reply.text,
            html: reply.html,
          });
          autoReplySent = true;
        } catch {
          autoReplySent = false;
        }
      }
    }

    if (leadId) {
      await supabaseRequest(
        `contact_submissions?id=eq.${encodeURIComponent(leadId)}`,
        {
          method: "PATCH",
          headers: { Prefer: "return=minimal" },
          body: JSON.stringify({
            notification_sent_at: notificationSent
              ? new Date().toISOString()
              : null,
            auto_reply_sent_at: autoReplySent
              ? new Date().toISOString()
              : null,
          }),
        },
      );
    }

    return NextResponse.json({
      ok: true,
      emailConfigured: isEmailConfigured(),
      notificationSent,
      autoReplySent,
    });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong while saving the enquiry." },
      { status: 500 },
    );
  }
}
