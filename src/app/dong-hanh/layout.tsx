import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đồng Hành 1-1 — Coaching với Hanna Dang | AIMIND",
  description: "Coaching 1-1 cùng Hanna Dang — không phải tư vấn, mà là đồng hành thực sự trong hành trình hiểu bản thân và thay đổi từ gốc rễ.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
