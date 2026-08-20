import { BrainCircuit } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/brand";

export const metadata = {
  title: "Services",
  description: "AI content creation, prompts, AI video ads, social media, websites, and digital marketing consultation."
};

export default function ServicesPage() {
  return (
    <main className="section-shell py-14">
      <SectionHeading eyebrow="Services" title="Digital Bhanu Services" />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map(([title, description]) => (
          <article className="card p-6" key={title}>
            <BrainCircuit className="h-9 w-9 text-emeraldAccent" />
            <h2 className="mt-5 text-xl font-bold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            <button className="mt-5 font-semibold text-skyAccent">Learn More</button>
          </article>
        ))}
      </div>
    </main>
  );
}
