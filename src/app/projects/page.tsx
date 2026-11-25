"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const categories = ["All", "Weddings", "Haldi & Mehndi", "Sangeet", "Kankotri Lekhan", "Birthdays", "Engagements", "Baby Showers", "Corporate", "Private Events"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        {/* Header */}
        <section className="py-16 md:py-24 bg-[var(--color-ivory)]">
          <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-serif text-[var(--color-charcoal)] leading-tight mb-8">
                Selected Work
              </h1>
              <p className="text-xl text-[var(--color-charcoal)]/80 font-light leading-relaxed mb-12">
                A curated selection of our most recent event styling and decor projects across weddings, corporate galas, and private celebrations.
              </p>
            </ScrollReveal>
            
            {/* Filters */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "px-5 py-2 text-sm transition-all duration-300 rounded-full border",
                      activeCategory === cat
                        ? "bg-[var(--color-charcoal)] text-[var(--color-ivory)] border-[var(--color-charcoal)]"
                        : "bg-transparent text-[var(--color-charcoal)] border-[var(--color-cream)] hover:border-[var(--color-charcoal)]"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="pb-24 bg-[var(--color-ivory)]">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={(index % 3) * 0.1}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-20 text-[var(--color-charcoal)]/60">
                No projects found in this category.
              </div>
            )}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
