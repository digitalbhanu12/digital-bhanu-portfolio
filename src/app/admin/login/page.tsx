import Link from "next/link";
import { brand } from "@/lib/brand";

export const metadata = { title: "Admin Login" };

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-mist px-4">
      <form className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-glow">
        <p className="label">Secure Admin Login</p>
        <h1 className="mt-4 text-3xl font-black">{brand.name}</h1>
        <p className="mt-2 text-sm text-slate-600">
          Connect Supabase Auth to protect the dashboard and allow only approved admin users.
        </p>
        <label className="mt-6 block text-sm font-semibold">Email</label>
        <input className="field mt-2" type="email" placeholder="admin@example.com" />
        <label className="mt-4 block text-sm font-semibold">Password</label>
        <input className="field mt-2" type="password" placeholder="Password" />
        <Link href="/admin/dashboard" className="mt-6 flex justify-center rounded-lg bg-navy px-5 py-3 font-bold text-white">
          Sign In
        </Link>
      </form>
    </main>
  );
}
