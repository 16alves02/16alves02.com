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

export function buildAutoReply(
  name: string,
  language: string,
) {
  const messages: Record<
    string,
    { subject: string; greeting: string; received: string; automatic: string }
  > = {
    en: {
      subject: "I received your 16alves02 enquiry",
      greeting: `Hi ${name},`,
      received:
        "Thanks for reaching out through 16alves02. I received your enquiry and have it safely recorded.",
      automatic:
        "This is an automatic confirmation. I will reply to your message by email.",
    },
    "pt-PT": {
      subject: "Recebi o teu pedido na 16alves02",
      greeting: `Olá ${name},`,
      received:
        "Obrigado por entrares em contacto através da 16alves02. Recebi o teu pedido e ficou registado.",
      automatic:
        "Esta é uma confirmação automática. Responderei ao teu pedido por email.",
    },
    es: {
      subject: "He recibido tu consulta en 16alves02",
      greeting: `Hola ${name},`,
      received:
        "Gracias por contactar con 16alves02. He recibido tu consulta y ha quedado registrada.",
      automatic:
        "Este es un mensaje automático de confirmación. Responderé por email.",
    },
    "zh-CN": {
      subject: "已收到你的 16alves02 咨询",
      greeting: `你好 ${name}，`,
      received:
        "感谢你通过 16alves02 联系我。我已经收到你的咨询，并已记录。",
      automatic:
        "这是一封自动确认邮件，我会通过邮箱回复你的消息。",
    },
    fr: {
      subject: "J'ai reçu votre demande 16alves02",
      greeting: `Bonjour ${name},`,
      received:
        "Merci d'avoir contacté 16alves02. J'ai bien reçu votre demande et elle est enregistrée.",
      automatic:
        "Ceci est une confirmation automatique. Je vous répondrai par e-mail.",
    },
  };

  const current = messages[language] ?? messages.en;

  const text = [
    current.greeting,
    "",
    current.received,
    "",
    current.automatic,
    "",
    "Leonardo Alves",
    "16alves02",
  ].join("\n");

  const html = `
    <p>${escapeHtml(current.greeting)}</p>
    <p>${escapeHtml(current.received)}</p>
    <p>${escapeHtml(current.automatic)}</p>
    <p>Leonardo Alves<br />16alves02</p>
  `;

  return { subject: current.subject, text, html };
}
