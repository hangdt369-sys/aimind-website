import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIMIND — Bài Test Bản Đồ Nội Tâm Miễn Phí",
  description: "Làm bài test miễn phí để quan sát những xu hướng phản ứng đang nổi bật trong câu trả lời của bạn. 20 câu hỏi · 15 phút · Không cần đăng ký.",
  openGraph: {
    title: "AIMIND — Bài Test Bản Đồ Nội Tâm Miễn Phí",
    description: "Quan sát những xu hướng phản ứng đang nổi bật trong câu trả lời của bạn. 20 câu · 15 phút · Miễn phí.",
  },
};


export default function HomePage() {
  return (
    <main style={{ flex: 1 }}>
        <HeroSection />
        <RecognitionSection />
        <WhatYouGetSection />
        <TestPreviewSection />
        <AboutAimindSection />
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
          Tại sao bạn cứ phản ứng theo cùng một cách — dù biết mình muốn khác?
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
          Có lúc bạn làm hài lòng người khác dù đã mệt, phản ứng mạnh với một lời góp ý, hoặc im lặng khi thật sự muốn nói. AIMIND giúp bạn nhìn rõ vòng lặp đang xuất hiện phía sau những khoảnh khắc đó.
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
            Bắt đầu quan sát mô thức của bạn
          </Link>
          <p style={{ color: "#9B96C0", fontSize: "13px" }}>Miễn phí · 15 phút · Không cần đăng ký</p>
        </div>
        <div style={{ marginTop: "3rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" as const }}>
          {[
            { icon: "🧭", label: "Quan sát xu hướng hiện tại" },
            { icon: "🗺️", label: "Không gán nhãn con người" },
            { icon: "🔎", label: "Không phải công cụ chẩn đoán" },
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
            Nhìn thấy vòng lặp đang diễn ra bên trong bạn
          </h2>
          <p style={{ color: "#6B678F", fontSize: "17px", lineHeight: 1.85, maxWidth: "680px", margin: "0 auto" }}>
            AIMIND không phải bài test tính cách hay công cụ xếp loại con người. AIMIND giúp bạn quan sát vòng lặp từ <strong style={{ color: "#1C1A3E" }}>sự kiện → diễn giải → cảm xúc và phản ứng cơ thể → cách tự bảo vệ → hành vi</strong>. Những xu hướng lặp lại trong vòng này được gọi là <strong style={{ color: "#1C1A3E" }}>&ldquo;mô thức&rdquo;</strong> — một cách để nhìn nhận điều đang xảy ra, không phải nhãn định nghĩa con người bạn.
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
            Giúp bạn nhìn ra những khuôn mẫu bạn cứ lặp đi lặp lại mà không hiểu tại sao — như né tránh xung đột, làm quá sức dù đã kiệt sức hoặc tiếp tục một lựa chọn không còn phù hợp. Những khuôn mẫu đó không nhất thiết là tính cách cố định. Chúng có thể liên quan đến những cách phản ứng đã được học qua trải nghiệm; khi nhận ra chúng, bạn có thêm cơ hội thử một cách đáp ứng khác.
          </p>
          <p style={{ color: "#B8B3FA", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "0.5rem" }}>
            Trong AIMIND, cách tiếp cận này được gọi là &ldquo;Identity Intelligence&rdquo; — Trí tuệ Nhận diện Bản thân:
          </p>
          <p style={{ color: "#C4C0E0", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "0.9rem", lineHeight: 1.75, fontStyle: "italic" as const, maxWidth: "680px", marginBottom: "1.25rem" }}>
            &ldquo;Khả năng nhận diện và hiểu các khuôn mẫu vận hành nội tâm — gồm cách diễn giải, phản ứng tự động và cơ chế tự bảo vệ — để có thêm lựa chọn có chủ đích trong từng tình huống.&rdquo;
          </p>
          <p style={{ color: "#9B96C0", fontSize: "13px" }}>— Cách tiếp cận của AIMIND</p>
        </div>

        {/* Framework pillars */}
        <div style={{ marginBottom: "3rem" }}>
          <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.5rem", textAlign: "center" }}>
            Framework được xây dựng như thế nào?
          </h3>
          <p style={{ color: "#6B678F", fontSize: "15px", textAlign: "center", marginBottom: "2.5rem", lineHeight: 1.75 }}>
            AIMIND tham khảo các khung lý thuyết và nghiên cứu về gắn bó, schema, não bộ và hành vi để xây dựng một cách quan sát dễ hiểu.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))", gap: "1.5rem" }}>
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
                Nói đơn giản: Những trải nghiệm gắn bó trước đây có thể là một trong nhiều yếu tố liên quan đến cách bạn tìm kiếm sự gần gũi hoặc khoảng cách.
              </p>
              <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.8, marginBottom: "1rem" }}>
                Lý thuyết Gắn bó cung cấp một ngôn ngữ để quan sát nhu cầu an toàn, sự gần gũi và cách con người phản ứng trong quan hệ. Đây là nguồn tham khảo, không phải kết luận về lịch sử cá nhân của người làm test.
              </p>
              <p style={{ color: "#9B96C0", fontSize: "13px", fontStyle: "italic" as const }}>
                AIMIND tham khảo: Quan sát xu hướng gắn bó và cách một người có thể tự bảo vệ mình trong quan hệ.
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
                Nói đơn giản: Khả năng thích nghi của não bộ gợi ý rằng những phản ứng quen thuộc không nhất thiết là cố định.
              </p>
              <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.8, marginBottom: "1rem" }}>
                AIMIND tham khảo các khái niệm về học tập, phản ứng stress và sự lặp lại để giải thích vì sao một phản ứng có thể trở nên quen thuộc. Điều này không biến bài test thành một đánh giá thần kinh học hoặc công cụ điều trị.
              </p>
              <p style={{ color: "#9B96C0", fontSize: "13px", fontStyle: "italic" as const }}>
                AIMIND tham khảo: Giúp người dùng có thêm một cách quan sát phản ứng tự động và khả năng thực hành lựa chọn khác.
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
                Nói đơn giản: Một số niềm tin như &ldquo;mình không đủ tốt&rdquo; có thể ảnh hưởng đến cách chúng ta diễn giải và phản ứng trong một số tình huống.
              </p>
              <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.8, marginBottom: "1rem" }}>
                Schema Therapy cung cấp một khung để quan sát những niềm tin và cách ứng phó lặp lại. Nhiều yếu tố có thể liên quan đến quá trình hình thành; một bài test ngắn không xác định được nguyên nhân cá nhân.
              </p>
              <p style={{ color: "#9B96C0", fontSize: "13px", fontStyle: "italic" as const }}>
                AIMIND tham khảo: Gợi ý những niềm tin hoặc cách ứng phó người dùng có thể tiếp tục quan sát.
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
                Nói đơn giản: Các bản đồ mô thức có thể cung cấp ngôn ngữ để mô tả những xu hướng hành vi, nhưng không định nghĩa toàn bộ con người.
              </p>
              <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.8, marginBottom: "1rem" }}>
                AIMIND sử dụng ngôn ngữ mô thức cùng một số khái niệm từ khoa học hành vi để giúp người dùng quan sát vòng lặp. Các nguồn tham khảo này có mức bằng chứng khác nhau và không được dùng như chẩn đoán.
              </p>
              <p style={{ color: "#9B96C0", fontSize: "13px", fontStyle: "italic" as const }}>
                AIMIND tham khảo: Bản đồ hóa xu hướng và tạo ngôn ngữ dễ dùng cho việc tự quan sát.
              </p>
            </div>
          </div>
          <p style={{ color: "#6B678F", fontSize: "13px", textAlign: "center", marginTop: "1.5rem", lineHeight: 1.75 }}>
            Bằng chứng hỗ trợ từng framework không tự động chứng minh bài test AIMIND đã được kiểm chứng lâm sàng. Bài test này là công cụ tự quan sát, không phải công cụ chẩn đoán.
          </p>
        </div>

        {/* What makes AIMIND different */}
        <div style={{ backgroundColor: "#F8F4EE", borderRadius: "20px", padding: "2.5rem 3rem", textAlign: "center" }}>
          <p style={{ color: "#7C6FF7", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "0.75rem" }}>Điểm khác biệt</p>
          <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.25rem", lineHeight: 1.4 }}>
            Không gán nhãn. Không phân loại. Không phán xét.
          </h3>
          <p style={{ color: "#6B678F", fontSize: "15px", lineHeight: 1.85, maxWidth: "620px", margin: "0 auto 1.5rem" }}>
            Mục tiêu của AIMIND không phải cho bạn biết bạn là &ldquo;Type 4&rdquo; hay &ldquo;INFJ&rdquo;. Mục tiêu là giúp bạn quan sát cách mình thường phản ứng và nhận ra nơi mình có thể thử một lựa chọn khác.
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
            Đây không phải &ldquo;tính cách xấu&rdquo; hay kết luận về con người bạn. Đó có thể là những xu hướng phản ứng đáng để quan sát trong từng hoàn cảnh.
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
    { key: "lo-au", name: "Xu hướng Lo Âu", color: "#7C6FF7", desc: "Nhạy cảm với điều chưa chắc chắn" },
    { key: "ne-tranh", name: "Xu hướng Né Tránh", color: "#18B5B0", desc: "Cần khoảng cách khi áp lực tăng" },
    { key: "kiem-soat", name: "Xu hướng Kiểm Soát", color: "#5B4FD4", desc: "Tìm sự chắc chắn qua kế hoạch" },
    { key: "hy-sinh", name: "Xu hướng Hy Sinh", color: "#B8B3FA", desc: "Ưu tiên nhu cầu của người khác" },
    { key: "tu-huy", name: "Xu hướng Tự Hủy", color: "#FF6B6B", desc: "Dễ mất đà trước điều quan trọng" },
    { key: "can-bang", name: "Xu hướng Cân Bằng", color: "#4CAF50", desc: "Nhiều xu hướng xuất hiện cân bằng" },
  ];
  return (
    <section style={{ padding: "5rem 0", background: "linear-gradient(180deg, #1C1A3E 0%, #2D2A5E 100%)" }}>
      <div className="container-main" style={{ textAlign: "center" }}>
        <p style={{ color: "#18B5B0", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Bài test miễn phí</p>
        <h2 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.3 }}>
          Bản Đồ Nội Tâm — 6 nhóm xu hướng phản ứng
        </h2>
        <p style={{ color: "#C4C0E0", maxWidth: "500px", margin: "0 auto 3rem", lineHeight: 1.75 }}>
          20 câu hỏi. 15 phút. Kết quả là điểm khởi đầu để bạn quan sát những xu hướng đang nổi bật trong câu trả lời hiện tại — không phải chẩn đoán hay nhãn cố định.
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
            Từ chưa gọi tên được đến có một cách để quan sát
          </h2>
          <p style={{ color: "#6B678F", fontSize: "16px", lineHeight: 1.8, maxWidth: "580px", margin: "0 auto" }}>
            Bài test không kết luận nguyên nhân hay định nghĩa con người bạn. Giá trị đầu tiên là giúp bạn có ngôn ngữ để quan sát những phản ứng đang lặp lại.
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
                after: "Tôi có một cách gọi để quan sát điều mình thường làm",
                icon: "🏷️"
              },
              {
                before: "Tôi cứ tưởng mình như vậy là do tính cách, không thể khác",
                after: "Tôi hiểu đây là một xu hướng phản ứng — không phải toàn bộ con người mình",
                icon: "🔓"
              },
              {
                before: "Tôi phán xét bản thân rất nặng vì những phản ứng mình không kiểm soát được",
                after: "Tôi bắt đầu nhận ra hoàn cảnh nào thường kích hoạt phản ứng đó",
                icon: "🤝"
              },
              {
                before: "Tôi cô đơn với những gì mình đang trải qua — nghĩ chỉ có mình như vậy",
                after: "Tôi có ngôn ngữ để nói về trải nghiệm của mình mà không tự gán nhãn",
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))", gap: "1rem", marginBottom: "1rem" }}>
            {[
              {
                title: "Tôi biết mô thức của mình vận hành như thế nào",
                desc: "Không chỉ biết tên — tôi quan sát được hoàn cảnh, cảm xúc và cách phản ứng thường đi cùng nhau.",
                icon: "🔬",
                color: "#7C6FF7"
              },
              {
                title: "Tôi nhận ra khi nào cơ chế cũ đang hoạt động",
                desc: "Giữa một tình huống khó, tôi có thể dừng lại và hỏi mình đang diễn giải điều gì trước khi phản ứng.",
                icon: "⏸️",
                color: "#18B5B0"
              },
              {
                title: "Tôi bớt xem phản ứng này là bản chất cố định",
                desc: "Tôi có thể xem những trải nghiệm trước đây như một trong nhiều yếu tố liên quan, thay vì một nguyên nhân duy nhất.",
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
              AIMIND không hứa hẹn thay đổi sau một bài test hay một khóa học. Thay đổi cần thời gian, thực hành và đôi khi cần sự đồng hành phù hợp. AIMIND cung cấp một <strong style={{ color: "white" }}>điểm khởi đầu để quan sát</strong> — giúp bạn nhận ra điều gì thường xảy ra và nơi mình có thể thử một lựa chọn khác.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { quote: "Bài test cho tôi một cách gọi tên những phản ứng mình thường thấy nhưng trước đây khó diễn đạt.", name: "Minh Trang", role: "Quản lý marketing, 32 tuổi", archetype: "Xu hướng: Né Tránh", color: "#18B5B0" },
    { quote: "Phần kết quả giúp tôi nhận ra mình thường làm gì khi cảm thấy áp lực, mà không khiến tôi thấy bị phán xét.", name: "Hoàng Nam", role: "Giám đốc điều hành, 38 tuổi", archetype: "Xu hướng: Kiểm Soát", color: "#5B4FD4" },
    { quote: "Sau thời gian đồng hành, tôi nhận ra sớm hơn những lúc mình bắt đầu mất đà và có thêm lựa chọn để dừng lại.", name: "Thu Hà", role: "Chuyên gia tư vấn, 35 tuổi", archetype: "Xu hướng: Tự Hủy", color: "#FF6B6B" },
  ];
  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#1C1A3E" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, lineHeight: 1.3 }}>
            Điều người dùng cho biết họ đã quan sát được
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
          Xu hướng nào đang nổi bật trong câu trả lời của bạn?
        </h2>
        <p style={{ color: "#C4C0E0", marginBottom: "2.5rem", fontSize: "16px", lineHeight: 1.75 }}>
          Bài test miễn phí trong 15 phút — một điểm khởi đầu để quan sát cách bạn thường phản ứng.
        </p>
        <Link
          href="/kham-pha/ban-do-noi-tam"
          style={{ display: "inline-block", background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)", color: "white", padding: "18px 44px", borderRadius: "999px", fontSize: "18px", fontWeight: 700, textDecoration: "none", fontFamily: "'Be Vietnam Pro', sans-serif", boxShadow: "0 8px 32px rgba(124,111,247,0.4)" }}
        >
          Làm bài test ngay — Miễn phí
        </Link>
        <p style={{ color: "#9B96C0", fontSize: "13px", lineHeight: 1.7, margin: "1.5rem auto 0", maxWidth: "620px" }}>
          Sau bài test, bạn có thể chọn đọc thêm, học chuyên sâu hoặc tìm sự đồng hành khi thấy phù hợp.
        </p>
      </div>
    </section>
  );
}
