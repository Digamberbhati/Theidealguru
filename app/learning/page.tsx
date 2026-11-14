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
  const englishService = serviceBySlug("english-language-learning");
  const talentService = serviceBySlug("talent-hunt-examinations");

  const stageSlugs = [
    "school-education-learning",
    "college-education-guidance",
    "university-admissions-guidance",
    "competitive-exam-coaching",
    "certificate-courses",
  ];

  return (
    <SiteFrame activeHref="/learning/">
      <PageHero
        title={site.hero.learningTitle}
        description={site.hero.learningDescription}
        image={{
          src: "/images/children-honoured.jpg",
          alt: "Young students honoured with certificates at an educational gathering.",
        }}
      />

      {/* Learning journey timeline */}
      <section className="bg-white border-y border-indigo/10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20 lg:px-10">
          <SectionHeading
            title={site.learning.journeyTitle}
            description="A progressive educational pathway designed to support learners at each critical academic milestone."
          />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-5">
            {site.learning.journey.map((step, index) => (
              <li key={step} className="relative flex-1">
                <div className="flex min-h-28 items-center gap-4 rounded-2xl border border-indigo/10 bg-warm p-5 md:flex-col md:items-start md:justify-between shadow-soft">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo font-heading font-semibold text-white">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-saffron">
                      Stage {index + 1}
                    </p>
                    <span className="font-heading text-lg font-semibold text-indigo">
                      {step}
                    </span>
                  </div>
                </div>
                {index < site.learning.journey.length - 1 && (
                  <>
                    <ArrowDown
                      size={18}
                      className="absolute -bottom-5 left-1/2 z-10 -translate-x-1/2 text-saffron md:hidden"
                      aria-hidden="true"
                    />
                    <ArrowRight
                      size={18}
                      className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-saffron md:block"
                      aria-hidden="true"
                    />
                  </>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* English Language Learning - Dedicated Block */}
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 md:pt-20 lg:px-10">
        <article className="relative overflow-hidden rounded-[24px] border border-saffron/20 bg-saffron/5 p-8 sm:p-10 shadow-soft">
          <div className="signature-band absolute inset-x-0 top-0 h-1.5" />
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-saffron/10 px-3.5 py-1 text-xs font-semibold text-saffron">
              Foundational for all stages
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-indigo">
              {englishService.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/80 max-w-[65ch]">
              {englishService.description}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/75 max-w-[65ch]">
              <strong className="font-semibold text-indigo">{site.learning.helpsLabel}: </strong>
              Builds essential language confidence, vocabulary and written/spoken fluency applicable to every stage of life and career.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="rounded-full bg-white px-3.5 py-1 text-xs font-medium text-indigo shadow-soft">
                {englishService.mode}
              </span>
              <a
                href="/contact/"
                className="inline-flex rounded-full border border-indigo/20 bg-white px-5 py-2 text-sm font-semibold text-indigo shadow-soft transition hover:border-saffron hover:bg-saffron hover:text-white"
              >
                Enquire
              </a>
            </div>
          </div>
        </article>
      </section>

      {/* Stage Detail Blocks */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20 lg:px-10">
        <SectionHeading
          title={site.learning.detailTitle}
          description="Detailed guidance tailored to the distinct needs of students and parents across every milestone."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {stageSlugs.map((slug) => {
            const service = serviceBySlug(slug);
            const detail = site.learning.details.find((d) => d.slug === slug);
            return (
              <article
                key={slug}
                className="relative overflow-hidden rounded-2xl border border-indigo/10 bg-white p-7 shadow-soft flex flex-col justify-between"
              >
                <div className="signature-band absolute inset-x-0 top-0 h-1" />
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-xl font-semibold text-indigo">
                      {service.title}
                    </h3>
                    <span className="rounded-full bg-indigo/5 px-3 py-1 text-xs font-medium text-indigo shrink-0">
                      {service.mode}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75 max-w-[65ch]">
                    {service.description}
                  </p>
                  {detail && (
                    <p className="mt-4 border-t border-indigo/10 pt-4 text-sm leading-relaxed text-ink/80 max-w-[65ch]">
                      <strong className="font-semibold text-indigo">{site.learning.helpsLabel}: </strong>
                      {detail.helps}
                    </p>
                  )}
                </div>
                <div className="mt-6 pt-2">
                  <a
                    href="/contact/"
                    aria-label={`Enquire about ${service.title}`}
                    className="inline-flex rounded-full border border-indigo/15 px-4 py-1.5 text-sm font-semibold text-indigo transition hover:border-saffron hover:bg-saffron hover:text-white"
                  >
                    Enquire
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Talent Hunt Examinations Feature Block */}
      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 md:pb-20 lg:px-10">
        <article className="relative overflow-hidden rounded-[24px] border border-indigo/10 bg-white p-8 sm:p-10 shadow-soft">
          <div className="signature-band absolute inset-x-0 top-0 h-1.5" />
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-marigold/20 px-3.5 py-1 text-xs font-semibold text-indigo">
              Student Recognition & Aptitude
            </span>
            <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-semibold text-indigo">
              {talentService.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink/75 max-w-[65ch]">
              {talentService.description}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/80 max-w-[65ch]">
              <strong className="font-semibold text-indigo">{site.learning.helpsLabel}: </strong>
              Provides a structured competitive stage to assess problem-solving skills, benchmark aptitude, and earn peer recognition.
            </p>
            <div className="mt-6 rounded-2xl border border-saffron/20 bg-warm p-4 sm:p-5">
              <p className="font-heading text-sm font-semibold text-saffron">
                {site.learning.talentDetails}
              </p>
              <p className="mt-1 text-xs text-ink/65">
                Check back regularly or contact us to receive announcements regarding exam registration schedules.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="/contact/"
                className="inline-flex rounded-full border border-indigo/15 px-5 py-2 text-sm font-semibold text-indigo transition hover:border-saffron hover:bg-saffron hover:text-white"
              >
                Enquire about Talent Hunt
              </a>
            </div>
          </div>
        </article>
      </section>

      {/* For teachers and schools */}
      <section className="bg-indigo px-5 py-14 text-white sm:px-8 md:py-18">
        <div className="mx-auto max-w-7xl md:flex md:items-center md:justify-between md:gap-12">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold">
              {site.learning.teachersTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85 max-w-[65ch]">
              {site.learning.teachersText}
            </p>
          </div>
          <a
            href="/contact/"
            className="mt-6 inline-flex shrink-0 rounded-full bg-marigold px-7 py-3.5 font-semibold text-indigo transition hover:bg-white active:scale-95 md:mt-0"
          >
            {site.contactUs}
          </a>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title={site.learning.cta}
        description="Connect with our academic mentors to choose the right learning stage and course options for you or your child."
      />
    </SiteFrame>
  );
}
