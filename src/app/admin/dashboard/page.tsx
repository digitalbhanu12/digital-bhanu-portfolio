import { AdminShell } from "@/components/AdminShell";

const stats = ["Blog posts", "AI images", "AI videos", "Projects", "Messages", "Subscribers"];

export const metadata = { title: "Admin Dashboard" };

export default function DashboardPage() {
  return (
    <AdminShell>
      <h1 className="text-3xl font-black">Dashboard</h1>
      <p className="mt-2 text-slate-600">Manage Digital Bhanu content, galleries, contacts, newsletter, and settings.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat} className="card p-5">
            <p className="text-sm text-slate-500">{stat}</p>
            <p className="mt-3 text-3xl font-black">0</p>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
