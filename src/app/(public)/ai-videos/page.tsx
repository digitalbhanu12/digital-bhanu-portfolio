import { Maximize2, Play, Share2 } from "lucide-react";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { SectionHeading } from "@/components/SectionHeading";
import { videoCategories, videoPlaceholders } from "@/lib/brand";

export const metadata = {
  title: "AI Video Gallery",
  description: "AI-generated video gallery by Digital Bhanu with tools, prompts or scripts, categories, and metadata."
};

export default function AiVideosPage() {
  return (
    <main className="section-shell py-14">
      <SectionHeading
        eyebrow="AI Video Gallery"
        title="AI-Generated Videos Only"
        description="Upload AI-generated videos or add YouTube links, then store the prompt or script, tool, duration, and category."
      />
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {["All", ...videoCategories].map((category) => (
          <button key={category} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold">
            {category}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {videoPlaceholders.map((item) => (
          <article key={item.id} className="card overflow-hidden">
            <div className="relative">
              <PlaceholderMedia label={item.title} kind="video" className="min-h-72 rounded-none border-0" />
              <span className="absolute left-3 top-3 rounded-full bg-emeraldAccent px-3 py-1 text-xs font-bold text-white">
                AI-Generated Video
              </span>
              <button className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/90" aria-label="Play video">
                <Play className="h-7 w-7 text-navy" />
              </button>
            </div>
            <div className="p-5">
              <p className="label">{item.category}</p>
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              <dl className="mt-4 grid gap-2 text-sm text-slate-600">
                <div><dt className="font-semibold text-navy">AI video tool used</dt><dd>{item.tool}</dd></div>
                <div><dt className="font-semibold text-navy">Prompt or script used</dt><dd>{item.prompt}</dd></div>
                <div><dt className="font-semibold text-navy">Duration</dt><dd>{item.duration}</dd></div>
                <div><dt className="font-semibold text-navy">Creation date</dt><dd>{item.createdAt}</dd></div>
              </dl>
              <div className="mt-5 flex gap-2">
                <button className="rounded-lg border border-slate-200 p-2" aria-label="Full screen video"><Maximize2 className="h-4 w-4" /></button>
                <button className="rounded-lg border border-slate-200 p-2" aria-label="Share video"><Share2 className="h-4 w-4" /></button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
