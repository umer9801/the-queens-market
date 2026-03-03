'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, BadgeCheck } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg py-2 backdrop-blur-sm' 
        : 'bg-gradient-to-b from-white/80 to-transparent py-4 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-16 h-16 transform group-hover:scale-110 duration-300">
              <Image
                src="/logo.png?v=2"
                alt="Queens Market Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">
              The Queens Convenient Market
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground font-semibold px-4 py-2 rounded-2xl hover:bg-muted transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full group-hover:w-[calc(100%-8px)] transition-all duration-300" />
              </Link>
            ))}
            
            {/* Halal Certified Badge */}
            <div className="ml-4 flex items-center gap-2 px-4 py-2 bg-green-50 border-2 border-green-500 rounded-full animate-pulse">
              <BadgeCheck className="w-5 h-5 text-green-600" />
              <span className="text-sm font-bold text-green-700">Halal Certified</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-purple-100 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-foreground font-medium hover:bg-blue-50 border-b border-border last:border-b-0 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
