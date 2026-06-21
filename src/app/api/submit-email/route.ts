import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

// ─── API: Submit Email + Phone Capture ───────────────────────────────────────
// Gửi 2 email: xác nhận tới khách + thông báo tới Hanna
// Env vars cần thiết (Vercel → Settings → Environment Variables):
//   GMAIL_USER         = aimind.hcm@gmail.com
//   GMAIL_APP_PASSWORD = (16 ký tự, xem hướng dẫn bên dưới)

const HANNA_EMAIL = "aimind.hcm@gmail.com";

const ARCHETYPE_LABELS: Record<string, string> = {
  "lo-au": "Người Lo Âu Gắn Bó",
  "tranh-ne": "Người Né Tránh Cảm Xúc",
  "hoan-hao": "Người Cầu Toàn",
  "hy-sinh": "Người Hy Sinh",
  "can-bang": "Người Cân Bằng",
  "tu-lap": "Người Tự Lập",
};

function createTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

// Email gửi cho khách hàng
function buildCustomerEmail(
  archetypeName: string,
  archetypeKey: string
): string {
  const zaLoLink = "https://zalo.me/0848270819";
  const siteUrl = "https://aimind.com.vn";
  const testUrl = `${siteUrl}/kham-pha/ket-qua?pattern=${archetypeKey}`;

  return `
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kết quả Bản Đồ Nội Tâm của bạn</title>
</head>
<body style="margin:0;padding:0;background:#F8F4EE;font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:32px 16px;">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#2D2A5E 0%,#1C1A3E 100%);border-radius:16px;padding:32px 28px;text-align:center;margin-bottom:24px;">
      <div style="display:inline-block;background:linear-gradient(135deg,#7C6FF7,#18B5B0);border-radius:8px;padding:6px 14px;color:white;font-weight:800;font-size:18px;letter-spacing:2px;margin-bottom:16px;">AI MIND</div>
      <h1 style="color:white;font-size:22px;font-weight:800;margin:0 0 8px;">Mô thức của bạn đã được phân tích</h1>
      <p style="color:#C4C0E0;font-size:14px;margin:0;">Bản Đồ Nội Tâm · AIMIND</p>
    </div>

    <!-- Archetype result -->
    <div style="background:white;border-radius:16px;padding:28px;border:1px solid #E8E3F0;margin-bottom:20px;">
      <p style="color:#6B678F;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 8px;">Mô thức cốt lõi của bạn</p>
      <h2 style="color:#1C1A3E;font-size:24px;font-weight:800;margin:0 0 16px;">${archetypeName}</h2>
      <p style="color:#4A4570;font-size:15px;line-height:1.75;margin:0 0 20px;">
        Mô thức này đang âm thầm định hình cách bạn phản ứng trong tình huống áp lực, 
        cách bạn yêu, cách bạn làm việc — và cả những quyết định bạn đưa ra mà không biết tại sao.
      </p>
      <a href="${testUrl}" style="display:inline-block;background:linear-gradient(135deg,#7C6FF7,#5B4FD4);color:white;padding:12px 24px;border-radius:999px;text-decoration:none;font-weight:700;font-size:14px;">
        Xem lại kết quả đầy đủ →
      </a>
    </div>

    <!-- Next steps -->
    <div style="background:#EAE8FE;border-radius:16px;padding:24px;border:1px solid rgba(124,111,247,0.2);margin-bottom:20px;">
      <h3 style="color:#5B4FD4;font-size:15px;font-weight:700;margin:0 0 12px;">Bước tiếp theo dành cho bạn</h3>
      <p style="color:#4A4570;font-size:14px;line-height:1.75;margin:0 0 16px;">
        Biết mô thức chỉ là bước đầu. Điều thực sự thay đổi cuộc sống là <strong>hiểu tại sao nó hình thành</strong> 
        và <strong>cách làm việc với nó</strong> — không phải chiến đấu hay chối bỏ.
      </p>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="background:white;border-radius:10px;padding:12px 16px;">
          <strong style="color:#1C1A3E;font-size:13px;">📚 Khóa học Bản Đồ Nội Tâm Chuyên Sâu</strong>
          <p style="color:#6B678F;font-size:12px;margin:4px 0 0;">8 module · Tự học · 499.000 VND</p>
        </div>
        <div style="background:white;border-radius:10px;padding:12px 16px;">
          <strong style="color:#1C1A3E;font-size:13px;">💬 Coaching 1-1 với Hanna Dang</strong>
          <p style="color:#6B678F;font-size:12px;margin:4px 0 0;">Buổi khám phá miễn phí 30 phút</p>
        </div>
      </div>
    </div>

    <!-- Zalo CTA -->
    <div style="text-align:center;margin-bottom:24px;">
      <a href="${zaLoLink}" style="display:inline-block;background:linear-gradient(135deg,#7C6FF7,#5B4FD4);color:white;padding:14px 32px;border-radius:999px;text-decoration:none;font-weight:700;font-size:15px;">
        Nhắn tin Hanna qua Zalo
      </a>
      <p style="color:#9B96C0;font-size:12px;margin:8px 0 0;">Hỏi bất cứ điều gì về kết quả của bạn</p>
    </div>

    <!-- Footer -->
    <div style="text-align:center;padding-top:16px;border-top:1px solid #E8E3F0;">
      <p style="color:#9B96C0;font-size:12px;line-height:1.6;margin:0;">
        AIMIND · aimind.com.vn<br/>
        Email: aimind.hcm@gmail.com · Zalo: 0848270819<br/>
        <a href="${siteUrl}/chinh-sach-bao-mat" style="color:#9B96C0;">Chính sách bảo mật</a>
      </p>
    </div>

  </div>
</body>
</html>
`;
}

// Email thông báo gửi cho Hanna
function buildNotificationEmail(
  customerEmail: string,
  phone: string,
  archetypeName: string,
  archetypeKey: string
): string {
  const now = new Date().toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    dateStyle: "short",
    timeStyle: "short",
  });
  return `
<!DOCTYPE html>
<html lang="vi">
<head><meta charset="UTF-8" /></head>
<body style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;padding:24px;background:#f9f9f9;">
  <div style="background:white;border-radius:12px;padding:24px;border:1px solid #e0e0e0;">
    <h2 style="color:#1C1A3E;margin:0 0 20px;">🔔 Khách hàng mới làm bài test</h2>
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:8px 0;color:#666;font-size:14px;width:120px;">Thời gian:</td><td style="padding:8px 0;color:#1C1A3E;font-size:14px;font-weight:600;">${now}</td></tr>
      <tr><td style="padding:8px 0;color:#666;font-size:14px;">Email:</td><td style="padding:8px 0;color:#1C1A3E;font-size:14px;font-weight:600;">${customerEmail}</td></tr>
      <tr><td style="padding:8px 0;color:#666;font-size:14px;">Số điện thoại:</td><td style="padding:8px 0;color:#1C1A3E;font-size:14px;font-weight:600;">${phone || "Không cung cấp"}</td></tr>
      <tr><td style="padding:8px 0;color:#666;font-size:14px;">Mô thức:</td><td style="padding:8px 0;color:#7C6FF7;font-size:14px;font-weight:700;">${archetypeName} (${archetypeKey})</td></tr>
    </table>
    <div style="margin-top:20px;padding:12px 16px;background:#EAE8FE;border-radius:8px;">
      <p style="margin:0;color:#5B4FD4;font-size:13px;">
        💡 Đây là lead tiềm năng. Nhắn tin follow-up trong 24h để tỷ lệ chuyển đổi cao nhất.
      </p>
    </div>
  </div>
</body>
</html>
`;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      email: string;
      phone?: string;
      archetypeKey: string;
      archetypeName?: string;
      source: string;
    };

    const { email, phone = "", archetypeKey, archetypeName, source } = body;

    if (!email || !archetypeKey) {
      return NextResponse.json(
        { error: "Email và archetypeKey là bắt buộc" },
        { status: 400 }
      );
    }

    const resolvedName =
      archetypeName ?? ARCHETYPE_LABELS[archetypeKey] ?? archetypeKey;

    // Log submission (always)
    console.log("New submission:", { email, phone, archetypeKey, source, time: new Date().toISOString() });

    const transporter = createTransporter();

    if (!transporter) {
      // Env vars chưa được cấu hình — vẫn trả về success để UX không bị gián đoạn
      console.warn("GMAIL_USER hoặc GMAIL_APP_PASSWORD chưa được cấu hình trong Vercel.");
      return NextResponse.json({ success: true, emailSent: false });
    }

    // Gửi email cho khách hàng
    await transporter.sendMail({
      from: `"AIMIND - Hanna Dang" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Kết quả Bản Đồ Nội Tâm của bạn: ${resolvedName}`,
      html: buildCustomerEmail(resolvedName, archetypeKey),
    });

    // Gửi thông báo cho Hanna
    await transporter.sendMail({
      from: `"AIMIND Website" <${process.env.GMAIL_USER}>`,
      to: HANNA_EMAIL,
      subject: `[Bài test] Khách mới: ${resolvedName} — ${email}`,
      html: buildNotificationEmail(email, phone, resolvedName, archetypeKey),
    });

    return NextResponse.json({ success: true, emailSent: true });
  } catch (error) {
    console.error("Email submission error:", error);
    // Không để lỗi kỹ thuật ảnh hưởng UX khách hàng
    return NextResponse.json({ success: true, emailSent: false });
  }
}
