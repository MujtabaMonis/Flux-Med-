'use client'

import SectionWrapper from '@/components/SectionWrapper'
import { Shield, Lock, Eye, FileCheck } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PrivacyPage() {
  const sections = [
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            Flux Med is fully committed to compliance with the Health Insurance Portability and Accountability Act (HIPAA) and all applicable healthcare privacy regulations. We understand the critical importance of protecting patient health information (PHI) and have implemented comprehensive safeguards to ensure compliance.
          </p>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Our HIPAA Compliance Measures:</h4>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Business Associate Agreements (BAAs) with all clients and partners</li>
              <li>Secure, encrypted data transmission and storage</li>
              <li>Access controls and authentication measures</li>
              <li>Regular security audits and risk assessments</li>
              <li>Comprehensive staff training on HIPAA requirements</li>
              <li>Incident response and breach notification procedures</li>
              <li>Minimum necessary access policies</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            We employ industry-standard security measures to protect all information in our care, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            <li>End-to-end encryption for data in transit and at rest</li>
            <li>Secure cloud infrastructure with regular backups</li>
            <li>Multi-factor authentication for all systems</li>
            <li>Regular security monitoring and threat detection</li>
            <li>Physical security controls for our facilities</li>
            <li>Regular penetration testing and vulnerability assessments</li>
          </ul>
        </div>
      ),
    },
    {
      icon: Eye,
      title: 'Information We Collect',
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            In the course of providing healthcare operations services, we may collect and process the following types of information:
          </p>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Patient Health Information (PHI):</h4>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Medical records and clinical documentation</li>
              <li>Patient demographics and contact information</li>
              <li>Insurance information and billing data</li>
              <li>Care plans and treatment history</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Practice Information:</h4>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Practice details and provider information</li>
              <li>Business contact information</li>
              <li>Service usage and performance data</li>
            </ul>
          </div>
          <p className="text-slate-700">
            We only collect information necessary to provide our services and comply with legal obligations.
          </p>
        </div>
      ),
    },
    {
      icon: FileCheck,
      title: 'How We Use Information',
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            We use collected information solely for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            <li>Providing healthcare operations and administrative services</li>
            <li>Care coordination and population health management</li>
            <li>Medical billing and claims processing</li>
            <li>Quality improvement and reporting</li>
            <li>Compliance with legal and regulatory requirements</li>
            <li>Communication regarding our services</li>
          </ul>
          <p className="text-slate-700">
            We do not sell, rent, or share PHI with third parties except as necessary to provide our services or as required by law.
          </p>
        </div>
      ),
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Privacy Policy & HIPAA Compliance
            </h1>
            <p className="text-xl text-slate-600">
              Your privacy and the security of patient information are paramount to Flux Med. Learn about our commitment to HIPAA compliance and data protection.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={section.title}
                  id={index === 0 ? 'hipaa' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-8 md:p-10"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary-100 rounded-xl">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{section.title}</h2>
                  </div>
                  <div>{section.content}</div>
                </motion.div>
              )
            })}

            {/* Additional Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50 rounded-2xl p-8 md:p-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Data Retention and Disposal</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  We retain PHI only as long as necessary to provide our services and comply with legal and regulatory requirements. When information is no longer needed, we securely dispose of it in accordance with HIPAA requirements, including secure deletion and destruction of physical records.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 md:p-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Your Rights</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  Under HIPAA, patients have certain rights regarding their health information. As a Business Associate, we support our clients in fulfilling these rights, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Right to access PHI</li>
                  <li>Right to request amendments</li>
                  <li>Right to request restrictions on use and disclosure</li>
                  <li>Right to receive an accounting of disclosures</li>
                  <li>Right to file complaints</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-50 rounded-2xl p-8 md:p-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Business Associate Agreements</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  Flux Med enters into Business Associate Agreements (BAAs) with all covered entity clients, as required by HIPAA. These agreements outline our responsibilities for protecting PHI and ensure compliance with all applicable regulations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-50 rounded-2xl p-8 md:p-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Updates to This Policy</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify clients of any material changes and post the updated policy on our website with the effective date.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-primary-50 border-2 border-primary-200 rounded-2xl p-8 md:p-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Contact Us</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  If you have questions about this Privacy Policy, our HIPAA compliance practices, or wish to exercise your rights, please contact us:
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-slate-900">Flux Med Privacy Officer</p>
                  <p>Email: privacy@fluxmed.com</p>
                  <p>Phone: +1 (555) 000-0000</p>
                </div>
                <p className="text-sm text-slate-600 mt-4">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
