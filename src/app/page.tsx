import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AIMIND | Hiểu mình hơn, bắt đầu từ điều bạn đang trải qua",
  description:
    "Khám phá những hướng dẫn dễ hiểu để nhìn lại tình huống đang khiến bạn bận tâm, thử một bước phù hợp và chọn cách tìm thêm hỗ trợ.",
  openGraph: {
    title: "AIMIND | Hiểu mình hơn, bắt đầu từ điều bạn đang trải qua",
    description:
      "Khám phá những hướng dẫn dễ hiểu để nhìn lại tình huống đang khiến bạn bận tâm, thử một bước phù hợp và chọn cách tìm thêm hỗ trợ.",
  },
};

const colors = {
  ink: "#1C1A3E",
  muted: "#6B678F",
  purple: "#7C6FF7",
  purpleDark: "#5B4FD4",
  teal: "#18B5B0",
  cream: "#F8F4EE",
  border: "#E8E3F0",
};

const sectionTitleStyle = {
  color: colors.ink,
  fontFamily: "'Be Vietnam Pro', sans-serif",
  fontSize: "clamp(1.65rem, 4vw, 2.4rem)",
  fontWeight: 800,
  lineHeight: 1.3,
  margin: 0,
};

const bodyStyle = {
  color: colors.muted,
  fontSize: "15px",
  lineHeight: 1.8,
};

const textLinkStyle = {
  alignItems: "center",
  color: colors.purpleDark,
  display: "inline-flex",
  fontSize: "14px",
  fontWeight: 700,
  minHeight: "44px",
};

export default function HomePage() {
  return (
    <main className="home-page" style={{ flex: 1 }}>
      <style>{`
        .home-page a:focus-visible,
        .home-page summary:focus-visible {
          outline: 3px solid #18B5B0;
          outline-offset: 4px;
        }
        .home-page summary::-webkit-details-marker { display: none; }
        .home-page details[open] .guide-indicator { transform: rotate(45deg); }
        .home-page .guide-indicator { transition: transform 160ms ease; }
        @media (prefers-reduced-motion: reduce) {
          .home-page *, .home-page *::before, .home-page *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      <HeroSection />
      <HowToSection />
      <StartingPointsSection />
      <InnerMapSection />
      <NextStepsSection />
      <SupportSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #1C1A3E 0%, #2D2A5E 58%, #243B55 100%)",
        padding: "clamp(5rem, 10vw, 8rem) 0",
      }}
    >
      <div className="container-main" style={{ maxWidth: "880px", textAlign: "center" }}>
        <p style={{ color: colors.teal, fontSize: "13px", fontWeight: 700, letterSpacing: "0.12em", marginBottom: "1rem", textTransform: "uppercase" }}>
          Một điểm bắt đầu để tự quan sát
        </p>
        <h1 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(2.25rem, 7vw, 4.5rem)", fontWeight: 800, lineHeight: 1.12, margin: "0 auto 1.5rem", maxWidth: "850px" }}>
          Hiểu mình hơn, bắt đầu từ điều bạn đang trải qua.
        </h1>
        <p style={{ color: "#D8D5EA", fontSize: "clamp(1rem, 2.5vw, 1.16rem)", lineHeight: 1.8, margin: "0 auto 2rem", maxWidth: "720px" }}>
          Có lúc bạn nhận thêm việc dù đã mệt, nghĩ mãi về một chuyện, hoặc không biết nên bắt đầu từ đâu. AIMIND giúp bạn nhìn lại một tình huống cụ thể, xem xét cách mình phản ứng và thử một bước phù hợp với hoàn cảnh.
        </p>
        <div style={{ alignItems: "center", display: "flex", flexWrap: "wrap", gap: "0.9rem", justifyContent: "center" }}>
          <a href="#bat-dau" style={{ background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)", borderRadius: "999px", boxShadow: "0 8px 28px rgba(124,111,247,0.32)", color: "white", display: "inline-flex", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "16px", fontWeight: 700, justifyContent: "center", minHeight: "48px", padding: "14px 28px", textDecoration: "none" }}>
            Tìm bước bắt đầu của tôi
          </a>
          <a href="#ban-do" style={{ border: "1px solid rgba(255,255,255,0.42)", borderRadius: "999px", color: "white", display: "inline-flex", fontSize: "15px", fontWeight: 650, justifyContent: "center", minHeight: "48px", padding: "14px 24px", textDecoration: "none" }}>
            Tìm hiểu Bản Đồ Nội Tâm
          </a>
        </div>
        <p style={{ color: "#B8B3D4", fontSize: "13px", lineHeight: 1.7, margin: "1.25rem auto 0" }}>
          Bạn có thể bắt đầu bằng phần hướng dẫn bên dưới, không cần làm bài tự khám phá trước.
        </p>
        <a href="#ho-tro" style={{ alignItems: "center", color: "#B8E8E5", display: "inline-flex", fontSize: "14px", marginTop: "0.85rem", minHeight: "44px" }}>
          Tìm hỗ trợ
        </a>
      </div>
    </section>
  );
}

function HowToSection() {
  const steps = [
    { title: "Chọn một tình huống", text: "Chọn điều gần với bạn lúc này. Bạn không cần biết tên của vấn đề." },
    { title: "Thử một bước nhỏ", text: "Đọc hướng dẫn, rồi chọn điều phù hợp và an toàn để thử. Bạn có thể bỏ qua bất kỳ gợi ý nào." },
    { title: "Nhìn lại điều đã xảy ra", text: "Điều gì hữu ích? Điều gì chưa phù hợp? Bạn có thể điều chỉnh, đổi hướng hoặc tìm thêm hỗ trợ." },
  ];

  return (
    <section id="cach-dung" style={{ backgroundColor: "white", padding: "5rem 0", scrollMarginTop: "88px" }}>
      <div className="container-main" style={{ maxWidth: "980px" }}>
        <div style={{ margin: "0 auto 2.5rem", maxWidth: "680px", textAlign: "center" }}>
          <h2 style={sectionTitleStyle}>Bạn có thể bắt đầu bằng ba bước</h2>
        </div>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))" }}>
          {steps.map((step, index) => (
            <article key={step.title} style={{ backgroundColor: colors.cream, border: `1px solid ${colors.border}`, borderRadius: "16px", padding: "1.6rem" }}>
              <span aria-hidden="true" style={{ alignItems: "center", background: index === 1 ? colors.teal : colors.purple, borderRadius: "50%", color: "white", display: "flex", fontWeight: 800, height: "38px", justifyContent: "center", marginBottom: "1rem", width: "38px" }}>
                {index + 1}
              </span>
              <h3 style={{ color: colors.ink, fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "17px", margin: "0 0 0.55rem" }}>{step.title}</h3>
              <p style={{ ...bodyStyle, margin: 0 }}>{step.text}</p>
            </article>
          ))}
        </div>
        <p style={{ ...bodyStyle, margin: "1.8rem auto 0", textAlign: "center" }}>Bạn không cần hiểu hết bản thân trong một lần đọc.</p>
      </div>
    </section>
  );
}

function StartingPointsSection() {
  return (
    <section id="bat-dau" style={{ backgroundColor: colors.cream, padding: "5rem 0", scrollMarginTop: "88px" }}>
      <div className="container-main" style={{ maxWidth: "900px" }}>
        <div style={{ margin: "0 auto 2.5rem", maxWidth: "680px", textAlign: "center" }}>
          <h2 style={sectionTitleStyle}>Điều nào gần với bạn hôm nay?</h2>
          <p style={{ ...bodyStyle, margin: "0.85rem auto 0" }}>
            Chọn một hướng dẫn để xem. Đây là những điểm bắt đầu, không phải bài đánh giá hay phân loại con người.
          </p>
        </div>
        <div style={{ display: "grid", gap: "1rem" }}>
          <GuideDetails id="huong-dan-1" title="Tôi khó từ chối dù đã quá tải" description="Nhìn lại một tình huống và cân nhắc cách phản hồi.">
            <GuideStep title="1. Chọn một tình huống gần đây">
              Ai đã nhờ bạn điều gì? Khi đó bạn đang có những trách nhiệm nào? Điều gì khiến bạn khó trả lời khác đi?
            </GuideStep>
            <GuideStep title="2. Cân nhắc một câu phù hợp">
              <p style={{ margin: "0 0 0.8rem" }}>Với đồng nghiệp: “Hiện mình đang kín việc nên chưa nhận thêm được. Mình có thể xem lại vào thứ Sáu.”</p>
              <p style={{ margin: 0 }}>Khi cần trao đổi ưu tiên với cấp trên: “Nếu việc này cần làm trước, anh/chị giúp em xác định việc nào đang làm có thể lùi lại?”</p>
            </GuideStep>
            <p style={{ ...bodyStyle, margin: "0 0 1.25rem" }}>
              Chỉ dùng lời hẹn khi bạn thực sự có thể thực hiện. Đây là ví dụ để điều chỉnh, không phải câu nên dùng trong mọi mối quan hệ. Hãy cân nhắc quyền hạn, hậu quả thực tế và mức độ an toàn của bạn.
            </p>
            <GuideStep title="3. Nhìn lại, không tự chấm điểm">
              Bạn đã thử điều gì? Người kia thực sự phản ứng ra sao? Điều gì khác với điều bạn lo trước đó? Nếu chưa thử, hãy ghi nhận điều gì đang cản trở, thay vì tự trách.
            </GuideStep>
            <p style={{ ...bodyStyle, margin: "0 0 1.2rem" }}>Bạn có thể tự ghi trên giấy; không cần nhập chuyện riêng vào website để dùng hướng dẫn này.</p>
            <Link href="/kien-thuc/bai-viet/ranh-gioi-khong-phai-lanh-lung" style={textLinkStyle}>Đọc thêm về cách đặt giới hạn →</Link>
          </GuideDetails>

          <GuideDetails id="huong-dan-2" title="Tôi đang quá tải và khó nghỉ ngơi" description="Nhìn cả khối lượng việc lẫn điều bạn có thể thay đổi.">
            <GuideStep title="1. Ghi lại ba điều đang chiếm nhiều sức nhất">
              Đó có thể là công việc, việc chăm sóc người khác, một vấn đề tài chính hoặc điều khác. Không cần giải thích tất cả bằng tính cách hay niềm tin của bạn.
            </GuideStep>
            <GuideStep title="2. Chọn một việc để xem lại">
              Việc nào có thể trao đổi lại thời hạn, làm ở mức vừa đủ, hoặc nhờ hỗ trợ? Nếu chưa thể thay đổi, ghi rõ ràng buộc đó. Không tự ý bỏ nghĩa vụ quan trọng hoặc việc liên quan an toàn.
            </GuideStep>
            <GuideStep title="3. Chọn một cuộc trao đổi cụ thể">
              Bạn cần trao đổi với ai, về việc gì? Một câu có thể cân nhắc: “Hiện tôi đang có A và B. Chúng ta cùng xác định việc nào cần ưu tiên trước được không?”
            </GuideStep>
            <p style={{ ...bodyStyle, margin: "0 0 1.2rem" }}>
              Không phải mọi quá tải đều giải quyết được bằng nỗ lực cá nhân. Khi khó khăn kéo dài hoặc ảnh hưởng đáng kể đến sinh hoạt, hãy cân nhắc tìm hỗ trợ phù hợp.
            </p>
            <a href="#ho-tro" style={textLinkStyle}>Xem khi nào nên tìm hỗ trợ →</a>
          </GuideDetails>

          <GuideDetails id="huong-dan-3" title="Tôi chưa biết mình nên bắt đầu từ đâu" description="Bắt đầu từ một sự việc, chưa cần kết luận về bản thân.">
            <GuideStep title="1. Chọn một chuyện gần đây khiến bạn bận tâm">
              Viết một hoặc hai câu về điều đã xảy ra, không cần kể toàn bộ câu chuyện cuộc đời.
            </GuideStep>
            <GuideStep title="2. Tách điều bạn biết và điều bạn đang đoán">
              Ví dụ: “Tin nhắn chưa được trả lời” là điều bạn quan sát. “Người kia không còn quan tâm” là một cách diễn giải. Có thông tin nào bạn còn thiếu?
            </GuideStep>
            <GuideStep title="3. Chọn một điều cần làm rõ">
              Bạn cần hỏi thêm thông tin, xem lại một trách nhiệm, hay tìm người có thể hỗ trợ? Chọn một bước nhỏ phù hợp thay vì cố giải thích toàn bộ con người mình.
            </GuideStep>
            <p style={{ ...bodyStyle, margin: "0 0 1.2rem" }}>
              Bạn có thể dừng ở đây hoặc tìm hiểu thêm về cách tự quan sát. Không bắt buộc làm bài khám phá để tiếp tục đọc.
            </p>
            <a href="#ban-do" style={textLinkStyle}>Tìm hiểu cách tự quan sát với Bản Đồ Nội Tâm →</a>
          </GuideDetails>
        </div>
      </div>
    </section>
  );
}

function GuideDetails({ id, title, description, children }: { id: string; title: string; description: string; children: ReactNode }) {
  return (
    <details
      id={id}
      suppressHydrationWarning
      style={{ backgroundColor: "white", border: `1px solid ${colors.border}`, borderRadius: "16px", overflow: "hidden" }}
    >
      <summary style={{ alignItems: "center", cursor: "pointer", display: "flex", gap: "1rem", justifyContent: "space-between", listStyle: "none", minHeight: "76px", padding: "1.25rem clamp(1rem, 4vw, 1.6rem)" }}>
        <span>
          <strong style={{ color: colors.ink, display: "block", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "16px", lineHeight: 1.45 }}>{title}</strong>
          <span style={{ color: colors.muted, display: "block", fontSize: "13px", lineHeight: 1.6, marginTop: "0.3rem" }}>{description}</span>
        </span>
        <span aria-hidden="true" className="guide-indicator" style={{ color: colors.purple, flexShrink: 0, fontSize: "26px", fontWeight: 400, lineHeight: 1 }}>+</span>
      </summary>
      <div style={{ borderTop: `1px solid ${colors.border}`, padding: "1.5rem clamp(1rem, 4vw, 1.7rem) 1.7rem" }}>{children}</div>
    </details>
  );
}

function GuideStep({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <h3 style={{ color: colors.ink, fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "15px", margin: "0 0 0.45rem" }}>{title}</h3>
      <div style={{ ...bodyStyle, margin: 0 }}>{children}</div>
    </div>
  );
}

function InnerMapSection() {
  return (
    <section id="ban-do" style={{ background: "linear-gradient(150deg, #1C1A3E 0%, #2D2A5E 100%)", padding: "5rem 0", scrollMarginTop: "88px" }}>
      <div className="container-main" style={{ maxWidth: "780px", textAlign: "center" }}>
        <p style={{ color: colors.teal, fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", margin: "0 0 0.8rem", textTransform: "uppercase" }}>Một lựa chọn để khám phá thêm</p>
        <h2 style={{ ...sectionTitleStyle, color: "white" }}>Muốn tìm hiểu thêm về những phản ứng quen thuộc?</h2>
        <p style={{ color: "#D3D0E5", fontSize: "15px", lineHeight: 1.85, margin: "1rem auto 0", maxWidth: "680px" }}>
          Bạn có thể tìm hiểu Bản Đồ Nội Tâm như một công cụ hỗ trợ tự quan sát. Khi đọc một mô tả, hãy tự hỏi: “Phần nào phù hợp với tôi? Trong hoàn cảnh nào nó không đúng?”
        </p>
        <p style={{ color: "#B8B3D4", fontSize: "14px", lineHeight: 1.8, margin: "0.8rem auto 1.8rem", maxWidth: "650px" }}>
          Công cụ tự khám phá không thay thế đánh giá chuyên môn và không định nghĩa toàn bộ con người bạn.
        </p>
        <Link href="/kham-pha/ban-do-noi-tam" style={{ background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)", borderRadius: "999px", color: "white", display: "inline-flex", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "15px", fontWeight: 700, justifyContent: "center", minHeight: "48px", padding: "14px 26px", textDecoration: "none" }}>
          Xem cách Bản Đồ Nội Tâm hoạt động
        </Link>
      </div>
    </section>
  );
}

function NextStepsSection() {
  const cards = [
    { title: "Đọc thêm theo chủ đề", text: "Tìm các bài viết theo tình huống và chủ đề bạn đang quan tâm.", href: "/kien-thuc/bai-viet", link: "Đi đến thư viện bài viết" },
    { title: "Tìm hiểu hình thức đồng hành", text: "Xem thông tin về hình thức đồng hành hiện có và cân nhắc khi bạn thấy phù hợp.", href: "/dong-hanh", link: "Xem thông tin đồng hành" },
  ];

  return (
    <section style={{ backgroundColor: "white", padding: "5rem 0" }}>
      <div className="container-main" style={{ maxWidth: "900px" }}>
        <div style={{ margin: "0 auto 2.5rem", maxWidth: "680px", textAlign: "center" }}>
          <h2 style={sectionTitleStyle}>Bạn có thể đi tiếp theo cách phù hợp với mình</h2>
          <p style={{ ...bodyStyle, margin: "0.85rem auto 0" }}>
            Bạn có thể đọc thêm một chủ đề, tìm hiểu công cụ tự quan sát hoặc xem thông tin về hình thức đồng hành. Không cần quyết định mọi thứ ngay hôm nay.
          </p>
        </div>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))" }}>
          {cards.map((card, index) => (
            <article key={card.href} style={{ backgroundColor: index === 0 ? colors.cream : "#F3F6F7", border: `1px solid ${colors.border}`, borderRadius: "16px", padding: "1.7rem" }}>
              <h3 style={{ color: colors.ink, fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "18px", margin: "0 0 0.55rem" }}>{card.title}</h3>
              <p style={{ ...bodyStyle, margin: "0 0 1rem" }}>{card.text}</p>
              <Link href={card.href} style={textLinkStyle}>{card.link} →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportSection() {
  const faqs = [
    { question: "Tôi phải làm bài khám phá trước không?", answer: "Không. Bạn có thể dùng các hướng dẫn trên trang này trước. Bài khám phá là một lựa chọn, không phải điều kiện để bắt đầu." },
    { question: "Nội dung có cho biết tôi mắc vấn đề tâm lý nào không?", answer: "Không. Nhận ra mình trong một mô tả không đủ để kết luận về một rối loạn hay một kiểu người cố định. Các hướng dẫn này không thay thế việc đánh giá hoặc điều trị của người có chuyên môn." },
    { question: "Khi nào tôi nên tìm hỗ trợ chuyên môn?", answer: "Khi khó khăn kéo dài, nặng lên hoặc ảnh hưởng đáng kể đến sinh hoạt, công việc hay các mối quan hệ, hãy cân nhắc liên hệ người có chuyên môn phù hợp. Không cần đợi đến khi mọi thứ trở nên nghiêm trọng mới tìm hỗ trợ." },
  ];

  return (
    <section id="ho-tro" style={{ backgroundColor: colors.cream, padding: "5rem 0", scrollMarginTop: "88px" }}>
      <div className="container-main" style={{ maxWidth: "850px" }}>
        <div style={{ margin: "0 auto 2.2rem", maxWidth: "680px", textAlign: "center" }}>
          <h2 style={sectionTitleStyle}>Giới hạn của nội dung và cách tìm hỗ trợ</h2>
        </div>
        <div style={{ display: "grid", gap: "1rem" }}>
          {faqs.map((faq) => (
            <article key={faq.question} style={{ backgroundColor: "white", border: `1px solid ${colors.border}`, borderRadius: "14px", padding: "1.4rem" }}>
              <h3 style={{ color: colors.ink, fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "16px", margin: "0 0 0.45rem" }}>{faq.question}</h3>
              <p style={{ ...bodyStyle, margin: 0 }}>{faq.answer}</p>
            </article>
          ))}
        </div>
        <aside aria-label="Hỗ trợ khẩn cấp" style={{ backgroundColor: "#FFF4F1", border: "1px solid #F0C8BF", borderRadius: "14px", marginTop: "1.25rem", padding: "1.4rem" }}>
          <p style={{ color: "#713F37", fontSize: "14px", lineHeight: 1.8, margin: 0 }}>
            <strong>Trong tình huống khẩn cấp:</strong> Nếu bạn đang gặp nguy hiểm tức thời hoặc có nguy cơ làm hại bản thân, hãy tìm trợ giúp khẩn cấp từ dịch vụ cấp cứu địa phương hoặc cơ sở y tế gần nhất. Không chờ phản hồi từ biểu mẫu website trong tình huống khẩn cấp.
          </p>
        </aside>
        <p style={{ ...bodyStyle, margin: "1.4rem 0 0", textAlign: "center" }}>
          Xem cách AIMIND xử lý thông tin trong{" "}<Link href="/chinh-sach-bao-mat" style={{ color: colors.purpleDark, fontWeight: 700 }}>Chính sách bảo mật</Link>.
        </p>
      </div>
    </section>
  );
}

