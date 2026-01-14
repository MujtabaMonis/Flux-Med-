'use client'

import { useState } from 'react'
import SectionWrapper from '@/components/SectionWrapper'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  'Annual Wellness Visits (AWV)',
  'Chronic Care Management (CCM)',
  'Population Health Management',
  'Provider Credentialing',
  'Referrals & Authorizations',
  'Front Office Support',
  'Medical Billing Services',
  'Medical Transcription',
  'Documentation Handling',
  'Multiple Services',
  'Other',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        practice: '',
        service: '',
        message: '',
      })
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600">
              Book a free consultation to discover how Flux Med can optimize your healthcare operations and drive better patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Book a Free Consultation</h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours to discuss your practice's needs.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-green-900 mb-2">Thank You!</h3>
                    <p className="text-green-700">
                      We've received your message and will contact you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Dr. John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="john.smith@practice.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="practice" className="block text-sm font-medium text-slate-700 mb-2">
                        Practice Name
                      </label>
                      <input
                        type="text"
                        id="practice"
                        name="practice"
                        value={formData.practice}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Smith Family Practice"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                        placeholder="Tell us about your practice's needs and how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-sm text-slate-500 text-center">
                      By submitting this form, you agree to our Privacy Policy. We respect your privacy and will never share your information.
                    </p>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <p className="text-slate-600 mb-8">
                  Reach out to us through any of the following channels. We're here to help optimize your healthcare operations.
                </p>

                <div className="space-y-6 mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl"
                  >
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                      <a href="mailto:info@fluxmed.com" className="text-primary-600 hover:text-primary-700">
                        info@fluxmed.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl"
                  >
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                      <a href="tel:+1-555-000-0000" className="text-primary-600 hover:text-primary-700">
                        +1 (555) 000-0000
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl"
                  >
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Service Area</h3>
                      <p className="text-slate-600">Serving USA-based physicians</p>
                      <p className="text-slate-600 text-sm mt-1">Operations delivered by expert team in Pakistan</p>
                    </div>
                  </motion.div>
                </div>

                <div className="bg-primary-50 rounded-xl p-6 border-2 border-primary-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Response Time</h3>
                  <p className="text-slate-700">
                    We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'How quickly can Flux Med get started with our practice?',
                  a: 'We can typically onboard new practices within 1-2 weeks, depending on the services required. We\'ll work with you to ensure a smooth transition with minimal disruption to your operations.',
                },
                {
                  q: 'Is Flux Med HIPAA compliant?',
                  a: 'Yes, absolutely. All our workflows, data handling, and processes are fully HIPAA compliant. We use secure, encrypted systems and follow strict protocols to protect patient information.',
                },
                {
                  q: 'What reporting and analytics do you provide?',
                  a: 'We provide regular performance reports, including revenue metrics, quality scores, and operational KPIs. Our dashboards give you real-time visibility into your practice\'s performance.',
                },
                {
                  q: 'Can we customize services to our specific needs?',
                  a: 'Yes, we work with each practice to tailor our services to their unique requirements. Whether you need a single service or comprehensive support, we\'ll create a solution that fits.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}