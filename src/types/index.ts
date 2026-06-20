// ─── AIMIND Type Definitions ────────────────────────────────────────────────

/* ── Test System ── */

export type ArchetypeKey =
  | "lo-au"         // Lo âu gắn bó — anxious attachment
  | "ne-tranh"      // Né tránh — avoidant
  | "kiem-soat"     // Kiểm soát — control/perfectionist
  | "hy-sinh"       // Hy sinh — people pleaser / martyr
  | "tu-huy"        // Tự hủy — self-sabotage
  | "can-bang";     // Cân bằng — integrated / secure

export interface TestQuestion {
  id: string;
  text: string;
  subtext?: string;
  options: TestOption[];
}

export interface TestOption {
  value: number;         // 1-5 scale
  label: string;
  archetypeScores: Partial<Record<ArchetypeKey, number>>;
}

export interface TestResult {
  dominant: ArchetypeKey;
  secondary?: ArchetypeKey;
  scores: Record<ArchetypeKey, number>;
  answeredAt: string;
}

/* ── Archetype Profile ── */

export interface ArchetypeProfile {
  key: ArchetypeKey;
  name: string;
  tagline: string;
  description: string;
  coreWound: string;           // Nỗi đau gốc rễ
  hiddenFear: string;          // Nỗi sợ thầm kín
  behaviorPattern: string[];   // Biểu hiện hành vi
  strengths: string[];         // Điểm mạnh
  growthEdge: string;          // Vùng phát triển
  nextStep: string;            // Bước tiếp theo cho người dùng
  color: string;               // Màu accent cho archetype
  icon: string;                // Emoji icon
}

/* ── Email Capture ── */

export interface EmailCapture {
  email: string;
  firstName?: string;
  archetypeKey: ArchetypeKey;
  source: "test-result" | "homepage" | "blog";
}

/* ── User ── */

export interface UserProfile {
  id: string;
  email: string;
  firstName?: string;
  archetypeKey?: ArchetypeKey;
  createdAt: string;
}
