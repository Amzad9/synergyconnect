import Link from 'next/link'
import { 
  Phone, Mail, MapPin, 
  Facebook, Twitter, Linkedin, Youtube,
  Instagram,
  MessageSquare, FileText, Smartphone, DollarSign,
  Shield, Headphones, Cloud, Zap
} from 'lucide-react'

const Footer = () => {
  const socialIcons = [
    { name: 'Facebook', icon: Facebook, color: 'hover:bg-blue-600 hover:border-blue-600', url: 'https://www.facebook.com/profile.php?id=100078708703398#' },
    { name: 'LinkedIn', icon: Linkedin, color: 'hover:bg-blue-700 hover:border-blue-700', url: 'https://www.linkedin.com/company/synergyconnect-org/' },
    { name: 'YouTube', icon: Youtube, color: 'hover:bg-red-600 hover:border-red-600', url: 'https://www.youtube.com/channel/UChNhcZLOk0E9oReemmC9luA' },
    { name: 'Instagram', icon: Instagram, color: 'hover:bg-pink-500 hover:border-pink-500', url: 'https://www.instagram.com/synergy_connect/' },
  ]

  const features = [
    { icon: Cloud, title: 'Cloud PBX', desc: 'Advanced phone systems' },
    { icon: Shield, title: 'Secure', desc: 'Enterprise-grade security' },
    { icon: Headphones, title: '24/7 Support', desc: 'Always available' },
    { icon: Zap, title: 'Fast Setup', desc: 'Deploy in minutes' },
  ]

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-tech-blue/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-aqua/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-aqua/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-tech-blue/15 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto">
        
        <div className="py-16 border-b border-gray-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
            <div className="text-center lg:text-left">
              <Link href="/" className="inline-flex flex-col items-center lg:items-start gap-4 group">
              <Link href="/" className="flex items-center space-x-3 group">
              <img
                src="/logo2.png"
                height={20}
                width={170}
                className=""
                alt="Synergy Connect Logo"
                loading="eager"
              />
            </Link>
              </Link>
              <p className="text-gray-400 mt-4 max-w-md">
                Transforming business communications with innovative cloud solutions that drive growth and efficiency.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="text-center p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/80 transition-colors">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-br from-cyan-500/20 to-teal-500/20 rounded-full mb-3">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="font-semibold text-gray-100 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Middle Content Section */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Business Hours */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-100">
                BUSINESS HOURS
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="mb-3">
                    <span className="text-cyan-300 font-medium">Opening Days:</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-start gap-2">
                      <span className="text-gray-300 text-sm">Monday – Friday</span>
                      <span className="text-cyan-400 font-medium text-sm ms-2">8am to 6pm</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-start gap-2">
                      <span className="text-gray-300 text-sm">Saturday</span>
                      <span className="text-cyan-400 font-medium text-sm ms-2">9am to 1pm</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-800">
                  <h4 className="text-amber-400 font-medium mb-3">Vacations:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li className="flex items-start gap-2">
                      <span>All Sunday Days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>All Official Holidays</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Practice Areas */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-100">
                PRACTICE AREAS
              </h3>
              
              <nav className="space-y-3" aria-label="Practice areas">
                <Link href="/" className="group flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <span>Home</span>
                </Link>
                <Link href="/about" className="group flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <span>About Us</span>
                </Link>
                <Link href="/quote" className="group flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <span>Get a Quote</span>
                </Link>
                <Link href="/contact" className="group flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <span>Contact</span>
                </Link>
                <Link href="/support" className="group flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <span>Support</span>
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-100">
                CONTACT INFO
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 bg-linear-to-br from-cyan-500/20 to-cyan-500/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-medium">609-350-5800</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 bg-linear-to-br from-cyan-500/20 to-cyan-500/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Fax</p>
                    <p className="font-medium">866-567-9250</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 bg-linear-to-br from-cyan-500/20 to-cyan-500/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">contact@synergyconnect.org</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 bg-linear-to-br from-cyan-500/20 to-cyan-500/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="font-medium">Turnersville, NJ 08012</p>
                    <p className="text-sm text-gray-400 mt-1">United States of America</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links & Newsletter */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-100">
                STAY CONNECTED
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  {socialIcons.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className={`w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Synergy Connect. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Cloud Communication Solutions Provider
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer