import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { brand } from "@/lib/brand";

export const metadata = {
  title: "Thank You",
  description: "Thank you for contacting or subscribing to Digital Bhanu."
};

export default function ThankYouPage({
  searchParams
}: {
  searchParams: { type?: string };
}) {
  const type = searchParams.type || "message";
  const title = type === "newsletter" ? "Thank you for subscribing" : "Thank you for your message";
  const description =
    type === "newsletter"
      ? "You are now added to receive practical AI and digital marketing tips from Digital Bhanu."
      : "Your message has been received. Digital Bhanu will review it and respond as soon as possible.";

  return (
    <main className="section-shell flex min-h-[70vh] items-center justify-center py-14">
      <section className="card max-w-2xl p-8 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-emeraldAccent" />
        <p className="label mt-5">Digital Bhanu</p>
        <h1 className="mt-4 text-4xl font-black">{title}</h1>
        <p className="mt-4 text-slate-600">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-lg bg-navy px-5 py-3 font-bold text-white">
            Back to Home
          </Link>
          <Link href={brand.appointmentUrl} className="rounded-lg border border-sky-200 bg-white px-5 py-3 font-bold text-navy">
            Book Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
