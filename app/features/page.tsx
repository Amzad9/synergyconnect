import Image from 'next/image'
import Link from 'next/link'
import { Check, User, Settings, Users, ArrowRight } from 'lucide-react'
import {
  userFeatures,
  systemFeatures,
  groupFeatures,
} from './features-data'

const sections = [
  {
    id: 'user-features',
    title: 'User Features',
    description: 'Call control, forwarding, conferencing, and more—everything users need day to day.',
    features: userFeatures,
    icon: User,
    accent: 'tech-blue' as const,
    gradient: 'from-tech-blue/10 to-tech-blue/5',
    bg: 'bg-white',
  },
  {
    id: 'system-features',
    title: 'System Features',
    description: 'APIs, security, provisioning, and compliance. Enterprise-grade infrastructure.',
    features: systemFeatures,
    icon: Settings,
    accent: 'aqua' as const,
    gradient: 'from-aqua/10 to-aqua/5',
    bg: 'bg-gray-50',
  },
  {
    id: 'group-features',
    title: 'Group Features',
    description: 'ACD, auto attendants, hunt groups, and Office Manager Portal. Built for teams.',
    features: groupFeatures,
    icon: Users,
    accent: 'emerald' as const,
    gradient: 'from-emerald/10 to-emerald/5',
    bg: 'bg-white',
  },
]

function FeaturePill({
  name,
  accent,
}: {
  name: string
  accent: 'tech-blue' | 'aqua' | 'emerald'
}) {
  return (
    <li className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-gray-200/80 bg-white shadow-sm hover:shadow-md hover:border-gray-300/80 transition-all min-h-[52px]">
      <Check
        className={`w-5 h-5 shrink-0 ${accent === 'tech-blue' ? 'text-tech-blue' : accent === 'aqua' ? 'text-aqua' : 'text-emerald'}`}
        aria-hidden="true"
      />
      <span className="text-sm sm:text-base text-gray-700 font-medium leading-snug">{name}</span>
    </li>
  )
}

export default function FeaturesPage() {
  return (
    <div role="document" aria-label="Features – Synergy Connect">
      {/* Hero */}
      <header
        className="relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900"
        aria-labelledby="features-heading"
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
        <div className="relative z-10 w-full container px-3 sm:px-3 lg:px-0 mx-auto pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 lg:pb-24 flex flex-col items-center justify-center text-center">
          <h1
            id="features-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white px-2"
          >
            Features
          </h1>
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col items-center gap-4 sm:gap-5 max-w-3xl">
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center">
              Cloud PBX boasts many business-friendly capabilities that would incur a premium charge from a traditional telephone provider, assuming that the provider would offer them in the first place.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center">
              Because we don&apos;t believe in confusing bundles or complicated licensing, you will be able to take advantage of all our features for one, low price.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-white text-center">
              When it comes to features, our Web Centrex shines. Your sales staff will be delighted because the system practically sells itself.
            </p>
          </div>
        </div>
      </header>

      {/* Jump-to nav – improves long-page UX */}
      <nav
        aria-label="Jump to feature category"
        className="sticky top-20 z-40 py-3 sm:py-4 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm"
      >
        <div className="container mx-auto px-0 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-0 sm:gap-4">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-0 md:gap-2 px-2 md:px-4 py-2.5 rounded-xl text-sm md:text-xl font-semibold text-gray-600 hover:text-tech-blue hover:bg-tech-blue/10 transition-colors focus:outline-none focus:ring-2 focus:ring-tech-blue focus:ring-offset-2 min-h-[44px]"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* User, System, Group features – alternating backgrounds */}
      {sections.map((section) => {
        const Icon = section.icon
        return (
          <section
            key={section.id}
            id={section.id}
            className={`relative py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden ${section.bg}`}
            aria-labelledby={`${section.id}-heading`}
          >
            <div
              className={`absolute inset-0 bg-linear-to-b ${section.gradient} opacity-60`}
              aria-hidden="true"
            />
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute top-0 right-0 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] bg-white/60 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] bg-white/60 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
            </div>
            <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto max-w-7xl">
              <header className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
                <div
                  className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${
                    section.accent === 'tech-blue'
                      ? 'bg-tech-blue/10 text-tech-blue'
                      : section.accent === 'aqua'
                        ? 'bg-aqua/10 text-aqua'
                        : 'bg-emerald/10 text-emerald'
                  }`}
                  aria-hidden="true"
                >
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <div>
                  <h2
                    id={`${section.id}-heading`}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1"
                  >
                    {section.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
                    {section.description}
                  </p>
                </div>
              </header>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 list-none p-0 m-0">
                {section.features.map((name) => (
                  <FeaturePill
                    key={name}
                    name={name}
                    accent={section.accent}
                  />
                ))}
              </ul>
            </div>
          </section>
        )
      })}

      {/* CTA – full-width gradient band */}
      <section
        className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-linear-to-r from-tech-blue via-aqua to-emerald"
        aria-label="Get started"
      >
        <div className="absolute inset-0 bg-slate-900/20" aria-hidden="true" />
        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to put these features to work?
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Get a custom quote or reach out with questions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 min-h-[52px] px-8 py-4 rounded-xl bg-white text-tech-blue font-semibold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Get Quote
              <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center min-h-[52px] px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
