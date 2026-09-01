import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thư Viện Tri Thức — Psychology, Neuroscience & More | AIMIND",
  description:
    "Thư viện kiến thức AIMIND: Psychology, Neuroscience, Biology, Evolution, Philosophy, Behavioral Science, Critical Thinking, Health, AI & Human.",
  robots: { index: false, follow: false },
};

const CATEGORIES = [
  { slug: "psychology", label: "Psychology", vi: "Tâm lý học", icon: "🧠", color: "#E85A71", count: "24 bài", desc: "Lý thuyết tâm lý học hiện đại — từ Freud đến schema therapy" },
  { slug: "neuroscience", label: "Neuroscience", vi: "Khoa học thần kinh", icon: "⚡", color: "#7C6FF7", count: "18 bài", desc: "Não bộ, hệ thần kinh, neuroplasticity và cách chúng ảnh hưởng đến hành vi" },
  { slug: "biology", label: "Biology", vi: "Sinh học", icon: "🧬", color: "#18B5B0", count: "12 bài", desc: "Sinh học con người từ góc độ hành vi và cảm xúc" },
  { slug: "evolution", label: "Evolution", vi: "Tiến hóa", icon: "🦎", color: "#E8925A", count: "10 bài", desc: "Tại sao chúng ta như vậy — tiến hóa và di sản hành vi" },
  { slug: "philosophy", label: "Philosophy", vi: "Triết học", icon: "🔭", color: "#5B4FD4", count: "15 bài", desc: "Triết học thực dụng về tự nhận thức, đạo đức và ý nghĩa" },
  { slug: "behavioral-science", label: "Behavioral Science", vi: "Khoa học hành vi", icon: "🔄", color: "#4CAF50", count: "20 bài", desc: "Cách con người thực sự ra quyết định — không phải cách họ nghĩ họ ra quyết định" },
  { slug: "critical-thinking", label: "Critical Thinking", vi: "Tư duy phản biện", icon: "⚖️", color: "#FF9800", count: "16 bài", desc: "Logic, thiên kiến nhận thức và kỹ năng đánh giá bằng chứng" },
  { slug: "health", label: "Health", vi: "Sức khỏe", icon: "💚", color: "#66BB6A", count: "14 bài", desc: "Sức khỏe toàn diện — thể chất, tâm thần và hành vi" },
  { slug: "ai-and-human", label: "AI & Human", vi: "AI & Con người", icon: "🤖", color: "#9C27B0", count: "8 bài", desc: "AI đang thay đổi con người như thế nào — và ngược lại" },
];

export default function ThuVienPage() {
  return (
    <main style={{ flex: 1 }}>
      {/* Hero */}
      <section style={{ backgroundColor: "#F8F4EE", padding: "5rem 0 4rem", borderBottom: "1px solid #E8E3F0" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <p style={{ color: "#7C6FF7", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>Thư Viện Tri Thức</p>
          <h1 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1.25rem", letterSpacing: "-0.03em" }}>
            Kiến thức có căn cứ khoa học<br />được viết bằng ngôn ngữ đời thường
          </h1>
          <p style={{ color: "#6B678F", fontSize: "17px", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto" }}>
            Không phải self-help mơ hồ. Không phải thuật ngữ hàn lâm khó hiểu. Đây là những gì khoa học thực sự nói về con người.
          </p>
        </div>
      </section>

      {/* 9 categories */}
      <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {CATEGORIES.map((cat) => (
              <Link key={cat.slug} href={`/thu-vien/${cat.slug}`} style={{ textDecoration: "none" }}>
                <div
                  className="hover-lift-card-high"
                  style={{ border: "1px solid #E8E3F0", borderRadius: "16px", padding: "2rem", transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s", borderTop: `3px solid ${cat.color}` }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "2.2rem" }}>{cat.icon}</span>
                    <span style={{ backgroundColor: `${cat.color}15`, color: cat.color, fontSize: "12px", fontWeight: 700, padding: "4px 10px", borderRadius: "999px" }}>{cat.count}</span>
                  </div>
                  <p style={{ color: cat.color, fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>{cat.label}</p>
                  <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>{cat.vi}</h2>
                  <p style={{ color: "#6B678F", fontSize: "13px", lineHeight: 1.65 }}>{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 0", backgroundColor: "#F8F4EE", textAlign: "center" }}>
        <div className="container-main">
          <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, marginBottom: "1rem" }}>
            Muốn học có hệ thống hơn?
          </h2>
          <p style={{ color: "#6B678F", fontSize: "15px", lineHeight: 1.75, maxWidth: "480px", margin: "0 auto 2rem" }}>
            Thư viện là nơi đọc tự do. Nếu bạn muốn lộ trình cụ thể — xem Học cùng AIMIND.
          </p>
          <Link href="/hoc-cung-aimind" style={{ backgroundColor: "#7C6FF7", color: "white", padding: "12px 28px", borderRadius: "999px", fontSize: "15px", fontWeight: 700, textDecoration: "none" }}>
            Xem lộ trình học →
          </Link>
        </div>
      </section>
    </main>
  );
}
