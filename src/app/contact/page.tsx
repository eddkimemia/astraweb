import type { Metadata } from "next";
import { Contact } from "@/components/site/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Astra Tech for a free security assessment, project consultation, or managed IT services. Offices in Westlands, Nairobi.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary py-20 text-white sm:py-28">
        <div className="bg-grid-dark absolute inset-0 opacity-25" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 10%, #165DFF4D, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
            Get in Touch
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s build your{" "}
            <span className="text-gradient">technology backbone</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Book a free 30-minute consultation with our solutions architects.
            No obligation, no pressure — just expert advice.
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
}
