// Next.js App Router: hiện khi ket-qua page đang load

export default function LoadingKetQua() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F8F4EE",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            width: "56px", height: "56px", borderRadius: "50%",
            border: "3px solid #E8E3F0", borderTopColor: "#7C6FF7",
            margin: "0 auto 1.5rem",
            animation: "spin 0.8s linear infinite",
          }}
        />
        <p style={{ color: "#9B96C0", fontSize: "15px" }}>Đang tải kết quả...</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
}
