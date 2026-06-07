// /contact — Contact Us
// IA H1: "Contact Sonoma County Auto Care — 518 College Ave, Santa Rosa, CA"
// IA structure: address/phone/hours/map → simple contact form → links to
// /schedule-an-appointment and /fleet-services

import type { Metadata } from 'next'
import Link from 'next/link'
import PrototypeForm, { type PrototypeFormField } from '@/components/shared/PrototypeForm'
import { shopInfo } from '@/lib/data/shop'

export const metadata: Metadata = {
  title: 'Contact Sonoma County Auto Care | Santa Rosa, CA',
  description:
    'Contact Sonoma County Auto Care at 518 College Ave, Santa Rosa, CA. Call, email, or send a message — we respond the same business day.',
}

const fields: PrototypeFormField[] = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Smith', required: true },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'jane@email.com', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(707) 555-0100' },
  {
    name: 'message',
    label: 'How can we help?',
    type: 'textarea',
    placeholder: 'Tell us what you need — we read every message ourselves.',
    required: true,
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="bg-shop-navy text-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
            Contact Sonoma County Auto Care — {shopInfo.address.full}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Have a question before you book? Need to talk through something specific?
            Reach out — a real person reads every message.
          </p>
        </div>
      </section>

      <section className="bg-shop-cream py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form column */}
          <div className="lg:col-span-3">
            <PrototypeForm
              fields={fields}
              submitLabel="Send Message"
              confirmationMessage="We typically reply within one business day — sooner if it sounds urgent."
            />
          </div>

          {/* NAP + map + routing links */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-shop-navy text-white rounded-xl shadow-card p-6">
              <h2 className="font-display font-semibold text-lg mb-4">Visit, Call, or Write</h2>
              <address className="not-italic text-sm space-y-1.5 mb-4">
                <p>{shopInfo.address.street}</p>
                <p>{shopInfo.address.city}, {shopInfo.address.state} {shopInfo.address.zip}</p>
                <p className="pt-1.5">
                  <a href={shopInfo.phoneHref} className="text-shop-amber hover:text-white transition-colors duration-200">
                    {shopInfo.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${shopInfo.email}`} className="text-shop-amber hover:text-white transition-colors duration-200">
                    {shopInfo.email}
                  </a>
                </p>
              </address>
              <div className="text-sm space-y-1 text-white/70 mb-4">
                {shopInfo.hours.map((h) => (
                  <p key={h.days}>
                    <span className="text-white font-medium">{h.days}:</span> {h.time}
                  </p>
                ))}
              </div>
              <p className="text-xs text-white/30">[ Map embed to be added ]</p>
            </div>

            {/* Routing per IA: links to /schedule-an-appointment and /fleet-services */}
            <div className="bg-white rounded-xl shadow-card p-6 space-y-3">
              <p className="text-sm text-shop-navy/70">
                Ready to book instead of asking first?
              </p>
              <Link
                href="/schedule-an-appointment"
                className="block text-center bg-shop-amber hover:bg-shop-amber-dark text-shop-navy-dark font-display font-semibold px-6 py-3 rounded-base transition-colors duration-200"
              >
                Schedule an Appointment
              </Link>
              <p className="text-sm text-shop-navy/70 pt-2">
                Calling about multiple vehicles for your business?
              </p>
              <Link
                href="/fleet-services"
                className="block text-center border border-shop-navy/15 hover:border-shop-amber text-shop-navy font-display font-medium px-6 py-3 rounded-base transition-colors duration-200"
              >
                Explore Fleet Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
