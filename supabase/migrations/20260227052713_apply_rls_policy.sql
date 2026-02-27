alter table todos enable row level security;

create policy "Allow all access to everyone"
on todos
for all
using (true)
with check (true);