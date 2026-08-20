import type { MetadataRoute } from "next";
import { featuredPosts } from "@/lib/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const pages = ["", "/about", "/blog", "/ai-images", "/ai-videos", "/services", "/projects", "/contact", "/thanks", "/thank-you", "/privacy", "/terms", "/ai-content-disclosure"];
  return [
    ...pages.map((page) => ({ url: `${siteUrl}${page}`, lastModified: new Date() })),
    ...featuredPosts.map((post) => ({ url: `${siteUrl}/blog/${post.slug}`, lastModified: new Date(post.date) }))
  ];
}
