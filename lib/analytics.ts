"use client";

const STORAGE_KEY = "16alves02_analytics_consent";
const SESSION_KEY = "16alves02_analytics_session";

export function hasAnalyticsConsent() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_KEY) === "granted";
}

export function getAnalyticsConsent() {
  if (typeof window === "undefined") return "unknown";
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === "granted" || value === "denied" ? value : "unknown";
}

export function setAnalyticsConsent(value: "granted" | "denied") {
  window.localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent("analytics-consent-change"));
}

function getSessionId() {
  let sessionId = window.sessionStorage.getItem(SESSION_KEY);

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    window.sessionStorage.setItem(SESSION_KEY, sessionId);
  }

  return sessionId;
}

export function trackEvent(
  eventName: string,
  details: {
    page?: string;
    target?: string;
    language?: string;
    metadata?: Record<string, unknown>;
  } = {},
) {
  if (!hasAnalyticsConsent()) return;

  const payload = {
    eventName,
    page: details.page ?? window.location.pathname,
    target: details.target?.slice(0, 180) ?? null,
    language: details.language ?? document.documentElement.lang ?? "en",
    device: window.matchMedia("(max-width: 767px)").matches
      ? "mobile"
      : window.matchMedia("(max-width: 1023px)").matches
        ? "tablet"
        : "desktop",
    referrer: document.referrer || null,
    sessionId: getSessionId(),
    metadata: details.metadata ?? {},
  };

  const body = JSON.stringify(payload);

  if (navigator.sendBeacon) {
    navigator.sendBeacon(
      "/api/track",
      new Blob([body], { type: "application/json" }),
    );
    return;
  }

  void fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}
