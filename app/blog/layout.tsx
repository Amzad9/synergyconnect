import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on cloud-hosted phone systems, call reporting for law firms, VoIP benefits, and unified communications. Stay ahead with Synergy Connect.',
  keywords: [
    'cloud PBX blog',
    'VoIP benefits',
    'call reporting law firms',
    'cloud phone system',
    'unified communications',
  ],
  openGraph: {
    title: 'Blog | Synergy Connect – Cloud Communications',
    description:
      'Insights on cloud-hosted phone systems, call reporting, and VoIP benefits.',
    type: 'website',
    url: '/blog',
  },
  alternates: {
    canonical: '/blog',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Synergy Connect Blog',
  description: 'Insights on cloud-hosted phone systems, VoIP, and unified communications.',
  url: 'https://synergyconnect.com/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Synergy Connect',
    url: 'https://synergyconnect.com',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      {children}
    </>
  )
}
