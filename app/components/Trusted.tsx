// components/Trusted.tsx (or rename to Features.tsx if you want)
import { 
    CheckCircle,
    ArrowRight
  } from 'lucide-react'
  import Link from 'next/link'
  
  const Trusted = () => {
    const stats = [
      { value: '99.9%', label: 'Uptime SLA', suffix: 'Guaranteed' },
      { value: '50+', label: 'Features', suffix: 'Included Free' },
      { value: '24/7', label: 'Support', suffix: 'Response Time < 5min' },
      { value: '1M+', label: 'Calls', suffix: 'Processed Daily' },
    ]
    
    return(
      <section 
        className='relative section-padding bg-linear-to-b from-white via-gray-50/50 to-white overflow-hidden'
        aria-labelledby="trusted-heading"
      >
        {/* Blur circles - positioned in corners and middle */}
        <div className="absolute inset-0" aria-hidden="true">
          {/* Top left corner */}
          <div className="absolute top-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-tech-blue/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
          
          {/* Top right corner */}
          <div className="absolute top-0 right-0 w-[225px] h-[225px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] bg-aqua/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          
          {/* Bottom left corner */}
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-emerald/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          
          {/* Bottom right corner */}
          <div className="absolute bottom-0 right-0 w-[225px] h-[225px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] bg-aqua/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          
          {/* Middle center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-tech-blue/15 rounded-full blur-3xl" />
        </div>
        
        {/* Stats Section */}
        <div className='relative z-10 max-w-7xl mx-auto'>
        <div className="relative mb-16 sm:mb-20 lg:mb-24">
          {/* Stats blur effect */}
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-tech-blue/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-aqua/5 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <header className="text-center mb-12 sm:mb-16 px-4 sm:px-6 lg:px-8">
              {/* Updated heading to match Features component style */}
              <span className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 bg-linear-to-r from-tech-blue/10 to-aqua/10 text-gray-700 font-semibold rounded-full border border-tech-blue/20 mb-6 sm:mb-8 text-sm sm:text-base">
                Trusted by Businesses
              </span>
              <h2 id="trusted-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Join Thousands of
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-tech-blue via-aqua to-emerald">
                  Satisfied Customers
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                Businesses worldwide trust Synergy Connect for their communication needs.
              </p>
            </header>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8" role="list">
              {stats.map((stat, index) => {
                const colors = [
                  { value: 'text-tech-blue', accent: 'from-tech-blue to-tech-blue/80' },
                  { value: 'text-aqua', accent: 'from-aqua to-aqua/80' },
                  { value: 'text-emerald', accent: 'from-emerald to-emerald/80' },
                  { value: 'text-tech-blue', accent: 'from-tech-blue to-tech-blue/80' }
                ]
                const colorScheme = colors[index % colors.length]
                
                return (
                  <article 
                    key={index}
                    className="relative text-center bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm overflow-hidden"
                    role="listitem"
                  >
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${colorScheme.accent}`} aria-hidden="true" />
                    
                    <div className={`text-3xl sm:text-4xl md:text-5xl font-bold ${colorScheme.value} mb-2 sm:mb-3`}>
                      {stat.value}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">
                      {stat.suffix}
                    </p>
                    {/* Bottom accent line */}
                    <div className="pt-4 sm:pt-6 border-t border-gray-100">
                      <div className={`w-12 h-1 bg-linear-to-r ${colorScheme.accent} rounded-full mx-auto`} aria-hidden="true" />
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
  
        {/* CTA Section */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mt-16 sm:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-tech-blue via-aqua to-emerald" aria-hidden="true" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwIDkuOTQtOC4wNiAxOGMtMTggMThzLTE4LTguMDYtMTgtMTggOC4wNi0xOCAxOC0xOCAxOCA4LjA2IDE4IDE4eiIgZmlsbD0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-10" aria-hidden="true" />
          
          {/* CTA blur circles */}
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 p-8 sm:p-12 md:p-16">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Content */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Ready to Transform Your Communications?
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8">
                  Get started with our 30-day free trial. No credit card required.
                </p>
                
                <ul className="space-y-3 sm:space-y-4" role="list">
                  <li className="flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald/20 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0" aria-hidden="true">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald" />
                    </div>
                    <span className="text-sm sm:text-base text-white">All features included</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald/20 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0" aria-hidden="true">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald" />
                    </div>
                    <span className="text-sm sm:text-base text-white">No setup fees</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald/20 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0" aria-hidden="true">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald" />
                    </div>
                    <span className="text-sm sm:text-base text-white">Cancel anytime</span>
                  </li>
                </ul>
              </div>
  
              {/* Right - CTA Buttons */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Start Your Free Trial
                </h4>
                <p className="text-sm sm:text-base text-white/80 mb-6 sm:mb-8">
                  Experience the full power of Synergy Connect for 30 days.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full bg-white text-tech-blue font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                    aria-label="Get started with your free trial"
                  >
                    <span>Get Started Now</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/demo"
                    className="flex items-center justify-center w-full bg-transparent border-2 border-white text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-center hover:bg-white/10 transition-all focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                    aria-label="Schedule a demo"
                  >
                    <span>Schedule a Demo</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" aria-hidden="true" />
                  </Link>
                </div>
  
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald rounded-full mr-2" aria-hidden="true" />
                      <span className="text-white/80 text-xs sm:text-sm">No credit card required</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald rounded-full mr-2" aria-hidden="true" />
                      <span className="text-white/80 text-xs sm:text-sm">Full support included</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    )
  }
  
  export default Trusted