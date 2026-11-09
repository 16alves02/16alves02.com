const recipient = 'alv16studios@gmail.com';
const json = (data, status = 200) => Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } });
const clean = (value, max) => typeof value === 'string' ? value.trim().slice(0, max) : '';

export async function onRequestPost({ request, env }) {
  if (!(request.headers.get('content-type') || '').includes('application/json')) return json({ error: 'Invalid request.' }, 415);
  let rawBody;
  try { rawBody = await request.text(); } catch { return json({ error: 'Invalid request.' }, 400); }
  if (new TextEncoder().encode(rawBody).byteLength > 9000) return json({ error: 'Message too large.' }, 413);

  let input;
  try { input = JSON.parse(rawBody); } catch { return json({ error: 'Invalid JSON.' }, 400); }
  if (clean(input.website, 300)) return json({ success: true }, 202);

  const name = clean(input.name, 100);
  const email = clean(input.email, 254).toLowerCase();
  const subject = clean(input.subject, 140).replace(/[\r\n]+/g, ' ');
  const message = clean(input.message, 5000);
  if (!name || !subject || message.length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Please check the required fields.' }, 400);
  }

  const supabaseUrl = env.SUPABASE_URL;
  const serviceKey = env.SUPABASE_SECRET_KEY || env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) return json({ error: 'Contact service is not configured yet.' }, 503);

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip + ':' + serviceKey));
  const ipHash = [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const rateUrl = new URL('/rest/v1/contact_messages', supabaseUrl);
  rateUrl.searchParams.set('select', 'id');
  rateUrl.searchParams.set('ip_hash', 'eq.' + ipHash);
  rateUrl.searchParams.set('created_at', 'gte.' + since);
  rateUrl.searchParams.set('limit', '5');
  const headers = { apikey: serviceKey, 'Accept-Profile': 'portfolio' };

  const rateCheck = await fetch(rateUrl, { headers });
  if (!rateCheck.ok) return json({ error: 'Contact service is temporarily unavailable.' }, 503);
  const recent = await rateCheck.json();
  if (recent.length >= 5) return json({ error: 'Too many messages. Please try again later.' }, 429);

  const saved = await fetch(new URL('/rest/v1/contact_messages', supabaseUrl), {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json', 'Content-Profile': 'portfolio', Prefer: 'return=minimal' },
    body: JSON.stringify({ name, email, subject, message, ip_hash: ipHash, status: 'new' }),
  });
  if (!saved.ok) return json({ error: 'Message could not be saved. Please try again.' }, 502);

  let notificationSent = false;
  if (env.RESEND_API_KEY && env.RESEND_FROM_EMAIL) {
    try {
      const notification = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + env.RESEND_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: env.RESEND_FROM_EMAIL,
          to: [recipient],
          reply_to: email,
          subject: 'Portfolio contact: ' + subject,
          text: 'Name: ' + name + '\nEmail: ' + email + '\nSubject: ' + subject + '\n\n' + message,
        }),
      });
      notificationSent = notification.ok;
    } catch { notificationSent = false; }
  }
  return json({ success: true, notificationSent }, 201);
}
