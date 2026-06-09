// FinalCTAV2 — Forest Green + Cream

import Link from 'next/link'

type FinalCTAV2Props = {
  heading?: string
  subheading?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function FinalCTAV2({
  heading = 'Book Your Appointment in Under 2 Minutes',
  subheading = "Join the hundreds of Santa Rosa drivers who've made us the highest-rated shop in town.",
  ctaLabel = 'Schedule an Appointment',
  ctaHref = '/schedule-an-appointment',
}: FinalCTAV2Props) {
  return (
    <section className="bg-[#c9a86a] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2d4a3d] mb-3">
          {heading}
        </h2>
        <p className="text-[#2d4a3d]/75 text-lg mb-8 max-w-xl mx-auto">
          {subheading}
        </p>
        <Link
          href={ctaHref}
          className="inline-block bg-[#2d4a3d] hover:bg-[#1f3d31] text-white font-display font-semibold px-8 py-4 rounded-base transition-colors duration-200"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  )
}
