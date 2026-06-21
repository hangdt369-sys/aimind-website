import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_PASS;

  if (!gmailUser || !gmailPass) {
    return NextResponse.json({ error: "Chưa có GMAIL_USER hoặc GMAIL_PASS trong env" }, { status: 500 });
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

    return NextResponse.json({ success: true, sentTo: gmailUser });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
