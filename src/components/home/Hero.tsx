// Home hero — IA spec: H1 + subhead reinforcing "4.9★ across 187 verified
// reviews", shop visual, CTA "Schedule an Appointment"
//
// No real shop photography exists yet — rather than fake a stock photo path
// that would 404, we build a styled abstract visual (gradient + decorative
// shapes echoing automotive/mechanical motifs) clearly in the brand palette.
// Swap for a real shop photo / hero video once assets are available.

import Link from 'next/link'
import StarRating from '@/components/shared/StarRating'
import { shopInfo } from '@/lib/data/shop'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-shop-navy text-white">
      {/* Decorative glows */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-shop-amber/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-shop-amber/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Copy column */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-widest text-shop-amber border border-shop-amber/40 px-4 py-1.5 rounded-base mb-6">
            Santa Rosa, CA &middot; Independently Owned
          </span>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-5">
            Santa Rosa&rsquo;s Highest-Rated Auto Repair Shop —{' '}
            <span className="text-shop-amber">Honest Work, No Surprises</span>
          </h1>

          <p className="text-white/75 text-lg md:text-xl max-w-xl mb-6 font-body">
            Rated <strong className="text-white">4.9 stars across 187 verified Google &amp; Yelp reviews</strong> —
            more than any other shop in town, including 30-year incumbents. That&rsquo;s not luck. That&rsquo;s what
            happens when a shop tells you the truth about your car, every single time.
          </p>

          <div className="flex items-center gap-3 mb-8">
            <StarRating rating={shopInfo.ratings.combined.score} size="md" />
            <span className="font-display font-semibold text-lg">{shopInfo.ratings.combined.score}</span>
            <span className="text-white/60 text-sm">
              ({shopInfo.ratings.combined.count} combined verified reviews)
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/schedule-an-appointment"
              className="inline-block bg-shop-amber hover:bg-shop-amber-dark text-shop-navy-dark font-display font-semibold px-7 py-3.5 rounded-base transition-colors duration-200"
            >
              Schedule an Appointment
            </Link>
            <Link
              href="/reviews"
              className="inline-block border border-white/25 hover:border-shop-amber hover:text-shop-amber text-white font-display font-medium px-7 py-3.5 rounded-base transition-colors duration-200"
            >
              See Why Drivers Trust Us
            </Link>
          </div>
        </div>

        {/* Visual column — styled placeholder (no real photography yet) */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-shop-charcoal to-shop-navy-dark border border-white/10 shadow-card flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-40 h-40 border-2 border-shop-amber rounded-full" />
              <div className="absolute bottom-1/4 right-1/4 w-28 h-28 border-2 border-white rounded-full" />
            </div>
            <div className="relative text-center px-8">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-20 h-20 mx-auto mb-4 text-shop-amber/80" aria-hidden="true">
                <circle cx="12" cy="12" r="9.5" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.5 5.5l-2 2M7.5 16.5l-2 2M18.5 18.5l-2-2M7.5 7.5l-2-2" />
              </svg>
              <p className="font-display text-white/50 text-sm uppercase tracking-widest">
                518 College Ave &middot; Santa Rosa, CA
              </p>
              <p className="text-white/30 text-xs mt-2">[ Shop photography to be added ]</p>
            </div>
          </div>

          {/* Floating rating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white text-shop-navy rounded-xl shadow-card px-5 py-4 hidden sm:block">
            <div className="flex items-center gap-2">
              <StarRating rating={4.9} size="sm" />
              <span className="font-display font-bold text-shop-navy">4.9</span>
            </div>
            <p className="text-xs text-shop-navy/60 mt-1">Google + Yelp combined</p>
          </div>
        </div>
      </div>
    </section>
  )
}
