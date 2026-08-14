import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIMIND — Bài Test Bản Đồ Nội Tâm Miễn Phí",
  description: "Làm bài test miễn phí để nhận diện khuôn mẫu hành vi đang chi phối cuộc sống của bạn. 20 câu hỏi · 15 phút · Kết quả chi tiết.",
  openGraph: {
    title: "AIMIND — Bài Test Bản Đồ Nội Tâm Miễn Phí",
    description: "Nhận diện khuôn mẫu hành vi của bạn. 20 câu · 15 phút · Miễn phí.",
  },
};


export default function HomePage() {
  return (
    <main style={{ flex: 1 }}>
        <HeroSection />
        <AboutAimindSection />
        <RecognitionSection />
        <TestPreviewSection />
        <JourneySection />
        <WhatYouGetSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
  );
}

function HeroSection() {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #1C1A3E 0%, #2D2A5E 50%, #1C1A3E 100%)",
        padding: "6rem 0 5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 20% 80%, rgba(124,111,247,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(24,181,176,0.1) 0%, transparent 50%)",
        }}
      />
      <div className="container-main" style={{ position: "relative", textAlign: "center" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(124,111,247,0.15)",
            border: "1px solid rgba(124,111,247,0.3)",
            borderRadius: "999px",
            padding: "6px 16px",
            marginBottom: "2rem",
          }}
        >
          <span style={{ color: "#18B5B0", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Awareness Intelligence Mind
          </span>
        </div>
        <h1
          style={{
            color: "white",
            fontSize: "clamp(2.2rem, 6vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            fontFamily: "'Be Vietnam Pro', sans-serif",
            letterSpacing: "-0.03em",
            maxWidth: "820px",
            margin: "0 auto 1.5rem",
          }}
        >
          Bạn đã bao giờ tự hỏi tại sao mình lại như vậy?
        </h1>
        <p
          style={{
            color: "#C4C0E0",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            lineHeight: 1.75,
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
          }}
        >
          Không phải vì bạn không đủ tốt. Mà vì bạn chưa từng có bản đồ để nhìn thấy chính mình.
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <Link
            href="/kham-pha/ban-do-noi-tam"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
              color: "white",
              padding: "16px 36px",
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: 700,
              textDecoration: "none",
              fontFamily: "'Be Vietnam Pro', sans-serif",
              boxShadow: "0 8px 32px rgba(124,111,247,0.35)",
            }}
          >
            Khám phá bản đồ nội tâm
          </Link>
          <p style={{ color: "#9B96C0", fontSize: "13px" }}>Miễn phí · 15 phút · Không cần đăng ký</p>
        </div>
        <div style={{ marginTop: "3rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" as const }}>
          {[
            { icon: "🧬", label: "Dựa trên khoa học thần kinh" },
            { icon: "🗺️", label: "Hệ thống nhận diện bản thân" },
            { icon: "🔬", label: "Tâm lý học & Khoa học thần kinh" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "16px" }}>{item.icon}</span>
              <span style={{ color: "#9B96C0", fontSize: "13px", fontWeight: 600 }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function AboutAimindSection() {
  return (
    <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
      <div className="container-main" style={{ maxWidth: "900px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{ color: "#7C6FF7", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: "0.75rem" }}>
            AIMIND là gì
          </p>
          <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.3, marginBottom: "1.25rem" }}>
            Hệ thống Identity Intelligence đầu tiên tại Việt Nam
          </h2>
          <p style={{ color: "#6B678F", fontSize: "17px", lineHeight: 1.85, maxWidth: "680px", margin: "0 auto" }}>
            AIMIND không phải bài test tính cách hay công cụ xếp loại con người. Đây là hệ thống giúp bạn nhìn thấy <strong style={{ color: "#1C1A3E" }}>bản đồ vận hành nội tâm</strong> của chính mình — những <em>khuôn mẫu hành vi</em> đang âm thầm điều khiển cách bạn suy nghĩ, cảm xúc, và phản ứng. Chúng tôi gọi những khuôn mẫu này là <strong style={{ color: "#1C1A3E" }}>&ldquo;mô thức&rdquo;</strong>.
          </p>
        </div>

        {/* Identity Intelligence definition */}
        <div style={{
          background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)",
          borderRadius: "20px",
          padding: "2.5rem 3rem",
          marginBottom: "3rem",
          position: "relative" as const,
          overflow: "hidden" as const,
        }}>
          <div style={{ position: "absolute" as const, top: 0, right: 0, width: "300px", height: "300px", background: "radial-gradient(circle, rgba(124,111,247,0.15) 0%, transparent 70%)", pointerEvents: "none" as const }} />
          <p style={{ color: "#B8B3FA", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: "1rem" }}>
            AIMIND làm được gì cho bạn?
          </p>
          <p style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1.1rem", lineHeight: 1.85, maxWidth: "680px", marginBottom: "1.5rem" }}>
            Giúp bạn nhìn ra những khuôn mẫu bạn cứ lặp đi lặp lại mà không hiểu tại sao — kiểu như luôn chọn sai người, luôn né tránh xung đột, hay luôn làm quá sức dù đã kiệt sức. Những khuôn mẫu đó không phải tính cách bẩm sinh — chúng là thứ bạn đã <em>học</em> để tồn tại từ hồi nhỏ. Và vì học được, thì hoàn toàn có thể học lại.
          </p>
          <p style={{ color: "#B8B3FA", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "0.5rem" }}>
            Thuật ngữ chuyên môn gọi đây là &ldquo;Identity Intelligence&rdquo; — Trí tuệ Nhận diện Bản thân:
          </p>
          <p style={{ color: "#C4C0E0", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "0.9rem", lineHeight: 1.75, fontStyle: "italic" as const, maxWidth: "680px", marginBottom: "1.25rem" }}>
            &ldquo;Khả năng nhận diện và hiểu sâu các khuôn mẫu vận hành nội tâm của bản thân — bao gồm cơ chế bảo vệ, hệ thống niềm tin, phản ứng tự động, và cách chúng hình thành từ kinh nghiệm và thần kinh học — để từ đó có thể lựa chọn có chủ đích thay vì phản ứng tự động.&rdquo;
          </p>
          <p style={{ color: "#9B96C0", fontSize: "13px" }}>— Định nghĩa AIMIND Framework, 2024</p>
        </div>

        {/* Framework pillars */}
        <div style={{ marginBottom: "3rem" }}>
          <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.5rem", textAlign: "center" }}>
            Framework được xây dựng như thế nào?
          </h3>
          <p style={{ color: "#6B678F", fontSize: "15px", textAlign: "center", marginBottom: "2.5rem", lineHeight: 1.75 }}>
            AIMIND được tổng hợp từ 4 nền tảng nghiên cứu đã được kiểm chứng lâm sàng và khoa học
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "1.5rem" }}>
            {/* Attachment Theory */}
            <div style={{ border: "1px solid #E8E3F0", borderRadius: "16px", padding: "1.75rem", borderLeft: "4px solid #E85A71" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
                <span style={{ fontSize: "24px" }}>🔗</span>
                <div>
                  <p style={{ color: "#E85A71", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "2px" }}>Attachment Theory</p>
                  <h4 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1rem", fontWeight: 700, margin: 0 }}>Lý thuyết Gắn bó</h4>
                </div>
              </div>
              <p style={{ color: "#E85A71", fontSize: "13px", fontStyle: "italic" as const, marginBottom: "0.75rem", lineHeight: 1.6, fontWeight: 500 }}>
                Nói đơn giản: Cách bạn yêu thương, gần gũi hay xa cách với người khác — được định hình từ mối quan hệ đầu tiên trong cuộc đời bạn (cha mẹ hoặc người nuôi dưỡng).
              </p>
              <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.8, marginBottom: "1rem" }}>
                Phát triển bởi John Bowlby và Mary Ainsworth, lý thuyết này cho thấy cách mối quan hệ đầu đời hình thành hệ thống niềm tin về bản thân và người khác — và cách chúng tiếp tục vận hành trong người lớn qua các kiểu gắn bó: an toàn, lo lắng, né tránh, và lưỡng lự.
              </p>
              <p style={{ color: "#9B96C0", fontSize: "13px", fontStyle: "italic" as const }}>
                AIMIND ứng dụng: Xác định kiểu gắn bó cốt lõi và cơ chế tự bảo vệ trong quan hệ.
              </p>
            </div>

            {/* Neuroscience */}
            <div style={{ border: "1px solid #E8E3F0", borderRadius: "16px", padding: "1.75rem", borderLeft: "4px solid #6B5B95" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
                <span style={{ fontSize: "24px" }}>🧬</span>
                <div>
                  <p style={{ color: "#6B5B95", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "2px" }}>Neuroscience — Khoa học về não bộ</p>
                  <h4 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1rem", fontWeight: 700, margin: 0 }}>Khoa học Thần kinh</h4>
                </div>
              </div>
              <p style={{ color: "#6B5B95", fontSize: "13px", fontStyle: "italic" as const, marginBottom: "0.75rem", lineHeight: 1.6, fontWeight: 500 }}>
                Nói đơn giản: Não bộ có thể thay đổi — những gì bạn lặp lại nhiều lần sẽ trở thành &ldquo;đường mòn&rdquo; quen thuộc. AIMIND giúp bạn tạo đường mòn mới theo hướng mình muốn.
              </p>
              <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.8, marginBottom: "1rem" }}>
                Dựa trên nghiên cứu về neuroplasticity, hệ thần kinh tự chủ (polyvagal theory của Stephen Porges), và cơ chế phản ứng stress của amygdala. Não không phải cấu trúc cố định — nó thay đổi theo trải nghiệm và hành vi lặp lại. AIMIND xây dựng lộ trình can thiệp dựa trên nguyên lý này.
              </p>
              <p style={{ color: "#9B96C0", fontSize: "13px", fontStyle: "italic" as const }}>
                AIMIND ứng dụng: Giải thích cơ chế thần kinh đằng sau mô thức — để can thiệp đúng chỗ.
              </p>
            </div>

            {/* Schema Therapy */}
            <div style={{ border: "1px solid #E8E3F0", borderRadius: "16px", padding: "1.75rem", borderLeft: "4px solid #E8925A" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
                <span style={{ fontSize: "24px" }}>🏗️</span>
                <div>
                  <p style={{ color: "#E8925A", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "2px" }}>Schema Therapy — Liệu pháp Niềm tin Lõi</p>
                  <h4 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1rem", fontWeight: 700, margin: 0 }}>Liệu pháp Schema</h4>
                </div>
              </div>
              <p style={{ color: "#E8925A", fontSize: "13px", fontStyle: "italic" as const, marginBottom: "0.75rem", lineHeight: 1.6, fontWeight: 500 }}>
                Nói đơn giản: Những niềm tin ăn sâu vào người bạn như &ldquo;mình không đủ tốt&rdquo;, &ldquo;mình dễ bị bỏ rơi&rdquo; — hình thành từ thời thơ ấu và âm thầm quyết định mọi lựa chọn của bạn.
              </p>
              <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.8, marginBottom: "1rem" }}>
                Phát triển bởi Jeffrey Young, schema therapy xác định 18 early maladaptive schemas — niềm tin lõi hình thành từ thời thơ ấu khi nhu cầu tâm lý cơ bản không được đáp ứng. Các schema này vô thức điều hướng cách một người chọn đối tác, phản ứng với xung đột, tự phá hoại khi thành công gần kề.
              </p>
              <p style={{ color: "#9B96C0", fontSize: "13px", fontStyle: "italic" as const }}>
                AIMIND ứng dụng: Nhận diện schema đang hoạt động và thiết kế can thiệp có mục tiêu.
              </p>
            </div>

            {/* Enneagram + Behavioural Science */}
            <div style={{ border: "1px solid #E8E3F0", borderRadius: "16px", padding: "1.75rem", borderLeft: "4px solid #18B5B0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
                <span style={{ fontSize: "24px" }}>🗺️</span>
                <div>
                  <p style={{ color: "#18B5B0", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "2px" }}>Enneagram + Behavioural Science</p>
                  <h4 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1rem", fontWeight: 700, margin: 0 }}>Bản đồ Khuôn mẫu & Hành vi</h4>
                </div>
              </div>
              <p style={{ color: "#18B5B0", fontSize: "13px", fontStyle: "italic" as const, marginBottom: "0.75rem", lineHeight: 1.6, fontWeight: 500 }}>
                Nói đơn giản: Chín kiểu người — mỗi kiểu có nỗi sợ riêng và cách tự bảo vệ riêng. Kết hợp khoa học hành vi để giúp bạn thiết kế thói quen mới từ bên trong.
              </p>
              <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.8, marginBottom: "1rem" }}>
                Enneagram không chỉ là bài test tính cách — khi hiểu đúng, đây là hệ thống mô tả chín cấu trúc nhân cách với động lực cốt lõi, nỗi sợ ẩn, và cơ chế phòng thủ đặc trưng. Kết hợp với khoa học hành vi (habit loops, cognitive behavioral patterns), AIMIND tạo ra ngôn ngữ thực hành để thay đổi mô thức.
              </p>
              <p style={{ color: "#9B96C0", fontSize: "13px", fontStyle: "italic" as const }}>
                AIMIND ứng dụng: Bản đồ hoá mô thức và thiết kế vòng phản hồi hành vi mới.
              </p>
            </div>
          </div>
        </div>

        {/* What makes AIMIND different */}
        <div style={{ backgroundColor: "#F8F4EE", borderRadius: "20px", padding: "2.5rem 3rem", textAlign: "center" }}>
          <p style={{ color: "#7C6FF7", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "0.75rem" }}>Điểm khác biệt</p>
          <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.25rem", lineHeight: 1.4 }}>
            Không gán nhãn. Không phân loại. Không phán xét.
          </h3>
          <p style={{ color: "#6B678F", fontSize: "15px", lineHeight: 1.85, maxWidth: "620px", margin: "0 auto 1.5rem" }}>
            Mục tiêu của AIMIND không phải cho bạn biết bạn là &ldquo;Type 4&rdquo; hay &ldquo;INFJ&rdquo;. Mục tiêu là giúp bạn hiểu tại sao bạn làm những điều bạn làm — và có lựa chọn thật sự để làm khác đi nếu muốn.
          </p>
          <Link
            href="/ve-chung-toi/phuong-phap"
            style={{ color: "#7C6FF7", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}
          >
            Đọc thêm về phương pháp AIMIND →
          </Link>
        </div>

      </div>
    </section>
  );
}

function RecognitionSection() {
  const patterns = [
    { emoji: "😟", title: "Lúc nào cũng lo lắng dù mọi thứ đang ổn", desc: "Không thể thư giãn thật sự. Luôn có một mối lo mơ hồ bám theo, dù cuộc sống không có gì xấu cả." },
    { emoji: "🙈", title: "Né tránh những cuộc nói chuyện khó", desc: "Thà im lặng chịu đựng còn hơn đối mặt với xung đột — dù biết rằng im lặng không giải quyết được gì." },
    { emoji: "🎛️", title: "Cần kiểm soát để không cảm thấy bất an", desc: "Khi có gì đó không theo ý mình, cảm giác lo lắng ập đến ngay. Cần biết trước, cần chắc chắn, cần mọi thứ trong tầm tay." },
    { emoji: "🫶", title: "Cho đi mãi mà không biết cách nhận lại", desc: "Đặt nhu cầu người khác lên trên của mình. Nói không khiến bạn cảm thấy tội lỗi — dù đã kiệt sức từ lâu rồi." },
    { emoji: "🔁", title: "Cứ lặp lại cùng một kiểu vấn đề", desc: "Biết mình đang làm điều này không tốt nhưng vẫn không dừng được. Hiểu lý thuyết rồi nhưng hành động vẫn theo cũ." },
    { emoji: "😔", title: "Tự trách mình quá mức dù đã rất cố", desc: "Tiêu chuẩn cao với bản thân nhưng không bao giờ cảm thấy đủ tốt. Thành công rồi vẫn cảm thấy trống rỗng." },
  ];
  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#7C6FF7", fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Bạn có nhận ra mình không?
          </p>
          <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, maxWidth: "600px", margin: "0 auto", lineHeight: 1.3 }}>
            Nghe cái nào quen không?
          </h2>
          <p style={{ color: "#6B678F", fontSize: "15px", lineHeight: 1.75, maxWidth: "500px", margin: "0.75rem auto 0" }}>
            Đây không phải &ldquo;tính cách xấu&rdquo; của bạn — đây là những cách bạn đã học để đối phó từ hồi còn nhỏ. Và vì học được, thì có thể thay đổi.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {patterns.map((p) => (
            <div key={p.title} style={{ backgroundColor: "white", borderRadius: "14px", padding: "1.5rem", border: "1px solid #E8E3F0" }}>
              <span style={{ fontSize: "1.8rem", display: "block", marginBottom: "0.75rem" }}>{p.emoji}</span>
              <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "15px", marginBottom: "0.4rem" }}>{p.title}</h3>
              <p style={{ color: "#6B678F", fontSize: "13px", lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestPreviewSection() {
  const archetypes = [
    { key: "lo-au", name: "Lo Âu", color: "#7C6FF7", desc: "Luôn sẵn sàng cho điều tệ nhất" },
    { key: "ne-tranh", name: "Né Tránh", color: "#18B5B0", desc: "Tránh xung đột bằng mọi giá" },
    { key: "kiem-soat", name: "Kiểm Soát", color: "#5B4FD4", desc: "Cần chắc chắn mọi thứ" },
    { key: "hy-sinh", name: "Hy Sinh", color: "#B8B3FA", desc: "Đặt người khác lên trước" },
    { key: "tu-huy", name: "Tự Hủy", color: "#FF6B6B", desc: "Phá hoại những điều tốt đẹp" },
    { key: "can-bang", name: "Cân Bằng", color: "#4CAF50", desc: "Đang trên hành trình tích hợp" },
  ];
  return (
    <section style={{ padding: "5rem 0", background: "linear-gradient(180deg, #1C1A3E 0%, #2D2A5E 100%)" }}>
      <div className="container-main" style={{ textAlign: "center" }}>
        <p style={{ color: "#18B5B0", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Bài test miễn phí</p>
        <h2 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.3 }}>
          Bản Đồ Nội Tâm — 6 mô thức cốt lõi
        </h2>
        <p style={{ color: "#C4C0E0", maxWidth: "500px", margin: "0 auto 3rem", lineHeight: 1.75 }}>
          20 câu hỏi. 15 phút. Kết quả giúp bạn nhìn thấy mô thức vô thức đang điều khiển cuộc đời mình.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem", maxWidth: "720px", margin: "0 auto 3rem" }}>
          {archetypes.map((a) => (
            <div key={a.key} style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid " + a.color + "40", borderRadius: "12px", padding: "1.25rem", textAlign: "center" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: a.color + "20", border: "2px solid " + a.color, margin: "0 auto 0.75rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: a.color }} />
              </div>
              <div style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "14px", marginBottom: "4px" }}>{a.name}</div>
              <div style={{ color: "#9B96C0", fontSize: "11px", lineHeight: 1.5 }}>{a.desc}</div>
            </div>
          ))}
        </div>
        <Link href="/kham-pha/ban-do-noi-tam" style={{ display: "inline-block", background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)", color: "white", padding: "16px 36px", borderRadius: "999px", fontSize: "16px", fontWeight: 700, textDecoration: "none", fontFamily: "'Be Vietnam Pro', sans-serif" }}>
          Bắt đầu khám phá
        </Link>
      </div>
    </section>
  );
}

function JourneySection() {
  const steps = [
    { number: "01", title: "Khám phá mô thức", desc: "Làm bài test Bản Đồ Nội Tâm. Nhận kết quả miễn phí về mô thức cốt lõi của bạn.", cta: "Làm bài test", href: "/kham-pha/ban-do-noi-tam", color: "#7C6FF7" },
    { number: "02", title: "Đi sâu vào hiểu", desc: "Khóa học Bản Đồ Nội Tâm Chuyên Sâu — tại sao mô thức hình thành và cách thay đổi từ gốc rễ.", cta: "Xem khóa học", href: "/hanh-trinh/ban-do-noi-tam-chuyen-sau", color: "#18B5B0" },
    { number: "03", title: "Đồng hành chuyển hóa", desc: "Đồng hành 1-1 với Hanna — không phải chỉ tư vấn, mà là cùng bạn đi qua từng bước thay đổi thật sự.", cta: "Tìm hiểu thêm", href: "/lien-he", color: "#5B4FD4" },
  ];
  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#7C6FF7", fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Hành trình chuyển hóa</p>
          <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, maxWidth: "560px", margin: "0 auto", lineHeight: 1.3 }}>
            Không phải một bài test. Đây là bắt đầu của một hành trình.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {steps.map((step) => (
            <div key={step.number} style={{ backgroundColor: "white", borderRadius: "16px", padding: "2rem", border: "1px solid #E8E3F0" }}>
              <div style={{ fontSize: "3rem", fontWeight: 900, color: step.color, opacity: 0.15, fontFamily: "'Be Vietnam Pro', sans-serif", lineHeight: 1, marginBottom: "1rem" }}>{step.number}</div>
              <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>{step.title}</h3>
              <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.7, marginBottom: "1.5rem" }}>{step.desc}</p>
              <Link href={step.href} style={{ color: step.color, fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>{step.cta} &rarr;</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function WhatYouGetSection() {
  return (
    <section style={{ padding: "5rem 0", background: "linear-gradient(180deg, #F8F4EE 0%, white 100%)" }}>
      <div className="container-main" style={{ maxWidth: "900px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "#7C6FF7", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: "0.75rem" }}>
            Bạn sẽ nhận được gì
          </p>
          <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.3rem)", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem" }}>
            Trước và sau — nhìn từ góc độ người đã đi qua
          </h2>
          <p style={{ color: "#6B678F", fontSize: "16px", lineHeight: 1.8, maxWidth: "580px", margin: "0 auto" }}>
            Không phải danh sách tính năng. Đây là những điều người dùng thật sự mô tả sau khi hoàn thành bài test và khóa học.
          </p>
        </div>

        {/* After Test */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, #7C6FF7, #5B4FD4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "white", fontSize: "16px" }}>①</span>
            </div>
            <div>
              <p style={{ color: "#7C6FF7", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, margin: 0 }}>Sau bài test Bản Đồ Nội Tâm</p>
              <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1.15rem", fontWeight: 800, margin: 0 }}>Lần đầu tiên nhìn thấy mình rõ</h3>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
            {[
              {
                before: "Tôi biết mình có vấn đề, nhưng không biết vấn đề là gì",
                after: "Tôi có tên gọi cho điều mình đang làm — và biết nó đến từ đâu",
                icon: "🏷️"
              },
              {
                before: "Tôi cứ tưởng mình như vậy là do tính cách, không thể khác",
                after: "Tôi hiểu đây là mô thức học được — không phải con người thật của mình",
                icon: "🔓"
              },
              {
                before: "Tôi phán xét bản thân rất nặng vì những phản ứng mình không kiểm soát được",
                after: "Tôi thấy mình phản ứng theo một logic — và logic đó có lý do để tồn tại",
                icon: "🤝"
              },
              {
                before: "Tôi cô đơn với những gì mình đang trải qua — nghĩ chỉ có mình như vậy",
                after: "Tôi nhận ra mô thức này phổ biến hơn tôi nghĩ — và có cách hiểu nó",
                icon: "🌐"
              },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "white", border: "1px solid #E8E3F0", borderRadius: "14px", padding: "1.5rem", position: "relative" as const, overflow: "hidden" as const }}>
                <div style={{ position: "absolute" as const, top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #7C6FF7, #5B4FD4)" }} />
                <span style={{ fontSize: "20px", display: "block", marginBottom: "1rem" }}>{item.icon}</span>
                <p style={{ color: "#B0ACCC", fontSize: "13px", lineHeight: 1.6, marginBottom: "0.75rem", fontStyle: "italic" as const }}>
                  Trước: &ldquo;{item.before}&rdquo;
                </p>
                <p style={{ color: "#1C1A3E", fontSize: "14px", lineHeight: 1.7, fontWeight: 600 }}>
                  Sau: &ldquo;{item.after}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "2.5rem 0" }}>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#E8E3F0" }} />
          <span style={{ color: "#9B96C0", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", whiteSpace: "nowrap" as const }}>SAU KHI HỌC CHUYÊN SÂU</span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#E8E3F0" }} />
        </div>

        {/* After Course */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, #18B5B0, #0D8C88)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "white", fontSize: "16px" }}>②</span>
            </div>
            <div>
              <p style={{ color: "#18B5B0", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, margin: 0 }}>Sau khóa học Bản Đồ Nội Tâm Chuyên Sâu</p>
              <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1.15rem", fontWeight: 800, margin: 0 }}>Hiểu đủ sâu để có thể thay đổi</h3>
            </div>
          </div>

          {/* Big transformations - 2 column */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
            {[
              {
                title: "Tôi biết mô thức của mình vận hành như thế nào",
                desc: "Không chỉ biết tên — tôi hiểu cơ chế. Tại sao nó được kích hoạt. Trong hoàn cảnh nào. Với ai. Và điều gì ở bên dưới nó.",
                icon: "🔬",
                color: "#7C6FF7"
              },
              {
                title: "Tôi nhận ra khi nào cơ chế cũ đang hoạt động",
                desc: "Giữa một cuộc xung đột, tôi dừng lại được — và hỏi: đây là phản ứng thật của tôi, hay cơ chế bảo vệ đang chạy? Cái khoảng dừng đó thay đổi mọi thứ.",
                icon: "⏸️",
                color: "#18B5B0"
              },
              {
                title: "Tôi hiểu vết thương cốt lõi và không còn xấu hổ về nó",
                desc: "Tôi biết nhu cầu nào của mình chưa được đáp ứng từ nhỏ — và tại sao mô thức hiện tại là nỗ lực tốt nhất của đứa trẻ trong tôi để đối phó với điều đó.",
                icon: "🌱",
                color: "#5B8A3C"
              },
              {
                title: "Tôi có thể nói chuyện khác đi — với mình và với người khác",
                desc: "Tôi có ngôn ngữ để đặt tên cho trải nghiệm bên trong. Điều này giúp tôi giao tiếp thật hơn — không diễn, không phòng thủ, không biến mất.",
                icon: "💬",
                color: "#E85A71"
              },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "white", border: "1px solid #E8E3F0", borderRadius: "14px", padding: "1.75rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "24px", flexShrink: 0, marginTop: "2px" }}>{item.icon}</span>
                <div>
                  <h4 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "15px", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.4 }}>{item.title}</h4>
                  <p style={{ color: "#6B678F", fontSize: "13px", lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Honest note */}
        <div style={{ backgroundColor: "#1C1A3E", borderRadius: "16px", padding: "2rem 2.5rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
          <span style={{ fontSize: "24px", flexShrink: 0 }}>📌</span>
          <div>
            <p style={{ color: "#B8B3FA", fontWeight: 700, fontSize: "14px", marginBottom: "0.5rem" }}>Cần nói thẳng</p>
            <p style={{ color: "#9B96C0", fontSize: "14px", lineHeight: 1.8 }}>
              AIMIND không hứa hẹn thay đổi sau một bài test hay một khóa học. Thay đổi thật cần thời gian, lặp đi lặp lại, và đôi khi cần đồng hành. Điều mà AIMIND cung cấp là <strong style={{ color: "white" }}>nền tảng nhận thức</strong> — bạn hiểu mình đủ rõ để biết cần thay đổi điều gì, bắt đầu từ đâu, và tại sao những cách cũ không hiệu quả.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { quote: "Tôi đã đọc nhiều sách tâm lý nhưng không có gì giúp tôi nhìn thấy bản thân rõ như bài test này.", name: "Minh Trang", role: "Quản lý marketing, 32 tuổi", archetype: "Mô thức: Né Tránh", color: "#18B5B0" },
    { quote: "Kết quả không chỉ mô tả tôi — nó giải thích tại sao tôi lại như vậy. Phần vết thương cốt lõi khiến tôi bật khóc.", name: "Hoàng Nam", role: "Giám đốc điều hành, 38 tuổi", archetype: "Mô thức: Kiểm Soát", color: "#5B4FD4" },
    { quote: "Sau 3 tháng coaching với Hanna, tôi không còn tự phá hoại những điều tốt đẹp trong cuộc sống nữa.", name: "Thu Hà", role: "Chuyên gia tư vấn, 35 tuổi", archetype: "Mô thức: Tự Hủy", color: "#FF6B6B" },
  ];
  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#1C1A3E" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, lineHeight: 1.3 }}>
            Họ đã nhìn thấy điều mình chưa từng thấy
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {testimonials.map((t) => (
            <div key={t.name} style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "2rem" }}>
              <p style={{ color: "#C4C0E0", fontSize: "15px", lineHeight: 1.75, marginBottom: "1.5rem", fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: t.color + "25", border: "2px solid " + t.color, flexShrink: 0 }} />
                <div>
                  <div style={{ color: "white", fontWeight: 600, fontSize: "14px" }}>{t.name}</div>
                  <div style={{ color: "#9B96C0", fontSize: "12px" }}>{t.role}</div>
                  <div style={{ color: t.color, fontSize: "11px", marginTop: "2px", fontWeight: 600 }}>{t.archetype}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section style={{ padding: "6rem 0", background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)", textAlign: "center" }}>
      <div className="container-main">
        <h2 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.25 }}>
          Mô thức nào đang điều khiển bạn?
        </h2>
        <p style={{ color: "#C4C0E0", marginBottom: "2.5rem", fontSize: "16px", lineHeight: 1.75 }}>
          Bài test miễn phí. 15 phút. Kết quả thay đổi cách bạn nhìn chính mình.
        </p>
        <Link
          href="/kham-pha/ban-do-noi-tam"
          style={{ display: "inline-block", background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)", color: "white", padding: "18px 44px", borderRadius: "999px", fontSize: "18px", fontWeight: 700, textDecoration: "none", fontFamily: "'Be Vietnam Pro', sans-serif", boxShadow: "0 8px 32px rgba(124,111,247,0.4)" }}
        >
          Làm bài test ngay — Miễn phí
        </Link>
      </div>
    </section>
  );
}
