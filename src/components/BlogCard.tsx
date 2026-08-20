import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/types/content";
import { PlaceholderMedia } from "./PlaceholderMedia";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card overflow-hidden">
      <PlaceholderMedia label="Featured blog image" className="min-h-44 rounded-none border-0" />
      <div className="p-5">
        <p className="label">{post.category}</p>
        <h3 className="mt-4 text-xl font-bold text-navy">{post.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-4 w-4" /> {post.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-4 w-4" /> {post.readingTime}
          </span>
        </div>
        <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex font-semibold text-skyAccent">
          Read More
        </Link>
      </div>
    </article>
  );
}
