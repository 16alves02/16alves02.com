const jsonHeaders = {
  "Content-Type": "application/json",
};

export function isDatabaseConfigured() {
  return Boolean(
    process.env.SUPABASE_URL &&
      (process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY),
  );
}

export async function supabaseRequest<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const url = process.env.SUPABASE_URL;
  const key =
    process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Database is not configured.");
  }

  const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/${path}`, {
    ...init,
    headers: {
      ...jsonHeaders,
      apikey: key,
      Authorization: `Bearer ${key}`,
      ...(init.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Supabase request failed: ${response.status} ${body.slice(0, 400)}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}
