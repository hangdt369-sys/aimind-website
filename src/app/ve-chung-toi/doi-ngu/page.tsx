import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hanna Dang — Người sáng lập AIMIND",
  description: "Hanna Dang là người sáng lập AIMIND. Hơn 7 năm quan sát, nghiên cứu và đi qua hành trình khám phá chính mình — không phải từ sách vở mà từ cuộc đời thật.",
};

const expertise = [
  { label: "Khoa học nhận thức & não bộ", icon: "🧠" },
  { label: "Tâm lý học hành vi", icon: "🔬" },
  { label: "Enneagram & hệ thống nhân cách", icon: "🗺️" },
  { label: "Somatic — thân tâm kết nối", icon: "🌿" },
  { label: "Internal Family Systems (IFS)", icon: "🪞" },
  { label: "Lý thuyết gắn bó (Attachment)", icon: "🔗" },
  { label: "Schema Therapy", icon: "🏗️" },
  { label: "Coaching chuyển hóa", icon: "✨" },
];

export default function DoiNguPage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          style={{
            background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)",
            padding: "7rem 0 5rem",
          }}
        >
          <div
            className="container-main"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "4rem",
              alignItems: "center",
              maxWidth: "900px",
            }}
          >
            {/* Text */}
            <div>
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(124,111,247,0.15)",
                  border: "1px solid rgba(124,111,247,0.3)",
                  borderRadius: "999px",
                  padding: "6px 20px",
                  color: "#B8B3FA",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase" as const,
                  marginBottom: "1.5rem",
                }}
              >
                Người sáng lập
              </div>
              <h1
                style={{
                  color: "white",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: "0.5rem",
                }}
              >
                Hanna Dang
              </h1>
              <p
                style={{
                  color: "#7C6FF7",
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "1.5rem",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                }}
              >
                Nhà nghiên cứu tâm lý hành vi · Người sáng lập AIMIND
              </p>
              <p style={{ color: "#C4C0E0", fontSize: "16px", lineHeight: 1.85, marginBottom: "2rem" }}>
                Hanna dành nhiều năm quan sát, nghiên cứu và đi qua hành trình khám phá chính mình — không bắt đầu từ học thuật mà từ những câu hỏi rất đời thường không ai dạy cô phải hỏi.
              </p>
              <Link
                href="/dong-hanh"
                style={{
                  display: "inline-block",
                  background: "rgba(124,111,247,0.2)",
                  border: "1px solid rgba(124,111,247,0.4)",
                  color: "#B8B3FA",
                  padding: "12px 28px",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                }}
              >
                Đăng ký đồng hành 1-1 →
              </Link>
            </div>

            {/* Photo */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "280px",
                  height: "340px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "3px solid rgba(124,111,247,0.4)",
                  boxShadow: "0 20px 60px rgba(124,111,247,0.25)",
                  flexShrink: 0,
                  position: "relative" as const,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hanna.jpg.jpg"
                  alt="Hanna Dang — Người sáng lập AIMIND"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Câu chuyện ───────────────────────────────────────── */}
        <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
          <div className="container-main" style={{ maxWidth: "760px" }}>
            <p
              style={{
                color: "#7C6FF7",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                marginBottom: "1rem",
              }}
            >
              Câu chuyện
            </p>
            <h2
              style={{
                color: "#1C1A3E",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 800,
                marginBottom: "2rem",
                lineHeight: 1.3,
              }}
            >
              Bắt đầu từ những câu hỏi không ai dạy tôi phải hỏi
            </h2>
            <div style={{ color: "#4A4570", fontSize: "16px", lineHeight: 1.95 }}>
              <p style={{ marginBottom: "1.5rem" }}>
                <em style={{ color: "#1C1A3E", fontWeight: 600 }}>"Tại sao mình luôn lặp lại những điều mình không muốn?"</em>
                {" "}<em style={{ color: "#1C1A3E", fontWeight: 600 }}>"Điều gì thực sự đang dẫn dắt các quyết định của mình?"</em>
                {" "}<em style={{ color: "#1C1A3E", fontWeight: 600 }}>"Làm thế nào để sống đúng với chính mình hơn?"</em>
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                Đó là những câu hỏi Hanna bắt đầu đặt ra — không phải trong sách vở mà từ cuộc sống của chính mình. Cô không tìm kiếm lý thuyết. Cô đang cố hiểu tại sao mình làm những điều mình làm, cảm những điều mình cảm, và lặp đi lặp lại những vòng tròn mà dù cố thoát cũng không ra.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                Hành trình tìm kiếm đó dẫn Hanna đi qua khoa học nhận thức, tâm lý học sâu, lý thuyết gắn bó, schema therapy, Enneagram, somatic — và quan trọng hơn là đi qua chính mình. Từng lớp. Từng khuôn mẫu. Từng vết thương mà cô chưa biết là đang tồn tại.
              </p>
              <p>
                Hanna tin rằng phần lớn những khó khăn trong cuộc sống không đến từ việc chúng ta chưa đủ giỏi hay chưa đủ cố gắng — mà đến từ việc chúng ta chưa thật sự hiểu mình. Khi nhìn rõ những khuôn mẫu vô thức, niềm tin sâu bên trong và cơ chế vận hành của tâm trí, mỗi người đều có cơ hội tạo ra những thay đổi sâu sắc và bền vững hơn.
              </p>
            </div>
          </div>
        </section>

        {/* ── Quan sát — nguồn gốc của AIMIND ─────────────────── */}
        <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
          <div className="container-main" style={{ maxWidth: "860px" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #1C1A3E 0%, #2D2A5E 100%)",
                borderRadius: "24px",
                padding: "3rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2.5rem",
                alignItems: "center",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#B8B3FA",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase" as const,
                    marginBottom: "1rem",
                  }}
                >
                  Nguồn gốc của AIMIND
                </p>
                <h3
                  style={{
                    color: "white",
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    lineHeight: 1.35,
                    marginBottom: "1.25rem",
                  }}
                >
                  Không chỉ từ nghiên cứu — mà từ quan sát
                </h3>
                <p style={{ color: "#C4C0E0", fontSize: "15px", lineHeight: 1.85 }}>
                  AIMIND được xây dựng từ nhiều năm Hanna quan sát chính mình và những người xung quanh — bạn bè, người thân, người Hanna đồng hành. Cô nhận ra một điều lặp đi lặp lại: con người không thiếu thông tin, không thiếu nỗ lực — họ thiếu <strong style={{ color: "white" }}>công cụ để nhìn thấy chính mình</strong>.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "1rem" }}>
                {[
                  { icon: "👁️", text: "Quan sát bản thân qua nhiều năm — không phán xét, chỉ nhìn thấy" },
                  { icon: "👥", text: "Quan sát những người xung quanh — cùng câu hỏi, cùng vòng lặp" },
                  { icon: "🔗", text: "Nhận ra: khuôn mẫu của mỗi người đều có lý do riêng để tồn tại" },
                  { icon: "💡", text: "Từ đó xây hệ thống giúp mỗi người nhìn thấy — không phán xét" },
                ].map((item) => (
                  <div
                    key={item.text}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                      backgroundColor: "rgba(255,255,255,0.06)",
                      borderRadius: "12px",
                      padding: "0.85rem 1rem",
                    }}
                  >
                    <span style={{ fontSize: "18px", flexShrink: 0 }}>{item.icon}</span>
                    <p style={{ color: "#C4C0E0", fontSize: "14px", lineHeight: 1.6 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Chuyên môn ───────────────────────────────────────── */}
        <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
          <div className="container-main">
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <p style={{ color: "#7C6FF7", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: "0.5rem" }}>
                Nền tảng nghiên cứu
              </p>
              <h2
                style={{
                  color: "#1C1A3E",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 800,
                }}
              >
                Các lĩnh vực Hanna nghiên cứu sâu
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
                maxWidth: "860px",
                margin: "0 auto",
              }}
            >
              {expertise.map((e) => (
                <div
                  key={e.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    padding: "1rem 1.25rem",
                    border: "1px solid #E8E3F0",
                  }}
                >
                  <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{e.icon}</span>
                  <span style={{ color: "#1C1A3E", fontSize: "14px", fontWeight: 600 }}>{e.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Người thầy & Tri kỷ ──────────────────────────────── */}
        <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
          <div className="container-main" style={{ maxWidth: "760px" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p style={{ color: "#7C6FF7", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: "0.5rem" }}>
                Người đã định hình Hanna
              </p>
              <h2
                style={{
                  color: "#1C1A3E",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 800,
                  lineHeight: 1.3,
                  marginBottom: "0.75rem",
                }}
              >
                Người thầy và tri kỷ
              </h2>
              <p style={{ color: "#6B678F", fontSize: "15px", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto" }}>
                Có những người trong cuộc đời vừa là thầy, vừa là tri kỷ — người nhìn thấy bạn trước khi bạn nhìn thấy chính mình.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#F8F4EE",
                borderRadius: "24px",
                padding: "2.5rem 3rem",
                border: "1px solid #E8E3F0",
                borderLeft: "5px solid #7C6FF7",
                display: "flex",
                gap: "2rem",
                alignItems: "flex-start",
              }}
            >
              <div style={{ fontSize: "3rem", flexShrink: 0, lineHeight: 1, paddingTop: "4px" }}>🌿</div>
              <div>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" as const }}>
                  {["Người thầy lớn", "Tri kỷ"].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: "rgba(124,111,247,0.1)",
                        border: "1px solid rgba(124,111,247,0.25)",
                        borderRadius: "999px",
                        padding: "3px 14px",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#7C6FF7",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase" as const,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p style={{ color: "#4A4570", fontSize: "15px", lineHeight: 1.85 }}>
                  Có một người trong cuộc đời Hanna vừa là người thầy dẫn đường, vừa là người tri kỷ thật sự hiểu cô. Người này đã giúp Hanna nhìn thấy những phần trong bản thân mà cô chưa dám nhìn — không bằng cách chỉ bảo, mà bằng cách ở bên và phản chiếu lại sự thật một cách nhẹ nhàng.
                </p>
                <p style={{ color: "#4A4570", fontSize: "15px", lineHeight: 1.85, marginTop: "1rem" }}>
                  Chính những cuộc trò chuyện với người này — đôi khi chỉ là một câu hỏi đặt ra đúng lúc — đã thay đổi cách Hanna nhìn về bản thân, về mối quan hệ, và về con người nói chung. AIMIND mang trong đó dấu ấn của những cuộc trò chuyện đó.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Cách đồng hành ───────────────────────────────────── */}
        <section
          style={{
            padding: "5rem 0",
            background: "linear-gradient(180deg, #F8F4EE 0%, white 100%)",
          }}
        >
          <div className="container-main" style={{ maxWidth: "760px" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p style={{ color: "#7C6FF7", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: "0.5rem" }}>
                Phương pháp
              </p>
              <h2
                style={{
                  color: "#1C1A3E",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 800,
                }}
              >
                Cách Hanna đồng hành
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.5rem" }}>
              {[
                {
                  step: "01",
                  title: "Nhìn thấy trước — không phán xét",
                  desc: "Không ai có thể thay đổi điều họ chưa nhìn thấy. Hanna bắt đầu bằng việc giúp bạn nhận ra khuôn mẫu đang vận hành — không gán nhãn, không ép buộc phải khác đi ngay.",
                  color: "#7C6FF7",
                },
                {
                  step: "02",
                  title: "Hiểu cơ chế, không chỉ triệu chứng",
                  desc: "Tại sao bạn lặp lại cùng một kiểu quan hệ? Tại sao bạn tự phá hoại những điều tốt đẹp? Hanna đi vào gốc rễ — không dừng ở bề mặt hành vi.",
                  color: "#18B5B0",
                },
                {
                  step: "03",
                  title: "Thiết kế thay đổi từ bên trong",
                  desc: "Thay đổi thật không đến từ ý chí hay cố gắng — mà đến từ hiểu biết sâu. Khi bạn hiểu mình đủ rõ, hành vi mới trở nên tự nhiên thay vì phải ép buộc.",
                  color: "#5B4FD4",
                },
              ].map((a) => (
                <div
                  key={a.step}
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "flex-start",
                    backgroundColor: "white",
                    borderRadius: "16px",
                    padding: "1.75rem 2rem",
                    border: "1px solid #E8E3F0",
                    borderLeft: `4px solid ${a.color}`,
                  }}
                >
                  <div
                    style={{
                      color: a.color,
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.8rem",
                      lineHeight: 1,
                      flexShrink: 0,
                      opacity: 0.25,
                      marginTop: "2px",
                    }}
                  >
                    {a.step}
                  </div>
                  <div>
                    <h3
                      style={{
                        color: "#1C1A3E",
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        fontWeight: 700,
                        fontSize: "17px",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {a.title}
                    </h3>
                    <p style={{ color: "#6B678F", fontSize: "15px", lineHeight: 1.75 }}>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quote ────────────────────────────────────────────── */}
        <section
          style={{
            padding: "4rem 0",
            background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)",
          }}
        >
          <div className="container-main" style={{ maxWidth: "680px", textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>💬</div>
            <blockquote
              style={{
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                fontWeight: 700,
                lineHeight: 1.6,
                fontStyle: "italic",
                marginBottom: "1.5rem",
              }}
            >
              &ldquo;Bạn không thể thay đổi điều bạn chưa nhìn thấy. Và khi bạn thật sự nhìn thấy — không phải chỉ bằng đầu óc mà bằng cả cơ thể và cảm xúc — mọi thứ bắt đầu dịch chuyển theo cách bạn không ngờ.&rdquo;
            </blockquote>
            <p style={{ color: "#9B96C0", fontSize: "14px" }}>— Hanna Dang</p>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section
          style={{
            padding: "5rem 0",
            backgroundColor: "white",
            textAlign: "center",
          }}
        >
          <div className="container-main">
            <h2
              style={{
                color: "#1C1A3E",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                marginBottom: "1rem",
              }}
            >
              Làm việc cùng Hanna
            </h2>
            <p style={{ color: "#6B678F", marginBottom: "2.5rem", fontSize: "16px", lineHeight: 1.75 }}>
              Coaching 1-1 hoặc bắt đầu với bài test miễn phí để Hanna hiểu bạn hơn trước khi đồng hành.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap" as const,
              }}
            >
              <Link
                href="/dong-hanh"
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
                  color: "white",
                  padding: "14px 32px",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  boxShadow: "0 6px 24px rgba(124,111,247,0.3)",
                }}
              >
                Đăng ký đồng hành 1-1
              </Link>
              <Link
                href="/kham-pha/ban-do-noi-tam"
                style={{
                  display: "inline-block",
                  backgroundColor: "#F8F4EE",
                  border: "1px solid #E8E3F0",
                  color: "#1C1A3E",
                  padding: "14px 32px",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                }}
              >
                Làm bài test miễn phí
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
