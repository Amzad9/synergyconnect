import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Synergy Connect in Turnersville, NJ. Call 609-350-5800, send a message, or visit us. Monday–Friday 8am–6pm, Saturday 9am–1pm.',
  keywords: [
    'contact Synergy Connect',
    'cloud PBX support',
    'VoIP contact',
    'Turnersville NJ',
    '609-350-5800',
  ],
  openGraph: {
    title: 'Contact Synergy Connect | Cloud Communications',
    description:
      'Get in touch—call 609-350-5800, send a message, or visit us in Turnersville, NJ. We’re here to help.',
    type: 'website',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Synergy Connect',
  description: 'Contact Synergy Connect for cloud-hosted phone systems and support.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Synergy Connect',
    url: 'https://synergyconnect.com',
    telephone: '+1-609-350-5800',
    faxNumber: '+1-866-567-9250',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Turnersville',
      addressRegion: 'NJ',
      postalCode: '08012',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  )
}
