import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Phone,
  MessageSquare,
  Video,
  Users,
  Clock,
  Zap,
  FileText,
  Download,
  Upload,
  Share2,
  Smartphone,
  Laptop,
  Globe,
  Mail,
  Mic,
  Brain,
  File,
  CheckCircle,
  PlayCircle,
  User,
  Bell,
  Settings,
  Menu,
  ChevronRight,
  PhoneCall,
  PhoneMissed,
  PhoneIncoming,
  PhoneOutgoing,
  Voicemail,
  MessageCircle,
  Calendar,
  Grid,
  BookOpen,
  Headphones,
  UserPlus,
  UserMinus,
  MapPin,
} from 'lucide-react'

export default function UCClientPage() {
  // Employee status data from image 1
  const employeeStatus = [
    { name: "Patrick Meehan", status: "On a Call", icon: PhoneCall, color: "text-blue-600", bgColor: "bg-blue-100" },
    { name: "Mary Smith", status: "Available", icon: User, color: "text-emerald-600", bgColor: "bg-emerald-100" },
    { name: "John Berry", status: "Do Not Disturb - Lunch Break", icon: UserMinus, color: "text-red-600", bgColor: "bg-red-100" },
  ]

  // Questions from image 1
  const questions = [
    "Have a staff of remote or hybrid workers who need to stay connected?",
    "Want to replace your desk phones without losing features?",
    "Want to use AI summaries for quick team sharing of call reports, to schedule follow-ups, use for training, and more?"
  ]

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900"
        aria-label="UC Client - ConnectUC"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-purple-900 to-blue-900" aria-hidden="true" />

        {/* Background image */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover opacity-[0.60] object-center"
            priority
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/85 via-purple-900/75 to-blue-900/85" aria-hidden="true" />
        </div>

        {/* Blur orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full container px-3 sm:px-3 lg:px-0 mx-auto pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-20 sm:pb-28 lg:pb-24 flex flex-col items-center justify-center text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-purple-300 text-sm font-medium mb-6">
            Unified Communications Client
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            UC Client / ConnectUC
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl px-2 sm:px-0">
            Stay connected with your customers wherever you are
          </p>
        </div>
      </section>

      {/* Overview Section with Employee Status */}
      <section className="relative section-padding bg-white overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div>
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 font-semibold rounded-full mb-4">
                Anywhere Communications
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Stay connected with your customers
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                Empowering your remote, hybrid, and mobile workers to take their communications anywhere is crucial. Unfortunately, many softphones are unintuitive and lack essential features like presence, integrated chat, and SMS.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our full-featured AI-powered UC Client is available for mobile, web, and desktop. It is tightly integrated with our UCaaS platform to provide all the business communications features that your team needs to work whenever they need to and wherever they are.
              </p>
            </div>

            {/* Right Column - Employee Status Cards */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                Team Status
              </h3>
              <div className="space-y-4">
                {employeeStatus.map((employee, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${employee.bgColor} rounded-full flex items-center justify-center`}>
                        <employee.icon className={`w-5 h-5 ${employee.color}`} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{employee.name}</div>
                        <div className="text-sm text-gray-500">{employee.status}</div>
                      </div>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-emerald-500' : 'bg-red-500'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Clients Section */}
      <section className="relative section-padding bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-purple-500/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-[225px] h-[225px] sm:w-[350px] sm:h-[350px] bg-blue-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 font-semibold rounded-full mb-4">
              Key Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete Communications Solution
            </h2>
          </div>

          {/* Clients */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6 text-purple-600" />
              Clients
            </h3>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-100 rounded-xl px-6 py-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-700">Web</span>
              </div>
              <div className="bg-emerald-100 rounded-xl px-6 py-3 flex items-center gap-2">
                <Laptop className="w-5 h-5 text-emerald-600" />
                <span className="font-medium text-gray-700">Desktop</span>
              </div>
              <div className="bg-purple-100 rounded-xl px-6 py-3 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-gray-700">Mobile (iOS and Android)</span>
              </div>
            </div>
          </div>

          {/* Voice Calls */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Phone className="w-6 h-6 text-blue-600" />
              Voice Calls
            </h3>
            <ul className="space-y-3 bg-white rounded-2xl p-6 border border-gray-200">
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>Rock-solid calling that you can rely on for your organization</span>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>Web, Desktop, and Mobile clients</span>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>Visual voicemail—Play, delete, and download voicemails with optional text transcription add-on</span>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>Call transfer—Intuitively transfer a call (unattended or attended) to any contact</span>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>Call parking—Extremely efficient auto and directed call parking with intuitive call pickup page</span>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>Call history with recordings - View all recent calls, filter by outgoing, incoming, or missed calls; and play or download call recordings</span>
              </li>
            </ul>
          </div>

          {/* Contact Management */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-emerald-600" />
              Contact Management
            </h3>
            <ul className="space-y-3 bg-white rounded-2xl p-6 border border-gray-200">
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>Company, shared and personal contacts</span>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>Ability to add contacts from call history and voicemail</span>
              </li>
            </ul>
          </div>

          {/* Collaboration */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Video className="w-6 h-6 text-purple-600" />
              Collaboration
            </h3>
            <ul className="space-y-3 bg-white rounded-2xl p-6 border border-gray-200">
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>Chat and business texting (SMS, shared SMS)</span>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>Meetings with HD video, screen sharing, subtitles, moderator controls and interactive whiteboarding (up to 500 attendees)</span>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>Presence—view co-worker status and set custom messages</span>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>Connect web-based CRMs and other applications</span>
              </li>
            </ul>
          </div>

          {/* Virtual Fax */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-orange-600" />
              Virtual Fax
            </h3>
            <ul className="space-y-3 bg-white rounded-2xl p-6 border border-gray-200">
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>Send and receive faxes</span>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>Upload files to send as fax</span>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>View history of sent and received faxes</span>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>Ability to configure multiple users to be cc'd on incoming faxes</span>
              </li>
            </ul>
          </div>

          {/* AI-Powered Features */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-indigo-600" />
              AI-Powered Features
            </h3>
            <ul className="space-y-3 bg-white rounded-2xl p-6 border border-gray-200">
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>Accurate and shareable call transcription with AI Summaries for quick review</span>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>Call summaries with key decisions and action items</span>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span>Detailed records for compliance and training</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="relative section-padding bg-white overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Not sure if you need a UC Client?
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Do you:
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg text-left">
              <ul className="space-y-4">
                {questions.map((question, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-emerald-600 text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{question}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-lg text-gray-800 font-semibold mt-6 text-center">
                If any of these sounds familiar, your business can benefit from our UC client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Contact Info */}
      <section className="relative section-padding bg-linear-to-br from-purple-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              CONTACT US TO LEARN MORE
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <p className="text-white text-lg font-semibold">(609)-350-5800</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <p className="text-white text-lg font-semibold">Washington Twp., NJ 08080</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <p className="text-white text-lg font-semibold">info@synergyconnect.org</p>
              </div>
            </div>

            <p className="text-white text-2xl mb-8">www.synergyconnect.org</p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 group text-lg"
            >
              Get Started with UC Client
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}