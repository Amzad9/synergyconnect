'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  MapPin,
  Phone,
  Clock,
  Send,
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Thank you for your message! We will contact you soon.')
  }

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

      {/* Form + Image + Contact Info */}
      <section
        id="contact-form"
        className="relative pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 bg-linear-to-b from-gray-50 to-white overflow-hidden"
        aria-labelledby="contact-form-heading"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] bg-aqua/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] bg-tech-blue/15 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container mx-auto px-4 min-[480px]:px-5 sm:px-6 md:px-8 lg:px-10 max-w-7xl">
          {/* Form + Image row — image height equals form on lg+ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 xl:gap-20 items-start lg:items-stretch">
            <div className="order-1 min-h-0 w-full">
              <h2 id="contact-form-heading" className="sr-only">
                Send us a message
              </h2>
              <form
                onSubmit={handleSubmit}
                className="h-full min-h-0 bg-white rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-lg shadow-gray-200/50 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col"
                noValidate
              >
                <div className="space-y-4 sm:space-y-5 md:space-y-6 flex-1">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="w-full min-h-[44px] px-3 py-2.5 sm:px-4 rounded-xl border border-gray-300 bg-white text-gray-900 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-tech-blue transition-colors"
                      placeholder="Your Name"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="w-full min-h-[44px] px-3 py-2.5 sm:px-4 rounded-xl border border-gray-300 bg-white text-gray-900 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-tech-blue transition-colors"
                      placeholder="your@email.com"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      autoComplete="off"
                      className="w-full min-h-[44px] px-3 py-2.5 sm:px-4 rounded-xl border border-gray-300 bg-white text-gray-900 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-tech-blue transition-colors"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full min-h-[100px] sm:min-h-[120px] px-3 py-2.5 sm:px-4 rounded-xl border border-gray-300 bg-white text-gray-900 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-tech-blue transition-colors resize-y"
                      placeholder="Your Message"
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 md:mt-8 shrink-0">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 min-h-[48px] min-w-[44px] px-6 py-3 sm:px-8 sm:py-3 rounded-xl bg-linear-to-r from-tech-blue to-aqua text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-tech-blue focus:ring-offset-2"
                    aria-label="Send message"
                  >
                    <Send className="w-5 h-5 shrink-0" aria-hidden="true" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Image — same height as form on lg+ */}
            <div className="order-2 w-full min-h-[260px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-0 lg:h-full">
              <figure className="relative w-full h-full min-h-[260px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-0 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
                  alt="Team collaboration and customer support"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent pointer-events-none" aria-hidden="true" />
              </figure>
            </div>
          </div>

          {/* Get in touch — horizontal container */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
            <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-200/80 shadow-lg shadow-gray-200/50 p-5 sm:p-6 md:p-8 lg:p-10">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                Get in touch
              </h3>
              <address className="not-italic grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
                <div className="flex gap-3 sm:gap-4">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-tech-blue/10 flex items-center justify-center" aria-hidden="true">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-tech-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600 text-sm sm:text-base mt-0.5">
                      Turnersville, NJ 08012
                      <br />
                      United States of America
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-aqua/10 flex items-center justify-center" aria-hidden="true">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-aqua" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600 text-sm sm:text-base mt-0.5">
                      <a
                        href="tel:+16093505800"
                        className="text-tech-blue hover:underline focus:outline-none focus:ring-2 focus:ring-tech-blue focus:ring-offset-1 rounded"
                      >
                        609-350-5800
                      </a>
                      {' '}
                      – main
                      <br />
                      <a
                        href="tel:+18665679250"
                        className="text-tech-blue hover:underline focus:outline-none focus:ring-2 focus:ring-tech-blue focus:ring-offset-1 rounded"
                      >
                        866-567-9250
                      </a>
                      {' '}
                      – fax
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4 min-[500px]:col-span-2 lg:col-span-1">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald/10 flex items-center justify-center" aria-hidden="true">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-emerald" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600 text-sm sm:text-base mt-0.5">
                      Monday–Friday: 8am to 6pm
                      <br />
                      Saturday: 9am to 1pm
                    </p>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>
      </section>

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
