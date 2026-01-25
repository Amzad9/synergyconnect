'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Home, ArrowLeft, Phone, FileQuestion } from 'lucide-react'

export default function NotFound() {
  const router = useRouter()
  return (
    <div role="document" aria-label="Page not found – Synergy Connect">
      {/* Hero */}
      <header
        className="relative min-h-[35vh] sm:min-h-[40vh] md:min-h-[45vh] lg:min-h-[45vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900"
        aria-labelledby="not-found-heading"
      >
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2074&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/80 via-blue-900/70 to-slate-900/80" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 lg:pb-24 flex flex-col items-center justify-center text-center">
          <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white/20 tracking-tighter select-none" aria-hidden="true">
            404
          </p>
          <h1
            id="not-found-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white px-2 -mt-8 sm:-mt-10 md:-mt-12"
          >
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-3 sm:mt-4 max-w-2xl px-2 sm:px-0">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
        </div>
      </header>

      {/* Actions */}
      <section
        className="relative py-16 sm:py-20 md:py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden"
        aria-label="Quick links"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] bg-aqua/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] bg-tech-blue/15 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Where would you like to go?
            </h2>
            <p className="text-base text-gray-600">
              Choose a link below or head back home.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 sm:px-8 py-4 rounded-xl bg-linear-to-r from-tech-blue to-aqua text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all focus:outline-none focus:ring-2 focus:ring-tech-blue focus:ring-offset-2"
            >
              <Home className="w-5 h-5 shrink-0" aria-hidden="true" />
              Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 sm:px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:border-tech-blue hover:text-tech-blue hover:bg-tech-blue/5 transition-all focus:outline-none focus:ring-2 focus:ring-tech-blue focus:ring-offset-2"
            >
              <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
              Contact Us
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 sm:px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:border-aqua hover:text-aqua hover:bg-aqua/5 transition-all focus:outline-none focus:ring-2 focus:ring-aqua focus:ring-offset-2"
            >
              <FileQuestion className="w-5 h-5 shrink-0" aria-hidden="true" />
              Get Quote
            </Link>
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 sm:px-8 py-4 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-600 font-semibold hover:border-gray-300 hover:bg-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              <ArrowLeft className="w-5 h-5 shrink-0" aria-hidden="true" />
              Go Back
            </button>
          </div>

          <p className="mt-10 sm:mt-12 text-sm text-gray-500 text-center max-w-md mx-auto">
            If you believe this is an error, please{' '}
            <Link href="/contact" className="text-tech-blue font-medium hover:underline">
              contact our support team
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
