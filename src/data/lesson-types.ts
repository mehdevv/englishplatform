export type Question = {
  id: string;
  promptFr: string;
  promptEn?: string;
  options: string[];
  correctIndex: number;
  hint?: string;
};

export type Lesson = {
  id: string;
  unitId: string;
  titleFr: string;
  titleEn: string;
  icon: string;
  questions: Question[];
};

export type Unit = {
  id: string;
  titleFr: string;
  titleEn: string;
  icon: string;
  lessons: Lesson[];
};

export const TOTAL_LESSONS = 50;
export const COURSE_LEVEL_LABEL = "Intermédiaire · B1–B2";
