# Supabase setup for Houda English

## API keys you need (frontend only)

From **Supabase → Connect** (or **Project Settings → API**), copy only these two into `houda-english/.env`:

| Variable | Where to find it | Use |
|----------|------------------|-----|
| `VITE_SUPABASE_URL` | **Project URL** | e.g. `https://wxaoooliklrrqsfttvciu.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | **Publishable key** (or legacy **anon** `public` key) | Safe in the browser with RLS + RPC |

Example `.env`:

```env
VITE_SUPABASE_URL=https://wxaoooliklrrqsfttvciu.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Restart `npm run dev` after creating `.env`.

## Keys you must NOT put in the React app

| Key | Why |
|-----|-----|
| **service_role** / **secret** | Bypasses all security — server only |
| **Database password** | Direct Postgres only (SQL Editor, migrations) |
| **JWT secret** | Internal to Supabase |

## Database setup (one time)

1. Open **SQL Editor** in Supabase.
2. Paste and run the full script: [`supabase/schema.sql`](../supabase/schema.sql).
3. This creates:
   - `learners` — one account per 4-digit PIN
   - `learner_progress` — XP, streak, completed lessons, etc.
   - `login_with_pin` / `save_learner_progress` — secure RPCs (anon key can only call these, not read all rows)

Default account seeded: PIN **`0505`**, name **Houda**.

### Add another learner

```sql
insert into public.learners (pin_code, display_name)
values ('5678', 'Another name');
```

Progress row is created automatically by the trigger.

## How login works

1. User enters 4-digit PIN.
2. App calls `login_with_pin(pin)` → returns that learner’s progress.
3. After each lesson / answer, app calls `save_learner_progress(pin, progress)` → updates cloud.
4. Local cache in `localStorage` is kept for offline speed.

## Without Supabase

If `.env` is missing, the app falls back to **local PIN** from `src/config.ts` (`PIN_CODE = "0505"`) and `localStorage` only.

### Change PIN on an existing Supabase project

```sql
update public.learners set pin_code = '0505' where pin_code = '1234';
```
