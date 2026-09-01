"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { archetypes, archetypeOrder } from "@/data/archetypes";
import { MAX_SCORE_BY_ARCHETYPE } from "@/data/test-config";
import {
  getDominantArchetype,
  getSecondaryArchetype,
  getStoredTestResult,
  isValidEmail,
} from "@/lib/utils";
import { articles } from "@/lib/articles";
import type { ArchetypeKey, TestResult } from "@/types";

// ─── Results Page ─────────────────────────────────────────────────────────────

const scoreDisplayLabels: Record<ArchetypeKey, string> = {
  "lo-au": "Xu hướng Lo Âu",
  "ne-tranh": "Xu hướng Né Tránh",
  "kiem-soat": "Xu hướng Kiểm Soát",
  "hy-sinh": "Xu hướng Hy Sinh",
  "tu-huy": "Xu hướng Tự Hủy",
  "can-bang": "Xu hướng Cân Bằng",
};

function isValidCompletedTestResult(value: unknown): value is TestResult {
  if (!value || typeof value !== "object") return false;

  const candidate = value as Partial<TestResult>;
  if (!archetypeOrder.includes(candidate.dominant as ArchetypeKey)) return false;
  if (!candidate.scores || typeof candidate.scores !== "object") return false;
  if (typeof candidate.answeredAt !== "string" || Number.isNaN(Date.parse(candidate.answeredAt))) {
    return false;
  }

  const scoreKeys = Object.keys(candidate.scores);
  if (
    scoreKeys.length !== archetypeOrder.length ||
    !scoreKeys.every((key) => archetypeOrder.includes(key as ArchetypeKey))
  ) {
    return false;
  }

  const scoresAreValid = archetypeOrder.every((key) => {
    const score = candidate.scores?.[key];
    return (
      typeof score === "number" &&
      Number.isInteger(score) &&
      score >= 0 &&
      score <= MAX_SCORE_BY_ARCHETYPE[key]
    );
  });
  if (!scoresAreValid) return false;

  const scores = candidate.scores as Record<ArchetypeKey, number>;
  if (Object.values(scores).every((score) => score === 0)) return false;

  const dominant = getDominantArchetype(scores) as ArchetypeKey;
  if (candidate.dominant !== dominant) return false;

  const secondary = getSecondaryArchetype(scores, dominant) as ArchetypeKey | undefined;
  return candidate.secondary === secondary;
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <ResultsContent />
    </Suspense>
  );
}

function ResultsContent() {
  const router = useRouter();
  const [result, setResult] = useState<TestResult | null>(null);
  const [sessionChecked, setSessionChecked] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const stored = getStoredTestResult<unknown>();
    if (!isValidCompletedTestResult(stored)) {
      router.replace("/kham-pha/ban-do-noi-tam");
      return;
    }

    setResult(stored);
    setSessionChecked(true);
  }, [router]);

  if (!sessionChecked || !result) {
    return <LoadingState />;
  }

  const dominantKey = result.dominant;
  const archetype = archetypes[dominantKey];
  const secondaryKey = result.secondary;
  const secondaryArchetype = secondaryKey ? archetypes[secondaryKey] : null;
  const scores = result.scores;

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

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 20_000);

    try {
      // Gửi qua API route Next.js → Gmail SMTP
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          phone: phone || "",
          archetypeKey: dominantKey,
          archetypeName: archetype.name,
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("Email request failed");
      }

      setEmailSubmitted(true);
    } catch {
      setEmailError("Chưa thể gửi email. Vui lòng thử lại sau.");
    } finally {
      window.clearTimeout(timeoutId);
      setSubmitting(false);
    }
  }

  return (
    <>
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
              Mô thức nổi bật trong câu trả lời của bạn
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
              &ldquo;{archetype.tagline}&rdquo;
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
                <span>Xu hướng khác cũng xuất hiện:</span>
                <span style={{ color: "white", fontWeight: 600 }}>
                  {secondaryArchetype.icon} {secondaryArchetype.name}
                </span>
              </div>
            )}
            <p
              style={{
                color: "#9B96C0",
                fontSize: "13px",
                lineHeight: 1.7,
                maxWidth: "680px",
                margin: secondaryArchetype ? "1.25rem auto 0" : "0 auto",
              }}
            >
              Bản đồ này không phải chẩn đoán tâm lý. Kết quả phản ánh những xu hướng nổi bật trong câu trả lời của bạn tại thời điểm làm bài. Hãy xem chúng như những giả thuyết để tự quan sát, không phải một nhãn cố định về con người bạn.
            </p>
          </div>
        </section>

        {/* Main content */}
        <div className="container-main" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
          {/* Self-recognition */}
          <div className="card-base" style={{ padding: "2rem", marginBottom: "1.5rem" }}>
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
              <span style={{ color: archetype.color }}>●</span> Kết quả hiện tại gợi ý
            </h2>
            <p style={{ color: "#3B3772", lineHeight: 1.8, fontSize: "15px" }}>
              {archetype.description}
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

          {/* Understanding */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <div className="card-base" style={{ padding: "2rem" }}>
              <h3
                style={{
                  color: "#1C1A3E",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                ● Một cách để hiểu xu hướng này
              </h3>
              <p style={{ color: "#3B3772", lineHeight: 1.8, fontSize: "15px" }}>
                {archetype.coreWound}
              </p>
            </div>

            <div
              className="card-base"
              style={{
                padding: "2rem",
                borderLeft: `4px solid ${archetype.color}`,
                backgroundColor: `${archetype.color}08`,
              }}
            >
              <h3
                style={{
                  color: "#1C1A3E",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                ● Điều có thể xuất hiện
              </h3>
              <p style={{ color: "#3B3772", fontSize: "15px", lineHeight: 1.8 }}>
                {archetype.hiddenFear}
              </p>
            </div>
          </div>

          {/* Strengths */}
          <div className="card-base" style={{ padding: "2rem", marginBottom: "2rem", backgroundColor: "#E4F8F7" }}>
            <h3
              style={{
                color: "#0A7B78",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              💪 Nguồn lực có thể đi cùng xu hướng này
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {archetype.strengths.map((strength) => (
                <div key={strength} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#18B5B0", fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span style={{ color: "#1C4A48", fontSize: "14px" }}>{strength}</span>
                </div>
              ))}
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
                📊 Mức độ biểu hiện trong bài trả lời
              </h3>
              <p
                style={{
                  color: "#6B678F",
                  fontSize: "13px",
                  lineHeight: 1.6,
                  marginTop: "-0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                Đây là tỷ lệ điểm bạn đạt được so với mức điểm tối đa của từng xu hướng trong bài test. Con số này không phải xác suất, tỷ lệ bạn &ldquo;là&rdquo; một mô thức hay kết luận chẩn đoán.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {archetypeOrder.map((key) => {
                  const arch = archetypes[key];
                  const score = scores[key] ?? 0;
                  const maxPossibleScore = MAX_SCORE_BY_ARCHETYPE[key];
                  const pct = maxPossibleScore > 0
                    ? Math.round((score / maxPossibleScore) * 100)
                    : 0;
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
                          {arch.icon} {scoreDisplayLabels[key]}
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

          {/* Observation */}
          <div className="card-base" style={{ padding: "2rem", marginBottom: "2rem", backgroundColor: "#EAE8FE" }}>
            <h3
              style={{
                color: "#5B4FD4",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              🌱 Điều bạn có thể quan sát tiếp
            </h3>
            <p style={{ color: "#3B3772", fontSize: "14px", lineHeight: 1.7 }}>
              {archetype.growthEdge}
            </p>
          </div>

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
                📚 Bài viết liên quan đến {archetype.name}
              </h3>
              <p style={{ color: "#9B96C0", fontSize: "13px", marginBottom: "1.5rem" }}>
                Đọc như một cách để tiếp tục quan sát xu hướng này trong những bối cảnh đời sống cụ thể.
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

          {/* Tìm hiểu thêm khi phù hợp */}
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
              Tìm hiểu thêm khi phù hợp
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
              Bạn có thể lưu kết quả hoặc đi sâu hơn khi sẵn sàng
            </h3>
            <p style={{ color: "#9B96C0", fontSize: "14px", marginBottom: "2rem" }}>
              {archetype.nextStep}
            </p>

            <button
              type="button"
              onClick={() => setShowEmailCapture(true)}
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
                color: "white",
                padding: "12px 20px",
                borderRadius: "12px",
                border: "none",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                marginBottom: "1.5rem",
              }}
            >
              📬 Nhận kết quả và nội dung quan sát qua email
            </button>

            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1rem", marginBottom: "2rem" }}>
              {[
                {
                  step: "01",
                  title: "Học khóa Bản Đồ Nội Tâm Chuyên Sâu",
                  desc: "Từ nhận diện đến thực hành — 6 module giúp bạn quan sát và thử những lựa chọn mới.",
                  href: "/hanh-trinh/ban-do-noi-tam-chuyen-sau",
                  label: "Xem khóa học →",
                  color: "#7C6FF7",
                },
                {
                  step: "02",
                  title: "Đồng hành 1-1 cùng Hanna",
                  desc: "Cùng quan sát xu hướng của bạn trong bối cảnh đời sống thực tế.",
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
              Nhận kết quả và nội dung quan sát về {archetype.name}
            </h4>
            <p style={{ color: "#6B678F", fontSize: "13px", marginBottom: "1rem", lineHeight: 1.6 }}>
              Điền email + số điện thoại để nhận lại kết quả và gợi ý thực hành phù hợp.
            </p>

            <form onSubmit={handleEmailSubmit} noValidate>
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
              Thông tin chỉ dùng để gửi kết quả và hỗ trợ nội dung bạn yêu cầu.
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
