-- Run this in Supabase → SQL Editor (once per project)

-- Learners (one row per 4-digit PIN)
create table if not exists public.learners (
  id uuid primary key default gen_random_uuid(),
  pin_code text not null unique,
  display_name text not null default 'Houda',
  created_at timestamptz not null default now(),
  constraint pin_four_digits check (pin_code ~ '^\d{4}$')
);

create table if not exists public.learner_progress (
  learner_id uuid primary key references public.learners (id) on delete cascade,
  xp int not null default 0,
  streak int not null default 0,
  last_active_date date,
  completed_lessons jsonb not null default '[]'::jsonb,
  lesson_results jsonb not null default '{}'::jsonb,
  total_correct int not null default 0,
  total_attempts int not null default 0,
  sessions int not null default 0,
  updated_at timestamptz not null default now()
);

-- Auto-create progress row when a learner is added
create or replace function public.handle_new_learner ()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.learner_progress (learner_id)
  values (new.id)
  on conflict (learner_id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_learner_created on public.learners;

create trigger on_learner_created
after insert on public.learners
for each row
execute function public.handle_new_learner ();

-- Login: validate PIN and return progress (safe for anon key)
create or replace function public.login_with_pin (p_pin text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_learner public.learners%rowtype;
  v_prog public.learner_progress%rowtype;
begin
  if p_pin is null or p_pin !~ '^\d{4}$' then
    return jsonb_build_object('ok', false, 'error', 'invalid_pin');
  end if;

  select * into v_learner from public.learners where pin_code = p_pin;

  if not found then
    return jsonb_build_object('ok', false, 'error', 'wrong_pin');
  end if;

  select * into v_prog from public.learner_progress where learner_id = v_learner.id;

  if not found then
    insert into public.learner_progress (learner_id)
    values (v_learner.id)
    returning * into v_prog;
  end if;

  return jsonb_build_object(
    'ok',
    true,
    'learner_id',
    v_learner.id,
    'display_name',
    v_learner.display_name,
    'progress',
    jsonb_build_object(
      'xp',
      v_prog.xp,
      'streak',
      v_prog.streak,
      'lastActiveDate',
      v_prog.last_active_date,
      'completedLessons',
      v_prog.completed_lessons,
      'lessonResults',
      v_prog.lesson_results,
      'totalCorrect',
      v_prog.total_correct,
      'totalAttempts',
      v_prog.total_attempts,
      'sessions',
      v_prog.sessions
    )
  );
end;
$$;

-- Save progress (PIN must match the row being updated)
create or replace function public.save_learner_progress (p_pin text, p_progress jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_learner public.learners%rowtype;
begin
  if p_pin is null or p_pin !~ '^\d{4}$' then
    return jsonb_build_object('ok', false, 'error', 'invalid_pin');
  end if;

  select * into v_learner from public.learners where pin_code = p_pin;

  if not found then
    return jsonb_build_object('ok', false, 'error', 'wrong_pin');
  end if;

  insert into public.learner_progress (
    learner_id,
    xp,
    streak,
    last_active_date,
    completed_lessons,
    lesson_results,
    total_correct,
    total_attempts,
    sessions,
    updated_at
  )
  values (
    v_learner.id,
    coalesce((p_progress ->> 'xp')::int, 0),
    coalesce((p_progress ->> 'streak')::int, 0),
    nullif(p_progress ->> 'lastActiveDate', '')::date,
    coalesce(p_progress -> 'completedLessons', '[]'::jsonb),
    coalesce(p_progress -> 'lessonResults', '{}'::jsonb),
    coalesce((p_progress ->> 'totalCorrect')::int, 0),
    coalesce((p_progress ->> 'totalAttempts')::int, 0),
    coalesce((p_progress ->> 'sessions')::int, 0),
    now()
  )
  on conflict (learner_id) do update
  set
    xp = excluded.xp,
    streak = excluded.streak,
    last_active_date = excluded.last_active_date,
    completed_lessons = excluded.completed_lessons,
    lesson_results = excluded.lesson_results,
    total_correct = excluded.total_correct,
    total_attempts = excluded.total_attempts,
    sessions = excluded.sessions,
    updated_at = now();

  return jsonb_build_object('ok', true);
end;
$$;

-- Lock tables: app only talks via RPC (not raw table access)
alter table public.learners enable row level security;
alter table public.learner_progress enable row level security;

revoke all on public.learners from anon, authenticated;
revoke all on public.learner_progress from anon, authenticated;

grant execute on function public.login_with_pin (text) to anon, authenticated;
grant execute on function public.save_learner_progress (text, jsonb) to anon, authenticated;

-- Seed Houda's account (change PIN here if you want)
insert into public.learners (pin_code, display_name)
values ('0505', 'Houda')
on conflict (pin_code) do nothing;

-- Ensure progress row exists for seeded learner
insert into public.learner_progress (learner_id)
select id from public.learners where pin_code = '0505'
on conflict (learner_id) do nothing;

-- If you already ran an older seed with PIN 1234, run once:
-- update public.learners set pin_code = '0505' where pin_code = '1234';
