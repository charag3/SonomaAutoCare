// Reusable "coming soon" placeholder shell — used for IA pages that exist in
// the sitemap (so nav links resolve cleanly) but aren't fully built out in
// this prototype pass. Keeps every stub on-brand instead of a bare 404-style
// blank page.

import Link from 'next/link'

type StubPageProps = {
  h1: string
  description: string
  ctaLabel?: string
  ctaHref?: string
}

export default function StubPage({
  h1,
  description,
  ctaLabel = 'Schedule an Appointment',
  ctaHref = '/schedule-an-appointment',
}: StubPageProps) {
  return (
    <section className="bg-shop-navy text-white py-24 px-6 min-h-[60vh] flex items-center">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-xs font-display uppercase tracking-widest text-shop-amber border border-shop-amber/40 px-4 py-1.5 rounded-base mb-6">
          More Coming Soon
        </span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
          {h1}
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={ctaHref}
            className="inline-block bg-shop-amber hover:bg-shop-amber-dark text-shop-navy-dark font-display font-semibold px-7 py-3.5 rounded-base transition-colors duration-200"
          >
            {ctaLabel}
          </Link>
          <Link
            href="/"
            className="inline-block border border-white/25 hover:border-shop-amber hover:text-shop-amber text-white font-display font-medium px-7 py-3.5 rounded-base transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
