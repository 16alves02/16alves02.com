import { NextResponse } from "next/server";
import {
  adminCookie,
  createAdminSession,
  verifyPassword,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const password = typeof body.password === "string" ? body.password : "";

    if (!process.env.ADMIN_PASSWORD || !process.env.ADMIN_SESSION_SECRET) {
      return NextResponse.json(
        { message: "Admin authentication is not configured." },
        { status: 503 },
      );
    }

    if (!(await verifyPassword(password))) {
      return NextResponse.json(
        { message: "Invalid password." },
        { status: 401 },
      );
    }

    const session = await createAdminSession();
    const response = NextResponse.json({ ok: true });

    response.cookies.set({
      name: adminCookie,
      value: session.value,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: new Date(session.expiresAt),
    });

    return response;
  } catch {
    return NextResponse.json(
      { message: "Unable to sign in." },
      { status: 400 },
    );
  }
}
