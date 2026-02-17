import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import {
  ArrowRight,
  MessageSquare,
  Smartphone,
  Users,
  Clock,
  Zap,
  Repeat,
  History,
  QrCode,
  Share2,
  Menu,
  Settings,
  Mail,
  Bell,
  Calendar,
  Phone,
  Home,
  Car,
  Stethoscope,
  PlayCircle,
  ChevronRight,
  Inbox,
  Send,
  BarChart3,
  Grid,
  BookOpen,
  MessageCircle,
} from 'lucide-react'

export default function BusinessCloudSMSPage() {
  // Industry examples
  const industryExamples = [
    {
      industry: "A real estate firm",
      icon: MapPin,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      benefits: [
        "Push property information, flyers, MLS data, etc. with keyword responders",
        "Boost attendance at open houses and reduce no-shows at showings with appointment reminders",
        "Blast new listings to prospects to generate interest"
      ]
    },
    {
      industry: "An automobile dealership",
      icon: Car,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      benefits: [
        "Push sales information, flyers, and sales contact details with keyword responders",
        "Improve the customer experience with service reminders and completed service notifications",
        "Send inventory, trade-in, and sales announcement blasts to boost revenue"
      ]
    },
    {
      industry: "A healthcare provider",
      icon: Stethoscope,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      benefits: [
        "Send blast campaigns to announce availability or location of services",
        "Improve the patient experience with appointment and prescription pick-up reminders",
        "Create drip campaigns for gathering updated information"
      ]
    }
  ]

  // SMS Platform Capabilities
  const smsCapabilities = [
    {
      category: "Messaging",
      icon: Send,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      features: [
        "Message blasts: Reach a large number of users with a single message",
        "Reminders: Send automated reminder messages",
        "Drip campaigns: Send automated time-released communications",
        "MMS support: Send and receive MMS messages for a rich media experience"
      ]
    },
    {
      category: "Account Management",
      icon: Users,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      features: [
        "Number-sharing: Access multiple numbers from a single login",
        "Multi-device sync/support: Use your account on multiple devices",
        "Address book: Separate and sync contacts across multiple devices",
        "Account types: User with number, numberless user (DID not required), and number only"
      ]
    },
    {
      category: "Automation",
      icon: Zap,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      features: [
        "Keyword auto-replies with QR code generator: Send automatic replies for specific keyword inquiries",
        "Canned responses: Respond consistently to regularly asked questions",
        "Away message auto-responder: Easily set up a message for when you need to step away"
      ]
    },
    {
      category: "Mobile & Tools",
      icon: Smartphone,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      features: [
        "Mobile app (iOS and Android): Keep in touch, even when you're on the go",
        "Conversation history: See the full history of your text threads",
        "Help management: Provides examples and describes how to use or configure each setting"
      ]
    },
    {
      category: "Integrations",
      icon: Share2,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      features: [
        "Real-time integrations with CRMs, reservation systems, webhook and other systems including HubSpot, Microsoft Teams, Slack, Pipedrive, Google Chat and more—and the list is constantly growing"
      ]
    },
    {
      category: "QR & Media",
      icon: QrCode,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      features: [
        "QR code generator for keyword auto-replies",
        "Rich media support through MMS"
      ]
    }
  ]

  // Stats
  const stats = [
    { label: "SMS Open Rate", value: "98%", comparison: "vs 20% for email" },
    { label: "SMS Click-Through Rate", value: "19%", comparison: "vs 4% for email" },
  ]

  // Dashboard menu items for the UI mockup
  const menuItems = [
    { name: "Unified Communications", icon: MessageSquare },
    { name: "SMS Marketing", icon: Mail, active: true },
    { name: "Customer Support", icon: Users },
    { name: "Conversations", icon: Inbox },
  ]

  const contactItems = [
    { name: "Aroloba", time: "1 hour ago" },
    { name: "Carly Mirando", time: "2 days ago" },
    { name: "Domink Stefford", time: "3 days ago" },
  ]

  return (
    <>
      {/* Hero Section with Dashboard UI Mockup */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900 pt-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-emerald-900" aria-hidden="true" />

        {/* Background image */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2070&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover opacity-[0.60] object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/85 via-blue-900/75 to-emerald-900/85" aria-hidden="true" />
        </div>

        {/* Blur orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-white">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-emerald-300 text-sm font-medium mb-6">
                Business SMS Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Business Cloud SMS
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Stay Connected With Your Customers via SMS
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                    <div className="text-xs text-gray-400 mt-1">{stat.comparison}</div>
                  </div>
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed">
                Research shows that the average open rate for text message marketing campaigns is <span className="font-bold text-emerald-400">98%</span>, compared to just <span className="text-gray-400">20%</span> for email. And the average click-through rate for SMS marketing is <span className="font-bold text-emerald-400">19%</span> compared to <span className="text-gray-400">4%</span> for email.
              </p>
            </div>

           
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative section-padding bg-white overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-emerald-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 font-semibold rounded-full mb-4">
                Why Choose SMS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Benefits of Business SMS
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
              No matter what business you're in, SMS capabilities—such as keyword responders, appointment reminders, SMS blast campaigns, and more—enable you to communicate better and faster with customers and prospects to drive efficiencies and growth.
            </p>

            <p className="text-gray-700 font-semibold mb-6 text-center">
              Consider the following examples:
            </p>
          </div>
        </div>
      </section>

      {/* Industry Examples Section */}
      <section className="relative section-padding bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-blue-500/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-[225px] h-[225px] sm:w-[350px] sm:h-[350px] bg-emerald-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industryExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${example.iconBg} px-6 py-4 border-b border-gray-200`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${example.iconBg} rounded-xl flex items-center justify-center`}>
                      <example.icon className={`w-6 h-6 ${example.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{example.industry}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {example.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start gap-2 text-sm">
                        <span className="text-emerald-500 mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMS Platform Capabilities Section */}
      <section className="relative section-padding bg-white overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 font-semibold rounded-full mb-4">
              Comprehensive Platform
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              SMS Enablement Platform Capabilities
            </h2>
            <p className="text-gray-600">
              With our comprehensive SMS platform, Synergy Connect gives you a wide range of functionality, all with existing phone numbers and managed through an intuitive portal accessible via your PBX login. Capabilities include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {smsCapabilities.map((capability, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${capability.iconBg} px-6 py-4 border-b border-gray-200`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${capability.iconBg} rounded-lg flex items-center justify-center`}>
                      <capability.icon className={`w-5 h-5 ${capability.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{capability.category}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start gap-2 text-sm">
                        <span className="text-emerald-500 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Contact Info */}
      <section className="relative section-padding bg-linear-to-br from-blue-900 via-emerald-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2070&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              CONTACT US TO LEARN MORE
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Phone className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <p className="text-white text-lg font-semibold">(609)-350-5800</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <p className="text-white text-lg font-semibold">Washington Twp., NJ 08080</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Mail className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <p className="text-white text-lg font-semibold">info@synergyconnect.org</p>
              </div>
            </div>

            <p className="text-white text-xl mb-6">www.synergyconnect.org</p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 group text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
