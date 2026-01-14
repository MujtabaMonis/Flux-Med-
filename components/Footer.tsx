import Link from 'next/link'
import { Shield, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Flux Med</h3>
            <p className="mb-4">
              Trusted healthcare operations partner specializing in patient population management, risk stratification, and value-based care enablement.
            </p>
            <div className="flex items-center gap-2 text-primary-400">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">HIPAA Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#awv" className="hover:text-primary-400 transition-colors">
                  Annual Wellness Visits
                </Link>
              </li>
              <li>
                <Link href="/services#ccm" className="hover:text-primary-400 transition-colors">
                  Chronic Care Management
                </Link>
              </li>
              <li>
                <Link href="/services#population-health" className="hover:text-primary-400 transition-colors">
                  Population Health
                </Link>
              </li>
              <li>
                <Link href="/services#billing" className="hover:text-primary-400 transition-colors">
                  Medical Billing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@fluxmed.com" className="hover:text-primary-400 transition-colors">
                  info@fluxmed.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+1-555-000-0000" className="hover:text-primary-400 transition-colors">
                  +1 (555) 000-0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              <p>&copy; {currentYear} Flux Med. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/privacy#hipaa" className="hover:text-primary-400 transition-colors">
                HIPAA Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
