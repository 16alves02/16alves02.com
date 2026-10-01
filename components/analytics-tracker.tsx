"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-provider";
import { getAnalyticsConsent, trackEvent } from "@/lib/analytics";

export function AnalyticsTracker() {
  const pathname = usePathname();
  const { language } = useLanguage();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    if (getAnalyticsConsent() !== "granted") return;

    trackEvent("page_view", { page: pathname, language });
  }, [pathname, language]);

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;

    const firedDepths = new Set<number>();

    const handleScroll = () => {
      if (getAnalyticsConsent() !== "granted") return;

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const depth = Math.min(
        100,
        Math.round((window.scrollY / scrollable) * 100),
      );
      const milestones = [25, 50, 75, 100];

      for (const milestone of milestones) {
        if (depth >= milestone && !firedDepths.has(milestone)) {
          firedDepths.add(milestone);
          trackEvent("scroll_depth", {
            page: pathname,
            language,
            target: String(milestone),
          });
        }
      }
    };

    const handleConsent = () => {
      if (getAnalyticsConsent() === "granted") {
        trackEvent("page_view", { page: pathname, language });
      }
    };

    const handleClick = (event: MouseEvent) => {
      if (getAnalyticsConsent() !== "granted") return;

      const target = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-track]",
      );

      if (!target) return;

      trackEvent("click", {
        page: pathname,
        language,
        target: target.dataset.track ?? undefined,
      });
    };

    window.addEventListener("analytics-consent-change", handleConsent);
    document.addEventListener("click", handleClick, true);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("analytics-consent-change", handleConsent);
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, language]);

  return null;
}
