import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Há»c CÃ¹ng AIMIND â€” Lá»™ trÃ¬nh, KhÃ³a há»c & Workshop | AIMIND",
  description: "Lá»™ trÃ¬nh há»c cÃ¡ nhÃ¢n hÃ³a theo THÃ‚Nâ€“TÃ‚Mâ€“TRÃ, khÃ³a há»c chuyÃªn sÃ¢u, workshop vÃ  lá»›p tÆ° duy pháº£n biá»‡n thá»© 7.",
};

const LO_TRINH = [
  { label: "NgÆ°á»i má»›i báº¯t Ä‘áº§u", desc: "7 ngÃ y khÃ¡m phÃ¡ báº£n thÃ¢n â€” tá»« Mind Test Ä‘áº¿n hiá»ƒu mÃ´ thá»©c", duration: "7 ngÃ y", href: "/hoc-cung-aimind/lo-trinh#nguoi-moi", color: "#7C6FF7" },
  { label: "Lá»™ trÃ¬nh THÃ‚N", desc: "4 tuáº§n hiá»ƒu cÆ¡ thá»ƒ vÃ  xÃ¢y dá»±ng thá»±c hÃ nh hÃ ng ngÃ y", duration: "4 tuáº§n", href: "/hoc-cung-aimind/lo-trinh#than", color: "#18B5B0" },
  { label: "Lá»™ trÃ¬nh TÃ‚M", desc: "8 tuáº§n Ä‘i sÃ¢u vÃ o tÃ¢m lÃ½, hÃ nh vi vÃ  thá»±c hÃ nh thay Ä‘á»•i", duration: "8 tuáº§n", href: "/hoc-cung-aimind/lo-trinh#tam", color: "#E85A71" },
  { label: "Lá»™ trÃ¬nh TRÃ", desc: "6 tuáº§n tÆ° duy pháº£n biá»‡n vÃ  khoa há»c vá» con ngÆ°á»i", duration: "6 tuáº§n", href: "/hoc-cung-aimind/lo-trinh#tri", color: "#5B4FD4" },
];

export default function HocCungAIMINDPage() {
  return (
    <main style={{ flex: 1 }}>
      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg, #1C1A3E 0%, #2D2A5E 100%)", padding: "6rem 0 5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 70%, rgba(124,111,247,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(24,181,176,0.1) 0%, transparent 50%)" }} />
        <div className="container-main" style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", backgroundColor: "rgba(124,111,247,0.15)", border: "1px solid rgba(124,111,247,0.3)", borderRadius: "999px", padding: "6px 16px", marginBottom: "2rem" }}>
            <span style={{ color: "#B8B3FA", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Há»c cÃ¹ng AIMIND</span>
          </div>
          <h1 style={{ color: "white", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.2, fontFamily: "'Be Vietnam Pro', sans-serif", letterSpacing: "-0.03em", maxWidth: "720px", margin: "0 auto 1.5rem" }}>
            Há»c cÃ³ há»‡ thá»‘ng.<br />Thay Ä‘á»•i tá»« bÃªn trong.
          </h1>
          <p style={{ color: "#C4C0E0", fontSize: "clamp(1rem, 2.5vw, 1.15rem)", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto 2.5rem" }}>
            KhÃ´ng pháº£i há»c Ä‘á»ƒ biáº¿t thÃªm. MÃ  há»c Ä‘á»ƒ hiá»ƒu chÃ­nh mÃ¬nh vÃ  chá»n láº¡i cÃ¡ch sá»‘ng.
          </p>
          <Link href="/hoc-cung-aimind/lo-trinh" style={{ background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)", color: "white", padding: "14px 32px", borderRadius: "999px", fontSize: "16px", fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 24px rgba(124,111,247,0.35)" }}>
            Chá»n lá»™ trÃ¬nh cá»§a báº¡n â†’
          </Link>
        </div>
      </section>

      {/* Lá»™ trÃ¬nh */}
      <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#7C6FF7", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Lá»™ trÃ¬nh há»c</p>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800 }}>4 lá»™ trÃ¬nh cÃ¡ nhÃ¢n hÃ³a</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {LO_TRINH.map((item) => (
              <Link key={item.label} href={item.href} style={{ textDecoration: "none" }}>
                <div style={{ border: "1px solid #E8E3F0", borderRadius: "16px", padding: "2rem", borderTop: `3px solid ${item.color}`, transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(28,26,62,0.1)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  <span style={{ backgroundColor: `${item.color}15`, color: item.color, fontSize: "12px", fontWeight: 700, padding: "4px 10px", borderRadius: "999px", display: "inline-block", marginBottom: "1rem" }}>{item.duration}</span>
                  <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>{item.label}</h3>
                  <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CÃ¡c hÃ¬nh thá»©c há»c */}
      <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800 }}>HÃ¬nh thá»©c há»c</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "ðŸ“š", title: "KhÃ³a há»c", desc: "Há»c tá»± tá»‘c Ä‘á»™ â€” video, bÃ i Ä‘á»c vÃ  bÃ i táº­p thá»±c hÃ nh theo tá»«ng module.", href: "/hoc-cung-aimind/khoa-hoc", cta: "Xem khÃ³a há»c" },
              { icon: "ðŸŽ¯", title: "Workshop", desc: "Há»c nhÃ³m nhá» trá»±c tiáº¿p â€” tÆ°Æ¡ng tÃ¡c, tháº£o luáº­n vÃ  thá»±c hÃ nh cÃ¹ng nhau.", href: "/hoc-cung-aimind/workshop", cta: "Xem workshop" },
              { icon: "ðŸ“…", title: "Lá»›p thá»© 7", desc: "Má»—i thá»© 7 â€” tÆ° duy pháº£n biá»‡n qua case study vÃ  tháº£o luáº­n nhÃ³m.", href: "/hoc-cung-aimind/lop-thu-7", cta: "Tham gia" },
            ].map((item) => (
              <div key={item.title} style={{ backgroundColor: "white", borderRadius: "16px", padding: "2.5rem", border: "1px solid #E8E3F0", textAlign: "center" }}>
                <span style={{ fontSize: "3rem", display: "block", marginBottom: "1.25rem" }}>{item.icon}</span>
                <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.7, marginBottom: "1.5rem" }}>{item.desc}</p>
                <Link href={item.href} style={{ color: "#7C6FF7", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>{item.cta} â†’</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 0", background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)", textAlign: "center" }}>
        <div className="container-main">
          <h2 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800, marginBottom: "1rem" }}>ChÆ°a biáº¿t báº¯t Ä‘áº§u tá»« Ä‘Ã¢u?</h2>
          <p style={{ color: "#C4C0E0", fontSize: "16px", lineHeight: 1.75, maxWidth: "460px", margin: "0 auto 2.5rem" }}>LÃ m bÃ i Mind Test miá»…n phÃ­ â€” tÃ´i sáº½ gá»£i Ã½ lá»™ trÃ¬nh phÃ¹ há»£p nháº¥t vá»›i báº¡n.</p>
          <Link href="/kham-pha/ban-do-noi-tam" style={{ background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)", color: "white", padding: "14px 32px", borderRadius: "999px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 24px rgba(124,111,247,0.35)" }}>
            LÃ m Mind Test miá»…n phÃ­ â†’
          </Link>
        </div>
      </section>
    </main>
  );
}
