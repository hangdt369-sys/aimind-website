import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const sections = [
  {
    title: "1. Thông tin chúng tôi thu thập",
    content: `Khi bạn sử dụng website AIMIND, chúng tôi có thể thu thập các thông tin sau:

• Thông tin bạn chủ động cung cấp: họ tên, địa chỉ email khi đăng ký hoặc liên hệ.
• Kết quả bài test Bản Đồ Nội Tâm: archetype, câu trả lời và nhóm mô thức của bạn.
• Thông tin kỹ thuật: loại thiết bị, trình duyệt, địa chỉ IP và hành vi sử dụng website (qua Google Analytics hoặc công cụ tương tự).`,
  },
  {
    title: "2. Mục đích sử dụng thông tin",
    content: `Thông tin thu thập được sử dụng để:

• Cung cấp và cải thiện dịch vụ tốt hơn cho bạn.
• Gửi nội dung insight hàng tuần nếu bạn đã đăng ký (có thể hủy bất kỳ lúc nào).
• Thông báo về các khóa học, sự kiện hoặc chương trình coaching mới.
• Phân tích cách người dùng tương tác với website để cải thiện trải nghiệm.`,
  },
  {
    title: "3. Chia sẻ thông tin",
    content: `AIMIND cam kết không bán, cho thuê hoặc chia sẻ thông tin cá nhân của bạn với bên thứ ba vì mục đích thương mại.

Chúng tôi chỉ chia sẻ thông tin trong các trường hợp:
• Với các đối tác cung cấp dịch vụ (email, lưu trữ) để vận hành website.
• Khi có yêu cầu pháp lý từ cơ quan có thẩm quyền.`,
  },
  {
    title: "4. Bảo mật dữ liệu",
    content: `Chúng tôi áp dụng các biện pháp bảo mật tiêu chuẩn để bảo vệ thông tin của bạn, bao gồm mã hóa HTTPS và kiểm soát truy cập nghiêm ngặt.

Tuy nhiên, không có hệ thống nào hoàn toàn an toàn. Nếu phát hiện sự cố bảo mật ảnh hưởng đến dữ liệu của bạn, chúng tôi sẽ thông báo trong vòng 72 giờ.`,
  },
  {
    title: "5. Quyền của bạn",
    content: `Bạn có quyền:

• Yêu cầu xem thông tin chúng tôi đang lưu trữ về bạn.
• Yêu cầu chỉnh sửa hoặc xóa thông tin của bạn.
• Hủy đăng ký nhận email bất kỳ lúc nào bằng cách nhấn link "Hủy đăng ký" trong mỗi email.
• Khiếu nại nếu bạn cho rằng quyền riêng tư của mình bị xâm phạm.

Để thực hiện các quyền này, liên hệ: aimind.hcm@gmail.com`,
  },
  {
    title: "6. Cookie",
    content: `Website sử dụng cookie để cải thiện trải nghiệm và phân tích lưu lượng truy cập. Bạn có thể tắt cookie trong cài đặt trình duyệt, tuy nhiên một số tính năng có thể không hoạt động đúng.`,
  },
  {
    title: "7. Thay đổi chính sách",
    content: `AIMIND có thể cập nhật Chính sách Bảo mật này theo thời gian. Khi có thay đổi quan trọng, chúng tôi sẽ thông báo qua email hoặc thông báo nổi bật trên website. Ngày cập nhật gần nhất sẽ được hiển thị phía trên.`,
  },
];

export default function ChinhSachBaoMatPage() {
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
              Chính sách Bảo mật
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
                AIMIND (vận hành bởi Hanna Dang) cam kết bảo vệ quyền riêng tư của bạn.
                Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin
                khi bạn sử dụng website aimind.com.vn.
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
                  <strong style={{ color: "#1C1A3E" }}>Liên hệ:</strong> Mọi thắc mắc về chính sách bảo mật,
                  vui lòng gửi email đến <strong>aimind.hcm@gmail.com</strong> hoặc nhắn tin qua Zalo <strong>0848270819</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <F