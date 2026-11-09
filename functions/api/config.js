export async function onRequestGet({ env }) {
  return Response.json({
    supabaseUrl: env.SUPABASE_URL || '',
    supabasePublishableKey: env.SUPABASE_PUBLISHABLE_KEY || env.SUPABASE_ANON_KEY || '',
    adminEmail: 'alv16studios@gmail.com',
  }, { headers: { 'Cache-Control': 'no-store' } });
}
