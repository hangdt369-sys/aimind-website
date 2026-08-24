"use client";


export default function LienHePage() {
  return (
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
                { icon: "💬", label: "Zalo", value: "0848270829", href: "https://zalo.me/0848270829" },
                { icon: "📧", label: "Email", value: "aimind.hcm@gmail.com", href: "mailto:aimind.hcm@gmail.com" },
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

            {/* Bank transfer info */}
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
                  marginBottom: "1.25rem",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.06em",
                }}
              >
                Thanh toán khóa học
              </h3>

              {/* QR Code */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.vietqr.io/image/BIDV-3110856777-compact2.png?amount=499000&addInfo=BDNT%20chuyen%20sau&accountName=DANG%20THI%20HANG"
                  alt="QR thanh toán BIDV"
                  style={{ width: "200px", height: "auto", borderRadius: "12px", border: "1px solid rgba(124,111,247,0.2)" }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
                {[
                  { label: "Ngân hàng", value: "BIDV" },
                  { label: "Số tài khoản", value: "3110856777" },
                  { label: "Chủ tài khoản", value: "DANG THI HANG" },
                  { label: "Số tiền", value: "499.000 VND" },
                  { label: "Nội dung CK", value: "[Tên] - BDNT Chuyên Sâu" },
                ].map((row) => (
                  <div
                    key={row.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "6px 0",
                      borderBottom: "1px solid rgba(124,111,247,0.1)",
                    }}
                  >
                    <span style={{ color: "#7C6FF7", fontSize: "13px" }}>{row.label}</span>
                    <span style={{ color: "#1C1A3E", fontWeight: 600, fontSize: "13px" }}>{row.value}</span>
                  </div>
                ))}
              </div>

              <p style={{ color: "#7C6FF7", fontSize: "12px", marginTop: "1rem", lineHeight: 1.6 }}>
                Sau khi chuyển khoản, nhắn tin xác nhận qua Zalo 0848270829 để kích hoạt trong 24 giờ.
              </p>
            </div>
          </div>
        </section>
    </main>
  );
}
