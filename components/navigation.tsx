"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { LanguageSelector } from "@/components/language-selector";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { label: t.nav.work, href: "/work" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.process, href: "/#process" },
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-60 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="nav-shell flex h-[4.25rem] items-center justify-between rounded-2xl border border-white/10 bg-[#0B0A09]/80 px-3.5 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:px-5">
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-xl px-2 py-2 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#FFB173]"
            onClick={() => setOpen(false)}
            aria-label="16alves02 home"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-[#FF7A18]/20 bg-[#FF7A18]/8">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF7A18] shadow-[0_0_16px_rgba(255,122,24,0.65)] transition-transform duration-300 group-hover:scale-125" />
            </span>
            <span className="font-mono text-sm font-medium tracking-[0.16em] text-[#F5F2ED]">
              16alves02
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2.5 text-sm text-[#8F8981] transition-all hover:bg-white/[0.045] hover:text-[#F5F2ED] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB173]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <LanguageSelector />
            <Link
              href="/#contact"
              className="primary-button group px-4 py-2.5 text-sm"
            >
              {t.nav.start}
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-[#F5F2ED] transition-colors hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB173] md:hidden"
            aria-expanded={open}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <nav
            className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0B0A09]/96 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.34)] backdrop-blur-2xl md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3.5 py-3 text-sm text-[#D5D0C8] transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB173]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-1 flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-3.5 py-2.5">
                <span className="text-xs text-[#77716A]">{t.nav.language}</span>
                <LanguageSelector />
              </div>
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="primary-button mt-1 justify-center px-4 py-3 text-sm"
              >
                {t.nav.start}
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
