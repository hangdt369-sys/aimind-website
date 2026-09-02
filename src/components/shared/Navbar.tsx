"use client";

import Link from "next/link";
import { useState } from "react";

// ─── Chỉ hiển thị các route đã sẵn sàng cho production ──────────────────────
const NAV_ITEMS = [
  { label: "Trang Chủ", href: "/" },
  { label: "Bản Đồ Nội Tâm", href: "/kham-pha/ban-do-noi-tam" },
  {
    label: "Bài Viết",
    href: "/kien-thuc/bai-viet",
    children: [
      { label: "Tất cả bài viết", href: "/kien-thuc/bai-viet" },
      { label: "Thân", href: "/than" },
      { label: "Tâm", href: "/tam" },
      { label: "Trí", href: "/tri" },
    ],
  },
  {
    label: "Thư Viện",
    href: "/thu-vien",
    children: [
      { label: "Psychology", href: "/thu-vien/psychology" },
      { label: "Neuroscience", href: "/thu-vien/neuroscience" },
      { label: "Biology", href: "/thu-vien/biology" },
      { label: "Behavioral Science", href: "/thu-vien/behavioral-science" },
      { label: "Critical Thinking", href: "/thu-vien/critical-thinking" },
      { label: "AI & Human", href: "/thu-vien/ai-and-human" },
    ],
  },
  { label: "Học Cùng AIMIND", href: "/hoc-cung-aimind" },
  { label: "Chuyên Gia", href: "/chuyen-gia" },
  { label: "Coaching", href: "/coaching" },
  {
    label: "Về AIMIND",
    href: "/ve-chung-toi/su-menh",
    children: [
      { label: "AIMIND là gì?", href: "/ve-chung-toi/su-menh" },
      { label: "Founder", href: "/ve-chung-toi/doi-ngu" },
      { label: "Triết lý & Phương pháp", href: "/ve-chung-toi/phuong-phap" },
    ],
  },
];

// ─── Nhóm menu desktop (rút gọn để không quá chật) ─────────────────────────
const DESKTOP_PRIMARY = ["Bài Viết", "Thư Viện", "Học Cùng AIMIND", "Về AIMIND"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <nav
      style={{
        backgroundColor: "rgba(248,244,238,0.95)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid #E8E3F0",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div className="container-main">
        {/* ── Top bar ────────────────────────────────────────────────────── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "32px", height: "32px", borderRadius: "8px",
                background: "linear-gradient(135deg, #7C6FF7 0%, #18B5B0 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", fontWeight: 800, fontSize: "14px",
                letterSpacing: "-0.05em", fontFamily: "'Be Vietnam Pro', sans-serif",
              }}
            >AI</div>
            <span style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, fontSize: "18px", color: "#1C1A3E", letterSpacing: "-0.03em" }}>
              MIND
            </span>
          </Link>

          {/* Desktop nav — chỉ hiện các mục có dropdown chính */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }} className="hidden-mobile">
            {NAV_ITEMS.filter(item => DESKTOP_PRIMARY.includes(item.label)).map((item) => (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  style={{
                    color: "#6B678F", textDecoration: "none", fontSize: "14px",
                    fontWeight: 500, padding: "8px 10px", borderRadius: "8px",
                    display: "flex", alignItems: "center", gap: "4px",
                    transition: "color 0.2s, background 0.2s", whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#1C1A3E";
                    e.currentTarget.style.background = "rgba(124,111,247,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#6B678F";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {item.label}
                  {item.children && (
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.5 }}>
                      <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div
                    style={{
                      position: "absolute", top: "calc(100% + 4px)", left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "white", borderRadius: "12px",
                      border: "1px solid #E8E3F0",
                      boxShadow: "0 8px 32px rgba(28,26,62,0.12)",
                      padding: "8px", minWidth: "200px", zIndex: 200,
                    }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{
                          display: "block", padding: "9px 14px", borderRadius: "8px",
                          color: "#3B3772", fontSize: "14px", fontWeight: 500,
                          textDecoration: "none", transition: "background 0.15s, color 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(124,111,247,0.08)";
                          e.currentTarget.style.color = "#7C6FF7";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "#3B3772";
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: CTA + burger */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link
              href="/kham-pha/ban-do-noi-tam"
              className="hidden-mobile"
              style={{
                backgroundColor: "#7C6FF7", color: "white", padding: "9px 18px",
                borderRadius: "999px", fontSize: "13px", fontWeight: 600,
                textDecoration: "none", fontFamily: "'Be Vietnam Pro', sans-serif",
                transition: "background-color 0.2s, transform 0.15s", whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#5B4FD4";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#7C6FF7";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Làm bài test →
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="show-mobile"
              style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", color: "#1C1A3E" }}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ────────────────────────────────────────────────── */}
        {mobileOpen && (
          <div style={{ borderTop: "1px solid #E8E3F0", padding: "0.75rem 0 1rem", maxHeight: "80vh", overflowY: "auto" }}>
            {/* CTA nổi bật ở mobile */}
            <Link
              href="/kham-pha/ban-do-noi-tam"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block", backgroundColor: "#7C6FF7", color: "white",
                padding: "12px 16px", borderRadius: "10px", textAlign: "center",
                fontWeight: 700, fontSize: "15px", textDecoration: "none",
                marginBottom: "12px",
              }}
            >
              Làm bài test miễn phí →
            </Link>

            {NAV_ITEMS.map((item) => (
              <div key={item.label} style={{ borderBottom: "1px solid #F0EBF8" }}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      style={{
                        width: "100%", background: "none", border: "none", cursor: "pointer",
                        padding: "12px 4px", display: "flex", justifyContent: "space-between",
                        alignItems: "center", color: "#3B3772", fontSize: "15px", fontWeight: 600,
                      }}
                    >
                      {item.label}
                      <svg
                        width="16" height="16" fill="none" stroke="#9B96C0" strokeWidth="2"
                        style={{ transform: mobileExpanded === item.label ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}
                      >
                        <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {mobileExpanded === item.label && (
                      <div style={{ paddingLeft: "12px", paddingBottom: "8px" }}>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                              display: "block", padding: "9px 0", color: "#6B678F",
                              fontSize: "14px", textDecoration: "none",
                            }}
                          >
                            → {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "block", padding: "12px 4px", color: "#3B3772",
                      fontSize: "15px", fontWeight: 600, textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 901px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

