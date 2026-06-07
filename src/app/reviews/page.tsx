// /reviews — Reviews & Customer Stories
// IA Page Goal: convert the shop's single biggest competitive advantage (187
// combined verified 5-star reviews) into a dedicated, indexable trust asset.
// H1: "Why Santa Rosa Drivers Rate Us 4.9 Stars — In Their Own Words"
//
// NOTE: review quotes sourced from src/lib/data/shop.ts are illustrative
// PLACEHOLDERS matching the documented review themes (honest diagnoses, fair
// pricing, no unnecessary upsells, friendly team) — swap for verbatim
// Google/Yelp excerpts before this goes client-facing in production.

import type { Metadata } from 'next'
import Link from 'next/link'
import StarRating from '@/components/shared/StarRating'
import ReviewCard from '@/components/reviews/ReviewCard'
import FinalCTA from '@/components/shared/FinalCTA'
import { reviews, shopInfo, type Review } from '@/lib/data/shop'

export const metadata: Metadata = {
  title: '4.9-Star Reviews | Sonoma County Auto Care, Santa Rosa',
  description:
    'See why Santa Rosa drivers rate Sonoma County Auto Care 4.9 stars across 187 verified Google and Yelp reviews — honest diagnoses, fair pricing, and a team that treats you right.',
}

const themes: Review['theme'][] = ['Honest Diagnoses', 'Fair Pricing', 'Friendly Team']

export default function ReviewsPage() {
  return (
    <>
      {/* ===== Aggregate rating hero ===== */}
      <section className="bg-shop-navy text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-display uppercase tracking-widest text-shop-amber border border-shop-amber/40 px-4 py-1.5 rounded-base mb-6">
            187 Verified Reviews &middot; Google + Yelp
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
            Why Santa Rosa Drivers Rate Us{' '}
            <span className="text-shop-amber">4.9 Stars</span> — In Their Own Words
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            We don&rsquo;t ask you to take our word for it. Here&rsquo;s what real Santa Rosa drivers say
            after their visit — more verified five-star reviews than any other shop in town,
            including the 30-year incumbents.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="font-display font-bold text-4xl text-shop-amber mb-1">
                {shopInfo.ratings.combined.score}★
              </p>
              <p className="text-sm text-white/60">{shopInfo.ratings.combined.count} combined reviews</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <StarRating rating={shopInfo.ratings.google.score} size="sm" className="mb-2" />
              <p className="font-display font-semibold text-lg">{shopInfo.ratings.google.score} on Google</p>
              <p className="text-sm text-white/60">{shopInfo.ratings.google.count} verified reviews</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <StarRating rating={shopInfo.ratings.yelp.score} size="sm" className="mb-2" />
              <p className="font-display font-semibold text-lg">{shopInfo.ratings.yelp.score} on Yelp</p>
              <p className="text-sm text-white/60">{shopInfo.ratings.yelp.count} verified reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Reviews grouped by theme ===== */}
      <section className="bg-shop-cream py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {themes.map((theme) => {
            const themedReviews = reviews.filter((r) => r.theme === theme)
            if (themedReviews.length === 0) return null

            return (
              <div key={theme}>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-shop-navy">
                    {theme}
                  </h2>
                  <span className="h-px flex-1 bg-shop-navy/10" />
                  <span className="text-xs font-display uppercase tracking-wide text-shop-amber-dark">
                    {themedReviews.length} review{themedReviews.length !== 1 ? 's' : ''}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {themedReviews.map((review) => (
                    <ReviewCard key={`${review.source}-${review.author}`} review={review} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <FinalCTA
        heading="Experience It Yourself — Book Today"
        subheading="The next five-star review could be yours. See what 187 Santa Rosa drivers already know."
        ctaLabel="Schedule an Appointment"
        ctaHref="/schedule-an-appointment"
      />

      {/* Secondary nudge toward the brand story */}
      <section className="bg-shop-gray py-12 px-6 text-center">
        <p className="text-shop-navy/70 max-w-xl mx-auto">
          Curious who&rsquo;s actually behind the wrench?{' '}
          <Link href="/about" className="text-shop-amber-dark font-display font-semibold hover:text-shop-navy transition-colors duration-200">
            Meet Chris &amp; Scott →
          </Link>
        </p>
      </section>
    </>
  )
}
