import { Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-maroon text-white">
      <div className="signature-band absolute inset-x-0 top-0 h-1.5" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-28 pt-16 sm:px-8 md:grid-cols-2 md:gap-8 md:pb-16 lg:grid-cols-[1.2fr_0.8fr_1fr_0.8fr] lg:px-10">
        <div>
          <a href="/" className="font-heading text-2xl font-bold tracking-tight">
            {site.name}
          </a>
          <p className="mt-4 max-w-md font-heading text-xl leading-snug text-white/90">
            {site.tagline}
          </p>
          <p className="mt-3 text-sm text-white/70">
            {site.subtitle}
          </p>
        </div>
        <div>
          <h2 className="font-heading text-lg font-semibold">{site.footerLinksLabel}</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3">
            {site.nav.slice(1).map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-white/80 transition hover:text-marigold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-lg font-semibold">{site.contactLabel}</h2>
          <div className="mt-4 space-y-3">
            <a
              href={`mailto:${site.email}`}
              className="flex items-start gap-3 text-sm text-white/85 transition hover:text-marigold"
            >
              <Mail size={18} className="mt-0.5 shrink-0 text-marigold" aria-hidden="true" />
              <span>{site.email}</span>
            </a>
            <p className="flex items-start gap-3 text-sm text-white/85">
              <MapPin size={18} className="mt-0.5 shrink-0 text-marigold" aria-hidden="true" />
              <span>{site.address}</span>
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-heading text-lg font-semibold">{site.footerLegalLabel}</h2>
          <ul className="mt-4 space-y-3">
            {site.legalLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-white/80 transition hover:text-marigold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-white/15 pt-6 text-xs text-white/70 md:col-span-2 md:flex md:items-end md:justify-between lg:col-span-4">
          <p className="max-w-3xl leading-relaxed">
            <span className="mr-2 font-semibold text-white">{site.footerVisionLabel}:</span>
            {site.vision}
          </p>
          <div className="mt-4 shrink-0 md:ml-8 md:mt-0 md:text-right">
            <p>{site.copyright}</p>
            <p className="mt-2">Version 1.0</p>
            <p className="mt-2">
              Developed &amp; Deployed by{" "}
              <a
                href="https://greatertechhub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white transition hover:text-marigold"
              >
                GreaterTechHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
