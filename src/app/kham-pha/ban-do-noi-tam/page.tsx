"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import { testQuestions, TOTAL_QUESTIONS } from "@/data/test-config";
import type { ArchetypeKey } from "@/types";
import { storeTestResult, getDominantArchetype, getSecondaryArchetype } from "@/lib/utils";

// ─── Test Page — Bài Test Bản Đồ Nội Tâm ────────────────────────────────────

type Step = "intro" | "testing" | "submitting";

type AnswerMap = Record<string, number>;

export default function TestPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const progress = Math.round((currentQ / TOTAL_QUESTIONS) * 100);
  const question = testQuestions[currentQ];

  function handleOptionSelect(value: number) {
    setSelectedOption(value);
  }

  function handleNext() {
    if (selectedOption === null) return;

    const newAnswers = { ...answers, [question.id]: selectedOption };
    setAnswers(newAnswers);

    if (currentQ < TOTAL_QUESTIONS - 1) {
      setCurrentQ(currentQ + 1);
      setSelectedOption(null);
    } else {
      // Calculate result
      calculateAndNavigate(newAnswers);
    }
  }

  function handleBack() {
    if (currentQ === 0) {
      setStep("intro");
    } else {
      setCurrentQ(currentQ - 1);
      const prev = answers[testQuestions[currentQ - 1].id];
      setSelectedOption(prev ?? null);
    }
  }

  function calculateAndNavigate(finalAnswers: AnswerMap) {
    setStep("submitting");

    // Aggregate archetype scores
    const scores: Record<ArchetypeKey, number> = {
      "lo-au": 0,
      "ne-tranh": 0,
      "kiem-soat": 0,
      "hy-sinh": 0,
      "tu-huy": 0,
      "can-bang": 0,
    };

    testQuestions.forEach((q) => {
      const chosenValue = finalAnswers[q.id];
      const chosenOption = q.options.find((o) => o.value === chosenValue);
      if (!chosenOption) return;

      Object.entries(chosenOption.archetypeScores).forEach(([key, pts]) => {
        scores[key as ArchetypeKey] = (scores[key as ArchetypeKey] ?? 0) + pts;
      });
    });

    const dominant = getDominantArchetype(scores) as ArchetypeKey;
    const secondary = getSecondaryArchetype(scores, dominant) as ArchetypeKey | undefined;

    const result = {
      dominant,
      secondary,
      scores,
      answeredAt: new Date().toISOString(),
    };

    storeTestResult(result);

    // Navigate to results
    router.push(`/kham-pha/ket-qua?pattern=${dominant}`);
  }

  if (step === "intro") {
    return (
      <>
        <Navbar />
        <IntroScreen onStart={() => setStep("testing")} />
      </>
    );
  }

  if (step === "submitting") {
    return (
      <>
        <Navbar />
        <LoadingScreen />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "calc(100vh - 64px)",
          backgroundColor: "#F8F4EE",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem 1.25rem 4rem",
        }}
      >
        {/* Progress bar */}
        <div style={{ width: "100%", maxWidth: "640px", marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <button
              onClick={handleBack}
              style={{
                background: "none",
                border: "none",
                color: "#9B96C0",
                cursor: "pointer",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: 0,
              }}
            >
              ← Quay lại
            </button>
            <span style={{ color: "#9B96C0", fontSize: "13px" }}>
              {currentQ + 1} / {TOTAL_QUESTIONS}
            </span>
          </div>

          <div
            style={{
              height: "6px",
              backgroundColor: "#E8E3F0",
              borderRadius: "999px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #7C6FF7, #18B5B0)",
                borderRadius: "999px",
                transition: "width 0.4s ease",
              }}
            />
          </div>
        </div>

        {/* Question card */}
        <div
          key={question.id}
          style={{
            width: "100%",
            maxWidth: "640px",
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "2.5rem",
            boxShadow: "0 4px 24px rgba(28,26,62,0.1)",
            border: "1px solid #E8E3F0",
            animation: "fadeInUp 0.35s ease",
          }}
        >
          <p
            style={{
              color: "#1C1A3E",
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              fontWeight: 700,
              lineHeight: 1.5,
              marginBottom: "0.5rem",
            }}
          >
            {question.text}
          </p>

          {question.subtext && (
            <p style={{ color: "#9B96C0", fontSize: "13px", marginBottom: "1.5rem" }}>
              {question.subtext}
            </p>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "1.5rem" }}>
            {question.options.map((option) => {
              const isSelected = selectedOption === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => handleOptionSelect(option.value)}
                  style={{
                    width: "100%",
                    textAlign: "left" as const,
                    padding: "14px 18px",
                    borderRadius: "12px",
                    border: isSelected ? "2px solid #7C6FF7" : "2px solid #E8E3F0",
                    backgroundColor: isSelected ? "#EAE8FE" : "white",
                    color: isSelected ? "#5B4FD4" : "#3B3772",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    fontWeight: isSelected ? 600 : 400,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = "#B8B3FA";
                      e.currentTarget.style.backgroundColor = "#F8F7FF";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = "#E8E3F0";
                      e.currentTarget.style.backgroundColor = "white";
                    }
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      border: isSelected ? "2px solid #7C6FF7" : "2px solid #C4C0E0",
                      backgroundColor: isSelected ? "#7C6FF7" : "white",
                      marginRight: "12px",
                      verticalAlign: "middle",
                      flexShrink: 0,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {isSelected && (
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "white", display: "block" }} />
                    )}
                  </span>
                  {option.label}
                </button>
              );
            })}
          </div>

          {/* Next button */}
          <div style={{ marginTop: "2rem", display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              style={{
                background: selectedOption !== null
                  ? "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)"
                  : "#E8E3F0",
                color: selectedOption !== null ? "white" : "#9B96C0",
                padding: "12px 28px",
                borderRadius: "999px",
                border: "none",
                fontSize: "15px",
                fontWeight: 700,
                cursor: selectedOption !== null ? "pointer" : "not-allowed",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                transition: "all 0.2s ease",
              }}
            >
              {currentQ === TOTAL_QUESTIONS - 1 ? "Xem kết quả →" : "Câu tiếp theo →"}
            </button>
          </div>
        </div>

        {/* Privacy note */}
        <p style={{ color: "#C4C0E0", fontSize: "12px", marginTop: "1.5rem", textAlign: "center" }}>
          🔒 Câu trả lời của bạn hoàn toàn riêng tư và không được chia sẻ với bên thứ ba.
        </p>
      </div>
    </>
  );
}

/* ─── Intro Screen ─── */
function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        backgroundColor: "#F8F4EE",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.25rem",
      }}
    >
      <div
        style={{
          maxWidth: "560px",
          textAlign: "center",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #7C6FF7 0%, #18B5B0 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            margin: "0 auto 2rem",
            boxShadow: "0 8px 24px rgba(124,111,247,0.3)",
          }}
        >
          🧭
        </div>

        <h1
          style={{
            color: "#1C1A3E",
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 800,
            marginBottom: "1rem",
            lineHeight: 1.2,
          }}
        >
          Bài Test Bản Đồ Nội Tâm
        </h1>

        <p
          style={{
            color: "#6B678F",
            fontSize: "16px",
            lineHeight: 1.75,
            marginBottom: "2rem",
          }}
        >
          20 câu hỏi giúp bạn nhìn ra khuôn mẫu hành vi (mô thức) đang chi phối cuộc sống của bạn — trong tình yêu, công việc, và những quyết định hàng ngày mà bạn chưa hiểu tại sao mình cứ chọn như vậy.
        </p>

        {/* How to */}
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #E8E3F0",
            borderRadius: "16px",
            padding: "1.5rem",
            marginBottom: "2rem",
            textAlign: "left" as const,
          }}
        >
          <h3
            style={{
              color: "#1C1A3E",
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              marginBottom: "1rem",
              textTransform: "uppercase" as const,
              letterSpacing: "0.08em",
            }}
          >
            Để kết quả chính xác nhất:
          </h3>
          {[
            "Trả lời theo cảm giác đầu tiên — đừng suy nghĩ quá nhiều",
            "Chọn theo thực tế của bạn hiện tại — không phải cách bạn muốn mình là",
            "Không có câu trả lời đúng hay sai",
            "Khoảng 10-15 phút để hoàn thành",
          ].map((tip) => (
            <div
              key={tip}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <span style={{ color: "#18B5B0", marginTop: "2px", flexShrink: 0 }}>✓</span>
              <span style={{ color: "#6B678F", fontSize: "14px" }}>{tip}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onStart}
          style={{
            width: "100%",
            background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
            color: "white",
            padding: "16px 32px",
            borderRadius: "999px",
            border: "none",
            fontSize: "16px",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "'Be Vietnam Pro', sans-serif",
            boxShadow: "0 4px 20px rgba(124,111,247,0.35)",
            marginBottom: "1rem",
          }}
        >
          Bắt đầu bài test →
        </button>

        <p style={{ color: "#C4C0E0", fontSize: "12px" }}>
          Miễn phí hoàn toàn · Không cần tài khoản · Kết quả ngay lập tức
        </p>
      </div>
    </div>
  );
}

/* ─── Loading Screen ─── */
function LoadingScreen() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      {/* Animated logo */}
      <div
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "20px",
          background: "linear-gradient(135deg, #7C6FF7 0%, #18B5B0 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          marginBottom: "2rem",
          animation: "pulse 1.5s ease-in-out infinite",
        }}
      >
        🧭
      </div>

      <h2
        style={{
          color: "#1C1A3E",
          fontFamily: "'Be Vietnam Pro', sans-serif",
          fontSize: "1.5rem",
          fontWeight: 700,
          marginBottom: "0.75rem",
        }}
      >
        Đang phân tích bản đồ của bạn...
      </h2>
      <p style={{ color: "#9B96C0", fontSize: "15px" }}>
        Chúng tôi đang tổng hợp 20 câu trả lời và xây dựng hồ sơ mô thức cho bạn.
      </p>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.95); }
        }
      `}</style>
    </div>
  );
}
