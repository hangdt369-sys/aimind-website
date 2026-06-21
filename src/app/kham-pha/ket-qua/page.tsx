"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { archetypes, archetypeOrder } from "@/data/archetypes";
import { getStoredTestResult, isValidEmail } from "@/lib/utils";
import { articles } from "@/lib/articles";
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
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
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

  // Bài viết liên quan theo mô thức
  const relatedSlugs: Record<string, string[]> = {
    "lo-au": ["gan-bo-lo-lang-khi-yeu-dong-nghia-voi-so-mat", "4-kieu-gan-bo-va-cach-chung-dinh-hinh-moi-quan-he", "tai-sao-ban-cu-thu-hut-cung-mot-kieu-nguoi"],
    "ne-tranh": ["gan-bo-ne-tranh-khi-gan-gui-cam-thay-nguy-hiem", "huong-noi-hay-ne-tranh-su-khac-biet", "ranh-gioi-khong-phai-lanh-lung"],
    "kiem-soat": ["khi-cau-toan-tro-thanh-cai-bay", "burnout-khong-phai-do-lam-nhieu", "y-chi-khong-du-thay-doi-hanh-vi"],
    "hy-sinh": ["enneagram-type-2-cho-di-de-duoc-yeu", "tai-sao-ban-khong-the-noi-khong", "ranh-gioi-khong-phai-lanh-lung"],
    "tu-huy": ["tu-pha-hoai-va-khoa-hoc-dang-sau", "bong-toi-noi-tam-dang-dieu-khien-ban", "biet-type-van-khong-thay-doi-duoc"],
    "can-bang": ["mo-thuc-noi-tam-co-ban", "biet-minh-va-hieu-minh", "hanh-phuc-that-su-den-tu-dau"],
  };
  const relatedArticles = (relatedSlugs[dominantKey] ?? [])
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean);

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    let hasError = false;

    if (!isValidEmail(email)) {
      setEmailError("Vui lòng nhập email hợp lệ");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (phone && !/^[0-9\s\+\-]{9,12}$/.test(phone.trim())) {
      setPhoneError("Số điện thoại không hợp lệ");
      hasError = true;
    } else {
      setPhoneError("");
    }

    if (hasError) return;
    setSubmitting(true);

    try {
      // Gửi qua API route Next.js → Gmail SMTP
      await fetch("/api/submit-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          phone: phone || "",
          archetypeKey: dominantKey,
          archetypeName: archetype.name,
        }),
      });
    } catch {
      // Fail silently — vẫn hiện success để UX không bị gián đoạn
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
                <span>Mô thức phụ:</span>
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
                📊 Bản đồ mô thức của bạn
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

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <div className="card-base" style={{ padding: "2rem", marginBottom: "1.5rem" }}>
              <h3
                style={{
                  color: "#1C1A3E",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                📚 Bài viết dành riêng cho mô thức {archetype.name}
              </h3>
              <p style={{ color: "#9B96C0", fontSize: "13px", marginBottom: "1.5rem" }}>
                Đọc để hiểu sâu hơn về cách mô thức này vận hành trong cuộc sống của bạn.
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem" }}>
                {relatedArticles.map((article) => article && (
                  <Link
                    key={article.slug}
                    href={`/kien-thuc/bai-viet/${article.slug}`}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      padding: "1rem 1.25rem",
                      backgroundColor: "#F8F4EE",
                      borderRadius: "12px",
                      textDecoration: "none",
                      border: "1px solid #E8E3F0",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: `${archetype.color}15`,
                        border: `1px solid ${archetype.color}30`,
                        borderRadius: "8px",
                        padding: "4px 10px",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: archetype.color,
                        flexShrink: 0,
                        whiteSpace: "nowrap" as const,
                      }}
                    >
                      {article.readTime}
                    </div>
                    <div>
                      <p style={{ color: "#1C1A3E", fontWeight: 600, fontSize: "14px", lineHeight: 1.4, marginBottom: "4px" }}>
                        {article.title}
                      </p>
                      <p style={{ color: "#9B96C0", fontSize: "12px", lineHeight: 1.5 }}>
                        {article.excerpt.slice(0, 80)}...
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/kien-thuc/bai-viet"
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  color: archetype.color,
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Xem tất cả bài viết →
              </Link>
            </div>
          )}

          {/* Hành trình tiếp theo */}
          <div
            style={{
              background: "linear-gradient(135deg, #1C1A3E 0%, #2D2A5E 100%)",
              borderRadius: "20px",
              padding: "2.5rem",
              marginBottom: "2rem",
              color: "white",
            }}
          >
            <p style={{ color: "#B8B3FA", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "0.75rem" }}>
              Hành trình tiếp theo
            </p>
            <h3
              style={{
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "1.3rem",
                fontWeight: 800,
                marginBottom: "0.5rem",
              }}
            >
              Bạn vừa nhìn thấy mô thức — giờ là lúc hiểu nó
            </h3>
            <p style={{ color: "#9B96C0", fontSize: "14px", marginBottom: "2rem" }}>
              {archetype.nextStep}
            </p>

            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1rem", marginBottom: "2rem" }}>
              {[
                {
                  step: "01",
                  title: "Đọc bài viết liên quan",
                  desc: "Hiểu sâu hơn về cách mô thức của bạn hình thành và vận hành — miễn phí.",
                  href: "/kien-thuc/bai-viet",
                  label: "Đọc bài viết →",
                  color: "#18B5B0",
                },
                {
                  step: "02",
                  title: "Học khóa Bản Đồ Nội Tâm Chuyên Sâu",
                  desc: "Từ nhận diện đến thay đổi thật — 6 module đi vào gốc rễ của mô thức.",
                  href: "/hanh-trinh/ban-do-noi-tam-chuyen-sau",
                  label: "Xem khóa học →",
                  color: "#7C6FF7",
                },
                {
                  step: "03",
                  title: "Đồng hành 1-1 cùng Hanna",
                  desc: "Đi sâu vào mô thức của riêng bạn với người hiểu cách nó vận hành.",
                  href: "/dong-hanh",
                  label: "Đăng ký đồng hành →",
                  color: "#E67E74",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    borderRadius: "14px",
                    padding: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      color: item.color,
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.4rem",
                      lineHeight: 1,
                      flexShrink: 0,
                      opacity: 0.5,
                      minWidth: "36px",
                    }}
                  >
                    {item.step}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: "white", fontWeight: 700, fontSize: "15px", marginBottom: "4px" }}>{item.title}</p>
                    <p style={{ color: "#9B96C0", fontSize: "13px", lineHeight: 1.6, marginBottom: "10px" }}>{item.desc}</p>
                    <Link
                      href={item.href}
                      style={{
                        display: "inline-block",
                        backgroundColor: item.color,
                        color: "white",
                        padding: "7px 18px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: 700,
                        textDecoration: "none",
                      }}
                    >
                      {item.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
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
              Nhận phân tích chuyên sâu về mô thức {archetype.name}
            </h4>
            <p style={{ color: "#6B678F", fontSize: "13px", marginBottom: "1rem", lineHeight: 1.6 }}>
              Điền email + số điện thoại để nhận kết quả chi tiết và ứng dụng thực hành cá nhân.
            </p>

            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email của bạn *"
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
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Số điện thoại (để nhận app thực hành)"
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  border: phoneError ? "1px solid #E55A5A" : "1px solid #E8E3F0",
                  fontSize: "14px",
                  color: "#1C1A3E",
                  backgroundColor: "#F8F4EE",
                  marginBottom: phoneError ? "4px" : "10px",
                  outline: "none",
                  boxSizing: "border-box" as const,
                }}
              />
              {phoneError && (
                <p style={{ color: "#E55A5A", fontSize: "12px", marginBottom: "8px" }}>
                  {phoneError}
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
              ✓ Đã nhận! Kiểm tra email của bạn.
            </p>
            <p style={{ color: "#1C4A48", fontSize: "13px" }}>
              Kết quả và ứng dụng thực hành sẽ đến trong vài phút.
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
