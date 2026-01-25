// components/Hero.tsx
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900"
      aria-label="Hero section - Unified Communications"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900" aria-hidden="true" />
      
      {/* Network Connectivity Image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Network connectivity pattern with nodes and connections"
          fill
          className="object-cover opacity-5"
          priority
          quality={100}
          sizes="100vw"
        />
        {/* Additional network overlay pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='20' cy='20' r='2' fill='%2300cccc' opacity='0.6'/%3E%3Ccircle cx='50' cy='30' r='2' fill='%2310b981' opacity='0.6'/%3E%3Ccircle cx='80' cy='40' r='2' fill='%2300cccc' opacity='0.6'/%3E%3Ccircle cx='30' cy='60' r='2' fill='%2310b981' opacity='0.6'/%3E%3Ccircle cx='70' cy='70' r='2' fill='%2300cccc' opacity='0.6'/%3E%3Cline x1='20' y1='20' x2='50' y2='30' stroke='%2300cccc' stroke-width='0.5' opacity='0.3'/%3E%3Cline x1='50' y1='30' x2='80' y2='40' stroke='%2310b981' stroke-width='0.5' opacity='0.3'/%3E%3Cline x1='20' y1='20' x2='30' y2='60' stroke='%2300cccc' stroke-width='0.5' opacity='0.3'/%3E%3Cline x1='80' y1='40' x2='70' y2='70' stroke='%2310b981' stroke-width='0.5' opacity='0.3'/%3E%3Cline x1='30' y1='60' x2='70' y2='70' stroke='%2300cccc' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
          aria-hidden="true"
        />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 md:pt-40 pb-24 sm:pb-32 flex flex-col items-center justify-center text-center">
        <div className="max-w-7xl w-full flex flex-col items-center text-center">
      

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold mb-10 leading-[1.1] tracking-tight">
            <span className="block text-white mb-3 drop-shadow-lg">
              Unified Communications
            </span>
            <span 
              className="block bg-linear-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent capitalize animate-gradient"
              style={{
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.4))'
              }}
            >
              Across Your Business
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-xl text-white max-w-3xl mx-auto mb-12 leading-relaxed capitalize">
            No Matter The Size Of Your Business, You Need A Fast And Reliable Communications System. Using A Cloud-Based Phone System Unifies Your Team And Enhances Customer Communications.
          </p>

      

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-linear-to-r from-cyan-500 to-emerald-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/50 hover:-translate-y-1"
              aria-label="Start your free trial"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#features"
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              aria-label="Explore features"
            >
              Explore Features
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-white/10 pt-12">
            <p className="text-sm text-gray-400 mb-6">Trusted by leading businesses worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
              <div>
                <span className="text-2xl font-bold text-white">500+</span>
                <span className="ml-2">Companies</span>
              </div>
              <div className="w-px h-6 bg-gray-600" />
              <div>
                <span className="text-2xl font-bold text-white">1M+</span>
                <span className="ml-2">Calls Daily</span>
              </div>
              <div className="w-px h-6 bg-gray-600" />
              <div>
                <span className="text-2xl font-bold text-white">50+</span>
                <span className="ml-2">Countries</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero