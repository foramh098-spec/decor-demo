import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-plum)] text-[var(--color-ivory)] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-serif tracking-tight inline-block mb-6">
              DecorStudio<span className="text-[var(--color-gold)]">.</span>
            </Link>
            <p className="text-[var(--color-ivory)]/70 text-sm leading-relaxed mb-6">
              From elegant weddings to vibrant celebrations, we create beautifully styled event spaces that make every moment unforgettable.
            </p>
            <h4 className="font-serif text-lg text-[var(--color-gold)] mb-2">Celebrate with style.</h4>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-[var(--color-ivory)]/80">
              <li><Link href="/" className="hover:text-[var(--color-gold)] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[var(--color-gold)] transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-[var(--color-gold)] transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-gold)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-[var(--color-ivory)]/80">
              <li><Link href="/services" className="hover:text-[var(--color-gold)] transition-colors">Wedding Decor</Link></li>
              <li><Link href="/services" className="hover:text-[var(--color-gold)] transition-colors">Corporate Events</Link></li>
              <li><Link href="/services" className="hover:text-[var(--color-gold)] transition-colors">Birthday Parties</Link></li>
              <li><Link href="/services" className="hover:text-[var(--color-gold)] transition-colors">Custom Styling</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-[var(--color-ivory)]/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <span>123 Design Avenue,<br />Mumbai, India 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <span>hello@decorstudio.com</span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a href="#" className="hover:text-[var(--color-gold)] transition-colors font-medium">
                  Follow us on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-ivory)]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-ivory)]/60">
          <p>&copy; {new Date().getFullYear()} DecorStudio. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[var(--color-ivory)]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--color-ivory)]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
