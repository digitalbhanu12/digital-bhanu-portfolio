import { AdminShell } from "@/components/AdminShell";
import { brand } from "@/lib/brand";

export const metadata = { title: "Website Settings" };

export default function AdminSettingsPage() {
  return (
    <AdminShell>
      <h1 className="text-3xl font-black">Website Content and Settings</h1>
      <form className="mt-8 grid gap-4 rounded-lg border border-slate-200 bg-white p-6">
        <input className="field" defaultValue={brand.name} />
        <input className="field" defaultValue={brand.fullName} />
        <input className="field" defaultValue={brand.title} />
        <input className="field" defaultValue={brand.tagline} />
        <input className="field" placeholder="Profile image URL" />
        <input className="field" placeholder="Facebook link" />
        <input className="field" placeholder="Instagram link" />
        <input className="field" placeholder="LinkedIn link" />
        <input className="field" placeholder="YouTube link" />
        <button className="w-fit rounded-lg bg-navy px-5 py-3 font-bold text-white">Save Settings</button>
      </form>
    </AdminShell>
  );
}
