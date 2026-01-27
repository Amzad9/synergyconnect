// components/Reviews.tsx
import { Star, Quote } from 'lucide-react'

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechFlow Solutions',
      rating: 5,
      review: 'Synergy Connect has transformed our communication infrastructure. The cloud PBX system is incredibly reliable, and our team productivity has increased by 40%. The support team is always responsive and helpful.',
      avatar: 'SJ',
      color: 'tech-blue',
      bgColor: 'bg-tech-blue/10',
      textColor: 'text-tech-blue',
      gradientFrom: 'from-tech-blue',
      gradientTo: 'to-tech-blue/80'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      company: 'Global Dynamics Inc.',
      rating: 5,
      review: 'The best decision we made for our business communications. The unified platform allows our remote teams to collaborate seamlessly. Setup was quick, and the features are exactly what we needed.',
      avatar: 'MC',
      color: 'aqua',
      bgColor: 'bg-aqua/10',
      textColor: 'text-aqua',
      gradientFrom: 'from-aqua',
      gradientTo: 'to-aqua/80'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Sales',
      company: 'SalesForce Pro',
      rating: 5,
      review: 'Outstanding service and features! The call quality is crystal clear, and the mobile integration means I never miss an important call. The pricing is transparent and fair - no hidden fees.',
      avatar: 'ER',
      color: 'emerald',
      bgColor: 'bg-emerald/10',
      textColor: 'text-emerald',
      gradientFrom: 'from-emerald',
      gradientTo: 'to-emerald/80'
    },
    {
      name: 'David Thompson',
      role: 'IT Manager',
      company: 'InnovateCorp',
      rating: 5,
      review: 'As an IT professional, I appreciate the reliability and security of Synergy Connect. The system integrates perfectly with our existing infrastructure, and the admin dashboard is intuitive and powerful.',
      avatar: 'DT',
      color: 'tech-blue',
      bgColor: 'bg-tech-blue/10',
      textColor: 'text-tech-blue',
      gradientFrom: 'from-tech-blue',
      gradientTo: 'to-tech-blue/80'
    },
    {
      name: 'Lisa Anderson',
      role: 'Founder',
      company: 'StartupHub',
      rating: 5,
      review: 'Perfect for growing businesses! We started with 5 employees and now have 50, and the system scaled seamlessly. The cost savings compared to traditional phone systems are significant.',
      avatar: 'LA',
      color: 'aqua',
      bgColor: 'bg-aqua/10',
      textColor: 'text-aqua',
      gradientFrom: 'from-aqua',
      gradientTo: 'to-aqua/80'
    },
    {
      name: 'James Wilson',
      role: 'CFO',
      company: 'Enterprise Solutions',
      rating: 5,
      review: 'The ROI has been exceptional. We reduced our communication costs by 60% while improving service quality. The analytics and reporting features help us make data-driven decisions.',
      avatar: 'JW',
      color: 'emerald',
      bgColor: 'bg-emerald/10',
      textColor: 'text-emerald',
      gradientFrom: 'from-emerald',
      gradientTo: 'to-emerald/80'
    }
  ]

  return (
    <section 
      className="relative section-padding bg-linear-to-b from-white via-gray-50/50 to-white overflow-hidden"
      aria-labelledby="reviews-heading"
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 bg-linear-to-r from-tech-blue/10 to-aqua/10 text-gray-700 font-semibold rounded-full border border-tech-blue/20 mb-6 sm:mb-8 text-sm sm:text-base">
            Customer Testimonials
          </span>
          <h2 id="reviews-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            What Our Customers
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-tech-blue via-aqua to-emerald">
              Are Saying
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
            Join thousands of satisfied businesses that trust Synergy Connect for their communication needs.
          </p>
        </header>

        {/* Reviews Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8" role="list">
          {reviews.map((review, index) => (
            <article 
              key={index}
              className="relative bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/60 shadow-md h-full flex flex-col overflow-hidden hover:shadow-2xl hover:border-gray-300/80 transition-all duration-300 focus-within:ring-4 focus-within:ring-tech-blue/20 focus-within:outline-none"
              role="listitem"
              style={{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${review.gradientFrom} ${review.gradientTo}`} aria-hidden="true" />
              
              {/* Corner Borders */}
              {/* Top Left Corner */}
              <div 
                className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 rounded-tl-3xl opacity-60"
                style={{
                  borderColor: review.color === 'tech-blue' ? '#0066cc' : review.color === 'aqua' ? '#00cccc' : '#10b981'
                }}
                aria-hidden="true"
              />
              
              {/* Top Right Corner */}
              <div 
                className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 rounded-tr-3xl opacity-60"
                style={{
                  borderColor: review.color === 'tech-blue' ? '#0066cc' : review.color === 'aqua' ? '#00cccc' : '#10b981'
                }}
                aria-hidden="true"
              />
              
              {/* Bottom Left Corner */}
              <div 
                className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 rounded-bl-3xl opacity-60"
                style={{
                  borderColor: review.color === 'tech-blue' ? '#0066cc' : review.color === 'aqua' ? '#00cccc' : '#10b981'
                }}
                aria-hidden="true"
              />
              
              {/* Bottom Right Corner */}
              <div 
                className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 rounded-br-3xl opacity-60"
                style={{
                  borderColor: review.color === 'tech-blue' ? '#0066cc' : review.color === 'aqua' ? '#00cccc' : '#10b981'
                }}
                aria-hidden="true"
              />
              
              {/* Quote Icon */}
              <div className="mb-6 sm:mb-8 relative z-10">
                <div 
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${review.bgColor} border-2 border-gray-100 flex items-center justify-center shadow-lg`} 
                  aria-hidden="true"
                  style={{
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <Quote className={`w-8 h-8 sm:w-10 sm:h-10 ${review.textColor}`} />
                </div>
              </div>

              {/* Review Content */}
              <div className="grow flex flex-col relative z-10">
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4 sm:mb-5" aria-label={`${review.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? `${review.textColor} fill-current`
                          : 'text-gray-300'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 grow leading-relaxed">
                  &ldquo;{review.review}&rdquo;
                </p>

                {/* Author Info */}
                <div className="pt-6 sm:pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div 
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${review.bgColor} flex items-center justify-center shrink-0 border-2 border-gray-100`}
                      aria-hidden="true"
                    >
                      <span className={`text-lg sm:text-xl font-bold ${review.textColor}`}>
                        {review.avatar}
                      </span>
                    </div>
                    
                    {/* Name and Company */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                        {review.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {review.role}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        {review.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 bg-white/80 backdrop-blur-sm rounded-2xl px-8 sm:px-12 py-6 sm:py-8 border border-gray-200/80 shadow-lg">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-tech-blue to-aqua mb-2">
                4.9/5
              </div>
              <p className="text-sm sm:text-base text-gray-600">Average Rating</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300" aria-hidden="true" />
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-aqua to-emerald mb-2">
                10,000+
              </div>
              <p className="text-sm sm:text-base text-gray-600">Happy Customers</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300" aria-hidden="true" />
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald to-tech-blue mb-2">
                98%
              </div>
              <p className="text-sm sm:text-base text-gray-600">Would Recommend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
