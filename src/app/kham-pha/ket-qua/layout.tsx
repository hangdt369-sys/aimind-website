import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kết Quả Bản Đồ Nội Tâm — AIMIND",
  description: "Xem kết quả mô thức của bạn — điểm mạnh, thách thức, vết thương cốt lõi và bước tiếp theo.",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
