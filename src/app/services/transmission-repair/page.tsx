// /services/transmission-repair — stub (full build deferred to a later pass;
// brake-repair establishes the template pattern this page would follow next)

import type { Metadata } from 'next'
import StubPage from '@/components/shared/StubPage'
import { services } from '@/lib/data/shop'

const service = services.find((s) => s.slug === 'transmission-repair')!

export const metadata: Metadata = { title: service.metaTitle, description: service.summary }

export default function TransmissionRepairPage() {
  return (
    <StubPage
      h1={service.h1}
      description={`${service.summary} Full page detail coming soon — in the meantime, get in touch and we'll walk you through it directly.`}
      ctaLabel="Schedule a Transmission Check"
    />
  )
}
