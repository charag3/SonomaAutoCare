// /services/oil-change-maintenance — stub (full build deferred; follows the
// same template pattern established on /services/brake-repair)

import type { Metadata } from 'next'
import StubPage from '@/components/shared/StubPage'
import { services } from '@/lib/data/shop'

const service = services.find((s) => s.slug === 'oil-change-maintenance')!

export const metadata: Metadata = { title: service.metaTitle, description: service.summary }

export default function OilChangeMaintenancePage() {
  return (
    <StubPage
      h1={service.h1}
      description={`${service.summary} Full page detail coming soon — book your visit and we'll take it from there.`}
      ctaLabel="Book a Maintenance Visit"
    />
  )
}
