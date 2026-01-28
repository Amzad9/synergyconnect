// components/ContactSection.tsx
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section 
      className="min-h-screen section-padding bg-tech-blue/10 relative overflow-hidden"
      aria-labelledby="contact-heading"
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
  
      <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto">
        
        {/* Header Section - styled similar to Features heading */}
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 bg-linear-to-r from-tech-blue/10 to-aqua/10 text-gray-700 font-semibold rounded-full border border-tech-blue/20 mb-6 sm:mb-8 text-sm sm:text-base">
            We&apos;d Love to Hear From You
          </span>
          <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-tech-blue via-aqua to-emerald">
              Get in Touch
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Ready to transform your communication? Contact us for a personalized consultation.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto items-stretch bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
          
          {/* Left Column - Contact Image & Info */}
          <div className="relative flex flex-col h-full">
            {/* Image Container */}
            <figure className="relative rounded-2xl overflow-hidden shadow-xl flex-1 min-h-[300px] sm:min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-600/20 z-10" aria-hidden="true"></div>
              <div className="relative w-full h-full">
                <Image 
                  src="https://images.unsplash.com/photo-1689799514696-b16af9b53753?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  fill
                  className="object-cover"
                  alt="Contact our communication experts for personalized consultation on cloud-based phone systems"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Overlay Info Cards */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" aria-hidden="true" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Contact Information</h3>
                  </div>
                  
                  <address className="space-y-3 sm:space-y-4 not-italic">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-gray-600">Phone Number</p>
                        <a href="tel:+15551234567" className="font-semibold text-gray-900 truncate hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-gray-600">Email Address</p>
                        <a href="mailto:contact@synergyconnect.com" className="font-semibold text-gray-900 truncate hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded">
                          contact@synergyconnect.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-gray-600">Office Location</p>
                        <p className="font-semibold text-gray-900 truncate">123 Business Ave, Suite 100</p>
                      </div>
                    </div>
                  </address>
                </div>
              </div>
            </figure>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-teal-300 rounded-full opacity-10 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tr from-teal-400 to-emerald-300 rounded-full opacity-10 -z-10"></div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative flex flex-col h-full">
            <div className="flex-1 flex flex-col">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                <p className="text-sm sm:text-base text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>
              
              <form className="space-y-4 sm:space-y-6 flex-1 flex flex-col" aria-label="Contact form">
                <div className="space-y-6 flex-1">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                        placeholder="Enter your full name"
                        aria-required="true"
                      />
                    </div>
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                        placeholder="Enter your email address"
                        aria-required="true"
                      />
                    </div>
                  </div>
                  
                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                        placeholder="What is this regarding?"
                      />
                    </div>
                  </div>
                  
                  {/* Message Field */}
                  <div className="flex-1">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <div className="relative h-full">
                      <div className="absolute left-3 top-3 text-gray-400" aria-hidden="true">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        required
                        className="w-full h-full min-h-[120px] sm:min-h-[150px] pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all resize-none"
                        placeholder="Tell us about your communication needs..."
                        aria-required="true"
                      ></textarea>
                    </div>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2"
                    aria-label="Submit contact form"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
            
            {/* Form Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-teal-300 rounded-full opacity-10 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-teal-400 to-emerald-300 rounded-full opacity-10 -z-10"></div>
          </div>
        </div>
        
        {/* Bottom Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mt-12 sm:mt-16">
          <article className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4" aria-hidden="true">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Call Us Directly</h4>
            <p className="text-xs sm:text-sm text-gray-600">Available 9AM-6PM EST</p>
          </article>
          
          <article className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4" aria-hidden="true">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Email Support</h4>
            <p className="text-xs sm:text-sm text-gray-600">Response within 24 hours</p>
          </article>
          
          <article className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4" aria-hidden="true">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Live Chat</h4>
            <p className="text-xs sm:text-sm text-gray-600">Available during business hours</p>
          </article>
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;