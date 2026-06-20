import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <HeroSection />
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
        <div style={{ marginTop: "4rem", display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
          {[
            { number: "12,000+", label: "người đã khám phá" },
            { number: "6", label: "mô thức nội tâm" },
            { number: "94%", label: "cảm thấy đúng với mình" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1.8rem", fontWeight: 800 }}>{stat.number}</div>
              <div style={{ color: "#9B96C0", fontSize: "13px", marginTop: "4px" }}>{stat.label}</div>
            </div>
          ))}
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
