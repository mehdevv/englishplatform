import { useState, useCallback } from "react";
import { HEARTS_PER_LESSON } from "../config";
import { getLesson, getNextLessonId } from "../data/lessons";
import { completeLesson, recordAttempt } from "../lib/progress";
import type { ProgressData } from "../lib/progress";

type Props = {
  lessonId: string;
  onExit: () => void;
  onProgressUpdate: (p: ProgressData) => void;
  onNextLesson: (id: string) => void;
};

type AnswerState = "idle" | "correct" | "wrong";

export function LessonPlayer({ lessonId, onExit, onProgressUpdate, onNextLesson }: Props) {
  const lesson = getLesson(lessonId);
  const [qIndex, setQIndex] = useState(0);
  const [hearts, setHearts] = useState(HEARTS_PER_LESSON);
  const [selected, setSelected] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("idle");
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [failed, setFailed] = useState(false);

  const restart = useCallback(() => {
    setQIndex(0);
    setHearts(HEARTS_PER_LESSON);
    setSelected(null);
    setAnswerState("idle");
    setCorrectCount(0);
    setFinished(false);
    setFailed(false);
  }, []);

  if (!lesson) {
    return (
      <div className="lesson-empty">
        <p>Leçon introuvable.</p>
        <button type="button" className="btn-secondary" onClick={onExit}>
          Retour
        </button>
      </div>
    );
  }

  const question = lesson.questions[qIndex]!;
  const total = lesson.questions.length;
  const progressPct = Math.round((qIndex / total) * 100);
  const allCorrect = correctCount === total;

  const handleCheck = () => {
    if (selected === null || answerState !== "idle") return;

    const isCorrect = selected === question.correctIndex;
    onProgressUpdate(recordAttempt(isCorrect));

    if (isCorrect) {
      setAnswerState("correct");
      setCorrectCount((c) => c + 1);
    } else {
      setAnswerState("wrong");
      const newHearts = hearts - 1;
      setHearts(newHearts);
      if (newHearts <= 0) setFailed(true);
    }
  };

  const handleContinue = () => {
    if (failed) {
      onExit();
      return;
    }

    const isLast = qIndex + 1 >= total;
    if (isLast) {
      const p = completeLesson(lessonId, correctCount, total);
      onProgressUpdate(p);
      setFinished(true);
      return;
    }

    setQIndex((i) => i + 1);
    setSelected(null);
    setAnswerState("idle");
  };

  if (finished) {
    const nextId = getNextLessonId(lessonId);
    return (
      <div className="lesson-complete">
        <div className={`complete-badge ${allCorrect ? "complete-badge--gold" : ""}`} aria-hidden />
        <h2>{allCorrect ? "Parfait !" : "Leçon terminée !"}</h2>
        <p className="complete-score">
          {correctCount} / {total} bonnes réponses
        </p>
        <p className="complete-msg">
          {allCorrect
            ? "Tu as tout réussi — la leçon est validée ! 🇬🇧"
            : "Recommence pour viser 100 % et débloquer la suite !"}
        </p>
        <div className="complete-actions">
          {allCorrect && nextId && (
            <button type="button" className="btn-primary" onClick={() => onNextLesson(nextId)}>
              Leçon suivante →
            </button>
          )}
          <button type="button" className="btn-secondary" onClick={onExit}>
            Retour au parcours
          </button>
          {!allCorrect && (
            <button type="button" className="btn-ghost" onClick={restart}>
              Recommencer
            </button>
          )}
        </div>
      </div>
    );
  }

  if (failed) {
    return (
      <div className="lesson-complete fail">
        <div className="complete-badge complete-badge--fail" aria-hidden />
        <h2>Plus de vies !</h2>
        <p className="complete-msg">Réessaie — tu vas y arriver, Houda !</p>
        <div className="complete-actions">
          <button type="button" className="btn-primary" onClick={restart}>
            Recommencer
          </button>
          <button type="button" className="btn-secondary" onClick={onExit}>
            Retour
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-player">
      <div className="lesson-top">
        <button type="button" className="btn-icon" onClick={onExit} aria-label="Quitter">
          ✕
        </button>
        <div className="lesson-progress-bar">
          <div className="lesson-progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <div className="lives" aria-label={`${hearts} vies restantes`}>
          {Array.from({ length: HEARTS_PER_LESSON }).map((_, i) => (
            <span key={i} className={i < hearts ? "life-dot life-dot--on" : "life-dot"} />
          ))}
        </div>
      </div>

      <div className="question-area">
        <p className="lesson-label">
          {lesson.icon} {lesson.titleFr}
        </p>
        <h2 className="question-prompt">{question.promptFr}</h2>
        {question.promptEn && <p className="question-en">{question.promptEn}</p>}

        <div className="options-grid">
          {question.options.map((opt, i) => {
            let cls = "option-btn";
            if (answerState !== "idle" && i === question.correctIndex) cls += " correct";
            else if (answerState === "wrong" && i === selected) cls += " wrong";
            else if (i === selected) cls += " selected";
            return (
              <button
                key={i}
                type="button"
                className={cls}
                disabled={answerState !== "idle"}
                onClick={() => setSelected(i)}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {answerState === "wrong" && question.hint && (
          <p className="hint-box">💡 {question.hint}</p>
        )}
        {answerState === "correct" && <p className="feedback correct-fb">Excellent !</p>}
        {answerState === "wrong" && (
          <p className="feedback wrong-fb">
            La bonne réponse : <strong>{question.options[question.correctIndex]}</strong>
          </p>
        )}
      </div>

      <div className="lesson-footer">
        {answerState === "idle" ? (
          <button
            type="button"
            className="btn-primary btn-full"
            disabled={selected === null}
            onClick={handleCheck}
          >
            Vérifier
          </button>
        ) : (
          <button type="button" className="btn-primary btn-full" onClick={handleContinue}>
            {qIndex + 1 >= total ? "Terminer" : "Continuer"}
          </button>
        )}
      </div>
    </div>
  );
}
