# 16alves02 backend

The website includes a server-side backend foundation built into the Next.js App Router.

## What it covers

- First-party analytics with explicit consent.
- Page views, clicks, language usage, device category, referral source and scroll-depth milestones.
- Contact enquiries with project context, service, budget and timeline.
- Private /admin dashboard with traffic summaries and lead management.
- Lead statuses: new, contacted, qualified and closed.
- Enquiry reason breakdown by requested service.
- Transactional email notifications through Resend.
- Optional automatic acknowledgement emails to people who submit the form.
- Supabase Postgres storage with row-level security enabled.

The analytics endpoint does not store IP addresses.

## Supabase setup

1. Create a Supabase project.
2. Open the SQL editor.
3. Run supabase/schema.sql.
4. Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to the deployment environment.
5. Never expose SUPABASE_SERVICE_ROLE_KEY to the browser.

The website only uses the Supabase service role from server-side route handlers.

## Admin setup

Set ADMIN_PASSWORD and ADMIN_SESSION_SECRET in the deployment environment.

Open /admin and sign in with the configured password.

The admin session is an HTTP-only signed cookie. Analytics are not collected on /admin.

## Email setup

The public contact address is 16alves02@gmail.com.

Set RESEND_API_KEY and RESEND_FROM_EMAIL after configuring a valid sending identity with Resend.

RESEND_FROM_EMAIL should be a sender identity you are allowed to use with the email provider. It does not need to be the public contact address.

Set RESEND_AUTOREPLY_ENABLED=true after the notification flow has been tested.

## Environment

Copy .env.example to .env.local for local development.

Never commit real credentials.
