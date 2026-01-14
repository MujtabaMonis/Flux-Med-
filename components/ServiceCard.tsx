'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  index: number
}

export default function ServiceCard({ title, description, icon: Icon, href, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href} className="block h-full">
        <div className="card h-full group hover:border-primary-200 border border-transparent">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-600 transition-colors">
              <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-600">{description}</p>
        </div>
      </Link>
    </motion.div>
  )
}
