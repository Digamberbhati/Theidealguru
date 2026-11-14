import { ArrowUpRight } from "lucide-react";
import type { LegalPageData } from "@/lib/site";
import { CTABanner } from "@/components/CTABanner";
import { PageHero } from "@/components/PageHero";
import { SiteFrame } from "@/components/SiteFrame";
import { site } from "@/lib/site";

interface LegalPageProps {
  data: LegalPageData;
  activeHref: string;
}

export function LegalPage({ data, activeHref }: LegalPageProps) {
  return (
    <SiteFrame activeHref={activeHref}>
      <PageHero title={data.title} description={data.intro} />
      <section className="mx-auto max-w-4xl px-5 pb-16 sm:px-8 md:pb-24">
        <p className="mb-8 rounded-xl bg-indigo/5 px-4 py-3 text-sm font-medium text-indigo">
          {data.lastUpdated}
        </p>
        <div className="space-y-8">
          {data.sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-2xl border border-indigo/10 bg-white p-6 shadow-soft sm:p-8"
            >
              <h2 className="font-heading text-2xl font-semibold text-indigo">
                {section.heading}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-relaxed text-ink/75">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-ink/75 marker:text-saffron">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <section className="rounded-2xl border border-indigo/10 bg-white p-6 shadow-soft sm:p-8">
            <h2 className="font-heading text-2xl font-semibold text-indigo">
              {data.contactHeading}
            </h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              {data.contactText}{" "}
              <a
                href="/contact/"
                className="font-semibold text-indigo underline decoration-saffron underline-offset-4 hover:text-saffron"
              >
                {data.contactLinkLabel}
              </a>
            </p>
            <a
              href="/contact/"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-saffron px-5 py-3 font-semibold text-white transition hover:bg-indigo active:scale-[0.98]"
            >
              {site.contactUs}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </section>
        </div>
      </section>
      <CTABanner title={site.tagline} />
    </SiteFrame>
  );
}
