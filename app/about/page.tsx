'use client'

import SectionWrapper from '@/components/SectionWrapper'
import Link from 'next/link'
import { Shield, Clock, TrendingUp, Users, Target, ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Full compliance with healthcare regulations and secure data handling protocols.',
  },
  {
    icon: Clock,
    title: 'Rapid Response',
    description: 'Sub-24 hour response times ensure your practice stays ahead of operational challenges.',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven',
    description: 'Actionable insights and analytics to drive continuous improvement and optimization.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced healthcare operations professionals delivering excellence from Pakistan.',
  },
]

const principles = [
  'Seamless communication and rapid response times',
  'Superior population management capabilities',
  'Actionable data-driven insights',
  'HIPAA-compliant workflows and secure data handling',
  'US healthcare focus with deep regulatory knowledge',
  'Process transparency and regular reporting',
  'Operational excellence and continuous improvement',
  'Patient-centered approach to care management',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About Flux Med
            </h1>
            <p className="text-xl text-slate-600">
              Trusted healthcare operations partner specializing in patient population management, risk stratification, and value-based care enablement.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                Flux Med is a trusted healthcare operations partner serving USA-based physicians with operations delivered by an expert team in Pakistan. We specialize in patient population management, risk stratification, and value-based care enablement.
              </p>
              <p className="text-lg text-slate-700">
                Our core promise is to deliver seamless communication, rapid response times, superior population management, and actionable data-driven insights that enable physicians to focus on patient care while we handle the complexities of healthcare operations.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="inline-flex p-4 bg-primary-100 rounded-xl mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Operating Principles */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">Operating Principles</h2>
            <div className="bg-white border-2 border-primary-100 rounded-2xl p-8 md:p-12">
              <ul className="space-y-4">
                {principles.map((principle, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{principle}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">Why Choose Flux Med</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <Target className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">US Healthcare Focus</h3>
                <p className="text-slate-700">
                  Deep understanding of US healthcare regulations, payer requirements, and value-based care models. We serve USA-based physicians with operations delivered by our expert team.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <Shield className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">HIPAA Compliance</h3>
                <p className="text-slate-700">
                  Full compliance with HIPAA regulations and secure data handling protocols. Your patients' data is protected with the highest standards of security and privacy.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <Clock className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Rapid Response</h3>
                <p className="text-slate-700">
                  Sub-24 hour response times ensure your practice stays ahead. We understand that healthcare operations require timely attention and quick decision-making.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <TrendingUp className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Proven Results</h3>
                <p className="text-slate-700">
                  Data-driven approach delivering measurable outcomes and revenue optimization. We track performance metrics and continuously improve our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner with Flux Med
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how we can help optimize your practice operations and drive better patient outcomes.
            </p>
            <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4 inline-flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
