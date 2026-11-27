"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { EventShowcase3D } from "@/components/sections/EventShowcase3D";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Tilt3DCard } from "@/components/animations/Tilt3DCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { uiText } from "@/data/translations";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const { lang } = useLanguage();
  const t = uiText[lang].home;
  const featuredProjects = projects.slice(0, 4);

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Intro Section */}
        <section className="py-24 bg-[var(--color-ivory)]">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="right" className="order-2 lg:order-1">
                <Tilt3DCard maxTilt={6} className="rounded-xl">
                  <div className="relative aspect-[3/4] lg:aspect-square w-full overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src="/images/events/indian-marriage-palace.webp"
                      alt="Traditional Indian event decoration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Tilt3DCard>
              </ScrollReveal>
              
              <div className="order-1 lg:order-2">
                <ScrollReveal direction="left">
                  <span className="block text-sm uppercase tracking-widest text-[var(--color-marigold)] mb-6 font-semibold">
                    {t.whoWeAre}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif text-[var(--color-charcoal)] mb-8 leading-tight">
                    {t.introTitle}
                  </h2>
                  <p className="text-lg text-[var(--color-charcoal)]/80 font-light mb-8 leading-relaxed">
                    {t.introDesc}
                  </p>
                  <Link href="/about" className="inline-flex items-center text-[var(--color-charcoal)] font-semibold border-b border-[var(--color-charcoal)] pb-1 hover:text-[var(--color-marigold)] hover:border-[var(--color-marigold)] transition-colors">
                    {t.discoverStory} <ArrowRight size={18} className="ml-2" />
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-[var(--color-cream)]">
          <div className="container mx-auto px-4 md:px-8">
            <ScrollReveal>
              <SectionHeading title={t.expertiseTitle} subtitle={t.expertiseSubtitle} />
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {services.map((service, index) => (
                <ScrollReveal key={service.id} delay={index * 0.06}>
                  <ServiceCard service={service} index={index} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 bg-[var(--color-ivory)]">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex justify-between items-end mb-16">
              <ScrollReveal>
                <SectionHeading title={t.signatureTitle} subtitle={t.signatureSubtitle} align="left" className="mb-0" />
              </ScrollReveal>
              <ScrollReveal delay={0.2} className="hidden md:block">
                <Link href="/projects">
                  <Button variant="outline">{t.viewAllEvents}</Button>
                </Link>
              </ScrollReveal>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {featuredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index % 2 === 0 ? 0 : 0.2}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-12 text-center md:hidden">
              <Link href="/projects">
                <Button variant="outline" className="w-full">{t.viewAllEvents}</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive 3D Spatial Concept Studio */}
        <EventShowcase3D />

        {/* Why Choose Us */}
        <section className="py-24 bg-[var(--color-emerald)] text-[var(--color-ivory)]">
          <div className="container mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="block text-sm uppercase tracking-widest text-[var(--color-gold)] mb-4 font-semibold">
                  {t.whyUsSubtitle}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">
                  {t.whyUsTitle}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {t.benefits.map((benefit, i) => (
                <ScrollReveal key={i} delay={i * 0.1} className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center mb-6 text-[var(--color-gold)]">
                    <Check size={24} />
                  </div>
                  <h3 className="text-xl font-serif mb-4">{benefit.title}</h3>
                  <p className="text-[var(--color-ivory)]/70 text-sm font-light leading-relaxed">{benefit.desc}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-[var(--color-ivory)]">
          <div className="container mx-auto px-4 md:px-8">
            <ScrollReveal>
              <SectionHeading title={t.processTitle} subtitle={t.processSubtitle} />
            </ScrollReveal>

            <div className="relative mt-20">
              {/* Line connector for desktop */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-[var(--color-cream)]" />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                {t.processSteps.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="bg-[var(--color-ivory)] w-24 h-24 rounded-full border border-[var(--color-cream)] flex items-center justify-center mb-8 mx-auto shadow-sm text-2xl font-serif text-[var(--color-marigold)]">
                      {item.step}
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-[var(--color-charcoal)] mb-3">{item.title}</h3>
                      <p className="text-[var(--color-charcoal)]/70 text-sm">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-[var(--color-cream)]">
          <div className="container mx-auto px-4 md:px-8">
            <ScrollReveal>
              <SectionHeading title={t.testimonialsTitle} subtitle={t.testimonialsSubtitle} />
            </ScrollReveal>
            
            <div className="mt-16">
              <ScrollReveal>
                <TestimonialCard testimonial={testimonials[0]} />
              </ScrollReveal>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
