import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { PageHero } from "@/components/PageHero";
import { ServiceGroup } from "@/components/ServiceGroup";
import { SiteFrame } from "@/components/SiteFrame";
import { servicesFor, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our services",
  description: site.hero.servicesDescription,
};

const intros = {
  Education: site.servicesIntro.education,
  Counselling: site.servicesIntro.counselling,
  Careers: site.servicesIntro.careers,
  Events: site.servicesIntro.events,
  Wellness: site.servicesIntro.wellness,
};

const layouts = {
  Education: "education",
  Counselling: "wide",
  Careers: "wide",
  Events: "feature",
  Wellness: "wellness",
} as const;

export default function ServicesPage() {
  return (
    <SiteFrame activeHref="/services/">
      <PageHero
        title={site.hero.servicesTitle}
        description={site.hero.servicesDescription}
      />

      {/* Sticky anchor chips */}
      <nav
        aria-label="Service categories navigation"
        className="sticky top-0 z-20 border-y border-indigo/10 bg-warm/95 py-3 backdrop-blur"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-2.5 overflow-x-auto px-5 sm:px-8 lg:px-10">
          <span className="shrink-0 text-xs font-semibold text-ink/70">
            Jump to:
          </span>
          {site.serviceGroups.map((group) => (
            <a
              key={group.category}
              href={`#${group.category.toLowerCase()}`}
              className="shrink-0 rounded-full border border-indigo/15 bg-white px-4 py-2 text-sm font-semibold text-indigo shadow-soft transition hover:border-saffron hover:bg-saffron hover:text-white active:scale-95"
            >
              {group.category}
            </a>
          ))}
        </div>
      </nav>

      {/* Grouped sections */}
      <div className="mx-auto max-w-7xl divide-y divide-indigo/10 px-5 sm:px-8 lg:px-10">
        {site.serviceGroups.map((group) => (
          <ServiceGroup
            key={group.category}
            group={group}
            services={servicesFor(group.category)}
            intro={intros[group.category]}
            layout={layouts[group.category]}
          />
        ))}
      </div>

      {/* CTA */}
      <CTABanner
        title={site.servicesIntro.notSure}
        description="Whether you are seeking school curriculum support, career profiling, internship placement or wellness sessions, our team is here to assist."
      />
    </SiteFrame>
  );
}
