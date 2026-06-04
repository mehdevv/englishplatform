import { getSupabase, isSupabaseConfigured } from "./supabase";
import type { ProgressData } from "./progress";

export type LoginResult =
  | { ok: true; learnerId: string; displayName: string; progress: ProgressData }
  | { ok: false; error: string };

function rowToProgress(row: Record<string, unknown>): ProgressData {
  return {
    xp: Number(row.xp ?? 0),
    streak: Number(row.streak ?? 0),
    lastActiveDate: (row.lastActiveDate as string | null) ?? null,
    completedLessons: Array.isArray(row.completedLessons)
      ? (row.completedLessons as string[])
      : [],
    lessonResults:
      row.lessonResults && typeof row.lessonResults === "object"
        ? (row.lessonResults as ProgressData["lessonResults"])
        : {},
    totalCorrect: Number(row.totalCorrect ?? 0),
    totalAttempts: Number(row.totalAttempts ?? 0),
    sessions: Number(row.sessions ?? 0),
  };
}

export async function loginWithPin(pin: string): Promise<LoginResult> {
  if (!isSupabaseConfigured) {
    return { ok: false, error: "supabase_not_configured" };
  }

  const { data, error } = await getSupabase().rpc("login_with_pin", { p_pin: pin });

  if (error) {
    console.error("login_with_pin", error);
    return { ok: false, error: "network" };
  }

  const payload = data as {
    ok?: boolean;
    error?: string;
    learner_id?: string;
    display_name?: string;
    progress?: Record<string, unknown>;
  };

  if (!payload?.ok || !payload.learner_id || !payload.progress) {
    return { ok: false, error: payload?.error ?? "wrong_pin" };
  }

  return {
    ok: true,
    learnerId: payload.learner_id,
    displayName: payload.display_name ?? "Houda",
    progress: rowToProgress(payload.progress),
  };
}

export async function saveProgressToCloud(
  pin: string,
  progress: ProgressData
): Promise<boolean> {
  if (!isSupabaseConfigured) return false;

  const { data, error } = await getSupabase().rpc("save_learner_progress", {
    p_pin: pin,
    p_progress: progress,
  });

  if (error) {
    console.error("save_learner_progress", error);
    return false;
  }

  return Boolean((data as { ok?: boolean })?.ok);
}
