import Link from "next/link";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { SectionHeading } from "@/components/SectionHeading";
import { brand } from "@/lib/brand";

export const metadata = {
  title: "About",
  description: "Learn about Bhanu Bhakta Pokhrel, also known as Digital Bhanu."
};

export default function AboutPage() {
  return (
    <main className="section-shell py-14">
      <SectionHeading eyebrow="About Me" title={brand.fullName} description={brand.title} />
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <PlaceholderMedia label="AI-generated profile image placeholder" kind="profile" className="min-h-[380px]" />
        <div className="text-lg leading-8 text-slate-600">
          <p>
            I am Bhanu Bhakta Pokhrel, also known as Digital Bhanu. I am learning and sharing practical knowledge about
            artificial intelligence, digital marketing, content creation, website development, and online business
            growth. My goal is to make AI and digital skills simple and useful for beginners, entrepreneurs, and small
            business owners.
          </p>
          <div className="mt-6 grid gap-3 text-base text-navy sm:grid-cols-2">
            <div className="card p-5"><strong>Location:</strong> {brand.location}</div>
            <div className="card p-5"><strong>Language:</strong> {brand.language}</div>
            <div className="card p-5"><strong>Optional:</strong> {brand.optionalLanguage}</div>
            <div className="card p-5"><strong>Tagline:</strong> {brand.tagline}</div>
          </div>
          <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-navy px-5 py-3 text-sm font-bold text-white">
            Contact Digital Bhanu
          </Link>
        </div>
      </div>
    </main>
  );
}
