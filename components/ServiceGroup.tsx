import type { Category, Service, ServiceGroupData } from "@/lib/site";
import { categoryId } from "@/lib/site";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";

interface ServiceGroupProps {
  group: ServiceGroupData;
  services: Service[];
  intro?: string;
  layout?: "education" | "wide" | "feature" | "wellness";
}

export function ServiceGroup({
  group,
  services,
  intro,
  layout = "education",
}: ServiceGroupProps) {
  const id = categoryId(group.category as Category);

  const gridClass =
    layout === "education"
      ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      : layout === "wide"
        ? "grid gap-6 md:grid-cols-2"
        : layout === "feature"
          ? "grid gap-6 max-w-3xl"
          : "grid gap-6 md:grid-cols-2";

  return (
    <section id={id} className="scroll-mt-24 py-14 md:py-20">
      <SectionHeading title={group.title} description={intro ?? group.intro} />
      <div className={`${gridClass} mt-10`}>
        {services.map((service, index) => (
          <div
            key={service.slug}
            className={
              layout === "education" && index === 0
                ? "md:col-span-2 lg:col-span-2"
                : ""
            }
          >
            <ServiceCard
              service={service}
              featured={layout === "education" && index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
