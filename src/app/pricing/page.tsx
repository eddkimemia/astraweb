import type { Metadata } from "next";
import { Pricing } from "@/components/site/pricing";
import { Faq } from "@/components/site/faq";
import { CtaBanner } from "@/components/site/cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent managed service plans for businesses of all sizes. Predictable monthly pricing in Kenyan Shillings with SLA-backed guarantees.",
};

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[#061A3D]" />
        <div className="bg-grid-dark absolute inset-0 opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, #165DFF55, transparent 60%), radial-gradient(ellipse 50% 50% at 90% 30%, #E31B2320, transparent 60%)",
          }}
        />
        <div className="animate-blob absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-[#165DFF33] blur-3xl" />
        <div className="animate-blob absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#E31B231A] blur-3xl [animation-delay:6s]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
            Managed Service Plans
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Transparent pricing that{" "}
            <span className="text-gradient">scales with you</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Predictable monthly plans covering monitoring, support and security.
            All prices in Kenyan Shillings, exclusive of VAT.
          </p>
        </div>
      </section>

      <Pricing />
      <Faq />
      <CtaBanner />
    </>
  );
}
