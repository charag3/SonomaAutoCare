// /service-areas — Areas We Serve
// IA H1: "Proudly Serving Santa Rosa, Rohnert Park, Sebastopol, Windsor & All of Sonoma County"
// Captures adjacent-city searches without diluting the Santa Rosa primary signal.

import type { Metadata } from 'next'
import FinalCTA from '@/components/shared/FinalCTA'
import { serviceAreas, shopInfo } from '@/lib/data/shop'

export const metadata: Metadata = {
  title: 'Auto Repair Near Santa Rosa & Sonoma County | SCAC',
  description:
    'Sonoma County Auto Care proudly serves Santa Rosa, Rohnert Park, Sebastopol, Windsor, Cotati, and all of Sonoma County from our shop on College Ave.',
}

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-shop-navy text-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
            Proudly Serving Santa Rosa, Rohnert Park, Sebastopol, Windsor &amp; All of Sonoma County
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Based at {shopInfo.address.full} — and worth the drive from anywhere
            in the county. If you&rsquo;re close enough to read this, you&rsquo;re close enough to visit.
          </p>
        </div>
      </section>

      <section className="bg-shop-cream py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {serviceAreas.map((area) => (
            <div key={area.city} className="bg-white rounded-xl shadow-card p-6">
              <h2 className="font-display font-semibold text-lg text-shop-navy mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-shop-amber" />
                {area.city}
              </h2>
              <p className="text-sm text-shop-navy/65 leading-relaxed">{area.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA
        heading="We're Closer Than You Think"
        subheading="Wherever you're driving in from, the honest diagnosis and fair price are worth the trip."
        ctaLabel="Schedule a Visit"
        ctaHref="/schedule-an-appointment"
      />
    </>
  )
}
