import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sứ Mệnh AIMIND — Hệ thống nhận diện bản thân đầu tiên tại Việt Nam",
  description: "AIMIND được xây dựng để giúp người Việt nhìn thấy những khuôn mẫu hành vi đang định hình cuộc đời họ — và lần đầu tiên có lựa chọn thật sự.",
};

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";

const values = [
  {
    icon: "🧠",
    title: "Tự nhận thức sâu",
    desc: "Mọi thay đổi thật sự đều bắt đầu từ việc dừng lại và nhìn thấy mình — không phán xét, không né tránh, không tô hồng.",
  },
  {
    icon: "🔬",
    title: "Dựa trên khoa học",
    desc: "Mọi phương pháp tại AIMIND đều có nền tảng từ khoa học thần kinh (não bộ), tâm lý học hành vi và các nghiên cứu đã được kiểm chứng — không phải lý thuyết cảm tính.",
  },
  {
    icon: "🌱",
    title: "Chuyển hóa thực tế",
    desc: "Không dừng ở việc hiểu. Mục tiêu là hành vi thật sự thay đổi — cách bạn phản ứng, cách bạn lựa chọn, cách bạn sống từng ngày.",
  },
  {
    icon: "🤝",
    title: "Đồng hành không phán xét",
    desc: "Mỗi người có hành trình riêng. Chúng tôi ở đây để đồng hành — không áp đặt, không so sánh.",
  },
];

const milestones = [
  { year: "2019", event: "Hanna Dang bắt đầu hành trình nghiên cứu tâm lý học hành vi và khoa học thần kinh" },
  { year: "2021", event: "Phát triển khung Bản Đồ Nội Tâm — hệ thống nhận diện 9 mô thức hành vi cốt lõi" },
  { year: "2023", event: "Ra mắt chương trình coaching 1-1 và khóa học đầu tiên" },
  { year: "2024", event: "Ra mắt bài test Bản Đồ Nội Tâm — công cụ nhận diện mô thức đầu tiên của AIMIND" },
  { year: "2025", event: "Ra mắt nền tảng AIMIND — đưa công cụ chuyển hóa đến với mọi người" },
];

export default function SuMenhPage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 60%, #0F2027 100%)",
            padding: "7rem 0 5rem",
            textAlign: "center",
          }}
        >
          <div className="container-main" style={{ maxWidth: "760px" }}>
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
                textTransform: "uppercase",
                marginBottom: "2rem",
              }}
            >
              Sứ Mệnh
            </div>
            <h1
              style={{
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              Giúp người Việt nhìn thấy{" "}
              <span style={{ color: "#7C6FF7" }}>những khuôn mẫu ẩn</span>{" "}
              đang âm thầm định hình cuộc đời họ
            </h1>
            <p
              style={{
                color: "#C4C0E0",
                fontSize: "18px",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
              }}
            >
              AIMIND — Awareness Intelligence Mind — ra đời từ một niềm tin đơn giản:
              khi bạn thật sự hiểu mình, bạn không còn phải cố gắng thay đổi bằng ý chí — thay đổi sẽ tự xảy ra.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
          <div className="container-main" style={{ maxWidth: "860px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              <div>
                <h2
                  style={{
                    color: "#1C1A3E",
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontWeight: 800,
                    marginBottom: "1.5rem",
                    lineHeight: 1.3,
                  }}
                >
                  Tại sao AIMIND tồn tại?
                </h2>
                <p style={{ color: "#4A4570", fontSize: "16px", lineHeight: 1.85, marginBottom: "1rem" }}>
                  Phần lớn người Việt Nam đang sống theo những khuôn mẫu hành vi mà họ không biết là đang tồn tại — chúng tôi gọi đó là <strong>&ldquo;mô thức&rdquo;</strong>.
                  Những khuôn mẫu này hình thành từ thời thơ ấu, từ gia đình, từ văn hóa — và âm thầm quyết định họ yêu như thế nào, làm việc ra sao, phản ứng với áp lực ra sao.
                </p>
                <p style={{ color: "#4A4570", fontSize: "16px", lineHeight: 1.85 }}>
                  AIMIND tồn tại để tạo ra công cụ giúp mọi người <strong>nhìn thấy những mô thức đó</strong> —
                  và từ đó, lần đầu tiên trong cuộc đời, được chọn lựa thay vì chỉ phản ứng.
                </p>
              </div>
              <div
                style={{
                  background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)",
                  borderRadius: "20px",
                  padding: "2.5rem",
                  color: "white",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>💡</div>
                <blockquote
                  style={{
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    lineHeight: 1.5,
                    color: "white",
                    marginBottom: "1rem",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;Bạn không thể thay đổi điều mà bạn chưa nhìn thấy. Nhìn thấy là bước đầu tiên của tự do.&rdquo;
                </blockquote>
                <p style={{ color: "#9B96C0", fontSize: "14px" }}>— Hanna Dang, nhà sáng lập AIMIND</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
          <div className="container-main">
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <h2
                style={{
                  color: "#1C1A3E",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  marginBottom: "0.75rem",
                }}
              >
                Những gì chúng tôi tin
              </h2>
              <p style={{ color: "#6B678F", fontSize: "16px" }}>
                Bốn giá trị cốt lõi dẫn dắt mọi thứ chúng tôi xây dựng
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {values.map((v) => (
                <div
                  key={v.title}
                  style={{
                    backgroundColor: "#F8F4EE",
                    borderRadius: "16px",
                    padding: "2rem",
                    border: "1px solid #E8E3F0",
                  }}
                >
                  <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{v.icon}</div>
                  <h3
                    style={{
                      color: "#1C1A3E",
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      fontWeight: 700,
                      fontSize: "17px",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.75 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
          <div className="container-main" style={{ maxWidth: "720px" }}>
            <h2
              style={{
                color: "#1C1A3E",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                marginBottom: "3rem",
                textAlign: "center",
              }}
            >
              Hành trình của AIMIND
            </h2>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  left: "80px",
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  background: "linear-gradient(180deg, #7C6FF7 0%, #18B5B0 100%)",
                }}
              />
              {milestones.map((m, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "2rem",
                    marginBottom: "2.5rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ width: "70px", textAlign: "right", flexShrink: 0 }}>
                    <span
                      style={{
                        color: "#7C6FF7",
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        fontWeight: 800,
                        fontSize: "15px",
                      }}
                    >
                      {m.year}
                    </span>
                  </div>
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#7C6FF7",
                      flexShrink: 0,
                      marginTop: "4px",
                      zIndex: 1,
                      boxShadow: "0 0 0 4px rgba(124,111,247,0.2)",
                    }}
                  />
                  <p style={{ color: "#4A4570", fontSize: "15px", lineHeight: 1.7, flex: 1 }}>
                    {m.event}
                  </p>
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
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                marginBottom: "1rem",
              }}
            >
              Bắt đầu hành trình của bạn
            </h2>
            <p style={{ color: "#C4C0E0", marginBottom: "2rem", fontSize: "16px" }}>
              Làm bài test miễn phí — 15 phút để nhìn thấy khuôn mẫu bạn chưa bao giờ thấy rõ
            </p>
            <Link
              href="/kham-pha/ban-do-noi-tam"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
                color: "white",
                padding: "16px 40px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "'Be Vietnam Pro', sans-serif",
              }}
            >
              Làm bài test miễn phí
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
