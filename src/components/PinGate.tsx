import { useState, useRef, useEffect, type FormEvent } from "react";
import { authenticateWithPin, type ProgressData } from "../lib/progress";
import { setSession } from "../lib/session";
import { isSupabaseConfigured } from "../lib/supabase";

type Props = {
  onUnlock: (progress: ProgressData, displayName: string) => void;
};

export function PinGate({ onUnlock }: Props) {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const updateDigit = (index: number, value: string) => {
    const d = value.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[index] = d;
    setDigits(next);
    setError(false);
    if (d && index < 3) inputs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const code = digits.join("");
    if (code.length < 4 || loading) return;

    setLoading(true);
    setError(false);

    const result = await authenticateWithPin(code);

    if (!result.ok) {
      setError(true);
      setDigits(["", "", "", ""]);
      inputs.current[0]?.focus();
      setLoading(false);
      return;
    }

    setSession({
      learnerId: result.learnerId,
      pin: result.pin,
      displayName: result.displayName,
    });
    onUnlock(result.progress, result.displayName);
    setLoading(false);
  };

  return (
    <div className="pin-screen">
      <div className="pin-card">
        <h1 className="pin-title">
          Salut <span>Houda</span> !
        </h1>
        <p className="pin-sub">Entre ton code à 4 chiffres pour commencer</p>
        {isSupabaseConfigured && (
          <p className="pin-cloud">☁️ Progression sauvegardée en ligne</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className={`pin-inputs ${error ? "shake" : ""}`}>
            {digits.map((d, i) => (
              <input
                key={i}
                ref={(el) => {
                  inputs.current[i] = el;
                }}
                type="password"
                inputMode="numeric"
                maxLength={1}
                value={d}
                disabled={loading}
                onChange={(e) => updateDigit(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className={error ? "pin-input error" : "pin-input"}
                aria-label={`Chiffre ${i + 1}`}
              />
            ))}
          </div>
          {error && <p className="pin-error">Code incorrect — réessaie 💪</p>}
          <button
            type="submit"
            className="btn-primary"
            disabled={loading || digits.join("").length < 4}
          >
            {loading ? "Connexion…" : "Entrer →"}
          </button>
        </form>
      </div>
    </div>
  );
}
