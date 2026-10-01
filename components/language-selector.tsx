"use client";

import { Check, ChevronDown, Globe2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";

const languageMeta: Record<string, { region: string; native: string }> = {
  en: { region: "EN", native: "English" },
  "pt-PT": { region: "PT", native: "Português (Portugal)" },
  es: { region: "ES", native: "Español" },
  "zh-CN": { region: "ZH", native: "中文（简体）" },
  fr: { region: "FR", native: "Français" },
};

export function LanguageSelector() {
  const { language, setLanguage, t, languages } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((item) => item.code === language) ?? languages[0];
  const currentMeta = languageMeta[current.code];

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={t.nav.language}
        className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-2 text-xs text-[#D9D3CB] transition-all hover:border-[#FF7A18]/35 hover:bg-[#FF7A18]/6"
      >
        <Globe2 size={14} className="text-[#FF9A4B]" />
        <span className="font-mono text-[10px] tracking-[0.14em] text-[#F0EBE4]">
          {currentMeta.region}
        </span>
        <ChevronDown
          size={13}
          className={`text-[#77716A] transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label={t.nav.language}
          className="absolute right-0 top-[calc(100%+0.75rem)] w-[20rem] overflow-hidden rounded-3xl border border-white/10 bg-[#100F0D]/98 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
        >
          <div className="border-b border-white/8 px-3.5 pb-3 pt-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#FF7A18]/20 bg-[#FF7A18]/8">
                <Globe2 size={15} className="text-[#FF9A4B]" />
              </span>
              <div>
                <p className="text-xs font-medium text-[#F5F2ED]">{t.nav.language}</p>
                <p className="mt-0.5 text-[10px] text-[#625D56]">
                  {t.nav.languageHint}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-1 p-1.5">
            {languages.map((item) => {
              const active = item.code === language;
              const meta = languageMeta[item.code];

              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    setLanguage(item.code);
                    setOpen(false);
                  }}
                  className={`group/option flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition-all ${
                    active
                      ? "border border-[#FF7A18]/20 bg-[#FF7A18]/8"
                      : "border border-transparent hover:border-white/8 hover:bg-white/[0.04]"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono text-[10px] tracking-[0.08em] ${
                      active
                        ? "bg-[#FF7A18]/12 text-[#FFB173]"
                        : "bg-white/[0.035] text-[#77716A] group-hover/option:text-[#AFA9A0]"
                    }`}
                  >
                    {meta.region}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className={`block text-sm ${active ? "text-[#FFF4EA]" : "text-[#D5D0C8]"}`}>
                      {meta.native}
                    </span>
                    <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.14em] text-[#625D56]">
                      {item.label}
                    </span>
                  </span>

                  {active && <Check size={15} className="shrink-0 text-[#FF9A4B]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
