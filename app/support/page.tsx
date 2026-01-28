'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Search,
  CreditCard,
  BookOpen,
  Hash,
  LayoutDashboard,
  Settings,
  MessageSquare,
  Voicemail,
  Phone,
  ArrowRight,
  Activity,
} from 'lucide-react'

const helpTopics = [
  {
    id: 'billing',
    title: 'Billing',
    description: 'Invoices, payments, and billing for your account.',
    icon: CreditCard,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    alt: 'Billing and invoices',
    href: '/support/billing',
  },
  {
    id: 'glossary',
    title: 'Glossary of Terms',
    description: 'Explanation of terms used in VoIP.',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    alt: 'Documentation',
    href: '/support/glossary',
  },
  {
    id: 'phone-numbers',
    title: 'Phone Numbers',
    description: 'Add, remove, and use DIDs on your Press8 account.',
    icon: Hash,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    alt: 'Phone numbers',
    href: '/support/phone-numbers',
  },
  {
    id: 'control-panel',
    title: 'Press8 Control Panel',
    description: 'Use the Control Panel and its features.',
    icon: LayoutDashboard,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    alt: 'Control panel',
    href: '/support/control-panel',
  },
  {
    id: 'setting-up',
    title: 'Setting Up Your Phone System',
    description: 'Get your Press8 VoIP system up and running.',
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    alt: 'Setup',
    href: '/support/setting-up',
  },
  {
    id: 'sms',
    title: 'SMS Texting',
    description: 'Business texting and SMS features.',
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=800&auto=format&fit=crop',
    alt: 'SMS and messaging',
    href: '/support/sms',
  },
  {
    id: 'voicemail',
    title: 'Voicemail',
    description: 'Leave and manage voicemail messages.',
    icon: Voicemail,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    alt: 'Voicemail',
    href: '/support/voicemail',
  },
  {
    id: 'voip-phones',
    title: 'VoIP Phones',
    description: 'Use VoIP phones with your Press account.',
    icon: Phone,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    alt: 'VoIP phones',
    href: '/support/voip-phones',
  },
]

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div role="document" aria-label="Support – Synergy Connect">
      {/* Hero – search-first */}
      <header
        className="relative min-h-[42vh] sm:min-h-[46vh] md:min-h-[50vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900"
        aria-labelledby="support-heading"
      >
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-transparent to-slate-900/80" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-500/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full container px-3 sm:px-3 lg:px-0 mx-auto pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 flex flex-col items-center">
          <h1 id="support-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-1">
            How can we help?
          </h1>
          <p className="text-gray-400 text-sm sm:text-base text-center mb-6 sm:mb-8">
            Search the knowledge base
          </p>

          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 shrink-0 pointer-events-none" aria-hidden="true" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for billing, setup, voicemail..."
              className="w-full pl-14 pr-5 py-4 sm:py-5 rounded-2xl bg-white text-gray-900 placeholder-gray-400 shadow-xl shadow-black/20 border-0 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 text-base"
              aria-label="Search the knowledge base"
            />
          </div>
        </div>
      </header>

      {/* Help Topics – image cards (Phones/Advantages style) */}
      <section
        id="help-topics"
        className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-linear-to-b from-gray-100 via-white to-gray-50 overflow-hidden"
        aria-labelledby="help-topics-heading"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-tech-blue/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-aqua/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto max-w-6xl">
          <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <span className="inline-block px-4 py-2 bg-tech-blue/10 text-tech-blue font-semibold rounded-full border border-tech-blue/20 text-sm mb-4">
              Knowledge Base
            </span>
            <h2 id="help-topics-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Help Topics
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Guides for billing, setup, voicemail, and more.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {helpTopics.map((topic) => {
              const Icon = topic.icon
              return (
                <Link
                  key={topic.id}
                  href={topic.href}
                  className="group group/card flex flex-col h-full bg-white rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-lg shadow-gray-200/40 overflow-hidden hover:shadow-xl hover:shadow-gray-300/50 hover:border-gray-300 transition-all duration-300"
                >
                  <div className="relative aspect-4/3 overflow-hidden shrink-0">
                    <Image
                      src={topic.image}
                      alt={topic.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover/card:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" aria-hidden="true" />
                    <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-tech-blue shadow-md">
                      <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight group-hover/card:text-tech-blue transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1 line-clamp-2">
                      {topic.description}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-tech-blue">
                      Learn more
                      <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover/card:translate-x-1" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Need Support? – gradient CTA (matches Features/Advantages) */}
      <section
        className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-linear-to-r from-tech-blue via-aqua to-emerald"
        aria-labelledby="need-support-heading"
      >
        <div className="absolute inset-0 bg-slate-900/10" aria-hidden="true" />
        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto text-center">
          <h2 id="need-support-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Need Support?
          </h2>
          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Can&apos;t find the answer? We&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-8 py-4 rounded-xl bg-white text-tech-blue font-semibold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Contact Support
              <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
            </Link>
            <Link
              href="/support/status"
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <Activity className="w-5 h-5 shrink-0" aria-hidden="true" />
              System Status
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
