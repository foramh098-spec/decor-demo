import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-[var(--color-ivory)]">
          <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-serif text-[var(--color-charcoal)] leading-tight mb-8">
                Creating Beautiful Celebrations, One Event at a Time.
              </h1>
              <p className="text-xl text-[var(--color-charcoal)]/80 font-light leading-relaxed">
                DecorStudio is a premier event styling firm dedicated to creating beautiful, highly personalized environments for life's most important celebrations.
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
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000"
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
                  <SectionHeading title="Our Design Philosophy" align="left" />
                  <div className="space-y-6 text-[var(--color-charcoal)]/80 text-lg font-light leading-relaxed">
                    <p>
                      We believe that a well-designed event is not just about aesthetics—it's about the atmosphere and how it makes your guests feel. Our philosophy centers on creating immersive environments through Theme & Concept Design, Floral Decor, and Complete Venue Transformation.
                    </p>
                    <p>
                      By carefully selecting lighting, crafting Stage & Backdrop Styling, and perfecting Table Styling and Entrance Decor, we create spaces that feel magical and celebratory.
                    </p>
                    <p>
                      Most importantly, we don't impose a single "house style." Instead, we listen intently to our clients, ensuring that Personalized Details shine through, translating your vision into a cohesive, elevated reality.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { stat: "10+", label: "Years Experience" },
                  { stat: "100+", label: "Projects Completed" },
                  { stat: "50+", label: "Happy Clients" },
                  { stat: "20+", label: "Design Awards" }
                ].map((item, index) => (
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
