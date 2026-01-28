// components/PricingStructure.tsx
import React from 'react';
import { Check, Zap, Users, Globe } from 'lucide-react';

const PricingStructure = () => {
  return (
    <section 
      className="relative min-h-screen section-padding bg-aqua/20 overflow-hidden"
      aria-labelledby="pricing-heading"
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
        
        {/* Header Section - styled similar to Features heading */}
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 bg-linear-to-r from-tech-blue/10 to-aqua/10 text-gray-700 font-semibold rounded-full border border-tech-blue/20 mb-6 sm:mb-8 text-sm sm:text-base">
            Tailored Pricing Solutions
          </span>
          
          <h2 id="pricing-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-tech-blue via-aqua to-emerald">
              Flexible Pricing Structure
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Choose the perfect plan that grows with your business. No hidden fees, no long-term contracts.
          </p>
        </header>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto" role="list">
          
          {/* Starter Plan */}
          <article className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full focus-within:ring-4 focus-within:ring-cyan-500/20 focus-within:outline-none" role="listitem">
            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-600 px-3 py-1 rounded-full text-sm font-medium mb-4 sm:mb-6">
                <Zap className="w-4 h-4" aria-hidden="true" />
                <span>Starter</span>
              </div>
              
              {/* Price */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-500 text-sm sm:text-base">/month</span>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">For small teams getting started</p>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1" role="list">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-gray-700">Up to 10 users</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-gray-700">Basic VoIP features</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-gray-700">Email support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-gray-700">99.5% uptime SLA</span>
                </li>
              </ul>
              
              {/* CTA */}
              <div className="mt-auto pt-4 sm:pt-6">
                <a 
                  href="/contact" 
                  className="block w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold py-3 rounded-lg text-center hover:from-cyan-600 hover:to-teal-600 transition-all focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2"
                  aria-label="Get started with Starter plan"
                >
                  Get Started
                </a>
              </div>
            </div>
          </article>
          
          {/* Professional Plan - Featured */}
          <article className="group relative bg-gradient-to-b from-white to-cyan-50 rounded-2xl border-2 border-cyan-500 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full focus-within:ring-4 focus-within:ring-cyan-500/20 focus-within:outline-none" role="listitem" aria-label="Professional plan - Most popular">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-600 to-teal-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-bl-lg text-xs sm:text-sm font-semibold" aria-label="Most popular plan">
              Most Popular
            </div>
            
            <div className="p-6 sm:p-8 flex-1 flex flex-col pt-12 sm:pt-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium mb-4 sm:mb-6">
                <Users className="w-4 h-4" aria-hidden="true" />
                <span>Professional</span>
              </div>
              
              {/* Price */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">$79</span>
                  <span className="text-gray-500 text-sm sm:text-base">/month</span>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">Perfect for growing businesses</p>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1" role="list">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-gray-700">Up to 50 users</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-gray-700">Advanced VoIP features</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-gray-700">Video conferencing</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-gray-700">Priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-gray-700">99.9% uptime SLA</span>
                </li>
              </ul>
              
              {/* CTA */}
              <div className="mt-auto pt-4 sm:pt-6">
                <a 
                  href="/contact" 
                  className="block w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold py-3 rounded-lg text-center hover:from-cyan-700 hover:to-teal-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2"
                  aria-label="Get started with Professional plan"
                >
                  Get Started
                </a>
              </div>
            </div>
          </article>
          
          {/* Enterprise Plan */}
          <article className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full focus-within:ring-4 focus-within:ring-teal-500/20 focus-within:outline-none" role="listitem">
            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-3 py-1 rounded-full text-sm font-medium mb-4 sm:mb-6">
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span>Enterprise</span>
              </div>
              
              {/* Price */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">Custom</span>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">For large organizations</p>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1" role="list">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-gray-700">Unlimited users</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-gray-700">Full VoIP feature set</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-gray-700">24/7 phone support</span>
                </li>
              </ul>
              
              {/* CTA */}
              <div className="mt-auto pt-4 sm:pt-6">
                <a 
                  href="/contact" 
                  className="block w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold py-3 rounded-lg text-center hover:from-teal-600 hover:to-emerald-600 transition-all focus:outline-none focus:ring-4 focus:ring-teal-500/50 focus:ring-offset-2"
                  aria-label="Contact sales for Enterprise plan"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </article>
        </div>

      </div>
    </section>
  );
};

export default PricingStructure;