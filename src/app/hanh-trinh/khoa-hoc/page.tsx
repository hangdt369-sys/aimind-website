import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";

const modules = [
  { num: "01", title: "Nhận diện mô thức cốt lõi", desc: "Hiểu sâu kết quả bài test — mô thức của bạn hoạt động như thế nào trong từng tình huống cụ thể." },
  { num: "02", title: "Gốc rễ thần kinh của hành vi", desc: "Tại sao não bộ tạo ra các mô thức này? Khoa học đằng sau những phản ứng tự động của bạn." },
  { num: "03", title: "Nỗi sợ ẩn và động lực cốt lõi", desc: "Mọi mô thức đều được nuôi dưỡng bởi một nỗi sợ sâu hơn. Nhận diện để không còn bị điều khiển." },
  { num: "04", title: "Mô thức trong quan hệ", desc: "Bạn kéo về phía mình kiểu người như thế nào? Tại sao? Và điều đó nói gì về bạn?" },
  { num: "05", title: "Mô thức trong công việc và tiền bạc", desc: "Cách mô thức của bạn ảnh hưởng đến sự nghiệp, thu nhập và quyết định tài chính." },
  { num: "06", title: "Thiết kế hành vi mới", desc: "Từ nhận diện sang hành động — xây dựng thực hành hàng ngày phù hợp với não bộ của bạn." },
  { num: "07", title: "Hệ thống duy trì thay đổi", desc: "Cách tạo môi trường và vòng phản hồi để hành vi mới trở nên bền vững mà không cần ý chí." },
  { num: "08", title: "Tích hợp và bước tiếp theo", desc: "Tổng hợp toàn bộ hành trình và xây dựng lộ trình phát triển cá nhân dài hạn." },
];

const includes = [
  { icon: "🎥", label: "8 module video bài giảng chuyên sâu" },
  { icon: "📓", label: "Workbook và bài tập thực hành" },
  { icon: "🧪", label: "Bài test và công cụ tự đánh giá" },
  { icon: "💬", label: "Cộng đồng học viên riêng tư" },
  { icon: "🔄", label: "Truy cập trọn đời, cập nhật miễn phí" },
  { icon: "📱", label: "Học trên điện thoại hoặc máy tính" },
];

export default function KhoaHocPage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 60%, #18B5B0 200%)",
            padding: "7rem 0 5rem",
          }}
        >
          <div className="container-main" style={{ maxWidth: "860px" }}>
            <div
              style={{
                display: "inline-block",
                background: "rgba(24,181,176,0.15)",
                border: "1px solid rgba(24,181,176,0.3)",
                borderRadius: "999px",
                padding: "6px 20px",
                color: "#7FDED9",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                marginBottom: "2rem",
              }}
            >
              Khóa Học
            </div>
            <h1
              style={{
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: "1.5rem",
                maxWidth: "680px",
              }}
            >
              Bản Đồ Nội Tâm Chuyên Sâu
            </h1>
            <p style={{ color: "#C4C0E0", fontSize: "17px", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "580px" }}>
              Khóa học 8 module giúp bạn đi từ nhận diện mô thức đến thiết kế hành vi mới —
              dựa trên khoa học thần kinh và tâm lý học hành vi.
            </p>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" as const, marginBottom: "3rem" }}>
              {[
                { label: "8 module", sub: "bài giảng chuyên sâu" },
                { label: "Tự học", sub: "theo tốc độ của bạn" },
                { label: "Trọn đời", sub: "truy cập và cập nhật" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, fontSize: "1.5rem" }}>{stat.label}</div>
                  <div style={{ color: "#9B96C0", fontSize: "13px" }}>{stat.sub}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" as const }}>
              <Link
                href="/lien-he"
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
                  color: "white",
                  padding: "16px 36px",
                  borderRadius: "999px",
                  fontSize: "16px",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  boxShadow: "0 8px 24px rgba(124,111,247,0.4)",
                }}
              >
                Đăng ký khóa học
              </Link>
              <Link
                href="/kham-pha/ban-do-noi-tam"
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  padding: "16px 36px",
                  borderRadius: "999px",
                  fontSize: "16px",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                }}
              >
                Thử bài test miễn phí trước
              </Link>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
          <div className="container-main">
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <h2
                style={{
                  color: "#1C1A3E",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 800,
                  marginBottom: "0.75rem",
                }}
              >
                Nội dung khóa học
              </h2>
              <p style={{ color: "#6B678F", fontSize: "15px" }}>8 module từ nhận diện đến chuyển hóa</p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1rem",
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              {modules.map((m) => (
                <div
                  key={m.num}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "14px",
                    padding: "1.5rem",
                    border: "1px solid #E8E3F0",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#7C6FF7",
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      fontWeight: 800,
                      fontSize: "13px",
                      opacity: 0.5,
                      flexShrink: 0,
                      paddingTop: "2px",
                    }}
                  >
                    {m.num}
                  </span>
                  <div>
                    <h3
                      style={{
                        color: "#1C1A3E",
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        fontWeight: 700,
                        fontSize: "15px",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {m.title}
                    </h3>
                    <p style={{ color: "#6B678F", fontSize: "13px", lineHeight: 1.7 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
          <div className="container-main" style={{ maxWidth: "760px" }}>
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
              Khóa học bao gồm
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              {includes.map((inc) => (
                <div
                  key={inc.label}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                    backgroundColor: "#F8F4EE",
                    borderRadius: "12px",
                    padding: "1rem 1.25rem",
                  }}
                >
                  <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{inc.icon}</span>
                  <span style={{ color: "#1C1A3E", fontSize: "14px", fontWeight: 500, lineHeight: 1.5 }}>{inc.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section
          style={{
            padding: "5rem 0",
            background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)",
            textAlign: "center",
          }}
        >
          <div className="container-main" style={{ maxWidth: "560px" }}>
            <h2
              style={{
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                marginBottom: "0.5rem",
              }}
            >
              Bắt đầu hành trình chuyển hóa
            </h2>
            <p style={{ color: "#9B96C0", fontSize: "14px", marginBottom: "2.5rem" }}>
              Liên hệ Hanna để được tư vấn và nhận thông tin học phí
            </p>
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "20px",
                padding: "2.5rem",
                marginBottom: "2rem",
              }}
            >
              <div style={{ color: "#9B96C0", fontSize: "13px", marginBottom: "1.25rem" }}>Quét QR hoặc chuyển khoản thủ công</div>

              {/* QR Code */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.vietqr.io/image/BIDV-3110856777-compact2.png?amount=499000&addInfo=BDNT%20chuyen%20sau&accountName=DANG%20THI%20HANG"
                  alt="QR thanh toán BIDV - DANG THI HANG"
                  style={{ width: "200px", height: "auto", borderRadius: "12px", backgroundColor: "white", padding: "8px" }}
                />
              </div>

              <div style={{ color: "white", fontSize: "14px", lineHeight: 2 }}>
                <div>BIDV · <strong>3110856777</strong></div>
                <div>DANG THI HANG</div>
                <div style={{ color: "#18B5B0", fontWeight: 700 }}>499.000 VND</div>
                <div style={{ color: "#9B96C0", fontSize: "12px" }}>Nội dung: [Tên] - BDNT Chuyên Sâu</div>
              </div>
            </div>