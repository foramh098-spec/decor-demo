"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { uiText } from "@/data/translations";

export function Footer() {
  const { lang } = useLanguage();
  const t = uiText[lang].footer;
  const c = uiText[lang].contactPage;

  return (
    <footer className="bg-[var(--color-plum)] text-[var(--color-ivory)] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-serif tracking-tight inline-block mb-6">
              DecorStudio<span className="text-[var(--color-gold)]">.</span>
            </Link>
            <p className="text-[var(--color-ivory)]/70 text-sm leading-relaxed mb-6">
              {t.desc}
            </p>
            <h4 className="font-serif text-lg text-[var(--color-gold)] mb-2">
              {uiText[lang].nav.brandTagline}
            </h4>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6">{t.quickLinks}</h3>
            <ul className="space-y-4 text-sm text-[var(--color-ivory)]/80">
              <li><Link href="/" className="hover:text-[var(--color-gold)] transition-colors">{t.home}</Link></li>
              <li><Link href="/about" className="hover:text-[var(--color-gold)] transition-colors">{t.about}</Link></li>
              <li><Link href="/projects" className="hover:text-[var(--color-gold)] transition-colors">{t.portfolio}</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-gold)] transition-colors">{t.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6">{t.servicesTitle}</h3>
            <ul className="space-y-4 text-sm text-[var(--color-ivory)]/80">
              {t.serviceLinks.map((item) => (
                <li key={item}>
                  <Link href="/services" className="hover:text-[var(--color-gold)] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6">{t.contactTitle}</h3>
            <ul className="space-y-4 text-sm text-[var(--color-ivory)]/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <span>{c.studioAddressLine1}<br />{c.studioAddressLine2}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <span>hello@decorstudio.com</span>
              </li>
              <li className="pt-2">
                <p className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-semibold mb-3">
                  {t.followUs}
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow DecorStudio on Instagram"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[var(--color-ivory)]/20 bg-white/5 text-xs font-medium text-[var(--color-ivory)] hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-charcoal)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow DecorStudio on Facebook"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[var(--color-ivory)]/20 bg-white/5 text-xs font-medium text-[var(--color-ivory)] hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-charcoal)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    Facebook
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-ivory)]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-ivory)]/60">
          <p>&copy; {new Date().getFullYear()} {t.rights}</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[var(--color-ivory)]">{t.privacy}</Link>
            <Link href="#" className="hover:text-[var(--color-ivory)]">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
