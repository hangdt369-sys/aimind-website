import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";

const expertise = [
  { label: "Khoa học thần kinh ứng dụng", icon: "🧠" },
  { label: "Tâm lý học hành vi", icon: "🔬" },
  { label: "Enneagram & các hệ thống nhân cách", icon: "🗺️" },
  { label: "Somatic & thân-tâm kết nối", icon: "🌿" },
  { label: "Internal Family Systems (IFS)", icon: "🪞" },
  { label: "Coaching chuyển hóa", icon: "✨" },
];

const approach = [
  {
    step: "01",
    title: "Nhìn thấy trước khi thay đổi",
    desc: "Không ai có thể thay đổi điều họ chưa nhìn thấy. Hanna bắt đầu bằng việc giúp bạn nhận ra mô thức — không phán xét, không ép buộc.",
  },
  {
    step: "02",
    title: "Hiểu cơ chế, không chỉ triệu chứng",
    desc: "Tại sao bạn lặp lại cùng một kiểu quan hệ? Tại sao bạn tự phá hoại chính mình? Hanna đi vào gốc rễ thần kinh và tâm lý.",
  },
  {
    step: "03",
    title: "Thiết kế hành vi mới một cách có khoa học",
    desc: "Thay đổi không đến từ ý chí mà đến từ thiết kế. Hanna dẫn dắt bạn tạo ra môi trường và thói quen khiến hành vi mới trở thành tự nhiên.",
  },
];

export default function DoiNguPage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        {/* Hero */}
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
                Về Hanna Dang
              </div>
              <h1
                style={{
                  color: "white",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                Người đã đi qua hành trình đó trước bạn
              </h1>
              <p style={{ color: "#C4C0E0", fontSize: "16px", lineHeight: 1.85, marginBottom: "2rem" }}>
                Hanna Dang là nhà nghiên cứu tâm lý hành vi, chuyên gia Bản Đồ Nội Tâm
                và người sáng lập AIMIND. Hơn 7 năm nghiên cứu và thực hành —
                không phải từ sách vở mà từ hành trình cá nhân đầy gãy vỡ và tái sinh.
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
                Đăng ký coaching 1-1 →
              </Link>
            </div>
            {/* Avatar placeholder */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "280px",
                  height: "320px",
                  borderRadius: "24px",
                  background: "linear-gradient(135deg, rgba(124,111,247,0.3) 0%, rgba(24,181,176,0.3) 100%)",
                  border: "2px solid rgba(124,111,247,0.3)",
                  display: "flex",
                  flexDirection: "column" as const,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9B96C0",
                  fontSize: "14px",
                  gap: "1rem",
                }}
              >
                <div style={{ fontSize: "3rem" }}>🪞</div>
                <div style={{ textAlign: "center" as const }}>
                  <div style={{ color: "white", fontWeight: 700, marginBottom: "4px" }}>Hanna Dang</div>
                  <div style={{ color: "#9B96C0", fontSize: "13px" }}>Nhà sáng lập AIMIND</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
          <div className="container-main" style={{ maxWidth: "720px" }}>
            <h2
              style={{
                color: "#1C1A3E",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                marginBottom: "2rem",
              }}
            >
              Câu chuyện bắt đầu từ câu hỏi không ai dạy tôi hỏi
            </h2>
            <div style={{ color: "#4A4570", fontSize: "16px", lineHeight: 1.9 }}>
              <p style={{ marginBottom: "1.25rem" }}>
                Có một giai đoạn tôi làm mọi thứ đúng theo sách — học giỏi, làm việc chăm,
                sống có trách nhiệm. Nhưng bên trong luôn có cảm giác gì đó sai sai.
                Tôi không biết mình thật sự muốn gì. Tôi không biết mình đang phản ứng
                theo mô thức nào mà tôi thậm chí không nhận ra là đang tồn tại.
              </p>
              <p style={{ marginBottom: "1.25rem" }}>
                Hành trình đi tìm câu trả lời dẫn tôi qua khoa học thần kinh, tâm lý học sâu,
                Enneagram, somatic therapy, và nhiều hệ thống khác. Tôi nhận ra:
                vấn đề không phải là tôi thiếu ý chí hay thiếu cố gắng.
                Vấn đề là tôi chưa từng <em>thật sự nhìn thấy mình</em>.
              </p>
              <p>
                Khi tôi bắt đầu nhìn thấy — mọi thứ bắt đầu thay đổi. Không phải ngay lập tức,
                không phải dễ dàng, nhưng thật và bền vững. AIMIND được tạo ra để
                bạn không cần mất nhiều năm như tôi để tìm ra điều đó.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
          <div className="container-main">
            <h2
              style={{
                color: "#1C1A3E",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                marginBottom: "2.5rem",
                textAlign: "center",
              }}
            >
              Chuyên môn
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
                maxWidth: "800px",
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
                  <span style={{ fontSize: "1.4rem" }}>{e.icon}</span>
                  <span style={{ color: "#1C1A3E", fontSize: "14px", fontWeight: 600 }}>{e.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
          <div className="container-main" style={{ maxWidth: "760px" }}>
            <h2
              style={{
                color: "#1C1A3E",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                marginBottom: "3rem",
                textAlign: "center",
              }}
            >
              Cách Hanna làm việc
            </h2>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "2rem" }}>
              {approach.map((a) => (
                <div
                  key={a.step}
                  style={{
                    display: "flex",
                    gap: "2rem",
                    alignItems: "flex-start",
                    backgroundColor: "white",
                    borderRadius: "16px",
                    padding: "2rem",
                    border: "1px solid #E8E3F0",
                  }}
                >
                  <div
                    style={{
                      color: "#7C6FF7",
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      fontWeight: 800,
                      fontSize: "2rem",
                      lineHeight: 1,
                      flexShrink: 0,
                      opacity: 0.4,
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

        {/* CTA */}
        <section
          style={{
            padding: "5rem 0",
            background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)",
            textAlign: "center",
          }}
        >
          <div className="container-main">
            <h2
              style={{
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                marginBottom: "1rem",
              }}
            >
              Làm việc cùng Hanna
            </h2>
            <p style={{ color: "#C4C0E0", marginBottom: "2rem", fontSize: "16px" }}>
              Coaching 1-1 hoặc bắt đầu với bài test miễn phí
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" as const }}>
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
                }}
              >
                Đăng ký Coaching 1-1
              </Link>
              <Link
                href="/kham-pha/ban-do-noi-tam"
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
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
