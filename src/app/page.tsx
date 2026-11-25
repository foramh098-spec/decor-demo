import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Home() {
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
              <ScrollReveal direction="right" className="order-2 lg:order-1 relative aspect-[3/4] lg:aspect-square w-full">
                <Image
                  src="https://images.unsplash.com/photo-1606214539665-2ea0731dfa6c?auto=format&fit=crop&q=80&w=1200"
                  alt="Traditional Indian event decoration"
                  fill
                  className="object-cover"
                />
              </ScrollReveal>
              
              <div className="order-1 lg:order-2">
                <ScrollReveal direction="left">
                  <span className="block text-sm uppercase tracking-widest text-[var(--color-marigold)] mb-6 font-semibold">
                    Who We Are
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif text-[var(--color-charcoal)] mb-8 leading-tight">
                    Your Celebration, Beautifully Designed.
                  </h2>
                  <p className="text-lg text-[var(--color-charcoal)]/80 font-light mb-8 leading-relaxed">
                    We specialize in transforming venues into stunning experiences through creative decor, thoughtful styling, beautiful floral arrangements, lighting, and personalized details.
                  </p>
                  <Link href="/about" className="inline-flex items-center text-[var(--color-charcoal)] font-semibold border-b border-[var(--color-charcoal)] pb-1 hover:text-[var(--color-marigold)] hover:border-[var(--color-marigold)] transition-colors">
                    Discover Our Story <ArrowRight size={18} className="ml-2" />
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
              <SectionHeading title="Our Expertise" subtitle="What We Do" />
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {services.map((service, index) => (
                <ScrollReveal key={service.id} delay={index * 0.1}>
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
                <SectionHeading title="Our Signature Events" subtitle="Portfolio" align="left" className="mb-0" />
              </ScrollReveal>
              <ScrollReveal delay={0.2} className="hidden md:block">
                <Link href="/projects">
                  <Button variant="outline">View All Events</Button>
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
                <Button variant="outline" className="w-full">View All Events</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-[var(--color-charcoal)] text-[var(--color-ivory)]">
          <div className="container mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="block text-sm uppercase tracking-widest text-[var(--color-gold)] mb-4 font-semibold">
                  Why Us
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">
                  The DecorStudio Difference
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: "Creative & Customized Concepts", desc: "Every design is unique, built around your personal style and story." },
                { title: "Premium Decor & Florals", desc: "We source only the finest blooms, fabrics, and props for an elevated look." },
                { title: "Attention to Every Detail", desc: "From tablescapes to grand entrances, we obsess over the small things." },
                { title: "Professional Event Execution", desc: "Seamless coordination and flawless setup on the day of your event." }
              ].map((benefit, i) => (
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
              <SectionHeading title="From Vision to Reality" subtitle="Our Process" />
            </ScrollReveal>

            <div className="relative mt-20">
              {/* Line connector for desktop */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-[var(--color-cream)]" />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                {[
                  { step: "01", title: "Understand Your Vision", desc: "We discuss your theme, requirements, and budget." },
                  { step: "02", title: "Create the Concept", desc: "We present layouts, mood boards, and floral samples." },
                  { step: "03", title: "Decorate & Style", desc: "Procurement, production coordination, and venue prep." },
                  { step: "04", title: "Bring to Life", desc: "Flawless execution and styling on the day of your celebration." }
                ].map((item, i) => (
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
              <SectionHeading title="Client Stories" subtitle="Testimonials" />
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
