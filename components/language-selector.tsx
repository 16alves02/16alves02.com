"use client";

import { ChevronDown, Globe2 } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function LanguageSelector() {
  const { language, setLanguage, t, languages } = useLanguage();
  const current = languages.find((item) => item.code === language) ?? languages[0];

  return (
    <details className="group relative">
      <summary
        className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-2 text-xs text-[#D9D3CB] transition-colors hover:border-[#FF7A18]/35 hover:bg-[#FF7A18]/6"
        aria-label={t.nav.language}
      >
        <Globe2 size={14} className="text-[#FF9A4B]" />
        <span className="hidden sm:inline">{current.nativeLabel}</span>
        <span className="sm:hidden">{current.code === "pt-PT" ? "PT" : current.code.split("-")[0].toUpperCase()}</span>
        <ChevronDown size={13} className="text-[#77716A] transition-transform group-open:rotate-180" />
      </summary>

      <div className="absolute right-0 mt-2 max-h-[min(28rem,70vh)] w-64 overflow-y-auto rounded-2xl border border-white/10 bg-[#100F0D]/98 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
        {languages.map((item) => {
          const active = item.code === language;

          return (
            <button
              key={item.code}
              type="button"
              onClick={() => {
                setLanguage(item.code);
                const summary = document.querySelector("details.group summary");
                if (summary instanceof HTMLElement) summary.click();
              }}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                active
                  ? "bg-[#FF7A18]/10 text-[#FFB173]"
                  : "text-[#B8B1A9] hover:bg-white/5 hover:text-[#F5F2ED]"
              }`}
            >
              <span>{item.nativeLabel}</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#625D56]">
                {item.code}
              </span>
            </button>
          );
        })}
      </div>
    </details>
  );
}
