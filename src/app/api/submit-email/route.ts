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
    desc: "Câu trả lời hiện tại gợi ý rằng bạn có thể nhạy cảm với dấu hiệu xa cách, điều chưa chắc chắn hoặc khả năng một mối quan hệ không còn an toàn như trước.",
    gift: "Bạn có thể chú ý sớm đến những thay đổi trong mối quan hệ và chủ động tìm kiếm kết nối khi cảm thấy bất an.",
    challenge: "Hãy quan sát lúc nhu cầu được trấn an xuất hiện và thử phân biệt điều đang xảy ra với kịch bản bạn đang lo lắng.",
  },
  "ne-tranh": {
    name: "Né Tránh",
    desc: "Câu trả lời hiện tại gợi ý rằng bạn có thể coi trọng không gian cá nhân và có xu hướng tạo khoảng cách hoặc tự xử lý khi cảm thấy áp lực.",
    gift: "Bạn có thể tự chủ, tập trung vào giải pháp và nhận biết khá rõ nhu cầu về không gian riêng.",
    challenge: "Hãy quan sát lúc bạn muốn lùi lại để phân biệt mình đang cần không gian, sự rõ ràng hay một cách kết nối an toàn hơn.",
  },
  "kiem-soat": {
    name: "Kiểm Soát",
    desc: "Câu trả lời hiện tại gợi ý rằng bạn có thể coi trọng sự rõ ràng, kế hoạch và khả năng dự đoán điều sẽ xảy ra.",
    gift: "Bạn có thể lập kế hoạch kỹ, chú ý đến rủi ro và tập trung vào giải pháp khi gặp khó khăn.",
    challenge: "Hãy quan sát khi nào việc chuẩn bị đang hỗ trợ bạn và khi nào nhu cầu chắc chắn khiến bạn khó linh hoạt trước thay đổi.",
  },
  "hy-sinh": {
    name: "Hy Sinh",
    desc: "Câu trả lời hiện tại gợi ý rằng bạn có thể thường chú ý đến nhu cầu của người khác và đôi khi thấy khó nói không hoặc ưu tiên bản thân.",
    gift: "Bạn sẵn sàng quan tâm, hỗ trợ người khác và coi trọng sự gắn kết trong các mối quan hệ.",
    challenge: "Hãy quan sát khi nào bạn giúp vì thật sự muốn và khi nào bạn đồng ý vì cảm thấy có lỗi hoặc lo người khác thất vọng.",
  },
  "tu-huy": {
    name: "Tự Hủy",
    desc: "Câu trả lời hiện tại gợi ý rằng bạn có thể trì hoãn, mất đà hoặc làm gián đoạn tiến trình khi điều mình muốn trở nên quan trọng.",
    gift: "Bạn có thể bắt đầu bằng việc nhận ra những thời điểm mình mất đà và nhìn thẳng vào điều mình muốn thay đổi.",
    challenge: "Nguyên nhân có thể khác nhau. Hãy xem những cảm xúc hoặc suy nghĩ xuất hiện trước lúc trì hoãn như giả thuyết để quan sát, không phải kết luận đã được chứng minh.",
  },
  "can-bang": {
    name: "Cân Bằng",
    desc: "Câu trả lời hiện tại cho thấy bạn đã chọn nhiều cách phản ứng tương đối linh hoạt hoặc phù hợp với hoàn cảnh.",
    gift: "Bạn có thể cân nhắc phản hồi, điều chỉnh mục tiêu hoặc giao tiếp rõ ràng trong nhiều tình huống.",
    challenge: "Điểm Cân Bằng không có nghĩa bạn không có xu hướng khác. Hãy tiếp tục quan sát những bối cảnh khiến một phản ứng cụ thể trở nên rõ hơn.",
  },
};

const noStoreHeaders = { "Cache-Control": "no-store" };
const MAX_REQUEST_BYTES = 10_000;

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
    <p style="margin:0;font-size:14px;color:#166534">✅ Chỉ liên hệ để hỗ trợ nội dung khách đã yêu cầu. Không gửi nội dung tiếp thị nếu chưa có sự đồng ý riêng.</p>
  </div>

  <p style="color:#9B96C0;font-size:12px;text-align:center">AIMIND · aimind.hcm@gmail.com</p>
</div>`;
}

function createCustomerEmail(
  archetypeKey: string,
  archetypeName: string,
  appUrl: string,
): string {
  const a = ARCHETYPE_LABELS[archetypeKey];
  const name = a?.name || archetypeName || archetypeKey;
  return `
<div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px">
  <div style="background:linear-gradient(135deg,#2D2A5E,#1C1A3E);border-radius:16px;padding:32px;color:white;text-align:center;margin-bottom:28px">
    <p style="color:#B8B3FA;font-size:12px;margin:0 0 12px;text-transform:uppercase;letter-spacing:0.1em">Kết quả Bản Đồ Nội Tâm</p>
    <h1 style="margin:0;font-size:26px;font-weight:800">Mô thức nổi bật trong câu trả lời:</h1>
    <h2 style="margin:8px 0 0;font-size:32px;font-weight:900;color:#B8B3FA">${name}</h2>
  </div>

  <div style="background:#F8F4EE;border:1px solid #E8E3F0;border-radius:12px;padding:16px;margin-bottom:24px">
    <p style="color:#6B678F;font-size:13px;line-height:1.7;margin:0">Bản đồ này không phải chẩn đoán tâm lý. Kết quả phản ánh những xu hướng nổi bật trong câu trả lời của bạn tại thời điểm làm bài. Hãy xem chúng như những giả thuyết để tự quan sát, không phải một nhãn cố định về con người bạn.</p>
  </div>

  ${a ? `
  <div style="margin-bottom:24px">
    <p style="color:#1C1A3E;font-size:16px;line-height:1.8">${a.desc}</p>
  </div>

  <div style="border:1px solid #E8E3F0;border-radius:12px;padding:20px;margin-bottom:16px">
    <p style="color:#7C6FF7;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 8px">Nguồn lực có thể đi cùng xu hướng này</p>
    <p style="color:#1C1A3E;font-size:15px;line-height:1.75;margin:0">${a.gift}</p>
  </div>

  <div style="border:1px solid #E8E3F0;border-radius:12px;padding:20px;margin-bottom:28px">
    <p style="color:#E85A71;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 8px">Điều bạn có thể quan sát tiếp</p>
    <p style="color:#1C1A3E;font-size:15px;line-height:1.75;margin:0">${a.challenge}</p>
  </div>
  ` : ""}

  <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:12px;padding:20px;margin-bottom:20px">
    <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#166534">🎁 Công cụ thực hành miễn phí dành cho bạn</p>
    <p style="margin:0 0 14px;font-size:13px;color:#1C4A48;line-height:1.6">Nhật ký quan sát mô thức ${name} — 3 buổi/ngày, câu hỏi được thiết kế riêng cho mô thức của bạn. Dùng miễn phí, không cần đăng ký.</p>
    <a href="${appUrl}/thuc-hanh?mo-thuc=${archetypeKey}" style="display:inline-block;background:#166534;color:white;padding:10px 22px;border-radius:999px;text-decoration:none;font-weight:700;font-size:13px">Mở công cụ thực hành →</a>
  </div>

  <div style="background:#1C1A3E;border-radius:12px;padding:20px;margin-bottom:16px">
    <p style="color:#C4C0E0;font-size:13px;font-weight:700;margin:0 0 8px">📖 Hướng dẫn sử dụng công cụ</p>
    <ul style="color:#9B96C0;font-size:13px;line-height:1.8;margin:0;padding-left:18px">
      <li>Dùng <strong style="color:white">3 lần mỗi ngày</strong>: sáng – giữa ngày – tối</li>
      <li>Viết thật, không cần hoàn hảo — không ai đọc câu trả lời của bạn</li>
      <li>Làm mỗi ngày trong <strong style="color:white">21 ngày</strong> để nhận ra khuôn mẫu rõ hơn</li>
      <li>Sao chép câu trả lời vào note riêng để đọc lại</li>
    </ul>
  </div>

  <div style="background:#1C1A3E;border-radius:12px;padding:20px;text-align:center;margin-bottom:20px">
    <p style="color:#C4C0E0;font-size:13px;line-height:1.75;margin:0 0 14px">Muốn đi sâu hơn vào mô thức của mình? Nhắn trực tiếp cho Hanna.</p>
    <a href="https://zalo.me/0848270819" style="display:inline-block;background:linear-gradient(135deg,#7C6FF7,#5B4FD4);color:white;padding:11px 24px;border-radius:999px;text-decoration:none;font-weight:700;font-size:13px">Nhắn Zalo với Hanna →</a>
  </div>

  <p style="color:#9B96C0;font-size:12px;text-align:center">Hanna Dang — AIMIND · aimind.hcm@gmail.com · Zalo: 0848270819</p>
</div>`;
}

export async function POST(request: NextRequest) {
  try {
    if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
      return NextResponse.json(
        { error: "Unsupported media type" },
        { status: 415, headers: noStoreHeaders },
      );
    }

    const contentLength = Number(request.headers.get("content-length") ?? "0");
    if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
      return NextResponse.json(
        { error: "Request too large" },
        { status: 413, headers: noStoreHeaders },
      );
    }

    const body = await request.json() as {
      email: string;
      phone?: string;
      archetypeKey: string;
      archetypeName?: string;
    };

    const { email, phone, archetypeKey, archetypeName = "" } = body;

    const normalizedEmail = typeof email === "string" ? email.trim() : "";
    const normalizedPhone = typeof phone === "string" ? phone.trim() : "";
    const hasKnownArchetype = Object.prototype.hasOwnProperty.call(
      ARCHETYPE_LABELS,
      archetypeKey,
    );
    const validEmail =
      normalizedEmail.length <= 254 &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(normalizedEmail);
    const validPhone =
      !normalizedPhone || /^[0-9 +\-]{9,12}$/.test(normalizedPhone);

    if (!validEmail || !validPhone || !hasKnownArchetype) {
      return NextResponse.json(
        { error: "Thông tin không hợp lệ" },
        { status: 400, headers: noStoreHeaders },
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;

    if (!gmailUser || !gmailPass) {
      console.warn("GMAIL_USER / GMAIL_PASS chưa được cấu hình trong Vercel");
      return NextResponse.json(
        { error: "Email service unavailable" },
        { status: 503, headers: noStoreHeaders },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailPass.replace(/\s/g, ""), // bỏ dấu cách nếu có
      },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });

    // Verify connection trước khi gửi
    await transporter.verify();

    const timestamp = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
    const configuredAppUrl = process.env.NEXT_PUBLIC_APP_URL?.trim().replace(/\/$/, "");
    const appUrl = configuredAppUrl || request.nextUrl.origin;

    // 1. Thông báo cho Hanna
    await transporter.sendMail({
      from: `"AIMIND Website" <${gmailUser}>`,
      to: gmailUser,
      subject: `[AIMIND] Khách mới: ${ARCHETYPE_LABELS[archetypeKey].name} — ${normalizedEmail}`,
      html: createHannaEmail(normalizedEmail, normalizedPhone, archetypeKey, archetypeName, timestamp),
    });

    // 2. Email kết quả cho khách
    await transporter.sendMail({
      from: `"Hanna Dang — AIMIND" <${gmailUser}>`,
      to: normalizedEmail,
      replyTo: gmailUser,
      subject: `Kết quả Bản Đồ Nội Tâm: ${ARCHETYPE_LABELS[archetypeKey].name}`,
      html: createCustomerEmail(archetypeKey, archetypeName, appUrl),
    });

    return NextResponse.json({ success: true }, { headers: noStoreHeaders });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Thông tin không hợp lệ" },
        { status: 400, headers: noStoreHeaders },
      );
    }

    console.error("Email send failed");
    return NextResponse.json(
      { error: "Lỗi gửi email" },
      { status: 500, headers: noStoreHeaders },
    );
  }
}
