'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Send } from 'lucide-react'

const SUPPORT_EMAIL = 'support@synergyconnect.org'
const SUPPORT_SUBJECT = 'Support'

function buildMailto(to: string, subject: string, body: string): string {
  return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function SupportPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = [
      message,
    ].join('\n')
    window.location.href = buildMailto(SUPPORT_EMAIL, SUPPORT_SUBJECT, body)
  }

  return (
    <div role="document" aria-label="Support – Synergy Connect">
      <header
        className="relative min-h-[35vh] sm:min-h-[40vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900"
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
        <div className="relative z-10 w-full container px-3 sm:px-3 lg:px-0 mx-auto pt-24 sm:pt-28 md:pt-32 pb-16 flex flex-col items-center">
          <h1 id="support-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center">
            Support
          </h1>
          <p className="text-gray-400 text-sm sm:text-base text-center mt-2">
            Send us a message and we&apos;ll get back to you.
          </p>
        </div>
      </header>

      <section
        className="relative py-16 sm:py-20 bg-linear-to-b from-gray-100 to-white"
        aria-labelledby="support-form-heading"
      >
        <div className="container mx-auto px-4 max-w-xl">
          <h2 id="support-form-heading" className="sr-only">
            Support contact form
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-gray-200/80 shadow-lg p-6 sm:p-8"
            noValidate
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="support-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="support-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full min-h-[44px] px-3 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-tech-blue"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="support-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="support-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full min-h-[44px] px-3 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-tech-blue"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="support-message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="support-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-tech-blue resize-none"
                  placeholder="How can we help?"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Submitting will open your email app to send to {SUPPORT_EMAIL}.
            </p>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-linear-to-r from-tech-blue to-aqua text-white font-semibold shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-tech-blue focus:ring-offset-2 w-full sm:w-auto"
              aria-label="Send support message"
            >
              <Send className="w-5 h-5 shrink-0" aria-hidden="true" />
              Send to Support
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
