import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

// ─── Khóa học: Bản Đồ Nội Tâm Chuyên Sâu ────────────────────────────────────

export default function KhoaHocPage() {
  const modules = [
    {
      number: "01",
      title: "Đọc bản đồ của bạn",
      desc: "Hiểu sâu kết quả bài test — mô thức của bạn hình thành như thế nào, biểu hiện ra sao trong cuộc sống thực.",
      duration: "3 bài học · 45 phút",
    },
    {
      number: "02",
      title: "Nguồn gốc của mô thức",
      desc: "Truy ngược về tuổi thơ và những quyết định vô thức đã lập trình nên cách bạn phản ứng hôm nay.",
      duration: "4 bài học · 60 phút",
    },
    {
      number: "03",
      title: "Hệ thần kinh và cơ thể",
      desc: "Mô thức không chỉ trong đầu — nó sống trong cơ thể. Học cách nhận ra và làm việc với tín hiệu cơ thể.",
      duration: "3 bài học · 50 phút",
    },
    {
      number: "04",
      title: "Tháo gỡ từng lớp",
      desc: "Công cụ thực hành để làm việc với mô thức — không phải chiến đấu hay chối bỏ, mà là hiểu và tích hợp.",
      duration: "4 bài học · 70 phút",
    },
    {
      number: "05",
      title: "Cài đặt mô thức mới",
      desc: "Xây dựng hành vi mới từ bên trong — dựa trên hiểu biết sâu sắc về chính mình, không phải ý chí.",
      duration: "3 bài học · 55 phút",
    },
  ];

  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(160deg, #1C1A3E 0%, #3B3772 100%)",
            padding: "5rem 0 4rem",
            textAlign: "center",
          }}
        >
          <div className="container-main">
            <div
              style={{
                display: "inline-block",
                backgroundColor: "rgba(124,111,247,0.2)",
                border: "1px solid rgba(124,111,247,0.4)",
                borderRadius: "999px",
                padding: "4px 16px",
                fontSize: "12px",
                fontWeight: 700,
                color: "#B8B3FA",
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                marginBottom: "1.5rem",
              }}
            >
              Khóa học chuyên sâu
            </div>

            <h1
              style={{
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Bản Đồ Nội Tâm{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #B8B3FA 0%, #18B5B0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Chuyên Sâu
              </span>
            </h1>

            <p
              style={{
                color: "#C4C0E0",
                fontSize: "1.1rem",
                maxWidth: "560px",
                margin: "0 auto 2rem",
                lineHeight: 1.75,
              }}
            >
              Từ kết quả bài test, đi sâu vào hiểu tại sao mô thức đó hình thành — và cách bắt đầu thay đổi từ gốc rễ.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "2.5rem",
              }}
            >
              {[
                { label: "17 bài học video", icon: "🎥" },
                { label: "Workbook PDF", icon: "📝" },
                { label: "Truy cập trọn đời", icon: "♾️" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#C4C0E0",
                    fontSize: "14px",
                  }}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>

            {/* Price CTA */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "16px",
                padding: "1.5rem 2rem",
                display: "inline-block",
                marginBottom: "1.5rem",
              }}
            >
              <p style={{ color: "#9B96C0", fontSize: "13px", marginBottom: "4px" }}>Học phí</p>
              <p
                style={{
                  color: "white",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 800,
                  marginBottom: "4px",
                }}
              >
                1.500.000 đ
              </p>
              <p style={{ color: "#9B96C0", fontSize: "12px" }}>Thanh toán một lần · Truy cập trọn đời</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <Link
                href="/lien-he"
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
                  color: "white",
                  padding: "14px 32px",
                  borderRadius: "999px",
                  fontSize: "16px",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                }}
              >
                Đăng ký tham gia →
              </Link>
              <p style={{ color: "#9B96C0", fontSize: "13px" }}>
                Thanh toán qua chuyển khoản ngân hàng
              </p>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section style={{ padding: "4rem 0", backgroundColor: "#F8F4EE" }}>
          <div className="container-main">
            <h2
              style={{
                color: "#1C1A3E",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "1.8rem",
                fontWeight: 800,
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              Nội dung khóa học
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "720px", margin: "0 auto" }}>
              {modules.map((mod) => (
                <div
                  key={mod.number}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "14px",
                    padding: "1.5rem",
                    border: "1px solid #E8E3F0",
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 900,
                      color: "#7C6FF7",
                      opacity: 0.25,
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    {mod.number}
                  </span>
                  <div>
                    <h3
                      style={{
                        color: "#1C1A3E",
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {mod.title}
                    </h3>
                    <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                      {mod.desc}
                    </p>
                    <span style={{ color: "#9B96C0", fontSize: "12px" }}>{mod.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA bottom */}
        <section
          style={{
            padding: "4rem 0",
            background: "linear-gradient(135deg, #1C1A3E 0%, #3B3772 100%)",
            textAlign: "center",
          }}
        >
          <div className="container-main">
            <h2
              style={{
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "2rem",
                fontWeight: 800,
                marginBottom: "1rem",
              }}
            >
              Sẵn sàng nhìn thấy sâu hơn?
            </h2>
            <p style={{ color: "#C4C0E0", marginBottom: "2rem" }}>
              Nếu chưa làm bài test, hãy bắt đầu từ đó trước.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/kham-pha/ban-do-noi-tam"
                style={{
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Làm bài test trước
              </Link>
              <Link
                href="/lien-he"
                style={{
                  background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Đăng ký khóa học →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
