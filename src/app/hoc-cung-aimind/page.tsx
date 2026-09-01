import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Học Cùng AIMIND — Lộ trình, Khóa học & Workshop | AIMIND",
  description: "Lộ trình học cá nhân hóa theo THÂN–TÂM–TRÍ, khóa học chuyên sâu, workshop và lớp tư duy phản biện thứ 7.",
  robots: { index: false, follow: false },
};

const LO_TRINH = [
  { label: "Người mới bắt đầu", desc: "7 ngày khám phá bản thân — từ Mind Test đến hiểu mô thức", duration: "7 ngày", href: "/hoc-cung-aimind/lo-trinh#nguoi-moi", color: "#7C6FF7" },
  { label: "Lộ trình THÂN", desc: "4 tuần hiểu cơ thể và xây dựng thực hành hàng ngày", duration: "4 tuần", href: "/hoc-cung-aimind/lo-trinh#than", color: "#18B5B0" },
  { label: "Lộ trình TÂM", desc: "8 tuần đi sâu vào tâm lý, hành vi và thực hành thay đổi", duration: "8 tuần", href: "/hoc-cung-aimind/lo-trinh#tam", color: "#E85A71" },
  { label: "Lộ trình TRÍ", desc: "6 tuần tư duy phản biện và khoa học về con người", duration: "6 tuần", href: "/hoc-cung-aimind/lo-trinh#tri", color: "#5B4FD4" },
];

export default function HocCungAIMINDPage() {
  return (
    <main style={{ flex: 1 }}>
      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg, #1C1A3E 0%, #2D2A5E 100%)", padding: "6rem 0 5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 70%, rgba(124,111,247,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(24,181,176,0.1) 0%, transparent 50%)" }} />
        <div className="container-main" style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", backgroundColor: "rgba(124,111,247,0.15)", border: "1px solid rgba(124,111,247,0.3)", borderRadius: "999px", padding: "6px 16px", marginBottom: "2rem" }}>
            <span style={{ color: "#B8B3FA", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Học cùng AIMIND</span>
          </div>
          <h1 style={{ color: "white", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.2, fontFamily: "'Be Vietnam Pro', sans-serif", letterSpacing: "-0.03em", maxWidth: "720px", margin: "0 auto 1.5rem" }}>
            Học có hệ thống.<br />Thay đổi từ bên trong.
          </h1>
          <p style={{ color: "#C4C0E0", fontSize: "clamp(1rem, 2.5vw, 1.15rem)", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto 2.5rem" }}>
            Không phải học để biết thêm. Mà học để hiểu chính mình và chọn lại cách sống.
          </p>
          <Link href="/hoc-cung-aimind/lo-trinh" style={{ background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)", color: "white", padding: "14px 32px", borderRadius: "999px", fontSize: "16px", fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 24px rgba(124,111,247,0.35)" }}>
            Chọn lộ trình của bạn →
          </Link>
        </div>
      </section>

      {/* Lộ trình */}
      <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#7C6FF7", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Lộ trình học</p>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800 }}>4 lộ trình cá nhân hóa</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {LO_TRINH.map((item) => (
              <Link key={item.label} href={item.href} style={{ textDecoration: "none" }}>
                <div className="hover-lift-card-high" style={{ border: "1px solid #E8E3F0", borderRadius: "16px", padding: "2rem", borderTop: `3px solid ${item.color}`, transition: "transform 0.2s, box-shadow 0.2s" }}>
                  <span style={{ backgroundColor: `${item.color}15`, color: item.color, fontSize: "12px", fontWeight: 700, padding: "4px 10px", borderRadius: "999px", display: "inline-block", marginBottom: "1rem" }}>{item.duration}</span>
                  <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>{item.label}</h3>
                  <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Các hình thức học */}
      <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800 }}>Hình thức học</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "📚", title: "Khóa học", desc: "Học tự tốc độ — video, bài đọc và bài tập thực hành theo từng module.", href: "/hoc-cung-aimind/khoa-hoc", cta: "Xem khóa học" },
              { icon: "🎯", title: "Workshop", desc: "Học nhóm nhỏ trực tiếp — tương tác, thảo luận và thực hành cùng nhau.", href: "/hoc-cung-aimind/workshop", cta: "Xem workshop" },
              { icon: "📅", title: "Lớp thứ 7", desc: "Mỗi thứ 7 — tư duy phản biện qua case study và thảo luận nhóm.", href: "/hoc-cung-aimind/lop-thu-7", cta: "Tham gia" },
            ].map((item) => (
              <div key={item.title} style={{ backgroundColor: "white", borderRadius: "16px", padding: "2.5rem", border: "1px solid #E8E3F0", textAlign: "center" }}>
                <span style={{ fontSize: "3rem", display: "block", marginBottom: "1.25rem" }}>{item.icon}</span>
                <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.7, marginBottom: "1.5rem" }}>{item.desc}</p>
                <Link href={item.href} style={{ color: "#7C6FF7", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>{item.cta} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 0", background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)", textAlign: "center" }}>
        <div className="container-main">
          <h2 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800, marginBottom: "1rem" }}>Chưa biết bắt đầu từ đâu?</h2>
          <p style={{ color: "#C4C0E0", fontSize: "16px", lineHeight: 1.75, maxWidth: "460px", margin: "0 auto 2.5rem" }}>Làm bài Mind Test miễn phí — tôi sẽ gợi ý lộ trình phù hợp nhất với bạn.</p>
          <Link href="/kham-pha/ban-do-noi-tam" style={{ background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)", color: "white", padding: "14px 32px", borderRadius: "999px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 24px rgba(124,111,247,0.35)" }}>
            Làm Mind Test miễn phí →
          </Link>
        </div>
      </section>
    </main>
  );
}
