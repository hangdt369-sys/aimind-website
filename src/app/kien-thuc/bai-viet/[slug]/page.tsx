import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, getAllArticleSlugs, getRelatedArticles } from "@/lib/articles";

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();
  const related = getRelatedArticles(params.slug, article.tag, 3);

  return (
    <main style={{ flex: 1, backgroundColor: "#F8F4EE" }}>
        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)",
            padding: "5rem 0 4rem",
          }}
        >
          <div className="container-main" style={{ maxWidth: "720px" }}>
            <Link
              href="/kien-thuc/bai-viet"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#9B96C0",
                textDecoration: "none",
                fontSize: "13px",
                marginBottom: "1.5rem",
              }}
            >
              ← Tất cả bài viết
            </Link>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
              <span
                style={{
                  backgroundColor: article.tagColor + "20",
                  color: article.tagColor,
                  padding: "4px 14px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 700,
                  border: `1px solid ${article.tagColor}40`,
                }}
              >
                {article.tag}
              </span>
              <span style={{ color: "#6B678F", fontSize: "13px" }}>{article.readTime} đọc</span>
              <span style={{ color: "#6B678F", fontSize: "13px" }}>{article.publishDate}</span>
            </div>

            <h1
              style={{
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: "1.25rem",
              }}
            >
              {article.title}
            </h1>
            <p style={{ color: "#C4C0E0", fontSize: "16px", lineHeight: 1.75 }}>
              {article.excerpt}
            </p>
          </div>
        </section>

        {/* Article body */}
        <section style={{ padding: "4rem 0 2rem" }}>
          <div className="container-main" style={{ maxWidth: "680px" }}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "clamp(1.5rem, 4vw, 3rem)",
                border: "1px solid #E8E3F0",
                lineHeight: 1.9,
              }}
            >
              {article.sections.map((section, i) => {
                if (section.type === "heading") {
                  return (
                    <h2
                      key={i}
                      style={{
                        color: "#1C1A3E",
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
                        fontWeight: 700,
                        marginTop: "2.5rem",
                        marginBottom: "1rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {section.content}
                    </h2>
                  );
                }

                if (section.type === "paragraph") {
                  return (
                    <p
                      key={i}
                      style={{
                        color: "#3D3A5C",
                        fontSize: "16px",
                        lineHeight: 1.9,
                        marginBottom: "1.25rem",
                      }}
                    >
                      {section.content}
                    </p>
                  );
                }

                if (section.type === "quote") {
                  return (
                    <blockquote
                      key={i}
                      style={{
                        borderLeft: "4px solid #7C6FF7",
                        paddingLeft: "1.5rem",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: "2rem",
                        marginBottom: "2rem",
                        color: "#5B4FD4",
                        fontSize: "17px",
                        fontStyle: "italic",
                        lineHeight: 1.7,
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {section.content}
                    </blockquote>
                  );
                }

                if (section.type === "list" && section.items) {
                  return (
                    <ul
                      key={i}
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "1rem 0 1.5rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      {section.items.map((item, j) => (
                        <li
                          key={j}
                          style={{
                            display: "flex",
                            gap: "0.75rem",
                            color: "#3D3A5C",
                            fontSize: "15px",
                            lineHeight: 1.75,
                            backgroundColor: "#F8F4EE",
                            borderRadius: "10px",
                            padding: "1rem 1.25rem",
                          }}
                        >
                          <span style={{ color: "#7C6FF7", fontWeight: 700, flexShrink: 0 }}>→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (section.type === "divider") {
                  return (
                    <hr
                      key={i}
                      style={{
                        border: "none",
                        borderTop: "1px solid #E8E3F0",
                        margin: "2.5rem 0",
                      }}
                    />
                  );
                }

                return null;
              })}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {related.length > 0 && (
          <section style={{ padding: "4rem 0", backgroundColor: "#F8F4EE" }}>
            <div className="container-main" style={{ maxWidth: "800px" }}>
              <h3
                style={{
                  color: "#1C1A3E",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  marginBottom: "1.5rem",
                }}
              >
                Bài viết liên quan
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/kien-thuc/bai-viet/${r.slug}`}
                    style={{
                      backgroundColor: "white",
                      borderRadius: "14px",
                      padding: "1.5rem",
                      border: "1px solid #E8E3F0",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: r.tagColor + "15",
                        color: r.tagColor,
                        padding: "3px 10px",
                        borderRadius: "999px",
                        fontSize: "11px",
                        fontWeight: 700,
                        display: "inline-block",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {r.tag}
                    </span>
                    <h4
                      style={{
                        color: "#1C1A3E",
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        fontWeight: 700,
                        fontSize: "15px",
                        lineHeight: 1.45,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {r.title}
                    </h4>
                    <div style={{ color: r.tagColor, fontSize: "12px", fontWeight: 700, marginTop: "0.75rem" }}>
                      Đọc tiếp →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section style={{ padding: "3rem 0 5rem" }}>
          <div className="container-main" style={{ maxWidth: "680px" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)",
                borderRadius: "20px",
                padding: "2.5rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(124,111,247,0.15)",
                  border: "1px solid rgba(124,111,247,0.3)",
                  borderRadius: "999px",
                  padding: "6px 18px",
                  color: "#B8B3FA",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase" as const,
                  marginBottom: "1rem",
                }}
              >
                Bước tiếp theo
              </div>
              <h3
                style={{
                  color: "white",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
                  fontWeight: 800,
                  marginBottom: "1rem",
                  lineHeight: 1.35,
                }}
              >
                Bạn đang vận hành theo mô thức nào?
              </h3>
              <p
                style={{
                  color: "#C4C0E0",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  marginBottom: "1.75rem",
                }}
              >
                Bài test Bản Đồ Nội Tâm sẽ giúp bạn nhìn thấy mô thức của mình — không phải nhãn dán, mà là hiểu thật.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" as const }}>
                <Link
                  href="/kham-pha/ban-do-noi-tam"
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
                    boxShadow: "0 8px 24px rgba(124,111,247,0.4)",
                  }}
                >
                  Làm bài test miễn phí →
                </Link>
                <a
                  href="https://zalo.me/0848270819"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "white",
                    padding: "14px 28px",
                    borderRadius: "999px",
                    fontSize: "15px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Hỏi Hanna qua Zalo
                </a>
              </div>
            </div>

            {/* Back to blog */}
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link
                href="/kien-thuc/bai-viet"
                style={{
                  color: "#9B96C0",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                ← Xem thêm bài viết khác
              </Link>
            </div>
          </div>
        </section>
    </main>
  );
}
