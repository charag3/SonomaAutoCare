// Home — / — IA spec section order:
//   Hero → Trust bar → Services overview → Why Us → Service area → Final CTA

import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import ServicesOverview from '@/components/home/ServicesOverview'
import WhyUs from '@/components/home/WhyUs'
import ServiceAreaCallout from '@/components/home/ServiceAreaCallout'
import FinalCTA from '@/components/shared/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyUs />
      <ServiceAreaCallout />
      <FinalCTA />
    </>
  )
}
