import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function LienHePage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1, backgroundColor: "#F8F4EE", minHeight: "calc(100vh - 64px)" }}>
        <section style={{ padding: "5rem 0", textAlign: "center" }}>
          <div className="container-main" style={{ maxWidth: "560px" }}>
            <h1
              style={{
                color: "#1C1A3E",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "2.5rem",
                fontWeight: 800,
                marginBottom: "1rem",
              }}
            >
              Liên Hệ
            </h1>

            <p style={{ color: "#6B678F", fontSize: "16px", lineHeight: 1.75, marginBottom: "2.5rem" }}>
              Để đăng ký khóa học, đặt lịch coaching, hoặc có bất kỳ câu hỏi nào — hãy liên hệ trực tiếp với Hanna.
            </p>

            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "2rem",
                border: "1px solid #E8E3F0",
                marginBottom: "1.5rem",
                textAlign: "left" as const,
              }}
            >
              {[
                { icon: "📱", label: "Facebook", value: "AIMIND Vietnam", href: "https://facebook.com" },
                { icon: "💬", label: "Zalo", value: "Liên hệ qua Zalo", href: "#" },
                { icon: "📧", label: "Email", value: "hello@aimind.com.vn", href: "mailto:hello@aimind.com.vn" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem",
                    borderRadius: "10px",
                    textDecoration: "none",
                    marginBottom: "8px",
                    transition: "background 0.2s",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F8F4EE")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
                  <div>
                    <div style={{ color: "#9B96C0", fontSize: "12px", textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>
                      {item.label}
                    </div>
                    <div style={{ color: "#1C1A3E", fontWeight: 600, fontSize: "15px" }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Bank transfer info for course purchase */}
            <div
              style={{
                backgroundColor: "#EAE8FE",
                borderRadius: "14px",
                padding: "1.5rem",
                border: "1px solid rgba(124,111,247,0.2)",
                textAlign: "left" as const,
              }}
            >
              <h3
                style={{
                  color: "#5B4FD4",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  marginBottom: "1rem",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.06em",
                }}
              >
                Thanh toán khóa học
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { label: "Ngân hàng", value: "Vietcombank" },
                  { label: "Số tài khoản", value: "1234567890" },
                  { label: "Chủ tài khoản", value: "HANNA DANG" },
                  { label: "Nội dung CK", value: "[Tên] - BDNT Chuyên Sâu" },
                ].map((row) => (
                  <div key={row.label} style={{ display: "flex", gap: "1rem" }}>
                    <span style={{ color: "#9B96C0", fontSize: "13px", minWidth: "120px" }}>{row.label}</span>
                    <span style={{ color: "#1C1A3E", fontSize: "13px", fontWeight: 600 }}>{row.value}</span>
                  </div>
                ))}
              </div>
              <p style={{ color: "#6B678F", fontSize: "12px", marginTop: "1rem" }}>
                Sau khi chuyển khoản, nhắn tin Zalo/Facebook kèm ảnh chụp màn hình để được xác nhận và kích hoạt tài khoản.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
