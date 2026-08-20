import { AdminShell } from "@/components/AdminShell";
import { blogCategories } from "@/lib/brand";

export const metadata = { title: "Blog Editor" };

export default function AdminBlogPage() {
  return (
    <AdminShell>
      <h1 className="text-3xl font-black">Blog Editor</h1>
      <form className="mt-8 grid gap-4 rounded-lg border border-slate-200 bg-white p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <input className="field" placeholder="Blog title" />
          <input className="field" placeholder="Slug" />
          <input className="field" placeholder="Featured image URL" />
          <select className="field">
            {blogCategories.map((category) => <option key={category}>{category}</option>)}
          </select>
          <input className="field" placeholder="Tags, separated by commas" />
          <input className="field" placeholder="Publish date" type="date" />
          <input className="field" placeholder="SEO title" />
          <input className="field" placeholder="Meta description" />
        </div>
        <textarea className="field min-h-24" placeholder="Short excerpt" />
        <textarea className="field min-h-72" placeholder="Full article with headings, lists, quotes, images, and embedded AI videos" />
        <select className="field max-w-xs">
          <option>draft</option>
          <option>published</option>
        </select>
        <button className="w-fit rounded-lg bg-navy px-5 py-3 font-bold text-white">Save Blog Post</button>
      </form>
    </AdminShell>
  );
}
