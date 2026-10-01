import { cookies } from "next/headers";

const COOKIE_NAME = "16alves02_admin";
const SESSION_DAYS = 7;

function bytesEqual(a: Uint8Array, b: Uint8Array) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let index = 0; index < a.length; index += 1) {
    diff |= a[index] ^ b[index];
  }
  return diff === 0;
}

function hexToBytes(value: string) {
  const pairs = value.match(/.{1,2}/g) ?? [];
  return new Uint8Array(pairs.map((pair) => parseInt(pair, 16)));
}

async function sign(value: string) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("Admin session secret is not configured.");

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(value),
  );

  return Array.from(new Uint8Array(signature))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function verifyPassword(password: string) {
  const configured = process.env.ADMIN_PASSWORD;
  if (!configured) return false;

  const [left, right] = await Promise.all([
    crypto.subtle.digest("SHA-256", new TextEncoder().encode(password)),
    crypto.subtle.digest("SHA-256", new TextEncoder().encode(configured)),
  ]);

  return bytesEqual(new Uint8Array(left), new Uint8Array(right));
}

export async function createAdminSession() {
  const expiresAt = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  const payload = String(expiresAt);
  const signature = await sign(payload);
  return { value: `${payload}.${signature}`, expiresAt };
}

export async function hasAdminSession() {
  const cookieStore = await cookies();
  const value = cookieStore.get(COOKIE_NAME)?.value;
  if (!value) return false;

  const [expiresAtRaw, signature] = value.split(".");
  const expiresAt = Number(expiresAtRaw);

  if (!expiresAt || expiresAt < Date.now() || !signature) {
    return false;
  }

  const expected = await sign(expiresAtRaw);
  return bytesEqual(hexToBytes(expected), hexToBytes(signature));
}

export const adminCookie = COOKIE_NAME;
