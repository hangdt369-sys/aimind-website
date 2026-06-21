import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kiến Thức — Bài Viết AIMIND",
  description: "Bài viết chuyên sâu về tâm lý học, khoa học thần kinh, và tự nhận thức — được viết bằng ngôn ngữ đời thường cho người Việt.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
