import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Đội ngũ Chuyên gia | AIMIND',
  description:
    'Kết nối đội ngũ chuyên gia cùng AIMIND — những người tâm huyết với hành trình phát triển tư duy và sức khỏe tinh thần.',
};

const experts = [
  {
    name: 'Hanna Dang',
    title: 'Founder, Coach & Psychologist',
    desc: 'Hanna với kinh nghiệm thực chiến trong lĩnh vực tâm lý học ứng dụng và phát triển tư duy. Người tạo ra phương pháp Mind Map độc đáo của AIMIND.',
    gradient: 'linear-gradient(135deg, #7C6FF7, #5a4fe0)',
    tag: 'Founder',
  },
  {
    name: 'Chuyên gia Tâm lý học',
    title: 'Clinical Psychologist',
    desc: 'Chuyên sâu về tâm lý học lâm sàng và trị liệu nhận thức — hành vi, hỗ trợ cân bằng cảm xúc và sức khỏe tâm thần.',
    gradient: 'linear-gradient(135deg, #18B5B0, #0d9490)',
    tag: 'Psychology',
  },
  {
    name: 'Chuyên gia Neuroscience',
    title: 'Neuroscience Researcher',
    desc: 'Nghiên cứu cơ chế não bộ trong học tập và ra quyết định, ứng dụng khoa học thần kinh vào phương pháp coaching.',
    gradient: 'linear-gradient(135deg, #E85A71, #c43d58)',
    tag: 'Neuroscience',
  },
  {
    name: 'Chuyên gia Sức khỏe & Vận động',
    title: 'Health & Movement Specialist',
    desc: 'Kết hợp vận động thể chất với sức khỏe tâm thần — giúp bạn tạo thói quen lành mạnh và bền vững từ cơ thể đến tâm trí.',
    gradient: 'linear-gradient(135deg, #7C6FF7, #18B5B0)',
    tag: 'Wellness',
  },
  {
    name: 'Chuyên gia Tư duy phản biện',
    title: 'Critical Thinking Facilitator',
    desc: 'Phát triển khả năng phân tích, đặt câu hỏi và đưa ra quyết định sáng suốt trong cuộc sống và công việc.',
    gradient: 'linear-gradient(135deg, #18B5B0, #7C6FF7)',
    tag: 'Thinking',
  },
  {
    name: 'Chuyên gia Phát triển nghề nghiệp',
    title: 'Career Development Coach',
    desc: 'Đồng hành trong hành trình định hướng nghề nghiệp, xây dựng thương hiệu cá nhân và phát triển kỹ năng lãnh đạo.',
    gradient: 'linear-gradient(135deg, #E85A71, #7C6FF7)',
    tag: 'Career',
  },
];

const networkBenefits = [
  { icon: '🎓', title: 'Chia sẻ kiến thức', desc: 'Đóng góp chuyên môn vào nội dung và chương trình đào tạo của AIMIND' },
  { icon: '🤝', title: 'Cộng tác coaching', desc: 'Tham gia vào các chương trình Group Coaching và workshop chuyên đề' },
  { icon: '🌐', title: 'Mạng lưới kết nối', desc: 'Kết nối với cộng đồng chuyên gia và học viên trên toàn quốc' },
  { icon: '📈', title: 'Phát triển thương hiệu', desc: 'Xây dựng và mở rộng thương hiệu cá nhân trong lĩnh vực của bạn' },
];

export default function ChuyenGiaPage() {
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
            top: '40%',
            left: '30%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(24,181,176,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '30%',
            right: '20%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(124,111,247,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container-main" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(24,181,176,0.15)',
              border: '1px solid rgba(24,181,176,0.4)',
              color: '#18B5B0',
              borderRadius: '100px',
              padding: '6px 18px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}
          >
            Expert Team
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
            Những người đứng sau{' '}
            <span style={{ color: '#18B5B0' }}>AIMIND</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.75,
            }}
          >
            Đội ngũ đa ngành — tâm lý học, khoa học thần kinh, sức khỏe và tư duy — cùng một mục tiêu: giúp bạn hiểu và
            phát triển bản thân toàn diện.
          </p>
        </div>
      </section>

      {/* Experts Grid */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="container-main">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {experts.map((expert) => (
              <div
                key={expert.name}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '24px',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                {/* Avatar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      background: expert.gradient,
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '28px',
                      fontWeight: 800,
                      color: '#fff',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {expert.name.charAt(0)}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff', margin: '0 0 4px' }}>
                      {expert.name}
                    </h3>
                    <span
                      style={{
                        display: 'inline-block',
                        background: 'rgba(124,111,247,0.15)',
                        color: '#7C6FF7',
                        borderRadius: '6px',
                        padding: '2px 10px',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                      }}
                    >
                      {expert.tag}
                    </span>
                  </div>
                </div>

                <div>
                  <p
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.07em',
                      marginBottom: '8px',
                    }}
                  >
                    {expert.title}
                  </p>
                  <p
                    style={{
                      color: 'rgba(255,255,255,0.65)',
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {expert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Network Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, rgba(24,181,176,0.06), rgba(124,111,247,0.06))',
          borderTop: '1px solid rgba(24,181,176,0.15)',
          borderBottom: '1px solid rgba(24,181,176,0.15)',
          padding: '80px 24px',
        }}
      >
        <div className="container-main" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <span
                style={{
                  display: 'inline-block',
                  background: 'rgba(232,90,113,0.15)',
                  border: '1px solid rgba(232,90,113,0.3)',
                  color: '#E85A71',
                  borderRadius: '100px',
                  padding: '5px 14px',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                Expert Network
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  fontWeight: 800,
                  marginBottom: '16px',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.25,
                }}
              >
                Bạn là chuyên gia?{' '}
                <span style={{ color: '#18B5B0' }}>Hãy cùng chúng tôi.</span>
              </h2>
              <p
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  marginBottom: '32px',
                }}
              >
                AIMIND đang mở rộng mạng lưới chuyên gia đa ngành. Nếu bạn có chuyên môn trong tâm lý học, khoa học
                thần kinh, sức khỏe, coaching hay phát triển cá nhân — hãy kết nối với chúng tôi.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="/ve-chung-toi/doi-ngu"
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #18B5B0, #0d9490)',
                    color: '#fff',
                    borderRadius: '12px',
                    padding: '12px 28px',
                    fontWeight: 700,
                    fontSize: '14px',
                    textDecoration: 'none',
                  }}
                >
                  Đăng ký cộng tác
                </a>
                <a
                  href="/coaching"
                  style={{
                    display: 'inline-block',
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'rgba(255,255,255,0.8)',
                    borderRadius: '12px',
                    padding: '12px 28px',
                    fontWeight: 600,
                    fontSize: '14px',
                    textDecoration: 'none',
                  }}
                >
                  Xem chương trình Coaching
                </a>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
            >
              {networkBenefits.map((b) => (
                <div
                  key={b.title}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    padding: '20px',
                  }}
                >
                  <div style={{ fontSize: '24px', marginBottom: '10px' }}>{b.icon}</div>
                  <h4 style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '6px', color: '#fff' }}>
                    {b.title}
                  </h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', lineHeight: 1.6, margin: 0 }}>
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
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
            Bắt đầu hành trình cùng chuyên gia
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1rem',
              lineHeight: 1.75,
              marginBottom: '36px',
            }}
          >
            Đội ngũ chuyên gia AIMIND sẵn sàng đồng hành cùng bạn trong từng bước của hành trình phát triển bản thân.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/coaching"
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
              Khám phá Coaching
            </a>
            <a
              href="/ve-chung-toi/doi-ngu"
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
              Về đội ngũ chúng tôi
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
