"use client";

import { BarChart3, Check, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { getAnalyticsConsent, setAnalyticsConsent } from "@/lib/analytics";

const copy = {
  en: {
    title: "Help me understand how the site is used",
    body: "Optional first-party analytics record pages, clicks and language choice. No advertising profile is created.",
    accept: "Allow analytics",
    deny: "Only necessary",
  },
  "pt-PT": {
    title: "Ajuda-me a perceber como o site é usado",
    body: "A analítica opcional regista páginas, cliques e idioma escolhido. Não é criado um perfil publicitário.",
    accept: "Permitir analítica",
    deny: "Apenas necessário",
  },
  es: {
    title: "Ayúdame a entender cómo se utiliza el sitio",
    body: "La analítica opcional registra páginas, clics e idioma. No se crea un perfil publicitario.",
    accept: "Permitir analítica",
    deny: "Solo necesario",
  },
  "zh-CN": {
    title: "帮助我了解网站的使用方式",
    body: "可选的第一方分析会记录页面、点击和语言选择，不会创建广告画像。",
    accept: "允许分析",
    deny: "仅必要",
  },
  fr: {
    title: "Aidez-moi à comprendre comment le site est utilisé",
    body: "Les statistiques facultatives enregistrent les pages, clics et langue. Aucun profil publicitaire n'est créé.",
    accept: "Autoriser les statistiques",
    deny: "Nécessaire uniquement",
  },
};

export function AnalyticsConsent() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.location.pathname.startsWith("/admin")) return;
    setVisible(getAnalyticsConsent() === "unknown");
  }, []);

  if (!visible) return null;

  const current = copy[language];

  return (
    <aside
      className="fixed bottom-4 left-4 right-4 z-[70] mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-white/12 bg-[#0B0A09]/96 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between"
      aria-label={current.title}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#FF7A18]/20 bg-[#FF7A18]/8 text-[#FF9A4B]">
          <BarChart3 size={16} />
        </span>
        <div>
          <p className="text-sm font-semibold text-[#F5F2ED]">{current.title}</p>
          <p className="mt-1 max-w-xl text-xs leading-5 text-[#8F8981]">{current.body}</p>
        </div>
      </div>
      <div className="flex shrink-0 gap-2">
        <button
          type="button"
          onClick={() => {
            setAnalyticsConsent("denied");
            setVisible(false);
          }}
          className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-[#BEB8B0] transition-colors hover:bg-white/[0.05]"
        >
          <X size={13} />
          {current.deny}
        </button>
        <button
          type="button"
          onClick={() => {
            setAnalyticsConsent("granted");
            setVisible(false);
          }}
          className="primary-button min-h-10 px-4 py-2 text-xs"
        >
          <Check size={13} />
          {current.accept}
        </button>
      </div>
    </aside>
  );
}
