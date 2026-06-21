import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─── API: Submit Email + Phone Capture ───────────────────────────────────────
// Nhận email, phone, archetypeKey từ quiz result page
// Gửi 2 email qua Web3Forms:
//   1. Thông báo cho Hanna (aimind.hcm@gmail.com)
//   2. Email kết quả cho khách

const ARCHETYPE_DATA: Record<string, { name: string; emoji: string; description: string; gift: string; challenge: string }> = {
  "the-architect": {
    name: "Kiến Trúc Sư",
    emoji: "🏛️",
    description: "Bạn nhìn thế giới bằng hệ thống và cấu trúc. Bạn có khả năng đặc biệt trong việc nhìn thấy pattern mà người khác bỏ qua.",
    gift: "Tư duy hệ thống, khả năng lập kế hoạch và thiết kế giải pháp phức tạp.",
    challenge: "Đôi khi bị kẹt trong vòng lặp phân tích — khó hành động khi chưa có đủ dữ liệu.",
  },
  "the-empath": {
    name: "Người Đồng Cảm",
    emoji: "💙",
    description: "Bạn cảm nhận được cảm xúc của người khác như thể chúng là của chính mình. Đây là món quà hiếm có.",
    gift: "Kết nối sâu, sự thấu hiểu và khả năng chữa lành trong mối quan hệ.",
    challenge: "Ranh giới cảm xúc mờ nhạt — dễ mang nặng cảm xúc người khác và kiệt sức.",
  },
  "the-pioneer": {
    name: "Người Tiên Phong",
    emoji: "🚀",
    description: "Bạn luôn nhìn về phía trước và sống trong thế giới của những khả năng. Bạn thấy cơ hội khi người khác thấy rào cản.",
    gift: "Sáng tạo, dũng cảm thử nghiệm và khả năng truyền cảm hứng.",
    challenge: "Khó duy trì khi hứng khởi qua đi — bắt đầu nhiều, hoàn thành ít.",
  },
  "the-guardian": {
    name: "Người Bảo Vệ",
    emoji: "🛡️",
    description: "Bạn có bản năng bảo vệ mạnh mẽ — với người thân, với giá trị, với những gì bạn tin là đúng.",
    gift: "Trung thành, đáng tin cậy và tạo ra môi trường an toàn cho người xung quanh.",
    challenge: "Xu hướng kiểm soát xuất phát từ nỗi sợ mất mát — đôi khi cản trở sự tự do của bản thân và người khác.",
  },
  "the-sage": {
    name: "Người Thông Thái",
    emoji: "🌿",
    description: "Bạn tìm kiếm ý nghĩa sâu xa trong mọi thứ. Bạn không dừng lại ở bề mặt — bạn muốn hiểu tại sao.",
    gift: "Chiều sâu tư duy, khả năng tổng hợp kiến thức và truyền đạt insight.",
    challenge: "Xu hướng cô lập khi bị áp lực — rút vào thế giới nội tâm thay vì kết nối.",
  },
  "the-alchemist": {
    name: "Người Chuyển Hóa",
    emoji: "⚗️",
    description: "Bạn có khả năng biến khó khăn thành bài học và đau thương thành sức mạnh.",
    gift: "Khả năng phục hồi phi thường, tư duy tăng trưởng và truyền cảm hứng chuyển hóa.",
    challenge: "Đôi khi tìm kiếm khủng hoảng để cảm thấy sống — khó tìm bình yên trong sự ổn định.",
  },
  "the-connector": {
    name: "Người Kết Nối",
    emoji: "🤝",
    description: "Bạn tự nhiên kéo mọi người lại gần nhau. Bạn thấy giá trị trong từng người và biết cách tạo ra cộng đồng.",
    gift: "Networking tự nhiên, khả năng tạo sự hòa hợp và xây dựng cộng đồng.",
    challenge: "Sợ xung đột — đôi khi hy sinh nhu cầu bản thân để giữ hòa khí.",
  },
  "the-rebel": {
    name: "Người Phá Vỡ",
    emoji: "⚡",
    description: "Bạn không thể chấp nhận thứ không có lý do tồn tại. Bạn thách thức các quy ước và mở đường mới.",
    gift: "Tư duy độc lập, dũng cảm nói sự thật và khả năng tạo ra thay đổi hệ thống.",
    challenge: "Kháng cự có thể trở thành phản xạ — đôi khi chống lại thứ tốt chỉ vì nó là quy tắc.",
  },
  "the-dreamer": {
    name: "Người Mơ Mộng",
    emoji: "✨",
    description: "Bạn sống trong thế giới của hình ảnh, cảm xúc và khả năng vô tận. Bạn thấy cái đẹp ở những nơi người khác không ngờ.",
    gift: "Trí tưởng tượng phong phú, sáng tạo nghệ thuật và khả năng truyền cảm hứng.",
    challenge: "Khoảng cách giữa ý tưởng và thực tế — khó hiện thực hóa những gì bạn thấy trong đầu.",
  },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as {
      email: string;
      phone?: string;
      archetypeKey: string;
      archetypeName?: string;
      source?: string;
    };

    const { email, phone, archetypeKey, archetypeName } = body;

    if (!email || !archetypeKey) {
      return NextResponse.json(
        { error: "Email và archetypeKey là bắt buộc" },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    const archetype = ARCHETYPE_DATA[archetypeKey] || {
      name: archetypeName || archetypeKey,
      emoji: "🌟",
      description: "",
      gift: "",
      challenge: "",
    };

    const resolvedName = archetype.name;
    const timestamp = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

    // ── 1. Gửi thông báo cho Hanna ────────────────────────────────────────
    if (accessKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `[AIMIND] Khách mới làm bài test: ${resolvedName} — ${email}`,
            from_name: "AIMIND Website",
            message: [
              `📬 Khách hàng mới vừa hoàn thành bài test Bản Đồ Nội Tâm`,
              ``,
              `📧 Email: ${email}`,
              `📱 Số điện thoại: ${phone || "Chưa cung cấp"}`,
              `🎭 Bản dạng: ${archetype.emoji} ${resolvedName} (${archetypeKey})`,
              `⏰ Thời gian: ${timestamp}`,
              ``,
              `👉 Hành động tiếp theo:`,
              `- Gửi app thực hành cho khách qua Zalo/Email`,
              `- Follow up coaching nếu phù hợp`,
            ].join("\n"),
          }),
        });
      } catch (err) {
        console.warn("Web3Forms Hanna notification failed:", err);
      }

      // ── 2. Gửi email kết quả cho khách ────────────────────────────────────
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `Kết quả Bản Đồ Nội Tâm của bạn: ${archetype.emoji} ${resolvedName}`,
            from_name: "Hanna Dang — AIMIND",
            to: email,
            replyto: "aimind.hcm@gmail.com",
            message: [
              `Xin chào,`,
              ``,
              `Cảm ơn bạn đã hoàn thành bài test Bản Đồ Nội Tâm tại AIMIND.`,
              ``,
              `━━━━━━━━━━━━━━━━━━━━━━━━`,
              `Bản dạng của bạn: ${archetype.emoji} ${resolvedName}`,
              `━━━━━━━━━━━━━━━━━━━━━━━━`,
              ``,
              `${archetype.description}`,
              ``,
              `🎁 Điểm mạnh của bạn:`,
              `${archetype.gift}`,
              ``,
              `⚠️ Thách thức cần nhận diện:`,
              `${archetype.challenge}`,
              ``,
              `━━━━━━━━━━━━━━━━━━━━━━━━`,
              ``,
              `Bước tiếp theo:`,
              `→ Nhắn tin Hanna qua Zalo 0848270819 để nhận app thực hành cá nhân`,
              `→ Tìm hiểu khóa học Bản Đồ Nội Tâm Chuyên Sâu: https://aimind-website.vercel.app/hanh-trinh/khoa-hoc`,
              ``,
              `Trân trọng,`,
              `Hanna Dang — AIMIND`,
              `Zalo: 0848270819 | Email: aimind.hcm@gmail.com`,
            ].join("\n"),
          }),
        });
      } catch (err) {
        console.warn("Web3Forms customer email failed:", err);
      }
    } else {
      console.warn("WEB3FORMS_ACCESS_KEY not set — email not sent");
    }

    console.log("Quiz submission:", { email, phone, archetypeKey });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submit email error:", error);
    return NextResponse.json(
      { error: "Lỗi server. Vui lòng thử lại." },
      { status: 500 }
    );
  }
}
