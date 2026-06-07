// /services/brake-repair — representative service detail page
// IA H1: "Brake Repair in Santa Rosa, CA — Fixed Right, Explained Clearly"
// This is the template-pattern page: ServicePageTemplate establishes the
// shape that transmission-repair, oil-change-maintenance, etc. would follow
// in a future pass.

import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import { services, reviews } from '@/lib/data/shop'

const service = services.find((s) => s.slug === 'brake-repair')!
const trustReview = reviews.find((r) => r.theme === 'Honest Diagnoses')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description:
    'Squeaking, grinding, or a soft pedal? Get an honest brake inspection in Santa Rosa from the shop with 187 verified five-star reviews — no unnecessary upsells, ever.',
}

export default function BrakeRepairPage() {
  return (
    <ServicePageTemplate
      service={service}
      diagnosticSteps={[
        'Test drive and listen — we confirm what you’re hearing or feeling before touching anything.',
        'Full inspection of pads, rotors, calipers, and lines — measured, not guessed.',
        'Plain-English readout: what’s worn, what’s fine, and what can wait until your next visit.',
        'A written estimate that matches the final bill — no surprise line items at pickup.',
      ]}
      trustReview={trustReview}
      ctaLabel="Get a Brake Inspection"
    />
  )
}
