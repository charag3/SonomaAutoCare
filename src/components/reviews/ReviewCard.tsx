// Single review card — used in themed groups on the Reviews page

import StarRating from '@/components/shared/StarRating'
import type { Review } from '@/lib/data/shop'

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <blockquote className="bg-white rounded-xl shadow-card p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-3">
        <StarRating rating={review.rating} size="sm" />
        <span className="text-xs font-display uppercase tracking-wide text-shop-navy/40">
          {review.source}
        </span>
      </div>
      <p className="text-shop-navy/80 text-sm leading-relaxed flex-1">
        &ldquo;{review.quote}&rdquo;
      </p>
      <footer className="text-xs text-shop-navy/50 font-medium mt-4">
        — {review.author}
      </footer>
    </blockquote>
  )
}
