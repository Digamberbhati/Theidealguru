interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div
        className={`signature-band mb-4 h-1 w-12 rounded-full ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-indigo sm:text-4xl max-w-[65ch]">
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 text-base leading-relaxed text-ink/75 sm:text-lg max-w-[65ch]">
          {description}
        </p>
      )}
    </div>
  );
}
