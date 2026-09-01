import Link from "next/link";

const pillars = [
  {
    icon: "🧠",
    title: "Khoa học thần kinh",
    subtitle: "Neuroscience",
    desc: "Não bộ tạo ra các đường mòn thần kinh qua lặp lại. Những mô thức hành vi của bạn không phải 'tính cách cố định' — chúng là các đường mòn có thể được nhận diện và thay đổi.",
    color: "#7C6FF7",
  },
  {
    icon: "🔄",
    title: "Tâm lý học hành vi",
    subtitle: "Behavioral Psychology",
    desc: "Hành vi không đến từ ý chí mà đến từ hệ thống. Chúng tôi dùng khoa học hành vi để thiết kế môi trường và vòng phản hồi giúp hành vi mới trở thành tự nhiên.",
    color: "#18B5B0",
  },
  {
    icon: "🗺️",
    title: "Hệ thống nhận diện bản thân",
    subtitle: "Enneagram & Type Systems",
    desc: "Không phải gán nhãn hay phân loại. Bản Đồ Nội Tâm dùng các hệ thống này như ngôn ngữ để giúp bạn hiểu cơ chế bên trong — động lực cốt lõi, nỗi sợ ẩn, và phản ứng tự động.",
    color: "#E8A87C",
  },
  {
    icon: "🌿",
    title: "Thân-tâm kết nối",
    subtitle: "Somatic Awareness",
    desc: "Cơ thể giữ ký ức mà tâm trí không nhớ. Somatic work giúp bạn tiếp cận và xử lý những gì nằm sâu hơn lý trí — nơi phần lớn mô thức hành vi được lưu trữ.",
    color: "#7BAE7F",
  },
];

const steps = [
  {
    num: "1",
    title: "Nhận diện mô thức",
    desc: "Bài test Bản Đồ Nội Tâm giúp bạn nhìn thấy các mô thức hành vi cốt lõi — cách bạn phản ứng với áp lực, xây dựng quan hệ, ra quyết định.",
    time: "15 phút",
  },
  {
    num: "2",
    title: "Hiểu gốc rễ",
    desc: "Mỗi mô thức có lịch sử. Chúng tôi dẫn dắt bạn hiểu tại sao mô thức đó hình thành và cơ chế tâm lý phía sau nó.",
    time: "Tự học / Coaching",
  },
  {
    num: "3",
    title: "Thiết kế hành vi mới",
    desc: "Dựa trên khoa học thần kinh, chúng tôi cùng bạn thiết kế các thực hành cụ thể phù hợp với não bộ — không phải ý chí thuần túy.",
    time: "Lộ trình cá nhân",
  },
  {
    num: "4",
    title: "Củng cố và duy trì",
    desc: "Thay đổi cần thời gian và lặp lại. Hệ thống AIMIND được thiết kế để đồng hành dài hạn — không phải 'fix nhanh' rồi biến mất.",
    time: "Dài hạn",
  },
];

export default function PhuongPhapPage() {
  return (
    <>
      <main style={{ flex: 1 }}>
        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)",
            padding: "7rem 0 5rem",
            textAlign: "center",
          }}
        >
          <div className="container-main" style={{ maxWidth: "760px" }}>
            <div
              style={{
                display: "inline-block",
                background: "rgba(124,111,247,0.15)",
                border: "1px solid rgba(124,111,247,0.3)",
                borderRadius: "999px",
                padding: "6px 20px",
                color: "#B8B3FA",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                marginBottom: "2rem",
              }}
            >
              Phương Pháp
            </div>
            <h1
              style={{
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              Không phải truyền cảm hứng.
              <br />
              <span style={{ color: "#7C6FF7" }}>Đây là khoa học.</span>
            </h1>
            <p style={{ color: "#C4C0E0", fontSize: "17px", lineHeight: 1.8 }}>
              Phương pháp AIMIND được xây dựng từ nhiều thập kỷ nghiên cứu về
              khoa học thần kinh, tâm lý học hành vi và các hệ thống nhận diện bản thân.
              Không phải cảm xúc nhất thời — mà là thay đổi có nền tảng.
            </p>
          </div>
        </section>

        {/* Four Pillars */}
        <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE" }}>
          <div className="container-main">
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <h2
                style={{
                  color: "#1C1A3E",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 800,
                  marginBottom: "0.75rem",
                }}
              >
                Bốn trụ cột khoa học
              </h2>
              <p style={{ color: "#6B678F", fontSize: "15px" }}>
                Mọi công cụ của AIMIND đều được xây dựng trên bốn nền tảng này
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {pillars.map((p) => (
                <div
                  key={p.title}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    padding: "2rem",
                    border: "1px solid #E8E3F0",
                    borderTop: `3px solid ${p.color}`,
                  }}
                >
                  <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{p.icon}</div>
                  <div style={{ color: p.color, fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "4px" }}>
                    {p.subtitle}
                  </div>
                  <h3
                    style={{
                      color: "#1C1A3E",
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      fontWeight: 700,
                      fontSize: "18px",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.8 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The AIMIND Process */}
        <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
          <div className="container-main" style={{ maxWidth: "800px" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <h2
                style={{
                  color: "#1C1A3E",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 800,
                  marginBottom: "0.75rem",
                }}
              >
                Hành trình 4 bước
              </h2>
              <p style={{ color: "#6B678F", fontSize: "15px" }}>
                Từ nhận diện đến chuyển hóa thực tế
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.5rem" }}>
              {steps.map((s) => (
                <div
                  key={s.num}
                  style={{
                    display: "flex",
                    gap: "2rem",
                    alignItems: "flex-start",
                    backgroundColor: "#F8F4EE",
                    borderRadius: "16px",
                    padding: "2rem",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      fontWeight: 800,
                      fontSize: "18px",
                      flexShrink: 0,
                    }}
                  >
                    {s.num}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap" as const, gap: "0.5rem" }}>
                      <h3
                        style={{
                          color: "#1C1A3E",
                          fontFamily: "'Be Vietnam Pro', sans-serif",
                          fontWeight: 700,
                          fontSize: "17px",
                        }}
                      >
                        {s.title}
                      </h3>
                      <span
                        style={{
                          background: "rgba(124,111,247,0.1)",
                          color: "#7C6FF7",
                          padding: "3px 12px",
                          borderRadius: "999px",
                          fontSize: "12px",
                          fontWeight: 600,
                        }}
                      >
                        {s.time}
                      </span>
                    </div>
                    <p style={{ color: "#6B678F", fontSize: "14px", lineHeight: 1.75 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why different */}
        <section
          style={{
            padding: "5rem 0",
            background: "linear-gradient(135deg, #1C1A3E 0%, #2D2A5E 100%)",
          }}
        >
          <div className="container-main" style={{ maxWidth: "760px" }}>
            <h2
              style={{
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                marginBottom: "3rem",
                textAlign: "center",
              }}
            >
              AIMIND khác gì với coaching thông thường?
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }}
            >
              {[
                { label: "Coaching thông thường", items: ["Dựa vào cảm hứng", "Tập trung vào mục tiêu bên ngoài", "Fix triệu chứng", "Kết quả phụ thuộc vào ý chí"], dark: false },
                { label: "Phương pháp AIMIND", items: ["Dựa vào khoa học thần kinh", "Thay đổi mô thức bên trong", "Xử lý gốc rễ", "Thiết kế hệ thống hành vi"], dark: true },
              ].map((col) => (
                <div
                  key={col.label}
                  style={{
                    backgroundColor: col.dark ? "rgba(124,111,247,0.15)" : "rgba(255,255,255,0.05)",
                    border: col.dark ? "1px solid rgba(124,111,247,0.4)" : "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "16px",
                    padding: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      color: col.dark ? "#B8B3FA" : "#6B678F",
                      fontSize: "12px",
                      fontWeight: 700,
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.06em",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {col.label}
                  </div>
                  {col.items.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.75rem",
                        color: col.dark ? "#E8E3F0" : "#6B678F",
                        fontSize: "14px",
                      }}
                    >
                      <span>{col.dark ? "✓" : "—"}</span>
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "5rem 0", backgroundColor: "#F8F4EE", textAlign: "center" }}>
          <div className="container-main">
            <h2
              style={{
                color: "#1C1A3E",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                marginBottom: "1rem",
              }}
            >
              Trải nghiệm phương pháp này
            </h2>
            <p style={{ color: "#6B678F", marginBottom: "2rem", fontSize: "16px" }}>
              Bài test Bản Đồ Nội Tâm là điểm khởi đầu — miễn phí, 15 phút
            </p>
            <Link
              href="/kham-pha/ban-do-noi-tam"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #7C6FF7 0%, #5B4FD4 100%)",
                color: "white",
                padding: "16px 40px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "'Be Vietnam Pro', sans-serif",
              }}
            >
              Làm bài test miễn phí
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
