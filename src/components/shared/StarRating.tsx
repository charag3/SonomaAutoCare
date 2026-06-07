// Reusable star rating display — renders N filled stars (rounded to nearest
// half) using inline SVG so we don't add an icon library dependency for one
// shape. Used on Home (trust bar), Footer, and Reviews page.

type StarRatingProps = {
  rating: number // e.g. 4.9
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-7 h-7',
}

function Star({ fill, sizeClass }: { fill: 'full' | 'half' | 'empty'; sizeClass: string }) {
  if (fill === 'full') {
    return (
      <svg viewBox="0 0 20 20" className={`${sizeClass} text-shop-amber fill-current`} aria-hidden="true">
        <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.77l-5.18 2.67.99-5.77L1.62 7.59l5.79-.84L10 1.5z" />
      </svg>
    )
  }
  if (fill === 'half') {
    return (
      <svg viewBox="0 0 20 20" className={`${sizeClass} text-shop-amber`} aria-hidden="true">
        <defs>
          <linearGradient id="half-star-fill">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.77l-5.18 2.67.99-5.77L1.62 7.59l5.79-.84L10 1.5z"
          fill="url(#half-star-fill)"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 20 20" className={`${sizeClass} text-shop-amber/30 fill-current`} aria-hidden="true">
      <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.77l-5.18 2.67.99-5.77L1.62 7.59l5.79-.84L10 1.5z" />
    </svg>
  )
}

export default function StarRating({ rating, size = 'md', className = '' }: StarRatingProps) {
  const sizeClass = sizeMap[size]
  const stars = Array.from({ length: 5 }, (_, i) => {
    const threshold = i + 1
    if (rating >= threshold) return 'full'
    if (rating >= threshold - 0.5) return 'half'
    return 'empty'
  }) as Array<'full' | 'half' | 'empty'>

  return (
    <div
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {stars.map((fill, i) => (
        <Star key={i} fill={fill} sizeClass={sizeClass} />
      ))}
    </div>
  )
}
