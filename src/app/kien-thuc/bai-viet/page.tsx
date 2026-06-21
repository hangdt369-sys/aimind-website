"use client";
import { useState } from "react";
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
    excerpt: "Type 2 không chỉ là người hay giúp đỡ. Đằng sau sự hào phóng đó là một câu hỏi sâu hơn: Tôi có được yêu thương không nếu không cho đi?",
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
  {
    slug: "/kien-thuc/bai-viet/he-than-kinh-dang-bao-ve-ban",
    tag: "Khoa học thần kinh",
    title: "Hệ thần kinh của bạn không hỏng — nó chỉ đang bảo vệ bạn",
    excerpt: "Bạn hay lo lắng quá mức, hay tê liệt khi căng thẳng? Đó không phải tính cách. Đó là hệ thần kinh đang làm đúng nhiệm vụ của nó — chỉ là trong hoàn cảnh không còn cần thiết.",
    readTime: "7 phút",
    color: "#18B5B0",
  },
  {
    slug: "/kien-thuc/bai-viet/sang-chan-tam-ly-khong-chi-o-trong-ky-uc",
    tag: "Khoa học thần kinh",
    title: "Sang chấn tâm lý không chỉ nằm trong ký ức — nó nằm trong cơ thể",
    excerpt: "Nhiều người đã hiểu và tha thứ cho quá khứ về mặt lý trí. Nhưng cơ thể vẫn phản ứng như thể nó chưa qua. Đây là cách sang chấn thật sự hoạt động.",
    readTime: "8 phút",
    color: "#18B5B0",
  },
  {
    slug: "/kien-thuc/bai-viet/neuroplasticity-nao-bo-co-the-thay-doi",
    tag: "Khoa học thần kinh",
    title: "Neuroplasticity: Não bộ có thể thay đổi — nhưng không theo cách bạn nghĩ",
    excerpt: "Chúng ta nghe nhiều về não bộ có thể thay đổi. Nhưng ít ai nói rõ: thay đổi như thế nào, mất bao lâu, và tại sao biết điều này vẫn không giúp bạn thay đổi nhanh hơn.",
    readTime: "6 phút",
    color: "#18B5B0",
  },
  {
    slug: "/kien-thuc/bai-viet/4-kieu-gan-bo-va-cach-chung-dinh-hinh-moi-quan-he",
    tag: "Gắn bó",
    title: "4 kiểu gắn bó và cách chúng định hình mọi mối quan hệ của bạn",
    excerpt: "Cách bạn yêu, cách bạn tranh luận, cách bạn rời đi — tất cả đều bắt nguồn từ kiểu gắn bó hình thành từ khi bạn còn là đứa trẻ chưa biết nói.",
    readTime: "9 phút",
    color: "#E8A87C",
  },
  {
    slug: "/kien-thuc/bai-viet/gan-bo-lo-lang-khi-yeu-dong-nghia-voi-so-mat",
    tag: "Gắn bó",
    title: "Người gắn bó lo lắng: Khi yêu đồng nghĩa với sợ mất",
    excerpt: "Bạn yêu rất nhiều — nhưng tình yêu đó đi kèm với lo lắng liên tục. Không phải vì bạn quá nhạy cảm. Mà vì hệ thần kinh của bạn đã học: gần gũi là không chắc chắn.",
    readTime: "8 phút",
    color: "#E8A87C",
  },
  {
    slug: "/kien-thuc/bai-viet/gan-bo-ne-tranh-khi-gan-gui-cam-thay-nguy-hiem",
    tag: "Gắn bó",
    title: "Người gắn bó né tránh: Khi sự gần gũi cảm thấy nguy hiểm",
    excerpt: "Bạn muốn có mối quan hệ tốt — nhưng khi ai đó thật sự gần, bạn cảm thấy ngạt thở. Không phải vì bạn lạnh lùng. Mà vì não bộ của bạn đã học: gần gũi đồng nghĩa mất tự do.",
    readTime: "8 phút",
    color: "#E8A87C",
  },
  {
    slug: "/kien-thuc/bai-viet/type-4-hay-type-2-cach-phan-biet",
    tag: "Phân biệt mô thức",
    title: "Type 4 hay Type 2? Khi hai mô thức trông giống nhau nhưng vận hành hoàn toàn khác",
    excerpt: "Cả hai đều nhạy cảm, đều quan tâm người khác, đều sợ bị từ chối. Nhưng cơ chế hoàn toàn khác — và nhầm lẫn giữa chúng sẽ dẫn đến con đường chuyển hóa sai.",
    readTime: "7 phút",
    color: "#9B7FD4",
  },
  {
    slug: "/kien-thuc/bai-viet/huong-noi-hay-ne-tranh-su-khac-biet",
    tag: "Phân biệt mô thức",
    title: "Hướng nội hay né tránh? Ranh giới mà nhiều người nhầm lẫn",
    excerpt: "Thích ở một mình, ngại đám đông, cần thời gian để nạp năng lượng — đây là hướng nội hay né tránh xã hội? Câu trả lời quyết định bạn cần gì để thật sự phát triển.",
    readTime: "6 phút",
    color: "#9B7FD4",
  },
  {
    slug: "/kien-thuc/bai-viet/khi-ban-thay-minh-trong-nhieu-mo-thuc",
    tag: "Phân biệt mô thức",
    title: "Khi bạn thấy mình trong nhiều mô thức: Đây là điều đang xảy ra",
    excerpt: "Đọc về 9 mô thức và thấy mình trong 3-4 cái? Điều đó không có nghĩa là bạn không có type. Nó có nghĩa là bạn đang nhìn thấy những lớp khác nhau của cùng một mô thức cốt lõi.",
    readTime: "7 phút",
    color: "#9B7FD4",
  },
,
  // ─── 7 BÀI VIRAL INSIGHTS ──────────────────────────────────────────────────
  {
    slug: "/kien-thuc/bai-viet/biet-type-van-khong-thay-doi-duoc",
    tag: "Mô thức",
    title: "Tại sao biết mô thức của mình vẫn không giúp bạn thay đổi",
    excerpt: "Biết mình là Type 4, Type 2, hay bất kỳ type nào — cảm giác đó rất hay. Nhưng sau vài tuần, bạn vẫn phản ứng theo cách cũ. Có một khoảng cách rất lớn giữa hiểu và thay đổi mà ít ai nói đến.",
    readTime: "7 phút",
    color: "#7C6FF7",
  },
  {
    slug: "/kien-thuc/bai-viet/dopamine-va-nhung-nguoi-gay-nghien",
    tag: "Khoa học thần kinh",
    title: "Dopamine và những mối quan hệ gây nghiện: Khoa học đằng sau cảm giác không thể buông",
    excerpt: "Tại sao người hot-and-cold lại khó quên hơn người tốt bụng nhất quán? Tại sao bạn biết mối quan hệ độc hại nhưng vẫn quay lại? Đây không phải yếu đuối — đây là neurochemistry.",
    readTime: "8 phút",
    color: "#18B5B0",
  },
  {
    slug: "/kien-thuc/bai-viet/tai-sao-ban-khong-chi-bi-thu-hut-ma-con-tai-tao",
    tag: "Quan hệ",
    title: "Bạn không chỉ bị thu hút về cùng một kiểu người — bạn đang tái tạo họ",
    excerpt: "Mọi người hỏi: Tại sao mình cứ gặp cùng một kiểu người? Câu hỏi đúng hơn là: Tại sao mình vô thức chọn, diễn giải, và tạo ra điều kiện để những gì không lành mạnh lặp lại?",
    readTime: "9 phút",
    color: "#E8A87C",
  },
  {
    slug: "/kien-thuc/bai-viet/bong-toi-noi-tam-dang-dieu-khien-ban",
    tag: "Tự nhận thức",
    title: "Bóng tối nội tâm: Phần bạn từ chối đang điều khiển cuộc đời bạn",
    excerpt: "Carl Jung gọi nó là the Shadow — tất cả những phần của bạn mà bạn đã học cách giấu đi. Và chính những phần đó đang âm thầm quyết định nhiều lựa chọn quan trọng nhất của bạn.",
    readTime: "8 phút",
    color: "#7BAE7F",
  },
  {
    slug: "/kien-thuc/bai-viet/tu-pha-hoai-va-khoa-hoc-dang-sau",
    tag: "Hành vi",
    title: "Tự phá hoại: Khi phần bạn ghét nhất trong mình lại đang cố bảo vệ bạn",
    excerpt: "Bạn muốn thành công — nhưng trì hoãn đúng lúc quan trọng. Bạn muốn mối quan hệ tốt — nhưng làm hỏng chính xác khi mọi thứ bắt đầu đẹp. Đây là hệ thống bảo vệ cũ đang chạy sai thời điểm.",
    readTime: "8 phút",
    color: "#6B678F",
  },
  {
    slug: "/kien-thuc/bai-viet/gan-bo-hon-loan-khi-yeu-la-chay-tron",
    tag: "Gắn bó",
    title: "Gắn bó hỗn loạn: Khi bạn vừa chạy đến vừa chạy trốn trong cùng một mối quan hệ",
    excerpt: "Bạn khao khát sự gần gũi — nhưng khi có được nó, bạn hoảng sợ. Bạn đẩy người ta đi — rồi sụp đổ khi họ rời. Đây là kiểu gắn bó khó nhận ra nhất và cũng đau đớn nhất.",
    readTime: "9 phút",
    color: "#E8A87C",
  },
  {
    slug: "/kien-thuc/bai-viet/enneagram-va-shadow-khi-diem-manh-la-diem-mu",
    tag: "Phân biệt mô thức",
    title: "Khi điểm mạnh của bạn trở thành điểm mù: Mặt tối trong mỗi mô thức",
    excerpt: "Mỗi mô thức có một điểm mạnh nổi bật — và một mặt tối tương ứng mà chính mô thức đó khó nhìn thấy nhất. Hiểu điều này không phải để tự trách — mà để không bị cái mạnh của mình làm hại chính mình.",
    readTime: "8 phút",
    color: "#9B7FD4",
  },
];

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
