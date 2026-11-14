import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFrame } from "@/components/SiteFrame";
import { servicesFor, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: site.hero.contactDescription,
};

const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
  site.contact.emailSubject,
)}`;
const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  site.contact.mapQuery,
)}&output=embed`;
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.contact.mapQuery,
)}`;

export default function ContactPage() {
  return (
    <SiteFrame activeHref="/contact/">
      <PageHero
        title={site.hero.contactTitle}
        description={site.hero.contactDescription}
      />
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 md:pb-24 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="relative rounded-2xl border border-indigo/10 bg-white p-6 shadow-soft">
            <div className="signature-band absolute inset-x-0 top-0 h-1 rounded-t-2xl" />
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron/10 text-saffron">
              <Mail size={22} aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-heading text-xl font-semibold text-indigo">
              {site.contact.emailTitle}
            </h2>
            <a href={`mailto:${site.email}`} className="mt-2 block break-all text-ink/75 underline decoration-indigo/20 underline-offset-4 hover:text-saffron">
              {site.email}
            </a>
            <div className="mt-5">
              <CopyEmailButton />
            </div>
          </article>
          <article className="relative rounded-2xl border border-indigo/10 bg-white p-6 shadow-soft">
            <div className="signature-band absolute inset-x-0 top-0 h-1 rounded-t-2xl" />
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron/10 text-saffron">
              <MapPin size={22} aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-heading text-xl font-semibold text-indigo">
              {site.contact.addressTitle}
            </h2>
            <p className="mt-2 leading-relaxed text-ink/75">{site.address}</p>
          </article>
        </div>

        <section className="mt-12 grid gap-8 rounded-[24px] bg-indigo p-6 text-white sm:p-9 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-heading text-2xl font-semibold">{site.contact.howTitle}</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-white/80">
              {site.contact.howText}
            </p>
          </div>
          <a
            href={mailto}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-marigold px-5 py-3 text-center font-semibold text-indigo transition hover:bg-white"
          >
            {site.contact.sendEnquiry}
          </a>
        </section>

        <section className="mt-14">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading title={site.contact.addressTitle} />
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-indigo/15 px-5 py-2.5 text-sm font-semibold text-indigo transition hover:border-saffron hover:text-saffron"
            >
              {site.contact.directions}
            </a>
          </div>
          <div className="overflow-hidden rounded-[24px] border border-indigo/10 bg-white shadow-soft">
            <iframe
              title={site.contact.mapLabel}
              src={mapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0 sm:h-[400px]"
            />
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading title={site.contact.servicesTitle} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {site.serviceGroups.map((group) => (
              <div key={group.category} className="rounded-2xl bg-white p-5 shadow-soft">
                <h3 className="font-heading text-lg font-semibold text-indigo">
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {servicesFor(group.category).map((service) => (
                    <li key={service.slug} className="text-sm leading-relaxed text-ink/70">
                      {service.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </section>
    </SiteFrame>
  );
}
