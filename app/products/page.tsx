'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Star, ShoppingCart, Candy, Apple, UtensilsCrossed, Wind, Ticket, Cigarette, Croissant, Utensils, ArrowRight } from 'lucide-react'

export default function Products() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = [
    { id: 'all', name: 'All Products', icon: ShoppingCart },
    { id: 'grocery', name: 'General Grocery', icon: ShoppingCart },
    { id: 'sweets', name: 'Sweets', icon: Candy },
    { id: 'dryfruits', name: 'Dry Fruits', icon: Apple },
    { id: 'food', name: 'Food', icon: UtensilsCrossed },
    { id: 'vape', name: 'Vape', icon: Wind },
    { id: 'lottery', name: 'Lottery', icon: Ticket },
    { id: 'smoke', name: 'Smoke', icon: Cigarette },
    { id: 'bakery', name: 'Bakery', icon: Croissant },
    { id: 'crockery', name: 'Fancy Crockery', icon: Utensils },
  ]

  const products = [
    {
      id: 1,
      name: 'Fresh Groceries & Essentials',
      category: 'grocery',
      image: '/7g.jpeg',
      rating: 4.8,
      reviews: 245,
      description: 'Daily essentials and fresh grocery items for your home',
    },
    {
      id: 16,
      name: 'Premium Grocery Selection',
      category: 'grocery',
      image: '/1g.jpeg',
      rating: 4.7,
      reviews: 198,
      description: 'Quality grocery products for everyday needs',
    },
    {
      id: 17,
      name: 'Household Essentials',
      category: 'grocery',
      image: '/2g.jpeg',
      rating: 4.8,
      reviews: 223,
      description: 'Essential household items and groceries',
    },
    {
      id: 18,
      name: 'Fresh Market Produce',
      category: 'grocery',
      image: '/3g.jpeg',
      rating: 4.9,
      reviews: 267,
      description: 'Fresh produce and market groceries',
    },
    {
      id: 19,
      name: 'Daily Grocery Needs',
      category: 'grocery',
      image: '/4g.jpeg',
      rating: 4.6,
      reviews: 189,
      description: 'Your daily grocery requirements in one place',
    },
    {
      id: 20,
      name: 'Quality Food Items',
      category: 'grocery',
      image: '/5g.jpeg',
      rating: 4.8,
      reviews: 234,
      description: 'High-quality food and grocery products',
    },
    {
      id: 21,
      name: 'Grocery Staples',
      category: 'grocery',
      image: '/6g.jpeg',
      rating: 4.7,
      reviews: 201,
      description: 'Essential grocery staples and basics',
    },
    {
      id: 22,
      name: 'Premium Grocery Range',
      category: 'grocery',
      image: '/11g.jpeg',
      rating: 4.9,
      reviews: 278,
      description: 'Premium selection of grocery items',
    },
    {
      id: 23,
      name: 'Complete Grocery Store',
      category: 'grocery',
      image: '/12g.jpeg',
      rating: 4.8,
      reviews: 256,
      description: 'Complete range of grocery products',
    },
    {
      id: 2,
      name: 'Premium Sweets Collection',
      category: 'sweets',
      image: '/2g.jpeg',
      rating: 4.9,
      reviews: 312,
      description: 'Delicious sweets and confectionery items',
    },
    {
      id: 3,
      name: 'Dry Fruits & Nuts',
      category: 'dryfruits',
      image: '/dryfruits.webp',
      rating: 4.7,
      reviews: 189,
      description: 'Premium quality dry fruits and healthy nuts',
    },
    {
      id: 4,
      name: 'Ready-to-Eat Food',
      category: 'food',
      image: '/1f.jpeg',
      rating: 4.6,
      reviews: 156,
      description: 'Quick meals and ready-to-eat food items',
    },
    {
      id: 5,
      name: 'Vape Products',
      category: 'vape',
      image: '/vapes.jpg',
      rating: 4.5,
      reviews: 142,
      description: 'Wide selection of vape products and accessories',
    },
    {
      id: 6,
      name: 'Lottery Tickets',
      category: 'lottery',
      image: '/lottery.webp',
      rating: 4.8,
      reviews: 234,
      description: 'Official lottery tickets and scratch cards',
    },
    {
      id: 7,
      name: 'Smoke Products',
      category: 'smoke',
      image: '/smoke.jpg',
      rating: 4.6,
      reviews: 178,
      description: 'Cigarettes and smoking accessories',
    },
    {
      id: 8,
      name: 'Artisan Bread Collection',
      category: 'bakery',
      image: '/5b.jpeg',
      rating: 4.9,
      reviews: 298,
      description: 'Freshly baked bread, pastries, and baked goods',
    },
    {
      id: 9,
      name: 'Sweet Pastries',
      category: 'bakery',
      image: '/2b.jpeg',
      rating: 4.8,
      reviews: 221,
      description: 'Delicious pastries and sweet treats',
    },
    {
      id: 10,
      name: 'Gourmet Cookies',
      category: 'bakery',
      image: '/3b.jpeg',
      rating: 4.9,
      reviews: 267,
      description: 'Premium cookies and baked delights',
    },
    {
      id: 11,
      name: 'Fresh Baked Treats',
      category: 'bakery',
      image: '/6b.jpeg',
      rating: 4.8,
      reviews: 243,
      description: 'Daily fresh baked goods and treats',
    },
    {
      id: 12,
      name: 'Elegant Dinner Set',
      category: 'crockery',
      image: '/1c.jpeg',
      rating: 4.7,
      reviews: 167,
      description: 'Elegant dinnerware and dinner sets',
    },
    {
      id: 13,
      name: 'Premium Tea Set',
      category: 'crockery',
      image: '/2c.jpeg',
      rating: 4.8,
      reviews: 145,
      description: 'Beautiful tea sets and serving ware',
    },
    {
      id: 14,
      name: 'Decorative Plates',
      category: 'crockery',
      image: '/3c.jpeg',
      rating: 4.6,
      reviews: 132,
      description: 'Decorative plates and serving dishes',
    },
    {
      id: 15,
      name: 'Serving Bowl Collection',
      category: 'crockery',
      image: '/4c.jpeg',
      rating: 4.9,
      reviews: 189,
      description: 'Premium serving bowls and platters',
    },
  ]

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url(/store-hero.jpg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/35 to-black/50 pointer-events-none" />
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float" />
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-bounce">
                <span className="text-sm font-bold text-white">Shop Our Collection</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl animate-slide-in-down">Our Products</h1>
              <p className="text-xl text-white/95 max-w-2xl mx-auto drop-shadow-lg animate-fade-in">
                Explore our wide selection of products across 9 categories - from general groceries to sweets, dry fruits, bakery items, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #a8d5e2 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-in-down">Browse by Category</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
                Filter products by category to find exactly what you need
              </p>
            </div>

            <div className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((cat, index) => {
                  const Icon = cat.icon
                  const buttonColors = ['#a8d5e2', '#f5c6b3', '#d4a5d4', '#d4c5a9', '#b5e7a0', '#ffd4a3', '#c5b3f5', '#f5b3d4', '#b3e5f5', '#e5d4b3']
                  return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`playful-btn px-6 py-3 rounded-3xl font-bold transition-all duration-300 flex items-center gap-2`}
                    style={{ 
                      backgroundColor: selectedCategory === cat.id ? buttonColors[index] : '#e8e0d5', 
                      color: selectedCategory === cat.id ? 'white' : '#3d3d3d', 
                      animation: `slideIn 0.5s ease-out ${index * 0.05}s both` 
                    }}
                  >
                    <Icon className="w-4 h-4" />
                    {cat.name}
                  </button>
                  )
                })}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => {
                const colors = ['#a8d5e2', '#f5c6b3', '#d4a5d4', '#d4c5a9']
                const productColor = colors[index % colors.length]
                return (
                <div
                  key={product.id}
                  className="playful-card group rounded-3xl overflow-hidden bg-white border-2 border-border shadow-premium hover:shadow-premium-hover"
                  style={{ animation: `fadeInScale 0.6s ease-out ${index * 0.05}s both` }}
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm transform translate-x-20 group-hover:translate-x-0 transition-transform duration-500" style={{ backgroundColor: productColor }}>
                      Popular
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 transition-all duration-300 ${
                              i < Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400 group-hover:scale-110'
                                : 'text-slate-300'
                            }`}
                            style={{ transitionDelay: `${i * 50}ms` }}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-foreground">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                    <button 
                      className="w-full py-3 px-4 text-white rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden premium-hover"
                      style={{ backgroundColor: productColor }}
                    >
                      View Details
                    </button>
                  </div>
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: productColor }}
                  />
                </div>
                )
              })}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>


      </main>
      <Footer />
    </>
  )
}
