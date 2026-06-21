import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

// ─── API: Gửi email qua Gmail SMTP ───────────────────────────────────────────
// Env cần có trong Vercel:
//   GMAIL_USER  = aimind.hcm@gmail.com
//   GMAIL_PASS  = app password 16 ký tự từ Google

const ARCHETYPE_LABELS: Record<string, { name: string; desc: string; gift: string; challenge: string }> = {
  "lo-au": {
    name: "Lo Âu",
    desc: "Bạn luôn sẵn sàng cho điều tệ nhất — não bạn đang hoạt động ở chế độ bảo vệ liên tục.",
    gift: "Cẩn thận, chu đáo, nhạy bén với rủi ro. Bạn thường là người phát hiện vấn đề trước khi nó xảy ra.",
    challenge: "Khó tận hưởng hiện tại vì luôn lo về tương lai. Cần học cách phân biệt mối lo có thực và mối lo do não tự tạo ra.",
  },
  "ne-tranh": {
    name: "Né Tránh",
    desc: "Bạn ưu tiên hòa khí và tránh đối đầu — thường hi sinh nhu cầu mình để giữ không khí bình yên.",
    gift: "Khả năng thấu cảm, không phán xét, tạo không gian an toàn cho người khác.",
    challenge: "Nhu cầu và cảm xúc thật của bạn bị chôn vùi theo thời gian. Xung đột né tránh không biến mất — nó tích lũy.",
  },
  "kiem-soat": {
    name: "Kiểm Soát",
    desc: "Bạn cần mọi thứ trong tầm kiểm soát — không chắc chắn tạo ra lo lắng sâu.",
    gift: "Có tổ chức, đáng tin cậy, khả năng lập kế hoạch và thực thi xuất sắc.",
    challenge: "Kiểm soát thái quá có thể gây stress cho bạn và người xung quanh. Gốc rễ thường là nỗi sợ mất an toàn.",
  },
  "hy-sinh": {
    name: "Hy Sinh",
    desc: "Bạn đặt người khác lên trước — cảm giác có lỗi khi nghĩ đến nhu cầu của chính mình.",
    gift: "Hào phóng, quan tâm sâu sắc, tạo ra giá trị thật cho người xung quanh.",
    challenge: "Cho đi liên tục mà không nhận lại dẫn đến kiệt sức và oán trách ngầm.",
  },
  "tu-huy": {
    name: "Tự Hủy",
    desc: "Bạn có xu hướng tự phá hoại những điều tốt đẹp khi chúng gần đến tay.",
    gift: "Tự nhận thức cao, trung thực với bản thân, nhạy cảm với sự giả dối.",
    challenge: "Vô thức tin rằng mình không xứng đáng — cần nhận diện cơ chế này trước khi nó vận hành.",
  },
  "can-bang": {
    name: "Cân Bằng",
    desc: "Bạn đang trong quá trình tích hợp — đã nhận ra mô thức của mình và đang tìm cách thay đổi.",
    gift: "Khả năng tự quan sát và điều chỉnh. Đây là điểm khởi đầu của chuyển hóa thật.",
    challenge: "Duy trì hành trình khi không có áp lực bên ngoài. Thay đổi cần nhất quán hơn cần cường độ.",
  },
};

function createHannaEmail(
  email: string,
  phone: string,
  archetypeKey: string,
  archetypeName: string,
  timestamp: string
): string {
  const a = ARCHETYPE_LABELS[archetypeKey];
  const name = a?.name || archetypeName || archetypeKey;
  return `
<div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px">
  <div style="background:#1C1A3E;border-radius:12px;padding:24px;color:white;margin-bottom:24px">
    <p style="color:#B8B3FA;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.1em">AIMIND — Khách mới</p>
    <h2 style="margin:0;font-size:20px">Mô thức: ${name}</h2>
    <p style="color:#9B96C0;font-size:13px;margin:8px 0 0">${timestamp}</p>
  </div>

  <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
    <tr><td style="padding:12px;border:1px solid #E8E3F0;background:#F8F4EE;font-weight:600;width:120px">Email</td><td style="padding:12px;border:1px solid #E8E3F0">${email}</td></tr>
    <tr><td style="padding:12px;border:1px solid #E8E3F0;background:#F8F4EE;font-weight:600">Điện thoại</td><td style="padding:12px;border:1px solid #E8E3F0">${phone || "Chưa cung cấp"}</td></tr>
    <tr><td style="padding:12px;border:1px solid #E8E3F0;background:#F8F4EE;font-weight:600">Mô thức</td><td style="padding:12px;border:1px solid #E8E3F0"><strong>${name}</strong> (${archetypeKey})</td></tr>
  </table>

  <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:8px;padding:16px;margin-bottom:16px">
    <p style="margin:0;font-size:14px;color:#166534">✅ Hành động tiếp theo: Nhắn Zalo/email cho khách, gửi tài liệu thực hành và offer coaching nếu phù hợp.</p>
  </div>

  <p style="color:#9B96C0;font-size:12px;text-align:center">AIMIND · aimind.hcm@gmail.com</p>
</div>`;
}

function createCustomerEmail(
  archetypeKey: string,
  archetypeName: string
): string {
  const a = ARCHETYPE_LABELS[archetypeKey];
  const name = a?.name || archetypeName || archetypeKey;
  return `
<div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px">
  <div style="background:linear-gradient(135deg,#2D2A5E,#1C1A3E);border-radius:16px;padding:32px;color:white;text-align:center;margin-bottom:28px">
    <p style="color:#B8B3FA;font-size:12px;margin:0 0 12px;text-transform:uppercase;letter-spacing:0.1em">Kết quả Bản Đồ Nội Tâm</p>
    <h1 style="margin:0;font-size:26px;font-weight:800">Mô thức của bạn:</h1>
    <h2 style="margin:8px 0 0;font-size:32px;font-weight:900;color:#B8B3FA">${name}</h2>
  </div>

  ${a ? `
  <div style="margin-bottom:24px">
    <p style="color:#1C1A3E;font-size:16px;line-height:1.8">${a.desc}</p>
  </div>

  <div style="border:1px solid #E8E3F0;border-radius:12px;padding:20px;margin-bottom:16px">
    <p style="color:#7C6FF7;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 8px">Điểm mạnh của bạn</p>
    <p style="color:#1C1A3E;font-size:15px;line-height:1.75;margin:0">${a.gift}</p>
  </div>

  <div style="border:1px solid #E8E3F0;border-radius:12px;padding:20px;margin-bottom:28px">
    <p style="color:#E85A71;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 8px">Thách thức cần nhận diện</p>
    <p style="color:#1C1A3E;font-size:15px;line-height:1.75;margin:0">${a.challenge}</p>
  </div>
  ` : ""}

  <div style="background:#1C1A3E;border-radius:12px;padding:24px;text-align:center;margin-bottom:24px">
    <p style="color:#C4C0E0;font-size:14px;line-height:1.75;margin:0 0 16px">Muốn đi sâu hơn vào mô thức của mình? Nhắn trực tiếp cho Hanna.</p>
    <a href="https://zalo.me/0848270819" style="display:inline-block;background:linear-gradient(135deg,#7C6FF7,#5B4FD4);color:white;padding:12px 28px;border-radius:999px;text-decoration:none;font-weight:700;font-size:14px">Nhắn Zalo với Hanna →</a>
  </div>

  <p style="color:#9B96C0;font-size:12px;text-align:center">Hanna Dang — AIMIND · aimind.hcm@gmail.com · Zalo: 0848270819</p>
</div>`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as {
      email: string;
      phone?: string;
      archetypeKey: string;
      archetypeName?: string;
    };

    const { email, phone, archetypeKey, archetypeName = "" } = body;

    if (!email || !archetypeKey) {
      return NextResponse.json({ error: "Thiếu thông tin" }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;

    if (!gmailUser || !gmailPass) {
      console.warn("GMAIL_USER / GMAIL_PASS chưa được cấu hình trong Vercel");
      return NextResponse.json({ success: true, warn: "email_not_configured" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailPass.replace(/\s/g, ""), // bỏ dấu cách nếu có
      },
    });

    // Verify connection trước khi gửi
    await transporter.verify();

    const timestamp = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

    // 1. Thông báo cho Hanna
    await transporter.sendMail({
      from: `"AIMIND Website" <${gmailUser}>`,
      to: gmailUser,
      subject: `[AIMIND] Khách mới: ${ARCHETYPE_LABELS[archetypeKey]?.name || archetypeName} — ${email}`,
      html: createHannaEmail(email, phone ?? "", archetypeKey, archetypeName, timestamp),
    });

    // 2. Email kết quả cho khách
    await transporter.sendMail({
      from: `"Hanna Dang — AIMIND" <${gmailUser}>`,
      to: email,
      replyTo: gmailUser,
      subject: `Kết quả Bản Đồ Nội Tâm: ${ARCHETYPE_LABELS[archetypeKey]?.name || archetypeName}`,
      html: createCustomerEmail(archetypeKey, archetypeName),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Lỗi gửi email" }, { status: 500 });
  }
}
