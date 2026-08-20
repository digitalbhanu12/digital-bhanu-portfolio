import { FlodeskEmbed } from "./FlodeskEmbed";

export function Newsletter() {
  return (
    <section id="book-call" className="bg-navy py-16 text-white">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="label border-sky-200 bg-white/10 text-sky-100">Book a Call</p>
          <h2 className="mt-4 text-3xl font-black">Get Practical AI and Digital Marketing Tips</h2>
          <p className="mt-4 max-w-xl text-slate-200">
            Fill the Flodesk form to join the Digital Bhanu list and book a call. Your details are captured directly
            inside Flodesk, so its native automation flow stays active.
          </p>
          <p className="mt-4 text-sm text-slate-300">After successful submission, you will be redirected to the thank-you page.</p>
        </div>
        <div className="rounded-lg border border-white/20 bg-white p-3 shadow-glow sm:p-5">
          <FlodeskEmbed />
        </div>
      </div>
    </section>
  );
}
