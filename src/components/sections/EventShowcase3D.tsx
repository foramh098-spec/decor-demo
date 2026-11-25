"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers, Sparkles } from "lucide-react";
import { Tilt3DCard } from "../animations/Tilt3DCard";
import { Button } from "../ui/Button";

interface ConceptItem {
  id: string;
  label: string;
  title: string;
  location: string;
  slug: string;
  image: string;
  lighting: string;
  focalPoint: string;
  palette: { name: string; hex: string }[];
}

const concepts: ConceptItem[] = [
  {
    id: "marriage",
    label: "Indian Marriage",
    title: "Royal Floral Mandap Pavilion",
    location: "Udaipur Courtyard",
    slug: "royal-wedding-udaipur",
    image: "/images/events/indian-marriage.png",
    lighting: "Golden Hour & Warm Brass Lanterns",
    focalPoint: "Four-Pillar Floral Arch & Mirrored Aisle",
    palette: [
      { name: "Blush Rose", hex: "#E5A9A9" },
      { name: "Ivory Silk", hex: "#F7F1E5" },
      { name: "Antique Gold", hex: "#C89D54" },
    ],
  },
  {
    id: "haldi",
    label: "Haldi",
    title: "Sunlit Marigold Urli Courtyard",
    location: "Pune Garden Villa",
    slug: "traditional-haldi",
    image: "/images/events/haldi.webp",
    lighting: "Filtered Natural Daylight",
    focalPoint: "Circular Genda Phool Ring & Brass Urlis",
    palette: [
      { name: "Marigold", hex: "#F59E0B" },
      { name: "Turmeric", hex: "#EAB308" },
      { name: "Ivory Cane", hex: "#F5EFE6" },
    ],
  },
  {
    id: "sangeet",
    label: "Sangeet",
    title: "Starlight Chandelier Performance Stage",
    location: "Goa Grand Lawn",
    slug: "sangeet-night",
    image: "/images/events/sangeet.webp",
    lighting: "Concert Pin-Spots & Ambient Drapes",
    focalPoint: "Tiered Crystal Chandeliers & Gloss Floor",
    palette: [
      { name: "Royal Magenta", hex: "#A21CAF" },
      { name: "Midnight Blue", hex: "#1E1B4B" },
      { name: "Champagne", hex: "#E5C17B" },
    ],
  },
  {
    id: "kankotri",
    label: "Kankotri Lekhan",
    title: "Sacred Lotus & Ganesha Altar",
    location: "Ahmedabad Heritage Home",
    slug: "traditional-kankotri-lekhan",
    image: "/images/events/kankotri-lekhan.webp",
    lighting: "Brass Standing Diyas & Warm Glow",
    focalPoint: "Hand-Painted Lotus Panel & Puja Thali",
    palette: [
      { name: "Kumkum Red", hex: "#B91C1C" },
      { name: "Lotus Pink", hex: "#F472B6" },
      { name: "Saffron Gold", hex: "#D97706" },
    ],
  },
];

/**
 * Interactive 3D spatial concept preview allowing visitors to explore event styling layers.
 */
export function EventShowcase3D() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = concepts[activeIndex];

  return (
    <section className="py-24 bg-[var(--color-charcoal)] text-[var(--color-ivory)] overflow-hidden relative">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 w-[480px] h-[480px] rounded-full bg-[var(--color-marigold)]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-0 w-[420px] h-[420px] rounded-full bg-[var(--color-gold)]/10 blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Controls & Concept Breakdown */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] font-semibold mb-4">
                <Layers size={14} /> 3D Spatial Concept Studio
              </span>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-5">
                Preview Every Layer Before Event Day.
              </h2>
              <p className="text-[var(--color-ivory)]/75 font-light leading-relaxed">
                From floral rigging and lighting temperature to palette harmony, explore how we compose depth across every celebration space. Move your cursor over the stage preview for a 3D perspective.
              </p>
            </div>

            {/* Concept selector tabs */}
            <div className="flex flex-wrap gap-2">
              {concepts.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`relative px-4 py-2 text-xs uppercase tracking-wider rounded-full border transition-colors cursor-pointer ${
                      isActive
                        ? "border-[var(--color-gold)] text-[var(--color-charcoal)] font-semibold"
                        : "border-[var(--color-ivory)]/20 text-[var(--color-ivory)]/80 hover:border-[var(--color-gold)]/60"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="conceptTabHighlight"
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                        className="absolute inset-0 rounded-full bg-[var(--color-gold)] -z-10"
                      />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Active spec details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="space-y-5 border-t border-[var(--color-ivory)]/15 pt-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 rounded-md bg-white/5 border border-white/10">
                    <div className="text-[11px] uppercase tracking-widest text-[var(--color-gold)] mb-1">
                      Focal Structure
                    </div>
                    <div className="text-[var(--color-ivory)]/90 font-light">
                      {current.focalPoint}
                    </div>
                  </div>
                  <div className="p-4 rounded-md bg-white/5 border border-white/10">
                    <div className="text-[11px] uppercase tracking-widest text-[var(--color-gold)] mb-1">
                      Lighting Mood
                    </div>
                    <div className="text-[var(--color-ivory)]/90 font-light">
                      {current.lighting}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-widest text-[var(--color-ivory)]/60">
                      Palette
                    </span>
                    <div className="flex items-center gap-2">
                      {current.palette.map((swatch) => (
                        <div
                          key={swatch.name}
                          title={swatch.name}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs"
                        >
                          <span
                            className="w-3 h-3 rounded-full border border-white/30"
                            style={{ backgroundColor: swatch.hex }}
                          />
                          <span className="text-[var(--color-ivory)]/80 hidden sm:inline">
                            {swatch.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={`/projects/${current.slug}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-charcoal)] gap-1.5"
                    >
                      View Event <ArrowUpRight size={15} />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: 3D Depth Stage Preview */}
          <div className="lg:col-span-7">
            <Tilt3DCard maxTilt={10} className="rounded-xl">
              <div className="relative aspect-[16/11] w-full rounded-xl p-3 md:p-5 bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/15 shadow-2xl [transform-style:preserve-3d]">
                {/* Main Image Layer */}
                <div className="relative w-full h-full rounded-lg overflow-hidden [transform:translateZ(22px)] shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={current.image}
                        alt={current.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                    </motion.div>
                  </AnimatePresence>

                  {/* Floating 3D Title Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 [transform:translateZ(36px)]">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[var(--color-gold)] font-semibold mb-1">
                        <Sparkles size={12} /> {current.location}
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif text-white">
                        {current.title}
                      </h3>
                    </div>
                    <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[11px] uppercase tracking-wider text-white/90">
                      Interactive 3D Tilt
                    </span>
                  </div>
                </div>

                {/* Floating Corner Depth Frame */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-[var(--color-gold)]/60 rounded-tr-xl [transform:translateZ(42px)]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-[var(--color-gold)]/60 rounded-bl-xl [transform:translateZ(42px)]"
                />
              </div>
            </Tilt3DCard>
          </div>
        </div>
      </div>
    </section>
  );
}
