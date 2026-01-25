import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Cloud PBX features from Synergy Connect: user, system, and group capabilities. One low price—no confusing bundles or complicated licensing.',
  keywords: [
    'cloud PBX features',
    'VoIP features',
    'Web Centrex',
    'business phone features',
    'call forwarding',
    'auto attendant',
  ],
  openGraph: {
    title: 'Features | Synergy Connect – Cloud Communications',
    description: 'User, system, and group features. All included for one low price.',
    type: 'website',
    url: '/features',
  },
  alternates: {
    canonical: '/features',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
