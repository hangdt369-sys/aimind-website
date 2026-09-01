"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const practices: Record<string, {
  name: string;
  color: string;
  icon: string;
  tagline: string;
  morning: { prompt: string; subtext: string }[];
  pattern: { prompt: string; subtext: string }[];
  evening: { prompt: string; subtext: string }[];
  reminder: string;
}> = {
  "lo-au": {
    name: "Xu hướng Lo Âu",
    color: "#7C6FF7",
    icon: "🌊",
    tagline: "Học cách cảm thấy an toàn từ bên trong",
    morning: [
      { prompt: "Sáng nay tôi đang mang theo lo lắng nào?", subtext: "Viết ra — không phán xét, chỉ quan sát." },
      { prompt: "Niềm lo này dựa trên điều đang thực sự xảy ra, hay trên cách tôi đang diễn giải tình huống?", subtext: "Phân biệt dữ kiện hiện tại với điều mình đang dự đoán." },
      { prompt: "Hôm nay tôi cần gì từ chính mình?", subtext: "Không phải từ người khác — từ chính mình." },
    ],
    pattern: [
      { prompt: "Hôm nay tôi có kiểm tra tin nhắn/phản hồi quá nhiều không? Khi nào?", subtext: "Ghi lại thời điểm và cảm giác lúc đó." },
      { prompt: "Điều gì kích hoạt cảm giác lo lắng/bất an hôm nay?", subtext: "Người? Tình huống? Câu nói?" },
      { prompt: "Khi lo lắng bùng lên, tôi đã phản ứng thế nào?", subtext: "Quan sát hành vi — không tự trách." },
    ],
    evening: [
      { prompt: "Có khoảnh khắc nào hôm nay tôi cảm thấy an toàn mà không cần ai xác nhận?", subtext: "Dù nhỏ — ghi lại." },
      { prompt: "Điều tôi tự hào về bản thân hôm nay là gì?", subtext: "Ít nhất một điều." },
      { prompt: "Ngày mai, tôi muốn thử điều gì khác đi?", subtext: "Một hành động nhỏ, cụ thể." },
    ],
    reminder: "Khi cần được trấn an, hãy thử quan sát cả điều đang xảy ra và điều bạn đang dự đoán trước khi phản ứng.",
  },
  "ne-tranh": {
    name: "Xu hướng Né Tránh",
    color: "#18B5B0",
    icon: "🏔️",
    tagline: "Học cách kết nối mà không mất đi chính mình",
    morning: [
      { prompt: "Có cuộc trò chuyện hay tình huống nào tôi đang né tránh không?", subtext: "Viết ra — chỉ quan sát, không ép buộc phải làm gì." },
      { prompt: "Hôm nay tôi cần bao nhiêu không gian riêng để nạp lại năng lượng?", subtext: "Lắng nghe cơ thể — không so sánh với người khác." },
      { prompt: "Có người nào tôi muốn kết nối hôm nay — dù chỉ một tin nhắn ngắn?", subtext: "Không ép — chỉ chú ý." },
    ],
    pattern: [
      { prompt: "Hôm nay khi nào tôi cảm thấy muốn rút lui? Điều gì xảy ra trước đó?", subtext: "Trigger là gì: lời nói, cảm giác, tình huống?" },
      { prompt: "Tôi có bận rộn để né tránh cảm xúc nào không?", subtext: "Công việc, điện thoại, hay thứ gì khác?" },
      { prompt: "Khi rút lui, tôi cảm thấy thế nào — nhẹ nhõm hay cô đơn?", subtext: "Cả hai đều có thể đúng." },
    ],
    evening: [
      { prompt: "Có khoảnh khắc nào hôm nay tôi chọn kết nối thay vì rút lui?", subtext: "Dù nhỏ — ghi lại." },
      { prompt: "Điều gì trong ngày hôm nay khiến tôi cảm thấy an toàn?", subtext: "Môi trường, người, hoạt động." },
      { prompt: "Ngày mai, tôi muốn thử mở lòng với điều gì?", subtext: "Một bước nhỏ, không ép." },
    ],
    reminder: "Kết nối không có nghĩa là mất đi chính mình. Bạn có thể ở bên người khác và vẫn là bạn.",
  },
  "kiem-soat": {
    name: "Xu hướng Kiểm Soát",
    color: "#5B4FD4",
    icon: "⚡",
    tagline: "Học cách tin tưởng — vào người khác và vào bản thân",
    morning: [
      { prompt: "Hôm nay tôi đang cố kiểm soát điều gì?", subtext: "Liệt kê ra — không phán xét." },
      { prompt: "Điều gì tôi có thể buông xuống hôm nay — dù chỉ một chút?", subtext: "Chọn thứ nhỏ nhất." },
      { prompt: "Sáng nay tôi cảm thấy thế nào trong cơ thể — căng hay thư giãn?", subtext: "Chú ý từ cổ, vai, hàm." },
    ],
    pattern: [
      { prompt: "Khi có gì đó không theo kế hoạch, tôi phản ứng thế nào?", subtext: "Hành vi cụ thể — không phải ý định." },
      { prompt: "Hôm nay tôi có tự phê phán mình nặng hơn mức cần thiết không?", subtext: "Lần nào? Về điều gì?" },
      { prompt: "Tôi có giao việc cho ai hôm nay không? Cảm giác thế nào?", subtext: "Khó hay dễ — và tại sao?" },
    ],
    evening: [
      { prompt: "Điều gì hôm nay diễn ra tốt dù tôi không kiểm soát hoàn toàn?", subtext: "Bằng chứng rằng buông cũng ổn." },
      { prompt: "Tôi đã tự khen mình chưa — dù nhỏ?", subtext: "Nếu chưa, làm ngay bây giờ." },
      { prompt: "Ngày mai, tôi muốn tin tưởng điều gì?", subtext: "Một người, một tình huống, hay chính mình." },
    ],
    reminder: "Lập kế hoạch có thể hữu ích. Hãy quan sát khi nào sự chuẩn bị đang hỗ trợ bạn và khi nào nó khiến bạn khó linh hoạt.",
  },
  "hy-sinh": {
    name: "Xu hướng Hy Sinh",
    color: "#E67E74",
    icon: "🫶",
    tagline: "Học cách cho — và học cách nhận",
    morning: [
      { prompt: "Hôm nay nhu cầu của tôi là gì?", subtext: "Không phải nhu cầu của người khác — của tôi." },
      { prompt: "Có điều gì tôi cần nói không — nhưng đang ngại?", subtext: "Ghi ra đây trước. Không cần phải nói ngay." },
      { prompt: "Tôi cho phép mình có điều gì tốt hôm nay?", subtext: "Dù nhỏ — một bữa ăn ngon, một khoảng yên tĩnh." },
    ],
    pattern: [
      { prompt: "Hôm nay tôi có nói không với điều gì không?", subtext: "Nếu chưa — tại sao?" },
      { prompt: "Tôi có làm điều gì vì thực sự muốn, hay vì cảm thấy phải làm?", subtext: "Phân biệt: chọn vs bắt buộc." },
      { prompt: "Khi tôi từ chối ai đó, tôi cảm thấy gì?", subtext: "Tội lỗi, nhẹ nhõm, hay cả hai?" },
    ],
    evening: [
      { prompt: "Hôm nay tôi đã cho bản thân mình điều gì?", subtext: "Thời gian, sự chú ý, sự tử tế." },
      { prompt: "Có ai cho tôi điều gì hôm nay mà tôi đã đón nhận không?", subtext: "Đón nhận cũng là kỹ năng." },
      { prompt: "Ngày mai, điều gì tôi muốn ưu tiên cho chính mình?", subtext: "Một điều cụ thể." },
    ],
    reminder: "Bạn không thể tiếp tục rót từ một cái cốc rỗng. Chăm sóc bản thân không phải ích kỷ — đó là điều kiện để bạn có thể tiếp tục yêu thương người khác.",
  },
  "tu-huy": {
    name: "Xu hướng Tự Hủy",
    color: "#9B59B6",
    icon: "🔮",
    tagline: "Quan sát những lúc bạn trì hoãn, mất đà hoặc làm gián đoạn tiến trình",
    morning: [
      { prompt: "Hôm nay có điều tốt nào đang đến gần mà tôi cảm thấy khó đón nhận?", subtext: "Quan sát sự kháng cự — không phán xét." },
      { prompt: "Tôi tin mình xứng đáng có điều gì hôm nay?", subtext: "Dù nhỏ — ghi ra." },
      { prompt: "Có việc quan trọng nào tôi đang trì hoãn hoặc làm gián đoạn không?", subtext: "Chỉ ghi nhận hành vi đang xảy ra, chưa cần kết luận nguyên nhân." },
    ],
    pattern: [
      { prompt: "Khi có điều tích cực xảy ra, phản ứng đầu tiên của tôi là gì?", subtext: "Đón nhận, nghi ngờ, chững lại hay đổi hướng?" },
      { prompt: "Hôm nay tôi có tự làm khó mình ở đâu không?", subtext: "Hành vi cụ thể." },
      { prompt: "Tôi có đang nghĩ rằng mình chưa đủ tốt hoặc không xứng đáng không?", subtext: "Ghi lại suy nghĩ như một điều để quan sát, không phải sự thật." },
    ],
    evening: [
      { prompt: "Điều tích cực nào hôm nay tôi đã cho phép mình tiếp nhận?", subtext: "Dù nhỏ — chỉ cần ghi nhận." },
      { prompt: "Tôi đã đối xử với mình hôm nay như một người bạn hay như kẻ thù?", subtext: "Trung thực — không tự trách thêm." },
      { prompt: "Ngày mai, tôi muốn để một điều tốt nào đi vào?", subtext: "Đặt ý định cụ thể." },
    ],
    reminder: "Trì hoãn hoặc mất đà có thể xuất phát từ nhiều nguyên nhân. Hãy bắt đầu bằng việc quan sát điều xảy ra ngay trước thời điểm tiến trình bị gián đoạn.",
  },
  "can-bang": {
    name: "Xu hướng Cân Bằng",
    color: "#27AE60",
    icon: "🌿",
    tagline: "Quan sát khi nào bạn phản ứng linh hoạt và khi nào một xu hướng khác nổi bật",
    morning: [
      { prompt: "Hôm nay phản ứng nào của tôi phù hợp với hoàn cảnh?", subtext: "Không đánh giá — chỉ quan sát." },
      { prompt: "Mô thức nào tôi cảm thấy đang hoạt động nhiều nhất gần đây?", subtext: "Lo âu, né tránh, kiểm soát, hy sinh, tự hủy?" },
      { prompt: "Điều gì đang giúp tôi ổn định nhất lúc này?", subtext: "Thói quen, người, môi trường?" },
    ],
    pattern: [
      { prompt: "Hôm nay tôi đã phản ứng tự động ở đâu — và có bắt được không?", subtext: "Khoảng dừng giữa kích hoạt và phản ứng." },
      { prompt: "Có khoảnh khắc nào hôm nay tôi cân nhắc trước khi phản ứng?", subtext: "Ghi lại tình huống và lựa chọn của bạn." },
      { prompt: "Tôi có đang tự ép mình thay đổi quá nhanh không?", subtext: "Thay đổi cần nhất quán, không cần cường độ." },
    ],
    evening: [
      { prompt: "Điều tôi học được về bản thân hôm nay là gì?", subtext: "Một insight nhỏ cũng có giá trị." },
      { prompt: "Tôi đã tử tế với mình hôm nay chưa?", subtext: "Không phải hoàn hảo — tử tế." },
      { prompt: "Ngày mai, tôi muốn tiếp tục điều gì?", subtext: "Nhất quán quan trọng hơn hoàn hảo." },
    ],
    reminder: "Điểm Cân Bằng không có nghĩa mọi phản ứng đều cân bằng. Hãy tiếp tục quan sát sự khác nhau giữa từng bối cảnh.",
  },
};

type Session = "morning" | "pattern" | "evening";

function PracticeContent() {
  const searchParams = useSearchParams();
  const moThuc = searchParams.get("mo-thuc") ?? "can-bang";
  const practice = practices[moThuc] ?? practices["can-bang"];
  const [session, setSession] = useState<Session>("morning");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showGuide, setShowGuide] = useState(false);

  const sessionData = {
    morning: { label: "Buổi Sáng", emoji: "🌅", prompts: practice.morning },
    pattern: { label: "Quan Sát Mô Thức", emoji: "🔍", prompts: practice.pattern },
    evening: { label: "Buổi Tối", emoji: "🌙", prompts: practice.evening },
  };

  const currentSession = sessionData[session];

  return (
    <>
      <main style={{ flex: 1, backgroundColor: "#F8F4EE" }}>

        {/* Hero */}
        <section style={{ background: "linear-gradient(135deg, #1C1A3E 0%, #2D2A5E 100%)", padding: "4rem 0 3rem" }}>
          <div className="container-main" style={{ maxWidth: "700px", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{practice.icon}</div>
            <div style={{
              display: "inline-block",
              backgroundColor: `${practice.color}20`,
              border: `1px solid ${practice.color}40`,
              borderRadius: "999px",
              padding: "4px 16px",
              fontSize: "12px",
              fontWeight: 700,
              color: "#B8B3FA",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              marginBottom: "1rem",
            }}>
              Công cụ thực hành miễn phí
            </div>
            <h1 style={{
              color: "white",
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 800,
              marginBottom: "0.5rem",
              lineHeight: 1.2,
            }}>
              Nhật Ký Quan Sát Mô Thức
            </h1>
            <p style={{ color: "#B8B3FA", fontSize: "15px", marginBottom: "0.5rem", fontWeight: 600 }}>
              Mô thức: {practice.name}
            </p>
            <p style={{ color: "#9B96C0", fontSize: "14px", fontStyle: "italic" }}>&ldquo;{practice.tagline}&rdquo;</p>

            <button
              onClick={() => setShowGuide(!showGuide)}
              style={{
                marginTop: "1.5rem",
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#C4C0E0",
                padding: "8px 20px",
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {showGuide ? "Ẩn hướng dẫn" : "📖 Xem hướng dẫn sử dụng"}
            </button>
          </div>
        </section>

        {/* Hướng dẫn sử dụng */}
        {showGuide && (
          <section style={{ backgroundColor: "#1C1A3E", padding: "0 0 2rem" }}>
            <div className="container-main" style={{ maxWidth: "700px" }}>
              <div style={{
                backgroundColor: "rgba(124,111,247,0.1)",
                border: "1px solid rgba(124,111,247,0.2)",
                borderRadius: "16px",
                padding: "2rem",
              }}>
                <h2 style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem" }}>
                  📖 Hướng dẫn sử dụng
                </h2>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: "1rem" }}>
                  {[
                    { icon: "⏰", title: "Dùng 3 lần mỗi ngày", desc: "Buổi sáng (trước khi bắt đầu ngày), giữa ngày (quan sát mô thức), buổi tối (nhìn lại)." },
                    { icon: "✍️", title: "Viết thật — không cần hoàn hảo", desc: "Không ai đọc câu trả lời của bạn. Viết những gì thực sự xuất hiện trong đầu — không phán xét, không chỉnh sửa." },
                    { icon: "🔁", title: "Làm mỗi ngày trong 21 ngày", desc: "Thay đổi không đến từ hiểu biết — mà từ quan sát lặp đi lặp lại. 21 ngày để nhận ra khuôn mẫu rõ hơn." },
                    { icon: "📌", title: "Không bắt buộc phải làm đủ", desc: "Nếu chỉ làm được buổi sáng — ổn. Điều quan trọng là nhất quán, không phải hoàn hảo." },
                    { icon: "💾", title: "Lưu lại câu trả lời của bạn", desc: "Sao chép câu trả lời vào note/journal riêng để đọc lại sau. Công cụ này không lưu dữ liệu của bạn." },
                  ].map((item) => (
                    <div key={item.title} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{item.icon}</span>
                      <div>
                        <p style={{ color: "white", fontWeight: 600, fontSize: "14px", marginBottom: "2px" }}>{item.title}</p>
                        <p style={{ color: "#9B96C0", fontSize: "13px", lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Session tabs */}
        <div style={{ backgroundColor: "white", borderBottom: "1px solid #E8E3F0", position: "sticky" as const, top: 0, zIndex: 10 }}>
          <div className="container-main" style={{ maxWidth: "700px", display: "flex", gap: 0 }}>
            {(Object.entries(sessionData) as [Session, typeof sessionData[Session]][]).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setSession(key)}
                style={{
                  flex: 1,
                  padding: "1rem 0.5rem",
                  border: "none",
                  borderBottom: session === key ? `3px solid ${practice.color}` : "3px solid transparent",
                  backgroundColor: "transparent",
                  color: session === key ? practice.color : "#9B96C0",
                  fontWeight: session === key ? 700 : 500,
                  fontSize: "13px",
                  cursor: "pointer",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  transition: "all 0.2s",
                }}
              >
                {val.emoji} {val.label}
              </button>
            ))}
          </div>
        </div>

        {/* Practice prompts */}
        <section style={{ padding: "2.5rem 0 5rem" }}>
          <div className="container-main" style={{ maxWidth: "700px" }}>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.5rem" }}>
              {currentSession.prompts.map((item, idx) => {
                const key = `${session}-${idx}`;
                return (
                  <div
                    key={key}
                    style={{
                      backgroundColor: "white",
                      borderRadius: "16px",
                      padding: "1.75rem",
                      border: "1px solid #E8E3F0",
                      borderLeft: `4px solid ${practice.color}`,
                    }}
                  >
                    <p style={{
                      color: "#1C1A3E",
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      fontWeight: 700,
                      fontSize: "15px",
                      marginBottom: "0.35rem",
                      lineHeight: 1.5,
                    }}>
                      {idx + 1}. {item.prompt}
                    </p>
                    <p style={{ color: "#9B96C0", fontSize: "12px", marginBottom: "1rem", fontStyle: "italic" }}>
                      {item.subtext}
                    </p>
                    <textarea
                      value={answers[key] ?? ""}
                      onChange={(e) => setAnswers(prev => ({ ...prev, [key]: e.target.value }))}
                      placeholder="Viết câu trả lời của bạn ở đây..."
                      rows={4}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "10px",
                        border: "1px solid #E8E3F0",
                        fontSize: "14px",
                        color: "#1C1A3E",
                        backgroundColor: "#F8F4EE",
                        resize: "vertical" as const,
                        outline: "none",
                        lineHeight: 1.7,
                        fontFamily: "inherit",
                        boxSizing: "border-box" as const,
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Reminder */}
            <div style={{
              marginTop: "2rem",
              backgroundColor: `${practice.color}10`,
              border: `1px solid ${practice.color}25`,
              borderRadius: "14px",
              padding: "1.5rem",
              textAlign: "center" as const,
            }}>
              <p style={{ color: practice.color, fontSize: "13px", fontWeight: 700, marginBottom: "0.5rem", textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                Nhắc nhở
              </p>
              <p style={{ color: "#4A4570", fontSize: "15px", lineHeight: 1.8, fontStyle: "italic" }}>
                &ldquo;{practice.reminder}&rdquo;
              </p>
            </div>

            {/* CTA */}
            <div style={{ textAlign: "center" as const, marginTop: "2.5rem" }}>
              <p style={{ color: "#9B96C0", fontSize: "13px", marginBottom: "1rem" }}>
                Muốn đi sâu hơn vào mô thức của mình?
              </p>
              <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" as const }}>
                <Link
                  href="/hanh-trinh/ban-do-noi-tam-chuyen-sau"
                  style={{
                    display: "inline-block",
                    background: `linear-gradient(135deg, ${practice.color} 0%, #5B4FD4 100%)`,
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Xem khóa học chuyên sâu →
                </Link>
                <Link
                  href="/dong-hanh"
                  style={{
                    display: "inline-block",
                    backgroundColor: "white",
                    border: "1px solid #E8E3F0",
                    color: "#1C1A3E",
                    padding: "12px 24px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Đồng hành 1-1 với Hanna
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default function ThucHanhPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}><p style={{ color: "#9B96C0" }}>Đang tải...</p></div>}>
      <PracticeContent />
    </Suspense>
  );
}
