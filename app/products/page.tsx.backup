'use client'

import { useEffect, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 519-498-5174',
      link: 'tel:+15194985174',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Mail,
      title: 'Email',
      value: '91queenstore@gmail.com',
      link: 'mailto:91queenstore@gmail.com',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '91 Queen St S, Kitchener, ON N2G 1V9, Canada',
      link: 'https://maps.google.com/?q=91+Queen+St+S,+Kitchener,+ON+N2G+1V9',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Clock,
      title: 'Hours',
      value: 'Mon-Fri: 6am-11pm, Sat-Sun: 7am-11pm',
      link: null,
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative">
            <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">Get In Touch</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions? We'd love to hear from you. Contact us anytime!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                const colors = ['#a8d5e2', '#d4a5d4', '#b5e7a0', '#f5c6b3']
                const content = (
                  <>
                    <div className="mb-4 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-125" style={{ backgroundColor: colors[index] }}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{info.value}</p>
                  </>
                )
                
                return info.link ? (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="playful-card group p-8 rounded-3xl bg-white border-2 border-border shadow-md hover:border-primary transition-all block"
                    style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={index}
                    className="playful-card group p-8 rounded-3xl bg-white border-2 border-border shadow-md"
                    style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                  >
                    {content}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-2xl bg-input border-2 border-border hover:border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder-muted-foreground"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-2xl bg-input border-2 border-border hover:border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder-muted-foreground"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 rounded-2xl bg-input border-2 border-border hover:border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder-muted-foreground"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-input border-2 border-border hover:border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                    >
                      <option value="">Select a subject</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="delivery">Delivery Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us what's on your mind..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-2xl bg-input border-2 border-border hover:border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder-muted-foreground resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="playful-btn w-full py-4 px-6 bg-primary text-primary-foreground rounded-3xl font-bold flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>

                  {/* Success Message */}
                  {isSubmitted && (
                    <div className="p-4 bg-accent border-2 border-accent rounded-2xl flex items-center gap-3 animate-slide-in-up">
                      <CheckCircle className="w-5 h-5 text-accent-foreground flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-accent-foreground">Message Sent!</p>
                        <p className="text-sm text-accent-foreground/80">We'll get back to you soon.</p>
                      </div>
                    </div>
                  )}
                </form>
              </div>

              {/* Info & Hours */}
              <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-200">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Visit Us Today</h3>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Store Location</h4>
                      <a 
                        href="https://maps.google.com/?q=91+Queen+St+S,+Kitchener,+ON+N2G+1V9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        91 Queen St S, Kitchener, ON N2G 1V9, Canada
                      </a>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Contact Information</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <a href="tel:+15194985174" className="hover:text-primary transition-colors">+1 519-498-5174</a>
                        </li>
                        <li className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <a href="mailto:91queenstore@gmail.com" className="hover:text-primary transition-colors">91queenstore@gmail.com</a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Store Hours</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span className="font-semibold">6:00 AM - 11:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Saturday:</span>
                          <span className="font-semibold">7:00 AM - 11:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Sunday:</span>
                          <span className="font-semibold">7:00 AM - 10:00 PM</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-blue-200">
                      <h4 className="font-semibold text-foreground mb-2">Holiday Hours</h4>
                      <p className="text-muted-foreground text-sm">
                        Please check our website for special holiday hours and closures.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-100 rounded-lg p-4">
                    <p className="text-sm text-blue-900">
                      <span className="font-semibold">💡 Tip:</span> Visit us during our morning hours for the freshest selection of produce!
                    </p>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <a
                    href="tel:+15194985174"
                    className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg text-center font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="w-5 h-5 mx-auto mb-1" />
                    Call Now
                  </a>
                  <a
                    href="mailto:91queenstore@gmail.com"
                    className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg text-center font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-5 h-5 mx-auto mb-1" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {[
                {
                  q: 'What are your delivery options?',
                  a: 'We offer in-store shopping and local delivery options. Contact us for more details about delivery availability in your area.',
                },
                {
                  q: 'Do you accept online orders?',
                  a: 'Yes! You can browse our products online and place orders through our store. Call us at +1 519-498-5174 to confirm availability.',
                },
                {
                  q: 'What is your return policy?',
                  a: 'We want you to be 100% satisfied. If you have any issues with your purchase, please contact us within 7 days for a resolution.',
                },
                {
                  q: 'Do you have a loyalty program?',
                  a: 'Yes! Join our customer loyalty program for exclusive discounts and special offers. Ask our staff for details in-store.',
                },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-border hover:border-blue-400 transition-all duration-300">
                  <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
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
      `}</style>
    </>
  )
}
