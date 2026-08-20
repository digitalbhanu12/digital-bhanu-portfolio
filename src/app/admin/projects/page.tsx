import { AdminShell } from "@/components/AdminShell";

const filters = ["Website", "AI Images", "AI Videos", "Social Media", "Digital Marketing"];

export const metadata = { title: "Manage Projects" };

export default function AdminProjectsPage() {
  return (
    <AdminShell>
      <h1 className="text-3xl font-black">Projects</h1>
      <form className="mt-8 grid gap-4 rounded-lg border border-slate-200 bg-white p-6">
        <input className="field" placeholder="Project title" />
        <select className="field">
          {filters.map((filter) => <option key={filter}>{filter}</option>)}
        </select>
        <textarea className="field min-h-24" placeholder="Short project description" />
        <input className="field" placeholder="Tools used, separated by commas" />
        <input className="field" placeholder="Project image or video URL" />
        <button className="w-fit rounded-lg bg-navy px-5 py-3 font-bold text-white">Save Project</button>
      </form>
    </AdminShell>
  );
}
