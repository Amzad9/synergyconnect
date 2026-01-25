import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Quote',
  description:
    'Request a custom quote for Synergy Connect cloud-hosted phone systems and VoIP. Get pricing tailored to your business.',
  keywords: [
    'cloud PBX quote',
    'VoIP pricing',
    'get quote',
    'phone system quote',
    'Synergy Connect',
  ],
  openGraph: {
    title: 'Get Quote | Synergy Connect – Cloud Communications',
    description: 'Request a custom quote for cloud-hosted phone systems and VoIP.',
    type: 'website',
    url: '/quote',
  },
  alternates: {
    canonical: '/quote',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
