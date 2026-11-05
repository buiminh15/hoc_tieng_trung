-- Tính năng "Tự giải thích" (phương pháp Feynman).
-- Chạy trong Supabase Dashboard > SQL Editor (sau khi đã chạy schema.sql).

create table if not exists public.self_explanations (
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  lesson_key text not null,        -- "quyển-bài", ví dụ "1-7"
  topic_id text not null,          -- id chủ đề trong src/data/selfExplain.ts
  content text not null default '',
  rating text check (rating in ('fluent', 'stuck')),   -- fluent: nói trôi chảy, stuck: còn bí
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_key, topic_id)
);

create index if not exists self_explanations_stuck_idx
  on public.self_explanations (user_id, updated_at desc) where rating = 'stuck';

alter table public.self_explanations enable row level security;

create policy "own self explanations" on public.self_explanations
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
