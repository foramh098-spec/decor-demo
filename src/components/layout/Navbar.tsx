"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[var(--color-ivory)]/90 backdrop-blur-md border-b border-[var(--color-cream)] py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif tracking-tight text-[var(--color-charcoal)]">
          DecorStudio<span className="text-[var(--color-maroon)]">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[var(--color-marigold)]",
                pathname === link.href ? "text-[var(--color-charcoal)] border-b border-[var(--color-charcoal)]" : "text-[var(--color-charcoal)]/80"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:block">
            <Button variant="primary">Plan Your Event</Button>
          </Link>
          
          <button
            className="md:hidden text-[var(--color-charcoal)]"
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
              key={link.name}
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
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full mt-4">
            <Button variant="primary" className="w-full">Plan Your Event</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
