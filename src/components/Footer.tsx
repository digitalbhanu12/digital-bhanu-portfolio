import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { blogCategories, brand } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-shell grid gap-8 py-12 md:grid-cols-4">
        <div>
          <p className="text-xl font-black">{brand.name}</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Practical AI knowledge, digital marketing ideas, AI-generated images, videos, and useful resources.
          </p>
          <div className="mt-4 flex gap-3 text-slate-600">
            <Facebook className="h-5 w-5" />
            <Instagram className="h-5 w-5" />
            <Linkedin className="h-5 w-5" />
            <Youtube className="h-5 w-5" />
          </div>
        </div>
        <div>
          <p className="font-semibold">Quick Links</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link href="/blog">Blog</Link>
            <Link href="/ai-images">AI Images</Link>
            <Link href="/ai-videos">AI Videos</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">Blog Categories</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            {blogCategories.slice(0, 5).map((category) => (
              <Link key={category} href={`/blog?category=${encodeURIComponent(category)}`}>
                {category}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Legal</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms and Conditions</Link>
            <Link href="/ai-content-disclosure">AI Content Disclosure</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-sm text-slate-500">{brand.footer}</div>
    </footer>
  );
}
