'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  MapPin,
  Phone,
  Clock,
  Send,
} from 'lucide-react'
import ContactSection from '../components/ContactSection'
export default function ContactPage() {
  return (
    <div role="document" aria-label="Contact Synergy Connect">
      {/* Hero */}
      <header
        className="relative min-h-[35vh] sm:min-h-[40vh] md:min-h-[45vh] lg:min-h-[45vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900"
        aria-labelledby="contact-heading"
      >
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
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
          <h1
            id="contact-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white px-2"
          >
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2 sm:mt-3 max-w-2xl px-2 sm:px-0">
            Get in touch—we’re here to help with your cloud communications.
          </p>
        </div>
      </header>
      <ContactSection />
    
      {/* Map */}
      <section
        id="map"
        className="relative bg-gray-100"
        aria-labelledby="map-heading"
      >
        <h2 id="map-heading" className="sr-only">
          Our location – Turnersville, NJ 08012
        </h2>
        <div className="relative w-full aspect-4/3 sm:aspect-16/10 md:aspect-21/9 min-h-[220px] min-[400px]:min-h-[260px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px]">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-75.15%2C39.70%2C-74.95%2C39.80&layer=mapnik&marker=39.7379%2C-75.0596"
            title="Synergy Connect location – Turnersville, NJ 08012"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
          />
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:right-auto md:left-6 md:max-w-[18rem] lg:max-w-xs bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 border border-gray-200/80">
            <p className="font-semibold text-gray-900 text-sm sm:text-base">Synergy Connect</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              Turnersville, NJ 08012
              <br />
              United States of America
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Turnersville+NJ+08012"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-1.5 sm:mt-2 text-xs sm:text-sm font-medium text-tech-blue hover:underline focus:outline-none focus:ring-2 focus:ring-tech-blue focus:ring-offset-1 rounded"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
