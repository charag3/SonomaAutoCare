// /schedule-an-appointment — primary conversion page (every other page routes here)
// IA H1: "Book Your Appointment at Santa Rosa's Highest-Rated Auto Shop"
// IA structure: booking form → "what to expect" → hours/address/phone/map →
// trust reinforcement near submit
//
// No real booking system exists yet — this is a visual-only prototype form
// (see PrototypeForm). Wiring to a real scheduler is a later-pass item.

import type { Metadata } from 'next'
import StarRating from '@/components/shared/StarRating'
import PrototypeForm, { type PrototypeFormField } from '@/components/shared/PrototypeForm'
import { services, shopInfo, reviews } from '@/lib/data/shop'

export const metadata: Metadata = {
  title: 'Book an Appointment | Sonoma County Auto Care, Santa Rosa',
  description:
    'Schedule your appointment at Sonoma County Auto Care — Santa Rosa’s highest-rated auto repair shop. Honest diagnostics, fair pricing, in under two minutes.',
}

const fields: PrototypeFormField[] = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Smith', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(707) 555-0100', required: true },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'jane@email.com' },
  {
    name: 'service',
    label: 'What do you need help with?',
    type: 'select',
    placeholder: 'Select a service',
    options: [...services.map((s) => s.name), 'Not sure — need a diagnostic'],
    required: true,
  },
  { name: 'preferredDate', label: 'Preferred Date', type: 'date' },
  {
    name: 'notes',
    label: 'Tell us what’s going on',
    type: 'textarea',
    placeholder: 'e.g. "Squeaking when I brake, especially in the morning"',
  },
]

const expectations = [
  'We confirm your appointment by phone or text — no waiting and wondering.',
  'When you arrive, we walk the car with you and explain what we’re checking and why.',
  'You get a written estimate before any work begins — no surprises on the final bill.',
  'First time here? Just say so — we’ll walk you through everything, start to finish.',
]

const trustReview = reviews[0]

export default function ScheduleAppointmentPage() {
  return (
    <>
      <section className="bg-shop-navy text-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
            Book Your Appointment at Santa Rosa&rsquo;s Highest-Rated Auto Shop
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Tell us what&rsquo;s going on and when works for you — we&rsquo;ll confirm the rest.
            Most requests get a reply the same business day.
          </p>
        </div>
      </section>

      <section className="bg-shop-cream py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form column */}
          <div className="lg:col-span-3">
            <PrototypeForm
              fields={fields}
              submitLabel="Request Appointment"
              confirmationMessage="We'll reach out by phone or text to confirm your appointment time — usually within one business day."
            />

            {/* Trust reinforcement near submit, per IA spec */}
            <div className="mt-6 bg-white/60 border border-shop-navy/10 rounded-xl p-5 flex items-start gap-3">
              <StarRating rating={trustReview.rating} size="sm" className="mt-0.5 flex-shrink-0" />
              <p className="text-sm text-shop-navy/70 italic">
                &ldquo;{trustReview.quote}&rdquo;
                <span className="block not-italic text-xs text-shop-navy/40 mt-1">
                  — {trustReview.author}, via {trustReview.source}
                </span>
              </p>
            </div>
          </div>

          {/* Info column */}
          <div className="lg:col-span-2 space-y-6">
            {/* What to expect */}
            <div className="bg-white rounded-xl shadow-card p-6">
              <h2 className="font-display font-semibold text-lg text-shop-navy mb-4">What to Expect</h2>
              <ul className="space-y-3">
                {expectations.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-shop-navy/70">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-shop-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours, address, phone */}
            <div className="bg-shop-navy text-white rounded-xl shadow-card p-6">
              <h2 className="font-display font-semibold text-lg mb-4">Visit or Call Us</h2>
              <address className="not-italic text-sm space-y-1.5 mb-4">
                <p>{shopInfo.address.full}</p>
                <p>
                  <a href={shopInfo.phoneHref} className="text-shop-amber hover:text-white transition-colors duration-200">
                    {shopInfo.phone}
                  </a>
                </p>
              </address>
              <div className="text-sm space-y-1 text-white/70">
                {shopInfo.hours.map((h) => (
                  <p key={h.days}>
                    <span className="text-white font-medium">{h.days}:</span> {h.time}
                  </p>
                ))}
              </div>
              <p className="text-xs text-white/30 mt-4">[ Map embed to be added ]</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
