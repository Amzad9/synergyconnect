// components/CommunicationHero.tsx
import React from 'react';
import Image from 'next/image';

const CommunicationHero = () => {
  return (
    <section 
      className="relative min-h-screen section-padding bg-linear-to-b from-white to-gray-50 overflow-hidden"
      aria-labelledby="communication-hero-heading"
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-emerald/15 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <article className="order-2 lg:order-1">
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              
              {/* Title Section - styled similar to Features heading */}
              <header className="space-y-4 sm:space-y-6">
                <span className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 bg-linear-to-r from-tech-blue/10 to-aqua/10 text-gray-700 font-semibold rounded-full border border-tech-blue/20 text-sm sm:text-base">
                  Unified Cloud Communications
                </span>
                <h2 id="communication-hero-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Explore Your{' '}
                  <span className="block text-transparent bg-clip-text bg-linear-to-r from-tech-blue via-aqua to-emerald">
                    Cloud PBX Options
                  </span>
                </h2>
              </header>

              {/* Content Paragraph */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed md:leading-loose">
                  We have an extensive selection of phones to choose from with a variety of features that were designed to meet the needs of everyday business and more.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed md:leading-loose">
                  Our products and services are made with your business needs in mind.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed md:leading-loose">
                  Synergy Connect has boosted numerous businesses' communication channels efficiently, allowing them to transform their companies into competitive powerhouses.
                </p>
              </div>

              {/* CTA Section */}
              <div className="pt-4 sm:pt-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <a 
                    href="#features" 
                    className="inline-flex items-center justify-center bg-linear-to-r from-aqua to-emerald text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-lg text-base sm:text-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-aqua/50 focus:ring-offset-2"
                    aria-label="Learn more about our cloud PBX features"
                  >
                    Know More
                  </a>
                  
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="hidden sm:block w-12 h-px bg-gray-300" aria-hidden="true"></div>
                    <div className="text-sm sm:text-base">
                      <span className="font-semibold text-gray-900">500+ businesses</span> transformed
                    </div>
                  </div>
                </div>
              </div>

          
            </div>
          </article>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <figure className="relative">
              {/* Image Container with Decorative Elements */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-br from-aqua/10 to-emerald/5 z-10" aria-hidden="true"></div>
                <Image 
                  src='/images/img.webp' 
                  height={600} 
                  width={800} 
                  className="w-full h-auto object-cover aspect-square sm:aspect-4/4"
                  alt="Modern cloud communication system with unified communications platform"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
          
              {/* Overlay Card */}
              <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg p-3 sm:p-4 w-[90%] sm:w-4/5 border border-gray-100">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-emerald to-emerald/80 rounded-lg flex items-center justify-center" aria-hidden="true">
                    <span className="text-white text-lg sm:text-xl" aria-hidden="true">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Cloud PBX Ready</p>
                    <p className="text-xs sm:text-sm text-gray-600">Modern communication solutions</p>
                  </div>
                </div>
              </div>
            </figure>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommunicationHero;