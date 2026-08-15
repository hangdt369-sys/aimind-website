// Next.js App Router: hiện khi bai-viet page đang load

export default function LoadingBaiViet() {
  return (
    <div style={{ flex: 1 }}>
      {/* Hero skeleton */}
      <div style={{ background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)", padding: "6rem 0 4rem" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 1.25rem", textAlign: "center" }}>
          <div style={{ height: "14px", width: "100px", borderRadius: "999px", background: "rgba(255,255,255,0.1)", margin: "0 auto 1.5rem", animation: "pulse 1.5s ease-in-out infinite" }} />
          <div style={{ height: "44px", borderRadius: "8px", background: "rgba(255,255,255,0.1)", marginBottom: "0.75rem", animation: "pulse 1.5s ease-in-out infinite" }} />
          <div style={{ height: "20px", borderRadius: "8px", background: "rgba(255,255,255,0.07)", maxWidth: "70%", margin: "0 auto", animation: "pulse 1.5s ease-in-out infinite" }} />
        </div>
      </div>
      {/* Filter bar skeleton */}
      <div style={{ background: "white", borderBottom: "1px solid #E8E3F0", padding: "1.25rem 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.25rem", display: "flex", gap: "0.75rem" }}>
          {[80, 60, 120, 70, 110, 80].map((w, i) => (
            <div key={i} style={{ height: "30px", width: `${w}px`, borderRadius: "999px", background: "#F8F4EE", animation: "pulse 1.5s ease-in-out infinite" }} />
          ))}
        </div>
      </div>
      {/* Cards grid skeleton */}
      <div style={{ backgroundColor: "#F8F4EE", padding: "4rem 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.25rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{ background: "white", borderRadius: "16px", padding: "2rem", border: "1px solid #E8E3F0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <div style={{ height: "24px", width: "80px", borderRadius: "999px", background: "#F8F4EE", animation: "pulse 1.5s ease-in-out infinite" }} />
                  <div style={{ height: "16px", width: "50px", borderRadius: "6px", background: "#F8F4EE", animation: "pulse 1.5s ease-in-out infinite" }} />
                </div>
                <div style={{ height: "22px", borderRadius: "6px", background: "#F8F4EE", marginBottom: "0.5rem", animation: "pulse 1.5s ease-in-out infinite" }} />
                <div style={{ height: "22px", borderRadius: "6px", background: "#F8F4EE", marginBottom: "0.75rem", width: "80%", animation: "pulse 1.5s ease-in-out infinite" }} />
                <div style={{ height: "16px", borderRadius: "6px", background: "#F8F4EE", marginBottom: "0.4rem", animation: "pulse 1.5s ease-in-out infinite" }} />
                <div style={{ height: "16px", borderRadius: "6px", background: "#F8F4EE", width: "70%", animation: "pulse 1.5s ease-in-out infinite" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </div>
  );
}
