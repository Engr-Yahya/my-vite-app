create table todos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  is_completed boolean not null default false,
  created_at timestamp with time zone not null default now()
);