import { useState, useEffect } from "react";
import { PinGate } from "./components/PinGate";
import { Dashboard } from "./components/Dashboard";
import { LessonPlayer } from "./components/LessonPlayer";
import {
  loadProgress,
  touchSession,
  setProgressCache,
  type ProgressData,
} from "./lib/progress";
import { getSession, isAuthenticated } from "./lib/session";
import { loginWithPin } from "./lib/supabase-api";
import { isSupabaseConfigured } from "./lib/supabase";

const TIPS = [
  "💡 Pense en anglais, même pour de petites choses du quotidien.",
  "💡 Lis 10 minutes d'anglais chaque jour.",
  "💡 Répète les phrases à voix haute — ça aide beaucoup !",
  "💡 Ne traduis pas mot à mot. Cherche l'équivalent naturel.",
];

type Screen = "pin" | "home" | "lesson";

function App() {
  const [screen, setScreen] = useState<Screen>(() =>
    isAuthenticated() ? "home" : "pin"
  );
  const [activeLesson, setActiveLesson] = useState<string | null>(null);
  const [progress, setProgress] = useState<ProgressData>(() => loadProgress());
  const [displayName, setDisplayName] = useState("Houda");
  const [tipIndex, setTipIndex] = useState(0);
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTipIndex((i) => (i + 1) % TIPS.length), 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const session = getSession();
    if (!isAuthenticated() || !session || !isSupabaseConfigured) return;

    setSyncing(true);
    loginWithPin(session.pin)
      .then((res) => {
        if (res.ok) {
          setProgressCache(res.progress);
          setProgress(res.progress);
          setDisplayName(res.displayName);
        }
      })
      .finally(() => setSyncing(false));
  }, []);

  const handleUnlock = (p: ProgressData, name: string) => {
    setProgressCache(p);
    setProgress(touchSession());
    setDisplayName(name);
    setScreen("home");
  };

  const startLesson = (lessonId: string) => {
    setActiveLesson(lessonId);
    setScreen("lesson");
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-brand">
          <div className="logo">
            English<span>Coach</span>
          </div>
          <div className="tagline">
            Pour {displayName} · English Coach
            {syncing && " · sync…"}
          </div>
        </div>
        {screen !== "pin" && (
          <div className="header-xp">
            <span>⚡ {progress.xp} XP</span>
            <span>🔥 {progress.streak}</span>
          </div>
        )}
      </header>

      {screen !== "pin" && <div className="tip-bar">{TIPS[tipIndex]}</div>}

      <main className="main">
        {screen === "pin" && <PinGate onUnlock={handleUnlock} />}

        {screen === "home" && (
          <>
            <div className="welcome-banner">
              <h1>Salut {displayName} !</h1>
              <p>
                Niveau intermédiaire B1–B2 · 50 leçons · 10 univers différents.
                Réponds juste pour débloquer la suite.
              </p>
            </div>
            <Dashboard progress={progress} onStartLesson={startLesson} />
          </>
        )}

        {screen === "lesson" && activeLesson && (
          <LessonPlayer
            lessonId={activeLesson}
            onExit={() => {
              setScreen("home");
              setActiveLesson(null);
              setProgress(loadProgress());
            }}
            onProgressUpdate={setProgress}
            onNextLesson={(id) => {
              setActiveLesson(id);
              setProgress(loadProgress());
            }}
          />
        )}
      </main>
    </div>
  );
}

export default App;
