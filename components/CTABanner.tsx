import { site } from "@/lib/site";

interface CTABannerProps {
  title: string;
  description?: string;
  buttonLabel?: string;
}

export function CTABanner({
  title,
  description,
  buttonLabel = site.contactUs,
}: CTABannerProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
      <div className="relative overflow-hidden rounded-[24px] bg-indigo px-6 py-10 text-white shadow-card sm:px-10 sm:py-14 lg:px-14">
        <div className="signature-band absolute left-0 top-0 h-1.5 w-full" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl font-semibold leading-snug sm:text-3xl max-w-[65ch]">
              {title}
            </h2>
            <p className="mt-3 text-white/80 max-w-[65ch]">
              {description ?? site.subtitle}
            </p>
          </div>
          <a
            href="/contact/"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-marigold px-7 py-3.5 font-semibold text-indigo shadow-soft transition hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
          >
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
