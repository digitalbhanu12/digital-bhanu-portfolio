import Link from "next/link";
import { brand } from "@/lib/brand";

const adminLinks = [
  ["Dashboard", "/admin/dashboard"],
  ["Blog Editor", "/admin/blog"],
  ["Media", "/admin/media"],
  ["Projects", "/admin/projects"],
  ["Messages", "/admin/messages"],
  ["Settings", "/admin/settings"]
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed hidden h-full w-64 border-r border-slate-200 bg-white p-6 lg:block">
        <p className="text-xl font-black">{brand.name}</p>
        <p className="mt-1 text-xs text-slate-500">Secure admin dashboard</p>
        <nav className="mt-8 grid gap-2">
          {adminLinks.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-sky-50">
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="lg:pl-64">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
