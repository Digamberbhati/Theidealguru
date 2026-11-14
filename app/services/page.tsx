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
      <nav
        aria-label="Service categories"
        className="sticky top-0 z-20 border-y border-indigo/10 bg-warm/95 py-3 backdrop-blur"
      >
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 sm:px-8 lg:px-10">
          {site.serviceGroups.map((group) => (
            <a
              key={group.category}
              href={`#${group.category.toLowerCase()}`}
              className="shrink-0 rounded-full border border-indigo/15 bg-white px-4 py-2 text-sm font-medium text-indigo transition hover:border-saffron hover:text-saffron"
            >
              {group.title.replace(" & learning", "")}
            </a>
          ))}
        </div>
      </nav>
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
      <CTABanner title={site.servicesIntro.notSure} />
    </SiteFrame>
  );
}
