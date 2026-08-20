import { Facebook, Instagram, Linkedin, MessageCircle, Youtube } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { brand } from "@/lib/brand";

export const metadata = {
  title: "Contact",
  description: "Contact Digital Bhanu for projects, collaboration ideas, or questions."
};

export default function ContactPage() {
  return (
    <main className="section-shell py-14">
      <SectionHeading eyebrow="Contact" title="Have a project, collaboration idea, or question? Send me a message." />
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="card p-6">
          <h2 className="text-xl font-bold">{brand.fullName}</h2>
          <p className="mt-2 text-slate-600">{brand.title}</p>
          <p className="mt-6 text-sm text-slate-600">Email: {brand.email}</p>
          <p className="mt-2 text-sm text-slate-600">Phone or WhatsApp: {brand.phone}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-emeraldAccent px-4 py-3 text-sm font-bold text-white">
              <MessageCircle className="h-4 w-4" /> WhatsApp Contact
            </button>
            <Link
              href={brand.appointmentUrl}
              className="inline-flex rounded-lg bg-navy px-4 py-3 text-sm font-bold text-white"
            >
              Book Appointment
            </Link>
          </div>
          <div className="mt-6 flex gap-3 text-slate-600">
            <Facebook /><Instagram /><Linkedin /><Youtube />
          </div>
        </aside>
        <form action="/api/contact" method="post" className="card grid gap-4 p-6">
          <input className="field" name="fullName" placeholder="Full name" required />
          <input className="field" name="email" type="email" placeholder="Email address" required />
          <input className="field" name="phone" placeholder="Phone or WhatsApp number" />
          <input className="field" name="subject" placeholder="Subject" required />
          <textarea className="field min-h-36" name="message" placeholder="Message" required />
          <button className="rounded-lg bg-navy px-5 py-3 font-bold text-white">Send Message</button>
        </form>
      </div>
    </main>
  );
}
