// components/Features.tsx
import { 
    MessageSquare, 
    DollarSign,
    Smartphone,
    Zap,
    Shield,
    Users,
    Video,
    Headphones,
    Globe,
    Cloud,
    BarChart,
    CheckCircle,
    ArrowRight,
    Phone,
    Mail,
    MessageCircle,
    Calendar,
    Clock,
    Lock,
    Wifi,
    Monitor,
    Tablet
  } from 'lucide-react'
  import Link from 'next/link'
  
  const Features = () => {
    const features = [
      {
        icon: <Phone className="w-10 h-10" />,
        title: 'More Than a Typical Phone System',
        description: 'Cloud PBX is a flexible Unified Communications platform with Enterprise features and service options designed with everyday business use in mind. Fully hosted, maintained, and supported by Fuse Networks, you receive great call quality, industry-leading reliability and an easy-to-manage phone system at a low monthly cost.',
        color: 'tech-blue',
        bgColor: 'bg-tech-blue/10',
        textColor: 'text-tech-blue',
        hoverBg: 'bg-tech-blue',
        gradientFrom: 'from-tech-blue',
        gradientTo: 'to-tech-blue/80'
      },
      {
        icon: <Video className="w-10 h-10" />,
        title: 'One Low Price You Can Understand',
        description: 'Because we dont believe in confusing bundles or complicated licensing, you can take advantage of all our features for one, low price. When you need help, simply call our support team and we will answer any questions related to your Cloud PBX, devices, or features at no additional cost.',
        color: 'aqua',
        bgColor: 'bg-aqua/10',
        textColor: 'text-aqua',
        hoverBg: 'bg-aqua',
        gradientFrom: 'from-aqua',
        gradientTo: 'to-aqua/80'
      },
      {
        icon: <MessageCircle className="w-10 h-10" />,
        title: 'Communicate Anytime, Anywhere',
        description: 'With Cloud PBX you can make and receive your calls anytime, anywhere. Giving you the option of using a desk phone, a PC softphone or your mobile device while enjoying all the features of your business phone system. You can assign a single number with one voicemail that works on all devices, transfer calls between your desk and mobile device, or softphone.',
        color: 'emerald',
        bgColor: 'bg-emerald/10',
        textColor: 'text-emerald',
        hoverBg: 'bg-emerald',
        gradientFrom: 'from-emerald',
        gradientTo: 'to-emerald/80'
      },
      {
        icon: <Mail className="w-10 h-10" />,
        title: 'Up and Running in Minutes',
        description: 'Eliminate operational loss should part of your office communications network go down. In the event of a natural disaster, power outage or other disruption, the Cloud PBX Auto Attendant will continue to manage your calls for and with mobility you can still receive all your calls on your mobile phone.',
        color: 'tech-blue',
        bgColor: 'bg-tech-blue/10',
        textColor: 'text-tech-blue',
        hoverBg: 'bg-tech-blue',
        gradientFrom: 'from-tech-blue',
        gradientTo: 'to-tech-blue/80'
      },
      {
        icon: <Calendar className="w-10 h-10" />,
        title: 'Personal Flexibility',
        description: 'Our reliable, feature-rich hosted phone services adjust as you need them to. We make it easy for our customers to deploy the communication apps and solutions that your business needs, creating an in-oﬃce experience right at your ﬁngertips, wherever you are on whichever device you choose. Commonly used features include: full call center capabilities, call queuing, ﬁnd me follow me and more.',
        color: 'aqua',
        bgColor: 'bg-aqua/10',
        textColor: 'text-aqua',
        hoverBg: 'bg-aqua',
        gradientFrom: 'from-aqua',
        gradientTo: 'to-aqua/80'
      },
      {
        icon: <Users className="w-10 h-10" />,
        title: 'Business Continuity',
        description: 'Eliminate operational loss should part of your office communications network go down. In the event of a natural disaster, power outage or other disruption, the Cloud PBX Auto Attendant will continue to manage your calls for and with mobility you can still receive all your calls on your mobile phone.',
        color: 'emerald',
        bgColor: 'bg-emerald/10',
        textColor: 'text-emerald',
        hoverBg: 'bg-emerald',
        gradientFrom: 'from-emerald',
        gradientTo: 'to-emerald/80'
      },
    ]
  

  
    return (
      <section 
        id="features" 
        className="relative section-padding bg-linear-to-b from-gray-200 via-gray-50/500 to-gray-100 overflow-hidden"
        aria-labelledby="features-heading"
      >
        {/* Background blur circles - positioned in corners and middle */}
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
              Complete Feature Set
            </span>
            <h2 id="features-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Everything You Need for
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-tech-blue via-aqua to-emerald">
                Modern Business
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
              A comprehensive suite of communication tools designed to enhance productivity and collaboration.
            </p>
          </header>
  
          {/* Features Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20 lg:mb-24" role="list">
            {features.map((feature, index) => (
              <article 
                key={index}
                className="relative bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/60 shadow-md h-full flex flex-col overflow-hidden hover:shadow-2xl hover:border-gray-300/80 focus-within:ring-4 focus-within:ring-tech-blue/20 focus-within:outline-none"
                role="listitem"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              >
                {/* Circular Icon Container */}
                <div className="mb-6 sm:mb-8 relative z-10">
                  <div 
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${feature.bgColor} border-2 border-gray-100 flex items-center justify-center shadow-lg`} 
                    aria-hidden="true"
                    style={{
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    <div className={`relative ${feature.textColor}`}>
                      {feature.icon}
                    </div>
                  </div>
                </div>
  
                {/* Content with equal spacing */}
                <div className="grow flex flex-col relative z-10">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5 leading-tight">
                    {feature.title}
                  </h3>
  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 grow leading-relaxed">
                    {feature.description.length > 150 
                      ? feature.description.substring(0, 150).trim() + '...' 
                      : feature.description}
                  </p>
  
                  {/* Learn More Link - Fixed at bottom */}
                  <div className="mt-auto pt-6 sm:pt-8 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <button 
                        className={`flex items-center text-sm font-semibold ${feature.textColor} hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-3 py-2 -ml-3 hover:bg-gray-50 cursor-pointer`}
                        aria-label={`Learn more about ${feature.title}`}
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Features