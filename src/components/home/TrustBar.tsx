// Home "Trust bar" section — IA spec: live-style review snippets (Google +
// Yelp), star counts, "no unnecessary upsells" pull-quotes, link to /reviews

import Link from 'next/link'
import StarRating from '@/components/shared/StarRating'
import { reviews, shopInfo } from '@/lib/data/shop'

export default function TrustBar() {
  const featured = reviews.slice(0, 3)

  return (
    <section className="bg-shop-gray py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-display uppercase tracking-widest text-shop-amber-dark block mb-3">
            What Santa Rosa Is Saying
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-shop-navy mb-4">
            187 Verified Five-Star Reviews. One Reason: We Don&rsquo;t Upsell.
          </h2>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <StarRating rating={shopInfo.ratings.google.score} size="sm" />
              <span className="text-sm text-shop-navy/70">
                {shopInfo.ratings.google.score} on Google ({shopInfo.ratings.google.count})
              </span>
            </div>
            <div className="flex items-center gap-2">
              <StarRating rating={shopInfo.ratings.yelp.score} size="sm" />
              <span className="text-sm text-shop-navy/70">
                {shopInfo.ratings.yelp.score} on Yelp ({shopInfo.ratings.yelp.count})
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((review) => (
            <blockquote
              key={`${review.source}-${review.author}`}
              className="bg-white rounded-xl shadow-card p-6 flex flex-col"
            >
              <StarRating rating={review.rating} size="sm" />
              <p className="text-shop-navy/80 text-sm leading-relaxed mt-3 mb-4 flex-1">
                &ldquo;{review.quote}&rdquo;
              </p>
              <footer className="text-xs text-shop-navy/50 font-medium">
                — {review.author}, via {review.source}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/reviews"
            className="inline-block font-display font-semibold text-shop-amber-dark hover:text-shop-navy transition-colors duration-200 text-sm uppercase tracking-wide"
          >
            Read All the Reviews →
          </Link>
        </div>
      </div>
    </section>
  )
}
