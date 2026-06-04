import type { Lesson, Question, Unit } from "./lesson-types";

export function q(
  id: string,
  promptFr: string,
  options: string[],
  correctIndex: number,
  extra?: { promptEn?: string; hint?: string }
): Question {
  return { id, promptFr, options, correctIndex, ...extra };
}

export function lesson(
  id: string,
  unitId: string,
  titleFr: string,
  titleEn: string,
  questions: Question[]
): Lesson {
  return { id, unitId, titleFr, titleEn, icon: "", questions };
}

export function unit(
  id: string,
  titleFr: string,
  titleEn: string,
  lessons: Lesson[]
): Unit {
  return { id, titleFr, titleEn, icon: "", lessons };
}
