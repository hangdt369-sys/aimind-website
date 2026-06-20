import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIMIND — Nhìn thấy mình rõ hơn. Sống tự do hơn.",
  description:
    "AIMIND là nền tảng khám phá và phát triển bản thân. Hiểu mô thức hành vi, giải mã vòng lặp cảm xúc, thiết kế lại hệ điều hành tâm trí của bạn.",
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
      "Nền tảng khám phá bản thân. Bài test Bản đồ Nội Tâm miễn phí — nhận diện mô thức đang chi phối cuộc sống của bạn.",
    locale: "vi_VN",
    type: "website",
    siteName: "AIMIND",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIMIND — Awareness Intelligence Mind",
    description:
      "Nền tảng khám phá bản thân dành cho người Việt. Hiểu mình. Sống tự do.",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
