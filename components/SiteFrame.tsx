import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

interface SiteFrameProps {
  activeHref: string;
  children: React.ReactNode;
}

export function SiteFrame({ activeHref, children }: SiteFrameProps) {
  return (
    <>
      <Header activeHref={activeHref} />
      <main id="main-content">{children}</main>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-indigo/10 bg-warm/95 p-3 backdrop-blur md:hidden">
        <a
          href={`mailto:${site.email}`}
          className="flex min-h-12 items-center justify-center rounded-full bg-saffron px-5 font-semibold text-white shadow-soft transition hover:bg-indigo active:scale-95"
        >
          {site.emailUs}
        </a>
      </div>
    </>
  );
}
