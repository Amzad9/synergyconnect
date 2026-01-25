import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advantages',
  description:
    'Take advantage of Unified Communications (UC)—voice, presence, chat, and data integration. Unlimited auto attendants, mobility, plugins, and one low price with Synergy Connect.',
  keywords: [
    'Unified Communications',
    'UC',
    'cloud PBX advantages',
    'VoIP mobility',
    'call control',
    'Synergy Connect',
  ],
  openGraph: {
    title: 'Advantages | Synergy Connect – Cloud Communications',
    description:
      'Unified Communications, unlimited scale, mobility, plugins, and one low price. Improve productivity with Synergy Connect.',
    type: 'website',
    url: '/advantages',
  },
  alternates: {
    canonical: '/advantages',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AdvantagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
