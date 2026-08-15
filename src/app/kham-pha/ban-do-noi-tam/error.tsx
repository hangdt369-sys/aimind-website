"use client";
// Next.js App Router: hiện khi page throw error phía client

import { useEffect } from "react";

export default function ErrorBanDoNoiTam({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[ban-do-noi-tam] Error:", error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        backgroundColor: "#F8F4EE",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div style={{ maxWidth: "480px", textAlign: "center" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>⚠️</div>
        <h2
          style={{
            color: "#1C1A3E",
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: "1.4rem",
            fontWeight: 700,
            marginBottom: "0.75rem",
          }}
        >
          Đã xảy ra lỗi
        </h2>
        <p style={{ color: "#6B678F", fontSize: "15px", lineHeight: 1.7, marginBottom: "2rem" }}>
          Không thể tải bài test. Vui lòng thử lại — bài test hoạt động tốt trong hầu hết trường hợp.
        </p>
        <button
          onClick={reset}
          style={{
            background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
            color: "white",
            padding: "12px 28px",
            borderRadius: "999px",
            border: "none",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "'Be Vietnam Pro', sans-serif",
          }}
        >
          Thử lại
        </button>
      </div>
    </div>
  );
}
