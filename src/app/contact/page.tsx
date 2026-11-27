"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { uiText } from "@/data/translations";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = uiText[lang].contactPage;

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[var(--color-ivory)]">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Contact Info */}
              <div className="lg:col-span-5">
                <ScrollReveal>
                  <h1 className="text-4xl md:text-6xl font-serif text-[var(--color-charcoal)] leading-tight mb-8">
                    {t.title}
                  </h1>
                  <p className="text-lg text-[var(--color-charcoal)]/80 font-light leading-relaxed mb-12">
                    {t.subtitle}
                  </p>

                  <div className="space-y-8 mb-12">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-cream)] flex items-center justify-center shrink-0 mr-4 text-[var(--color-charcoal)]">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--color-charcoal)] mb-1">{t.studioLabel}</h4>
                        <p className="text-[var(--color-charcoal)]/70 text-sm">
                          {t.studioAddressLine1}<br />{t.studioAddressLine2}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-cream)] flex items-center justify-center shrink-0 mr-4 text-[var(--color-charcoal)]">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--color-charcoal)] mb-1">{t.phoneLabel}</h4>
                        <p className="text-[var(--color-charcoal)]/70 text-sm">+91 98765 43210</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-cream)] flex items-center justify-center shrink-0 mr-4 text-[var(--color-charcoal)]">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--color-charcoal)] mb-1">{t.emailLabel}</h4>
                        <p className="text-[var(--color-charcoal)]/70 text-sm">hello@decorstudio.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-[var(--color-cream)] rounded-lg">
                    <h4 className="font-serif text-xl text-[var(--color-charcoal)] mb-4">{t.whatsappTitle}</h4>
                    <p className="text-[var(--color-charcoal)]/70 text-sm mb-6">{t.whatsappDesc}</p>
                    <Button variant="outline" className="w-full bg-white hover:bg-[#25D366] hover:text-white hover:border-[#25D366]">
                      {t.whatsappBtn}
                    </Button>
                  </div>
                </ScrollReveal>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-7">
                <ScrollReveal delay={0.2}>
                  <div className="bg-white p-8 md:p-12 shadow-sm border border-[var(--color-cream)]">
                    <h3 className="text-2xl font-serif text-[var(--color-charcoal)] mb-8">{t.formTitle}</h3>
                    
                    {/* TODO: Connect this form to an API route, Formspree, or EmailJS to handle submissions */}
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-[var(--color-charcoal)]">{t.nameLabel}</label>
                          <input 
                            type="text" 
                            id="name" 
                            className="w-full px-4 py-3 bg-[var(--color-ivory)] border border-[var(--color-cream)] focus:outline-none focus:border-[var(--color-marigold)] transition-colors rounded-sm"
                            placeholder={t.namePlaceholder}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-[var(--color-charcoal)]">{t.emailFieldLabel}</label>
                          <input 
                            type="email" 
                            id="email" 
                            className="w-full px-4 py-3 bg-[var(--color-ivory)] border border-[var(--color-cream)] focus:outline-none focus:border-[var(--color-marigold)] transition-colors rounded-sm"
                            placeholder={t.emailPlaceholder}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-[var(--color-charcoal)]">{t.phoneFieldLabel}</label>
                          <input 
                            type="tel" 
                            id="phone" 
                            className="w-full px-4 py-3 bg-[var(--color-ivory)] border border-[var(--color-cream)] focus:outline-none focus:border-[var(--color-marigold)] transition-colors rounded-sm"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="eventType" className="text-sm font-medium text-[var(--color-charcoal)]">{t.eventTypeLabel}</label>
                          <select 
                            id="eventType" 
                            className="w-full px-4 py-3 bg-[var(--color-ivory)] border border-[var(--color-cream)] focus:outline-none focus:border-[var(--color-marigold)] transition-colors rounded-sm appearance-none"
                          >
                            <option value="">{t.eventTypeSelect}</option>
                            {t.eventTypes.map((opt) => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="eventDate" className="text-sm font-medium text-[var(--color-charcoal)]">{t.eventDateLabel}</label>
                          <input 
                            type="date" 
                            id="eventDate" 
                            className="w-full px-4 py-3 bg-[var(--color-ivory)] border border-[var(--color-cream)] focus:outline-none focus:border-[var(--color-marigold)] transition-colors rounded-sm text-[var(--color-charcoal)]"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="guests" className="text-sm font-medium text-[var(--color-charcoal)]">{t.guestsLabel}</label>
                          <input 
                            type="number" 
                            id="guests" 
                            className="w-full px-4 py-3 bg-[var(--color-ivory)] border border-[var(--color-cream)] focus:outline-none focus:border-[var(--color-marigold)] transition-colors rounded-sm"
                            placeholder={t.guestsPlaceholder}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="venue" className="text-sm font-medium text-[var(--color-charcoal)]">{t.venueLabel}</label>
                        <input 
                          type="text" 
                          id="venue" 
                          className="w-full px-4 py-3 bg-[var(--color-ivory)] border border-[var(--color-cream)] focus:outline-none focus:border-[var(--color-marigold)] transition-colors rounded-sm"
                          placeholder={t.venuePlaceholder}
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-medium text-[var(--color-charcoal)]">{t.budgetLabel}</label>
                        <select 
                          id="budget" 
                          className="w-full px-4 py-3 bg-[var(--color-ivory)] border border-[var(--color-cream)] focus:outline-none focus:border-[var(--color-marigold)] transition-colors rounded-sm appearance-none"
                        >
                          <option value="">{t.budgetSelect}</option>
                          {t.budgetOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-[var(--color-charcoal)]">{t.messageLabel}</label>
                        <textarea 
                          id="message" 
                          rows={4}
                          className="w-full px-4 py-3 bg-[var(--color-ivory)] border border-[var(--color-cream)] focus:outline-none focus:border-[var(--color-marigold)] transition-colors rounded-sm resize-none"
                          placeholder={t.messagePlaceholder}
                        ></textarea>
                      </div>

                      <Button variant="primary" size="lg" className="w-full">
                        {t.submitBtn}
                      </Button>
                    </form>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
