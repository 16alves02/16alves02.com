"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Database,
  Smartphone,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/components/language-provider";
import { getProjectTranslation } from "@/data/i18n";

function VisualShell({
  children,
  color,
  className = "",
}: {
  children: React.ReactNode;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#11100E] ${className}`}
    >
      <div
        className="absolute -right-24 -top-24 h-64 w-64 rounded-full blur-[90px] opacity-20"
        style={{ background: color }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="relative">{children}</div>
    </div>
  );
}

export function ProjectVisual({
  project,
  compact = false,
  priority = false,
}: {
  project: Project;
  compact?: boolean;
  priority?: boolean;
}) {
  const { t, language } = useLanguage();
  const copy = getProjectTranslation(language, project.slug);
  const heightClass = compact ? "h-64" : "h-[30rem] lg:h-[34rem]";

  if (project.visual === "image" && project.image) {
    return (
      <VisualShell color={project.color} className={heightClass}>
        <Image
          src={project.image}
          alt={copy.imageAlt}
          fill
          priority={priority}
          sizes={compact ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 75vw"}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/70 to-transparent" />
      </VisualShell>
    );
  }

  if (project.visual === "raw") {
    return (
      <VisualShell color={project.color} className={heightClass}>
        <div className="flex h-full min-h-full flex-col justify-between p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/8 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#8FFAFF]">
              {copy.type}
            </span>
            <Zap size={17} className="text-[#00F0FF]" />
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-8 rounded-full bg-[#00F0FF]/7 blur-3xl" />
            <div className="relative rounded-[1.5rem] border border-white/10 bg-[#0C0C0C]/90 p-5 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#77716A]">
                  {project.name}
                </span>
                <ArrowUpRight size={15} className="text-[#00F0FF]" />
              </div>
              <p className="max-w-xl text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#F4F4F4] sm:text-4xl">
                {copy.shortDescription}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] text-[#77716A]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-[#66615B]">
            <Sparkles size={13} />
            {copy.status}
          </div>
        </div>
      </VisualShell>
    );
  }

  if (project.visual === "dashboard") {
    return (
      <VisualShell color={project.color} className={heightClass}>
        <div className="flex h-full min-h-full flex-col justify-between p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#78716A]">
                {copy.type}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#F5F2ED]">
                {project.name}
              </p>
            </div>
            <div className="rounded-xl border border-[#FF7A18]/25 bg-[#FF7A18]/8 p-2.5">
              <Smartphone size={16} className="text-[#FF9A4B]" />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Kotlin", "01"],
              ["PHP", "02"],
              ["MySQL", "03"],
            ].map(([label, number]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/8 bg-black/20 p-4 backdrop-blur"
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#625D56]">
                  {t.projectPage.technologies}
                </p>
                <p className="mt-3 text-lg font-semibold text-[#F5F2ED]">{label}</p>
                <p className="mt-1 font-mono text-[9px] text-[#7E786F]">{number}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-white/8 bg-[#0C0B0A]/90 p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-medium text-[#D9D3CB]">
                  {t.common.preview}
                </span>
                <span className="font-mono text-[9px] text-[#625D56]">
                  {copy.status}
                </span>
              </div>
              <div className="space-y-2">
                {[72, 48, 86, 61].map((width, index) => (
                  <div key={index} className="h-2 rounded-full bg-white/6">
                    <div
                      className="h-full rounded-full bg-[#FF7A18]/60"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/8 bg-[#0C0B0A]/90 p-4">
              <div className="flex items-center gap-2 text-xs font-medium text-[#D9D3CB]">
                <Database size={14} className="text-[#FF9A4B]" />
                {project.name}
              </div>
              <div className="mt-5 flex items-end gap-1.5">
                {[24, 38, 31, 48, 42, 55].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-md bg-[#FF7A18]/50"
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </VisualShell>
    );
  }

  if (project.visual === "tasks" && project.image) {
    return (
      <VisualShell color={project.color} className={heightClass}>
        <Image
          src={project.image}
          alt={copy.imageAlt}
          fill
          priority={priority}
          sizes={compact ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 75vw"}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
      </VisualShell>
    );
  }

  return (
    <VisualShell color={project.color} className={heightClass}>
      <div className="flex h-full min-h-full flex-col justify-between p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#77716A]">
            {copy.type}
          </span>
          <Terminal size={16} className="text-[#A8B9CC]" />
        </div>

        <div className="rounded-[1.5rem] border border-white/8 bg-[#0A0A09]/90 p-5 font-mono shadow-2xl shadow-black/20">
          <div className="mb-5 flex items-center gap-2 text-[9px] text-[#5F5A54]">
            <span>$</span>
            <span>{project.name}</span>
          </div>
          <div className="space-y-2 text-sm text-[#D7D4CE] sm:text-base">
            {project.technologies.map((technology, index) => (
              <p key={technology}>
                <span className="text-[#A8B9CC]">
                  {String(index + 1).padStart(2, "0")}
                </span>{" "}
                {technology}
              </p>
            ))}
          </div>
          <div className="mt-6 border-t border-white/8 pt-4 text-[10px] text-[#625D56]">
            {copy.shortDescription}
          </div>
        </div>

        <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#5F5A54]">
          {copy.status}
        </div>
      </div>
    </VisualShell>
  );
}
