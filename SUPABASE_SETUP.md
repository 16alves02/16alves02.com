# Supabase setup for the portfolio

The portfolio stays on Cloudflare Pages. Supabase provides PostgreSQL, authentication and project-media storage. Cloudflare Pages Functions provide the server-side contact endpoint and protect the service-role secret.

## 1. Create a dedicated Supabase project

Create a new project in the Supabase organisation selected by the owner. For Portugal, use the EU West (Ireland) region. Do not reuse a database used by another application.

## 2. Create the database schema

Open the Supabase SQL Editor and run all of `supabase/setup.sql`.

The two tables are:
- `portfolio_content`: projects and editable content.
- `contact_messages`: enquiries submitted through the public form.

Both tables have Row Level Security. Public visitors can read only published portfolio content. Only the authenticated account whose email claim is exactly `alv16studios@gmail.com` can manage content or view messages. The public form writes messages through a Cloudflare Function using the service-role key; that key is never sent to the browser.

The script includes explicit Data API grants. Supabase's October 30, 2026 change means new public tables are not automatically exposed to the Data API; permissions must be granted explicitly.

## 3. Create the single administrator

In Supabase Dashboard > Authentication > Users, create one user with the email `alv16studios@gmail.com` and a strong, unique password. Disable public sign-ups in Authentication settings. There is no public registration flow.

Use this account at `/admin`.

## 4. Configure Cloudflare Pages variables

In Cloudflare Dashboard > Workers & Pages > the `16alves02` Pages project > Settings > Variables and Secrets, add these values to the production environment:

| Name | Type | Purpose |
| --- | --- | --- |
| `SUPABASE_URL` | Variable | Project API URL |
| `SUPABASE_PUBLISHABLE_KEY` | Variable | Browser-safe publishable key |
| `SUPABASE_SERVICE_ROLE_KEY` | Secret | Server-only contact endpoint key |
| `RESEND_API_KEY` | Secret | Sends message notifications |
| `RESEND_FROM_EMAIL` | Variable | Sender address verified with Resend |

The recipient is fixed to `alv16studios@gmail.com`. Verify a sender identity in Resend before adding `RESEND_FROM_EMAIL`. Messages remain stored if notifications are not configured or temporarily fail.

Never add the service-role key or Resend API key to a `VITE_*` variable, HTML, JavaScript bundle or Git.

## 5. Import the current projects

After configuring Cloudflare and deploying the branch, open `/admin`, sign in, select Projects and use **Importar projetos atuais**. This copies the present project definitions to the CMS so each one can then be edited.

Other content types can be created from their respective sections. Content is stored as JSON to keep case studies and translations flexible.

## 6. Verify

- `/api/config` exposes only the Supabase URL, publishable key and admin email.
- `/api/content` returns only published rows.
- A contact test appears in the admin inbox.
- Unauthenticated visitors cannot read unpublished content or contact messages.
- Run Supabase Security Advisors after applying the schema.

For local testing of Pages Functions, use the Cloudflare Pages development runtime and a local ignored `.dev.vars` file. Do not commit secrets.
