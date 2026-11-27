"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import { uiText } from "@/data/translations";

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = uiText[lang].about;

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-[var(--color-ivory)]">
          <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-serif text-[var(--color-charcoal)] leading-tight mb-8">
                {t.title}
              </h1>
              <p className="text-xl text-[var(--color-charcoal)]/80 font-light leading-relaxed">
                {t.subtitle}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Large Image */}
        <section className="bg-[var(--color-ivory)] pb-24">
          <div className="container mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/events/corporate-event.jpg"
                  alt="DecorStudio team styling an event"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 bg-[var(--color-cream)]">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <ScrollReveal>
                  <SectionHeading title={t.philosophyTitle} align="left" />
                  <div className="space-y-6 text-[var(--color-charcoal)]/80 text-lg font-light leading-relaxed">
                    <p>{t.p1}</p>
                    <p>{t.p2}</p>
                    <p>{t.p3}</p>
                  </div>
                </ScrollReveal>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {t.stats.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.1} className="text-center p-8 bg-[var(--color-ivory)] border border-[var(--color-gold)]/30">
                    <div className="text-4xl font-serif text-[var(--color-charcoal)] mb-2">{item.stat}</div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-[var(--color-marigold)]">{item.label}</div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
