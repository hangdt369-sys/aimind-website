import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kết Quả Bản Đồ Nội Tâm — AIMIND",
  description: "Xem những xu hướng nổi bật được gợi ý từ câu trả lời và các điểm bạn có thể tiếp tục tự quan sát.",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
