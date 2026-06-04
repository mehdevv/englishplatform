import { XP_LESSON_BONUS, XP_PER_CORRECT, PIN_CODE } from "../config";
import { ALL_LESSONS } from "../data/lessons";
import { getSession } from "./session";
import { loginWithPin, saveProgressToCloud } from "./supabase-api";
import { isSupabaseConfigured } from "./supabase";

export type LessonResult = {
  correct: number;
  total: number;
  completedAt: string;
  xpEarned: number;
};

export type ProgressData = {
  xp: number;
  streak: number;
  lastActiveDate: string | null;
  completedLessons: string[];
  lessonResults: Record<string, LessonResult>;
  totalCorrect: number;
  totalAttempts: number;
  sessions: number;
};

const STORAGE_KEY = "houda-english-progress";

export const defaultProgress = (): ProgressData => ({
  xp: 0,
  streak: 0,
  lastActiveDate: null,
  completedLessons: [],
  lessonResults: {},
  totalCorrect: 0,
  totalAttempts: 0,
  sessions: 0,
});

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    return { ...defaultProgress(), ...JSON.parse(raw) };
  } catch {
    return defaultProgress();
  }
}

export function saveProgressLocal(data: ProgressData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function persist(data: ProgressData): ProgressData {
  saveProgressLocal(data);
  const session = getSession();
  if (session && isSupabaseConfigured) {
    void saveProgressToCloud(session.pin, data);
  }
  return data;
}

export type AuthSuccess = {
  ok: true;
  progress: ProgressData;
  learnerId: string;
  displayName: string;
  pin: string;
};

/** Login with 4-digit PIN — Supabase if configured, else local fallback */
export async function authenticateWithPin(
  pin: string
): Promise<AuthSuccess | { ok: false }> {
  if (isSupabaseConfigured) {
    const result = await loginWithPin(pin);
    if (!result.ok) return { ok: false };
    saveProgressLocal(result.progress);
    return {
      ok: true,
      progress: result.progress,
      learnerId: result.learnerId,
      displayName: result.displayName,
      pin,
    };
  }

  if (pin === PIN_CODE) {
    return {
      ok: true,
      progress: loadProgress(),
      learnerId: "local",
      displayName: "Houda",
      pin,
    };
  }
  return { ok: false };
}

export function touchSession(): ProgressData {
  const p = loadProgress();
  const t = today();
  let streak = p.streak;

  if (p.lastActiveDate === t) {
    // same day
  } else if (p.lastActiveDate === yesterday()) {
    streak += 1;
  } else if (p.lastActiveDate === null) {
    streak = 1;
  } else {
    streak = 1;
  }

  const updated: ProgressData = {
    ...p,
    streak,
    lastActiveDate: t,
    sessions: p.sessions + (p.lastActiveDate === t ? 0 : 1),
  };
  return persist(updated);
}

export function completeLesson(
  lessonId: string,
  correct: number,
  total: number
): ProgressData {
  const p = loadProgress();
  const xpEarned = correct * XP_PER_CORRECT + XP_LESSON_BONUS;
  const result: LessonResult = {
    correct,
    total,
    completedAt: new Date().toISOString(),
    xpEarned,
  };

  const passed = correct === total;
  const alreadyDone = p.completedLessons.includes(lessonId);
  const completedLessons =
    passed && !alreadyDone ? [...p.completedLessons, lessonId] : p.completedLessons;

  const updated: ProgressData = {
    ...p,
    xp: p.xp + (alreadyDone ? Math.floor(xpEarned / 2) : xpEarned),
    completedLessons,
    lessonResults: { ...p.lessonResults, [lessonId]: result },
    lastActiveDate: today(),
  };

  if (!alreadyDone && p.lastActiveDate !== today()) {
    if (p.lastActiveDate === yesterday()) updated.streak = p.streak + 1;
    else if (p.lastActiveDate !== today()) updated.streak = Math.max(1, updated.streak || 1);
  }

  return persist(updated);
}

export function recordAttempt(correct: boolean): ProgressData {
  const p = loadProgress();
  const updated: ProgressData = {
    ...p,
    totalCorrect: p.totalCorrect + (correct ? 1 : 0),
    totalAttempts: p.totalAttempts + 1,
  };
  return persist(updated);
}

export function setProgressCache(data: ProgressData): void {
  saveProgressLocal(data);
}

export function completionPercent(completed: string[]): number {
  if (ALL_LESSONS.length === 0) return 0;
  return Math.round((completed.length / ALL_LESSONS.length) * 100);
}

export function accuracyPercent(p: ProgressData): number {
  if (p.totalAttempts === 0) return 0;
  return Math.round((p.totalCorrect / p.totalAttempts) * 100);
}
