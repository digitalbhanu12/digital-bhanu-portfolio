import { Download, Share2 } from "lucide-react";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { SectionHeading } from "@/components/SectionHeading";
import { imageCategories, imagePlaceholders } from "@/lib/brand";

export const metadata = {
  title: "AI Image Gallery",
  description: "AI-generated image gallery by Digital Bhanu with prompts, tools, categories, and metadata."
};

export default function AiImagesPage() {
  return (
    <main className="section-shell py-14">
      <SectionHeading
        eyebrow="AI Image Gallery"
        title="AI-Generated Images Only"
        description="Every gallery item is clearly labeled and stores the AI tool, prompt, category, creation date, and description."
      />
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {["All", ...imageCategories].map((category) => (
          <button key={category} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold">
            {category}
          </button>
        ))}
      </div>
      <div className="mt-10 columns-1 gap-6 md:columns-2 lg:columns-3">
        {imagePlaceholders.map((item, index) => (
          <article key={item.id} className="card mb-6 break-inside-avoid overflow-hidden">
            <div className="relative">
              <PlaceholderMedia label={item.title} className={`${index === 1 ? "min-h-80" : "min-h-64"} rounded-none border-0`} />
              <span className="absolute left-3 top-3 rounded-full bg-emeraldAccent px-3 py-1 text-xs font-bold text-white">
                AI-Generated Image
              </span>
            </div>
            <div className="p-5">
              <p className="label">{item.category}</p>
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              <dl className="mt-4 grid gap-2 text-sm text-slate-600">
                <div><dt className="font-semibold text-navy">AI tool used</dt><dd>{item.tool}</dd></div>
                <div><dt className="font-semibold text-navy">Prompt used</dt><dd>{item.prompt}</dd></div>
                <div><dt className="font-semibold text-navy">Creation date</dt><dd>{item.createdAt}</dd></div>
              </dl>
              <div className="mt-5 flex gap-2">
                <button className="rounded-lg border border-slate-200 p-2" aria-label="Download image"><Download className="h-4 w-4" /></button>
                <button className="rounded-lg border border-slate-200 p-2" aria-label="Share image"><Share2 className="h-4 w-4" /></button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
