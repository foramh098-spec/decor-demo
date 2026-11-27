"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { getLocalizedService, services } from "@/data/services";
import { uiText } from "@/data/translations";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export default function ServicesPage() {
  const { lang } = useLanguage();
  const t = uiText[lang].servicesPage;

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header */}
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

        {/* Services List */}
        <section className="pb-24 bg-[var(--color-ivory)]">
          <div className="container mx-auto px-4 md:px-8 space-y-32">
            {services.map((service, index) => {
              const localized = getLocalizedService(service, lang);
              const isEven = index % 2 === 0;
              return (
                <div key={localized.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <ScrollReveal 
                    direction={isEven ? "right" : "left"} 
                    className={`relative aspect-[4/3] w-full ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <Image
                      src={localized.image}
                      alt={localized.title}
                      fill
                      className="object-cover"
                    />
                  </ScrollReveal>
                  
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <ScrollReveal direction={isEven ? "left" : "right"}>
                      <div className="text-sm font-semibold uppercase tracking-widest text-[var(--color-marigold)] mb-4">
                        {t.servicePrefix} {String(index + 1).padStart(2, '0')}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-charcoal)] mb-6">
                        {localized.title}
                      </h2>
                      <p className="text-lg text-[var(--color-charcoal)]/80 font-light leading-relaxed mb-8">
                        {localized.description}
                      </p>
                      
                      <div className="mb-10 space-y-3">
                        {localized.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-[var(--color-charcoal)]/90">
                            <Check size={18} className="text-[var(--color-marigold)] mr-3" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <Link href={`/contact?service=${localized.id}`}>
                        <Button variant="outline">{t.enquireNow}</Button>
                      </Link>
                    </ScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
