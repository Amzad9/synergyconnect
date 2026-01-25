// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'  
import Footer from './components/Footer'

// Option 1: Professional Sans-serif combination (Most modern)
import { Inter, Poppins, Manrope, Montserrat } from 'next/font/google'

// Option 2: Clean tech combination
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
})

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

// Option 3: Premium combination
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: 'Synergy Connect - Cloud-Based Communication Solutions | Unified Communications',
    template: '%s | Synergy Connect'
  },
  description: 'Transform your business communication with Synergy Connect\'s cloud-based phone system. Unified communications platform with VoIP, video conferencing, and enterprise features. Fast, reliable, and designed to unify your team.',
  keywords: [
    'cloud PBX',
    'unified communications',
    'VoIP phone system',
    'business phone system',
    'cloud communication',
    'video conferencing',
    'business VoIP',
    'hosted PBX',
    'cloud telephony',
    'enterprise communication'
  ],
  authors: [{ name: 'Synergy Connect' }],
  creator: 'Synergy Connect',
  publisher: 'Synergy Connect',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://synergyconnect.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://synergyconnect.com',
    siteName: 'Synergy Connect',
    title: 'Synergy Connect - Cloud-Based Communication Solutions',
    description: 'Transform your business communication with our cloud-based phone system. Unified communications platform with enterprise features.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Synergy Connect - Cloud Communication Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synergy Connect - Cloud-Based Communication Solutions',
    description: 'Transform your business communication with unified communications platform.',
    images: ['/og-image.jpg'],
    creator: '@synergyconnect',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

// Choose your preferred combination:
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-tech-blue focus:text-white focus:rounded-lg focus:font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tech-blue"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}