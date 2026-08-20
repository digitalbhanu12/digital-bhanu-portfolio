import { BlogCard } from "@/components/BlogCard";
import { SectionHeading } from "@/components/SectionHeading";
import { blogCategories, featuredPosts } from "@/lib/brand";

export const metadata = {
  title: "Blog",
  description: "AI and digital marketing articles by Digital Bhanu."
};

export default function BlogPage() {
  return (
    <main className="section-shell py-14">
      <SectionHeading
        eyebrow="Blog"
        title="AI and Digital Marketing Articles"
        description="Browse practical ideas about AI, content creation, website development, social media, and marketing."
      />
      <div className="mt-8 grid gap-3 rounded-lg border border-slate-200 bg-white p-4 md:grid-cols-[1fr_auto]">
        <input className="field" placeholder="Search blog posts" aria-label="Search blog posts" />
        <select className="field md:w-72" aria-label="Filter by category">
          <option>All categories</option>
          {blogCategories.map((category) => <option key={category}>{category}</option>)}
        </select>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {featuredPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
      </div>
      <div className="mt-10 flex justify-center gap-2">
        {[1, 2, 3].map((page) => (
          <button key={page} className="h-10 w-10 rounded-lg border border-slate-200 bg-white font-semibold">
            {page}
          </button>
        ))}
      </div>
    </main>
  );
}
