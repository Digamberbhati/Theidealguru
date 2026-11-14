import type { Metadata } from "next";
import { Flower2, Heart, Sparkles } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFrame } from "@/components/SiteFrame";
import { serviceBySlug, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wellness",
  description: site.hero.wellnessDescription,
};

export default function WellnessPage() {
  const sessions = [
    { service: serviceBySlug("yoga-meditation-sessions"), icon: Flower2 },
    { service: serviceBySlug("healing-mental-wellness-sessions"), icon: Sparkles },
  ];

  return (
    <SiteFrame activeHref="/wellness/">
      <PageHero
        title={site.hero.wellnessTitle}
        description={site.hero.wellnessDescription}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-8 sm:px-8 md:grid-cols-[0.85fr_1.15fr] md:py-12 lg:px-10">
        <div>
          <SectionHeading title={site.wellness.introTitle} />
          <p className="mt-5 text-lg leading-relaxed text-ink/75">
            {site.wellness.introText}
          </p>
        </div>
        <div
          role="img"
          aria-label={site.wellness.visualLabel}
          className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-[24px] bg-[#FFF2DE] p-8 sm:min-h-[380px]"
        >
          <div className="absolute -left-12 -top-14 h-56 w-56 rounded-full border-[34px] border-[#F7B731]/30" />
          <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full border-[36px] border-[#E8590C]/15" />
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-[#F7B731]/25 text-saffron">
            <Heart size={55} strokeWidth={1.3} aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <SectionHeading title={site.wellness.featuresTitle} />
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {sessions.map(({ service, icon: Icon }) => (
            <article
              key={service.slug}
              className="relative overflow-hidden rounded-2xl border border-saffron/15 bg-white p-7 shadow-soft sm:p-9"
            >
              <div className="signature-band absolute inset-x-0 top-0 h-1" />
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF2DE] text-saffron">
                <Icon size={28} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-semibold text-indigo">
                {service.title}
              </h3>
              <p className="mt-3 max-w-lg leading-relaxed text-ink/70">
                {service.description}
              </p>
              <span className="mt-5 inline-flex rounded-full bg-[#FFF2DE] px-3 py-1.5 text-xs font-medium text-indigo">
                {service.mode}
              </span>
              <a
                href="/contact/"
                className="mt-6 block w-fit rounded-full border border-indigo/15 px-4 py-2 text-sm font-semibold text-indigo transition hover:border-saffron hover:text-saffron"
              >
                {site.contactUs}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#FFF2DE]/70">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:items-center md:py-18 lg:px-10">
          <SectionHeading title={site.wellness.benefitsTitle} />
          <ul className="grid gap-3 sm:grid-cols-2">
            {site.wellness.benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-2xl border border-saffron/10 bg-white/80 px-5 py-4 font-medium text-indigo"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <p className="mx-auto max-w-7xl px-5 pb-10 text-sm leading-relaxed text-ink/70 sm:px-8 lg:px-10">
          {site.wellness.disclaimer}
        </p>
      </section>
      <CTABanner title={site.wellness.cta} />
    </SiteFrame>
  );
}
