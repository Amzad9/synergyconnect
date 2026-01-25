import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Trusted from './components/Trusted'
import CommunicationHero from './components/CommunicationHero'
import PBXPossibilities from './components/PBXPossibilities'
import PricingStructure from './components/PricingStructure'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <CommunicationHero />
      <Features />
      <PBXPossibilities />
      <PricingStructure />
      <Trusted />
      <ContactSection />
      <CTA />
    </>
  )
}