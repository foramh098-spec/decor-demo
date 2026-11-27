"use client";

import { getLocalizedTestimonial, type Testimonial } from "@/data/testimonials";
import { useLanguage } from "@/context/LanguageContext";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { lang } = useLanguage();
  const localized = getLocalizedTestimonial(testimonial, lang);

  return (
    <div className="bg-[var(--color-ivory)] p-8 md:p-12 border border-[var(--color-cream)] text-center max-w-3xl mx-auto">
      <div className="text-[var(--color-gold)] text-4xl font-serif leading-none mb-6">&ldquo;</div>
      <p className="text-lg md:text-xl text-[var(--color-charcoal)] font-light leading-relaxed mb-8 italic">
        {localized.quote}
      </p>
      <div>
        <h4 className="font-semibold text-[var(--color-charcoal)]">{localized.name}</h4>
        <p className="text-sm text-[var(--color-marigold)]">{localized.projectType}</p>
      </div>
    </div>
  );
}
