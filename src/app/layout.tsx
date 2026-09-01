import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://aimind-website.vercel.app",
  ),
  title: "AIMIND — Nhìn thấy mình rõ hơn. Sống tự do hơn.",
  description:
    "AIMIND là nền tảng khám phá và phát triển bản thân, giúp bạn quan sát những xu hướng hành vi và vòng lặp cảm xúc trong trải nghiệm hiện tại.",
  keywords: [
    "bản đồ nội tâm",
    "phát triển bản thân",
    "tâm lý học",
    "mô thức hành vi",
    "tự nhận thức",
    "awareness intelligence",
  ],
  openGraph: {
    title: "AIMIND — Nhìn thấy mình rõ hơn. Sống tự do hơn.",
    description:
      "Bài test Bản đồ Nội Tâm miễn phí — gợi ý những xu hướng nổi bật trong câu trả lời để bạn tiếp tục tự quan sát.",
    locale: "vi_VN",
    type: "website",
    siteName: "AIMIND",
  },
  twitter: {
    card: "summary",
    title: "AIMIND — Awareness Intelligence Mind",
    description: "Nền tảng khám phá bản thân dành cho người Việt. Hiểu mình. Sống tự do.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ fontFamily: "'Be Vietnam Pro', sans-serif", margin: 0, padding: 0 }}
      >
        <Navbar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
