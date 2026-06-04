export type { Question, Lesson, Unit } from "./lesson-types";
export { TOTAL_LESSONS, COURSE_LEVEL_LABEL } from "./lesson-types";
export { INTERMEDIATE_UNITS as UNITS } from "./intermediate-units";

import { INTERMEDIATE_UNITS } from "./intermediate-units";

export const ALL_LESSONS = INTERMEDIATE_UNITS.flatMap((u) => u.lessons);

export function getLesson(id: string) {
  return ALL_LESSONS.find((l) => l.id === id);
}

export function getNextLessonId(currentId: string): string | null {
  const idx = ALL_LESSONS.findIndex((l) => l.id === currentId);
  if (idx < 0 || idx >= ALL_LESSONS.length - 1) return null;
  return ALL_LESSONS[idx + 1]!.id;
}

export function isLessonUnlocked(lessonId: string, completed: string[]): boolean {
  const idx = ALL_LESSONS.findIndex((l) => l.id === lessonId);
  if (idx <= 0) return true;
  const prev = ALL_LESSONS[idx - 1]!;
  return completed.includes(prev.id);
}

export function getLessonIndex(id: string): number {
  const idx = ALL_LESSONS.findIndex((l) => l.id === id);
  return idx < 0 ? 0 : idx + 1;
}

export function getUnitForLesson(lessonId: string) {
  return INTERMEDIATE_UNITS.find((u) => u.lessons.some((l) => l.id === lessonId));
}
