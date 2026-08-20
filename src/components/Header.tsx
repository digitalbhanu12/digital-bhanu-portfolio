import Link from "next/link";
import { brand } from "@/lib/brand";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Blog", "/blog"],
  ["AI Images", "/ai-images"],
  ["AI Videos", "/ai-videos"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Contact", "/contact"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="section-shell flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="text-lg font-black text-navy">
          {brand.name}
        </Link>
        <div className="hidden items-center gap-5 text-sm font-medium text-slate-700 lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-skyAccent">
              {label}
            </Link>
          ))}
        </div>
        <Link
          href="/admin/login"
          className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Admin
        </Link>
      </nav>
    </header>
  );
}
