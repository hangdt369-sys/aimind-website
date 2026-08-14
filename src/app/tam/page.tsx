import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TÃ‚M â€” Hiá»ƒu tÃ¢m lÃ½ Ä‘á»ƒ hiá»ƒu hÃ nh vi | AIMIND",
  description:
    "VÃ´ thá»©c, niá»m tin cá»‘t lÃµi, schema, attachment, cáº£m xÃºc â€” hiá»ƒu tÃ¢m lÃ½ tá»« gÃ³c Ä‘á»™ khoa há»c Ä‘á»ƒ khÃ´ng cÃ²n bá»‹ mÃ´ thá»©c cÅ© Ä‘iá»u khiá»ƒn.",
  keywords: ["vÃ´ thá»©c", "niá»m tin cá»‘t lÃµi", "schema therapy", "attachment", "cáº£m xÃºc", "hÃ nh vi", "tÃ¢m lÃ½ há»c", "AIMIND"],
};

const HIEU_TAM_LY = [
  { icon: "ðŸŒŠ", title: "VÃ´ thá»©c", desc: "95% quyáº¿t Ä‘á»‹nh cá»§a báº¡n Ä‘áº¿n tá»« vÃ´ thá»©c â€” khÃ´ng pháº£i lÃ½ trÃ­.", href: "/tam/hieu-tam-ly/vo-thuc" },
  { icon: "ðŸ§±", title: "Niá»m tin", desc: "Nhá»¯ng niá»m tin cá»‘t lÃµi hÃ¬nh thÃ nh tá»« thá»i thÆ¡ áº¥u vÃ  váº«n Ä‘ang Ä‘iá»u khiá»ƒn báº¡n.", href: "/tam/hieu-tam-ly/niem-tin" },
  { icon: "ðŸ—ï¸", title: "Schema", desc: "18 khuÃ´n máº«u niá»m tin Äƒn sÃ¢u â€” schema therapy cá»§a Jeffrey Young.", href: "/tam/hieu-tam-ly/schema" },
  { icon: "ðŸ”—", title: "Attachment", desc: "CÃ¡ch báº¡n gáº¯n bÃ³ vá»›i ngÆ°á»i thÃ¢n â€” vÃ  táº¡i sao báº¡n yÃªu theo cÃ¡ch Ä‘Ã³.", href: "/tam/hieu-tam-ly/attachment" },
  { icon: "ðŸªž", title: "Identity", desc: "Báº¡n lÃ  ai â€” vÃ  báº£n sáº¯c Ä‘Ã³ Ä‘Æ°á»£c xÃ¢y dá»±ng nhÆ° tháº¿ nÃ o?", href: "/tam/hieu-tam-ly/identity" },
  { icon: "ðŸŒ¡ï¸", title: "Cáº£m xÃºc", desc: "Cáº£m xÃºc lÃ  thÃ´ng tin, khÃ´ng pháº£i káº» thÃ¹ â€” há»c cÃ¡ch Ä‘á»c vÃ  Ä‘iá»u tiáº¿t.", href: "/tam/hieu-tam-ly/cam-xuc" },
  { icon: "ðŸ›¡ï¸", title: "Defense mechanisms", desc: "CÃ¡c cÆ¡ cháº¿ tá»± báº£o vá»‡ vÃ´ thá»©c báº¡n dÃ¹ng mÃ  khÃ´ng biáº¿t.", href: "/tam/hieu-tam-ly/defense-mechanisms" },
  { icon: "ðŸ”„", title: "Habit", desc: "Táº¡i sao thÃ³i quen cá»©ng Ä‘áº§u nhÆ° váº­y â€” vÃ  cÃ¡ch thay Ä‘á»•i tá»« bÃªn trong.", href: "/tam/hieu-tam-ly/habit" },
];

const HIEU_HANH_VI = [
  { q: "Táº¡i sao tÃ´i láº·p láº¡i?", desc: "Báº¡n cá»© vÃ o cÃ¹ng má»™t kiá»ƒu má»‘i quan há»‡, cÃ¹ng má»™t kiá»ƒu váº¥n Ä‘á»...", href: "/tam/hieu-hanh-vi#lap-lai" },
  { q: "Táº¡i sao tÃ´i biáº¿t nhÆ°ng váº«n lÃ m?", desc: "Biáº¿t Ä‘iá»u Ä‘Ãºng nhÆ°ng váº«n lÃ m Ä‘iá»u sai â€” Ä‘Ã¢y lÃ  váº¥n Ä‘á» tháº§n kinh, khÃ´ng pháº£i Ã½ chÃ­.", href: "/tam/hieu-hanh-vi#biet-nhung-lam" },
  { q: "Táº¡i sao tÃ´i chá»n sai ngÆ°á»i?", desc: "Sá»©c hÃºt ká»³ láº¡ vá»›i nhá»¯ng ngÆ°á»i khÃ´ng tá»‘t cho báº¡n â€” cÃ³ lÃ½ do sÃ¢u hÆ¡n.", href: "/tam/hieu-hanh-vi#chon-sai-nguoi" },
  { q: "Táº¡i sao tÃ´i trÃ¬ hoÃ£n?", desc: "Procrastination khÃ´ng pháº£i lÆ°á»i â€” Ä‘Ã¢y lÃ  cÆ¡ cháº¿ tá»± báº£o vá»‡.", href: "/tam/hieu-hanh-vi#tri-hoan" },
  { q: "Táº¡i sao tÃ´i tá»± phÃ¡ hoáº¡i?", desc: "Khi má»i thá»© suÃ½t tá»‘t thÃ¬ láº¡i cÃ³ gÃ¬ Ä‘Ã³ xáº£y ra â€” self-sabotage.", href: "/tam/hieu-hanh-vi#tu-pha-hoai" },
];

const THUC_HANH_TAM = [
  { icon: "ðŸ‘ï¸", title: "Tá»± quan sÃ¡t", desc: "Ká»¹ nÄƒng nhÃ¬n chÃ­nh mÃ¬nh vá»›i Ä‘Ã´i máº¯t trung láº­p, khÃ´ng phÃ¡n xÃ©t.", href: "/tam/thuc-hanh#tu-quan-sat" },
  { icon: "ðŸ“”", title: "Journaling", desc: "Viáº¿t nháº­t kÃ½ cÃ³ cáº¥u trÃºc Ä‘á»ƒ khai thÃ¡c vÃ´ thá»©c.", href: "/tam/thuc-hanh#journaling" },
  { icon: "ðŸ”€", title: "Reframing", desc: "Äáº·t láº¡i khung nhÃ¬n â€” thay Ä‘á»•i cÃ¢u chuyá»‡n báº¡n ká»ƒ vá» chÃ­nh mÃ¬nh.", href: "/tam/thuc-hanh#reframing" },
  { icon: "ðŸª„", title: "Identity work", desc: "Thiáº¿t káº¿ láº¡i báº£n sáº¯c thay vÃ¬ cá»‘ thay Ä‘á»•i hÃ nh vi bá» máº·t.", href: "/tam/thuc-hanh#identity" },
  { icon: "ðŸŒ±", title: "Behavior change", desc: "PhÆ°Æ¡ng phÃ¡p thay Ä‘á»•i hÃ nh vi cÃ³ báº±ng chá»©ng khoa há»c.", href: "/tam/thuc-hanh#behavior-change" },
];

export default function TamPage() {
  return (
    <main style={{ flex: 1 }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #1C1A3E 0%, #2D1A4E 50%, #1C1A3E 100%)",
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
              "radial-gradient(circle at 20% 80%, rgba(232,90,113,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(124,111,247,0.15) 0%, transparent 50%)",
          }}
        />
        <div className="container-main" style={{ position: "relative", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "rgba(232,90,113,0.15)", border: "1px solid rgba(232,90,113,0.3)",
              borderRadius: "999px", padding: "6px 16px", marginBottom: "2rem",
            }}
          >
            <span style={{ color: "#E85A71", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Trá»¥ cá»™t 02 â€” TÃ‚M
            </span>
          </div>
          <h1
            style={{
              color: "white", fontSize: "clamp(2.2rem, 6vw, 3.8rem)", fontWeight: 800,
              lineHeight: 1.15, fontFamily: "'Be Vietnam Pro', sans-serif",
              letterSpacing: "-0.03em", maxWidth: "760px", margin: "0 auto 1.5rem",
            }}
          >
            Táº¡i sao báº¡n cá»© láº·p láº¡i<br />cÃ¹ng má»™t khuÃ´n máº«u?
          </h1>
          <p style={{ color: "#C4C0E0", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", lineHeight: 1.75, maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            KhÃ´ng pháº£i vÃ¬ báº¡n yáº¿u Ä‘uá»‘i hay thiáº¿u Ã½ chÃ­. MÃ  vÃ¬ báº¡n chÆ°a hiá»ƒu cÆ¡ cháº¿ tÃ¢m lÃ½ Ä‘ang váº­n hÃ nh bÃªn dÆ°á»›i nhá»¯ng lá»±a chá»n Ä‘Ã³.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/tam/hieu-tam-ly"
              style={{
                background: "linear-gradient(135deg, #E85A71 0%, #C04060 100%)",
                color: "white", padding: "14px 32px", borderRadius: "999px",
                fontSize: "15px", fontWeight: 700, textDecoration: "none",
                boxShadow: "0 8px 24px rgba(232,90,113,0.3)",
              }}
            >
              KhÃ¡m phÃ¡ TÃ‚M â†’
            </Link>
            <Link
              href="/kham-pha/ban-do-noi-tam"
              style={{
                color: "white", padding: "14px 32px", borderRadius: "999px",
                fontSize: "15px", fontWeight: 600, textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              LÃ m Mind Test
            </Link>
          </div>
        </div>
      </section>

      {/* Hiá»ƒu tÃ¢m lÃ½ */}
      <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#E85A71", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Hiá»ƒu tÃ¢m lÃ½</p>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.3 }}>
              8 chá»§ Ä‘á» tÃ¢m lÃ½ há»c cá»‘t lÃµi
            </h2>
            <p style={{ color: "#6B678F", fontSize: "15px", lineHeight: 1.75, maxWidth: "560px", margin: "0.75rem auto 0" }}>
              Tá»« lÃ½ thuyáº¿t gáº¯n bÃ³ Ä‘áº¿n schema therapy â€” Ä‘Æ°á»£c giáº£i thÃ­ch báº±ng ngÃ´n ngá»¯ Ä‘á»i thÆ°á»ng, khÃ´ng thuáº­t ngá»¯ khÃ³ hiá»ƒu.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {HIEU_TAM_LY.map((item) => (
              <Link key={item.title} href={item.href} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    backgroundColor: "white", borderRadius: "14px", padding: "1.75rem",
                    border: "1px solid #E8E3F0", transition: "transform 0.2s, box-shadow 0.2s",
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
                  <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: "#6B678F", fontSize: "13px", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hiá»ƒu hÃ nh vi */}
      <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
        <div className="container-main" style={{ maxWidth: "860px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#7C6FF7", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Hiá»ƒu hÃ nh vi</p>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800 }}>
              5 cÃ¢u há»i báº¡n chÆ°a cÃ³ Ä‘Ã¡p Ã¡n
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {HIEU_HANH_VI.map((item, i) => (
              <Link key={i} href={item.href} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    border: "1px solid #E8E3F0", borderRadius: "14px", padding: "1.5rem 2rem",
                    display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem",
                    transition: "border-color 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#7C6FF7";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#E8E3F0";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  }}
                >
                  <div>
                    <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>{item.q}</h3>
                    <p style={{ color: "#6B678F", fontSize: "13px", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                  <span style={{ color: "#7C6FF7", fontSize: "20px", flexShrink: 0 }}>â†’</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Thá»±c hÃ nh */}
      <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#18B5B0", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Thá»±c hÃ nh</p>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800 }}>
              Tá»« hiá»ƒu biáº¿t Ä‘áº¿n thay Ä‘á»•i tháº­t
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {THUC_HANH_TAM.map((item) => (
              <Link key={item.title} href={item.href} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    backgroundColor: "white", borderRadius: "14px", padding: "1.75rem",
                    border: "1px solid #E8E3F0", transition: "border-color 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#18B5B0";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#E8E3F0";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <span style={{ fontSize: "2rem", display: "block", marginBottom: "1rem" }}>{item.icon}</span>
                  <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: "#6B678F", fontSize: "13px", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 0", background: "linear-gradient(135deg, #2D1A4E 0%, #1C1A3E 100%)", textAlign: "center" }}>
        <div className="container-main">
          <h2 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, marginBottom: "1rem" }}>
            TÃ‚M hiá»ƒu Ä‘Æ°á»£c â€” khi TRÃ Ä‘áº·t Ä‘Ãºng cÃ¢u há»i
          </h2>
          <p style={{ color: "#C4C0E0", fontSize: "16px", lineHeight: 1.75, maxWidth: "500px", margin: "0 auto 2.5rem" }}>
            TÆ° duy pháº£n biá»‡n giÃºp báº¡n khÃ´ng bá»‹ chÃ­nh mÃ¬nh lá»«a. KhÃ¡m phÃ¡ TRÃ Ä‘á»ƒ hoÃ n thiá»‡n bá»™ ba THÃ‚N â€“ TÃ‚M â€“ TRÃ.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/tri" style={{ background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)", color: "white", padding: "14px 32px", borderRadius: "999px", fontSize: "15px", fontWeight: 700, textDecoration: "none" }}>
              KhÃ¡m phÃ¡ TRÃ â†’
            </Link>
            <Link href="/coaching" style={{ color: "white", padding: "14px 32px", borderRadius: "999px", fontSize: "15px", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>
              Äá»“ng hÃ nh 1-1
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
