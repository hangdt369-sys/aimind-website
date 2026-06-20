// ─── Utilities ──────────────────────────────────────────────────────────────

/**
 * Merge class names — simple version without clsx dependency
 * Filters out falsy values and joins with space
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Calculate archetype from test scores
 * Returns the key with highest score
 */
export function getDominantArchetype(
  scores: Record<string, number>
): string {
  return Object.entries(scores).sort(([, a], [, b]) => b - a)[0][0];
}

/**
 * Calculate secondary archetype (second highest score)
 */
export function getSecondaryArchetype(
  scores: Record<string, number>,
  dominant: string
): string | undefined {
  const sorted = Object.entries(scores)
    .filter(([key]) => key !== dominant)
    .sort(([, a], [, b]) => b - a);

  const second = sorted[0];
  // Only return secondary if it's meaningful (at least 70% of dominant score)
  if (second && second[1] >= scores[dominant] * 0.7) {
    return second[0];
  }
  return undefined;
}

/**
 * Format score as percentage for display
 */
export function scoreToPercent(score: number, maxScore: number): number {
  return Math.round((score / maxScore) * 100);
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Generate a simple ID for test sessions (client-side)
 */
export function generateSessionId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * Store test result in sessionStorage
 */
export function storeTestResult(result: object): void {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("aimind_test_result", JSON.stringify(result));
  }
}

/**
 * Retrieve test result from sessionStorage
 */
export function getStoredTestResult<T>(): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem("aimind_test_result");
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}
