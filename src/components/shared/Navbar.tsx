"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        backgroundColor: "rgba(248,244,238,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #E8E3F0",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div className="container-main">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
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
                fontSize: "14px",
                letterSpacing: "-0.05em",
                fontFamily: "'Be Vietnam Pro', sans-serif",
              }}
            >
              AI
            </div>
            <span
              style={{
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontWeight: 800,
                fontSize: "18px",
                color: "#1C1A3E",
                letterSpacing: "-0.03em",
              }}
            >
              MIND
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
            <NavLink href="/kham-pha/ban-do-noi-tam">Bài Test</NavLink>
            <NavLink href="/kien-thuc/bai-viet">Kiến Thức</NavLink>
            <NavLink href="/hanh-trinh/khoa-hoc">Khóa Học</NavLink>
            <NavLink href="/dong-hanh">Đồng Hành</NavLink>
          </div>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link
              href="/kham-pha/ban-do-noi-tam"
              style={{
                backgroundColor: "#7C6FF7",
                color: "white",
                padding: "10px 20px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                transition: "background-color 0.2s ease, transform 0.1s ease",
                display: "inline-block",
                whiteSpace: "nowrap",
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
              Làm bài test ngay →
            </Link>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen(!open)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                color: "#1C1A3E",
              }}
              className="show-mobile"
              aria-label="Menu"
            >
              {open ? (
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

        {/* Mobile menu */}
        {open && (
          <div
            style={{
              borderTop: "1px solid #E8E3F0",
              padding: "1rem 0",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            {[
              { href: "/kham-pha/ban-do-noi-tam", label: "Bài Test Bản Đồ Nội Tâm" },
              { href: "/kien-thuc/bai-viet", label: "Kiến Thức" },
              { href: "/hanh-trinh/khoa-hoc", label: "Khóa Học" },
              { href: "/dong-hanh", label: "Đồng Hành 1-1" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  padding: "12px 0",
                  color: "#3B3772",
                  fontWeight: 500,
                  textDecoration: "none",
                  fontSize: "15px",
                  borderBottom: "1px solid #F0EBF8",
                  display: "block",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        color: "#6B678F",
        textDecoration: "none",
        fontSize: "15px",
        fontWeight: 500,
        transition: "color 0.2s",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#1C1A3E")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#6B678F")}
    >
      {children}
    </Link>
  );
}
