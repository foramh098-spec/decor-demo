import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../animations/ScrollReveal";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1597159702271-4770fc569265?auto=format&fit=crop&q=80&w=2000"
          alt="Traditional Indian wedding event decoration"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/30 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center mt-16">
        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[var(--color-ivory)] max-w-4xl mx-auto leading-tight mb-6">
            We Turn Celebrations Into Unforgettable Experiences
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <p className="text-lg md:text-xl text-[var(--color-ivory)]/90 max-w-2xl mx-auto mb-10 font-light">
            From elegant weddings to vibrant celebrations, we create beautifully styled event spaces that make every moment unforgettable.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.5} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/projects">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Explore Our Events
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-[var(--color-ivory)] border-[var(--color-ivory)] hover:bg-[var(--color-ivory)] hover:text-[var(--color-charcoal)]">
              Plan Your Event
            </Button>
          </Link>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
        <span className="text-[var(--color-ivory)] text-sm mb-2 opacity-80 uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-[var(--color-ivory)]/50" />
      </div>
    </section>
  );
}
