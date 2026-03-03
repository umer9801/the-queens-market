'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight, ShoppingBag, Clock, Truck, MapPin, Phone, BadgeCheck } from 'lucide-react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: ShoppingBag,
      title: 'Wide Selection',
      description: 'From fresh groceries to daily essentials, we have everything you need.',
    },
    {
      icon: Clock,
      title: 'Extended Hours',
      description: 'Open early to late, convenient shopping whenever you need it.',
    },
    {
      icon: Truck,
      title: 'Quality Products',
      description: 'Hand-picked items ensuring the best quality for our customers.',
    },
    {
      icon: MapPin,
      title: 'Local & Trusted',
      description: 'Your neighborhood favorite for over a decade.',
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url(/hero.jpeg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40 pointer-events-none" />
          
          {/* Floating Elements */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-20 right-20 w-24 h-24 bg-white rounded-full animate-float" />
            <div className="absolute bottom-32 left-20 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
          </div>

          <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-block mb-4 px-4 py-2 bg-white rounded-full shadow-lg animate-bounce">
                <span className="text-sm font-bold text-foreground">Welcome to Queens Market</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Your Neighborhood's
                <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">Favorite Market</span>
              </h1>
              <p className="text-lg text-white mb-8 leading-relaxed max-w-md drop-shadow-lg">
                Discover quality products, exceptional service, and unbeatable convenience. Everything you need is here, all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="playful-btn inline-flex items-center justify-center gap-2 border-3 border-white text-white px-8 py-4 rounded-3xl font-bold bg-black/20 backdrop-blur-sm hover:bg-black/30"
                >
                  Learn More
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #a8d5e2 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            {/* Halal Certified Banner */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-50 to-emerald-50 border-3 border-green-500 rounded-full shadow-lg animate-bounce-slow">
                <BadgeCheck className="w-8 h-8 text-green-600" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-green-700">100% Halal Certified</div>
                  <div className="text-sm text-green-600">All our products meet Halal standards</div>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-in-down">Why Choose Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
                We're dedicated to providing the best shopping experience with quality products and outstanding service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                const colors = ['#a8d5e2', '#f5c6b3', '#d4a5d4', '#d4c5a9']
                return (
                  <div
                    key={index}
                    className="playful-card group p-8 rounded-3xl bg-white border-2 border-border shadow-premium hover:shadow-premium-hover"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-4 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" style={{ backgroundColor: colors[index] }}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    
                    {/* Accent Line */}
                    <div 
                      className="mt-4 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                      style={{ backgroundColor: colors[index] }}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Products</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our most popular items, handpicked just for you
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Carousel Track */}
              <div className="carousel-track flex gap-6 animate-carousel">
                {/* First Set */}
                {[
                  { name: 'General Grocery', image: '/7g.jpeg', color: '#a8d5e2' },
                  { name: 'Sweets', image: '/2g.jpeg', color: '#f5c6b3' },
                  { name: 'Dry Fruits', image: '/dryfruits.webp', color: '#d4c5a9' },
                  { name: 'Bakery', image: '/5b.jpeg', color: '#f5b3d4' },
                  { name: 'Food', image: '/1f.jpeg', color: '#ffd4a3' },
                  { name: 'Vape', image: '/vapes.jpg', color: '#b3e5f5' },
                  { name: 'Lottery', image: '/lottery.webp', color: '#ffd4a3' },
                  { name: 'Smoke', image: '/smoke.jpg', color: '#d4a5d4' },
                ].map((product, index) => (
                  <div
                    key={`first-${index}`}
                    className="carousel-item flex-shrink-0 w-[280px] group relative rounded-3xl overflow-hidden bg-white border-2 border-border shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                        <ShoppingBag className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <Link
                        href="/products"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                        style={{ color: product.color }}
                      >
                        Shop Now <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      style={{ backgroundColor: product.color }}
                    />
                  </div>
                ))}
                
                {/* Duplicate Set for Seamless Loop */}
                {[
                  { name: 'General Grocery', image: '/7g.jpeg', color: '#a8d5e2' },
                  { name: 'Sweets', image: '/2g.jpeg', color: '#f5c6b3' },
                  { name: 'Dry Fruits', image: '/dryfruits.webp', color: '#d4c5a9' },
                  { name: 'Bakery', image: '/5b.jpeg', color: '#f5b3d4' },
                  { name: 'Food', image: '/1f.jpeg', color: '#ffd4a3' },
                  { name: 'Vape', image: '/vapes.jpg', color: '#b3e5f5' },
                  { name: 'Lottery', image: '/lottery.webp', color: '#ffd4a3' },
                  { name: 'Smoke', image: '/smoke.jpg', color: '#d4a5d4' },
                ].map((product, index) => (
                  <div
                    key={`second-${index}`}
                    className="carousel-item flex-shrink-0 w-[280px] group relative rounded-3xl overflow-hidden bg-white border-2 border-border shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                        <ShoppingBag className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <Link
                        href="/products"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                        style={{ color: product.color }}
                      >
                        Shop Now <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      style={{ backgroundColor: product.color }}
                    />
                  </div>
                ))}
              </div>
              
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }} />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Shop?</h2>
            <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
              Visit our store today and experience the Queens Market difference. We're here to serve you with quality products and a smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 text-white/90">
              <a href="tel:+15194985174" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>+1 519-498-5174</span>
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="https://maps.google.com/?q=91+Queen+St+S,+Kitchener,+ON+N2G+1V9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <MapPin className="w-4 h-4" />
                <span>91 Queen St S, Kitchener, ON</span>
              </a>
            </div>
            <Link
              href="/products"
              className="playful-btn inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 rounded-3xl font-bold hover:shadow-2xl"
            >
              Explore Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
