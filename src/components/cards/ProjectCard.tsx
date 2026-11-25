import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden mb-4">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
      </div>
      <div>
        <h3 className="text-xl font-serif text-[var(--color-charcoal)] mb-1">{project.title}</h3>
        <p className="text-sm text-[var(--color-marigold)]">
          {project.location} · {project.category}
        </p>
      </div>
    </Link>
  );
}
