import { AdminShell } from "@/components/AdminShell";

export const metadata = { title: "Messages and Subscribers" };

export default function AdminMessagesPage() {
  return (
    <AdminShell>
      <h1 className="text-3xl font-black">Messages and Subscribers</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="card p-6">
          <h2 className="text-xl font-bold">Contact Form Messages</h2>
          <p className="mt-3 text-sm text-slate-600">New contact submissions from Supabase will appear here.</p>
        </section>
        <section className="card p-6">
          <h2 className="text-xl font-bold">Newsletter Subscribers</h2>
          <p className="mt-3 text-sm text-slate-600">Subscriber names, emails, and signup dates will appear here.</p>
        </section>
      </div>
    </AdminShell>
  );
}
