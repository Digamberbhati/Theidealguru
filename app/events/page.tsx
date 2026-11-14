import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { Gallery } from "@/components/Gallery";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFrame } from "@/components/SiteFrame";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description: site.hero.eventsDescription,
};

export default function EventsPage() {
  return (
    <SiteFrame activeHref="/events/">
      <PageHero
        title={site.hero.eventsTitle}
        description={site.hero.eventsDescription}
      />
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-16 lg:px-10">
        <SectionHeading
          title={site.events.highlightsTitle}
          description={site.events.intro}
        />
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {site.events.highlights.map((highlight, index) => (
            <article
              key={highlight.title}
              className="relative overflow-hidden rounded-2xl border border-indigo/10 bg-white p-6 shadow-soft"
            >
              <div className="signature-band absolute inset-x-0 top-0 h-1" />
              <span className="font-heading text-sm font-semibold text-saffron">
                0{index + 1}
              </span>
              <h2 className="mt-4 font-heading text-xl font-semibold text-indigo">
                {highlight.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {highlight.text}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-16 lg:px-10">
        <SectionHeading title={site.events.galleryTitle} />
        <div className="mt-9">
          <Gallery photos={site.events.photos} />
        </div>
      </section>
      <CTABanner title={site.events.cta} />
    </SiteFrame>
  );
}
