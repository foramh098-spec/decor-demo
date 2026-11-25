import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { type Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  
  return (
    <Link href="/services" className="group block h-full bg-[var(--color-ivory)] border border-[var(--color-cream)] p-8 transition-all hover:shadow-lg hover:border-[var(--color-gold)]">
      <div className="flex justify-between items-start mb-6">
        <span className="text-sm font-semibold text-[var(--color-marigold)]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="p-3 bg-[var(--color-cream)] rounded-full text-[var(--color-charcoal)] group-hover:bg-[var(--color-charcoal)] group-hover:text-[var(--color-ivory)] transition-colors">
          <Icon size={24} />
        </div>
      </div>
      <h3 className="text-2xl font-serif text-[var(--color-charcoal)] mb-4">
        {service.title}
      </h3>
      <p className="text-[var(--color-charcoal)]/80 text-sm leading-relaxed mb-6">
        {service.description}
      </p>
      <div className="mt-auto flex items-center text-[var(--color-charcoal)] font-medium text-sm group-hover:text-[var(--color-marigold)] transition-colors">
        Learn more <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
