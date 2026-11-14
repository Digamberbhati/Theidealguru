import {
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Compass,
  Flower2,
  GraduationCap,
  Handshake,
  HeartPulse,
  Languages,
  School,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Service } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  Languages,
  BookOpen,
  GraduationCap,
  School,
  BadgeCheck,
  Target,
  Trophy,
  Compass,
  HeartPulse,
  BriefcaseBusiness,
  Handshake,
  CalendarDays,
  Flower2,
  Sparkles,
};

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
  description?: string;
}

export function ServiceCard({
  service,
  featured = false,
  description,
}: ServiceCardProps) {
  const Icon = icons[service.icon] ?? BookOpen;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-indigo/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card ${
        featured ? "md:p-8" : ""
      }`}
    >
      <div className="signature-band absolute inset-x-0 top-0 h-1" />
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron/10 text-saffron transition group-hover:bg-saffron group-hover:text-white">
          <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className="rounded-full bg-indigo/5 px-3 py-1 text-xs font-medium text-indigo">
          {service.mode}
        </span>
      </div>
      <h3 className="mt-5 font-heading text-xl font-semibold leading-snug text-indigo">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
        {description ?? service.description}
      </p>
      <div className="mt-6 pt-2">
        <a
          href="/contact/"
          aria-label={`Enquire about ${service.title}`}
          className="inline-flex w-fit rounded-full border border-indigo/15 px-4 py-1.5 text-sm font-semibold text-indigo transition hover:border-saffron hover:bg-saffron hover:text-white active:scale-95"
        >
          Enquire
        </a>
      </div>
    </article>
  );
}
