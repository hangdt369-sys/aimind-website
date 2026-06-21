"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1C1A3E",
        color: "#E8E3F0",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="container-main">
        {/* Top section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #7C6FF7 0%, #18B5B0 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 800,
                  fontSize: "13px",
                }}
              >
                AI
              </div>
              <span
                style={{
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontWeight: 800,
                  fontSize: "18px",
                  color: "white",
                }}
              >
                MIND
              </span>
            </div>
            <p style={{ color: "#9B96C0", fontSize: "14px", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Awareness Intelligence Mind.<br />
              Nhìn thấy mình rõ hơn.<br />
              Sống tự do hơn.
            </p>
            <Link
              href="/kham-pha/ban-do-noi-tam"
              style={{
                display: "inline-block",
                backgroundColor: "#7C6FF7",
                color: "white",
                padding: "10px 20px",
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Làm bài test miễn phí
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ color: "white", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Khám Phá
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <FooterLink href="/kham-pha/ban-do-noi-tam">Bài Test Nội Tâm</FooterLink>
              <FooterLink href="/kien-thuc/bai-viet">Bài Viết</FooterLink>
              <FooterLink href="/hanh-trinh/ban-do-noi-tam-chuyen-sau">Khóa Học</FooterLink>
              <FooterLink href="/dong-hanh">Coaching 1-1</FooterLink>
            </div>
          </div>

          <div>
            <h4 style={{ color: "white", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Về AIMIND
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <FooterLink href="/ve-chung-toi/su-menh">Sứ Mệnh</FooterLink>
              <FooterLink href="/ve-chung-toi/doi-ngu">Hanna Dang</FooterLink>
              <FooterLink href="/ve-chung-toi/phuong-phap">Phương Pháp</FooterLink>
              <FooterLink href="/lien-he">Liên Hệ</FooterLink>
            </div>
          </div>

          {/* Zalo CTA */}
          <div>
            <h4 style={{ color: "white", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Liên Hệ Hanna
            </h4>
            <p style={{ color: "#9B96C0", fontSize: "13px", lineHeight: 1.6, marginBottom: "1rem" }}>
              Nhắn tin trực tiếp để đặt lịch coaching hoặc hỏi về khóa học.
            </p>
            <a
              href="https://zalo.me/0848270819"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "rgba(124,111,247,0.15)",
                border: "1px solid rgba(124,111,247,0.3)",
                color: "#B8B3FA",
                borderRadius: "8px",
                padding: "10px 14px",
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              Nhắn tin qua Zalo →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "#6B678F", fontSize: "13px" }}>
            © 2026 AIMIND. Tất cả quyền được bảo lưu.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <FooterLink href="/chinh-sach-bao-mat">Chính sách bảo mật</FooterLink>
            <FooterLink href="/dieu-khoan">Điều khoản</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{ color: "#9B96C0", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#9B96C0")}
    >
      {children}
    </Link>
  );
}

