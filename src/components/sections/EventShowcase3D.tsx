"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers, Sparkles } from "lucide-react";
import { Tilt3DCard } from "../animations/Tilt3DCard";
import { Button } from "../ui/Button";
import { useLanguage, type Language } from "@/context/LanguageContext";
import { uiText } from "@/data/translations";

interface ConceptItem {
  id: string;
  label: Record<Language, string>;
  title: Record<Language, string>;
  location: Record<Language, string>;
  slug: string;
  image: string;
  lighting: Record<Language, string>;
  focalPoint: Record<Language, string>;
  palette: { name: Record<Language, string>; hex: string }[];
}

const concepts: ConceptItem[] = [
  {
    id: "marriage",
    label: { en: "Indian Marriage", gu: "ભારતીય લગ્ન" },
    title: { en: "Royal Floral Mandap Pavilion", gu: "શાહી ફ્લોરલ મંડપ" },
    location: { en: "Udaipur Courtyard", gu: "ઉદયપુર પેલેસ" },
    slug: "royal-wedding-udaipur",
    image: "/images/events/indian-marriage.png",
    lighting: { en: "Golden Hour & Warm Brass Lanterns", gu: "ગોલ્ડન અવર અને પિત્તળના લેન્ટર્ન" },
    focalPoint: { en: "Four-Pillar Floral Arch & Mirrored Aisle", gu: "ચાર-સ્તંભ ફ્લોરલ આર્ચ અને મિરર આઇલ" },
    palette: [
      { name: { en: "Blush Rose", gu: "બ્લશ ગુલાબ" }, hex: "#E5A9A9" },
      { name: { en: "Ivory Silk", gu: "આઇવરી સિલ્ક" }, hex: "#F7F1E5" },
      { name: { en: "Antique Gold", gu: "એન્ટિક ગોલ્ડ" }, hex: "#C89D54" },
    ],
  },
  {
    id: "haldi",
    label: { en: "Haldi", gu: "હલ્દી" },
    title: { en: "Sunlit Marigold Urli Courtyard", gu: "ગલગોટા અને ઉર્લી હલ્દી કોર્ટયાર્ડ" },
    location: { en: "Pune Garden Villa", gu: "પુણે ગાર્ડન વિલા" },
    slug: "traditional-haldi",
    image: "/images/events/haldi.webp",
    lighting: { en: "Filtered Natural Daylight", gu: "કુદરતી સૂર્યપ્રકાશ" },
    focalPoint: { en: "Circular Genda Phool Ring & Brass Urlis", gu: "ગોળાકાર ગલગોટા રિંગ અને પિત્તળની ઉર્લી" },
    palette: [
      { name: { en: "Marigold", gu: "ગલગોટા" }, hex: "#F59E0B" },
      { name: { en: "Turmeric", gu: "હળદર પીળો" }, hex: "#EAB308" },
      { name: { en: "Ivory Cane", gu: "આઇવરી કેન" }, hex: "#F5EFE6" },
    ],
  },
  {
    id: "sangeet",
    label: { en: "Sangeet", gu: "સંગીત" },
    title: { en: "Starlight Chandelier Performance Stage", gu: "સ્ટારલાઇટ ઝૂમર સંગીત સ્ટેજ" },
    location: { en: "Goa Grand Lawn", gu: "ગોવા ગ્રાન્ડ લોન" },
    slug: "sangeet-night",
    image: "/images/events/sangeet.webp",
    lighting: { en: "Concert Pin-Spots & Ambient Drapes", gu: "કોન્સર્ટ સ્પોટલાઇટ અને ડ્રેપ્સ" },
    focalPoint: { en: "Tiered Crystal Chandeliers & Gloss Floor", gu: "ક્રિસ્ટલ ઝૂમર અને ગ્લોસી ડાન્સ ફ્લોર" },
    palette: [
      { name: { en: "Royal Magenta", gu: "રોયલ મેજન્ટા" }, hex: "#A21CAF" },
      { name: { en: "Midnight Blue", gu: "મિડનાઇટ બ્લુ" }, hex: "#1E1B4B" },
      { name: { en: "Champagne", gu: "શેમ્પેઇન" }, hex: "#E5C17B" },
    ],
  },
  {
    id: "kankotri",
    label: { en: "Kankotri Lekhan", gu: "કંકોત્રી લેખન" },
    title: { en: "Sacred Lotus & Ganesha Altar", gu: "પવિત્ર કમળ અને ગણેશ મંડપ" },
    location: { en: "Ahmedabad Heritage Home", gu: "અમદાવાદ હેરિટેજ હોમ" },
    slug: "traditional-kankotri-lekhan",
    image: "/images/events/kankotri-lekhan.webp",
    lighting: { en: "Brass Standing Diyas & Warm Glow", gu: "પિત્તળના દીવા અને હૂંફાળો પ્રકાશ" },
    focalPoint: { en: "Hand-Painted Lotus Panel & Puja Thali", gu: "કમળ પેનલ અને પૂજા થાળી" },
    palette: [
      { name: { en: "Kumkum Red", gu: "કુમકુમ લાલ" }, hex: "#B91C1C" },
      { name: { en: "Lotus Pink", gu: "કમળ ગુલાબી" }, hex: "#F472B6" },
      { name: { en: "Saffron Gold", gu: "કેસરી સોનેરી" }, hex: "#D97706" },
    ],
  },
];

/**
 * Interactive 3D spatial concept preview allowing visitors to explore event styling layers.
 */
export function EventShowcase3D() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang } = useLanguage();
  const t = uiText[lang].showcase3d;
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
                <Layers size={14} /> {t.badge}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-5">
                {t.title}
              </h2>
              <p className="text-[var(--color-ivory)]/75 font-light leading-relaxed">
                {t.desc}
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
                    {item.label[lang]}
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
                      {t.focalLabel}
                    </div>
                    <div className="text-[var(--color-ivory)]/90 font-light">
                      {current.focalPoint[lang]}
                    </div>
                  </div>
                  <div className="p-4 rounded-md bg-white/5 border border-white/10">
                    <div className="text-[11px] uppercase tracking-widest text-[var(--color-gold)] mb-1">
                      {t.lightingLabel}
                    </div>
                    <div className="text-[var(--color-ivory)]/90 font-light">
                      {current.lighting[lang]}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-widest text-[var(--color-ivory)]/60">
                      {t.paletteLabel}
                    </span>
                    <div className="flex items-center gap-2">
                      {current.palette.map((swatch) => (
                        <div
                          key={swatch.hex}
                          title={swatch.name[lang]}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs"
                        >
                          <span
                            className="w-3 h-3 rounded-full border border-white/30"
                            style={{ backgroundColor: swatch.hex }}
                          />
                          <span className="text-[var(--color-ivory)]/80 hidden sm:inline">
                            {swatch.name[lang]}
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
                      {t.viewEvent} <ArrowUpRight size={15} />
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
                        alt={current.title[lang]}
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
                        <Sparkles size={12} /> {current.location[lang]}
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif text-white">
                        {current.title[lang]}
                      </h3>
                    </div>
                    <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[11px] uppercase tracking-wider text-white/90">
                      {t.interactiveTag}
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
