-- Digital Bhanu Supabase schema
-- Run this in the Supabase SQL editor, then create storage buckets named ai-images and ai-videos.

create extension if not exists "uuid-ossp";

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'admin' check (role in ('admin')),
  display_name text,
  created_at timestamptz not null default now()
);

create table public.categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  type text not null check (type in ('blog', 'image', 'video', 'project')),
  created_at timestamptz not null default now(),
  unique (name, type)
);

create table public.blog_posts (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text not null unique,
  featured_image_url text,
  category_id uuid references public.categories(id),
  tags text[] not null default '{}',
  excerpt text not null,
  content text not null,
  seo_title text,
  meta_description text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.ai_images (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text not null,
  file_url text not null,
  alt_text text not null,
  ai_tool text not null,
  prompt text not null,
  category_id uuid references public.categories(id),
  creation_date date,
  is_ai_generated boolean not null default true,
  permission_confirmed boolean not null default false,
  created_at timestamptz not null default now(),
  constraint ai_images_confirmed check (is_ai_generated = true and permission_confirmed = true)
);

create table public.ai_videos (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text not null,
  video_url text,
  youtube_url text,
  thumbnail_url text,
  ai_tool text not null,
  prompt_or_script text not null,
  duration text,
  category_id uuid references public.categories(id),
  creation_date date,
  is_ai_generated boolean not null default true,
  permission_confirmed boolean not null default false,
  created_at timestamptz not null default now(),
  constraint ai_videos_source check (video_url is not null or youtube_url is not null),
  constraint ai_videos_confirmed check (is_ai_generated = true and permission_confirmed = true)
);

create table public.projects (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  category text not null check (category in ('Website', 'AI Images', 'AI Videos', 'Social Media', 'Digital Marketing')),
  description text not null,
  media_url text,
  tools text[] not null default '{}',
  created_at timestamptz not null default now()
);

create table public.contact_messages (
  id uuid primary key default uuid_generate_v4(),
  full_name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.newsletter_subscribers (
  id uuid primary key default uuid_generate_v4(),
  name text,
  email text not null unique,
  created_at timestamptz not null default now()
);

create table public.site_settings (
  id int primary key default 1 check (id = 1),
  brand_name text not null default 'Digital Bhanu',
  full_name text not null default 'Bhanu Bhakta Pokhrel',
  professional_title text not null default 'AI Marketing Learner, Content Creator, and Digital Marketing Consultant',
  tagline text not null default 'Learn, Create, and Grow with AI',
  profile_image_url text,
  social_links jsonb not null default '{}',
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.blog_posts enable row level security;
alter table public.ai_images enable row level security;
alter table public.ai_videos enable row level security;
alter table public.projects enable row level security;
alter table public.contact_messages enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.site_settings enable row level security;

create policy "Public can read published blog posts" on public.blog_posts for select using (status = 'published');
create policy "Public can read AI images" on public.ai_images for select using (is_ai_generated = true);
create policy "Public can read AI videos" on public.ai_videos for select using (is_ai_generated = true);
create policy "Public can read projects" on public.projects for select using (true);
create policy "Public can read site settings" on public.site_settings for select using (true);
create policy "Public can create contact messages" on public.contact_messages for insert with check (true);
create policy "Public can subscribe" on public.newsletter_subscribers for insert with check (true);

create policy "Admins manage categories" on public.categories for all using (auth.uid() in (select id from public.profiles));
create policy "Admins manage blog posts" on public.blog_posts for all using (auth.uid() in (select id from public.profiles));
create policy "Admins manage AI images" on public.ai_images for all using (auth.uid() in (select id from public.profiles));
create policy "Admins manage AI videos" on public.ai_videos for all using (auth.uid() in (select id from public.profiles));
create policy "Admins manage projects" on public.projects for all using (auth.uid() in (select id from public.profiles));
create policy "Admins read messages" on public.contact_messages for select using (auth.uid() in (select id from public.profiles));
create policy "Admins read subscribers" on public.newsletter_subscribers for select using (auth.uid() in (select id from public.profiles));
create policy "Admins manage site settings" on public.site_settings for all using (auth.uid() in (select id from public.profiles));
