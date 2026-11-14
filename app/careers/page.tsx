import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { SiteFrame } from "@/components/SiteFrame";
import { serviceBySlug, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: site.hero.careersDescription,
};

const counsellingServices = [
  serviceBySlug("career-counselling"),
  serviceBySlug("medical-counselling"),
];

export default function CareersPage() {
  return (
    <SiteFrame activeHref="/careers/">
      <PageHero
        title={site.hero.careersTitle}
        description={site.hero.careersDescription}
      />

      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 md:pb-20 lg:px-10">
        <SectionHeading title={site.careers.counsellingTitle} />
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {counsellingServices.map((service) => (
            <ServiceCard key={service.slug} service={service} featured />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20 lg:px-10">
          <SectionHeading title={site.careers.pathTitle} />
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {site.careers.steps.map((step, index) => (
              <li
                key={step}
                className="relative flex min-h-32 items-center gap-4 rounded-2xl bg-warm p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo font-heading font-semibold text-white">
                  0{index + 1}
                </span>
                <span className="font-heading text-xl font-semibold text-indigo">
                  {step}
                </span>
                {index < site.careers.steps.length - 1 && (
                  <ArrowRight
                    size={18}
                    className="absolute -right-3 z-10 hidden text-saffron md:block"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:py-24 lg:px-10">
        <div>
          <SectionHeading title={site.careers.practicalTitle} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[serviceBySlug("internship-opportunities"), serviceBySlug("job-placement-assistance")].map(
              (service, index) => (
                <article
                  key={service.slug}
                  className="relative overflow-hidden rounded-2xl border border-indigo/10 bg-white p-5 shadow-soft"
                >
                  <div className="signature-band absolute inset-x-0 top-0 h-1" />
                  <h3 className="font-heading text-xl font-semibold text-indigo">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {index === 0
                      ? site.careers.internshipText
                      : site.careers.placementText}
                  </p>
                  <a
                    href="/contact/"
                    className="mt-5 inline-flex rounded-full border border-indigo/15 px-4 py-2 text-sm font-semibold text-indigo transition hover:border-saffron hover:text-saffron"
                  >
                    {site.contactUs}
                  </a>
                </article>
              ),
            )}
          </div>
        </div>
        <div className="relative h-[330px] overflow-hidden rounded-[24px] shadow-card sm:h-[440px]">
          <Image
            src="/images/career-support.png"
            alt="A career professional holds a laptop in a modern office, with coworkers and career growth imagery in the background."
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </section>
      <CTABanner title={site.careers.cta} />
    </SiteFrame>
  );
}
