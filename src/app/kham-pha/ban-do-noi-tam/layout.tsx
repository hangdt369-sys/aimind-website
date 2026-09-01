import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bài Test Bản Đồ Nội Tâm — AIMIND",
  description: "20 câu hỏi gợi ý những xu hướng phản ứng có thể đang lặp lại trong đời sống. Miễn phí, khoảng 10–15 phút.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
