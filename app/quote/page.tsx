'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Send } from 'lucide-react'

const BEST_TIME_OPTIONS = [
  { value: '9am-12noon', label: '9am - 12noon' },
  { value: '12noon-3pm', label: '12 noon - 3pm' },
  { value: '3pm-6pm', label: '3pm - 6pm' },
] as const

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    bestTime: '' as string,
    hasVoIP: '' as 'yes' | 'no' | '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = [
      `First Name: ${formData.firstName}`,
      `Last Name: ${formData.lastName}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Best time to call: ${formData.bestTime || 'Not specified'}`,
      `Currently has VoIP/cloud system: ${formData.hasVoIP || 'Not specified'}`,
    ].join('\n')
    const mailto = `mailto:info@synergyconnect.org?subject=${encodeURIComponent('Get quote')}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <div role="document" aria-label="Get Quote">
      {/* Hero */}
      <header
        className="relative min-h-[35vh] sm:min-h-[40vh] md:min-h-[45vh] lg:min-h-[45vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900"
        aria-labelledby="quote-heading"
      >
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
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
        <div className="relative z-10 w-full container px-3 sm:px-3 lg:px-0 mx-auto pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 lg:pb-24 flex flex-col items-center justify-center text-center">
          <h1
            id="quote-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white px-2"
          >
            Get Quote
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2 sm:mt-3 max-w-2xl px-2 sm:px-0">
            Request a custom quote for cloud-hosted phone systems and VoIP.
          </p>
        </div>
      </header>

      {/* Form */}
      <section
        id="quote-form"
        className="relative pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 bg-linear-to-b from-gray-50 to-white overflow-hidden"
        aria-labelledby="quote-form-heading"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] bg-aqua/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] bg-tech-blue/15 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container mx-auto px-4 min-[480px]:px-5 sm:px-6 md:px-8 lg:px-10 max-w-2xl">
          <h2 id="quote-form-heading" className="sr-only">
            Request a quote
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-lg shadow-gray-200/50 p-5 sm:p-6 md:p-8 lg:p-10"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <div>
                <label htmlFor="quote-firstName" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  id="quote-firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                  className="w-full min-h-[44px] px-3 py-2.5 sm:px-4 rounded-xl border border-gray-300 bg-white text-gray-900 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-tech-blue transition-colors"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label htmlFor="quote-lastName" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Last Name
                </label>
                <input
                  type="text"
                  id="quote-lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                  className="w-full min-h-[44px] px-3 py-2.5 sm:px-4 rounded-xl border border-gray-300 bg-white text-gray-900 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-tech-blue transition-colors"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="mt-4 sm:mt-5 md:mt-6">
              <label htmlFor="quote-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                id="quote-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                className="w-full min-h-[44px] px-3 py-2.5 sm:px-4 rounded-xl border border-gray-300 bg-white text-gray-900 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-tech-blue transition-colors"
                placeholder="Phone Number"
              />
            </div>

            <div className="mt-4 sm:mt-5 md:mt-6">
              <label htmlFor="quote-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                id="quote-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="w-full min-h-[44px] px-3 py-2.5 sm:px-4 rounded-xl border border-gray-300 bg-white text-gray-900 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-tech-blue transition-colors"
                placeholder="Your Email"
                aria-required="true"
              />
            </div>

            <div className="mt-4 sm:mt-5 md:mt-6">
              <label htmlFor="quote-bestTime" className="block text-sm font-semibold text-gray-700 mb-1.5">
                What&apos;s the best time to call?
              </label>
              <select
                id="quote-bestTime"
                name="bestTime"
                value={formData.bestTime}
                onChange={handleChange}
                className="w-full min-h-[44px] px-3 py-2.5 sm:px-4 rounded-xl border border-gray-300 bg-white text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-tech-blue transition-colors"
                aria-describedby="quote-bestTime-desc"
              >
                <option value="">Select a time</option>
                {BEST_TIME_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <span id="quote-bestTime-desc" className="sr-only">
                Choose 9am–12noon, 12noon–3pm, or 3pm–6pm
              </span>
            </div>

            <fieldset className="mt-4 sm:mt-5 md:mt-6">
              <legend className="block text-sm font-semibold text-gray-700 mb-2">
                Do you currently own a cloud hosted or VoIP phone system? <span className="text-red-500" aria-hidden="true">*</span>
              </legend>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasVoIP"
                    value="yes"
                    checked={formData.hasVoIP === 'yes'}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-tech-blue border-gray-300 focus:ring-tech-blue"
                    aria-required="true"
                  />
                  <span className="text-gray-700">Yes</span>
                </label>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasVoIP"
                    value="no"
                    checked={formData.hasVoIP === 'no'}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-tech-blue border-gray-300 focus:ring-tech-blue"
                    aria-required="true"
                  />
                  <span className="text-gray-700">No</span>
                </label>
              </div>
            </fieldset>

            <div className="mt-6 sm:mt-8">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] min-w-[44px] px-6 py-3 sm:px-8 sm:py-3 rounded-xl bg-linear-to-r from-tech-blue to-aqua text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-tech-blue focus:ring-offset-2 w-full sm:w-auto"
                aria-label="Submit quote request"
              >
                <Send className="w-5 h-5 shrink-0" aria-hidden="true" />
                Get Quote
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
