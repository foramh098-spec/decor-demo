"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { uiText } from "@/data/translations";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const t = uiText[lang].nav;
  const isOverHero = pathname === "/" && !isScrolled;

  const navLinks = [
    { name: t.home, href: "/" },
    { name: t.about, href: "/about" },
    { name: t.services, href: "/services" },
    { name: t.events, href: "/projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[var(--color-ivory)]/95 backdrop-blur-md border-b border-[var(--color-cream)] py-4 shadow-sm"
          : isOverHero
            ? "bg-gradient-to-b from-black/55 to-transparent py-6"
            : "bg-[var(--color-ivory)]/80 backdrop-blur-sm py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "text-2xl font-serif tracking-tight transition-colors",
            isOverHero ? "text-[var(--color-ivory)]" : "text-[var(--color-charcoal)]"
          )}
        >
          DecorStudio<span className="text-[var(--color-gold)]">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[var(--color-gold)]",
                  isOverHero
                    ? active
                      ? "text-[var(--color-ivory)] border-b border-[var(--color-gold)] pb-0.5"
                      : "text-[var(--color-ivory)]/85"
                    : active
                      ? "text-[var(--color-charcoal)] border-b border-[var(--color-marigold)] pb-0.5"
                      : "text-[var(--color-charcoal)]/80"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Language Switcher, CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 md:gap-4">
          <div
            role="group"
            aria-label="Language switcher"
            className={cn(
              "inline-flex items-center rounded-full p-0.5 border text-xs font-semibold transition-colors",
              isOverHero
                ? "border-white/25 bg-black/25 text-[var(--color-ivory)] backdrop-blur-sm"
                : "border-[var(--color-sand)] bg-[var(--color-cream)] text-[var(--color-charcoal)]"
            )}
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              className={cn(
                "px-2.5 py-1 rounded-full transition-colors cursor-pointer",
                lang === "en"
                  ? "bg-[var(--color-gold)] text-[var(--color-charcoal)]"
                  : "opacity-75 hover:opacity-100"
              )}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("gu")}
              className={cn(
                "px-2.5 py-1 rounded-full transition-colors cursor-pointer",
                lang === "gu"
                  ? "bg-[var(--color-gold)] text-[var(--color-charcoal)]"
                  : "opacity-75 hover:opacity-100"
              )}
            >
              ગુજરાતી
            </button>
          </div>

          <Link href="/contact" className="hidden md:block">
            <Button variant={isOverHero ? "secondary" : "primary"}>{t.planEvent}</Button>
          </Link>
          
          <button
            aria-label="Toggle navigation menu"
            className={cn(
              "md:hidden transition-colors",
              isOverHero ? "text-[var(--color-ivory)]" : "text-[var(--color-charcoal)]"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[var(--color-ivory)] border-b border-[var(--color-cream)] p-4 flex flex-col gap-4 shadow-lg md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-lg font-medium p-2 transition-colors",
                pathname === link.href ? "text-[var(--color-charcoal)] font-semibold" : "text-[var(--color-charcoal)]/80"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full mt-2">
            <Button variant="primary" className="w-full">{t.planEvent}</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
