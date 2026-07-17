import { Hero } from "@/components/site/hero";
import { TrustBar } from "@/components/site/trust-bar";
import { Services } from "@/components/site/services";
import { WhyUs } from "@/components/site/why-us";
import { Stats } from "@/components/site/stats";
import { Process } from "@/components/site/process";
import { Testimonials } from "@/components/site/testimonials";
import { CtaBanner } from "@/components/site/cta";
import { Contact } from "@/components/site/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Astra Tech — Security & IT Solutions | Kenya",
  description:
    "World-class security systems, networking, IT infrastructure, cybersecurity & smart business solutions across Kenya & East Africa. 500+ clients protected. 24/7 SOC & NOC.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Stats />
      <Process />
      <Testimonials />
      <CtaBanner />
      <Contact />
    </>
  );
}
