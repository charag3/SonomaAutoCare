// Reusable final CTA banner — used at the bottom of Home (and reusable on
// other pages if needed). IA spec for Home: "Book your appointment in under
// 2 minutes" → Schedule an Appointment

import Link from 'next/link'

type FinalCTAProps = {
  heading?: string
  subheading?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function FinalCTA({
  heading = 'Book Your Appointment in Under 2 Minutes',
  subheading = "Join the hundreds of Santa Rosa drivers who've made us the highest-rated shop in town.",
  ctaLabel = 'Schedule an Appointment',
  ctaHref = '/schedule-an-appointment',
}: FinalCTAProps) {
  return (
    <section className="bg-shop-amber py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-shop-navy-dark mb-3">
          {heading}
        </h2>
        <p className="text-shop-navy-dark/75 text-lg mb-8 max-w-xl mx-auto">
          {subheading}
        </p>
        <Link
          href={ctaHref}
          className="inline-block bg-shop-navy hover:bg-shop-navy-dark text-white font-display font-semibold px-8 py-4 rounded-base transition-colors duration-200"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  )
}
