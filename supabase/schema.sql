-- Chạy trong Supabase Dashboard > SQL Editor
create table if not exists public.words (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  hanzi text not null,
  pinyin text not null,
  meaning text not null,
  han_viet text,
  hsk_level smallint,
  example text,
  tags text[] default '{}',
  created_at timestamptz not null default now(),
  unique (user_id, hanzi)
);

-- Trạng thái SRS (FSRS) cho mỗi từ
create table if not exists public.cards (
  word_id uuid primary key references public.words(id) on delete cascade,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  due timestamptz not null default now(),
  fsrs jsonb not null,
  updated_at timestamptz not null default now()
);
create index if not exists cards_due_idx on public.cards(user_id, due);

create table if not exists public.review_logs (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  word_id uuid not null references public.words(id) on delete cascade,
  rating smallint not null, -- 1 Again, 2 Hard, 3 Good, 4 Easy
  reviewed_at timestamptz not null default now()
);

alter table public.words enable row level security;
alter table public.cards enable row level security;
alter table public.review_logs enable row level security;

create policy "own words" on public.words for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own cards" on public.cards for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own logs" on public.review_logs for all using (user_id = auth.uid()) with check (user_id = auth.uid());
