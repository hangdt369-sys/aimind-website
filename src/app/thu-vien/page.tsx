import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ThÆ° Viá»‡n Tri Thá»©c â€” Psychology, Neuroscience & More | AIMIND",
  description:
    "ThÆ° viá»‡n kiáº¿n thá»©c AIMIND: Psychology, Neuroscience, Biology, Evolution, Philosophy, Behavioral Science, Critical Thinking, Health, AI & Human.",
};

const CATEGORIES = [
  { slug: "psychology", label: "Psychology", vi: "TÃ¢m lÃ½ há»c", icon: "ðŸ§ ", color: "#E85A71", count: "24 bÃ i", desc: "LÃ½ thuyáº¿t tÃ¢m lÃ½ há»c hiá»‡n Ä‘áº¡i â€” tá»« Freud Ä‘áº¿n schema therapy" },
  { slug: "neuroscience", label: "Neuroscience", vi: "Khoa há»c tháº§n kinh", icon: "âš¡", color: "#7C6FF7", count: "18 bÃ i", desc: "NÃ£o bá»™, há»‡ tháº§n kinh, neuroplasticity vÃ  cÃ¡ch chÃºng áº£nh hÆ°á»Ÿng Ä‘áº¿n hÃ nh vi" },
  { slug: "biology", label: "Biology", vi: "Sinh há»c", icon: "ðŸ§¬", color: "#18B5B0", count: "12 bÃ i", desc: "Sinh há»c con ngÆ°á»i tá»« gÃ³c Ä‘á»™ hÃ nh vi vÃ  cáº£m xÃºc" },
  { slug: "evolution", label: "Evolution", vi: "Tiáº¿n hÃ³a", icon: "ðŸ¦Ž", color: "#E8925A", count: "10 bÃ i", desc: "Táº¡i sao chÃºng ta nhÆ° váº­y â€” tiáº¿n hÃ³a vÃ  di sáº£n hÃ nh vi" },
  { slug: "philosophy", label: "Philosophy", vi: "Triáº¿t há»c", icon: "ðŸ”­", color: "#5B4FD4", count: "15 bÃ i", desc: "Triáº¿t há»c thá»±c dá»¥ng vá» tá»± nháº­n thá»©c, Ä‘áº¡o Ä‘á»©c vÃ  Ã½ nghÄ©a" },
  { slug: "behavioral-science", label: "Behavioral Science", vi: "Khoa há»c hÃ nh vi", icon: "ðŸ”„", color: "#4CAF50", count: "20 bÃ i", desc: "CÃ¡ch con ngÆ°á»i thá»±c sá»± ra quyáº¿t Ä‘á»‹nh â€” khÃ´ng pháº£i cÃ¡ch há» nghÄ© há» ra quyáº¿t Ä‘á»‹nh" },
  { slug: "critical-thinking", label: "Critical Thinking", vi: "TÆ° duy pháº£n biá»‡n", icon: "âš–ï¸", color: "#FF9800", count: "16 bÃ i", desc: "Logic, thiÃªn kiáº¿n nháº­n thá»©c vÃ  ká»¹ nÄƒng Ä‘Ã¡nh giÃ¡ báº±ng chá»©ng" },
  { slug: "health", label: "Health", vi: "Sá»©c khá»e", icon: "ðŸ’š", color: "#66BB6A", count: "14 bÃ i", desc: "Sá»©c khá»e toÃ n diá»‡n â€” thá»ƒ cháº¥t, tÃ¢m tháº§n vÃ  hÃ nh vi" },
  { slug: "ai-and-human", label: "AI & Human", vi: "AI & Con ngÆ°á»i", icon: "ðŸ¤–", color: "#9C27B0", count: "8 bÃ i", desc: "AI Ä‘ang thay Ä‘á»•i con ngÆ°á»i nhÆ° tháº¿ nÃ o â€” vÃ  ngÆ°á»£c láº¡i" },
];

export default function ThuVienPage() {
  return (
    <main style={{ flex: 1 }}>
      {/* Hero */}
      <section style={{ backgroundColor: "#F8F4EE", padding: "5rem 0 4rem", borderBottom: "1px solid #E8E3F0" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <p style={{ color: "#7C6FF7", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>ThÆ° Viá»‡n Tri Thá»©c</p>
          <h1 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1.25rem", letterSpacing: "-0.03em" }}>
            Kiáº¿n thá»©c cÃ³ cÄƒn cá»© khoa há»c<br />Ä‘Æ°á»£c viáº¿t báº±ng ngÃ´n ngá»¯ Ä‘á»i thÆ°á»ng
          </h1>
          <p style={{ color: "#6B678F", fontSize: "17px", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto" }}>
            KhÃ´ng pháº£i self-help mÆ¡ há»“. KhÃ´ng pháº£i thuáº­t ngá»¯ hÃ n lÃ¢m khÃ³ hiá»ƒu. ÄÃ¢y lÃ  nhá»¯ng gÃ¬ khoa há»c thá»±c sá»± nÃ³i vá» con ngÆ°á»i.
          </p>
        </div>
      </section>

      {/* 9 categories */}
      <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {CATEGORIES.map((cat) => (
              <Link key={cat.slug} href={`/thu-vien/${cat.slug}`} style={{ textDecoration: "none" }}>
                <div
                  style={{ border: "1px solid #E8E3F0", borderRadius: "16px", padding: "2rem", transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s", borderTop: `3px solid ${cat.color}` }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(28,26,62,0.1)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "2.2rem" }}>{cat.icon}</span>
                    <span style={{ backgroundColor: `${cat.color}15`, color: cat.color, fontSize: "12px", fontWeight: 700, padding: "4px 10px", borderRadius: "999px" }}>{cat.count}</span>
                  </div>
                  <p style={{ color: cat.color, fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>{cat.label}</p>
                  <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>{cat.vi}</h2>
                  <p style={{ color: "#6B678F", fontSize: "13px", lineHeight: 1.65 }}>{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 0", backgroundColor: "#F8F4EE", textAlign: "center" }}>
        <div className="container-main">
          <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, marginBottom: "1rem" }}>
            Muá»‘n há»c cÃ³ há»‡ thá»‘ng hÆ¡n?
          </h2>
          <p style={{ color: "#6B678F", fontSize: "15px", lineHeight: 1.75, maxWidth: "480px", margin: "0 auto 2rem" }}>
            ThÆ° viá»‡n lÃ  nÆ¡i Ä‘á»c tá»± do. Náº¿u báº¡n muá»‘n lá»™ trÃ¬nh cá»¥ thá»ƒ â€” xem Há»c cÃ¹ng AIMIND.
          </p>
          <Link href="/hoc-cung-aimind" style={{ backgroundColor: "#7C6FF7", color: "white", padding: "12px 28px", borderRadius: "999px", fontSize: "15px", fontWeight: 700, textDecoration: "none" }}>
            Xem lá»™ trÃ¬nh há»c â†’
          </Link>
        </div>
      </section>
    </main>
  );
}
