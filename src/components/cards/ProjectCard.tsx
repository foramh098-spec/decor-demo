"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getLocalizedProject, type Project } from "@/data/projects";
import { getCategoryLabel } from "@/data/translations";
import { useLanguage } from "@/context/LanguageContext";
import { Tilt3DCard } from "../animations/Tilt3DCard";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { lang } = useLanguage();
  const localized = getLocalizedProject(project, lang);

  return (
    <Link href={`/projects/${localized.slug}`} className="group block cursor-pointer">
      <Tilt3DCard maxTilt={7} className="rounded-lg">
        <div className="relative aspect-[4/5] overflow-hidden mb-4 rounded-lg bg-[var(--color-cream)] shadow-sm group-hover:shadow-xl transition-shadow duration-500">
          <Image
            src={localized.images[0]}
            alt={localized.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-3 py-1 text-[11px] uppercase tracking-widest font-semibold rounded-full bg-[var(--color-ivory)]/90 text-[var(--color-charcoal)] backdrop-blur-sm">
              {getCategoryLabel(localized.category, lang)}
            </span>
          </div>
          <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-[var(--color-ivory)]/90 text-[var(--color-charcoal)] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </Tilt3DCard>
      <div className="pt-1">
        <h3 className="text-xl font-serif text-[var(--color-charcoal)] mb-1 group-hover:text-[var(--color-maroon)] transition-colors">
          {localized.title}
        </h3>
        <p className="text-sm text-[var(--color-marigold)] font-medium">
          {localized.location} · {localized.year}
        </p>
      </div>
    </Link>
  );
}
