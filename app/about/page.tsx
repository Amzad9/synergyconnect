import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  DollarSign,
  TrendingUp,
  Shield,
  Award,
} from 'lucide-react'

export default function AboutPage() {
  const features = [
    {
      title: 'More Than a Typical Phone System',
      description: 'Enterprise-grade Unified Communications: great call quality, industry-leading reliability, and an easy-to-manage system at a low monthly cost.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
      alt: 'Modern phone and communications',
    },
    {
      title: 'One Low Price You Can Understand',
      description: 'All features included for one low price—no confusing bundles or extra fees. Support included at no additional cost.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
      alt: 'Simple transparent pricing',
    },
    {
      title: 'Communicate Anytime, Anywhere',
      description: 'Use a desk phone, softphone, or mobile. One number, one voicemail, full features on every device.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
      alt: 'Work from anywhere',
    },
    {
      title: 'Up and Running in Minutes',
      description: 'Quick setup. Stay connected during outages—Auto Attendant keeps managing calls; take them on your mobile.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
      alt: 'Quick setup and deployment',
    },
    {
      title: 'Personal Flexibility',
      description: 'Feature-rich hosted services that scale with you. Call center, queuing, find me follow me, and more.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
      alt: 'Flexible workspace',
    },
    {
      title: 'Business Continuity',
      description: 'Keep calls flowing during disruptions. Auto Attendant manages calls; mobility lets you receive them on your phone.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
      alt: 'Business continuity and reliability',
    },
  ]

  return (
    <>
      {/* About Hero - matches home theme */}
      <section
        className="relative min-h-[45vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900"
        aria-label="About Us - Why Choose Cloud Hosted Phone System"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900" aria-hidden="true" />

        {/* Background image - same theme as home */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt=""
            fill
            className="object-cover opacity-[0.60] object-[center_30%]"
            priority
            sizes="100vw"
          />
          {/* Dark overlay to preserve theme */}
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/85 via-blue-900/75 to-slate-900/85" aria-hidden="true" />
        </div>

        {/* Blur orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-20 sm:pb-28 lg:pb-24 flex flex-col items-center justify-center text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-cyan-300 text-sm font-medium mb-6">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            About Synergy Connect
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl px-2 sm:px-0">
            We power modern businesses with cloud-hosted communications—reliable, scalable, and built to help you connect anywhere.
          </p>
        </div>
      </section>

      {/* Why Choose - Feature cards (same pattern as home Features) */}
      <section
        id="why-choose"
        className="relative section-padding bg-linear-to-b from-gray-200 via-gray-50 to-gray-100 overflow-hidden"
        aria-labelledby="why-choose-heading"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-tech-blue/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute top-0 right-0 w-[225px] h-[225px] sm:w-[350px] sm:h-[350px] bg-aqua/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-emerald/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-[225px] h-[225px] sm:w-[350px] sm:h-[350px] bg-aqua/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-tech-blue/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <span className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 bg-linear-to-r from-tech-blue/10 to-aqua/10 text-gray-700 font-semibold rounded-full border border-tech-blue/20 mb-6 text-sm sm:text-base">
              Cloud PBX Advantages
            </span>
            <h2 id="why-choose-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 px-4">
              Why Choose A Cloud Hosted Phone System?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              Six compelling reasons to switch to a flexible, cost-effective cloud phone system.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20" role="list">
            {features.map((item, index) => (
              <article
                key={index}
                className="relative bg-white rounded-3xl border border-gray-200/60 shadow-md h-full flex flex-col overflow-hidden hover:shadow-2xl hover:border-gray-300/80"
                role="listitem"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-3xl">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits section - Block 1: content left, image right */}
      <section
        id="benefits"
        className="relative section-padding bg-linear-to-b from-gray-50 to-white overflow-hidden"
        aria-labelledby="benefits-heading"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-tech-blue/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-[225px] h-[225px] sm:w-[350px] sm:h-[350px] bg-aqua/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
        <span className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 bg-linear-to-r from-tech-blue/10 to-aqua/10 text-gray-700 font-semibold rounded-full border border-tech-blue/20 mb-4 text-sm sm:text-base">
                  Benefits
                </span>
                <h2 id="benefits-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                  Benefits of Having a{' '}
                  <span className="block text-transparent bg-clip-text bg-linear-to-r from-tech-blue via-aqua to-emerald">
                    Cloud Hosted Phone System
                  </span>
                </h2>
                </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
            {/* Left: heading + 4 benefits */}
            <div className="order-2 lg:order-1 space-y-8 sm:space-y-10">
            

              <div className="space-y-6 sm:space-y-8">
                <div className="flex gap-4 sm:gap-5">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-tech-blue/10 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-tech-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Lower Costs</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Businesses on average see a reduction in costs of between 50–75% after switching to VoIP. This is a combination of reduced communication expenses and logistical benefits.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-5">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-aqua/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-aqua" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Productivity</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Investing in a cloud phone system allows companies to let their employees work remotely, which can increase overall productivity by more than 20%.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-5">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-emerald" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Reliability</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Because of QoS (Quality of Service) protocols, common issues like jitter, latency or delay are monitored for satisfactory standard for business practice. In a recent study, less than 0.5% of survey respondents reported being dissatisfied with VoIP call quality.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-5">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-tech-blue/10 flex items-center justify-center">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7 text-tech-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Customer Satisfaction</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      We pride ourselves on our award-winning customer service! We will manage your phone system for you so you can focus on your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: image */}
            <div className="order-1 lg:order-2">
              <figure className="sticky top-24">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 bg-linear-to-br from-aqua/10 to-emerald/5 z-10" aria-hidden="true" />
                  <Image
                    src="/redesign/out/images/img.webp"
                    alt="Cloud hosted phone system - modern business communications"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover aspect-4/4"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
             
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
