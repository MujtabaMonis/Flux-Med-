'use client'

import SectionWrapper from '@/components/SectionWrapper'
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
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
} from 'lucide-react'
import { motion } from 'framer-motion'

interface Service {
  id: string
  title: string
  icon: typeof Heart
  description: string
  benefits: string[]
  whoIsFor: string
  outcomes: string[]
}

const services: Service[] = [
  {
    id: 'awv',
    title: 'Annual Wellness Visits (AWV)',
    icon: Heart,
    description: 'Comprehensive Medicare wellness visit services to maximize reimbursements and improve patient care quality.',
    benefits: [
      'Medicare pre-screening and eligibility verification',
      'Comprehensive risk assessments and health evaluations',
      'Personalized care planning and goal setting',
      'Revenue optimization through proper coding and documentation',
      'Compliance with CMS guidelines and requirements',
    ],
    whoIsFor: 'Primary care physicians, family medicine practices, and internal medicine providers serving Medicare patients.',
    outcomes: [
      'Increased AWV completion rates',
      'Enhanced revenue from wellness visit reimbursements',
      'Improved patient engagement and preventive care',
      'Better documentation and coding accuracy',
    ],
  },
  {
    id: 'ccm',
    title: 'Chronic Care Management (CCM)',
    icon: Activity,
    description: 'Comprehensive care management for patients with multiple chronic conditions, ensuring coordinated, continuous care.',
    benefits: [
      'Personalized care plans tailored to patient needs',
      'Monthly follow-up calls and care coordination',
      'Medication management and reconciliation',
      'Care coordination across providers and specialties',
      'Increased reimbursements through proper CCM billing',
    ],
    whoIsFor: 'Physicians managing patients with two or more chronic conditions, especially in primary care and geriatric medicine.',
    outcomes: [
      'Improved patient outcomes and quality of life',
      'Reduced hospitalizations and emergency visits',
      'Increased practice revenue through CCM reimbursements',
      'Enhanced patient satisfaction and retention',
    ],
  },
  {
    id: 'population-health',
    title: 'Population Health Management / Value-Based Care',
    icon: Users,
    description: 'Proactive management of patient populations with data-driven insights to improve outcomes and reduce costs.',
    benefits: [
      'Proactive risk stratification and patient segmentation',
      'Cost reduction through preventive care initiatives',
      'Outcome improvement tracking and reporting',
      'Smooth transition from fee-for-service to value-based care',
      'Actionable analytics and performance dashboards',
    ],
    whoIsFor: 'Healthcare organizations, ACOs, medical groups, and practices participating in value-based care programs.',
    outcomes: [
      'Reduced total cost of care',
      'Improved quality metrics and star ratings',
      'Increased shared savings and performance bonuses',
      'Better population health outcomes',
    ],
  },
  {
    id: 'credentialing',
    title: 'Provider Credentialing',
    icon: FileCheck,
    description: 'Streamlined credentialing and payer enrollment services to get providers approved faster and maintain compliance.',
    benefits: [
      'Complete payer enrollment and re-enrollment support',
      'Compliance with credentialing standards and requirements',
      'Faster approval times through efficient processing',
      'Ongoing credentialing maintenance and renewal management',
      'Centralized credentialing database management',
    ],
    whoIsFor: 'New providers joining practices, expanding practices, and healthcare organizations managing multiple providers.',
    outcomes: [
      'Reduced time to credentialing completion',
      'Fewer delays in provider start dates',
      'Maintained compliance and good standing',
      'Streamlined credentialing operations',
    ],
  },
  {
    id: 'referrals',
    title: 'Referrals & Authorizations',
    icon: ClipboardList,
    description: 'Efficient management of referrals and insurance authorizations to reduce delays and improve patient access to care.',
    benefits: [
      'Complete insurance coordination and verification',
      'Pre-authorization request processing and tracking',
      'Referral management and coordination',
      'Reduced delays through proactive follow-up',
      'Faster patient care delivery',
    ],
    whoIsFor: 'Practices requiring frequent referrals, specialty practices, and organizations managing complex care coordination.',
    outcomes: [
      'Reduced authorization delays',
      'Improved patient access to specialty care',
      'Fewer denials and re-submissions',
      'Enhanced patient satisfaction',
    ],
  },
  {
    id: 'front-office',
    title: 'Front Office Support',
    icon: Calendar,
    description: 'Comprehensive front office support services to streamline operations and improve patient experience.',
    benefits: [
      'Patient scheduling and appointment management',
      'Automated appointment reminders (phone, SMS, email)',
      'Insurance verification and eligibility checks',
      'Patient registration and intake support',
      'Customer service and patient communication',
    ],
    whoIsFor: 'Practices looking to reduce front office burden, improve efficiency, and enhance patient communication.',
    outcomes: [
      'Reduced no-show rates',
      'Improved scheduling efficiency',
      'Better patient experience and satisfaction',
      'Freed-up staff time for clinical duties',
    ],
  },
  {
    id: 'billing',
    title: 'Medical Billing Services',
    icon: FileText,
    description: 'Expert medical billing services to maximize revenue, reduce denials, and accelerate reimbursements.',
    benefits: [
      'Clean claim submission and processing',
      'Denial reduction through proper coding and documentation',
      'Faster reimbursements through efficient billing cycles',
      'Comprehensive revenue cycle management',
      'Regular reporting and financial analytics',
    ],
    whoIsFor: 'Practices seeking to improve revenue cycle performance, reduce billing errors, and accelerate cash flow.',
    outcomes: [
      'Increased collection rates',
      'Reduced days in accounts receivable',
      'Fewer claim denials and rejections',
      'Improved cash flow and financial visibility',
    ],
  },
  {
    id: 'transcription',
    title: 'Medical Transcription',
    icon: Headphones,
    description: 'Accurate, timely medical transcription services to convert dictations into comprehensive documentation.',
    benefits: [
      'Accurate dictation conversion with medical terminology expertise',
      'Timely documentation turnaround',
      'Quality assurance and editing services',
      'HIPAA-compliant transcription workflows',
      'Integration with EMR systems',
    ],
    whoIsFor: 'Physicians who prefer dictation, practices needing timely documentation, and organizations requiring transcription support.',
    outcomes: [
      'Faster chart completion',
      'Improved documentation quality',
      'Reduced physician documentation time',
      'Better compliance with documentation requirements',
    ],
  },
  {
    id: 'documentation',
    title: 'Documentation Handling',
    icon: FolderOpen,
    description: 'Comprehensive documentation management services to organize records, ensure compliance, and reduce administrative burden.',
    benefits: [
      'Record organization and management',
      'Compliance with documentation standards',
      'Reduced administrative burden on clinical staff',
      'Document scanning and digitization',
      'Secure document storage and retrieval',
    ],
    whoIsFor: 'Practices managing high volumes of documentation, transitioning to electronic records, or seeking compliance support.',
    outcomes: [
      'Improved record organization and accessibility',
      'Enhanced compliance and audit readiness',
      'Reduced administrative workload',
      'Better documentation workflows',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Healthcare Operations Services
            </h1>
            <p className="text-xl text-slate-600">
              Expert support services designed to optimize your practice's performance, improve patient outcomes, and maximize revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <div className="bg-white">
        {services.map((service, index) => {
          const Icon = service.icon
          const isEven = index % 2 === 0
          
          return (
            <SectionWrapper
              key={service.id}
              className={`section-padding ${isEven ? 'bg-white' : 'bg-slate-50'}`}
            >
              <div className="container-custom">
                <div id={service.id} className="scroll-mt-24">
                  <div className="max-w-6xl mx-auto">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                      {/* Content */}
                      <div className={!isEven ? 'lg:col-start-2' : ''}>
                        <motion.div
                          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="inline-flex p-4 bg-primary-100 rounded-xl mb-6">
                            <Icon className="w-8 h-8 text-primary-600" />
                          </div>
                          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            {service.title}
                          </h2>
                          <p className="text-lg text-slate-600 mb-8">
                            {service.description}
                          </p>

                          {/* Benefits */}
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                              <CheckCircle className="w-6 h-6 text-primary-600" />
                              Key Benefits
                            </h3>
                            <ul className="space-y-3">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-slate-700">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Who This Is For */}
                          <div className="mb-8 bg-primary-50 rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                              <Target className="w-6 h-6 text-primary-600" />
                              Who This Is For
                            </h3>
                            <p className="text-slate-700">{service.whoIsFor}</p>
                          </div>

                          {/* Outcomes */}
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                              <TrendingUp className="w-6 h-6 text-primary-600" />
                              Expected Outcomes
                            </h3>
                            <ul className="space-y-3">
                              {service.outcomes.map((outcome, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-slate-700">{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* CTA */}
                          <Link
                            href="/contact"
                            className="btn-primary inline-flex items-center gap-2"
                          >
                            Learn More & Get Started
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </motion.div>
                      </div>

                      {/* Visual/Icon Area */}
                      <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-12 flex items-center justify-center min-h-[400px]"
                        >
                          <Icon className="w-32 h-32 text-primary-600" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          )
        })}
      </div>

      {/* CTA Section */}
      <SectionWrapper className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your Practice Operations?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how our services can help your practice achieve better outcomes and increased revenue.
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
