// /services — Auto Repair Services (Hub)
// IA H1: "Full-Service Auto Repair in Santa Rosa — From Oil Changes to Transmissions"
// IA structure: intro → service grid (cards link to each sub-page) →
// "Not sure what's wrong?" diagnostic block
//
// Brake Repair is the only fully-built sub-page this pass; the rest route to
// on-brand stubs that follow the same template shape for a future build.

import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceIcon from '@/components/services/ServiceIcon'
import FinalCTA from '@/components/shared/FinalCTA'
import { services } from '@/lib/data/shop'

export const metadata: Metadata = {
  title: 'Auto Repair Services in Santa Rosa | Sonoma County Auto Care',
  description:
    'Full-service auto repair in Santa Rosa, CA — brakes, transmissions, oil changes, engine diagnostics, and tune-ups. All makes and models, explained honestly.',
}

export default function ServicesHubPage() {
  return (
    <>
      <section className="bg-shop-navy text-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
            Full-Service Auto Repair in Santa Rosa — From Oil Changes to Transmissions
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Whatever you drive — American truck, German import, hybrid, or EV — we work on it,
            and we explain it the same honest way every time. No specialist niche, no
            one-size-fits-all guesswork. Just straight answers about your specific car.
          </p>
        </div>
      </section>

      <section className="bg-shop-cream py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-xl shadow-card p-6 hover:-translate-y-1 transition-transform duration-200 flex flex-col"
              >
                <div className="w-12 h-12 rounded-base bg-shop-amber/10 text-shop-amber-dark flex items-center justify-center mb-4 group-hover:bg-shop-amber group-hover:text-white transition-colors duration-200">
                  <ServiceIcon icon={service.icon} className="w-6 h-6" />
                </div>
                <h2 className="font-display font-semibold text-lg text-shop-navy mb-2">
                  {service.name}
                </h2>
                <p className="text-sm text-shop-navy/65 leading-relaxed flex-1">
                  {service.summary}
                </p>
                <span className="mt-4 text-sm font-display font-medium text-shop-amber-dark group-hover:text-shop-navy transition-colors duration-200">
                  {service.slug === 'brake-repair' ? 'View full details →' : 'Learn more →'}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* "Not sure what's wrong?" — speaks to Don & Jordan's anxiety */}
      <section className="bg-shop-gray py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-shop-navy mb-4">
            Not Sure What&rsquo;s Wrong? That&rsquo;s Exactly What We&rsquo;re Here For.
          </h2>
          <p className="text-shop-navy/70 mb-8">
            You don&rsquo;t need to self-diagnose before you call. Tell us what you&rsquo;re hearing,
            feeling, or worried about — we&rsquo;ll run an honest diagnostic and walk you through
            exactly what&rsquo;s going on, in plain English, before any work begins.
          </p>
          <Link
            href="/schedule-an-appointment"
            className="inline-block bg-shop-amber hover:bg-shop-amber-dark text-shop-navy-dark font-display font-semibold px-8 py-4 rounded-base transition-colors duration-200"
          >
            Book a Diagnostic Check
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
