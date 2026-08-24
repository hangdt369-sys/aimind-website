import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

const noStoreHeaders = { "Cache-Control": "no-store" };

// ─── PROTECTED: Debug endpoint — chỉ dùng nội bộ ────────────────────────────
// Yêu cầu header: x-admin-secret = ADMIN_SECRET env var
// Nếu không có header đúng → trả về 404 (không lộ endpoint tồn tại)

export async function GET(request: NextRequest) {
  // Guard: kiểm tra secret header trước
  const adminSecret = process.env.ADMIN_SECRET;
  const providedSecret = request.headers.get("x-admin-secret");

  if (!adminSecret || providedSecret !== adminSecret) {
    return NextResponse.json(
      { error: "Not found" },
      { status: 404, headers: noStoreHeaders },
    );
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_PASS;

  if (!gmailUser || !gmailPass) {
    return NextResponse.json(
      { error: "Email test unavailable" },
      { status: 500, headers: noStoreHeaders },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailPass.replace(/\s/g, ""),
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"AIMIND Test" <${gmailUser}>`,
      to: gmailUser,
      subject: "✅ AIMIND Email Test",
      text: "Email đang hoạt động đúng!",
    });

    return NextResponse.json(
      { success: true },
      { headers: noStoreHeaders },
    );
  } catch {
    return NextResponse.json(
      { error: "Email test failed" },
      { status: 500, headers: noStoreHeaders },
    );
  }
}
