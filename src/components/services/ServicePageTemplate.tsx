// Reusable service detail page template — shape established here with
// Brake Repair (the IA's first-listed, representative service sub-page).
// Future service pages (transmission-repair, oil-change-maintenance, etc.)
// can follow this same section pattern: hero → symptoms → diagnostic
// approach → trust tie-in → CTA.
//
// IA section structure per service sub-page:
//   - Symptoms checklist
//   - What we check / how we diagnose (plain-English, no jargon)
//   - Why drivers trust us with [service] — tie to "no unnecessary upsells"
//   - CTA → /schedule-an-appointment

import Link from 'next/link'
import StarRating from '@/components/shared/StarRating'
import ServiceIcon from '@/components/services/ServiceIcon'
import FinalCTA from '@/components/shared/FinalCTA'
import type { Review, Service } from '@/lib/data/shop'

type ServicePageTemplateProps = {
  service: Service
  /** Plain-English diagnostic steps — what the team actually checks first */
  diagnosticSteps: string[]
  /** A review (ideally theme: "Honest Diagnoses") that anchors the trust section */
  trustReview: Review
  /** CTA copy specific to this service, e.g. "Get a Brake Inspection" */
  ctaLabel: string
}

export default function ServicePageTemplate({
  service,
  diagnosticSteps,
  trustReview,
  ctaLabel,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="bg-shop-navy text-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-shop-amber transition-colors duration-200 mb-6"
          >
            ← All Services
          </Link>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-base bg-shop-amber/15 text-shop-amber flex items-center justify-center flex-shrink-0">
              <ServiceIcon icon={service.icon} className="w-7 h-7" />
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
              {service.h1}
            </h1>
          </div>
          <p className="text-white/70 text-lg max-w-2xl">{service.summary}</p>
        </div>
      </section>

      {/* ===== Symptoms checklist ===== */}
      {service.symptoms && service.symptoms.length > 0 && (
        <section className="bg-shop-cream py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-shop-navy mb-2">
              Notice Any of These?
            </h2>
            <p className="text-shop-navy/65 mb-8 max-w-xl">
              If your car is telling you something, it&rsquo;s worth listening to. Here&rsquo;s what we
              hear about most before a {service.shortName.toLowerCase()} visit:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.symptoms.map((symptom) => (
                <li
                  key={symptom}
                  className="flex items-start gap-3 bg-white rounded-xl shadow-card p-4"
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-shop-amber/15 text-shop-amber-dark flex items-center justify-center text-xs font-bold">
                    !
                  </span>
                  <span className="text-sm text-shop-navy/80">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ===== Diagnostic approach ===== */}
      <section className="bg-shop-gray py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-shop-navy mb-4">
              How We Actually Diagnose It
            </h2>
            <p className="text-shop-navy/70 leading-relaxed">
              No guesswork, no scare tactics — just a straight look at what&rsquo;s actually
              happening with your car, explained in plain English before anything gets
              ordered or replaced.
            </p>
          </div>
          <ol className="space-y-4">
            {diagnosticSteps.map((step, i) => (
              <li key={step} className="flex gap-4 bg-white rounded-xl shadow-card p-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-shop-navy text-white font-display font-semibold text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-sm text-shop-navy/80 leading-relaxed pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== Trust tie-in ===== */}
      <section className="bg-shop-navy text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">
            Why Santa Rosa Trusts Us With {service.shortName}
          </h2>
          <blockquote className="bg-white/5 border border-white/10 rounded-xl p-8">
            <StarRating rating={trustReview.rating} size="md" className="justify-center mb-4" />
            <p className="text-white/85 text-lg leading-relaxed mb-4">
              &ldquo;{trustReview.quote}&rdquo;
            </p>
            <footer className="text-sm text-white/50">
              — {trustReview.author}, via {trustReview.source}
            </footer>
          </blockquote>
          <p className="text-white/60 mt-6 text-sm">
            That&rsquo;s the same &ldquo;no unnecessary upsells&rdquo; standard every customer gets —
            on brakes, transmissions, or anything else that comes through our bay doors.
          </p>
        </div>
      </section>

      <FinalCTA
        heading={ctaLabel}
        subheading="Tell us what you're hearing, feeling, or worried about — we'll take it from there, honestly."
        ctaLabel={ctaLabel}
        ctaHref="/schedule-an-appointment"
      />
    </>
  )
}
