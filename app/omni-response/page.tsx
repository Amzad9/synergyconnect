import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Phone,
  MessageSquare,
  Mail,
  MessageCircle,
  Facebook,
  Headphones,
  BarChart3,
  PieChart,
  Download,
  Users,
  Settings,
  Shield,
  Clock,
  Zap,
  Brain,
  TrendingUp,
  Database,
  Cloud,
  Layers,
  Lock,
  RefreshCw,
  PlayCircle,
  CheckCircle,
  Globe,
  Smartphone,
  Laptop,
} from 'lucide-react'

export default function OmniResponsePage() {
  // Key Features data from image 1
  const keyFeatures = [
    {
      category: "Queue treatments",
      icon: Clock,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      features: [
        "Skills and Language based routing",
        "Queue actions/rules",
        "Call back in queue (CBIQ) and Abandoned Callbacks",
        "SMS Keyword Responder"
      ]
    },
    {
      category: "Agent experience",
      icon: Users,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      features: [
        "Web-based UX",
        "Downloadable client",
        "Browser-based softphone",
        "PBX phone support",
        "Call disposition and call notes",
        "DND codes (agent state)",
        "Screenpop/agent scripting support",
        "Contact history display",
        "Canned responses"
      ]
    },
    {
      category: "AI-Driven Solutions",
      icon: Brain,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      features: [
        "Call transcription and summarization",
        "Sentiment analysis",
        "Topic detection and reporting"
      ]
    },
    {
      category: "Channel types",
      icon: Globe,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      features: [
        "Voice",
        "SMS",
        "WebChat",
        "Email",
        "Facebook for Business"
      ]
    },
    {
      category: "Quality assurance",
      icon: Shield,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      features: [
        "Call recording",
        "Coaching and silent monitoring",
        "Post-call Survey"
      ]
    },
    {
      category: "Dashboards and reporting",
      icon: BarChart3,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      features: [
        "Standardize reports",
        "Custom reports",
        "Report subscriptions",
        "Customizable dashboard",
        "Real-time agent dashboards",
        "Queue dashboards",
        "Export data for external analytics"
      ]
    }
  ]

  // Third-party integrations from image 2
  const integrations = [
    {
      name: "Hubspot full integration",
      icon: "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?q=80&w=100&auto=format&fit=crop",
    },
    {
      name: "CRM: Salesforce and more",
      icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=100&auto=format&fit=crop",
    },
    {
      name: "Microsoft Teams",
      icon: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=100&auto=format&fit=crop",
    },
    {
      name: "Cloud storage (AWS, Google, Azure, SFTP, FTPS)",
      icon: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=100&auto=format&fit=crop",
    },
    {
      name: "AI-powered speech services",
      icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=100&auto=format&fit=crop",
    },
    {
      name: "WFM support",
      icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=100&auto=format&fit=crop",
    },
    {
      name: "Chatbot support",
      icon: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=100&auto=format&fit=crop",
    }
  ]

  // Other features from image 2
  const otherFeatures = [
    {
      icon: Phone,
      title: "Outbound dialer campaigns (SMS, voice)",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Database,
      title: "List management with import",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      icon: Users,
      title: "Contact manager",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Lock,
      title: "Single sign-on support",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: Shield,
      title: "Enhanced security with 2FA",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: RefreshCw,
      title: "Continued expansion of industry standard features with quarterly releases",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      icon: Layers,
      title: "Redundant/HA architecture for maximum uptime",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900"
        aria-label="OmniResponse - Contact Center Solution"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-emerald-900" aria-hidden="true" />

        {/* Background image */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover opacity-[0.60] object-center"
            priority
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/85 via-blue-900/75 to-emerald-900/85" aria-hidden="true" />
        </div>

        {/* Blur orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full container px-3 sm:px-3 lg:px-0 mx-auto pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-20 sm:pb-28 lg:pb-24 flex flex-col items-center justify-center text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-emerald-300 text-sm font-medium mb-6">
            Omni-Channel Contact Center
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            OmniResponse
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl px-2 sm:px-0">
            Manage interactions across channels with a feature-rich contact center solution
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative section-padding bg-white overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-emerald-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full mb-4">
                Complete Contact Center Solution
              </span>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
                Create a high-quality inbound and outbound communications experience for your customers and employees.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8 text-center">
                Our feature-rich Contact Center solution expands on basic call center functionality to deliver advanced capabilities—such as the ability to see full customer history with each interaction, no matter if it's SMS, chat, email or voice—with a clean and intuitive interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
    {/* Demo Video Section */}
<section className="relative section-padding bg-linear-to-b from-gray-50 to-white overflow-hidden">
  <div className="absolute inset-0" aria-hidden="true">
    <div className="absolute top-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-blue-500/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
    <div className="absolute bottom-0 right-0 w-[225px] h-[225px] sm:w-[350px] sm:h-[350px] bg-emerald-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
  </div>

  <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto">
    <div className="text-center max-w-3xl mx-auto mb-8">
      <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 font-semibold rounded-full mb-4">
        See It In Action
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Watch OmniResponse Demo
      </h2>
      <p className="text-gray-600">
        See how our contact center solution transforms customer interactions
      </p>
    </div>

    <div className="max-w-4xl mx-auto">
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-black">
        <video
          className="absolute inset-0 w-full h-full object-contain"
          controls
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/OmniResponse Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Video caption */}
      <p className="text-center text-sm text-gray-500 mt-4">
        Watch how OmniResponse streamlines multi-channel customer communications
      </p>
    </div>
  </div>
</section>

      {/* Key Features Section */}
      <section className="relative section-padding bg-white overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 font-semibold rounded-full mb-4">
              Key Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-gray-600">
              Comprehensive features designed to enhance every aspect of your contact center operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${feature.iconBg} px-6 py-4 border-b border-gray-200`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${feature.iconBg} rounded-lg flex items-center justify-center`}>
                      <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.category}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start gap-2 text-sm">
                        <span className="text-emerald-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third-party Integrations Section */}
      <section className="relative section-padding bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-blue-500/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-[225px] h-[225px] sm:w-[350px] sm:h-[350px] bg-emerald-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full mb-4">
              Seamless Integration
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Third-party Integrations
            </h2>
            <p className="text-gray-600">
              Connect with the tools you already use
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:shadow-md transition-shadow">
                <div className="relative w-12 h-12 mx-auto mb-3 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={integration.icon}
                    alt={integration.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-700">{integration.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Features Section */}
      <section className="relative section-padding bg-white overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-emerald-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-purple-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 font-semibold rounded-full mb-4">
              Additional Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Other Features
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {otherFeatures.map((feature, index) => (
              <div key={index} className={`${feature.bgColor} rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow`}>
                <div className="flex items-start gap-3">
                  <div className={`shrink-0 w-10 h-10 ${feature.bgColor} rounded-lg flex items-center justify-center`}>
                    <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{feature.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding bg-linear-to-br from-blue-900 via-emerald-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Contact Center?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the power of OmniResponse's comprehensive communication solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 group text-lg"
              >
                CONTACT US TO LEARN MORE
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-lg"
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}