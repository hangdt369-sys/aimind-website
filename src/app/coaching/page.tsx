import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coaching 1:1 & Group — Đồng hành thay đổi thật sự | AIMIND',
  description:
    'Coaching 1:1 và Group cùng Hanna Dang — đồng hành thật sự qua Mind Test, phân tích sâu và lộ trình cá nhân hóa.',
};

const packages = [
  {
    title: '1:1 Coaching',
    color: '#7C6FF7',
    icon: '🤝',
    description:
      'Làm việc trực tiếp 1-1 với Hanna — đi sâu vào mô thức cụ thể của bạn',
    details: [
      '4 buổi coaching cá nhân (60 phút/buổi)',
      'Phân tích Mind Test chuyên sâu',
      'Lộ trình thay đổi cá nhân hóa',
      'Hỗ trợ qua messenger giữa các buổi',
    ],
  },
  {
    title: 'Group Coaching',
    color: '#18B5B0',
    icon: '👥',
    description:
      'Cùng 4-6 người cùng hành trình — học từ trải nghiệm của nhau',
    details: [
      'Nhóm nhỏ 4-6 người',
      '6 buổi cùng nhóm (90 phút/buổi)',
      'Môi trường an toàn để chia sẻ',
      'Peer learning & accountability',
    ],
  },
  {
    title: 'Mind Map Analysis',
    color: '#E85A71',
    icon: '🧠',
    description:
      'Phân tích chuyên sâu kết quả Mind Test và lộ trình cá nhân hóa',
    details: [
      'Báo cáo phân tích 15+ trang',
      '1 buổi giải thích kết quả (60 phút)',
      'Nhận diện mô thức tư duy',
      'Gợi ý bước tiếp theo cụ thể',
    ],
  },
];

const steps = [
  {
    step: '01',
    title: 'Mind Test',
    desc: 'Hoàn thành bộ câu hỏi đánh giá tư duy và tâm lý cá nhân',
    color: '#7C6FF7',
  },
  {
    step: '02',
    title: 'Phân tích',
    desc: 'Hanna phân tích kết quả và chuẩn bị báo cáo chuyên sâu',
    color: '#18B5B0',
  },
  {
    step: '03',
    title: 'Lập lộ trình',
    desc: 'Cùng thiết kế hành trình thay đổi phù hợp với bạn',
    color: '#E85A71',
  },
  {
    step: '04',
    title: 'Đồng hành',
    desc: 'Thực hành, điều chỉnh và phát triển trong từng buổi coaching',
    color: '#7C6FF7',
  },
];

export default function CoachingPage() {
  return (
    <main style={{ fontFamily: "'Be Vietnam Pro', sans-serif", background: '#0f0e2a', minHeight: '100vh', color: '#fff' }}>

      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1C1A3E 0%, #16143a 60%, #1a1240 100%)',
          padding: '100px 24px 80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(124,111,247,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container-main" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(124,111,247,0.15)',
              border: '1px solid rgba(124,111,247,0.4)',
              color: '#7C6FF7',
              borderRadius: '100px',
              padding: '6px 18px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}
          >
            Coaching Program
          </span>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            Không phải tư vấn.{' '}
            <span style={{ color: '#7C6FF7' }}>Đây là đồng hành.</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: 1.75,
            }}
          >
            Coaching tại AIMIND không cho bạn câu trả lời có sẵn. Chúng tôi cùng bạn khám phá mô thức tư duy, hiểu
            bản thân sâu hơn và tạo ra thay đổi từ bên trong.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/dong-hanh"
              style={{
                display: 'inline-block',
                background: '#7C6FF7',
                color: '#fff',
                borderRadius: '12px',
                padding: '14px 32px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
              }}
            >
              Bắt đầu hành trình
            </a>
            <a
              href="/kham-pha/ban-do-noi-tam"
              style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                borderRadius: '12px',
                padding: '14px 32px',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
              }}
            >
              Khám phá bản đồ nội tâm
            </a>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 800,
                marginBottom: '16px',
                letterSpacing: '-0.01em',
              }}
            >
              Chọn gói phù hợp với bạn
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
              Mỗi hành trình là duy nhất — chúng tôi có nhiều hình thức để đồng hành cùng bạn
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${pkg.color}40`,
                  borderRadius: '20px',
                  padding: '36px 28px',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: `${pkg.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    marginBottom: '20px',
                  }}
                >
                  {pkg.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: pkg.color,
                    marginBottom: '12px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {pkg.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    marginBottom: '24px',
                  }}
                >
                  {pkg.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {pkg.details.map((d) => (
                    <li
                      key={d}
                      style={{
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: '0.875rem',
                        padding: '6px 0',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <span style={{ color: pkg.color, fontSize: '10px' }}>●</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <a
                  href="/dong-hanh"
                  style={{
                    display: 'inline-block',
                    marginTop: '28px',
                    background: `${pkg.color}18`,
                    border: `1px solid ${pkg.color}60`,
                    color: pkg.color,
                    borderRadius: '10px',
                    padding: '10px 24px',
                    fontWeight: 600,
                    fontSize: '14px',
                    textDecoration: 'none',
                  }}
                >
                  Tìm hiểu thêm →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        style={{
          background: 'rgba(124,111,247,0.05)',
          borderTop: '1px solid rgba(124,111,247,0.12)',
          borderBottom: '1px solid rgba(124,111,247,0.12)',
          padding: '80px 24px',
        }}
      >
        <div className="container-main" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 800,
                marginBottom: '16px',
                letterSpacing: '-0.01em',
              }}
            >
              Quy trình đồng hành
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem' }}>
              Từng bước được thiết kế có chủ đích — không có gì là ngẫu nhiên
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
            }}
          >
            {steps.map((s) => (
              <div
                key={s.step}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: '20px',
                  padding: '32px 24px',
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: `${s.color}20`,
                    border: `2px solid ${s.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1rem',
                    color: s.color,
                    margin: '0 auto 16px',
                  }}
                >
                  {s.step}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '10px', color: '#fff' }}>
                  {s.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div className="container-main" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 800,
              marginBottom: '16px',
              letterSpacing: '-0.01em',
            }}
          >
            Sẵn sàng bắt đầu?
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1rem',
              lineHeight: 1.75,
              marginBottom: '36px',
            }}
          >
            Hành trình thay đổi thật sự bắt đầu từ một quyết định nhỏ. Hãy để chúng tôi đồng hành cùng bạn.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/dong-hanh"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #7C6FF7, #5a4fe0)',
                color: '#fff',
                borderRadius: '12px',
                padding: '14px 36px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
              }}
            >
              Đăng ký Coaching
            </a>
            <a
              href="/kham-pha/ban-do-noi-tam"
              style={{
                display: 'inline-block',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.25)',
                color: 'rgba(255,255,255,0.8)',
                borderRadius: '12px',
                padding: '14px 36px',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
              }}
            >
              Khám phá bản đồ nội tâm
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
