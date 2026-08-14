import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TRÃ â€” TÆ° duy pháº£n biá»‡n & Khoa há»c con ngÆ°á»i | AIMIND",
  description:
    "TÆ° duy pháº£n biá»‡n, thiÃªn kiáº¿n nháº­n thá»©c, nÃ£o bá»™, hormone, neuroscience â€” TRÃ giÃºp báº¡n khÃ´ng bá»‹ chÃ­nh mÃ¬nh lá»«a vÃ  hiá»ƒu con ngÆ°á»i tá»« gá»‘c rá»… khoa há»c.",
  keywords: ["tÆ° duy pháº£n biá»‡n", "thiÃªn kiáº¿n nháº­n thá»©c", "nÃ£o bá»™", "neuroscience", "critical thinking", "cognitive bias", "AIMIND"],
};

const TU_DUY = [
  { icon: "ðŸ‘ï¸", title: "Quan sÃ¡t vs Diá»…n giáº£i", desc: "PhÃ¢n biá»‡t Ä‘Æ°á»£c cÃ¡i báº¡n tháº¥y vÃ  cÃ¡i báº¡n Ä‘ang thÃªm vÃ o.", href: "/tri/tu-duy-phan-bien#quan-sat" },
  { icon: "âš–ï¸", title: "Fact vs Opinion", desc: "Ráº¥t nhiá»u 'sá»± tháº­t' trong Ä‘áº§u báº¡n thá»±c ra lÃ  Ã½ kiáº¿n.", href: "/tri/tu-duy-phan-bien#fact-opinion" },
  { icon: "ðŸ§®", title: "Logic", desc: "CÃ¡ch láº­p luáº­n há»£p lá»‡ â€” vÃ  nhá»¯ng lá»—i logic phá»• biáº¿n nháº¥t.", href: "/tri/tu-duy-phan-bien#logic" },
  { icon: "ðŸ”—", title: "Causal Reasoning", desc: "TÆ° duy nhÃ¢n quáº£ â€” nguyÃªn nhÃ¢n tháº­t sá»± lÃ  gÃ¬?", href: "/tri/tu-duy-phan-bien#causal" },
  { icon: "ðŸ“Š", title: "Correlation vs Causation", desc: "Hai thá»© xáº£y ra cÃ¹ng nhau khÃ´ng cÃ³ nghÄ©a lÃ  cÃ¡i nÃ y gÃ¢y ra cÃ¡i kia.", href: "/tri/tu-duy-phan-bien#correlation" },
  { icon: "ðŸ”¬", title: "Evidence", desc: "Báº±ng chá»©ng tá»‘t trÃ´ng nhÆ° tháº¿ nÃ o â€” vÃ  lÃ m sao Ä‘Ã¡nh giÃ¡ nguá»“n tin.", href: "/tri/tu-duy-phan-bien#evidence" },
  { icon: "ðŸš«", title: "Falsification", desc: "Má»™t lÃ½ thuyáº¿t tá»‘t pháº£i cÃ³ kháº£ nÄƒng bá»‹ chá»©ng minh sai.", href: "/tri/tu-duy-phan-bien#falsification" },
];

const THIEN_KIEN = [
  { name: "Confirmation bias", desc: "Chá»‰ tÃ¬m kiáº¿m thÃ´ng tin xÃ¡c nháº­n Ä‘iá»u mÃ¬nh Ä‘Ã£ tin", color: "#E85A71" },
  { name: "Availability bias", desc: "ÄÃ¡nh giÃ¡ xÃ¡c suáº¥t dá»±a trÃªn vÃ­ dá»¥ dá»… nhá»› nháº¥t", color: "#E8925A" },
  { name: "Anchoring", desc: "Bá»‹ áº£nh hÆ°á»Ÿng bá»Ÿi con sá»‘ Ä‘áº§u tiÃªn nghe Ä‘Æ°á»£c", color: "#7C6FF7" },
  { name: "Survivorship bias", desc: "Chá»‰ nhÃ¬n tháº¥y ngÆ°á»i thÃ nh cÃ´ng, khÃ´ng tháº¥y ngÆ°á»i tháº¥t báº¡i", color: "#18B5B0" },
  { name: "Fundamental attribution error", desc: "Äá»• lá»—i tÃ­nh cÃ¡ch cá»§a ngÆ°á»i khÃ¡c, Ä‘á»• lá»—i hoÃ n cáº£nh cá»§a mÃ¬nh", color: "#4CAF50" },
];

const KHOA_HOC = [
  { icon: "ðŸ§ ", title: "NÃ£o bá»™", desc: "Kiáº¿n trÃºc cá»§a nÃ£o â€” 3 nÃ£o trong 1, cÃ¡ch chÃºng phá»‘i há»£p vÃ  xung Ä‘á»™t.", href: "/tri/khoa-hoc-con-nguoi#nao-bo" },
  { icon: "âš¡", title: "Há»‡ tháº§n kinh", desc: "Há»‡ tháº§n kinh tá»± chá»§ â€” giao cáº£m vs phÃ³ giao cáº£m, polyvagal theory.", href: "/tri/khoa-hoc-con-nguoi#he-than-kinh" },
  { icon: "ðŸ’‰", title: "Hormone", desc: "Cortisol, oxytocin, adrenaline... â€” cÃ¡c hormone Ä‘iá»u khiá»ƒn cáº£m xÃºc vÃ  hÃ nh vi.", href: "/tri/khoa-hoc-con-nguoi#hormone" },
  { icon: "ðŸ”®", title: "Neurotransmitters", desc: "Dopamine, serotonin, GABA â€” hÃ³a cháº¥t nÃ£o vÃ  cÃ¡ch chÃºng áº£nh hÆ°á»Ÿng Ä‘áº¿n báº¡n.", href: "/tri/khoa-hoc-con-nguoi#neurotransmitters" },
  { icon: "ðŸ¦Ž", title: "Tiáº¿n hÃ³a", desc: "Táº¡i sao nÃ£o báº¡n váº«n pháº£n á»©ng nhÆ° thá»i tiá»n sá»­ â€” vÃ  cÃ¡ch thÃ­ch nghi.", href: "/tri/khoa-hoc-con-nguoi#tien-hoa" },
];

export default function TriPage() {
  return (
    <main style={{ flex: 1 }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #1C1A3E 0%, #1a2a3E 50%, #0D1A2E 100%)",
          padding: "6rem 0 5rem", position: "relative", overflow: "hidden",
        }}
      >
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 80%, rgba(91,79,212,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(24,181,176,0.1) 0%, transparent 50%)" }} />
        <div className="container-main" style={{ position: "relative", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(91,79,212,0.2)", border: "1px solid rgba(91,79,212,0.4)", borderRadius: "999px", padding: "6px 16px", marginBottom: "2rem" }}>
            <span style={{ color: "#B8B3FA", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Trá»¥ cá»™t 03 â€” TRÃ</span>
          </div>
          <h1 style={{ color: "white", fontSize: "clamp(2.2rem, 6vw, 3.8rem)", fontWeight: 800, lineHeight: 1.15, fontFamily: "'Be Vietnam Pro', sans-serif", letterSpacing: "-0.03em", maxWidth: "760px", margin: "0 auto 1.5rem" }}>
            Báº¡n cÃ³ Ä‘ang bá»‹ chÃ­nh<br />mÃ¬nh lá»«a khÃ´ng?
          </h1>
          <p style={{ color: "#C4C0E0", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", lineHeight: 1.75, maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            TRÃ khÃ´ng pháº£i vá» IQ hay há»c giá»i. ÄÃ¢y lÃ  kháº£ nÄƒng nhÃ¬n tháº¥y sá»± tháº­t â€” vá» tháº¿ giá»›i, vá» ngÆ°á»i khÃ¡c, vÃ  Ä‘áº·c biá»‡t lÃ  vá» chÃ­nh mÃ¬nh.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/tri/tu-duy-phan-bien" style={{ background: "linear-gradient(135deg, #5B4FD4 0%, #4035A8 100%)", color: "white", padding: "14px 32px", borderRadius: "999px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 24px rgba(91,79,212,0.35)" }}>
              Báº¯t Ä‘áº§u vá»›i TÆ° duy â†’
            </Link>
            <Link href="/tri/lop-hoc" style={{ color: "white", padding: "14px 32px", borderRadius: "999px", fontSize: "15px", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.25)" }}>
              Lá»›p há»c thá»© 7
            </Link>
          </div>
        </div>
      </section>

      {/* TÆ° duy pháº£n biá»‡n */}
      <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#5B4FD4", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>TÆ° duy pháº£n biá»‡n</p>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800 }}>
              7 ká»¹ nÄƒng tÆ° duy cá»‘t lÃµi
            </h2>
            <p style={{ color: "#6B678F", fontSize: "15px", lineHeight: 1.75, maxWidth: "540px", margin: "0.75rem auto 0" }}>
              KhÃ´ng pháº£i Ä‘á»ƒ tranh luáº­n tháº¯ng â€” mÃ  Ä‘á»ƒ khÃ´ng bá»‹ lá»«a bá»Ÿi chÃ­nh mÃ¬nh vÃ  ngÆ°á»i khÃ¡c.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {TU_DUY.map((item) => (
              <Link key={item.title} href={item.href} style={{ textDecoration: "none" }}>
                <div
                  style={{ backgroundColor: "#F8F4EE", borderRadius: "14px", padding: "1.75rem", border: "1px solid #E8E3F0", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(28,26,62,0.08)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
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

      {/* ThiÃªn kiáº¿n */}
      <section style={{ padding: "5rem 0", background: "linear-gradient(180deg, #1C1A3E 0%, #2D2A5E 100%)" }}>
        <div className="container-main" style={{ maxWidth: "860px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#18B5B0", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>ThiÃªn kiáº¿n nháº­n thá»©c</p>
            <h2 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800 }}>
              5 thiÃªn kiáº¿n Ä‘ang áº£nh hÆ°á»Ÿng báº¡n má»—i ngÃ y
            </h2>
            <p style={{ color: "#9B96C0", fontSize: "15px", lineHeight: 1.75, maxWidth: "520px", margin: "0.75rem auto 0" }}>
              NÃ£o bá»™ táº¡o ra lá»‘i táº¯t Ä‘á»ƒ tiáº¿t kiá»‡m nÄƒng lÆ°á»£ng â€” vÃ  Ä‘Ã¢y lÃ  cÃ¡i giÃ¡ báº¡n pháº£i tráº£.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {THIEN_KIEN.map((item) => (
              <Link key={item.name} href={`/tri/thien-kien-nhan-thuc#${item.name.toLowerCase().replace(/ /g, "-")}`} style={{ textDecoration: "none" }}>
                <div
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "14px", padding: "1.25rem 1.75rem", display: "flex", alignItems: "center", gap: "1rem", transition: "background 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.09)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"}
                >
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: item.color, flexShrink: 0 }} />
                  <div>
                    <h3 style={{ color: "white", fontWeight: 700, fontSize: "15px", marginBottom: "2px", fontFamily: "'Be Vietnam Pro', sans-serif" }}>{item.name}</h3>
                    <p style={{ color: "#9B96C0", fontSize: "13px", lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                  <span style={{ color: item.color, marginLeft: "auto", fontSize: "18px", flexShrink: 0 }}>â†’</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/tri/thien-kien-nhan-thuc" style={{ color: "#18B5B0", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
              Xem táº¥t cáº£ thiÃªn kiáº¿n â†’
            </Link>
          </div>
        </div>
      </section>

      {/* Khoa há»c con ngÆ°á»i */}
      <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#7C6FF7", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Khoa há»c vá» con ngÆ°á»i</p>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800 }}>
              Hiá»ƒu ngÆ°á»i qua lÄƒng kÃ­nh khoa há»c
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {KHOA_HOC.map((item) => (
              <Link key={item.title} href={item.href} style={{ textDecoration: "none" }}>
                <div
                  style={{ backgroundColor: "white", borderRadius: "14px", padding: "1.75rem", border: "1px solid #E8E3F0", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(28,26,62,0.08)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
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

      {/* Lá»›p há»c thá»© 7 */}
      <section style={{ padding: "5rem 0", background: "linear-gradient(135deg, #1C1A3E 0%, #2D2A5E 100%)", textAlign: "center" }}>
        <div className="container-main">
          <p style={{ color: "#B8B3FA", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>Lá»›p há»c thá»© 7</p>
          <h2 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.3 }}>
            Thá»© 7 hÃ ng tuáº§n â€” CÃ¹ng nhau tÆ° duy pháº£n biá»‡n
          </h2>
          <p style={{ color: "#C4C0E0", fontSize: "16px", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto 2.5rem" }}>
            Case study thá»±c táº¿. Tháº£o luáº­n má»Ÿ. BÃ i táº­p tÆ° duy. Cá»™ng Ä‘á»“ng nhá»¯ng ngÆ°á»i muá»‘n hiá»ƒu sÃ¢u hÆ¡n vá» tháº¿ giá»›i vÃ  chÃ­nh mÃ¬nh.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/tri/lop-hoc" style={{ background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)", color: "white", padding: "14px 32px", borderRadius: "999px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 24px rgba(124,111,247,0.35)" }}>
              Tham gia lá»›p há»c â†’
            </Link>
            <Link href="/cong-dong" style={{ color: "white", padding: "14px 32px", borderRadius: "999px", fontSize: "15px", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>
              Cá»™ng Ä‘á»“ng AIMIND
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
