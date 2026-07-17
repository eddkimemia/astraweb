import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/site-data";
import { CtaBanner } from "@/components/site/cta";
import { ServiceHero } from "@/components/site/service-hero";
import { ServiceContent } from "@/components/site/service-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} — Astra Tech`,
    description: service.description,
    keywords: [
      service.title,
      service.title.toLowerCase() + " Kenya",
      service.title.toLowerCase() + " Nairobi",
      "Astra Tech " + service.title,
      ...service.features.slice(0, 3),
    ],
    openGraph: {
      title: `${service.title} | Astra Tech Security & IT Solutions`,
      description: service.description,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <>
      <ServiceHero
        title={service.title}
        tagline={service.tagline}
        description={service.description}
        features={service.features}
        accent={service.accent}
        slug={service.slug}
      />
      <ServiceContent serviceId={service.id} serviceTitle={service.title} accent={service.accent} />
      <CtaBanner />
    </>
  );
}
