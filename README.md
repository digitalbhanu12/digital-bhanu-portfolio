# Digital Bhanu Portfolio and Blog

Modern responsive personal portfolio, blog, AI image gallery, AI video gallery, and secure admin dashboard starter for **Digital Bhanu**.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase Auth, Database, and Storage

## Included

- Home, About, Blog, AI Images, AI Videos, Services, Projects, Contact, Privacy, Terms, and AI Content Disclosure pages
- Clean upload-ready placeholders only, with no copyrighted stock images
- Visible labels for `AI-Generated Image` and `AI-Generated Video`
- Admin dashboard screens for blog editing, media uploads, projects, messages, subscribers, and site settings
- Required upload confirmation checkbox
- Image validation for JPG, PNG, and WebP
- Video validation for MP4 and WebM
- SEO metadata, sitemap, robots.txt, and article structured data
- Supabase schema with row-level security starter policies
- Appointment link and thank-you page
- Native Flodesk HTML embed integration for the call-booking/newsletter form
- Success-only delayed redirect from Flodesk success state to `/thanks`

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env.local` and fill in your Supabase values:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-for-server-admin-tasks-only
EMAIL_MARKETING_WEBHOOK_URL=optional-email-marketing-webhook-url
```

3. In Supabase, run `supabase/schema.sql`.

4. Create Supabase storage buckets:

- `ai-images`
- `ai-videos`

5. Create your first admin user in Supabase Auth, then add the user id to `public.profiles`.

6. Start the project:

```bash
npm run dev
```

## Content Rules

- Upload only AI-generated images and videos to the galleries.
- Keep the AI tool name, prompt or script, category, creation date, and description for every media item.
- Do not add fake testimonials, fake client names, unsupported achievements, or expert claims.
- Keep website copy editable through the admin dashboard and Supabase tables.

## Next Steps Before Launch

- Keep the Flodesk embed form action, field names, hidden inputs, and scripts unchanged when editing the form.
- Add Supabase middleware route protection for `/admin`.
- Replace placeholder contact/social values with real links.
- The Flodesk embed captures leads directly inside Flodesk and preserves Flodesk automation. The site redirects to `/thanks` only after the embed reports success.
- Review Privacy Policy and Terms for your business and location.
