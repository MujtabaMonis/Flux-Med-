import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white pt-20">
      <div className="container-custom text-center">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
