'use client'

import Hero from '@/components/Hero'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import {
  Heart,
  Activity,
  Users,
  FileCheck,
  ClipboardList,
  Calendar,
  FileText,
  Headphones,
  FolderOpen,
  Shield,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Annual Wellness Visits (AWV)',
    description: 'Medicare pre-screening, risk assessments, care planning, and revenue optimization.',
    icon: Heart,
    href: '/services#awv',
  },
  {
    title: 'Chronic Care Management (CCM)',
    description: 'Personalized care plans, monthly follow-ups, care coordination, and increased reimbursements.',
    icon: Activity,
    href: '/services#ccm',
  },
  {
    title: 'Population Health Management',
    description: 'Proactive risk stratification, cost reduction, outcome improvement, and value-based care transition.',
    icon: Users,
    href: '/services#population-health',
  },
  {
    title: 'Provider Credentialing',
    description: 'Payer enrollment, compliance, and faster approvals for seamless operations.',
    icon: FileCheck,
    href: '/services#credentialing',
  },
  {
    title: 'Referrals & Authorizations',
    description: 'Insurance coordination, reduced delays, and faster patient care delivery.',
    icon: ClipboardList,
    href: '/services#referrals',
  },
  {
    title: 'Front Office Support',
    description: 'Scheduling, appointment reminders, and insurance verification.',
    icon: Calendar,
    href: '/services#front-office',
  },
  {
    title: 'Medical Billing Services',
    description: 'Clean claims, denial reduction, and faster reimbursements.',
    icon: FileText,
    href: '/services#billing',
  },
  {
    title: 'Medical Transcription',
    description: 'Accurate dictation conversion and timely documentation.',
    icon: Headphones,
    href: '/services#transcription',
  },
  {
    title: 'Documentation Handling',
    description: 'Record organization, compliance, and reduced admin burden.',
    icon: FolderOpen,
    href: '/services#documentation',
  },
]

const benefits = [
  'Seamless communication and rapid response times',
  'Superior population management capabilities',
  'Actionable data-driven insights',
  'HIPAA-compliant workflows and secure data handling',
  'Dedicated US healthcare focus',
  'Process transparency and regular reporting',
]

const whyChoose = [
  {
    title: 'HIPAA Compliant',
    description: 'Full compliance with healthcare regulations and secure data handling protocols.',
    icon: Shield,
  },
  {
    title: 'Rapid Response',
    description: 'Sub-24 hour response times ensure your practice stays ahead.',
    icon: CheckCircle,
  },
  {
    title: 'Proven Results',
    description: 'Data-driven approach delivering measurable outcomes and revenue optimization.',
    icon: Activity,
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Preview */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive healthcare operations support designed to optimize your practice's performance and patient outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="btn-primary inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* What We Do */}
      <SectionWrapper className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">What We Do</h2>
            <p className="section-subtitle text-center">
              Flux Med provides seamless healthcare operations support, enabling physicians to focus on patient care while we handle the complexities of population health management, billing, and administrative tasks.
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Core Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Flux Med */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Flux Med</h2>
            <p className="section-subtitle">
              We combine operational excellence with deep healthcare expertise to deliver results that matter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 bg-primary-100 rounded-2xl mb-6">
                    <Icon className="w-10 h-10 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Practice Operations?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Book a free consultation to discover how Flux Med can optimize your healthcare operations and drive better patient outcomes.
            </p>
            <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4 inline-flex items-center gap-2">
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
