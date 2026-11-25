import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { getProjectBySlug, projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";

// This enables static generation for all known project routes
export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[500px] w-full">
          <Image
            src={project.images[0]}
            alt={project.title}
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
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[var(--color-charcoal)]/70 uppercase tracking-widest text-sm font-semibold">
                <span>{project.category}</span>
                <span className="hidden sm:inline">•</span>
                <span>{project.location}</span>
                <span className="hidden sm:inline">•</span>
                <span>{project.year}</span>
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
                    Overview
                  </div>
                  <div className="md:col-span-3 text-lg text-[var(--color-charcoal)] font-light leading-relaxed">
                    {project.overview}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="md:col-span-1 text-sm font-semibold uppercase tracking-widest text-[var(--color-marigold)]">
                    The Challenge
                  </div>
                  <div className="md:col-span-3 text-lg text-[var(--color-charcoal)] font-light leading-relaxed">
                    {project.challenge}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="md:col-span-1 text-sm font-semibold uppercase tracking-widest text-[var(--color-marigold)]">
                    Approach
                  </div>
                  <div className="md:col-span-3 text-lg text-[var(--color-charcoal)] font-light leading-relaxed">
                    {project.approach}
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
              <ImageGallery images={project.images.slice(1)} />
            </ScrollReveal>
          </div>
        </section>

        {/* Results & Materials */}
        <section className="py-24 bg-[var(--color-cream)]">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <ScrollReveal>
              <h2 className="text-3xl font-serif text-[var(--color-charcoal)] mb-8">The Result</h2>
              <p className="text-lg text-[var(--color-charcoal)]/80 font-light leading-relaxed mb-16">
                {project.result}
              </p>
              
              <div className="border-t border-[var(--color-gold)] pt-12">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-marigold)] mb-6">
                  Key Materials Used
                </h3>
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.materials.map((material, idx) => (
                    <li key={idx} className="text-[var(--color-charcoal)]/80 flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-[var(--color-marigold)] before:mr-3 before:rounded-full">
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
                Interested in a Similar Project?
              </h2>
              <Link href="/contact">
                <Button variant="primary" size="lg">Contact Us</Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
