import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "THÂN — Hiểu cơ thể để hiểu chính mình | AIMIND",
  description:
    "Khám phá hệ thần kinh, stress, giấc ngủ, vận động và các thực hành chăm sóc cơ thể khoa học. Hiểu THÂN là bước đầu tiên để hiểu mình.",
  keywords: ["hệ thần kinh", "stress", "giấc ngủ", "vận động", "chăm sóc cơ thể", "mobility", "AIMIND"],
};

const HIEU_CO_THE = [
  { icon: "🧠", title: "Hệ thần kinh", desc: "Hiểu cách não và dây thần kinh kiểm soát mọi phản ứng của bạn.", href: "/than/hieu-co-the/he-than-kinh" },
  { icon: "⚡", title: "Stress", desc: "Cơ chế stress trong cơ thể — tại sao và làm sao thoát khỏi vòng lặp.", href: "/than/hieu-co-the/stress" },
  { icon: "🌙", title: "Giấc ngủ", desc: "Khoa học về giấc ngủ và tại sao đây là nền tảng của mọi thứ.", href: "/than/hieu-co-the/giac-ngu" },
  { icon: "🏃", title: "Vận động", desc: "Cơ thể được thiết kế để chuyển động — vận động thay đổi não bộ.", href: "/than/hieu-co-the/van-dong" },
  { icon: "💪", title: "Căng cơ", desc: "Hiểu tại sao cơ bắp căng cứng và cách giải phóng.", href: "/than/hieu-co-the/cang-co" },
  { icon: "🌬️", title: "Hô hấp", desc: "Hơi thở là công cụ điều tiết thần kinh mạnh nhất bạn có.", href: "/than/hieu-co-the/ho-hap" },
];

const THUC_HANH = [
  { icon: "🤸", title: "Mobility", desc: "Cải thiện tầm vận động khớp và cột sống", href: "/than/thuc-hanh#mobility" },
  { icon: "🧘", title: "Stretching", desc: "Kéo giãn cơ đúng cách — không chỉ để linh hoạt hơn", href: "/than/thuc-hanh#stretching" },
  { icon: "💆", title: "Tự massage", desc: "Kỹ thuật tự massage giải phóng căng thẳng", href: "/than/thuc-hanh#massage" },
  { icon: "😮‍💨", title: "Thư giãn", desc: "Các bài tập hô hấp và thư giãn thần kinh", href: "/than/thuc-hanh#thu-gian" },
  { icon: "🏠", title: "Tập tại nhà", desc: "Bài tập không cần dụng cụ, làm được ngay", href: "/than/thuc-hanh#tai-nha" },
];

export default function ThanPage() {
  return (
    <main style={{ flex: 1 }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #1C1A3E 0%, #2D2A5E 50%, #1a3a2e 100%)",
          padding: "6rem 0 5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(24,181,176,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(124,111,247,0.1) 0%, transparent 50%)",
          }}
        />
        <div className="container-main" style={{ position: "relative", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "rgba(24,181,176,0.15)", border: "1px solid rgba(24,181,176,0.3)",
              borderRadius: "999px", padding: "6px 16px", marginBottom: "2rem",
            }}
          >
            <span style={{ color: "#18B5B0", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Trụ cột 01 — THÂN
            </span>
          </div>
          <h1
            style={{
              color: "white", fontSize: "clamp(2.2rem, 6vw, 3.8rem)", fontWeight: 800,
              lineHeight: 1.15, fontFamily: "'Be Vietnam Pro', sans-serif",
              letterSpacing: "-0.03em", maxWidth: "760px", margin: "0 auto 1.5rem",
            }}
          >
            Cơ thể bạn đang nói gì<br />mà bạn chưa nghe?
          </h1>
          <p
            style={{
              color: "#C4C0E0", fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              lineHeight: 1.75, maxWidth: "560px", margin: "0 auto 2.5rem",
            }}
          >
            Căng thẳng, mất ngủ hay đau vai gáy có thể liên quan đến nhiều yếu tố. Việc quan sát cơ thể là một điểm khởi đầu để hiểu trạng thái và nhu cầu phục hồi của bạn.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/than/hieu-co-the"
              style={{
                background: "linear-gradient(135deg, #18B5B0 0%, #0D8C88 100%)",
                color: "white", padding: "14px 32px", borderRadius: "999px",
                fontSize: "15px", fontWeight: 700, textDecoration: "none",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                boxShadow: "0 8px 24px rgba(24,181,176,0.3)",
              }}
            >
              Khám phá THÂN →
            </Link>
            <Link
              href="/than/thuc-hanh"
              style={{
                color: "white", padding: "14px 32px", borderRadius: "999px",
                fontSize: "15px", fontWeight: 600, textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              Bắt đầu thực hành
            </Link>
          </div>
        </div>
      </section>

      {/* Ba lộ trình */}
      <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
        <div className="container-main" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#18B5B0", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Ba con đường
            </p>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.3 }}>
              THÂN trong hệ thống AIMIND
            </h2>
            <p style={{ color: "#6B678F", fontSize: "16px", lineHeight: 1.8, maxWidth: "600px", margin: "1rem auto 0" }}>
              Không phải chỉ tập gym hay ăn sạch. THÂN trong AIMIND là một cách nhìn cơ thể từ góc độ thần kinh học và tâm lý — để bạn nhận diện tín hiệu và thử những thay đổi phù hợp hơn.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                num: "01", color: "#18B5B0", title: "Hiểu cơ thể",
                desc: "Hệ thần kinh, stress, giấc ngủ, vận động, hô hấp — khoa học giải thích tại sao cơ thể bạn phản ứng như vậy.",
                href: "/than/hieu-co-the", cta: "Khám phá →",
              },
              {
                num: "02", color: "#7C6FF7", title: "Thực hành",
                desc: "Mobility, stretching, tự massage, bài tập thư giãn — những kỹ thuật có bằng chứng khoa học, làm được ngay tại nhà.",
                href: "/than/thuc-hanh", cta: "Bắt đầu →",
              },
              {
                num: "03", color: "#E85A71", title: "Cửa hàng",
                desc: "Dụng cụ massage, dry brush, thiết bị hỗ trợ phục hồi — được chọn lọc kỹ để hỗ trợ thực hành.",
                href: "/than/cua-hang", cta: "Xem sản phẩm →",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  backgroundColor: "white", borderRadius: "16px", padding: "2rem",
                  border: "1px solid #E8E3F0",
                  borderTop: `3px solid ${item.color}`,
                }}
              >
                <div style={{ fontSize: "3rem", fontWeight: 900, color: item.color, opacity: 0.12, lineHeight: 1, marginBottom: "1rem", fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  {item.num}
                </div>
                <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.75rem" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.7, marginBottom: "1.5rem" }}>{item.desc}</p>
                <Link href={item.href} style={{ color: item.color, fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiểu cơ thể grid */}
      <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#18B5B0", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Hiểu cơ thể
            </p>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.3 }}>
              6 chủ đề khoa học về THÂN
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {HIEU_CO_THE.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="hover-lift-card"
                  style={{
                    backgroundColor: "white", borderRadius: "14px", padding: "1.75rem",
                    border: "1px solid #E8E3F0", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: "2rem", display: "block", marginBottom: "1rem" }}>{item.icon}</span>
                  <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#6B678F", fontSize: "13px", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Thực hành */}
      <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#7C6FF7", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Thực hành
            </p>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800 }}>
              Làm được ngay hôm nay
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {THUC_HANH.map((item) => (
              <Link key={item.title} href={item.href} style={{ textDecoration: "none" }}>
                <div
                  className="hover-purple-panel"
                  style={{
                    border: "1px solid #E8E3F0", borderRadius: "14px", padding: "1.5rem",
                    display: "flex", gap: "1rem", alignItems: "flex-start",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                >
                  <span style={{ fontSize: "1.8rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.4rem" }}>
                      {item.title}
                    </h3>
                    <p style={{ color: "#6B678F", fontSize: "13px", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "5rem 0",
          background: "linear-gradient(135deg, #1a3a2e 0%, #1C1A3E 100%)",
          textAlign: "center",
        }}
      >
        <div className="container-main">
          <h2 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.3 }}>
            Cơ thể và tâm trí là một hệ thống
          </h2>
          <p style={{ color: "#C4C0E0", marginBottom: "2.5rem", fontSize: "16px", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto 2.5rem" }}>
            Khi hiểu THÂN, bạn sẽ thấy rõ hơn vì sao TÂM bạn phản ứng như vậy — và TRÍ giúp bạn hiểu cả hệ thống.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/tam"
              style={{
                background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
                color: "white", padding: "14px 32px", borderRadius: "999px",
                fontSize: "15px", fontWeight: 700, textDecoration: "none",
              }}
            >
              Khám phá TÂM →
            </Link>
            <Link
              href="/kham-pha/ban-do-noi-tam"
              style={{
                color: "white", padding: "14px 32px", borderRadius: "999px",
                fontSize: "15px", fontWeight: 600, textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              Làm Mind Test
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
