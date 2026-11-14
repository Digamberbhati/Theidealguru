"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

interface MobileMenuProps {
  activeHref: string;
}

export function MobileMenu({ activeHref }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <>
      <button
        ref={menuButtonRef}
        type="button"
        aria-label={open ? site.closeMenu : site.openMenu}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-indigo/15 text-indigo transition hover:bg-indigo hover:text-white active:scale-95 md:hidden"
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      {open && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-50 flex min-h-screen flex-col bg-warm px-6 pb-8 pt-5 md:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Main mobile navigation"
        >
          <div className="signature-band absolute inset-x-0 top-0 h-1" />
          <div className="flex items-center justify-between">
            <a
              href="/"
              onClick={handleClose}
              className="font-heading text-2xl font-bold text-indigo"
            >
              TheIdealGuru<span className="text-saffron">.</span>
            </a>
            <button
              ref={closeRef}
              type="button"
              onClick={handleClose}
              aria-label={site.closeMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-indigo text-white transition hover:bg-saffron"
            >
              <X size={22} />
            </button>
          </div>
          <nav
            aria-label="Mobile navigation links"
            className="flex flex-1 flex-col justify-center gap-2 py-6"
          >
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeHref === item.href ? "page" : undefined}
                onClick={handleClose}
                className={`rounded-2xl px-5 py-3.5 font-heading text-2xl font-semibold transition ${
                  activeHref === item.href
                    ? "bg-indigo text-white shadow-soft"
                    : "text-indigo hover:bg-indigo/5"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={`mailto:${site.email}`}
              className="flex min-h-14 items-center justify-center rounded-full bg-saffron px-6 font-semibold text-white shadow-soft transition hover:bg-indigo"
            >
              {site.emailUs}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
