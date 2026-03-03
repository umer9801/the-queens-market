'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CheckCircle2, Award, Users, Leaf, Phone, MapPin, ShoppingCart, Candy, Apple, UtensilsCrossed, Wind, Ticket, Cigarette, Croissant, Utensils } from 'lucide-react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      icon: CheckCircle2,
      title: 'Quality First',
      description: 'We only stock the finest products, carefully selected for our customers.',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'We are deeply invested in serving our neighborhood and giving back.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Consistent service and reliability you can count on, every single day.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and sustainable sourcing.',
    },
  ]

  const timeline = [
    { year: '2010', event: 'The Queens Convenient Market Opens' },
    { year: '2014', event: 'Expanded Product Selection & Services' },
    { year: '2018', event: 'Modernization & Technology Integration' },
    { year: '2024', event: 'Digital Presence & Online Experience Launch' },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section
          className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative overflow-hidden"
          style={{ backgroundImage: 'url(/abouthero.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/50 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative">
            <div
              className={`text-center transform transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <span className="text-sm font-bold text-white">Our Story</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                About Us
              </h1>
              <p className="text-xl text-white/95 max-w-2xl mx-auto drop-shadow-lg">
                Serving our community with quality, care, and dedication since 2010.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/abouthero.jpg"
                alt="Our store story"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-slide-in-right">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
                The Queens Convenient Market was founded with a simple mission: to be the most trusted and convenient shopping destination in our neighborhood. What started as a small corner store has grown into a beloved community institution.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                Over the years, we've maintained our commitment to quality, fair prices, and personalized service. We know our customers by name, understand their preferences, and take pride in being part of their daily lives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                Today, we continue to evolve while staying true to our core values: delivering excellence, supporting our community, and making shopping convenient and enjoyable for everyone who walks through our doors.
              </p>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Products in Action</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: '/7g.jpeg', name: 'General Grocery', delay: '0s' },
                { src: '/dryfruits.webp', name: 'Dry Fruits', delay: '0.1s' },
                { src: '/5b.jpeg', name: 'Bakery', delay: '0.2s' },
                { src: '/1f.jpeg', name: 'Food', delay: '0.3s' },
                { src: '/vapes.jpg', name: 'Vape', delay: '0.4s' },
                { src: '/smoke.jpg', name: 'Smoke', delay: '0.5s' },
                { src: '/2g.jpeg', name: 'Sweets', delay: '0.6s' },
                { src: '/1b.jpeg', name: 'Fancy Crockery', delay: '0.7s' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                  style={{ animation: `scaleIn 0.6s ease-out ${item.delay} both` }}
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <h3 className="text-white font-bold text-lg drop-shadow-lg">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories Section - Carousel */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #a8d5e2 2px, transparent 2px)', backgroundSize: '50px 50px' }} />
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-in-down">What We Offer</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
                From everyday essentials to specialty items, we have everything you need under one roof
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Carousel Track */}
              <div className="category-carousel-track flex gap-6">
                {/* First Set */}
                {[
                  { 
                    name: 'General Grocery', 
                    icon: ShoppingCart, 
                    color: '#a8d5e2',
                    description: 'Fresh produce, dairy, and daily essentials for your home',
                    items: ['Fresh Vegetables', 'Dairy Products', 'Canned Goods', 'Household Items']
                  },
                  { 
                    name: 'Sweets', 
                    icon: Candy, 
                    color: '#f5c6b3',
                    description: 'Delicious candies, chocolates, and confectionery treats',
                    items: ['Chocolates', 'Candies', 'Gummies', 'Traditional Sweets']
                  },
                  { 
                    name: 'Dry Fruits', 
                    icon: Apple, 
                    color: '#d4c5a9',
                    description: 'Premium quality nuts and dried fruits for healthy snacking',
                    items: ['Almonds', 'Cashews', 'Raisins', 'Mixed Nuts']
                  },
                  { 
                    name: 'Food', 
                    icon: UtensilsCrossed, 
                    color: '#ffd4a3',
                    description: 'Ready-to-eat meals and quick food options',
                    items: ['Instant Meals', 'Frozen Foods', 'Snacks', 'Beverages']
                  },
                  { 
                    name: 'Vape', 
                    icon: Wind, 
                    color: '#b3e5f5',
                    description: 'Wide selection of vaping products and accessories',
                    items: ['Vape Devices', 'E-Liquids', 'Accessories', 'Starter Kits']
                  },
                  { 
                    name: 'Lottery', 
                    icon: Ticket, 
                    color: '#ffd4a3',
                    description: 'Official lottery tickets and scratch cards',
                    items: ['Lotto Max', 'Lotto 649', 'Scratch Cards', 'Daily Games']
                  },
                  { 
                    name: 'Smoke', 
                    icon: Cigarette, 
                    color: '#d4a5d4',
                    description: 'Cigarettes and smoking accessories',
                    items: ['Cigarettes', 'Cigars', 'Rolling Papers', 'Lighters']
                  },
                  { 
                    name: 'Bakery', 
                    icon: Croissant, 
                    color: '#f5b3d4',
                    description: 'Freshly baked bread, pastries, and baked goods',
                    items: ['Fresh Bread', 'Pastries', 'Cakes', 'Cookies']
                  },
                  { 
                    name: 'Fancy Crockery', 
                    icon: Utensils, 
                    color: '#e5d4b3',
                    description: 'Elegant dinnerware, plates, and serving sets',
                    items: ['Dinner Sets', 'Tea Sets', 'Serving Bowls', 'Decorative Plates']
                  },
                ].map((category, index) => {
                  const Icon = category.icon
                  return (
                  <div
                    key={`first-${index}`}
                    className="category-carousel-item flex-shrink-0 w-[320px] product-category-card group relative rounded-3xl overflow-hidden bg-white border-2 border-border shadow-premium hover:shadow-premium-hover transition-all duration-500"
                  >
                    {/* Icon Circle Background */}
                    <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: category.color }} />
                    
                    <div className="p-6 relative z-10">
                      {/* Icon */}
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative overflow-hidden"
                        style={{ backgroundColor: category.color }}
                      >
                        <Icon className="w-8 h-8 text-white relative z-10" />
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {category.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      
                      {/* Items List */}
                      <ul className="space-y-2 mb-4">
                        {category.items.map((item, idx) => (
                          <li 
                            key={idx} 
                            className="text-xs text-muted-foreground flex items-center gap-2 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 opacity-70 group-hover:opacity-100"
                            style={{ transitionDelay: `${idx * 50}ms` }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 transform group-hover:scale-150 transition-transform duration-300" style={{ backgroundColor: category.color }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      {/* View More Link */}
                      <a 
                        href="/products"
                        className="inline-flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500"
                        style={{ color: category.color }}
                      >
                        View Products
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      
                      {/* Bottom Accent Line */}
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                  </div>
                  )
                })}
                
                {/* Duplicate Set for Seamless Loop */}
                {[
                  { 
                    name: 'General Grocery', 
                    icon: ShoppingCart, 
                    color: '#a8d5e2',
                    description: 'Fresh produce, dairy, and daily essentials for your home',
                    items: ['Fresh Vegetables', 'Dairy Products', 'Canned Goods', 'Household Items']
                  },
                  { 
                    name: 'Sweets', 
                    icon: Candy, 
                    color: '#f5c6b3',
                    description: 'Delicious candies, chocolates, and confectionery treats',
                    items: ['Chocolates', 'Candies', 'Gummies', 'Traditional Sweets']
                  },
                  { 
                    name: 'Dry Fruits', 
                    icon: Apple, 
                    color: '#d4c5a9',
                    description: 'Premium quality nuts and dried fruits for healthy snacking',
                    items: ['Almonds', 'Cashews', 'Raisins', 'Mixed Nuts']
                  },
                  { 
                    name: 'Food', 
                    icon: UtensilsCrossed, 
                    color: '#ffd4a3',
                    description: 'Ready-to-eat meals and quick food options',
                    items: ['Instant Meals', 'Frozen Foods', 'Snacks', 'Beverages']
                  },
                  { 
                    name: 'Vape', 
                    icon: Wind, 
                    color: '#b3e5f5',
                    description: 'Wide selection of vaping products and accessories',
                    items: ['Vape Devices', 'E-Liquids', 'Accessories', 'Starter Kits']
                  },
                  { 
                    name: 'Lottery', 
                    icon: Ticket, 
                    color: '#ffd4a3',
                    description: 'Official lottery tickets and scratch cards',
                    items: ['Lotto Max', 'Lotto 649', 'Scratch Cards', 'Daily Games']
                  },
                  { 
                    name: 'Smoke', 
                    icon: Cigarette, 
                    color: '#d4a5d4',
                    description: 'Cigarettes and smoking accessories',
                    items: ['Cigarettes', 'Cigars', 'Rolling Papers', 'Lighters']
                  },
                  { 
                    name: 'Bakery', 
                    icon: Croissant, 
                    color: '#f5b3d4',
                    description: 'Freshly baked bread, pastries, and baked goods',
                    items: ['Fresh Bread', 'Pastries', 'Cakes', 'Cookies']
                  },
                  { 
                    name: 'Fancy Crockery', 
                    icon: Utensils, 
                    color: '#e5d4b3',
                    description: 'Elegant dinnerware, plates, and serving sets',
                    items: ['Dinner Sets', 'Tea Sets', 'Serving Bowls', 'Decorative Plates']
                  },
                ].map((category, index) => {
                  const Icon = category.icon
                  return (
                  <div
                    key={`second-${index}`}
                    className="category-carousel-item flex-shrink-0 w-[320px] product-category-card group relative rounded-3xl overflow-hidden bg-white border-2 border-border shadow-premium hover:shadow-premium-hover transition-all duration-500"
                  >
                    {/* Icon Circle Background */}
                    <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: category.color }} />
                    
                    <div className="p-6 relative z-10">
                      {/* Icon */}
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative overflow-hidden"
                        style={{ backgroundColor: category.color }}
                      >
                        <Icon className="w-8 h-8 text-white relative z-10" />
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {category.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      
                      {/* Items List */}
                      <ul className="space-y-2 mb-4">
                        {category.items.map((item, idx) => (
                          <li 
                            key={idx} 
                            className="text-xs text-muted-foreground flex items-center gap-2 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 opacity-70 group-hover:opacity-100"
                            style={{ transitionDelay: `${idx * 50}ms` }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 transform group-hover:scale-150 transition-transform duration-300" style={{ backgroundColor: category.color }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      {/* View More Link */}
                      <a 
                        href="/products"
                        className="inline-flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500"
                        style={{ color: category.color }}
                      >
                        View Products
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      
                      {/* Bottom Accent Line */}
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                  </div>
                  )
                })}
              </div>
              
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-slate-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-in-down">Our Values</h2>
              <p className="text-lg text-muted-foreground animate-fade-in">These principles guide everything we do.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                const colors = ['#a8d5e2', '#f5c6b3', '#d4a5d4', '#d4c5a9']
                return (
                  <div
                    key={index}
                    className="playful-card group p-8 rounded-3xl bg-white border-2 border-border shadow-premium hover:shadow-premium-hover text-center"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                    }}
                  >
                    <div className="mb-4 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mx-auto group-hover:shadow-2xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" style={{ backgroundColor: colors[index] }}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    <div 
                      className="mt-4 h-1 w-0 group-hover:w-full mx-auto transition-all duration-500 rounded-full"
                      style={{ backgroundColor: colors[index] }}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(90deg, #a8d5e2 1px, transparent 1px), linear-gradient(#a8d5e2 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center animate-slide-in-down">Our Journey</h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => {
                  const colors = ['#a8d5e2', '#f5c6b3', '#d4a5d4', '#d4c5a9']
                  return (
                  <div key={index} className="flex gap-8 items-center">
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right md:pr-12' : 'md:pl-12'}`}>
                      <div className="playful-card group p-6 rounded-2xl bg-white border-2 border-border shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2">
                        <h3 className="text-2xl font-bold mb-2 group-hover:scale-110 transition-transform inline-block" style={{ color: colors[index] }}>{item.year}</h3>
                        <p className="text-foreground font-semibold">{item.event}</p>
                        <div 
                          className="mt-3 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                          style={{ backgroundColor: colors[index], marginLeft: index % 2 === 0 ? 'auto' : '0' }}
                        />
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:flex items-center justify-center relative z-10">
                      <div className="w-6 h-6 bg-white border-4 rounded-full shadow-lg glow-pulse" style={{ borderColor: colors[index] }} />
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
              {[
                { value: '14+', label: 'Years of Service', delay: '0s' },
                { value: '50k+', label: 'Happy Customers', delay: '0.1s' },
                { value: '5,000+', label: 'Products', delay: '0.2s' },
                { value: '100%', label: 'Committed', delay: '0.3s' },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-white group transform hover:scale-110 transition-all duration-500"
                  style={{ animation: `fadeInScale 0.6s ease-out ${stat.delay} both` }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-6xl transition-all duration-500">{stat.value}</div>
                  <p className="text-white/80 group-hover:text-white transition-colors">{stat.label}</p>
                  <div className="mt-3 h-1 w-0 group-hover:w-full mx-auto bg-white rounded-full transition-all duration-500" />
                </div>
              ))}
            </div>
            
            {/* Contact Info */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Visit Us Today</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/90">
                <a href="tel:+15194985174" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">+1 519-498-5174</span>
                </a>
                <span className="hidden sm:inline text-white/50">|</span>
                <a href="https://maps.google.com/?q=91+Queen+St+S,+Kitchener,+ON+N2G+1V9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">91 Queen St S, Kitchener, ON</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  )
}
