import Image from "next/image";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFrame } from "@/components/SiteFrame";
import { servicesFor, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learn, grow and succeed",
  description: site.subtitle,
};

export default function HomePage() {
  return (
    <SiteFrame activeHref="/">
      <PageHero
        home
        title={site.hero.homeTitle}
        description={site.hero.homeDescription}
      />

      {/* Who we help */}
      <section className="border-y border-indigo/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <h2 className="font-heading text-base font-semibold text-indigo">
            {site.home.whoWeHelp}
          </h2>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-6">
            {site.home.audiences.map((audience) => (
              <li
                key={audience}
                className="flex items-center gap-2.5 text-sm font-medium text-ink/80"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-saffron/10 text-saffron">
                  <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                </span>
                {audience}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Five service areas as large tiles */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <SectionHeading
          title={site.home.serviceAreas}
          description="Five integrated focus areas supporting holistic learning, mentorship, professional progression and personal wellness."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.serviceGroups.map((group, index) => {
            const services = servicesFor(group.category);
            return (
              <article
                key={group.category}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-indigo/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card ${
                  index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="signature-band absolute inset-x-0 top-0 h-1" />
                <div>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-heading text-2xl font-semibold text-indigo">
                      <a
                        href={group.href}
                        className="transition hover:text-saffron"
                      >
                        {group.title}
                      </a>
                    </h3>
                    <span className="text-xs font-semibold text-saffron">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75 max-w-[65ch]">
                    {group.intro}
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-indigo/10 pt-5">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <a
                          href={group.href}
                          className="text-sm font-medium text-ink/75 underline decoration-indigo/20 underline-offset-4 transition hover:text-saffron hover:decoration-saffron"
                        >
                          {service.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-2">
                  <a
                    href={group.href}
                    className="inline-flex items-center text-sm font-semibold text-indigo transition hover:text-saffron"
                  >
                    Explore {group.title.toLowerCase()}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Community band */}
      <section className="relative overflow-hidden bg-maroon text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/jain.jpeg"
            alt="Attendees gathering during a community magazine launch event."
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-maroon/80" />
        <div className="signature-band absolute inset-x-0 top-0 z-10 h-1.5" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center md:py-20 lg:px-10">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">
              {site.home.communityTitle}
            </h2>
            <p className="mt-3 text-white/80 max-w-[65ch]">
              Connecting real learners, educators, and mentors through shared academic milestones, student recognitions, and community activities.
            </p>
          </div>
          <a
            href="/events/"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-maroon active:scale-95"
          >
            {site.home.viewEvents}
          </a>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <SectionHeading
          title={site.home.whyTitle}
          description="Designed to offer balanced, end-to-end guidance from school foundations to professional accomplishments."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              <p className="mt-3 text-sm leading-relaxed text-ink/75 max-w-[65ch]">
                {reason.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Closing banner */}
      <CTABanner title={site.tagline} />
    </SiteFrame>
  );
}
