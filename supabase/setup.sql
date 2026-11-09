-- Portfolio CMS schema for 16alves02.com
-- Run once in the Supabase SQL Editor after creating the dedicated project.
-- The only dashboard administrator is alv16studios@gmail.com.

create table if not exists public.portfolio_content (
  id uuid primary key default gen_random_uuid(),
  content_type text not null check (content_type in ('project','home_copy','profile','experience','skill_group','education','engineering_note')),
  slug text not null,
  locale text not null default 'all',
  content jsonb not null default '{}'::jsonb,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint portfolio_content_type_slug_locale_unique unique (content_type, slug, locale)
);
create index if not exists portfolio_content_public_order_idx on public.portfolio_content (content_type, published, sort_order);
alter table public.portfolio_content enable row level security;
grant select on table public.portfolio_content to anon, authenticated;
grant insert, update, delete on table public.portfolio_content to authenticated;

drop policy if exists "Public can read published portfolio content" on public.portfolio_content;
create policy "Public can read published portfolio content" on public.portfolio_content for select to anon using (published = true);
drop policy if exists "Portfolio administrator can read all content" on public.portfolio_content;
create policy "Portfolio administrator can read all content" on public.portfolio_content for select to authenticated using ((select auth.jwt() ->> 'email') = 'alv16studios@gmail.com');
drop policy if exists "Portfolio administrator can create content" on public.portfolio_content;
create policy "Portfolio administrator can create content" on public.portfolio_content for insert to authenticated with check ((select auth.jwt() ->> 'email') = 'alv16studios@gmail.com');
drop policy if exists "Portfolio administrator can update content" on public.portfolio_content;
create policy "Portfolio administrator can update content" on public.portfolio_content for update to authenticated using ((select auth.jwt() ->> 'email') = 'alv16studios@gmail.com') with check ((select auth.jwt() ->> 'email') = 'alv16studios@gmail.com');
drop policy if exists "Portfolio administrator can delete content" on public.portfolio_content;
create policy "Portfolio administrator can delete content" on public.portfolio_content for delete to authenticated using ((select auth.jwt() ->> 'email') = 'alv16studios@gmail.com');

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  ip_hash text not null,
  status text not null default 'new' check (status in ('new','read','archived')),
  created_at timestamptz not null default now(),
  read_at timestamptz
);
create index if not exists contact_messages_rate_limit_idx on public.contact_messages (ip_hash, created_at desc);
create index if not exists contact_messages_inbox_idx on public.contact_messages (status, created_at desc);
alter table public.contact_messages enable row level security;
grant select, update on table public.contact_messages to authenticated;
grant all on table public.contact_messages to service_role;

drop policy if exists "Only portfolio administrator can read messages" on public.contact_messages;
create policy "Only portfolio administrator can read messages" on public.contact_messages for select to authenticated using ((select auth.jwt() ->> 'email') = 'alv16studios@gmail.com');
drop policy if exists "Only portfolio administrator can update messages" on public.contact_messages;
create policy "Only portfolio administrator can update messages" on public.contact_messages for update to authenticated using ((select auth.jwt() ->> 'email') = 'alv16studios@gmail.com') with check ((select auth.jwt() ->> 'email') = 'alv16studios@gmail.com');

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('portfolio-media', 'portfolio-media', true, 10485760, array['image/jpeg','image/png','image/webp','image/avif','image/svg+xml'])
on conflict (id) do nothing;

drop policy if exists "Public can view portfolio media" on storage.objects;
create policy "Public can view portfolio media" on storage.objects for select to anon, authenticated using (bucket_id = 'portfolio-media');
drop policy if exists "Portfolio administrator can upload media" on storage.objects;
create policy "Portfolio administrator can upload media" on storage.objects for insert to authenticated with check (bucket_id = 'portfolio-media' and (select auth.jwt() ->> 'email') = 'alv16studios@gmail.com');
drop policy if exists "Portfolio administrator can update media" on storage.objects;
create policy "Portfolio administrator can update media" on storage.objects for update to authenticated using (bucket_id = 'portfolio-media' and (select auth.jwt() ->> 'email') = 'alv16studios@gmail.com') with check (bucket_id = 'portfolio-media' and (select auth.jwt() ->> 'email') = 'alv16studios@gmail.com');
drop policy if exists "Portfolio administrator can delete media" on storage.objects;
create policy "Portfolio administrator can delete media" on storage.objects for delete to authenticated using (bucket_id = 'portfolio-media' and (select auth.jwt() ->> 'email') = 'alv16studios@gmail.com');
