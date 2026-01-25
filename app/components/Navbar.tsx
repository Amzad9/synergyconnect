'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const featureLinks = [
  { name: 'AI Agent Receptionist', href: '/features/ai-agent-receptionist' },
  { name: 'VoIP Plans', href: '/features/voip-plans' },
  { name: 'VoIP Phones', href: '/features/voip-phones' },
  { name: 'Call Queue Metrics', href: '/features/call-queue-metrics' },
  { name: 'SIP Trunking', href: '/features/sip-trunking' },
  { name: 'Audio Production', href: '/features/audio-production' },
  { name: 'Business Text Messaging', href: '/features/business-text-messaging' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [featuresExpanded, setFeaturesExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) setFeaturesExpanded(false)
  }, [isOpen])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Advantages', href: '/advantages' },
    { name: 'Features', href: '/features' },
    { name: 'Phones', href: '/phones' },
    { name: 'Support', href: '/support' },
    // { name: 'Blog', href: '/blog' },
    { name: 'Get Quote', href: '/quote' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-xl">SC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 leading-tight">Synergy Connect</span>
                <span className="text-xs text-teal-600 font-medium">Cloud Communications</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu – hidden on tablet, show from xl */}
          <div className="hidden xl:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-teal-600 font-medium transition-all duration-300
                           hover:bg-linear-to-r hover:from-cyan-50 hover:to-teal-50 rounded-lg mx-1
                           flex items-center gap-1 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                  {item.name === 'Features' && (
                    <ChevronDown className="w-4 h-4 opacity-70" aria-hidden="true" />
                  )}
                </Link>
                
       

                {/* Dropdown for Features */}
                {item.name === 'Features' && (
                  <div className="absolute left-0 mt-2 w-64 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                              transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-4 max-h-[70vh] overflow-y-auto">
                      {featureLinks.map((f) => (
                        <Link key={f.href} href={f.href} className="block px-4 py-3 hover:bg-cyan-50 rounded-lg text-gray-700 hover:text-teal-600 mt-2 first:mt-0">
                          <span className="font-medium">{f.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/quote"
              className="ml-4 bg-linear-to-r from-cyan-600 to-teal-600 text-white font-semibold px-6 py-3 rounded-xl
                       hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl
                       hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
              aria-label="Get a quote for our services"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile / tablet menu button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="min-w-[44px] min-h-[44px] p-2 rounded-lg bg-linear-to-r from-cyan-50 to-teal-50 text-gray-700 hover:text-teal-600 active:bg-cyan-100 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 transition-all inline-flex items-center justify-center"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6 shrink-0" aria-hidden="true" /> : <Menu className="h-6 w-6 shrink-0" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Menu - Slide from right */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 z-100 xl:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
        style={{ zIndex: 100 }}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 h-screen bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: 100 }}
          aria-hidden="true"
        />
        
        {/* Side Menu */}
        <div 
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{ zIndex: 101 }}
        >
          <nav 
            className="flex flex-col h-screen pt-20 px-4 pb-4 bg-linear-to-br from-tech-blue via-aqua to-emerald" 
            role="navigation" 
            aria-label="Mobile navigation"
          >
            {/* Close button – min touch target for tablet */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 min-w-[44px] min-h-[44px] p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 active:bg-white/40 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all inline-flex items-center justify-center"
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6 shrink-0" aria-hidden="true" />
            </button>

            {/* Menu Items – min touch targets for tablet */}
            <div className="space-y-1 overflow-y-auto">
              {navItems.map((item) => (
                item.name === 'Features' ? (
                  <div key={item.name}>
                    <button
                      type="button"
                      onClick={() => setFeaturesExpanded((v) => !v)}
                      className="flex items-center justify-between w-full px-4 py-3 min-h-[44px] text-white hover:text-white hover:bg-white/20 active:bg-white/25
                                 rounded-lg font-medium transition-all focus:outline-none focus:ring-4 focus:ring-white/50 backdrop-blur-sm text-left"
                      aria-expanded={featuresExpanded}
                      aria-controls="mobile-features-dropdown"
                      aria-label={featuresExpanded ? 'Collapse Features menu' : 'Expand Features menu'}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-200 ${featuresExpanded ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      id="mobile-features-dropdown"
                      className={`overflow-hidden transition-all duration-200 ${featuresExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
                      role="region"
                      aria-label="Features submenu"
                    >
                      <div className="pl-4 pt-1 pb-2 space-y-1">
                        <Link
                          href="/features"
                          className="flex items-center px-4 py-2.5 min-h-[44px] text-white/90 hover:text-white hover:bg-white/20 rounded-lg text-sm font-medium transition-all"
                          onClick={() => setIsOpen(false)}
                        >
                          All Features
                        </Link>
                        {featureLinks.map((f) => (
                          <Link
                            key={f.href}
                            href={f.href}
                            className="flex items-center px-4 py-2.5 min-h-[44px] text-white/90 hover:text-white hover:bg-white/20 rounded-lg text-sm font-medium transition-all"
                            onClick={() => setIsOpen(false)}
                          >
                            {f.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-4 py-3 min-h-[44px] text-white hover:text-white hover:bg-white/20 active:bg-white/25
                             rounded-lg font-medium transition-all focus:outline-none focus:ring-4 focus:ring-white/50 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* CTA Button – min touch target */}
            <div className="mt-auto pt-4 border-t border-white/30 shrink-0">
              <Link
                href="/quote"
                className="flex items-center justify-center w-full min-h-[48px] px-6 py-3 rounded-xl 
                         bg-white text-cyan-600 font-semibold hover:bg-gray-50 active:bg-gray-100 transition-all duration-300 
                         focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg"
                onClick={() => setIsOpen(false)}
                aria-label="Get a quote for our services"
              >
                Get Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Active indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-500 via-teal-500 to-emerald-500 opacity-50"></div>
    </nav>
  )
}

export default Navbar