"use client";

import {
  BarChart3,
  ExternalLink,
  LogOut,
  Mail,
  RefreshCw,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

type Lead = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  business: string | null;
  service: string | null;
  budget: string | null;
  timeline: string | null;
  message: string;
  language: string;
  status: string;
  source_path: string | null;
  admin_notes: string | null;
};

type Summary = {
  rangeDays: number;
  generatedAt: string;
  metrics: {
    pageViews: number;
    uniqueSessions: number;
    clicks: number;
    leads: number;
    trackedLeadRate: number;
  };
  languages: Array<{ label: string; count: number }>;
  pages: Array<{ label: string; count: number }>;
  clicksByTarget: Array<{ label: string; count: number }>;
  devices: Array<{ label: string; count: number }>;
  eventsByType: Array<{ label: string; count: number }>;
  leads: Lead[];
};

const serviceLabels: Record<string, string> = {
  "business-website": "Business website",
  "landing-page": "Landing page",
  ecommerce: "E-commerce",
  "custom-website": "Custom website",
  other: "Other / not sure",
};

const statusLabels: Record<string, string> = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  closed: "Closed",
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/admin/summary?days=${days}`, {
        cache: "no-store",
      });

      if (response.status === 401) {
        setAuthenticated(false);
        setSummary(null);
        setLoading(false);
        return;
      }

      if (!response.ok) {
        throw new Error("dashboard_failed");
      }

      setAuthenticated(true);
      setSummary(await response.json());
    } catch {
      setError("Unable to load the dashboard.");
    } finally {
      setLoading(false);
    }
  }, [days]);

  useEffect(() => {
    void load();
  }, [load]);

  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      setError("Invalid password or unavailable admin configuration.");
      return;
    }

    setPassword("");
    await load();
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    setSummary(null);
  }

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-[#080706] px-5 py-10 text-[#F5F2ED] sm:px-8">
        <div className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center">
          <div className="w-full rounded-[2rem] border border-white/10 bg-[#11100E] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-9">
            <p className="section-eyebrow">16alves02 / Admin</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em]">
              Control room.
            </h1>
            <p className="mt-3 text-sm leading-7 text-[#8F8981]">
              Private analytics, enquiries and site activity.
            </p>

            <form onSubmit={login} className="mt-8">
              <label className="block text-xs font-medium text-[#BFB8AF]">
                Admin password
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="contact-input mt-2"
                  autoComplete="current-password"
                  required
                />
              </label>
              {error && (
                <p className="mt-3 text-xs text-red-200" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="primary-button mt-5 w-full px-4 py-3.5 text-sm"
              >
                Sign in
              </button>
            </form>

            <Link
              className="mt-6 inline-flex text-xs text-[#77716A] hover:text-[#F5F2ED]"
              href="/"
            >
              Back to website
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const maxLanguage = Math.max(
    ...(summary?.languages.map((item) => item.count) ?? [1]),
  );
  const maxPage = Math.max(
    ...(summary?.pages.map((item) => item.count) ?? [1]),
  );
  const maxClick = Math.max(
    ...(summary?.clicksByTarget.map((item) => item.count) ?? [1]),
  );

  return (
    <main className="min-h-screen bg-[#080706] px-4 py-5 text-[#F5F2ED] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-4 border-b border-white/8 pb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-eyebrow">16alves02 / Admin</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Control room.
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[7, 30, 90].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setDays(value)}
                className={`rounded-full border px-3 py-2 text-xs ${
                  days === value
                    ? "border-[#FF7A18]/35 bg-[#FF7A18]/10 text-[#FFB173]"
                    : "border-white/9 text-[#8F8981] hover:bg-white/[0.04]"
                }`}
              >
                {value}d
              </button>
            ))}

            <button
              type="button"
              onClick={() => void load()}
              className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/9 px-3 py-2 text-xs text-[#A9A29A] hover:bg-white/[0.04]"
            >
              <RefreshCw size={13} />
              Refresh
            </button>

            <button
              type="button"
              onClick={() => void logout()}
              className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/9 px-3 py-2 text-xs text-[#A9A29A] hover:bg-white/[0.04]"
            >
              <LogOut size={13} />
              Sign out
            </button>

            <Link
              href="/"
              className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/9 px-3 py-2 text-xs text-[#A9A29A] hover:bg-white/[0.04]"
            >
              <ExternalLink size={13} />
              Site
            </Link>
          </div>
        </header>

        {loading && !summary ? (
          <div className="py-20 text-sm text-[#77716A]">
            Loading dashboard...
          </div>
        ) : error ? (
          <div className="py-20 text-sm text-red-200">{error}</div>
        ) : summary ? (
          <>
            <section className="grid gap-3 py-6 sm:grid-cols-2 lg:grid-cols-5">
              <Metric label="Page views" value={summary.metrics.pageViews} />
              <Metric
                label="Unique tracked sessions"
                value={summary.metrics.uniqueSessions}
              />
              <Metric
                label="Tracked clicks"
                value={summary.metrics.clicks}
              />
              <Metric label="Enquiries" value={summary.metrics.leads} />
              <Metric
                label="Tracked-session enquiry rate"
                value={`${summary.metrics.trackedLeadRate}%`}
              />
            </section>

            <div className="grid gap-5 lg:grid-cols-3">
              <ChartCard title="Languages">
                <Bars items={summary.languages} max={maxLanguage} />
              </ChartCard>
              <ChartCard title="Most visited pages">
                <Bars items={summary.pages} max={maxPage} />
              </ChartCard>
              <ChartCard title="Most clicked">
                <Bars items={summary.clicksByTarget} max={maxClick} />
              </ChartCard>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <ChartCard title="Devices">
                <Bars
                  items={summary.devices}
                  max={Math.max(
                    ...(summary.devices.map((item) => item.count) ?? [1]),
                  )}
                />
              </ChartCard>
              <ChartCard title="Tracked events">
                <Bars
                  items={summary.eventsByType}
                  max={Math.max(
                    ...(summary.eventsByType.map((item) => item.count) ?? [1]),
                  )}
                />
              </ChartCard>
            </div>

            <section className="mt-5 rounded-[1.75rem] border border-white/8 bg-[#11100E] p-5 sm:p-7">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="section-eyebrow">Lead inbox</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                    People who contacted you.
                  </h2>
                </div>
                <p className="text-xs text-[#625D56]">
                  Selected range: {summary.rangeDays} days.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {summary.leads.length === 0 ? (
                  <p className="rounded-2xl border border-dashed border-white/8 p-5 text-sm text-[#77716A]">
                    No enquiries yet.
                  </p>
                ) : (
                  summary.leads.map((lead) => (
                    <LeadRow
                      key={lead.id}
                      lead={lead}
                      onUpdated={() => void load()}
                    />
                  ))
                )}
              </div>
            </section>
          </>
        ) : null}
      </div>
    </main>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: number | string;
}) {
  return (
    <div className="rounded-[1.35rem] border border-white/8 bg-[#11100E] p-5">
      <p className="text-xs text-[#6E6861]">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#F5F2ED]">
        {value}
      </p>
    </div>
  );
}

function ChartCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[1.75rem] border border-white/8 bg-[#11100E] p-5">
      <div className="flex items-center gap-2 text-sm font-medium text-[#DDD7CF]">
        <BarChart3 size={15} className="text-[#FF9A4B]" />
        {title}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Bars({
  items,
  max,
}: {
  items: Array<{ label: string; count: number }>;
  max: number;
}) {
  return (
    <div className="space-y-4">
      {items.length === 0 ? (
        <p className="text-xs text-[#6E6861]">No data yet.</p>
      ) : (
        items.map((item) => (
          <div key={item.label}>
            <div className="flex items-center justify-between gap-4 text-xs">
              <span className="truncate text-[#A7A098]">
                {item.label || "(none)"}
              </span>
              <span className="font-mono text-[#6E6861]">{item.count}</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
              <div
                className="h-full rounded-full bg-[#FF7A18]"
                style={{
                  width: `${Math.max(4, (item.count / max) * 100)}%`,
                }}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function LeadRow({
  lead,
  onUpdated,
}: {
  lead: Lead;
  onUpdated: () => void;
}) {
  const [status, setStatus] = useState(lead.status);
  const [notes, setNotes] = useState(lead.admin_notes ?? "");
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  async function saveLead() {
    setSaving(true);

    try {
      await fetch(`/api/admin/leads/${lead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status,
          adminNotes: notes,
        }),
      });

      onUpdated();
    } finally {
      setSaving(false);
    }
  }

  return (
    <article className="rounded-2xl border border-white/8 bg-black/10 p-4 sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-medium text-[#F1ECE6]">{lead.name}</h3>
            <span className="text-xs text-[#67615A]">{lead.language}</span>
            <span className="rounded-full border border-[#FF7A18]/15 bg-[#FF7A18]/5 px-2 py-1 text-[10px] text-[#FFB173]">
              {serviceLabels[lead.service ?? ""] ?? lead.service ?? "Unknown service"}
            </span>
          </div>

          <a
            href={`mailto:${lead.email}`}
            className="mt-2 inline-flex items-center gap-2 text-xs text-[#A9A29A] hover:text-[#F5F2ED]"
          >
            <Mail size={13} />
            {lead.email}
          </a>

          <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-[#9C958C]">
            {open ? lead.message : lead.message.slice(0, 260)}
            {lead.message.length > 260 && !open ? "..." : ""}
          </p>

          <p className="mt-3 text-[11px] text-[#5F5952]">
            {lead.business || "No business name"} ·{" "}
            {lead.budget || "No budget"} · {lead.timeline || "No timeline"}
          </p>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="mt-4 inline-flex items-center gap-2 text-[11px] text-[#8D867E] hover:text-[#F5F2ED]"
          >
            <Users size={12} />
            {open ? "Hide details" : "Open lead"}
          </button>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row lg:flex-col">
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="rounded-full border border-white/9 bg-[#0B0A09] px-3 py-2 text-[10px] text-[#B4ADA5]"
            aria-label={`Status for ${lead.name}`}
          >
            {Object.entries(statusLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={() => void saveLead()}
            disabled={saving}
            className="rounded-full border border-[#FF7A18]/20 bg-[#FF7A18]/6 px-3 py-2 text-[10px] text-[#FFB173] disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-5 border-t border-white/8 pt-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <Info label="Received" value={new Date(lead.created_at).toLocaleString()} />
            <Info label="Source page" value={lead.source_path || "/"} />
            <Info label="Language" value={lead.language} />
          </div>

          <label className="mt-5 block text-xs font-medium text-[#BFB8AF]">
            Private notes
            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              rows={4}
              className="contact-input mt-2"
              placeholder="Follow-up notes, next step, quote status..."
            />
          </label>
        </div>
      )}
    </article>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/8 bg-[#0C0B0A] p-3">
      <p className="text-[10px] uppercase tracking-[0.12em] text-[#625D56]">
        {label}
      </p>
      <p className="mt-2 text-xs text-[#AAA39A]">{value}</p>
    </div>
  );
}
