"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorKetQua({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[ket-qua] Error:", error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "100vh", backgroundColor: "#F8F4EE",
        display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem",
      }}
    >
      <div style={{ maxWidth: "480px", textAlign: "center" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔄</div>
        <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem" }}>
          Không tìm thấy kết quả
        </h2>
        <p style={{ color: "#6B678F", fontSize: "15px", lineHeight: 1.7, marginBottom: "2rem" }}>
          Kết quả bài test có thể đã hết hạn. Vui lòng làm lại bài test để xem kết quả của bạn.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={reset}
            style={{ background: "transparent", color: "#6B678F", padding: "11px 24px", borderRadius: "999px", border: "1px solid #E8E3F0", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}
          >
            Thử lại
          </button>
          <Link
            href="/kham-pha/ban-do-noi-tam"
            style={{ background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)", color: "white", padding: "11px 24px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none", display: "inline-block" }}
          >
            Làm lại bài test
          </Link>
        </div>
      </div>
    </div>
  );
}
