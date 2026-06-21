import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const sections = [
  {
    title: "1. Chấp nhận điều khoản",
    content: `Bằng cách truy cập và sử dụng website aimind.com.vn, bạn đồng ý bị ràng buộc bởi các Điều khoản Dịch vụ này. Nếu bạn không đồng ý, vui lòng không sử dụng website.`,
  },
  {
    title: "2. Dịch vụ cung cấp",
    content: `AIMIND cung cấp:

• Bài test Bản Đồ Nội Tâm miễn phí và kết quả phân tích.
• Nội dung bài viết, video và tài liệu về tâm lý hành vi.
• Khóa học trực tuyến Bản Đồ Nội Tâm Chuyên Sâu.
• Dịch vụ coaching 1-1 với Hanna Dang.`,
  },
  {
    title: "3. Sử dụng hợp lệ",
    content: `Bạn đồng ý sử dụng website cho mục đích cá nhân, không thương mại. Bạn không được:

• Sao chép, phân phối hoặc bán nội dung của AIMIND mà không có sự cho phép bằng văn bản.
• Sử dụng website để gây hại, quấy rối hoặc lừa đảo người khác.
• Cố gắng xâm phạm bảo mật của hệ thống.
• Thu thập dữ liệu người dùng khác từ website.`,
  },
  {
    title: "4. Thanh toán và hoàn tiền",
    content: `Khóa học và dịch vụ coaching có phí. Khi đăng ký:

• Học phí được thanh toán trước qua chuyển khoản ngân hàng.
• Sau khi xác nhận thanh toán, quyền truy cập sẽ được kích hoạt trong 24 giờ.

Chính sách hoàn tiền: Hoàn 100% trong vòng 7 ngày kể từ ngày mua nếu bạn chưa hoàn thành quá 2 module đầu tiên. Liên hệ aimind.hcm@gmail.com để yêu cầu hoàn tiền.`,
  },
  {
    title: "5. Quyền sở hữu trí tuệ",
    content: `Toàn bộ nội dung trên website — bao gồm văn bản, hình ảnh, video, thiết kế, framework Bản Đồ Nội Tâm — là tài sản của AIMIND và được bảo vệ bởi luật sở hữu trí tuệ Việt Nam.

Bạn được phép chia sẻ nội dung với điều kiện ghi rõ nguồn "AIMIND - aimind.com.vn".`,
  },
  {
    title: "6. Giới hạn trách nhiệm",
    content: `Nội dung trên AIMIND mang tính giáo dục và tham khảo, không thay thế tư vấn tâm lý lâm sàng hay điều trị y tế chuyên nghiệp.

AIMIND không chịu trách nhiệm cho:
• Các quyết định cá nhân bạn đưa ra dựa trên nội dung website.
• Gián đoạn dịch vụ do sự cố kỹ thuật ngoài tầm kiểm soát.`,
  },
  {
    title: "7. Thay đổi điều khoản",
    content: `AIMIND có quyền thay đổi các Điều khoản này bất kỳ lúc nào. Thay đổi quan trọng sẽ được thông báo qua email hoặc thông báo nổi bật trên website ít nhất 7 ngày trước khi có hiệu lực.`,
  },
  {
    title: "8. Luật áp dụng",
    content: `Các Điều khoản này chịu sự điều chỉnh của pháp luật Việt Nam. Mọi tranh chấp sẽ được giải quyết theo thẩm quyền của tòa án có thẩm quyền tại Việt Nam.`,
  },
];

export default function DieuKhoanPage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1, backgroundColor: "#F8F4EE", minHeight: "calc(100vh - 64px)" }}>
        {/* Header */}
        <section
          style={{
            background: "linear-gradient(135deg, #2D2A5E 0%, #1C1A3E 100%)",
            padding: "5rem 0 3rem",
            textAlign: "center",
          }}
        >
          <div className="container-main">
            <h1
              style={{
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "0.75rem",
              }}
            >
              Điều khoản Dịch vụ
            </h1>
            <p style={{ color: "#9B96C0", fontSize: "14px" }}>
              Cập nhật lần cuối: Tháng 1, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: "4rem 0" }}>
          <div className="container-main" style={{ maxWidth: "720px" }}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "3rem",
                border: "1px solid #E8E3F0",
              }}
            >
              <p
                style={{
                  color: "#4A4570",
                  fontSize: "15px",
                  lineHeight: 1.85,
                  marginBottom: "2.5rem",
                  paddingBottom: "2rem",
                  borderBottom: "1px solid #E8E3F0",
                }}
              >
                Vui lòng đọc kỹ các Điều khoản Dịch vụ này trước khi sử dụng website và dịch vụ của AIMIND.
                Chúng tôi cố gắng viết điều khoản bằng ngôn ngữ rõ ràng và dễ hiểu.
              </p>

              {sections.map((section) => (
                <div key={section.title} style={{ marginBottom: "2.5rem" }}>
                  <h2
                    style={{
                      color: "#1C1A3E",
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      fontWeight: 700,
                      fontSize: "17px",
                      marginBottom: "1rem",
                    }}
                  >
                    {section.title}
                  </h2>
                  <p
                    style={{
                      color: "#4A4570",
                      fontSize: "14px",
                      lineHeight: 1.9,
                      whiteSpace: "pre-line" as const,
                    }}
                  >
                    {section.content}
                  </p>
                </div>
              ))}

              <div
                style={{
                  backgroundColor: "#F8F4EE",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  marginTop: "2rem",
                }}
              >
                <p style={{ color: "#6B678F", fontSize: "13px", lineHeight: 1.75 }}>
                  <strong style={{ color: "#1C1A3E" }}>Câu hỏi?</strong> Liên hệ chúng tôi tại{" "}
                  <strong>aimind.hcm@gmail.com</strong> hoặc qua Facebook. Chúng tôi luôn sẵn sàng
                  giải thích rõ hơn về bất kỳ điều khoản nào.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
