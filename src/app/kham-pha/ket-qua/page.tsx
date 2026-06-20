"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { archetypes, archetypeOrder } from "@/data/archetypes";
import { getStoredTestResult, isValidEmail } from "@/lib/utils";
import type { ArchetypeKey, TestResult } from "@/types";

// ─── Results Page ─────────────────────────────────────────────────────────────

export default function ResultsPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <ResultsContent />
    </Suspense>
  );
}

function ResultsContent() {
  const searchParams = useSearchParams();
  const patternParam = searchParams.get("pattern") as ArchetypeKey | null;
  const [result, setResult] = useState<TestResult | null>(null);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const stored = getStoredTestResult<TestResult>();
    if (stored) {
      setResult(stored);
    }
    // Show email capture after 2 seconds
    const timer = setTimeout(() => setShowEmailCapture(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const dominantKey =
    result?.dominant ?? patternParam ?? "can-bang";
  const archetype = archetypes[dominantKey] ?? archetypes["can-bang"];
  const secondaryKey = result?.secondary;
  const secondaryArchetype = secondaryKey ? archetypes[secondaryKey] : null;
  const scores = result?.scores;

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setEmailError("Vui lòng nhập email hợp lệ");
      return;
    }
    setEmailError("");
    setSubmitting(true);

    try {
      // API call to save email
      await fetch("/api/submit-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          archetypeKey: dominantKey,
          source: "test-result",
        }),
      });
    } catch {
      // Fail silently — still mark as submitted
    }

    setSubmitting(false);
    setEmailSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main style={{ flex: 1, backgroundColor: "#F8F4EE" }}>
        {/* Hero result */}
        <section
          style={{
            background: `linear-gradient(160deg, #1C1A3E 0%, #2D2A5E 100%)`,
            padding: "4rem 0 5rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `radial-gradient(circle at 30% 70%, ${archetype.color}20 0%, transparent 50%)`,
            }}
          />

          <div className="container-main" style={{ position: "relative" }}>
            {/* Archetype icon */}
            <div
              style={{
                fontSize: "4rem",
                marginBottom: "1rem",
                animation: "fadeInUp 0.5s ease",
              }}
            >
              {archetype.icon}
            </div>

            <div
              style={{
                display: "inline-block",
                backgroundColor: `${archetype.color}25`,
                border: `1px solid ${archetype.color}50`,
                borderRadius: "999px",
                padding: "4px 16px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#B8B3FA",
                textTransform: "uppercase" as const,
                marginBottom: "1rem",
              }}
            >
              Mô thức chính của bạn
            </div>

            <h1
              style={{
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.8rem, 5vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: "0.75rem",
              }}
            >
              {archetype.name}
            </h1>

            <p
              style={{
                color: "#C4C0E0",
                fontSize: "1.1rem",
                fontStyle: "italic",
                marginBottom: "1.5rem",
              }}
            >
              "{archetype.tagline}"
            </p>

            {secondaryArchetype && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderRadius: "999px",
                  padding: "6px 16px",
                  fontSize: "13px",
                  color: "#9B96C0",
                }}
              >
                <span>Mô thủc phụ:</span>
                <span style={{ color: "white", fontWeight: 600 }}>
                  {secondaryArchetype.icon} {secondaryArchetype.name}
                </span>
              </div>
            )}
          </div>
        </section>

        {/* Main content */}
        <div className="container-main" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            {/* Description */}
            <div className="card-base" style={{ padding: "2rem" }}>
              <h2
                style={{
                  color: "#1C1A3E",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: archetype.color }}>●</span> Đây là bạn
              </h2>
              <p style={{ color: "#3B3772", lineHeight: 1.8, fontSize: "15px" }}>
                {archetype.description}
              </p>
            </div>

            {/* Core wound */}
            <div className="card-base" style={{ padding: "2rem" }}>
              <h2
                style={{
                  color: "#1C1A3E",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "#E67E74" }}>●</span> Gốc rễ mô thức
              </h2>
              <p style={{ color: "#3B3772", lineHeight: 1.8, fontSize: "15px" }}>
                {archetype.coreWound}
              </p>
            </div>
          </div>

          {/* Hidden fear */}
          <div
            className="card-base"
            style={{
              padding: "2rem",
              marginBottom: "1.5rem",
              borderLeft: `4px solid ${archetype.color}`,
              backgroundColor: `${archetype.color}08`,
            }}
          >
            <h2
              style={{
                color: "#1C1A3E",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                marginBottom: "0.75rem",
                textTransform: "uppercase" as const,
                letterSpacing: "0.06em",
              }}
            >
              Nỗi sợ thầm kín
            </h2>
            <p
              style={{
                color: "#3B3772",
                fontSize: "1rem",
                lineHeight: 1.7,
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              "{archetype.hiddenFear}"
            </p>
          </div>

          {/* Behavior patterns */}
          <div className="card-base" style={{ padding: "2rem", marginBottom: "1.5rem" }}>
            <h2
              style={{
                color: "#1C1A3E",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              🔄 Biểu hiện bạn có thể nhận ra trong chính mình
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {archetype.behaviorPattern.map((pattern) => (
                <div
                  key={pattern}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "10px 14px",
                    backgroundColor: "#F8F4EE",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ color: archetype.color, fontWeight: 700, flexShrink: 0 }}>→</span>
                  <span style={{ color: "#3B3772", fontSize: "14px", lineHeight: 1.6 }}>{pattern}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths + Growth edge */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <div className="card-base" style={{ padding: "2rem", backgroundColor: "#E4F8F7" }}>
              <h3
                style={{
                  color: "#0A7B78",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                💪 Điểm mạnh của mô thức này
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {archetype.strengths.map((s) => (
                  <div key={s} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "#18B5B0", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ color: "#1C4A48", fontSize: "14px" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-base" style={{ padding: "2rem", backgroundColor: "#EAE8FE" }}>
              <h3
                style={{
                  color: "#5B4FD4",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                🌱 Vùng phát triển
              </h3>
              <p style={{ color: "#3B3772", fontSize: "14px", lineHeight: 1.7 }}>
                {archetype.growthEdge}
              </p>
            </div>
          </div>

          {/* Score visualization */}
          {scores && (
            <div className="card-base" style={{ padding: "2rem", marginBottom: "2rem" }}>
              <h3
                style={{
                  color: "#1C1A3E",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                }}
              >
                📊 Bản đồ mô thủc của bạn
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {archetypeOrder.map((key) => {
                  const arch = archetypes[key];
                  const score = scores[key] ?? 0;
                  const maxPossible = 20;
                  const pct = Math.min(100, Math.round((score / maxPossible) * 100));
                  const isDominant = key === dominantKey;

                  return (
                    <div key={key}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "4px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "13px",
                            color: isDominant ? arch.color : "#6B678F",
                            fontWeight: isDominant ? 700 : 400,
                          }}
                        >
                          {arch.icon} {arch.name}
                          {isDominant && (
                            <span
                              style={{
                                marginLeft: "8px",
                                fontSize: "11px",
                                backgroundColor: `${arch.color}20`,
                                color: arch.color,
                                padding: "1px 8px",
                                borderRadius: "999px",
                              }}
                            >
                              chính
                            </span>
                          )}
                        </span>
                        <span style={{ fontSize: "12px", color: "#9B96C0" }}>{pct}%</span>
                      </div>
                      <div
                        style={{
                          height: "8px",
                          backgroundColor: "#F0EBF8",
                          borderRadius: "999px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: `${pct}%`,
                            backgroundColor: arch.color,
                            borderRadius: "999px",
                            transition: "width 1s ease",
                            opacity: isDominant ? 1 : 0.4,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Next step — course CTA */}
          <div
            style={{
              background: "linear-gradient(135deg, #1C1A3E 0%, #3B3772 100%)",
              borderRadius: "20px",
              padding: "2.5rem",
              marginBottom: "2rem",
              color: "white",
            }}
          >
            <h3
              style={{
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "1.4rem",
                fontWeight: 800,
                marginBottom: "0.75rem",
              }}
            >
              Bước tiếp theo dành cho bạn
            </h3>
            <p style={{ color: "#C4C0E0", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              {archetype.nextStep}
            </p>
            <Link
              href="/hanh-trinh/ban-do-noi-tam-chuyen-sau"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
                color: "white",
                padding: "14px 28px",
                borderRadius: "999px",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "'Be Vietnam Pro', sans-serif",
              }}
            >
              Xem khóa học Bản Đồ Nội Tâm Chuyên Sâu →
            </Link>
          </div>

          {/* Share */}
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#9B96C0", fontSize: "14px", marginBottom: "1rem" }}>
              Bạn muốn ai đó cùng làm bài test?
            </p>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.origin + "/kham-pha/ban-do-noi-tam");
              }}
              style={{
                border: "1px solid #E8E3F0",
                backgroundColor: "white",
                color: "#3B3772",
                padding: "10px 24px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                marginRight: "12px",
              }}
            >
              📋 Sao chép link bài test
            </button>
            <Link
              href="/kham-pha/ban-do-noi-tam"
              style={{
                display: "inline-block",
                border: "1px solid #E8E3F0",
                backgroundColor: "white",
                color: "#3B3772",
                padding: "10px 24px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              🔄 Làm lại bài test
            </Link>
          </div>
        </div>

        {/* Email capture modal */}
        {showEmailCapture && !emailSubmitted && (
          <div
            style={{
              position: "fixed",
              bottom: "1.5rem",
              right: "1.5rem",
              left: "1.5rem",
              maxWidth: "420px",
              margin: "0 auto",
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "1.5rem",
              boxShadow: "0 8px 40px rgba(28,26,62,0.2)",
              border: "1px solid #E8E3F0",
              zIndex: 100,
              animation: "slideInRight 0.4s ease",
            }}
          >
            <button
              onClick={() => setShowEmailCapture(false)}
              style={{
                position: "absolute" as const,
                top: "12px",
                right: "12px",
                background: "none",
                border: "none",
                color: "#9B96C0",
                cursor: "pointer",
                fontSize: "18px",
                lineHeight: 1,
              }}
            >
              ×
            </button>

            <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>📬</div>
            <h4
              style={{
                color: "#1C1A3E",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontWeight: 700,
                marginBottom: "0.5rem",
                fontSize: "1rem",
              }}
            >
              Nhận phân tích chuyên sâu về mô thủc {archetype.name}
            </h4>
            <p style={{ color: "#6B678F", fontSize: "13px", marginBottom: "1rem", lineHeight: 1.6 }}>
              Gửi kết quả và hướng dẫn thực hành đến email — để bạn có thể quay lại đọc khi cần.
            </p>

            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email của bạn"
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  border: emailError ? "1px solid #E55A5A" : "1px solid #E8E3F0",
                  fontSize: "14px",
                  color: "#1C1A3E",
                  backgroundColor: "#F8F4EE",
                  marginBottom: emailError ? "4px" : "10px",
                  outline: "none",
                  boxSizing: "border-box" as const,
                }}
              />
              {emailError && (
                <p style={{ color: "#E55A5A", fontSize: "12px", marginBottom: "8px" }}>
                  {emailError}
                </p>
              )}
              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
                  color: "white",
                  padding: "11px 0",
                  borderRadius: "10px",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: submitting ? "wait" : "pointer",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                }}
              >
                {submitting ? "Đang gửi..." : "Gửi kết quả đến email →"}
              </button>
            </form>
            <p style={{ color: "#C4C0E0", fontSize: "11px", marginTop: "8px", textAlign: "center" as const }}>
              Không spam. Có thể hủy bất kỳ lúc nào.
            </p>
          </div>
        )}

        {emailSubmitted && (
          <div
            style={{
              position: "fixed",
              bottom: "1.5rem",
              right: "1.5rem",
              left: "1.5rem",
              maxWidth: "380px",
              margin: "0 auto",
              backgroundColor: "#E4F8F7",
              border: "1px solid #18B5B0",
              borderRadius: "14px",
              padding: "1.25rem 1.5rem",
              zIndex: 100,
              animation: "fadeIn 0.3s ease",
            }}
          >
            <p style={{ color: "#0A7B78", fontWeight: 700, marginBottom: "4px" }}>
              ✓ Đã gửi! Kiểm tra email của bạn.
            </p>
            <p style={{ color: "#1C4A48", fontSize: "13px" }}>
              Phân tích chuyên sâu sẽ đến trong vài phút.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

function LoadingState() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ color: "#9B96C0" }}>Đang tải kết quả...</p>
    </div>
  );
}
