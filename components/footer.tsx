'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t-2 border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-16 h-16 transform hover:scale-110 transition-transform">
                <Image
                  src="/logo.png?v=2"
                  alt="Queens Market Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="font-bold text-lg text-foreground">The Queens Convenient Market</span>
            </div>
            <p className="text-muted-foreground text-sm">Your neighborhood's trusted convenience store.</p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/products', label: 'Products' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary hover:font-semibold transition-all text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+15194985174" className="hover:text-primary transition-colors">+1 519-498-5174</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:91queenstore@gmail.com" className="hover:text-primary transition-colors">91queenstore@gmail.com</a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="https://maps.google.com/?q=91+Queen+St+S,+Kitchener,+ON+N2G+1V9" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">91 Queen St S, Kitchener, ON N2G 1V9, Canada</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-bold text-foreground mb-4">Store Hours</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Mon - Fri: 6am - 11pm</span>
              </li>
              <li className="ml-6">Sat: 7am - 11pm</li>
              <li className="ml-6">Sun: 7am - 10pm</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 The Queens Convenient Market. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
