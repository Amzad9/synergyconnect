import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Brain,
  Zap,
  BarChart3,
  MessageSquare,
  HeartHandshake,
  ShoppingBag,
  Stethoscope,
  Headphones,
  FileText,
  Mic,
  Sparkles,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Download,
  PlayCircle,
  AlertCircle,
} from 'lucide-react'

export default function PowerOfAIPage() {
  // AI features from image 3
  const aiFeatures = [
    {
      category: "Call Capture",
      icon: FileText,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      features: [
        "Call transcription: Provides a written record of the call with timestamps.",
        "Live transcription: Get full text of live conversations, available for callers and queued voicemail.",
        "Call summarization: Summarizes key points of a call."
      ]
    },
    {
      category: "Call Assist",
      icon: Mic,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      features: [
        "AI prompts: Provide inputs of instructions, in the form of questions, to help guide agents toward the desired result.",
        "Score assist: Quality scoring with automated compliance checking and rapid performance feedback loop.",
        "AI wrap-up: Call summary generated during wrap-up with suggestions for next steps.",
        "Live call monitoring: Monitor for keywords and raise an alarm so a supervisor can coach the agent (whisper/barge) or take the call.*"
      ],
      footnote: "* Coming soon"
    },
    {
      category: "Advanced Analysis",
      icon: BarChart3,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      features: [
        "Sentiment analysis: Analyzes the sentiment expressed during the call.",
        "Topic detection and reporting: Identifies the main topics discussed in the call.",
        "Sentiment trend: Visualizes how sentiment shifts throughout a call using a sparkline.",
        "Sentiment trajectory: Summarizes the sentiment change over time for the entire interaction.",
        "Utterance playback for transcripts: In call recordings with transcripts, each utterance includes its own playback control buttons and sentiment emoticon.",
        "AI insights reporting and dashboards: Create actionable reports, graphs, and dashboards from your AI-distilled data."
      ]
    }
  ]

  // Industry examples from updated content
  const industryExamples = [
    {
      industry: "Healthcare",
      icon: Stethoscope,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      description: "Healthcare organizations can speed triage of urgent cases, improve patient experience, and ensure compliant interactions:",
      benefits: [
        "Detect emotional tone in patient calls to help care teams prioritize urgent cases and improve bedside manner.",
        "Flag sensitive topics or HIPAA-related breaches."
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
      alt: "Healthcare professional with stethoscope"
    },
    {
      industry: "Retail and E-commerce",
      icon: ShoppingBag,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      description: "Retail and e-commerce businesses can accelerate customer issue resolution and create smoother shopping experiences:",
      benefits: [
        "Identify top contact drivers (like 'payment issues' or 'delivery delays') to adjust operations and message accordingly.",
        "Correlate changes in sentiment with promotions or logistics issues."
      ],
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop",
      alt: "Online shopping on mobile device"
    },
    {
      industry: "Contact Centers",
      icon: Headphones,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      description: "Contact centers can shorten wait times, provide more empathetic service, and deliver proactive issue resolution:",
      benefits: [
        "Use call transcriptions/summaries and sentiment to flag recurring issues for faster resolution.",
        "Use sentiment insights and topic trends to provide proactive coaching and make staffing decisions."
      ],
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800&auto=format&fit=crop",
      alt: "Modern contact center with agents"
    }
  ]

  // Benefits from image 1
  const aiBenefits = [
    {
      title: "Workflow enhancements",
      icon: Zap,
      benefits: [
        "Create concise overviews of call interactions",
        "Determine customer sentiment",
        "Identify key topics"
      ]
    },
    {
      title: "Flexible insight generation",
      icon: Sparkles,
      benefits: [
        "Get automatic or on-demand insights",
        "Customize reporting from insights data"
      ]
    },
    {
      title: "Operational benefits",
      icon: TrendingUp,
      benefits: [
        "Empower busy managers",
        "Identify trends in customer sentiment and common issues",
        "Get valuable data for decision-making"
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900"
        aria-label="The Power of AI"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900" aria-hidden="true" />

        {/* Background image */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover opacity-[0.60] object-center"
            priority
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/85 via-purple-900/75 to-slate-900/85" aria-hidden="true" />
        </div>

        {/* Blur orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full container px-3 sm:px-3 lg:px-0 mx-auto pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-20 sm:pb-28 lg:pb-24 flex flex-col items-center justify-center text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-purple-300 text-sm font-medium mb-6">
            The Future of Communication
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            The Power of AI
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl px-2 sm:px-0">
            Unlock the transformative potential of artificial intelligence in your business communications
          </p>
        </div>
      </section>

      {/* AI Transformation Section - From image 1 */}
      <section className="relative section-padding bg-white overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 font-semibold rounded-full mb-4">
                The Transformation of Communication through AI
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Unlock the Power of AI
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                AI is revolutionizing our methods of communication, collaboration, and business operations. No longer a concept of the future, AI is now effortlessly woven into the tools and platforms we utilize daily – particularly in business communications.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Enhancing Knowledge Sharing</h3>
                  <p className="text-gray-600">AI facilitates information exchange and empowers informed decision-making.</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Streamlining Workflows</h3>
                  <p className="text-gray-600">It optimizes processes and boosts productivity.</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                AI creates tangible benefits at every level of an organization. These advancements are not just shaping tomorrow; they are readily available today, enabling your business to communicate more intelligently, operate more efficiently, and connect more effectively than ever before.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What can AI do for you?</h3>

              {/* AI Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-6 my-8">
                {aiBenefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className={`w-12 h-12 ${index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-purple-100' : 'bg-emerald-100'} rounded-lg flex items-center justify-center mb-4`}>
                      <benefit.icon className={`w-6 h-6 ${index === 0 ? 'text-blue-600' : index === 1 ? 'text-purple-600' : 'text-emerald-600'}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                    <ul className="space-y-2">
                      {benefit.benefits.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section - From image 3 */}
      <section className="relative section-padding bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-blue-500/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-[225px] h-[225px] sm:w-[350px] sm:h-[350px] bg-purple-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 font-semibold rounded-full mb-4">
              AI-Powered Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Intelligent Communication Tools
            </h2>
            <p className="text-gray-600">
              Comprehensive AI features designed to transform your business communications
            </p>
          </div>

          <div className="space-y-8">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
                <div className={`${feature.iconBg} px-6 py-4 border-b border-gray-200`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${feature.iconBg} rounded-lg flex items-center justify-center`}>
                      <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.category}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start gap-3">
                        <span className="text-purple-500 mt-1.5">•</span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {feature.footnote && (
                    <p className="text-sm text-gray-500 mt-4 italic">{feature.footnote}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8">
            More AI features are continually added to our solutions.
          </p>
        </div>
      </section>

      {/* Industry Examples Section - Updated with new header and Synergy Connect intro */}
      <section className="relative section-padding bg-white overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-emerald-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 font-semibold rounded-full mb-4">
              Industry Applications
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How can you use our AI-powered solutions?
            </h2>
          </div>

          {/* Industry Examples */}
          <div className="space-y-12 mb-16">
            {industryExamples.map((example, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
                <div className={`p-8 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className={`w-14 h-14 ${example.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <example.icon className={`w-7 h-7 ${example.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{example.industry}</h3>
                  <p className="text-gray-600 mb-4">{example.description}</p>
                  <ul className="space-y-3">
                    {example.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start gap-3">
                        <span className="text-emerald-500 mt-1.5">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative h-[300px] md:h-full ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <Image
                    src={example.image}
                    alt={example.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Synergy Connect AI-Powered Features Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-linear-to-br from-purple-50 via-blue-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-purple-100">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                AI-Powered Features Available from Synergy Connect
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                Synergy Connect is committed to providing our partners with AI-powered capabilities—embedded throughout our portfolio of solutions—that deliver real benefits to your customers and your own business.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These features, combined with Synergy Connect's competitive pricing, comprehensive omnichannel support, and scalable infrastructure, give you a significant edge over your competitors.
              </p>
              
              {/* Decorative element */}
              <div className="flex justify-center mt-8">
                <div className="inline-flex gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding bg-linear-to-br from-purple-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Communications?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the power of AI-driven communication solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
              >
                Get Started with AI
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
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