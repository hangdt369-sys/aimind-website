import Link from "next/link";
import {
  PILLAR_META,
  getRelatedTopics,
  getTopicArticles,
  type PillarTopic,
} from "@/lib/pillar-topics";

export default function PillarTopicPage({ topic }: { topic: PillarTopic }) {
  const meta = PILLAR_META[topic.pillar];
  const relatedArticles = getTopicArticles(topic);
  const relatedTopics = getRelatedTopics(topic);

  return (
    <main style={{ flex: 1, backgroundColor: "#F8F4EE" }}>
      <section
        style={{
          background: `linear-gradient(145deg, ${meta.softColor} 0%, #F8F4EE 72%)`,
          borderBottom: "1px solid #E8E3F0",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container-main" style={{ maxWidth: "840px" }}>
          <Link
            href={meta.href}
            style={{
              color: "#6B678F",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            ← Quay lại {meta.label}
          </Link>

          <div
            aria-hidden="true"
            style={{ fontSize: "52px", margin: "1.75rem 0 0.75rem" }}
          >
            {topic.icon}
          </div>
          <p
            style={{
              color: meta.color,
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.8rem",
            }}
          >
            {meta.label} · {topic.label}
          </p>
          <h1
            style={{
              color: "#1C1A3E",
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              marginBottom: "1.25rem",
            }}
          >
            {topic.title}
          </h1>
          <p
            style={{
              color: "#5B577A",
              fontSize: "17px",
              lineHeight: 1.8,
              maxWidth: "760px",
            }}
          >
            {topic.description}
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 0", backgroundColor: "white" }}>
        <div className="container-main" style={{ maxWidth: "1000px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1fr)",
              gap: "2.5rem",
              alignItems: "start",
            }}
            className="pillar-topic-intro-grid"
          >
            <div>
              <p
                style={{
                  color: meta.color,
                  fontWeight: 800,
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                Bắt đầu từ đâu?
              </p>
              <h2
                style={{
                  color: "#1C1A3E",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  lineHeight: 1.35,
                  marginBottom: "1rem",
                }}
              >
                Hiểu trước, thực hành sau
              </h2>
              <p style={{ color: "#6B678F", lineHeight: 1.85, fontSize: "15px" }}>
                {topic.guidance}
              </p>
            </div>

            <div style={{ display: "grid", gap: "0.85rem" }}>
              {topic.insights.map((insight, index) => (
                <div
                  key={insight}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.9rem",
                    padding: "1rem",
                    borderRadius: "14px",
                    backgroundColor: meta.softColor,
                    border: `1px solid ${meta.color}22`,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "999px",
                      flexShrink: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: meta.color,
                      color: "white",
                      fontSize: "12px",
                      fontWeight: 800,
                    }}
                  >
                    {index + 1}
                  </span>
                  <p
                    style={{
                      color: "#3B3772",
                      fontSize: "14px",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {insight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 0 5rem" }}>
        <div className="container-main">
          <div
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "space-between",
              gap: "1rem",
              marginBottom: "1.75rem",
            }}
          >
            <div>
              <p
                style={{
                  color: meta.color,
                  fontWeight: 800,
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Đọc sâu hơn
              </p>
              <h2
                style={{
                  color: "#1C1A3E",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "clamp(1.35rem, 3vw, 1.9rem)",
                }}
              >
                Bài viết liên quan
              </h2>
            </div>
            <Link
              href="/kien-thuc/bai-viet"
              style={{ color: meta.color, fontWeight: 700, textDecoration: "none" }}
            >
              Tất cả bài viết →
            </Link>
          </div>

          {relatedArticles.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/kien-thuc/bai-viet/${article.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <article
                    className="hover-lift-card-high"
                    style={{
                      height: "100%",
                      backgroundColor: "white",
                      border: "1px solid #E8E3F0",
                      borderTop: `3px solid ${article.tagColor}`,
                      borderRadius: "16px",
                      padding: "1.5rem",
                    }}
                  >
                    <p
                      style={{
                        color: article.tagColor,
                        fontSize: "12px",
                        fontWeight: 700,
                        marginBottom: "0.75rem",
                      }}
                    >
                      {article.tag} · {article.readTime} đọc
                    </p>
                    <h3
                      style={{
                        color: "#1C1A3E",
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        fontSize: "17px",
                        lineHeight: 1.5,
                        marginBottom: "0.65rem",
                      }}
                    >
                      {article.title}
                    </h3>
                    <p style={{ color: "#6B678F", fontSize: "13px", lineHeight: 1.7 }}>
                      {article.excerpt}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div
              style={{
                backgroundColor: "white",
                border: "1px solid #E8E3F0",
                borderRadius: "16px",
                padding: "2rem",
                color: "#6B678F",
              }}
            >
              Các bài chuyên sâu cho chủ đề này đang được biên soạn. Phần hướng dẫn
              phía trên vẫn có thể được dùng làm điểm bắt đầu thực hành.
            </div>
          )}
        </div>
      </section>

      <section style={{ padding: "4rem 0", backgroundColor: "#1C1A3E" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <p style={{ color: "#B8B3FA", fontSize: "14px", marginBottom: "0.75rem" }}>
            {meta.tagline}
          </p>
          <h2
            style={{
              color: "white",
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              marginBottom: "1.5rem",
            }}
          >
            Tiếp tục hành trình với {meta.label}
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href={topic.ctaHref ?? meta.href}
              style={{
                backgroundColor: meta.color,
                color: "white",
                padding: "12px 24px",
                borderRadius: "999px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              {topic.ctaLabel ?? `Khám phá ${meta.label}`} →
            </Link>
            {relatedTopics.map((related) => (
              <Link
                key={related.slug}
                href={`/${related.pillar}/${related.slug}`}
                style={{
                  color: "#D8D4F0",
                  border: "1px solid rgba(255,255,255,0.18)",
                  padding: "12px 20px",
                  borderRadius: "999px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {related.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .pillar-topic-intro-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
