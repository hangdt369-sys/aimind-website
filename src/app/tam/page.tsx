import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TÂM — Hiểu tâm lý để hiểu hành vi | AIMIND",
  description:
    "Vô thức, niềm tin cốt lõi, schema, attachment, cảm xúc — hiểu tâm lý từ góc độ khoa học để không còn bị mô thức cũ điều khiển.",
  keywords: ["vô thức", "niềm tin cốt lõi", "schema therapy", "attachment", "cảm xúc", "hành vi", "tâm lý học", "AIMIND"],
};

const HIEU_TAM_LY = [
  { icon: "🌊", title: "Vô thức", desc: "95% quyết định của bạn đến từ vô thức — không phải lý trí.", href: "/tam/hieu-tam-ly/vo-thuc" },
  { icon: "🧱", title: "Niềm tin", desc: "Những niềm tin cốt lõi hình thành từ thời thơ ấu và vẫn đang điều khiển bạn.", href: "/tam/hieu-tam-ly/niem-tin" },
  { icon: "🏗️", title: "Schema", desc: "18 khuôn mẫu niềm tin ăn sâu — schema therapy của Jeffrey Young.", href: "/tam/hieu-tam-ly/schema" },
  { icon: "🔗", title: "Attachment", desc: "Cách bạn gắn bó với người thân — và tại sao bạn yêu theo cách đó.", href: "/tam/hieu-tam-ly/attachment" },
  { icon: "🪞", title: "Identity", desc: "Bạn là ai — và bản sắc đó được xây dựng như thế nào?", href: "/tam/hieu-tam-ly/identity" },
  { icon: "🌡️", title: "Cảm xúc", desc: "Cảm xúc là thông tin, không phải kẻ thù — học cách đọc và điều tiết.", href: "/tam/hieu-tam-ly/cam-xuc" },
  { icon: "🛡️", title: "Defense mechanisms", desc: "Các cơ chế tự bảo vệ vô thức bạn dùng mà không biết.", href: "/tam/hieu-tam-ly/defense-mechanisms" },
  { icon: "🔄", title: "Habit", desc: "Tại sao thói quen cứng đầu như vậy — và cách thay đổi từ bên trong.", href: "/tam/hieu-tam-ly/habit" },
];

const HIEU_HANH_VI = [
  { q: "Tại sao tôi lặp lại?", desc: "Bạn cứ vào cùng một kiểu mối quan hệ, cùng một kiểu vấn đề...", href: "/tam/hieu-hanh-vi#lap-lai" },
  { q: "Tại sao tôi biết nhưng vẫn làm?", desc: "Biết điều đúng nhưng vẫn làm điều sai — đây là vấn đề thần kinh, không phải ý chí.", href: "/tam/hieu-hanh-vi#biet-nhung-lam" },
  { q: "Tại sao tôi chọn sai người?", desc: "Sức hút kỳ lạ với những người không tốt cho bạn — có lý do sâu hơn.", href: "/tam/hieu-hanh-vi#chon-sai-nguoi" },
  { q: "Tại sao tôi trì hoãn?", desc: "Procrastination không phải lười — đây là cơ chế tự bảo vệ.", href: "/tam/hieu-hanh-vi#tri-hoan" },
  { q: "Tại sao tôi tự phá hoại?", desc: "Khi mọi thứ suýt tốt thì lại có gì đó xảy ra — self-sabotage.", href: "/tam/hieu-hanh-vi#tu-pha-hoai" },
];

const THUC_HANH_TAM = [
  { icon: "👁️", title: "Tự quan sát", desc: "Kỹ năng nhìn chính mình với đôi mắt trung lập, không phán xét.", href: "/tam/thuc-hanh#tu-quan-sat" },
  { icon: "📔", title: "Journaling", desc: "Viết nhật ký có cấu trúc để khai thác vô thức.", href: "/tam/thuc-hanh#journaling" },
  { icon: "🔀", title: "Reframing", desc: "Đặt lại khung nhìn — thay đổi câu chuyện bạn kể về chính mình.", href: "/tam/thuc-hanh#reframing" },
  { icon: "🪄", title: "Identity work", desc: "Thiết kế lại bản sắc thay vì cố thay đổi hành vi bề mặt.", href: "/tam/thuc-hanh#identity" },
  { icon: "🌱", title: "Behavior change", desc: "Phương pháp thay đổi hành vi có bằng chứng khoa học.", href: "/tam/thuc-hanh#behavior-change" },
];

export default function TamPage() {
  return (
    <main style={{ flex: 1 }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #1C1A3E 0%, #2D1A4E 50%, #1C1A3E 100%)",
          padding: "6rem 0 5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(232,90,113,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(124,111,247,0.15) 0%, transparent 50%)",
          }}
        />
        <div className="container-main" style={{ position: "relative", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "rgba(232,90,113,0.15)", border: "1px solid rgba(232,90,113,0.3)",
              borderRadius: "999px", padding: "6px 16px", marginBottom: "2rem",
            }}
          >
            <span style={{ color: "#E85A71", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Trụ cột 02 — TÂM
            </span>
          </div>
          <h1
            style={{
              color: "white", fontSize: "clamp(2.2rem, 6vw, 3.8rem)", fontWeight: 800,
              lineHeight: 1.15, fontFamily: "'Be Vietnam Pro', sans-serif",
              letterSpacing: "-0.03em", maxWidth: "760px", margin: "0 auto 1.5rem",
            }}
          >
            Tại sao bạn cứ lặp lại<br />cùng một khuôn mẫu?
          </h1>
          <p style={{ color: "#C4C0E0", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", lineHeight: 1.75, maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            Không phải vì bạn yếu đuối hay thiếu ý chí. Mà vì bạn chưa hiểu cơ chế tâm lý đang vận hành bên dưới những lựa chọn đó.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/tam/hieu-tam-ly"
              style={{
                background: "linear-gradient(135deg, #E85A71 0%, #C04060 100%)",
                color: "white", padding: "14px 32px", borderRadius: "999px",
                fontSize: "15px", fontWeight: 700, textDecoration: "none",
                boxShadow: "0 8px 24px rgba(232,90,113,0.3)",
              }}
            >
              Khám phá TÂM →
            </Link>
            <Link
              href="/kham-pha/ban-do-noi-tam"
              style={{
                color: "white", padding: "14px 32px", borderRadius: "999px",
                fontSize: "15px", fontWeight: 600, textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              Làm Mind Test
            </Link>
          </div>
        </div>
      </section>

      {/* Hiểu tâm lý */}
      <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#E85A71", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Hiểu tâm lý</p>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.3 }}>
              8 chủ đề tâm lý học cốt lõi
            </h2>
            <p style={{ color: "#6B678F", fontSize: "15px", lineHeight: 1.75, maxWidth: "560px", margin: "0.75rem auto 0" }}>
              Từ lý thuyết gắn bó đến schema therapy — được giải thích bằng ngôn ngữ đời thường, không thuật ngữ khó hiểu.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {HIEU_TAM_LY.map((item) => (
              <Link key={item.title} href={item.href} style={{ textDecoration: "none" }}>
                <div
                  className="hover-lift-card"
                  style={{
                    backgroundColor: "white", borderRadius: "14px", padding: "1.75rem",
                    border: "1px solid #E8E3F0", transition: "transform 0.2s, box-shadow 0.2s",
                  }}
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

      {/* Hiểu hành vi */}
      <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
        <div className="container-main" style={{ maxWidth: "860px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#7C6FF7", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Hiểu hành vi</p>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800 }}>
              5 câu hỏi bạn chưa có đáp án
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {HIEU_HANH_VI.map((item, i) => (
              <Link key={i} href={item.href} style={{ textDecoration: "none" }}>
                <div
                  className="hover-slide-purple"
                  style={{
                    border: "1px solid #E8E3F0", borderRadius: "14px", padding: "1.5rem 2rem",
                    display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem",
                    transition: "border-color 0.2s, transform 0.15s",
                  }}
                >
                  <div>
                    <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>{item.q}</h3>
                    <p style={{ color: "#6B678F", fontSize: "13px", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                  <span style={{ color: "#7C6FF7", fontSize: "20px", flexShrink: 0 }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Thực hành */}
      <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#18B5B0", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Thực hành</p>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800 }}>
              Từ hiểu biết đến thay đổi thật
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {THUC_HANH_TAM.map((item) => (
              <Link key={item.title} href={item.href} style={{ textDecoration: "none" }}>
                <div
                  className="hover-lift-teal"
                  style={{
                    backgroundColor: "white", borderRadius: "14px", padding: "1.75rem",
                    border: "1px solid #E8E3F0", transition: "border-color 0.2s, transform 0.15s",
                  }}
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

      {/* CTA */}
      <section style={{ padding: "5rem 0", background: "linear-gradient(135deg, #2D1A4E 0%, #1C1A3E 100%)", textAlign: "center" }}>
        <div className="container-main">
          <h2 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, marginBottom: "1rem" }}>
            TÂM hiểu được — khi TRÍ đặt đúng câu hỏi
          </h2>
          <p style={{ color: "#C4C0E0", fontSize: "16px", lineHeight: 1.75, maxWidth: "500px", margin: "0 auto 2.5rem" }}>
            Tư duy phản biện giúp bạn không bị chính mình lừa. Khám phá TRÍ để hoàn thiện bộ ba THÂN – TÂM – TRÍ.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/tri" style={{ background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)", color: "white", padding: "14px 32px", borderRadius: "999px", fontSize: "15px", fontWeight: 700, textDecoration: "none" }}>
              Khám phá TRÍ →
            </Link>
            <Link href="/coaching" style={{ color: "white", padding: "14px 32px", borderRadius: "999px", fontSize: "15px", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>
              Đồng hành 1-1
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
