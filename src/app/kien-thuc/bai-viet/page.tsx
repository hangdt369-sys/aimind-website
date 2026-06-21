"use client";
import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { articles as rawArticles } from "@/lib/articles";

const articles = rawArticles.map((a) => ({
  slug: `/kien-thuc/bai-viet/${a.slug}`,
  tag: a.tag,
  color: a.tagColor,
  title: a.title,
  excerpt: a.excerpt,
  readTime: a.readTime,
}));


const tags = ["Tất cả", "Mô thức", "Khoa học thần kinh", "Gắn bó", "Phân biệt mô thức", "Gia đình", "Ranh giới", "Cảm xúc", "Sự nghiệp", "Quan hệ", "Tự nhận thức", "Hành vi"];

export default function BaiVietPage() {
  const [activeTag, setActiveTag] = useState("Tất cả");
  const filtered = activeTag === "Tất cả" ? articles : articles.filter((a): a is NonNullable<typeof a> => !!a && a.tag === activeTag);

  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)",
            padding: "6rem 0 4rem",
            textAlign: "center",
          }}
        >
          <div className="container-main" style={{ maxWidth: "640px" }}>
            <div
              style={{
                display: "inline-block",
                background: "rgba(124,111,247,0.15)",
                border: "1px solid rgba(124,111,247,0.3)",
                borderRadius: "999px",
                padding: "6px 20px",
                color: "#B8B3FA",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                marginBottom: "1.5rem",
              }}
            >
              Kiến Thức
            </div>
            <h1
              style={{
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1rem",
              }}
            >
              Insight về tâm lý, hành vi và tự nhận thức
            </h1>
            <p style={{ color: "#9B96C0", fontSize: "16px", lineHeight: 1.75 }}>
              Không phải động lực sáo rỗng. Là hiểu biết thật sự giúp bạn
              nhìn ra điều mà trước đây bạn chưa thấy.
            </p>
          </div>
        </section>

        {/* Filter Tags */}
        <section style={{ backgroundColor: "white", borderBottom: "1px solid #E8E3F0", padding: "1.25rem 0" }}>
          <div className="container-main">
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" as const }}>
              {tags.map((tag) => {
                const isActive = activeTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    style={{
                      padding: "6px 16px",
                      borderRadius: "999px",
                      fontSize: "13px",
                      fontWeight: 600,
                      border: "1px solid",
                      cursor: "pointer",
                      transition: "all 0.15s",
                      backgroundColor: isActive ? "#1C1A3E" : "transparent",
                      color: isActive ? "white" : "#6B678F",
                      borderColor: isActive ? "#1C1A3E" : "#E8E3F0",
                    }}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Articles grid */}
        <section style={{ padding: "4rem 0", backgroundColor: "#F8F4EE" }}>
          <div className="container-main">
            {filtered.length === 0 ? (
              <p style={{ color: "#9B96C0", textAlign: "center", padding: "3rem 0" }}>
                Chưa có bài viết trong chủ đề này.
              </p>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {filtered.filter(Boolean).map((article, i) => article && (
                  <Link
                    key={i}
                    href={article.slug}
                    style={{
                      backgroundColor: "white",
                      borderRadius: "16px",
                      padding: "2rem",
                      border: "1px solid #E8E3F0",
                      textDecoration: "none",
                      display: "block",
                      transition: "transform 0.2s, box-shadow 0.2s",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                      <span
                        style={{
                          backgroundColor: article.color + "15",
                          color: article.color,
                          padding: "4px 12px",
                          borderRadius: "999px",
                          fontSize: "12px",
                          fontWeight: 700,
                        }}
                      >
                        {article.tag}
                      </span>
                      <span style={{ color: "#9B96C0", fontSize: "12px" }}>{article.readTime} đọc</span>
                    </div>
                    <h2
                      style={{
                        color: "#1C1A3E",
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        fontWeight: 700,
                        fontSize: "17px",
                        lineHeight: 1.45,
                        marginBottom: "0.75rem",
                      }}
                    >
                      {article.title}
                    </h2>
                    <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.75 }}>
                      {article.excerpt}
                    </p>
                    <div style={{ marginTop: "1.5rem", color: article.color, fontSize: "13px", fontWeight: 700 }}>
                      Đọc tiếp →
                    </div>
                  </Link>
                ))})
              </div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section
          style={{
            padding: "5rem 0",
            background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)",
            textAlign: "center",
          }}
        >
          <div className="container-main" style={{ maxWidth: "520px" }}>
            <h2
              style={{
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
                fontWeight: 800,
                marginBottom: "1rem",
              }}
            >
              Muốn nói chuyện sâu hơn?
            </h2>
            <p style={{ color: "#C4C0E0", marginBottom: "2rem", fontSize: "15px", lineHeight: 1.75 }}>
              Nhắn tin trực tiếp cho Hanna qua Zalo —
              để hỏi về khóa học, coaching, hoặc bất cứ điều gì bạn đang thắc mắc.
            </p>
            <a
              href="https://zalo.me/0848270819"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
                color: "white",
                padding: "14px 32px",
                borderRadius: "999px",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                boxShadow: "0 8px 24px rgba(124,111,247,0.4)",
              }}
            >
              Nhắn tin Hanna qua Zalo
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
