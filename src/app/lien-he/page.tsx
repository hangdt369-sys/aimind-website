import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function LienHePage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1, backgroundColor: "#F8F4EE", minHeight: "calc(100vh - 64px)" }}>
        <section style={{ padding: "5rem 0", textAlign: "center" }}>
          <div className="container-main" style={{ maxWidth: "560px" }}>
            <h1 style={{ color: "#1C1A3E", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>Liʚn Hệ</h1>
            <p style={{ color: "#6B678F", fontSize: "16px", lineHeight: 1.75, marginBottom: "2.5rem" }}>
              Để ēng ký khóa học, đặt lịch coaching, hoặc có bất kỳ câu hỏi nào — hãy liên hệ trực tiếp với Hanna.
            </p>
            <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "2rem", border: "1px solid #E8E3F0", marginBottom: "1.5rem", textAlign: "left" as const }}>
              {[
                { icon: "“", label: "Facebook", value: "AIMIND Vietnam", href: "https://facebook.com" },
                { icon: "“", label: "Zalo", value: "Liên hệ qua Zalo", href: "#" },
                { icon: "“", label: "Email", value: "hello@aimind.com.vn", href: "mailto:hello@aimind.com.vn" },
              ].map((item) => (
                <a key={item.label} href={item.href} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", borderRadius: "10px", textDecoration: "none", marginBottom: "8px" }}>
                  <div>
                    <div style={{ color: "#9B96C0", fontSize: "12px" }}>{item.label}</div>
                    <div style={{ color: "#1C1A3E", fontWeight: 600, fontSize: "15px" }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
