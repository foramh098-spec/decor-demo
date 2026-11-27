"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { Button } from "@/components/ui/Button";
import { getLocalizedProject, type Project } from "@/data/projects";
import { getCategoryLabel, uiText } from "@/data/translations";
import { useLanguage } from "@/context/LanguageContext";

export function ProjectDetailsClient({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const localized = getLocalizedProject(project, lang);
  const t = uiText[lang].projectDetails;

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[500px] w-full">
          <Image
            src={localized.images[0]}
            alt={localized.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Project Header Info */}
        <section className="bg-[var(--color-ivory)] -mt-16 relative z-10 container mx-auto px-4 md:px-8 pt-16 pb-12">
          <div className="max-w-4xl mx-auto text-center border-b border-[var(--color-cream)] pb-12">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--color-charcoal)] mb-6">
                {localized.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[var(--color-charcoal)]/70 uppercase tracking-widest text-sm font-semibold">
                <span>{getCategoryLabel(localized.category, lang)}</span>
                <span className="hidden sm:inline">•</span>
                <span>{localized.location}</span>
                <span className="hidden sm:inline">•</span>
                <span>{localized.year}</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12 bg-[var(--color-ivory)]">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto space-y-20">
              <ScrollReveal>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="md:col-span-1 text-sm font-semibold uppercase tracking-widest text-[var(--color-marigold)]">
                    {t.overview}
                  </div>
                  <div className="md:col-span-3 text-lg text-[var(--color-charcoal)] font-light leading-relaxed">
                    {localized.overview}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="md:col-span-1 text-sm font-semibold uppercase tracking-widest text-[var(--color-marigold)]">
                    {t.challenge}
                  </div>
                  <div className="md:col-span-3 text-lg text-[var(--color-charcoal)] font-light leading-relaxed">
                    {localized.challenge}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="md:col-span-1 text-sm font-semibold uppercase tracking-widest text-[var(--color-marigold)]">
                    {t.approach}
                  </div>
                  <div className="md:col-span-3 text-lg text-[var(--color-charcoal)] font-light leading-relaxed">
                    {localized.approach}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-12 bg-[var(--color-ivory)]">
          <div className="container mx-auto px-4 md:px-8">
            <ScrollReveal>
              <ImageGallery images={localized.images.slice(1)} />
            </ScrollReveal>
          </div>
        </section>

        {/* Results & Materials */}
        <section className="py-24 bg-[var(--color-cream)]">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <ScrollReveal>
              <h2 className="text-3xl font-serif text-[var(--color-charcoal)] mb-8">{t.result}</h2>
              <p className="text-lg text-[var(--color-charcoal)]/80 font-light leading-relaxed mb-16">
                {localized.result}
              </p>

              <div className="border-t border-[var(--color-gold)] pt-12">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-marigold)] mb-6">
                  {t.materials}
                </h3>
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {localized.materials.map((material, idx) => (
                    <li
                      key={idx}
                      className="text-[var(--color-charcoal)]/80 flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-[var(--color-marigold)] before:mr-3 before:rounded-full"
                    >
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Next Project / Contact */}
        <section className="py-24 bg-[var(--color-ivory)] text-center">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl font-serif text-[var(--color-charcoal)] mb-8">
                {t.interested}
              </h2>
              <Link href="/contact">
                <Button variant="primary" size="lg">{t.contactUs}</Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
