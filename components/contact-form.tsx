"use client";

import { Check, Mail, Send } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { contactFormCopy } from "@/data/contact-form";
import { getAnalyticsConsent, trackEvent } from "@/lib/analytics";

type FormState = {
  name: string;
  email: string;
  business: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  website: string;
  privacy: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  business: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
  website: "",
  privacy: false,
};

export function ContactForm() {
  const { language } = useLanguage();
  const copy = contactFormCopy[language];
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.service ||
      form.message.trim().length < 20 ||
      !form.privacy
    ) {
      setError(copy.required);
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          language,
          sourcePath: window.location.pathname,
          sessionId:
            getAnalyticsConsent() === "granted"
              ? window.sessionStorage.getItem("16alves02_analytics_session")
              : null,
        }),
      });

      if (!response.ok) {
        throw new Error("contact_failed");
      }

      setStatus("success");
      trackEvent("contact_submit", {
        page: window.location.pathname,
        language,
        target: form.service,
      });
      setForm(initialState);
    } catch {
      setStatus("idle");
      setError(copy.error);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[1.75rem] border border-[#FF7A18]/20 bg-[#0D0C0B] p-6 sm:p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FF7A18]/20 bg-[#FF7A18]/10 text-[#FF9A4B]">
          <Check size={18} />
        </span>
        <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#F5F2ED]">
          {copy.successTitle}
        </h3>
        <p className="mt-3 max-w-lg text-sm leading-7 text-[#8F8981]">
          {copy.successBody}
        </p>
        <a
          href="mailto:16alves02@gmail.com"
          data-track="email-direct"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#FF9A4B]"
        >
          <Mail size={15} />
          16alves02@gmail.com
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={() => {
        if (status === "idle") {
          trackEvent("contact_form_start", { target: "contact-form" });
        }
      }}
      className="rounded-[1.75rem] border border-white/9 bg-[#0D0C0B] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={copy.name} required>
          <input
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder={copy.placeholderName}
            autoComplete="name"
            className="contact-input"
          />
        </Field>
        <Field label={copy.email} required>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            placeholder={copy.placeholderEmail}
            autoComplete="email"
            className="contact-input"
          />
        </Field>
        <Field label={copy.business} hint={copy.optional}>
          <input
            value={form.business}
            onChange={(event) => setForm({ ...form, business: event.target.value })}
            placeholder={copy.placeholderBusiness}
            autoComplete="organization"
            className="contact-input"
          />
        </Field>
        <Field label={copy.service} required>
          <select
            required
            value={form.service}
            onChange={(event) => setForm({ ...form, service: event.target.value })}
            className="contact-input"
          >
            <option value="">-</option>
            {copy.services.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label={copy.budget} hint={copy.optional}>
          <select
            value={form.budget}
            onChange={(event) => setForm({ ...form, budget: event.target.value })}
            className="contact-input"
          >
            <option value="">-</option>
            {copy.budgets.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label={copy.timeline} hint={copy.optional}>
          <select
            value={form.timeline}
            onChange={(event) => setForm({ ...form, timeline: event.target.value })}
            className="contact-input"
          >
            <option value="">-</option>
            {copy.timelines.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field label={copy.message} required>
          <textarea
            required
            minLength={20}
            rows={6}
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            placeholder={copy.placeholderMessage}
            className="contact-input min-h-36 resize-y"
          />
        </Field>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => setForm({ ...form, website: event.target.value })}
        />
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-xs leading-5 text-[#817B73]">
        <input
          type="checkbox"
          checked={form.privacy}
          onChange={(event) => setForm({ ...form, privacy: event.target.checked })}
          className="mt-1 h-4 w-4 shrink-0 accent-[#FF7A18]"
        />
        <span>
          {copy.privacy}{" "}
          <Link
            className="text-[#BEB7AE] underline decoration-white/15 underline-offset-4 hover:text-[#FF9A4B]"
            href="/privacy"
          >
            {copy.privacyLink}
          </Link>
        </span>
      </label>

      {error && (
        <p
          className="mt-4 rounded-xl border border-red-400/15 bg-red-400/5 px-4 py-3 text-xs text-red-200"
          role="alert"
        >
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="mailto:16alves02@gmail.com"
          data-track="email-direct"
          className="inline-flex items-center gap-2 text-xs font-medium text-[#8F8981] transition-colors hover:text-[#F5F2ED]"
        >
          <Mail size={14} />
          16alves02@gmail.com
        </a>
        <button
          type="submit"
          disabled={status === "sending"}
          data-track="contact-submit"
          className="primary-button px-5 py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send size={15} />
          {status === "sending" ? copy.sending : copy.submit}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  hint,
  required = false,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-baseline justify-between text-xs font-medium text-[#BFB8AF]">
        <span>{label}</span>
        {hint ? (
          <span className="text-[10px] text-[#625D56]">{hint}</span>
        ) : required ? (
          <span className="text-[10px] text-[#625D56]">*</span>
        ) : null}
      </span>
      {children}
    </label>
  );
}
