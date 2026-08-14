import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "THÃ‚N â€” Hiá»ƒu cÆ¡ thá»ƒ Ä‘á»ƒ hiá»ƒu chÃ­nh mÃ¬nh | AIMIND",
  description:
    "KhÃ¡m phÃ¡ há»‡ tháº§n kinh, stress, giáº¥c ngá»§, váº­n Ä‘á»™ng vÃ  cÃ¡c thá»±c hÃ nh chÄƒm sÃ³c cÆ¡ thá»ƒ khoa há»c. Hiá»ƒu THÃ‚N lÃ  bÆ°á»›c Ä‘áº§u tiÃªn Ä‘á»ƒ hiá»ƒu mÃ¬nh.",
  keywords: ["há»‡ tháº§n kinh", "stress", "giáº¥c ngá»§", "váº­n Ä‘á»™ng", "chÄƒm sÃ³c cÆ¡ thá»ƒ", "mobility", "AIMIND"],
};

const HIEU_CO_THE = [
  { icon: "ðŸ§ ", title: "Há»‡ tháº§n kinh", desc: "Hiá»ƒu cÃ¡ch nÃ£o vÃ  dÃ¢y tháº§n kinh kiá»ƒm soÃ¡t má»i pháº£n á»©ng cá»§a báº¡n.", href: "/than/hieu-co-the/he-than-kinh" },
  { icon: "âš¡", title: "Stress", desc: "CÆ¡ cháº¿ stress trong cÆ¡ thá»ƒ â€” táº¡i sao vÃ  lÃ m sao thoÃ¡t khá»i vÃ²ng láº·p.", href: "/than/hieu-co-the/stress" },
  { icon: "ðŸŒ™", title: "Giáº¥c ngá»§", desc: "Khoa há»c vá» giáº¥c ngá»§ vÃ  táº¡i sao Ä‘Ã¢y lÃ  ná»n táº£ng cá»§a má»i thá»©.", href: "/than/hieu-co-the/giac-ngu" },
  { icon: "ðŸƒ", title: "Váº­n Ä‘á»™ng", desc: "CÆ¡ thá»ƒ Ä‘Æ°á»£c thiáº¿t káº¿ Ä‘á»ƒ chuyá»ƒn Ä‘á»™ng â€” váº­n Ä‘á»™ng thay Ä‘á»•i nÃ£o bá»™.", href: "/than/hieu-co-the/van-dong" },
  { icon: "ðŸ’ª", title: "CÄƒng cÆ¡", desc: "Hiá»ƒu táº¡i sao cÆ¡ báº¯p cÄƒng cá»©ng vÃ  cÃ¡ch giáº£i phÃ³ng.", href: "/than/hieu-co-the/cang-co" },
  { icon: "ðŸŒ¬ï¸", title: "HÃ´ háº¥p", desc: "HÆ¡i thá»Ÿ lÃ  cÃ´ng cá»¥ Ä‘iá»u tiáº¿t tháº§n kinh máº¡nh nháº¥t báº¡n cÃ³.", href: "/than/hieu-co-the/ho-hap" },
];

const THUC_HANH = [
  { icon: "ðŸ¤¸", title: "Mobility", desc: "Cáº£i thiá»‡n táº§m váº­n Ä‘á»™ng khá»›p vÃ  cá»™t sá»‘ng", href: "/than/thuc-hanh#mobility" },
  { icon: "ðŸ§˜", title: "Stretching", desc: "KÃ©o giÃ£n cÆ¡ Ä‘Ãºng cÃ¡ch â€” khÃ´ng chá»‰ Ä‘á»ƒ linh hoáº¡t hÆ¡n", href: "/than/thuc-hanh#stretching" },
  { icon: "ðŸ’†", title: "Tá»± massage", desc: "Ká»¹ thuáº­t tá»± massage giáº£i phÃ³ng cÄƒng tháº³ng", href: "/than/thuc-hanh#massage" },
  { icon: "ðŸ˜®â€ðŸ’¨", title: "ThÆ° giÃ£n", desc: "CÃ¡c bÃ i táº­p hÃ´ háº¥p vÃ  thÆ° giÃ£n tháº§n kinh", href: "/than/thuc-hanh#thu-gian" },
  { icon: "ðŸ ", title: "Táº­p táº¡i nhÃ ", desc: "BÃ i táº­p khÃ´ng cáº§n dá»¥ng cá»¥, lÃ m Ä‘Æ°á»£c ngay", href: "/than/thuc-hanh#tai-nha" },
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
              Trá»¥ cá»™t 01 â€” THÃ‚N
            </span>
          </div>
          <h1
            style={{
              color: "white", fontSize: "clamp(2.2rem, 6vw, 3.8rem)", fontWeight: 800,
              lineHeight: 1.15, fontFamily: "'Be Vietnam Pro', sans-serif",
              letterSpacing: "-0.03em", maxWidth: "760px", margin: "0 auto 1.5rem",
            }}
          >
            CÆ¡ thá»ƒ báº¡n Ä‘ang nÃ³i gÃ¬<br />mÃ  báº¡n chÆ°a nghe?
          </h1>
          <p
            style={{
              color: "#C4C0E0", fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              lineHeight: 1.75, maxWidth: "560px", margin: "0 auto 2.5rem",
            }}
          >
            CÄƒng tháº³ng, máº¥t ngá»§, Ä‘au vai gÃ¡y â€” khÃ´ng pháº£i ngáº«u nhiÃªn. CÆ¡ thá»ƒ Ä‘ang pháº£n Ã¡nh chÃ­nh xÃ¡c tráº¡ng thÃ¡i ná»™i tÃ¢m cá»§a báº¡n.
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
              KhÃ¡m phÃ¡ THÃ‚N â†’
            </Link>
            <Link
              href="/than/thuc-hanh"
              style={{
                color: "white", padding: "14px 32px", borderRadius: "999px",
                fontSize: "15px", fontWeight: 600, textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              Báº¯t Ä‘áº§u thá»±c hÃ nh
            </Link>
          </div>
        </div>
      </section>

      {/* Ba lá»™ trÃ¬nh */}
      <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
        <div className="container-main" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#18B5B0", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Ba con Ä‘Æ°á»ng
            </p>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.3 }}>
              THÃ‚N trong há»‡ thá»‘ng AIMIND
            </h2>
            <p style={{ color: "#6B678F", fontSize: "16px", lineHeight: 1.8, maxWidth: "600px", margin: "1rem auto 0" }}>
              KhÃ´ng pháº£i chá»‰ táº­p gym hay Äƒn sáº¡ch. THÃ‚N trong AIMIND lÃ  hiá»ƒu cÆ¡ thá»ƒ tá»« gÃ³c Ä‘á»™ tháº§n kinh há»c vÃ  tÃ¢m lÃ½ â€” Ä‘á»ƒ thay Ä‘á»•i tá»« gá»‘c rá»….
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                num: "01", color: "#18B5B0", title: "Hiá»ƒu cÆ¡ thá»ƒ",
                desc: "Há»‡ tháº§n kinh, stress, giáº¥c ngá»§, váº­n Ä‘á»™ng, hÃ´ háº¥p â€” khoa há»c giáº£i thÃ­ch táº¡i sao cÆ¡ thá»ƒ báº¡n pháº£n á»©ng nhÆ° váº­y.",
                href: "/than/hieu-co-the", cta: "KhÃ¡m phÃ¡ â†’",
              },
              {
                num: "02", color: "#7C6FF7", title: "Thá»±c hÃ nh",
                desc: "Mobility, stretching, tá»± massage, bÃ i táº­p thÆ° giÃ£n â€” nhá»¯ng ká»¹ thuáº­t cÃ³ báº±ng chá»©ng khoa há»c, lÃ m Ä‘Æ°á»£c ngay táº¡i nhÃ .",
                href: "/than/thuc-hanh", cta: "Báº¯t Ä‘áº§u â†’",
              },
              {
                num: "03", color: "#E85A71", title: "Cá»­a hÃ ng",
                desc: "Dá»¥ng cá»¥ massage, dry brush, thiáº¿t bá»‹ há»— trá»£ phá»¥c há»“i â€” Ä‘Æ°á»£c chá»n lá»c ká»¹ Ä‘á»ƒ há»— trá»£ thá»±c hÃ nh.",
                href: "/than/cua-hang", cta: "Xem sáº£n pháº©m â†’",
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

      {/* Hiá»ƒu cÆ¡ thá»ƒ grid */}
      <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#18B5B0", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Hiá»ƒu cÆ¡ thá»ƒ
            </p>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.3 }}>
              6 chá»§ Ä‘á» khoa há»c vá» THÃ‚N
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
                  style={{
                    backgroundColor: "white", borderRadius: "14px", padding: "1.75rem",
                    border: "1px solid #E8E3F0", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(28,26,62,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
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

      {/* Thá»±c hÃ nh */}
      <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#7C6FF7", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Thá»±c hÃ nh
            </p>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800 }}>
              LÃ m Ä‘Æ°á»£c ngay hÃ´m nay
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {THUC_HANH.map((item) => (
              <Link key={item.title} href={item.href} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    border: "1px solid #E8E3F0", borderRadius: "14px", padding: "1.5rem",
                    display: "flex", gap: "1rem", alignItems: "flex-start",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#7C6FF7";
                    (e.currentTarget as HTMLElement).style.background = "rgba(124,111,247,0.03)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#E8E3F0";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
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
            CÆ¡ thá»ƒ vÃ  tÃ¢m trÃ­ lÃ  má»™t há»‡ thá»‘ng
          </h2>
          <p style={{ color: "#C4C0E0", marginBottom: "2.5rem", fontSize: "16px", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto 2.5rem" }}>
            Khi hiá»ƒu THÃ‚N, báº¡n sáº½ tháº¥y rÃµ hÆ¡n vÃ¬ sao TÃ‚M báº¡n pháº£n á»©ng nhÆ° váº­y â€” vÃ  TRÃ giÃºp báº¡n hiá»ƒu cáº£ há»‡ thá»‘ng.
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
              KhÃ¡m phÃ¡ TÃ‚M â†’
            </Link>
            <Link
              href="/kham-pha/ban-do-noi-tam"
              style={{
                color: "white", padding: "14px 32px", borderRadius: "999px",
                fontSize: "15px", fontWeight: 600, textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              LÃ m Mind Test
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
