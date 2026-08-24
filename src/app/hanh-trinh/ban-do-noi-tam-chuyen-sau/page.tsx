import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bản Đồ Nội Tâm Chuyên Sâu — Khóa Học AIMIND",
  description: "Khóa học 17 bài video giúp bạn quan sát khuôn mẫu hành vi và bắt đầu thực hành những lựa chọn mới. Ưu đãi ra mắt 499.000đ.",
  openGraph: {
    title: "Bản Đồ Nội Tâm Chuyên Sâu — Khóa Học AIMIND",
    description: "499.000đ · Truy cập trọn đời. Hiểu mình để sống khác đi.",
  },
};

import Link from "next/link";

// ─── Khóa học: Bản Đồ Nội Tâm Chuyên Sâu ────────────────────────────────────

export default function KhoaHocPage() {
  const modules = [
    {
      number: "01",
      title: "Đọc kết quả bài test của bạn",
      desc: "Hiểu sâu kết quả bài test — khuôn mẫu của bạn hình thành như thế nào, đang ảnh hưởng đến cuộc sống của bạn ra sao trong thực tế.",
      duration: "3 bài học · 45 phút",
    },
    {
      number: "02",
      title: "Khuôn mẫu đến từ đâu?",
      desc: "Truy về quá khứ để hiểu những trải nghiệm hồi nhỏ đã hình thành cách bạn phản ứng như hôm nay — để không còn tự trách mình.",
      duration: "4 bài học · 60 phút",
    },
    {
      number: "03",
      title: "Cơ thể cũng ghi nhớ",
      desc: "Khuôn mẫu không chỉ nằm trong suy nghĩ — nó sống trong cơ thể. Học cách nhận ra và lắng nghe những tín hiệu cơ thể đang gửi đến bạn.",
      duration: "3 bài học · 50 phút",
    },
    {
      number: "04",
      title: "Làm việc với khuôn mẫu cũ",
      desc: "Công cụ thực hành để làm việc với khuôn mẫu cũ — không phải chiến đấu hay chối bỏ nó, mà là hiểu nó và dần dần sống khác đi.",
      duration: "4 bài học · 70 phút",
    },
    {
      number: "05",
      title: "Xây dựng cách sống mới",
      desc: "Thiết kế hành vi mới từ bên trong — dựa trên hiểu biết thật sự về chính mình, không phải cố ép hay dùng ý chí.",
      duration: "3 bài học · 55 phút",
    },
  ];

  return (
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
              Từ kết quả bài test, đi sâu hơn để hiểu tại sao bạn lại như vậy — và cách thật sự thay đổi, không phải chỉ cố gắng bằng ý chí.
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
                border: "1px solid rgba(124,111,247,0.4)",
                borderRadius: "16px",
                padding: "1.5rem 2rem",
                display: "inline-block",
                marginBottom: "1.5rem",
                position: "relative" as const,
              }}
            >
              {/* Early bird badge */}
              <div style={{
                position: "absolute" as const,
                top: "-12px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#F59E0B",
                color: "#1C1A3E",
                fontSize: "11px",
                fontWeight: 800,
                padding: "3px 14px",
                borderRadius: "999px",
                whiteSpace: "nowrap" as const,
                letterSpacing: "0.04em",
              }}>
                🔥 CHỈ CÒN CHO 20 NGƯỜI ĐẦU TIÊN
              </div>
              <p style={{ color: "#9B96C0", fontSize: "13px", marginBottom: "4px", marginTop: "8px" }}>Học phí ưu đãi ra mắt</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
                <p
                  style={{
                    color: "#5C5A80",
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    textDecoration: "line-through",
                    margin: 0,
                  }}
                >
                  1.500.000 đ
                </p>
                <p
                  style={{
                    color: "white",
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    fontSize: "2rem",
                    fontWeight: 800,
                    margin: 0,
                  }}
                >
                  499.000 đ
                </p>
              </div>
              <p style={{ color: "#F59E0B", fontSize: "12px", fontWeight: 600 }}>Tiết kiệm 1.001.000 đ · Thanh toán một lần · Truy cập trọn đời</p>
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
  );
}
