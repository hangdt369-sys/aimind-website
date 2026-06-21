import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hanna Dang — Người sáng lập AIMIND",
  description: "Hanna Dang là người sáng lập AIMIND. Hơn 7 năm nghiên cứu tâm lý học, khoa học nhận thức và hành trình khám phá bản thân — không từ sách vở mà từ cuộc đời thật.",
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

const mentors = [
  {
    name: "Người thầy 1",
    role: "Tên & vai trò — Hanna điền vào",
    contribution: "Điều họ dạy Hanna hoặc ảnh hưởng lớn nhất trong hành trình",
    icon: "🌱",
  },
  {
    name: "Người thầy 2",
    role: "Tên & vai trò — Hanna điền vào",
    contribution: "Điều họ dạy Hanna hoặc ảnh hưởng lớn nhất trong hành trình",
    icon: "🔭",
  },
  {
    name: "Người thầy 3",
    role: "Tên & vai trò — Hanna điền vào",
    contribution: "Điều họ dạy Hanna hoặc ảnh hưởng lớn nhất trong hành trình",
    icon: "💡",
  },
];

const collaborators = [
  {
    name: "Cộng sự 1",
    role: "Vai trò — Hanna điền vào",
    desc: "Mô tả ngắn về cộng sự và đóng góp trong hệ sinh thái AIMIND",
    icon: "🤝",
  },
  {
    name: "Cộng sự 2",
    role: "Vai trò — Hanna điền vào",
    desc: "Mô tả ngắn về cộng sự và đóng góp trong hệ sinh thái AIMIND",
    icon: "🎯",
  },
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
                  position: "relative" as const,
                  flexShrink: 0,
                }}
              >
                  {/* TODO: Upload ảnh thật vào /public/hanna-dang.jpg rồi bỏ comment Image bên dưới */}
                {/* <Image src="/hanna-dang.jpg" alt="Hanna Dang" fill style={{ objectFit: "cover" }} priority /> */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(160deg, #2D2A5E 0%, #3B3772 40%, #7C6FF7 100%)",
                    display: "flex",
                    flexDirection: "column" as const,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingBottom: "2rem",
                  }}
                >
                  <div style={{ fontSize: "5rem", marginBottom: "0.5rem" }}>👩🏻</div>
                  <p style={{ color: "white", fontWeight: 700, fontSize: "15px", fontFamily: "'Be Vietnam Pro', sans-serif" }}>Hanna Dang</p>
                  <p style={{ color: "#B8B3FA", fontSize: "12px" }}>Nhà sáng lập AIMIND</p>
                </div>
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
                Hành trình tìm kiếm đó dẫn Hanna đi qua khoa học nhận thức, tâm lý học sâu, lý thuyết gắn bó, schema therapy, Enneagram, somatic — và quan trọng hơn là đi qua chính mình. Từng lớp. Từng mô thức. Từng vết thương mà cô chưa biết là đang tồn tại.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                Hanna tin rằng phần lớn những khó khăn trong cuộc sống không đến từ việc chúng ta chưa đủ giỏi hay chưa đủ cố gắng — mà đến từ việc chúng ta chưa thật sự hiểu mình. Khi nhìn rõ những khuôn mẫu vô thức, niềm tin sâu bên trong và cơ chế vận hành của tâm trí, mỗi người đều có cơ hội tạo ra những thay đổi sâu sắc và bền vững hơn.
              </p>
              <p>
                AIMIND được xây dựng từ niềm tin đó. Không phải để nói cho bạn biết bạn là ai — mà để giúp bạn nhìn thấy chính mình rõ ràng hơn, hiểu điều gì đang vận hành bên trong, và từng bước sống một cuộc đời phù hợp với con người thật của mình.
              </p>
            </div>
          </div>
        </section>

        {/* ── Chuyên môn ───────────────────────────────────────── */}
        <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
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
                    backgroundColor: "#F8F4EE",
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

        {/* ── Người thầy lớn ────────────────────────────────────── */}
        <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
          <div className="container-main" style={{ maxWidth: "860px" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p style={{ color: "#7C6FF7", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: "0.5rem" }}>
                Người đã định hình hành trình
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
                Những người thầy lớn trong đời Hanna
              </h2>
              <p style={{ color: "#6B678F", fontSize: "15px", lineHeight: 1.75 }}>
                Không ai đi được một mình. Đây là những người đã giúp Hanna nhìn thấy điều cô chưa thể thấy một mình.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {mentors.map((m) => (
                <div
                  key={m.name}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "16px",
                    padding: "2rem",
                    border: "1px solid #E8E3F0",
                    borderTop: "4px solid #7C6FF7",
                  }}
                >
                  <span style={{ fontSize: "2rem", display: "block", marginBottom: "1rem" }}>{m.icon}</span>
                  <h3
                    style={{
                      color: "#1C1A3E",
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      fontWeight: 700,
                      fontSize: "17px",
                      marginBottom: "4px",
                    }}
                  >
                    {m.name}
                  </h3>
                  <p style={{ color: "#7C6FF7", fontSize: "13px", fontWeight: 600, marginBottom: "0.75rem" }}>
                    {m.role}
                  </p>
                  <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.75 }}>{m.contribution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cộng sự đồng hành ─────────────────────────────────── */}
        <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
          <div className="container-main" style={{ maxWidth: "860px" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p style={{ color: "#18B5B0", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: "0.5rem" }}>
                Đồng hành xây dựng
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
                Những cộng sự của AIMIND
              </h2>
              <p style={{ color: "#6B678F", fontSize: "15px", lineHeight: 1.75 }}>
                AIMIND không được xây bởi một người. Đây là những người đang cùng Hanna đưa công cụ này đến với nhiều người hơn.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {collaborators.map((c) => (
                <div
                  key={c.name}
                  style={{
                    backgroundColor: "#F8F4EE",
                    borderRadius: "16px",
                    padding: "2rem",
                    border: "1px solid #E8E3F0",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ fontSize: "2rem", flexShrink: 0 }}>{c.icon}</span>
                  <div>
                    <h3
                      style={{
                        color: "#1C1A3E",
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                        marginBottom: "4px",
                      }}
                    >
                      {c.name}
                    </h3>
                    <p style={{ color: "#18B5B0", fontSize: "13px", fontWeight: 600, marginBottom: "0.5rem" }}>
                      {c.role}
                    </p>
                    <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.7 }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cách làm việc ─────────────────────────────────────── */}
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
                  desc: "Không ai có thể thay đổi điều họ chưa nhìn thấy. Hanna bắt đầu bằng việc giúp bạn nhận ra khuôn mẫu đang vận hành — không gán nhãn, không so sánh, không ép buộc phải khác đi ngay.",
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
                  desc: "Thay đổi thật không đến từ ý chí hay cố gắng — mà đến từ hiểu biết. Khi bạn hiểu mình đủ sâu, hành vi mới trở nên tự nhiên thay vì phải ép buộc.",
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
                      opacity: 0.3,
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

        {/* ── Quote cá nhân ─────────────────────────────────────── */}
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
