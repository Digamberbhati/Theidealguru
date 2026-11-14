import Image from "next/image";
import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFrame } from "@/components/SiteFrame";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: site.about.whoText,
};

export default function AboutPage() {
  return (
    <SiteFrame activeHref="/about/">
      <PageHero
        title={site.hero.aboutTitle}
        description={site.hero.aboutDescription}
        image={{
          src: "/images/plaque-presentation.jpg",
          alt: "A plaque is presented during a community event.",
        }}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 md:grid-cols-2 md:py-16 lg:px-10">
        <div>
          <SectionHeading title={site.about.whoTitle} />
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/75">
            {site.about.whoText}
          </p>
        </div>
        <blockquote className="relative overflow-hidden rounded-[24px] bg-indigo px-7 py-8 text-white shadow-card sm:px-10 sm:py-10">
          <div className="signature-band absolute inset-x-0 top-0 h-1.5" />
          <p className="font-heading text-2xl font-semibold">{site.about.visionTitle}</p>
          <p className="mt-5 text-lg leading-relaxed text-white/85">“{site.vision}”</p>
        </blockquote>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20 lg:px-10">
        <SectionHeading title={site.about.connectTitle} />
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.about.connect.map((item, index) => (
            <article
              key={item.title}
              className="relative rounded-2xl border border-indigo/10 bg-white p-6 shadow-soft"
            >
              <div className="signature-band absolute inset-x-0 top-0 h-1 rounded-t-2xl" />
              <span className="font-heading text-sm font-semibold text-saffron">
                0{index + 1}
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-indigo">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:py-20 lg:px-10">
          <SectionHeading title={site.about.differenceTitle} />
          <ul className="grid gap-3 sm:grid-cols-2">
            {site.about.differences.map((difference) => (
              <li
                key={difference}
                className="flex min-h-20 items-center rounded-2xl bg-warm px-5 py-4 font-medium text-indigo"
              >
                <span className="mr-3 h-2.5 w-2.5 shrink-0 rounded-full bg-saffron" />
                {difference}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-[24px] shadow-soft sm:h-96">
            <Image
              src="/images/felicitation.jpg"
              alt="A participant is felicitated during an event."
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-72 overflow-hidden rounded-[24px] shadow-soft sm:mt-12 sm:h-96">
            <Image
              src="/images/children-honoured.jpg"
              alt="Young participants are honoured at an event."
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <p className="mt-5 text-center text-sm text-ink/65">{site.about.photoCaption}</p>
      </section>
      <CTABanner title={site.tagline} />
    </SiteFrame>
  );
}
