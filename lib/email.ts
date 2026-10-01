function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function isEmailConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL,
  );
}

export async function sendEmail({
  to,
  subject,
  replyTo,
  html,
  text,
}: {
  to: string;
  subject: string;
  replyTo?: string;
  html: string;
  text: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    return { sent: false, configured: false };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      ...(replyTo ? { reply_to: replyTo } : {}),
      subject,
      html,
      text,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Email provider rejected the message: ${body.slice(0, 500)}`);
  }

  return { sent: true, configured: true };
}

export function buildNotificationEmail({
  name,
  email,
  business,
  service,
  budget,
  timeline,
  message,
  language,
}: {
  name: string;
  email: string;
  business: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  language: string;
}) {
  const subject = `New website enquiry from ${name}`;

  const text = [
    "New enquiry from 16alves02",
    `Name: ${name}`,
    `Email: ${email}`,
    `Business/project: ${business || "-"}`,
    `Service: ${service || "-"}`,
    `Budget: ${budget || "-"}`,
    `Timeline: ${timeline || "-"}`,
    `Language: ${language}`,
    "",
    message,
  ].join("\n");

  const html = `
    <h2>New enquiry from 16alves02</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Business/project:</strong> ${escapeHtml(business || "-")}</p>
    <p><strong>Service:</strong> ${escapeHtml(service || "-")}</p>
    <p><strong>Budget:</strong> ${escapeHtml(budget || "-")}</p>
    <p><strong>Timeline:</strong> ${escapeHtml(timeline || "-")}</p>
    <p><strong>Language:</strong> ${escapeHtml(language)}</p>
    <hr />
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  return { subject, text, html };
}

export function buildAutoReply(name: string) {
  const subject = "I received your 16alves02 enquiry";

  const text = [
    `Hi ${name},`,
    "",
    "Thanks for reaching out through 16alves02. I received your enquiry and have it safely recorded.",
    "",
    "This is an automatic confirmation. I will reply to your message by email.",
    "",
    "Leonardo Alves",
    "16alves02",
  ].join("\n");

  const html = `
    <p>Hi ${escapeHtml(name)},</p>
    <p>Thanks for reaching out through 16alves02. I received your enquiry and have it safely recorded.</p>
    <p>This is an automatic confirmation. I will reply to your message by email.</p>
    <p>Leonardo Alves<br />16alves02</p>
  `;

  return { subject, text, html };
}
