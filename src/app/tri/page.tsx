import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TRÍ — Tư duy phản biện & Khoa học con người | AIMIND",
  description:
    "Tư duy phản biện, thiên kiến nhận thức, não bộ, hormone, neuroscience — TRÍ giúp bạn không bị chính mình lừa và hiểu con người từ gốc rễ khoa học.",
  keywords: ["tư duy phản biện", "thiên kiến nhận thức", "não bộ", "neuroscience", "critical thinking", "cognitive bias", "AIMIND"],
};

const TU_DUY = [
  { icon: "👁️", title: "Quan sát vs Diễn giải", desc: "Phân biệt được cái bạn thấy và cái bạn đang thêm vào.", href: "/tri/tu-duy-phan-bien#quan-sat" },
  { icon: "⚖️", title: "Fact vs Opinion", desc: "Rất nhiều 'sự thật' trong đầu bạn thực ra là ý kiến.", href: "/tri/tu-duy-phan-bien#fact-opinion" },
  { icon: "🧮", title: "Logic", desc: "Cách lập luận hợp lệ — và những lỗi logic phổ biến nhất.", href: "/tri/tu-duy-phan-bien#logic" },
  { icon: "🔗", title: "Causal Reasoning", desc: "Tư duy nhân quả — nguyên nhân thật sự là gì?", href: "/tri/tu-duy-phan-bien#causal" },
  { icon: "📊", title: "Correlation vs Causation", desc: "Hai thứ xảy ra cùng nhau không có nghĩa là cái này gây ra cái kia.", href: "/tri/tu-duy-phan-bien#correlation" },
  { icon: "🔬", title: "Evidence", desc: "Bằng chứng tốt trông như thế nào — và làm sao đánh giá nguồn tin.", href: "/tri/tu-duy-phan-bien#evidence" },
  { icon: "🚫", title: "Falsification", desc: "Một lý thuyết tốt phải có khả năng bị chứng minh sai.", href: "/tri/tu-duy-phan-bien#falsification" },
];

const THIEN_KIEN = [
  { name: "Confirmation bias", desc: "Chỉ tìm kiếm thông tin xác nhận điều mình đã tin", color: "#E85A71" },
  { name: "Availability bias", desc: "Đánh giá xác suất dựa trên ví dụ dễ nhớ nhất", color: "#E8925A" },
  { name: "Anchoring", desc: "Bị ảnh hưởng bởi con số đầu tiên nghe được", color: "#7C6FF7" },
  { name: "Survivorship bias", desc: "Chỉ nhìn thấy người thành công, không thấy người thất bại", color: "#18B5B0" },
  { name: "Fundamental attribution error", desc: "Đổ lỗi tính cách của người khác, đổ lỗi hoàn cảnh của mình", color: "#4CAF50" },
];

const KHOA_HOC = [
  { icon: "🧠", title: "Não bộ", desc: "Kiến trúc của não — 3 não trong 1, cách chúng phối hợp và xung đột.", href: "/tri/khoa-hoc-con-nguoi#nao-bo" },
  { icon: "⚡", title: "Hệ thần kinh", desc: "Hệ thần kinh tự chủ — giao cảm vs phó giao cảm, polyvagal theory.", href: "/tri/khoa-hoc-con-nguoi#he-than-kinh" },
  { icon: "💉", title: "Hormone", desc: "Cortisol, oxytocin, adrenaline... — các hormone điều khiển cảm xúc và hành vi.", href: "/tri/khoa-hoc-con-nguoi#hormone" },
  { icon: "🔮", title: "Neurotransmitters", desc: "Dopamine, serotonin, GABA — hóa chất não và cách chúng ảnh hưởng đến bạn.", href: "/tri/khoa-hoc-con-nguoi#neurotransmitters" },
  { icon: "🦎", title: "Tiến hóa", desc: "Tại sao não bạn vẫn phản ứng như thời tiền sử — và cách thích nghi.", href: "/tri/khoa-hoc-con-nguoi#tien-hoa" },
];

export default function TriPage() {
  return (
    <main style={{ flex: 1 }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #1C1A3E 0%, #1a2a3E 50%, #0D1A2E 100%)",
          padding: "6rem 0 5rem", position: "relative", overflow: "hidden",
        }}
      >
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 80%, rgba(91,79,212,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(24,181,176,0.1) 0%, transparent 50%)" }} />
        <div className="container-main" style={{ position: "relative", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(91,79,212,0.2)", border: "1px solid rgba(91,79,212,0.4)", borderRadius: "999px", padding: "6px 16px", marginBottom: "2rem" }}>
            <span style={{ color: "#B8B3FA", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Trụ cột 03 — TRÍ</span>
          </div>
          <h1 style={{ color: "white", fontSize: "clamp(2.2rem, 6vw, 3.8rem)", fontWeight: 800, lineHeight: 1.15, fontFamily: "'Be Vietnam Pro', sans-serif", letterSpacing: "-0.03em", maxWidth: "760px", margin: "0 auto 1.5rem" }}>
            Bạn có đang bị chính<br />mình lừa không?
          </h1>
          <p style={{ color: "#C4C0E0", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", lineHeight: 1.75, maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            TRÍ không phải về IQ hay học giỏi. Đây là khả năng nhìn thấy sự thật — về thế giới, về người khác, và đặc biệt là về chính mình.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/tri/tu-duy-phan-bien" style={{ background: "linear-gradient(135deg, #5B4FD4 0%, #4035A8 100%)", color: "white", padding: "14px 32px", borderRadius: "999px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 24px rgba(91,79,212,0.35)" }}>
              Bắt đầu với Tư duy →
            </Link>
            <Link href="/tri/lop-hoc" style={{ color: "white", padding: "14px 32px", borderRadius: "999px", fontSize: "15px", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.25)" }}>
              Lớp học thứ 7
            </Link>
          </div>
        </div>
      </section>

      {/* Tư duy phản biện */}
      <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#5B4FD4", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Tư duy phản biện</p>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800 }}>
              7 kỹ năng tư duy cốt lõi
            </h2>
            <p style={{ color: "#6B678F", fontSize: "15px", lineHeight: 1.75, maxWidth: "540px", margin: "0.75rem auto 0" }}>
              Không phải để tranh luận thắng — mà để không bị lừa bởi chính mình và người khác.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {TU_DUY.map((item) => (
              <Link key={item.title} href={item.href} style={{ textDecoration: "none" }}>
                <div
                  style={{ backgroundColor: "#F8F4EE", borderRadius: "14px", padding: "1.75rem", border: "1px solid #E8E3F0", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(28,26,62,0.08)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  <span style={{ fontSize: "2rem", display: "block", marginBottom: "1rem" }}>{item.icon}</span>
                  <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: "#6B678F", fontSize: "13px", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Thiên kiến */}
      <section style={{ padding: "5rem 0", background: "linear-gradient(180deg, #1C1A3E 0%, #2D2A5E 100%)" }}>
        <div className="container-main" style={{ maxWidth: "860px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#18B5B0", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Thiên kiến nhận thức</p>
            <h2 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800 }}>
              5 thiên kiến đang ảnh hưởng bạn mỗi ngày
            </h2>
            <p style={{ color: "#9B96C0", fontSize: "15px", lineHeight: 1.75, maxWidth: "520px", margin: "0.75rem auto 0" }}>
              Não bộ tạo ra lối tắt để tiết kiệm năng lượng — và đây là cái giá bạn phải trả.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {THIEN_KIEN.map((item) => (
              <Link key={item.name} href={`/tri/thien-kien-nhan-thuc#${item.name.toLowerCase().replace(/ /g, "-")}`} style={{ textDecoration: "none" }}>
                <div
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "14px", padding: "1.25rem 1.75rem", display: "flex", alignItems: "center", gap: "1rem", transition: "background 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.09)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"}
                >
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: item.color, flexShrink: 0 }} />
                  <div>
                    <h3 style={{ color: "white", fontWeight: 700, fontSize: "15px", marginBottom: "2px", fontFamily: "'Be Vietnam Pro', sans-serif" }}>{item.name}</h3>
                    <p style={{ color: "#9B96C0", fontSize: "13px", lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                  <span style={{ color: item.color, marginLeft: "auto", fontSize: "18px", flexShrink: 0 }}>→</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/tri/thien-kien-nhan-thuc" style={{ color: "#18B5B0", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
              Xem tất cả thiên kiến →
            </Link>
          </div>
        </div>
      </section>

      {/* Khoa học con người */}
      <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#7C6FF7", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Khoa học về con người</p>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800 }}>
              Hiểu người qua lăng kính khoa học
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {KHOA_HOC.map((item) => (
              <Link key={item.title} href={item.href} style={{ textDecoration: "none" }}>
                <div
                  style={{ backgroundColor: "white", borderRadius: "14px", padding: "1.75rem", border: "1px solid #E8E3F0", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(28,26,62,0.08)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  <span style={{ fontSize: "2rem", display: "block", marginBottom: "1rem" }}>{item.icon}</span>
                  <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: "#6B678F", fontSize: "13px", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lớp học thứ 7 */}
      <section style={{ padding: "5rem 0", background: "linear-gradient(135deg, #1C1A3E 0%, #2D2A5E 100%)", textAlign: "center" }}>
        <div className="container-main">
          <p style={{ color: "#B8B3FA", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>Lớp học thứ 7</p>
          <h2 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.3 }}>
            Thứ 7 hàng tuần — Cùng nhau tư duy phản biện
          </h2>
          <p style={{ color: "#C4C0E0", fontSize: "16px", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto 2.5rem" }}>
            Case study thực tế. Thảo luận mở. Bài tập tư duy. Cộng đồng những người muốn hiểu sâu hơn về thế giới và chính mình.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/tri/lop-hoc" style={{ background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)", color: "white", padding: "14px 32px", borderRadius: "999px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 24px rgba(124,111,247,0.35)" }}>
              Tham gia lớp học →
            </Link>
            <Link href="/cong-dong" style={{ color: "white", padding: "14px 32px", borderRadius: "999px", fontSize: "15px", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>
              Cộng đồng AIMIND
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
