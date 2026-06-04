import { UNITS, ALL_LESSONS, isLessonUnlocked } from "../data/lessons";
import type { ProgressData } from "../lib/progress";
import { accuracyPercent, completionPercent } from "../lib/progress";

type Props = {
  progress: ProgressData;
  onStartLesson: (lessonId: string) => void;
};

export function Dashboard({ progress, onStartLesson }: Props) {
  const pct = completionPercent(progress.completedLessons);
  const acc = accuracyPercent(progress);

  return (
    <div className="dashboard">
      <section className="stats-grid">
        <div className="stat-card highlight">
          <span className="stat-icon">⚡</span>
          <span className="stat-value">{progress.xp}</span>
          <span className="stat-label">XP</span>
        </div>
        <div className="stat-card">
          <span className="stat-icon">🔥</span>
          <span className="stat-value">{progress.streak}</span>
          <span className="stat-label">Jours de suite</span>
        </div>
        <div className="stat-card">
          <span className="stat-icon">✅</span>
          <span className="stat-value">{progress.completedLessons.length}</span>
          <span className="stat-label">Leçons finies</span>
        </div>
        <div className="stat-card">
          <span className="stat-icon">🎯</span>
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
                return (
                  <li key={id} className="recent-item">
                    <span>{meta ? `${meta.icon} ${meta.titleFr}` : id}</span>
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
        <h2 className="section-title">Parcours d'apprentissage</h2>
        {UNITS.map((unit) => (
          <div key={unit.id} className="unit-block">
            <div className="unit-header">
              <span className="unit-icon">{unit.icon}</span>
              <div>
                <h3>{unit.titleFr}</h3>
                <p className="unit-sub">{unit.titleEn}</p>
              </div>
            </div>
            <div className="lessons-row">
              {unit.lessons.map((lesson) => {
                const done = progress.completedLessons.includes(lesson.id);
                const unlocked = isLessonUnlocked(lesson.id, progress.completedLessons);
                return (
                  <button
                    key={lesson.id}
                    type="button"
                    className={`lesson-btn ${done ? "done" : ""} ${!unlocked ? "locked" : ""}`}
                    disabled={!unlocked}
                    onClick={() => onStartLesson(lesson.id)}
                  >
                    <span className="lesson-btn-icon">{unlocked ? lesson.icon : "🔒"}</span>
                    <span className="lesson-btn-title">{lesson.titleFr}</span>
                    {done && <span className="lesson-check">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
