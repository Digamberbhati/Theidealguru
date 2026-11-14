import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFrame } from "@/components/SiteFrame";
import { servicesFor, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learn, grow and succeed",
  description: site.subtitle,
};

const categoryAnchors: Record<string, string> = {
  Education: "education",
  Counselling: "counselling",
  Careers: "careers",
  Events: "events",
  Wellness: "wellness",
};

export default function HomePage() {
  return (
    <SiteFrame activeHref="/">
      <PageHero
        home
        title={site.hero.homeTitle}
        description={site.hero.homeDescription}
        eyebrow={site.subtitle}
      />

      <section className="border-y border-indigo/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <h2 className="font-heading text-lg font-semibold text-indigo">
            {site.home.whoWeHelp}
          </h2>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-5">
            {site.home.audiences.map((audience) => (
              <li
                key={audience}
                className="flex items-center gap-2 text-sm font-medium text-ink/75"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-saffron/10 text-saffron">
                  <Check size={14} aria-hidden="true" />
                </span>
                {audience}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <SectionHeading
          title={site.home.serviceAreas}
          description={site.subtitle}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {site.serviceGroups.map((group) => {
            const services = servicesFor(group.category);
            return (
              <article
                key={group.category}
                className="group relative overflow-hidden rounded-2xl border border-indigo/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card md:first:col-span-2 lg:first:col-span-2 lg:col-span-2"
              >
                <div className="signature-band absolute inset-x-0 top-0 h-1" />
                <a
                  href={group.href}
                  className="inline-flex items-center gap-2 font-heading text-2xl font-semibold text-indigo"
                >
                  {group.title}
                  <ArrowUpRight
                    size={19}
                    className="text-saffron transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {group.intro}
                </p>
                <ul className="mt-5 space-y-2 border-t border-indigo/10 pt-4">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <a
                        href={`/services/#${categoryAnchors[service.category]}`}
                        className="text-sm text-ink/70 underline decoration-indigo/20 underline-offset-4 transition hover:text-saffron hover:decoration-saffron"
                      >
                        {service.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-maroon text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/magazine-launch.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-maroon/75" />
        <div className="signature-band absolute inset-x-0 top-0 z-10 h-1.5" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center md:py-20 lg:px-10">
          <h2 className="max-w-2xl font-heading text-3xl font-semibold leading-tight sm:text-4xl">
            {site.home.communityTitle}
          </h2>
          <a
            href="/events/"
            className="inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-maroon"
          >
            {site.home.viewEvents}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <SectionHeading title={site.home.whyTitle} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.home.reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="relative rounded-2xl border border-indigo/10 bg-white p-6 shadow-soft"
            >
              <div className="signature-band absolute inset-x-0 top-0 h-1 rounded-t-2xl" />
              <span className="font-heading text-sm font-bold text-saffron">
                0{index + 1}
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-indigo">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {reason.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CTABanner title={site.tagline} />
    </SiteFrame>
  );
}
