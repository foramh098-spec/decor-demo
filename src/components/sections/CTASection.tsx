"use client";

import Link from "next/link";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../animations/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import { uiText } from "@/data/translations";

export function CTASection() {
  const { lang } = useLanguage();
  const t = uiText[lang].cta;

  return (
    <section className="py-24 bg-[var(--color-cream)] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-charcoal)] mb-6 max-w-2xl mx-auto leading-tight">
            {t.title}
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-[var(--color-charcoal)]/80 mb-10 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              {t.button}
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
