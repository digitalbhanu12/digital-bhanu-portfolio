import Link from "next/link";
import { BarChart3, BrainCircuit, Cpu, PenTool, PlayCircle } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
import { Newsletter } from "@/components/Newsletter";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { SectionHeading } from "@/components/SectionHeading";
import { brand, featuredPosts, projects, services } from "@/lib/brand";

export default function HomePage() {
  return (
    <main>
      <section className="overflow-hidden bg-mist py-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="label">{brand.title}</p>
            <h1 className="mt-5 text-4xl font-black leading-tight text-navy sm:text-5xl lg:text-6xl">
              Explore AI, Digital Marketing, and Creative Innovation
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I share practical AI knowledge, digital marketing ideas, AI-generated images, videos, and useful
              resources to help people learn and grow online.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/blog" className="rounded-lg bg-navy px-5 py-3 font-bold text-white">
                Explore My Blog
              </Link>
              <Link href="/ai-images" className="rounded-lg border border-sky-200 bg-white px-5 py-3 font-bold text-navy">
                View AI Creations
              </Link>
            </div>
          </div>
          <div className="relative">
            <PlaceholderMedia label="Upload AI-generated professional profile image" kind="profile" className="min-h-[430px]" />
            <div className="absolute left-4 top-4 grid gap-3 text-sm font-semibold text-navy">
              {[
                [Cpu, "AI chip"],
                [PenTool, "Content creation"],
                [BarChart3, "Analytics graph"],
                [BrainCircuit, "Marketing dashboard"],
                [PlayCircle, "Video play"]
              ].map(([Icon, label]) => (
                <span key={label as string} className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 shadow-sm">
                  <Icon className="h-4 w-4 text-emeraldAccent" /> {label as string}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading eyebrow="About" title={`Meet ${brand.fullName}`} />
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-lg leading-8 text-slate-600">
            I am Bhanu Bhakta Pokhrel, also known as Digital Bhanu. I am learning and sharing practical knowledge
            about artificial intelligence, digital marketing, content creation, website development, and online business
            growth. My goal is to make AI and digital skills simple and useful for beginners, entrepreneurs, and small
            business owners.
          </p>
          <Link href="/about" className="mt-6 inline-flex rounded-lg bg-skyAccent px-5 py-3 font-bold text-white">
            Read More About Me
          </Link>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <SectionHeading eyebrow="Blog" title="Featured Articles" description="Search, category filters, pagination, and database-powered posts are included in the project structure." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading eyebrow="Services" title="Services" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, description]) => (
            <div className="card p-6" key={title}>
              <BrainCircuit className="h-8 w-8 text-emeraldAccent" />
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              <Link href="/services" className="mt-5 inline-flex font-semibold text-skyAccent">Learn More</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <SectionHeading eyebrow="Projects" title="Selected Project Placeholders" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <div className="card overflow-hidden" key={project.title}>
                <PlaceholderMedia label="Project image or video" className="min-h-40 rounded-none border-0" />
                <div className="p-5">
                  <p className="label">{project.category}</p>
                  <h3 className="mt-4 font-bold">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{project.description}</p>
                  <Link href="/projects" className="mt-5 inline-flex font-semibold text-skyAccent">View Project</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
