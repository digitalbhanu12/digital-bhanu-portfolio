import { notFound } from "next/navigation";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { featuredPosts } from "@/lib/brand";

export function generateStaticParams() {
  return featuredPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = featuredPosts.find((item) => item.slug === params.slug);
  return {
    title: post?.title || "Blog Post",
    description: post?.excerpt || "Digital Bhanu blog article"
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = featuredPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: "Bhanu Bhakta Pokhrel" },
    description: post.excerpt
  };

  return (
    <main className="section-shell py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <article className="mx-auto max-w-3xl">
        <p className="label">{post.category}</p>
        <h1 className="mt-5 text-4xl font-black leading-tight text-navy">{post.title}</h1>
        <p className="mt-4 text-slate-500">{post.date} · {post.readingTime}</p>
        <PlaceholderMedia label="Featured article image" className="mt-8 min-h-80" />
        <div className="prose prose-slate mt-8 max-w-none">
          <p>{post.excerpt}</p>
          <h2>Article placeholder</h2>
          <p>
            Use the admin blog editor to replace this starter text with the full article, headings, lists, quotes,
            images, embedded AI videos, SEO title, meta description, publish date, tags, and draft or published status.
          </p>
          <blockquote>Make AI and digital skills simple and useful for beginners.</blockquote>
        </div>
      </article>
    </main>
  );
}
