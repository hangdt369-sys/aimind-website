import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";

const articles = [
  {
    slug: "/kien-thuc/bai-viet/mo-thuc-noi-tam-co-ban",
    tag: "Mô thức",
    title: "9 mô thức nội tâm cơ bản và cách nhận diện mô thức của bạn",
    excerpt: "Mỗi người trong chúng ta đều vận hành theo một mô thức cốt lõi — một cách nhìn thế giới và phản ứng với nó được hình thành từ rất sớm trong cuộc đời.",
    readTime: "8 phút",
    color: "#7C6FF7",
  },
  {
    slug: "/kien-thuc/bai-viet/y-chi-khong-du-thay-doi-hanh-vi",
    tag: "Khoa học thần kinh",
    title: "Tại sao ý chí không đủ: Khoa học đằng sau thay đổi hành vi",
    excerpt: "Chúng ta được dạy rằng thay đổi cần ý chí. Nhưng khoa học thần kinh cho thấy điều ngược lại — ý chí là nguồn tài nguyên có hạn và dễ cạn kiệt.",
    readTime: "6 phút",
    color: "#18B5B0",
  },
  {
    slug: "/kien-thuc/bai-viet/tai-sao-ban-cu-thu-hut-cung-mot-kieu-nguoi",
    tag: "Quan hệ",
    title: "Tại sao bạn cứ thu hút về phía mình cùng một kiểu người?",
    excerpt: "Không phải ngẫu nhiên. Mô thức nội tâm của bạn đang tích cực lựa chọn — và thường lựa chọn những gì quen thuộc, không phải những gì tốt cho bạn.",
    readTime: "7 phút",
    color: "#E8A87C",
  },
  {
    slug: "/kien-thuc/bai-viet/biet-minh-va-hieu-minh",
    tag: "Tự nhận thức",
    title: "Sự khác biệt giữa biết mình và thật sự hiểu mình",
    excerpt: "Hầu hết chúng ta đều biết một vài điều về bản thân. Nhưng biết và hiểu là hai điều rất khác nhau — và sự khác biệt đó quyết định mọi thứ.",
    readTime: "5 phút",
    color: "#7BAE7F",
  },
  {
    slug: "/kien-thuc/bai-viet/enneagram-type-2-cho-di-de-duoc-yeu",
    tag: "Mô thức",
    title: "Người Enneagram Type 2: Khi cho đi trở thành cách để được yêu",
    excerpt: "Type 2 không chỉ là 'người hay giúp đỡ'. Đằng sau sự hào phóng đó là một câu hỏi sâu hơn: Tôi có được yêu thương không nếu không cho đi?",
    readTime: "9 phút",
    color: "#7C6FF7",
  },
  {
    slug: "/kien-thuc/bai-viet/vong-lap-thoi-quen",
    tag: "Hành vi",
    title: "Vòng lặp thói quen và cách phá vỡ nó từ bên trong",
    excerpt: "Thói quen không phải điểm yếu của ý chí. Chúng là thuật toán mà não bộ viết ra để tiết kiệm năng lượng. Và bạn có thể viết lại thuật toán đó.",
    readTime: "7 phút",
    color: "#18B5B0",
  },
];

const tags = ["Tất cả", "Mô thức", "Khoa học thần kinh", "Quan hệ", "Tự nhận thức", "Hành vi"];

export default function BaiVietPage() {
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
              {tags.map((tag, i) => (
                <button
                  key={tag}
                  style={{
                    padding: "6px 16px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: 600,
                    border: "1px solid",
                    cursor: "pointer",
                    backgroundColor: i === 0 ? "#1C1A3E" : "transparent",
                    color: i === 0 ? "white" : "#6B678F",
                    borderColor: i === 0 ? "#1C1A3E" : "#E8E3F0",
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles grid */}
        <section style={{ padding: "4rem 0", backgroundColor: "#F8F4EE" }}>
          <div className="container-main">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {articles.map((article, i) => (
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
              ))}
            </div>
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
