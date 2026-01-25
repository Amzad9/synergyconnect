import Link from 'next/link'

const CTA = () => {
  return (
    <section 
      className="relative section-padding bg-linear-to-br from-cyan-500 via-aqua to-emerald-500 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #00cccc 0%, #10b981 50%, #00cccc 100%)'
      }}
      aria-labelledby="cta-heading"
    >
      {/* Enhanced Blur circles with aqua and green */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Top left corner - Aqua */}
        <div className="absolute top-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-cyan-400/30 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        
        {/* Top right corner - Green */}
        <div className="absolute top-0 right-0 w-[225px] h-[225px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] bg-emerald-400/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        
        {/* Bottom left corner - Green */}
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-emerald-500/25 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        
        {/* Bottom right corner - Aqua */}
        <div className="absolute bottom-0 right-0 w-[225px] h-[225px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] bg-cyan-400/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        
        {/* Middle center - Mixed */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-aqua/30 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 id="cta-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            Ready to Improve Your Communication System?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Replace your outdated phone system with a cost-effective, flexible, and advanced cloud-based communications system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="tel:+15551234567"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-base focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Call us at +1 (555) 123-4567"
            >
              Call Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA