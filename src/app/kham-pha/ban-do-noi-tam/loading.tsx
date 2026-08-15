// Next.js App Router: hiện khi page chunk đang load

export default function LoadingBanDoNoiTam() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        backgroundColor: "#F8F4EE",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.25rem",
      }}
    >
      <div style={{ maxWidth: "560px", width: "100%", textAlign: "center" }}>
        <div
          style={{
            width: "72px", height: "72px", borderRadius: "20px",
            background: "linear-gradient(135deg, #E8E3F0 0%, #D4CFF0 100%)",
            margin: "0 auto 2rem", animation: "pulse 1.5s ease-in-out infinite",
          }}
        />
        <div style={{ height: "40px", borderRadius: "8px", background: "#E8E3F0", marginBottom: "1rem", animation: "pulse 1.5s ease-in-out infinite" }} />
        <div style={{ height: "20px", borderRadius: "8px", background: "#E8E3F0", maxWidth: "80%", margin: "0 auto 0.5rem", animation: "pulse 1.5s ease-in-out infinite" }} />
        <div style={{ height: "20px", borderRadius: "8px", background: "#E8E3F0", maxWidth: "60%", margin: "0 auto 2rem", animation: "pulse 1.5s ease-in-out infinite" }} />
        <div style={{ background: "white", border: "1px solid #E8E3F0", borderRadius: "16px", padding: "1.5rem", marginBottom: "2rem" }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} style={{ height: "16px", borderRadius: "6px", background: "#F8F4EE", marginBottom: "0.75rem", width: i === 4 ? "70%" : "100%", animation: "pulse 1.5s ease-in-out infinite" }} />
          ))}
        </div>
        <div style={{ height: "52px", borderRadius: "999px", background: "linear-gradient(135deg, #BDB8F5 0%, #9B94E0 100%)", animation: "pulse 1.5s ease-in-out infinite" }} />
        <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }`}</style>
      </div>
    </div>
  );
}
