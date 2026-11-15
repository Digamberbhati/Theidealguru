import { site } from "@/lib/site";
import { MobileMenu } from "@/components/MobileMenu";

interface HeaderProps {
  activeHref: string;
}

export function Header({ activeHref }: HeaderProps) {
  return (
    <header className="relative z-30 border-b border-indigo/10 bg-warm">
      <div className="signature-band absolute inset-x-0 top-0 h-1" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:px-10">
        <a href="/" aria-label="TheIdealGuru home" className="shrink-0">
          <span className="font-heading text-2xl font-bold tracking-tight text-indigo">
            TheIdealGuru<span className="text-saffron">.</span>
          </span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                activeHref === item.href
                  ? "bg-indigo font-semibold text-white"
                  : "text-ink/80 hover:bg-indigo/5 hover:text-indigo"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <MobileMenu activeHref={activeHref} />
      </div>
      <nav
        aria-label="Tablet navigation"
        className="mx-auto hidden max-w-7xl items-center justify-center gap-1 px-5 pb-3 sm:px-8 md:flex xl:hidden"
      >
        {site.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={activeHref === item.href ? "page" : undefined}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              activeHref === item.href
                ? "bg-indigo font-semibold text-white"
                : "text-ink/80 hover:bg-indigo/5 hover:text-indigo"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
