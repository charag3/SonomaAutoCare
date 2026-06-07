// /services/engine-diagnostics — stub (full build deferred; follows the same
// template pattern established on /services/brake-repair)

import type { Metadata } from 'next'
import StubPage from '@/components/shared/StubPage'
import { services } from '@/lib/data/shop'

const service = services.find((s) => s.slug === 'engine-diagnostics')!

export const metadata: Metadata = { title: service.metaTitle, description: service.summary }

export default function EngineDiagnosticsPage() {
  return (
    <StubPage
      h1={service.h1}
      description={`${service.summary} Full page detail coming soon — bring it in and let's find out together.`}
      ctaLabel="Get Your Car Diagnosed"
    />
  )
}
