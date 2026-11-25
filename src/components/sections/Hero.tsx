import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../animations/ScrollReveal";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-poster.jpg"
          aria-label="Decorated wedding table with floral centerpieces and glowing candles"
          className="h-full w-full object-cover object-center scale-[1.02]"
        >
          <source src="/videos/hero-decor.mp4" type="video/mp4" />
        </video>
        {/* Layered gradient scrim for editorial contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center mt-14">
        <ScrollReveal delay={0.05}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[var(--color-gold)]/40 text-[var(--color-gold)] text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            <Sparkles size={13} /> Weddings · Haldi · Sangeet · Mehndi · Kankotri Lekhan
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[var(--color-ivory)] max-w-4xl mx-auto leading-tight mb-6 drop-shadow-sm">
            We Turn Celebrations Into Unforgettable Experiences
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-lg md:text-xl text-[var(--color-ivory)]/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Bespoke Indian wedding mandaps, vibrant pre-wedding rituals, milestone birthdays, and luxury gala styling crafted down to the finest bloom.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.45} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/projects">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto shadow-lg transition-transform duration-300 hover:-translate-y-0.5">
              Explore Our Events
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-[var(--color-ivory)] border-[var(--color-ivory)]/80 hover:bg-[var(--color-ivory)] hover:text-[var(--color-charcoal)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5">
              Plan Your Event
            </Button>
          </Link>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
        <span className="text-[var(--color-ivory)] text-xs mb-2 opacity-80 uppercase tracking-[0.25em] font-semibold">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[var(--color-gold)] to-transparent" />
      </div>
    </section>
  );
}
