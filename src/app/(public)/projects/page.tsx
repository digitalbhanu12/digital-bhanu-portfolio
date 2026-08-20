import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/brand";

const filters = ["All", "Website", "AI Images", "AI Videos", "Social Media", "Digital Marketing"];

export const metadata = {
  title: "Projects",
  description: "Selected Digital Bhanu project placeholders for websites, AI images, AI videos, social media, and digital marketing."
};

export default function ProjectsPage() {
  return (
    <main className="section-shell py-14">
      <SectionHeading eyebrow="Projects" title="Selected Projects" />
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button key={filter} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold">
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article className="card overflow-hidden" key={project.title}>
            <PlaceholderMedia label="Project image or video" className="min-h-48 rounded-none border-0" />
            <div className="p-5">
              <p className="label">{project.category}</p>
              <h2 className="mt-4 text-xl font-bold">{project.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{project.description}</p>
              <p className="mt-4 text-xs font-semibold uppercase text-slate-500">Tools used</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tools.map((tool) => <span key={tool} className="rounded-full bg-sky-50 px-3 py-1 text-xs">{tool}</span>)}
              </div>
              <button className="mt-5 font-semibold text-skyAccent">View Project</button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
