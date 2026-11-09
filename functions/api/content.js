export async function onRequestGet({ env }) {
  const url = env.SUPABASE_URL;
  const key = env.SUPABASE_PUBLISHABLE_KEY || env.SUPABASE_ANON_KEY;
  if (!url || !key) {
    return Response.json({ items: [], configured: false }, { headers: { 'Cache-Control': 'no-store' } });
  }
  const endpoint = new URL('/rest/v1/portfolio_content', url);
  endpoint.searchParams.set('select', 'id,content_type,slug,locale,content,published,sort_order,updated_at');
  endpoint.searchParams.set('published', 'eq.true');
  endpoint.searchParams.set('order', 'sort_order.asc,updated_at.desc');
  const upstream = await fetch(endpoint, { headers: { apikey: key, 'Accept-Profile': 'portfolio' } });
  if (!upstream.ok) return Response.json({ error: 'Content service unavailable.' }, { status: 502 });
  const items = await upstream.json();
  return Response.json({ items, configured: true }, {
    headers: { 'Cache-Control': 'public, max-age=60, stale-while-revalidate=300' },
  });
}
