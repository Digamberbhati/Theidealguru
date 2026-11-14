import type { Metadata } from "next";
import { ArrowDown, ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFrame } from "@/components/SiteFrame";
import { serviceBySlug, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learning",
  description: site.hero.learningDescription,
};

export default function LearningPage() {
  return (
    <SiteFrame activeHref="/learning/">
      <PageHero
        title={site.hero.learningTitle}
        description={site.hero.learningDescription}
        image={{
          src: "/images/children-honoured.jpg",
          alt: "Young participants gather during an educational event.",
        }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20 lg:px-10">
          <SectionHeading title={site.learning.journeyTitle} />
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {site.learning.journey.map((step, index) => (
              <li key={step} className="relative">
                <div className="flex min-h-24 items-center gap-4 rounded-2xl border border-indigo/10 bg-warm p-5 md:flex-col md:items-start">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo font-heading font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="font-heading text-lg font-semibold text-indigo">
                    {step}
                  </span>
                </div>
                {index < site.learning.journey.length - 1 && (
                  <>
                    <ArrowDown
                      size={18}
                      className="absolute -bottom-5 left-1/2 z-10 text-saffron md:hidden"
                      aria-hidden="true"
                    />
                    <ArrowRight
                      size={18}
                      className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-saffron md:block"
                      aria-hidden="true"
                    />
                  </>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <SectionHeading title={site.learning.detailTitle} />
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {site.learning.details.map((detail) => {
            const service = serviceBySlug(detail.slug);
            const special = detail.slug === "english-language-learning";
            return (
              <article
                key={detail.slug}
                className={`relative overflow-hidden rounded-2xl border p-6 shadow-soft ${
                  special
                    ? "border-saffron/20 bg-saffron/5 md:col-span-2 md:p-8"
                    : "border-indigo/10 bg-white"
                }`}
              >
                <div className="signature-band absolute inset-x-0 top-0 h-1" />
                <h3 className="font-heading text-xl font-semibold text-indigo">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {service.description}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink">
                  <span className="font-semibold text-indigo">{site.learning.helpsLabel}: </span>
                  {detail.helps}
                </p>
                {detail.slug === "talent-hunt-examinations" && (
                  <p className="mt-4 rounded-xl bg-white px-4 py-3 text-sm font-medium text-saffron">
                    {site.learning.talentDetails}
                  </p>
                )}
                <a
                  href="/contact/"
                  className="mt-5 inline-flex rounded-full border border-indigo/15 px-4 py-2 text-sm font-semibold text-indigo transition hover:border-saffron hover:text-saffron"
                >
                  {site.contactUs}
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-indigo px-5 py-12 text-white sm:px-8 md:py-16">
        <div className="mx-auto max-w-7xl md:flex md:items-center md:justify-between md:gap-12">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold">
              {site.learning.teachersTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-white/80">
              {site.learning.teachersText}
            </p>
          </div>
          <a
            href="/contact/"
            className="mt-6 inline-flex rounded-full bg-marigold px-5 py-3 font-semibold text-indigo transition hover:bg-white md:mt-0"
          >
            {site.contactUs}
          </a>
        </div>
      </section>
      <CTABanner title={site.learning.cta} />
    </SiteFrame>
  );
}
