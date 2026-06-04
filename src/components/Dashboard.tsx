import { useState } from "react";
import {
  UNITS,
  ALL_LESSONS,
  isLessonUnlocked,
  getLessonIndex,
  TOTAL_LESSONS,
  COURSE_LEVEL_LABEL,
} from "../data/lessons";
import type { ProgressData } from "../lib/progress";
import { accuracyPercent, completionPercent } from "../lib/progress";

type Props = {
  progress: ProgressData;
  onStartLesson: (lessonId: string) => void;
};

export function Dashboard({ progress, onStartLesson }: Props) {
  const pct = completionPercent(progress.completedLessons);
  const acc = accuracyPercent(progress);
  const doneCount = progress.completedLessons.length;
  const [openUnits, setOpenUnits] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(UNITS.map((u, i) => [u.id, i === 0]))
  );

  const toggleUnit = (unitId: string) => {
    setOpenUnits((prev) => ({ ...prev, [unitId]: !prev[unitId] }));
  };

  return (
    <div className="dashboard">
      <div className="level-banner">
        <span className="level-badge">{COURSE_LEVEL_LABEL}</span>
        <span className="level-count">
          {doneCount} / {TOTAL_LESSONS} leçons
        </span>
      </div>

      <section className="stats-grid">
        <div className="stat-card highlight">
          <span className="stat-value">{progress.xp}</span>
          <span className="stat-label">XP</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{progress.streak}</span>
          <span className="stat-label">Jours</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{doneCount}</span>
          <span className="stat-label">Finies</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{acc}%</span>
          <span className="stat-label">Précision</span>
        </div>
      </section>

      <div className="progress-overview">
        <div className="progress-header">
          <span>Progression globale</span>
          <span className="progress-pct">{pct}%</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {progress.completedLessons.length > 0 && (
        <section className="recent-section">
          <h2 className="section-title">Dernières leçons</h2>
          <ul className="recent-list">
            {progress.completedLessons
              .slice(-3)
              .reverse()
              .map((id) => {
                const r = progress.lessonResults[id];
                const meta = ALL_LESSONS.find((l) => l.id === id);
                const num = getLessonIndex(id);
                return (
                  <li key={id} className="recent-item">
                    <span>
                      {meta ? `Leçon ${num} · ${meta.titleFr}` : id}
                    </span>
                    {r && (
                      <span className="recent-score">
                        {r.correct}/{r.total} · +{r.xpEarned} XP
                      </span>
                    )}
                  </li>
                );
              })}
          </ul>
        </section>
      )}

      <section className="units-section">
        <h2 className="section-title">Parcours · 10 thèmes</h2>
        {UNITS.map((unit) => {
          const unitDone = unit.lessons.filter((l) =>
            progress.completedLessons.includes(l.id)
          ).length;
          const isOpen = openUnits[unit.id];

          return (
            <div key={unit.id} className="unit-block">
              <button
                type="button"
                className="unit-header unit-header-btn"
                onClick={() => toggleUnit(unit.id)}
                aria-expanded={isOpen}
              >
                <div className="unit-header-text">
                  <h3>{unit.titleFr}</h3>
                  <p className="unit-sub">
                    {unit.titleEn} · {unitDone}/{unit.lessons.length}
                  </p>
                </div>
                <span className="unit-chevron" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="lessons-row">
                  {unit.lessons.map((lesson) => {
                    const done = progress.completedLessons.includes(lesson.id);
                    const unlocked = isLessonUnlocked(
                      lesson.id,
                      progress.completedLessons
                    );
                    const num = getLessonIndex(lesson.id);

                    return (
                      <button
                        key={lesson.id}
                        type="button"
                        className={`lesson-btn ${done ? "done" : ""} ${!unlocked ? "locked" : ""}`}
                        disabled={!unlocked}
                        onClick={() => onStartLesson(lesson.id)}
                      >
                        <span className="lesson-btn-num">{num}</span>
                        <span className="lesson-btn-body">
                          <span className="lesson-btn-title">{lesson.titleFr}</span>
                          <span className="lesson-btn-en">{lesson.titleEn}</span>
                        </span>
                        {done ? (
                          <span className="lesson-check">✓</span>
                        ) : !unlocked ? (
                          <span className="lesson-lock" aria-label="Verrouillé" />
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}
