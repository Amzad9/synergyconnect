import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Layers,
  Smartphone,
  Puzzle,
  Award,
  Tag,
} from 'lucide-react'

const advantages = [
  {
    id: 'unlimited-scale',
    title: 'Unlimited Scale & Flexibility',
    icon: Layers,
    accent: 'tech-blue' as const,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    alt: 'Modern office and communications',
    body: 'Get unlimited auto attendants, extensions, and mailboxes—all configured to meet your exact requirements. Utilize an unlimited combination of IP desk phones and softphones, and seamlessly integrate your call flow with wireless technologies.',
  },
  {
    id: 'mobility',
    title: 'Mobility',
    icon: Smartphone,
    accent: 'aqua' as const,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    alt: 'Work from anywhere',
    body: 'Mobility is paramount in today\'s business world. Keep your company connected with simultaneous ring, remote call control, and more—conduct business anywhere through any device.',
  },
  {
    id: 'plugins-apps',
    title: 'Plugins & Applications',
    icon: Puzzle,
    accent: 'emerald' as const,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    alt: 'Business tools and analytics',
    body: 'Plugins and apps including click to dial, screen pops, call logging, and presence. The Operator console delivers live visibility for call control, call parking, visual voicemails, and more.',
  },
  {
    id: 'customer-tested',
    title: 'Customer Tested & Approved',
    icon: Award,
    accent: 'tech-blue' as const,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    alt: 'Team collaboration',
    body: 'Our products are customer tested and approved. We\'ve enabled countless businesses to improve communication channels and transform into competitive powerhouses, with full front and back-office features.',
  },
  {
    id: 'one-low-price',
    title: 'One Low Price',
    icon: Tag,
    accent: 'aqua' as const,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    alt: 'Simple, transparent pricing',
    body: 'Cloud PBX delivers business-friendly capabilities that would cost a premium elsewhere. No confusing bundles or complicated licensing—all our features for one, low price.',
  },
]

export default function AdvantagesPage() {
  return (
    <div role="document" aria-label="Advantages – Synergy Connect">
      {/* Hero */}
      <header
        className="relative min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] lg:min-h-[45vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900"
        aria-labelledby="advantages-heading"
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
            id="advantages-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white px-2"
          >
            Advantages
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-4 sm:mt-6 max-w-3xl px-2 sm:px-0 leading-relaxed">
            Take advantage of Unified Communications (UC) and the seamless integration of voice, presence, chat, and data with other applications to improve your communication process and business productivity.
          </p>
        </div>
      </header>

      {/* Advantages grid */}
      <section
        className="relative section-padding bg-linear-to-b from-gray-200 via-gray-50 to-gray-100 overflow-hidden"
        aria-labelledby="advantages-grid-heading"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-tech-blue/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute top-0 right-0 w-[225px] h-[225px] sm:w-[350px] sm:h-[350px] bg-aqua/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-emerald/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-[225px] h-[225px] sm:w-[350px] sm:h-[350px] bg-aqua/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <span className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 bg-linear-to-r from-tech-blue/10 to-aqua/10 text-gray-700 font-semibold rounded-full border border-tech-blue/20 mb-4 sm:mb-6 text-sm sm:text-base">
              Unified Communications
            </span>
            <h2 id="advantages-grid-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Why These Advantages Matter
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-2">
              Five ways we help you communicate better, scale freely, and run your business with confidence.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8" role="list">
            {advantages.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.id}
                  id={item.id}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-lg shadow-gray-200/50 overflow-hidden hover:shadow-xl hover:shadow-gray-300/50 hover:border-gray-300/80 transition-all duration-300 flex flex-col h-full"
                  role="listitem"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" aria-hidden="true" />
                    <div
                      className={`absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center bg-white/95 backdrop-blur-sm shadow-md ${
                        item.accent === 'tech-blue' ? 'text-tech-blue' : item.accent === 'aqua' ? 'text-aqua' : 'text-emerald'
                      }`}
                      aria-hidden="true"
                    >
                      <Icon className="w-6 h-6 shrink-0" />
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1">
                      {item.body}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* One Low Price – light highlight */}
      <section
        id="one-low-price"
        className="relative section-padding overflow-hidden bg-gray-50"
        aria-labelledby="one-low-price-heading"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] bg-tech-blue/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] bg-aqua/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="one-low-price-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            One Low Price
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-5 sm:mb-6">
            Cloud PBX boasts many business-friendly capabilities that would incur a premium charge from a traditional telephone provider, assuming that the provider would offer them in the first place.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-8 sm:mb-10">
            Because we don&apos;t believe in confusing bundles or complicated licensing, you will be able to take advantage of all our features for one, low price.
          </p>
      
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-linear-to-r from-tech-blue via-aqua to-emerald"
        aria-label="Get started"
      >
        <div className="absolute inset-0 bg-slate-900/20" aria-hidden="true" />
        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to unlock these advantages?
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
