import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { type Service } from "@/data/services";
import { Tilt3DCard } from "../animations/Tilt3DCard";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  
  return (
    <Tilt3DCard maxTilt={6} className="rounded-lg">
      <Link
        href="/services"
        className="group flex flex-col h-full rounded-lg bg-[var(--color-ivory)] border border-[var(--color-sand)]/70 p-8 transition-all duration-300 hover:shadow-xl hover:border-[var(--color-gold)]"
      >
        <div className="flex justify-between items-start mb-6">
          <span className="text-sm font-semibold tracking-widest text-[var(--color-marigold)]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="p-3 bg-[var(--color-cream)] rounded-full text-[var(--color-maroon)] group-hover:bg-[var(--color-maroon)] group-hover:text-[var(--color-ivory)] group-hover:rotate-6 transition-all duration-300">
            <Icon size={24} />
          </div>
        </div>
        <h3 className="text-2xl font-serif text-[var(--color-charcoal)] mb-4 group-hover:text-[var(--color-maroon)] transition-colors">
          {service.title}
        </h3>
        <p className="text-[var(--color-charcoal)]/80 text-sm leading-relaxed mb-6">
          {service.description}
        </p>
        <div className="mt-auto flex items-center text-[var(--color-charcoal)] font-medium text-sm group-hover:text-[var(--color-marigold)] transition-colors">
          Explore Service <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" />
        </div>
      </Link>
    </Tilt3DCard>
  );
}
