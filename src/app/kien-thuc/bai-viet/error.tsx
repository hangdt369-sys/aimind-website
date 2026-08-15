"use client";

import { useEffect } from "react";

export default function ErrorBaiViet({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[bai-viet] Error:", error);
  }, [error]);

  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", backgroundColor: "#F8F4EE" }}>
      <div style={{ maxWidth: "480px", textAlign: "center" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📚</div>
        <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem" }}>
          Không tải được bài viết
        </h2>
        <p style={{ color: "#6B678F", fontSize: "15px", lineHeight: 1.7, marginBottom: "2rem" }}>
          Đã xảy ra lỗi khi tải danh sách bài viết. Vui lòng thử lại.
        </p>
        <button
          onClick={reset}
          style={{ background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)", color: "white", padding: "12px 28px", borderRadius: "999px", border: "none", fontSize: "15px", fontWeight: 600, cursor: "pointer", fontFamily: "'Be Vietnam Pro', sans-serif" }}
        >
          Thử lại
        </button>
      </div>
    </div>
  );
}
