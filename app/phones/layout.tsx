import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phones',
  description:
    'Cloud-hosted phones and VoIP solutions from Synergy Connect. Desk phones, softphones, and mobile—flexible pricing for every business.',
  keywords: [
    'cloud phones',
    'VoIP phones',
    'desk phones',
    'softphones',
    'business phone system',
  ],
  openGraph: {
    title: 'Phones | Synergy Connect – Cloud Communications',
    description: 'Desk phones, softphones, and mobile. Flexible VoIP solutions and pricing.',
    type: 'website',
    url: '/phones',
  },
  alternates: {
    canonical: '/phones',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PhonesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
