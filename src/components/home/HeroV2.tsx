// HeroV2 — Forest Green + Cream variation
// Same structure as Hero, different palette

import Link from 'next/link'
import StarRating from '@/components/shared/StarRating'
import { shopInfo } from '@/lib/data/shop'

export default function HeroV2() {
  return (
    <section className="relative overflow-hidden bg-[#2d4a3d] text-white">
      {/* Decorative glows — green tones */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-[#c9a86a]/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#c9a86a]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Copy column */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-widest text-[#c9a86a] border border-[#c9a86a]/40 px-4 py-1.5 rounded-base mb-10">
            Santa Rosa, CA &middot; Independently Owned
          </span>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-5xl leading-snug mb-8">
            Santa Rosa&rsquo;s Highest-Rated Auto Repair Shop —{' '}
            <span className="text-[#c9a86a]">Honest Work, No Surprises</span>
          </h1>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/schedule-an-appointment"
              className="inline-block bg-[#c9a86a] hover:bg-[#b89450] text-[#2d4a3d] font-display font-semibold px-7 py-3.5 rounded-base transition-colors duration-200"
            >
              Schedule an Appointment
            </Link>
            <Link
              href="/reviews"
              className="inline-block border border-white/25 hover:border-[#c9a86a] hover:text-[#c9a86a] text-white font-display font-medium px-7 py-3.5 rounded-base transition-colors duration-200"
            >
              See Why Drivers Trust Us
            </Link>
          </div>
        </div>

        {/* Visual column */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#1f3d31] to-[#2d4a3d] border border-white/10 shadow-card flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-40 h-40 border-2 border-[#c9a86a] rounded-full" />
              <div className="absolute bottom-1/4 right-1/4 w-28 h-28 border-2 border-white rounded-full" />
            </div>
            <div className="relative text-center px-8">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-20 h-20 mx-auto mb-4 text-[#c9a86a]/80" aria-hidden="true">
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
          <div className="absolute -bottom-6 -left-6 bg-[#c9a86a] text-[#2d4a3d] rounded-xl shadow-card px-5 py-4 hidden sm:block">
            <div className="flex items-center gap-2">
              <StarRating rating={4.9} size="sm" />
              <span className="font-display font-bold text-[#2d4a3d]">4.9</span>
            </div>
            <p className="text-xs text-[#2d4a3d]/60 mt-1">Google + Yelp combined</p>
          </div>
        </div>
      </div>
    </section>
  )
}
