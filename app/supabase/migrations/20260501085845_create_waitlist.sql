-- ウェイティングリスト用のテーブルを作成
create table public.waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS (Row Level Security) を有効化
alter table public.waitlist enable row level security;

-- 匿名ユーザー（クライアント）からのInsertのみを許可するポリシー
create policy "Enable insert for anonymous users" 
  on public.waitlist
  for insert 
  to anon
  with check (true);
