import Link from "next/link";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../animations/ScrollReveal";

export function CTASection() {
  return (
    <section className="py-24 bg-[var(--color-cream)] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-charcoal)] mb-6 max-w-2xl mx-auto leading-tight">
            Let's Make Your Celebration Extraordinary.
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-[var(--color-charcoal)]/80 mb-10 max-w-xl mx-auto">
            Tell us about your event, and we'll help turn your vision into a beautifully styled celebration.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Plan Your Event
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
