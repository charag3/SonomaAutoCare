// /fleet-services — Fleet & Small Business Vehicle Services
// IA H1: "Fleet & Small Business Vehicle Service in Santa Rosa — Keep Your Crew on the Road"
// Speaks directly to the Fleet Operator persona (Mike) — uncontested territory,
// no competitor in the matrix targets this segment directly.

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fleet Vehicle Service in Santa Rosa | Sonoma County Auto Care',
  description:
    'Fleet and small business vehicle service in Santa Rosa — priority scheduling, account relationships, and honest multi-vehicle care that keeps your crew on the road.',
}

const fleetPoints = [
  {
    title: 'Priority Scheduling',
    description:
      'Downtime costs you money. We work to get your vehicles diagnosed and back on the road fast — not stuck in a queue behind one-off visits.',
  },
  {
    title: 'One Shop, One Relationship',
    description:
      'Stop re-explaining your situation every time. We learn your fleet, your trucks, and your priorities — and treat you like the long-term account you are.',
  },
  {
    title: 'Built for Local Trades',
    description:
      'Landscaping crews, contractors, delivery and courier businesses — we understand that every vehicle off the road is a direct hit to your income.',
  },
]

export default function FleetServicesPage() {
  return (
    <>
      <section className="bg-shop-navy text-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-display uppercase tracking-widest text-shop-amber border border-shop-amber/40 px-4 py-1.5 rounded-base mb-6">
            For Local Trade &amp; Small Business Owners
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
            Fleet &amp; Small Business Vehicle Service in Santa Rosa — Keep Your Crew on the Road
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Every vehicle sitting in your lot instead of on a job site is money walking out
            the door. We get that — and we build our process around getting you back to work,
            honestly and fast.
          </p>
        </div>
      </section>

      <section className="bg-shop-cream py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {fleetPoints.map((point) => (
            <div key={point.title} className="bg-white rounded-xl shadow-card p-6">
              <h2 className="font-display font-semibold text-lg text-shop-navy mb-2">
                {point.title}
              </h2>
              <p className="text-sm text-shop-navy/65 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-shop-amber py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-shop-navy-dark mb-4">
            Talk to Us About Your Fleet
          </h2>
          <p className="text-shop-navy-dark/75 text-lg mb-8 max-w-xl mx-auto">
            Tell us how many vehicles you run and what you need — we&rsquo;ll set up an account
            relationship built around keeping your business moving.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-shop-navy hover:bg-shop-navy-dark text-white font-display font-semibold px-8 py-4 rounded-base transition-colors duration-200"
          >
            Talk to Us About Your Fleet
          </Link>
        </div>
      </section>
    </>
  )
}
