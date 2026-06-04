# EnglishCoach for Houda

A small React + Vite app for learning English in a **Duolingo-style** flow: PIN gate → dashboard with progress → lessons with hearts, multiple choice, and unlock-on-perfect-score.

## Quick start

```bash
cd houda-english
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## PIN code

Default PIN: **`1234`** (4 digits) — stored in Supabase when connected, or in `src/config.ts` for offline mode.

## Supabase (cloud progress)

See **[docs/SUPABASE_SETUP.md](docs/SUPABASE_SETUP.md)** for:

- Which API keys to add (`VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY`)
- Running `supabase/schema.sql` in the SQL Editor
- Adding more learners with different PINs

## How it works

1. **PIN screen** — Houda enters the 4-digit code.
2. **Dashboard** — XP, streak, lessons completed, accuracy, global progress bar, and unit/lesson list.
3. **Lessons** — 5 questions each; 3 hearts; wrong answers cost a heart; must answer all questions correctly to **pass** and unlock the next lesson.
4. **Progress** — Saved in the browser (`localStorage` + session for login).

## Content

6 lessons across 3 units (greetings, introductions, family, daily routine, food, travel). Edit or add lessons in `src/data/lessons.ts`.

## Build

```bash
npm run build
npm run preview
```

Inspired by the English Coach reference UI (bilingual FR/EN, warm dark theme).
