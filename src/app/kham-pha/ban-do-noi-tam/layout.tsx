import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bài Test Bản Đồ Nội Tâm — AIMIND",
  description: "20 câu hỏi giúp bạn nhận diện khuôn mẫu hành vi đang chi phối cuộc sống. Miễn phí, 15 phút.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
