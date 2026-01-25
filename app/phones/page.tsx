import Image from 'next/image'
import Link from 'next/link'
import { Phone, Monitor, Smartphone, ArrowRight } from 'lucide-react'
import PricingStructure from '../components/PricingStructure'

const phoneOptions = [
  {
    icon: Phone,
    title: 'Desk Phones',
    description: 'Traditional IP desk phones for your office. Crystal-clear audio, programmable keys, and full cloud PBX features.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    alt: 'IP desk phone for business',
    href: '/quote',
    accent: 'tech-blue',
  },
  {
    icon: Monitor,
    title: 'Softphones',
    description: 'Use your PC or Mac as a phone. Make and receive calls from your computer with our desktop app—no extra hardware.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    alt: 'Softphone on laptop',
    href: '/quote',
    accent: 'aqua',
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Take your business number everywhere. Call from your smartphone with the same features as your desk phone.',
    image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=800&auto=format&fit=crop',
    alt: 'Mobile phone and cloud communications',
    href: '/quote',
    accent: 'emerald',
  },
]

export default function PhonesPage() {
  return (
    <div role="document" aria-label="Phones – Synergy Connect">
      {/* Hero */}
      <header
        className="relative min-h-[35vh] sm:min-h-[40vh] md:min-h-[45vh] lg:min-h-[45vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900"
        aria-labelledby="phones-heading"
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
          <h1
            id="phones-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white px-2"
          >
            Phones
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2 sm:mt-3 max-w-2xl px-2 sm:px-0">
            Desk phones, softphones, and mobile—one number, one system, wherever you work.
          </p>
        </div>
      </header>

      {/* Phone options – what we offer first (better UX flow) */}
      <section
        id="phone-options"
        className="relative pt-14 sm:pt-16 md:pt-20 lg:pt-24 pb-14 sm:pb-16 md:pb-20 lg:pb-24 bg-linear-to-b from-gray-50 to-white overflow-hidden"
        aria-labelledby="phone-options-heading"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] bg-aqua/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] bg-tech-blue/15 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-20">
            <span className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 bg-linear-to-r from-tech-blue/10 to-aqua/10 text-gray-700 font-semibold rounded-full border border-tech-blue/20 mb-4 sm:mb-6 text-sm sm:text-base">
              How You Connect
            </span>
            <h2 id="phone-options-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Desk Phones, Softphones & Mobile
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2 max-w-2xl mx-auto">
              Use the device you prefer. All options include the same cloud PBX features and support.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {phoneOptions.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-lg shadow-gray-200/50 overflow-hidden hover:shadow-xl hover:border-gray-300/80 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 to-transparent" aria-hidden="true" />
                    <div
                      className={`absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center bg-white/90 backdrop-blur-sm ${
                        item.accent === 'tech-blue' ? 'text-tech-blue' : item.accent === 'aqua' ? 'text-aqua' : 'text-emerald'
                      }`}
                      aria-hidden="true"
                    >
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1 mb-5 sm:mb-6">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-2 min-h-[44px] font-semibold text-sm sm:text-base transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ${
                        item.accent === 'tech-blue'
                          ? 'text-tech-blue hover:gap-3 focus:ring-tech-blue'
                          : item.accent === 'aqua'
                            ? 'text-aqua hover:gap-3 focus:ring-aqua'
                            : 'text-emerald hover:gap-3 focus:ring-emerald'
                      }`}
                    >
                      Get a quote
                      <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing – after options for logical flow */}
      <PricingStructure />
    </div>
  )
}
