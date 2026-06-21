import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <HeroSection />
        <AboutAimindSection />
        <RecognitionSection />
        <TestPreviewSection />
        <JourneySection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
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
            { icon: "🗺️", label: "Identity Intelligence System" },
            { icon: "🔬", label: "Schema & Attachment Theory" },
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
            AIMIND không phải bài test tính cách hay công cụ xếp loại con người. Đây là hệ thống giúp bạn nhìn thấy <strong style={{ color: "#1C1A3E" }}>bản đồ vận hành nội tâm</strong> của chính mình — những mô thức ẩn đang điều khiển cách bạn suy nghĩ, cảm xúc, và hành động.
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
            Identity Intelligence
          </p>
          <p style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1.15rem", lineHeight: 1.85, fontStyle: "italic" as const, maxWidth: "680px", marginBottom: "1.25rem" }}>
            &ldquo;Khả năng nhận diện và hiểu sâu các mô thức vận hành nội tâm của bản thân — bao gồm cơ chế bảo vệ, hệ thống niềm tin, phản ứng tự động, và cách chúng hình thành từ kinh nghiệm và thần kinh học — để từ đó có thể can thiệp có chủ đích vào hành vi và trải nghiệm sống.&rdquo;
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
                  <p style={{ color: "#6B5B95", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "2px" }}>Neuroscience</p>
                  <h4 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1rem", fontWeight: 700, margin: 0 }}>Khoa học Thần kinh</h4>
                </div>
              </div>
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
                  <p style={{ color: "#E8925A", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "2px" }}>Schema Therapy</p>
                  <h4 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1rem", fontWeight: 700, margin: 0 }}>Liệu pháp Schema</h4>
                </div>
              </div>
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
                  <h4 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1rem", fontWeight: 700, margin: 0 }}>Bản đồ Mô thức & Hành vi</h4>
                </div>
              </div>
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
    { emoji: "1", title: "Bạn luôn lo lắng dù mọi thứ đang ổn", desc: "Không thể thư giãn. Luôn có một mối lo mơ hồ nào đó bám theo." },
    { emoji: "2", title: "Bạn né tránh những cuộc nói chuyện khó", desc: "Thà im lặng chịu đựng còn hơn đối mặt với xung đột." },
    { emoji: "3", title: "Bạn cần kiểm soát mọi thứ xung quanh", desc: "Khi mất kiểm soát, bạn cảm thấy bất an và lo lắng sâu sắc." },
    { emoji: "4", title: "Bạn cho đi mãi mà không biết nhận lại", desc: "Nói không với người khác khiến bạn cảm thấy có lỗi." },
    { emoji: "5", title: "Bạn cứ lặp lại cùng một vấn đề", desc: "Hiểu rõ vấn đề nhưng vẫn không thể thay đổi cách phản ứng." },
    { emoji: "6", title: "Bạn tự phê bình bản thân quá mức", desc: "Tiêu chuẩn cao với mình nhưng không bao giờ cảm thấy đủ." },
  ];
  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#7C6FF7", fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Bạn có nhận ra mình không?
          </p>
          <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, maxWidth: "600px", margin: "0 auto", lineHeight: 1.3 }}>
            Những mô thức này không phải tính cách — chúng là những gì bạn đã học để sống sót
          </h2>
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
    { number: "03", title: "Đồng hành chuyển hóa", desc: "Coaching 1-1 với Hanna — không phải tư vấn, mà là đồng hành thực sự trong quá trình thay đổi.", cta: "Tìm hiểu thêm", href: "/lien-he", color: "#5B4FD4" },
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
