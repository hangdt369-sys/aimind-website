import type { Metadata } from "next";
import Link from "next/link";
import { LIBRARY_CATEGORIES, getCategoryArticles } from "@/lib/library";

export const metadata: Metadata = {
  title: "Thư Viện Tri Thức — Psychology, Neuroscience & More | AIMIND",
  description:
    "Thư viện kiến thức AIMIND: Psychology, Neuroscience, Biology, Evolution, Philosophy, Behavioral Science, Critical Thinking, Health, AI & Human.",
};

export default function ThuVienPage() {
  return (
    <main style={{ flex: 1 }}>
      <section
        style={{
          backgroundColor: "#F8F4EE",
          padding: "5rem 0 4rem",
          borderBottom: "1px solid #E8E3F0",
        }}
      >
        <div className="container-main" style={{ textAlign: "center" }}>
          <p
            style={{
              color: "#7C6FF7",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Thư Viện Tri Thức
          </p>
          <h1
            style={{
              color: "#1C1A3E",
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1.25rem",
              letterSpacing: "-0.03em",
            }}
          >
            Kiến thức có căn cứ khoa học
            <br />
            được viết bằng ngôn ngữ đời thường
          </h1>
          <p
            style={{
              color: "#6B678F",
              fontSize: "17px",
              lineHeight: 1.8,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Không phải self-help mơ hồ. Không phải thuật ngữ hàn lâm khó hiểu.
            Đây là những gì khoa học thực sự nói về con người.
          </p>
        </div>
      </section>

      <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {LIBRARY_CATEGORIES.map((category) => {
              const count = getCategoryArticles(category.slug).length;
              return (
                <Link
                  key={category.slug}
                  href={`/thu-vien/${category.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <article
                    className="hover-lift-card-high"
                    style={{
                      height: "100%",
                      border: "1px solid #E8E3F0",
                      borderRadius: "16px",
                      padding: "2rem",
                      transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                      borderTop: `3px solid ${category.color}`,
                    }}
                  >
                    <div style={{ fontSize: "36px", marginBottom: "1rem" }}>
                      {category.icon}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "0.55rem",
                      }}
                    >
                      <p
                        style={{
                          color: category.color,
                          fontSize: "12px",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                        }}
                      >
                        {category.label}
                      </p>
                      <span style={{ color: "#9B96C0", fontSize: "12px" }}>
                        {count > 0 ? `${count} bài` : "Sắp cập nhật"}
                      </span>
                    </div>
                    <h2
                      style={{
                        color: "#1C1A3E",
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {category.vi}
                    </h2>
                    <p style={{ color: "#6B678F", fontSize: "13px", lineHeight: 1.65 }}>
                      {category.description}
                    </p>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section
        style={{ padding: "4rem 0", backgroundColor: "#F8F4EE", textAlign: "center" }}
      >
        <div className="container-main">
          <h2
            style={{
              color: "#1C1A3E",
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              marginBottom: "1rem",
            }}
          >
            Muốn học có hệ thống hơn?
          </h2>
          <p
            style={{
              color: "#6B678F",
              fontSize: "15px",
              lineHeight: 1.75,
              maxWidth: "480px",
              margin: "0 auto 2rem",
            }}
          >
            Thư viện là nơi đọc tự do. Nếu bạn muốn lộ trình cụ thể — xem Học cùng
            AIMIND.
          </p>
          <Link
            href="/hoc-cung-aimind"
            style={{
              backgroundColor: "#7C6FF7",
              color: "white",
              padding: "12px 28px",
              borderRadius: "999px",
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Xem lộ trình học →
          </Link>
        </div>
      </section>
    </main>
  );
}
