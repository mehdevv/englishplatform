const AUTH_KEY = "houda-english-auth";
const LEARNER_KEY = "houda-english-learner-id";
const PIN_KEY = "houda-english-pin";
const NAME_KEY = "houda-english-name";

export type LearnerSession = {
  learnerId: string;
  pin: string;
  displayName: string;
};

export function getSession(): LearnerSession | null {
  if (sessionStorage.getItem(AUTH_KEY) !== "1") return null;
  const learnerId = sessionStorage.getItem(LEARNER_KEY);
  const pin = sessionStorage.getItem(PIN_KEY);
  const displayName = sessionStorage.getItem(NAME_KEY) ?? "Houda";
  if (!learnerId || !pin) return null;
  return { learnerId, pin, displayName };
}

export function setSession(session: LearnerSession): void {
  sessionStorage.setItem(AUTH_KEY, "1");
  sessionStorage.setItem(LEARNER_KEY, session.learnerId);
  sessionStorage.setItem(PIN_KEY, session.pin);
  sessionStorage.setItem(NAME_KEY, session.displayName);
}

export function clearSession(): void {
  sessionStorage.removeItem(AUTH_KEY);
  sessionStorage.removeItem(LEARNER_KEY);
  sessionStorage.removeItem(PIN_KEY);
  sessionStorage.removeItem(NAME_KEY);
}

export function isAuthenticated(): boolean {
  return sessionStorage.getItem(AUTH_KEY) === "1";
}
