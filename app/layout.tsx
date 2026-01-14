import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flux Med | Healthcare Operations Partner',
  description: 'Trusted healthcare operations partner specializing in patient population management, risk stratification, and value-based care enablement. HIPAA-compliant services for US physicians.',
  keywords: 'healthcare operations, population health, value-based care, HIPAA compliant, medical billing, care management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
