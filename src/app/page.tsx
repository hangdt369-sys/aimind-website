import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <HeroSection />
        <RecognitionSection />
        <TestPreviewSection />
        <JourneySection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #1C1A3E 0%, #2D2A5E 50%, #1C1A3E 100%)",
        padding: "6rem 0 5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 20% 80%, rgba(124,111,247,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(24,181,176,0.1) 0%, transparent 50%)",
        }}
      />
      <div className="container-main" style={{ position: "relative", textAlign: "center" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(124,111,247,0.15)",
            border: "1px solid rgba(124,111,247,0.3)",
            borderRadius: "999px",
            padding: "6px 16px",
            marginBottom: "2rem",
          }}
        >
          <span style={{ color: "#18B5B0", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Awareness Intelligence Mind
          </span>
        </div>
        <h1
          style={{
            color: "white",
            fontSize: "clamp(2.2rem, 6vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            fontFamily: "'Be Vietnam Pro', sans-serif",
            letterSpacing: "-0.03em",
            maxWidth: "820px",
            margin: "0 auto 1.5rem",
          }}
        >
          Ban da bao gio tu hoi tai sao minh lai nhu vay?
        </h1>
        <p
          style={{
            color: "#C4C0E0",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            lineHeight: 1.75,
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
          }}
        >
          Khong phai vi ban khong du tot. Ma vi ban chua tung co ban do de nhin thay chinh minh.
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <Link
            href="/kham-pha/ban-do-noi-tam"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
              color: "white",
              padding: "16px 36px",
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: 700,
              textDecoration: "none",
              fontFamily: "'Be Vietnam Pro', sans-serif",
              boxShadow: "0 8px 32px rgba(124,111,247,0.35)",
            }}
          >
            Kham pha ban do noi tam
          </Link>
          <p style={{ color: "#9B96C0", fontSize: "13px" }}>Mien phi - 15 phut - Khong can dang ky</p>
        </div>
        <div style={{ marginTop: "4rem", display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
          {[
            { number: "12,000+", label: "nguoi da kham pha" },
            { number: "6", label: "mo thuc noi tam" },
            { number: "94%", label: "cam thay dung voi minh" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1.8rem", fontWeight: 800 }}>{stat.number}</div>
              <div style={{ color: "#9B96C0", fontSize: "13px", marginTop: "4px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecognitionSection() {
  const patterns = [
    { emoji: "1", title: "Ban luon lo lang du moi thu dang on", desc: "Kh
          <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, maxWidth: "600px", margin: "0 auto", lineHeight: 1.3 }}>
            Nhung mo thuc nay khong phai tinh cach - chung la nhung gi ban da hoc de song sot
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {patterns.map((p) => (
            <div key={p.title} style={{ backgroundColor: "white", borderRadius: "14px", padding: "1.5rem", border: "1px solid #E8E3F0" }}>
              <span style={{ fontSize: "1.8rem", display: "block", marginBottom: "0.75rem" }}>{p.emoji}</span>
              <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "15px", marginBottom: "0.4rem" }}>{p.title}</h3>
              <p style={{ color: "#6B678F", fontSize: "13px", lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestPreviewSection() {
  const archetypes = [
    { key: "lo-au", name: "Lo Au", color: "#7C6FF7", desc: "Luon san sang cho dieu te nhat" },
    { key: "ne-tranh", name: "Ne Tranh", color: "#18B5B0", desc: "Tranh xung dot bang moi gia" },
    { key: "kiem-soat", name: "Kiem Soat", color: "#5B4FD4", desc: "Can chac chan moi thu" },
    { key: "hy-sinh", name: "Hy Sinh", color: "#B8B3FA", desc: "Dat nguoi khac len truoc" },
    { key: "tu-huy", name: "Tu Huy", color: "#FF6B6B", desc: "Pha hoai nhung dieu tot dep" },
    { key: "can-bang", name: "Can Bang", color: "#4CAF50", desc: "Dang tren hanh trinh tich hop" },
  ];
  return (
    <section style={{ padding: "5rem 0", background: "linear-gradient(180deg, #1C1A3E 0%, #2D2A5E 100%)" }}>
      <div className="container-main" style={{ textAlign: "center" }}>
        <p style={{ color: "#18B5B0", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Bai test mien phi</p>
        <h2 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.3 }}>
          Ban Do Noi Tam - 6 mo thuc cot loi
        </h2>
        <p style={{ color: "#C4C0E0", maxWidth: "500px", margin: "0 auto 3rem", lineHeight: 1.75 }}>
          20 cau hoi. 15 phut. Ket qua giup ban nhin thay mo thuc vo thuc dang dieu khien cuoc doi minh.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem", maxWidth: "720px", margin: "0 auto 3rem" }}>
          {archetypes.map((a) => (
            <div key={a.key} style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid " + a.color + "40", borderRadius: "12px", padding: "1.25rem", textAlign: "center" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: a.color + "20", border: "2px solid " + a.color, margin: "0 auto 0.75rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: a.color }} />
              </div>
              <div style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "14px", marginBottom: "4px" }}>{a.name}</div>
              <div style={{ color: "#9B96C0", fontSize: "11px", lineHeight: 1.5 }}>{a.desc}</div>
            </div>
          ))}
        </div>
        <Link href="/kham-pha/ban-do-noi-tam" style={{ display: "inline-block", background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)", color: "white", padding: "16px 36px", borderRadius: "999px", fontSize: "16px", fontWeight: 700, textDecoration: "none", fontFamily: "'Be Vietnam Pro', sans-serif" }}>
          Bat dau kham pha
        </Link>
      </div>
    </section>
  );
}

function JourneySection() {
  const steps = [
    { number: "01", title: "Kham pha mo thuc", desc: "Lam bai test Ban Do Noi Tam. Nhan ket qua mien phi ve mo thuc cot loi cua ban.", cta: "Lam bai test", href: "/kham-pha/ban-do-noi-tam", color: "#7C6FF7" },
    { number: "02", title: "Di sau vao hieu", desc: "Khoa hoc Ban Do Noi Tam Chuyen Sau - tai sao mo thuc hinh thanh va cach thay doi tu goc re.", cta: "Xem khoa hoc", href: "/hanh-trinh/ban-do-noi-tam-chuyen-sau", color: "#18B5B0" },
    { number: "03", title: "Dong hanh chuyen hoa", desc: "Coaching 1-1 voi Hanna - khong phai tu van, ma la dong hanh thuc su trong qua trinh thay doi.", cta: "Tim hieu them", href: "/lien-he", color: "#5B4FD4" },
  ];
  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#7C6FF7", fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Hanh trinh chuyen hoa</p>
          <h2 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, maxWidth: "560px", margin: "0 auto", lineHeight: 1.3 }}>
            Khong phai mot bai test. Day la bat dau cua mot hanh trinh.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {steps.map((step) => (
            <div key={step.number} style={{ backgroundColor: "white", borderRadius: "16px", padding: "2rem", border: "1px solid #E8E3F0" }}>
              <div style={{ fontSize: "3rem", fontWeight: 900, color: step.color, opacity: 0.15, fontFamily: "'Be Vietnam Pro', sans-serif", lineHeight: 1, marginBottom: "1rem" }}>{step.number}</div>
              <h3 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>{step.title}</h3>
              <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.7, marginBottom: "1.5rem" }}>{step.desc}</p>
              <Link href={step.href} style={{ color: step.color, fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>{step.cta} &rarr;</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { quote: "Toi da doc nhieu sach tam ly nhung khong co gi giup toi nhin thay ban than ro nhu bai test nay.", name: "Minh Trang", role: "Quan ly marketing, 32 tuoi", archetype: "Mo thuc: Ne Tranh", color: "#18B5B0" },
    { quote: "Ket qua khong chi mo ta toi - no giai thich tai sao toi lai nhu vay. Phan vet thuong cot loi khien toi bat khoc.", name: "Hoang Nam", role: "Giam doc dieu hanh, 38 tuoi", archetype: "Mo thuc: Kiem Soat", color: "#5B4FD4" },
    { quote: "Sau 3 thang coaching voi Hanna, toi khong con tu pha hoai nhung dieu tot dep trong cuoc song nua.", name: "Thu Ha", role: "Chuyen gia tu van, 35 tuoi", archetype: "Mo thuc: Tu Huy", color: "#FF6B6B" },
  ];
  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#1C1A3E" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, lineHeight: 1.3 }}>
            Ho da nhin thay dieu minh chua tung thay
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {testimonials.map((t) => (
            <div key={t.name} style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "2rem" }}>
              <p style={{ color: "#C4C0E0", fontSize: "15px", lineHeight: 1.75, marginBottom: "1.5rem", fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: t.color + "25", border: "2px solid " + t.color, flexShrink: 0 }} />
                <div>
                  <div style={{ color: "white", fontWeight: 600, fontSize: "14px" }}>{t.name}</div>
                  <div style={{ color: "#9B96C0", fontSize: "12px" }}>{t.role}</div>
                  <div style={{ color: t.color, fontSize: "11px", marginTop: "2px", fontWeight: 600 }}>{t.archetype}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section style={{ padding: "6rem 0", background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)", textAlign: "center" }}>
      <div className="container-main">
        <h2 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.25 }}>
          Mo thuc nao dang dieu khien ban?
        </h2>
        <p style={{ color: "#C4C0E0", marginBottom: "2.5rem", fontSize: "16px", lineHeight: 1.75 }}>
          Bai test mien phi. 15 phut. Ket qua thay doi cach ban nhin chinh minh.
        </p>
        <Link
          href="/kham-pha/ban-do-noi-tam"
          style={{ display: "inline-block", background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)", color: "white", padding: "18px 44px", borderRadius: "999px", fontSize: "18px", fontWeight: 700, textDecoration: "none", fontFamily: "'Be Vietnam Pro', sans-serif", boxShadow: "0 8px 32px rgba(124,111,247,0.4)" }}
        >
          Lam bai test ngay - Mien phi
        </Link>
      </div>
    </section>
  );
}
