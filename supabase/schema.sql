create extension if not exists pgcrypto;

create table if not exists public.site_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  session_id text,
  event_name text not null,
  page text,
  language text,
  target text,
  device text,
  referrer text,
  metadata jsonb not null default '{}'::jsonb
);

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  business text,
  service text,
  budget text,
  timeline text,
  message text not null,
  language text not null,
  source_path text,
  session_id text,
  privacy_acknowledged boolean not null default false,
  status text not null default 'new',
  admin_notes text not null default '',
  notification_sent_at timestamptz,
  auto_reply_sent_at timestamptz
);

create index if not exists site_events_created_at_idx
  on public.site_events (created_at desc);

create index if not exists site_events_session_id_idx
  on public.site_events (session_id);

create index if not exists site_events_event_name_idx
  on public.site_events (event_name);

create index if not exists site_events_language_idx
  on public.site_events (language);

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

create index if not exists contact_submissions_status_idx
  on public.contact_submissions (status);

alter table public.site_events enable row level security;
alter table public.contact_submissions enable row level security;

revoke all on public.site_events from anon, authenticated;
revoke all on public.contact_submissions from anon, authenticated;

comment on table public.site_events is
  'First-party privacy-conscious website analytics. Do not store IP addresses here.';

comment on table public.contact_submissions is
  'Website enquiries submitted through 16alves02.com.';
