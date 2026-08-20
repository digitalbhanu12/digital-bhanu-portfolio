import Link from "next/link";
import { CheckCircle2, MessageCircle, PlayCircle } from "lucide-react";
import { brand } from "@/lib/brand";

export const metadata = {
  title: "Thanks",
  description: "Thank you for booking a call with Digital Bhanu."
};

export default function ThanksPage() {
  return (
    <main className="section-shell flex min-h-[70vh] items-center justify-center py-14">
      <section className="card max-w-2xl p-8 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-emeraldAccent" />
        <p className="label mt-5">Digital Bhanu</p>
        <h1 className="mt-4 text-4xl font-black">Thank you for booking a call</h1>
        <p className="mt-4 text-slate-600">
          Your details were submitted through Flodesk. Please check your email for the next steps.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={brand.whatsappUrl}
            className="inline-flex items-center gap-2 rounded-lg bg-emeraldAccent px-5 py-3 font-bold text-white"
          >
            <MessageCircle className="h-5 w-5" />
            Message on WhatsApp
          </Link>
          <Link
            href={brand.thankYouVideoUrl}
            className="inline-flex items-center gap-2 rounded-lg border border-sky-200 bg-white px-5 py-3 font-bold text-navy"
          >
            <PlayCircle className="h-5 w-5 text-skyAccent" />
            Watch Video
          </Link>
          <Link href="/" className="inline-flex rounded-lg bg-navy px-5 py-3 font-bold text-white">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
