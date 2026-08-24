import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  LIBRARY_CATEGORIES,
  getCategoryArticles,
  getLibraryCategory,
} from "@/lib/library";

export function generateStaticParams() {
  return LIBRARY_CATEGORIES.map((category) => ({ category: category.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const category = getLibraryCategory(params.category);
  if (!category) return {};
  return {
    title: `${category.label} — ${category.vi} | Thư viện AIMIND`,
    description: category.description,
  };
}

export default function LibraryCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = getLibraryCategory(params.category);
  if (!category) notFound();

  const categoryArticles = getCategoryArticles(category.slug);

  return (
    <main style={{ flex: 1, backgroundColor: "#F8F4EE" }}>
      <section
        style={{
          padding: "5rem 0 4rem",
          background: `linear-gradient(135deg, ${category.color}18 0%, #F8F4EE 70%)`,
          borderBottom: "1px solid #E8E3F0",
        }}
      >
        <div className="container-main" style={{ maxWidth: "820px" }}>
          <Link
            href="/thu-vien"
            style={{ color: "#6B678F", textDecoration: "none", fontSize: "14px" }}
          >
            ← Tất cả chủ đề
          </Link>
          <div style={{ fontSize: "54px", margin: "1.5rem 0 0.75rem" }}>
            {category.icon}
          </div>
          <p
            style={{
              color: category.color,
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            {category.label}
          </p>
          <h1
            style={{
              color: "#1C1A3E",
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            {category.vi}
          </h1>
          <p style={{ color: "#6B678F", fontSize: "17px", lineHeight: 1.8 }}>
            {category.description}
          </p>
          <p style={{ color: "#6B678F", marginTop: "1rem", fontSize: "14px" }}>
            {categoryArticles.length > 0
              ? `${categoryArticles.length} bài viết đã xuất bản`
              : "Nội dung đang được biên soạn"}
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 0 5rem" }}>
        <div className="container-main">
          {categoryArticles.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {categoryArticles.map((article) => (
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
                      borderRadius: "16px",
                      padding: "1.75rem",
                      borderTop: `3px solid ${article.tagColor}`,
                    }}
                  >
                    <div
                      style={{
                        color: article.tagColor,
                        fontSize: "12px",
                        fontWeight: 700,
                        marginBottom: "0.85rem",
                      }}
                    >
                      {article.tag} · {article.readTime} đọc
                    </div>
                    <h2
                      style={{
                        color: "#1C1A3E",
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        fontSize: "18px",
                        lineHeight: 1.45,
                        marginBottom: "0.8rem",
                      }}
                    >
                      {article.title}
                    </h2>
                    <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.7 }}>
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
                padding: "3rem",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#1C1A3E", fontWeight: 700, marginBottom: "0.75rem" }}>
                Chủ đề này đang được AIMIND biên soạn.
              </p>
              <p style={{ color: "#6B678F", marginBottom: "1.5rem" }}>
                Trong lúc chờ bài mới, bạn có thể khám phá toàn bộ nội dung đã xuất bản.
              </p>
              <Link
                href="/kien-thuc/bai-viet"
                style={{ color: category.color, fontWeight: 700, textDecoration: "none" }}
              >
                Xem tất cả bài viết →
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
