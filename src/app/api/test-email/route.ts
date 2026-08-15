import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

// ─── PROTECTED: Debug endpoint — chỉ dùng nội bộ ────────────────────────────
// Yêu cầu header: x-admin-secret = ADMIN_SECRET env var
// Nếu không có header đúng → trả về 404 (không lộ endpoint tồn tại)

export async function GET(request: NextRequest) {
  // Guard: kiểm tra secret header trước
  const adminSecret = process.env.ADMIN_SECRET;
  const providedSecret = request.headers.get("x-admin-secret");

  if (!adminSecret || providedSecret !== adminSecret) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_PASS;

  // Debug: cho biết env vars có tồn tại không (không lộ giá trị thật)
  const debug = {
    GMAIL_USER_exists: !!gmailUser,
    GMAIL_USER_value: gmailUser ? `${gmailUser.slice(0, 4)}...` : "KHÔNG CÓ",
    GMAIL_PASS_exists: !!gmailPass,
    GMAIL_PASS_length: gmailPass ? gmailPass.replace(/\s/g, "").length : 0,
    NODE_ENV: process.env.NODE_ENV,
  };

  if (!gmailUser || !gmailPass) {
    return NextResponse.json({ error: "Chưa có env vars", debug }, { status: 500 });
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

    return NextResponse.json({ success: true, sentTo: gmailUser, debug });
  } catch (error) {
    return NextResponse.json({ error: String(error), debug }, { status: 500 });
  }
}
