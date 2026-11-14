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
          alt: "Honoured guest receives a memento plaque and shawl during an event ceremony.",
        }}
      />

      {/* Who we are & Vision block */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 md:py-16 lg:px-10 items-center">
        <div>
          <SectionHeading title={site.about.whoTitle} />
          <p className="mt-6 text-lg leading-relaxed text-ink/80 max-w-[65ch]">
            {site.about.whoText}
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/75 max-w-[65ch]">
            By integrating quality academics, personalised career counselling, certified vocational learning, and dedicated wellness sessions, we empower families and students with lifelong support.
          </p>
        </div>
        <blockquote className="relative overflow-hidden rounded-[24px] bg-indigo p-8 text-white shadow-card sm:p-10">
          <div className="signature-band absolute inset-x-0 top-0 h-1.5" />
          <p className="font-heading text-xl font-semibold text-marigold">
            {site.about.visionTitle}
          </p>
          <p className="mt-5 font-heading text-xl sm:text-2xl leading-relaxed text-white/95">
            “{site.vision}”
          </p>
        </blockquote>
      </section>

      {/* Who we connect */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20 lg:px-10">
        <SectionHeading
          title={site.about.connectTitle}
          description="Serving every pillar of our educational ecosystem with purposeful programs and resources."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              <p className="mt-3 text-sm leading-relaxed text-ink/75 max-w-[65ch]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* What makes us different */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:py-20 lg:px-10">
          <SectionHeading
            title={site.about.differenceTitle}
            description="Our platform brings together all elements of personal and academic advancement under one cohesive roof."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {site.about.differences.map((difference) => (
              <li
                key={difference}
                className="flex min-h-20 items-center rounded-2xl bg-warm px-6 py-5 font-medium text-indigo shadow-soft"
              >
                <span className="mr-3.5 h-2.5 w-2.5 shrink-0 rounded-full bg-saffron" />
                <span className="text-base font-semibold">{difference}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Photo strip */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="relative h-72 sm:h-96 overflow-hidden rounded-[24px] shadow-card bg-indigo/5">
            <Image
              src="/images/felicitation.jpg"
              alt="Participant being felicitated with ceremonial shawl during an event."
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-72 sm:h-96 overflow-hidden rounded-[24px] shadow-card bg-indigo/5 sm:mt-8">
            <Image
              src="/images/children-honoured.jpg"
              alt="Young students honoured with certificates at an educational gathering."
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <p className="mt-5 text-center font-heading text-sm font-medium text-ink/75">
          {site.about.photoCaption}
        </p>
      </section>

      <CTABanner title={site.tagline} />
    </SiteFrame>
  );
}
