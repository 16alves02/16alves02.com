"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#0A0908]/82 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
          aria-label="16alves02 home"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF7A18] shadow-[0_0_18px_rgba(255,122,24,0.5)]" />
          <span className="font-mono text-sm font-medium tracking-[0.18em] text-[#F5F2ED]">
            16alves02
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#9B958D] transition-colors hover:text-[#F5F2ED]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-full border border-[#FF7A18]/35 bg-[#FF7A18]/8 px-4 py-2 text-sm font-medium text-[#FFB173] transition-all hover:border-[#FF7A18]/65 hover:bg-[#FF7A18]/14 hover:text-[#FFF4EA]"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#F5F2ED] transition-colors hover:bg-white/5 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/8 bg-[#0A0908] px-5 py-5 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-[#D5D0C8] transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl border border-[#FF7A18]/25 bg-[#FF7A18]/10 px-3 py-3 text-sm font-medium text-[#FFB173]"
            >
              Start a project
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
