import Image from "next/image";

interface PageHeroProps {
  title: string;
  description: string;
  image?: { src: string; alt: string };
  home?: boolean;
}

export function PageHero({
  title,
  description,
  image,
  home = false,
}: PageHeroProps) {
  if (home) {
    return (
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 md:grid-cols-[1fr_0.9fr] md:pb-24 md:pt-16 lg:gap-16 lg:px-10">
        <div className="max-w-2xl">
          <h1 className="font-heading text-5xl font-semibold leading-[1.05] tracking-tight text-indigo sm:text-6xl lg:text-7xl max-w-[65ch]">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/75 sm:text-xl max-w-[65ch]">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/services/"
              className="rounded-full bg-saffron px-6 py-3.5 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-indigo active:translate-y-0"
            >
              Explore services
            </a>
            <a
              href="/contact/"
              className="rounded-full border border-indigo/20 px-6 py-3.5 font-semibold text-indigo transition hover:border-indigo hover:bg-indigo/5 active:scale-95"
            >
              Contact us
            </a>
          </div>
        </div>
        <div className="relative mx-auto h-[400px] w-full max-w-[520px] sm:h-[480px]">
          <div className="photo-reveal absolute right-0 top-0 h-[80%] w-[84%] overflow-hidden rounded-[24px] shadow-card bg-indigo/5">
            <Image
              src="/images/felicitation.jpg"
              alt="Participant being felicitated with ceremonial shawl during an event."
              fill
              priority
              sizes="(max-width: 768px) 80vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="photo-reveal photo-reveal-delay absolute bottom-0 left-0 h-[46%] w-[54%] overflow-hidden rounded-[24px] border-[6px] border-warm shadow-card bg-indigo/5">
            <Image
              src="/images/children-honoured.jpg"
              alt="Young student participants honoured with certificates at an educational gathering."
              fill
              priority
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-12 sm:px-8 md:grid-cols-[1fr_0.8fr] md:pb-20 md:pt-16 lg:px-10">
      <div className="max-w-2xl">
        <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-indigo sm:text-5xl lg:text-6xl max-w-[65ch]">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink/75 max-w-[65ch]">
          {description}
        </p>
      </div>
      {image && (
        <div className="relative h-[260px] w-full overflow-hidden rounded-[24px] shadow-card sm:h-[340px] bg-indigo/5">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      )}
    </section>
  );
}
