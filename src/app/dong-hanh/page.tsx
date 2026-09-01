import Link from "next/link";

const forWho = [
  { icon: "🔄", text: "Bạn lặp đi lặp lại cùng một kiểu vấn đề trong quan hệ hoặc công việc" },
  { icon: "😶", text: "Bạn biết mình cần thay đổi nhưng không biết bắt đầu từ đâu" },
  { icon: "🧩", text: "Bạn hiểu nhiều về tâm lý nhưng vẫn không áp dụng được vào cuộc sống thực" },
  { icon: "💭", text: "Bạn có cảm giác đang sống theo kỳ vọng của người khác hơn là của chính mình" },
  { icon: "🌪️", text: "Bạn đang trải qua giai đoạn chuyển tiếp lớn và cần người đồng hành" },
];

const process = [
  {
    step: "1",
    title: "Buổi khám phá miễn phí",
    desc: "30 phút video call để Hanna hiểu tình huống của bạn và xem liệu coaching có phù hợp không. Không cam kết, không áp lực.",
    duration: "30 phút · Miễn phí",
  },
  {
    step: "2",
    title: "Đánh giá và lên lộ trình",
    desc: "Dựa trên bài test Bản Đồ Nội Tâm và buổi khám phá, Hanna xây dựng lộ trình coaching cá nhân hóa cho bạn.",
    duration: "Sau buổi khám phá",
  },
  {
    step: "3",
    title: "Coaching 1-1 chuyên sâu",
    desc: "Các buổi coaching 60-90 phút, tần suất 1-2 lần/tháng. Kết hợp giữa phân tích sâu, bài tập thực hành và theo dõi tiến trình.",
    duration: "60–90 phút / buổi",
  },
  {
    step: "4",
    title: "Hỗ trợ giữa các buổi",
    desc: "Nhắn tin trực tiếp với Hanna qua Zalo khi có câu hỏi hoặc cần hỗ trợ giữa các buổi coaching.",
    duration: "Liên tục qua Zalo",
  },
];

const faqs = [
  {
    q: "Coaching 1-1 khác gì khóa học?",
    a: "Khóa học là kiến thức và framework. Coaching 1-1 là áp dụng trực tiếp vào tình huống cụ thể của bạn — với sự đồng hành của Hanna trong từng bước.",
  },
  {
    q: "Cần bao nhiêu buổi?",
    a: "Mỗi người khác nhau. Phần lớn học viên thấy sự thay đổi rõ rệt sau 3–6 tháng. Hanna sẽ tư vấn sau buổi khám phá miễn phí.",
  },
  {
    q: "Có cần làm bài test trước không?",
    a: "Không bắt buộc nhưng được khuyến khích. Bài test giúp Hanna hiểu bạn nhanh hơn và buổi coaching hiệu quả hơn.",
  },
  {
    q: "Hình thức coaching là gì?",
    a: "Tất cả coaching diễn ra online qua video call. Hanna làm việc với học viên toàn quốc và quốc tế.",
  },
];

export default function DongHanhPage() {
  return (
    <>
      <main style={{ flex: 1 }}>
        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)",
            padding: "7rem 0 5rem",
          }}
        >
          <div className="container-main" style={{ maxWidth: "760px" }}>
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
                marginBottom: "2rem",
              }}
            >
              Coaching 1-1
            </div>
            <h1
              style={{
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              Có người hiểu bạn thật sự —
              <br />
              <span style={{ color: "#7C6FF7" }}>và đồng hành cùng bạn thay đổi</span>
            </h1>
            <p style={{ color: "#C4C0E0", fontSize: "17px", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "600px" }}>
              Coaching 1-1 với Hanna Dang là hành trình cá nhân hóa hoàn toàn —
              không công thức chung, không lời khuyên cào bằng. Chỉ là bạn và
              những mô thức thật sự đang điều khiển cuộc đời bạn.
            </p>
            <Link
              href="https://zalo.me/0848270819"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
                color: "white",
                padding: "16px 40px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                boxShadow: "0 8px 24px rgba(124,111,247,0.4)",
              }}
            >
              Nhắn tin Hanna qua Zalo
            </Link>
          </div>
        </section>

        {/* For who */}
        <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
          <div className="container-main" style={{ maxWidth: "760px" }}>
            <h2
              style={{
                color: "#1C1A3E",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                marginBottom: "0.75rem",
              }}
            >
              Coaching này dành cho bạn nếu...
            </h2>
            <p style={{ color: "#6B678F", fontSize: "15px", marginBottom: "2.5rem" }}>
              Không phải ai cũng cần coaching. Nhưng nếu bạn đang ở một trong những tình huống này:
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1rem" }}>
              {forWho.map((item) => (
                <div
                  key={item.text}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    backgroundColor: "white",
                    borderRadius: "14px",
                    padding: "1.25rem 1.5rem",
                    border: "1px solid #E8E3F0",
                  }}
                >
                  <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{item.icon}</span>
                  <p style={{ color: "#4A4570", fontSize: "15px", lineHeight: 1.65 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
          <div className="container-main" style={{ maxWidth: "760px" }}>
            <h2
              style={{
                color: "#1C1A3E",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                marginBottom: "3rem",
                textAlign: "center",
              }}
            >
              Quy trình làm việc cùng Hanna
            </h2>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.5rem" }}>
              {process.map((p) => (
                <div
                  key={p.step}
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "flex-start",
                    backgroundColor: "#F8F4EE",
                    borderRadius: "16px",
                    padding: "1.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      fontWeight: 800,
                      fontSize: "16px",
                      flexShrink: 0,
                    }}
                  >
                    {p.step}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" as const, gap: "0.5rem", marginBottom: "0.5rem" }}>
                      <h3
                        style={{
                          color: "#1C1A3E",
                          fontFamily: "'Be Vietnam Pro', sans-serif",
                          fontWeight: 700,
                          fontSize: "16px",
                        }}
                      >
                        {p.title}
                      </h3>
                      <span
                        style={{
                          background: "rgba(124,111,247,0.1)",
                          color: "#7C6FF7",
                          padding: "3px 12px",
                          borderRadius: "999px",
                          fontSize: "12px",
                          fontWeight: 600,
                          whiteSpace: "nowrap" as const,
                        }}
                      >
                        {p.duration}
                      </span>
                    </div>
                    <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.75 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
          <div className="container-main" style={{ maxWidth: "680px" }}>
            <h2
              style={{
                color: "#1C1A3E",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                marginBottom: "2.5rem",
                textAlign: "center",
              }}
            >
              Câu hỏi thường gặp
            </h2>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1rem" }}>
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "14px",
                    padding: "1.5rem",
                    border: "1px solid #E8E3F0",
                  }}
                >
                  <h3
                    style={{
                      color: "#1C1A3E",
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      fontWeight: 700,
                      fontSize: "15px",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {faq.q}
                  </h3>
                  <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.75 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            padding: "5rem 0",
            background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)",
            textAlign: "center",
          }}
        >
          <div className="container-main" style={{ maxWidth: "560px" }}>
            <h2
              style={{
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                marginBottom: "1rem",
              }}
            >
              Bắt đầu với buổi khám phá miễn phí
            </h2>
            <p style={{ color: "#C4C0E0", marginBottom: "2rem", fontSize: "15px", lineHeight: 1.75 }}>
              30 phút. Không cam kết. Để Hanna hiểu tình huống của bạn
              và bạn cảm nhận xem coaching có phù hợp không.
            </p>
            <Link
              href="https://zalo.me/0848270819"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
                color: "white",
                padding: "16px 40px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                boxShadow: "0 8px 24px rgba(124,111,247,0.4)",
              }}
            >
              Nhắn tin Hanna qua Zalo
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
