// TrustBar — V3 "Why Drivers Keep Coming Back" reviews section
// White background with orange top border
// 3 review cards with hover lift + orange top bar reveal

import Link from 'next/link'

const reviewsData = [
  {
    quote:
      "No upsells, no surprises. They diagnosed my transmission issue honestly and the price was fair. I've been back three times since.",
    author: 'Mike S.',
    source: 'Google Review',
  },
  {
    quote:
      "Been going here for 3 years. They've never pushed me into anything I didn't need. Just honest mechanics doing solid work.",
    author: 'Jennifer T.',
    source: 'Yelp Review',
  },
  {
    quote:
      "Most honest shop in Sonoma. They told me my brakes were fine, not trying to upsell unnecessary service. Trust these guys completely.",
    author: 'David K.',
    source: 'Google Review',
  },
]

export default function TrustBar() {
  return (
    <section
      id="reviews"
      style={{
        background: 'white',
        padding: '4rem 1.5rem',
        borderTop: '4px solid var(--orange)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--orange)',
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(232,116,74,0.1)',
              borderRadius: '0.5rem',
              marginBottom: '0.75rem',
            }}
          >
            Customer Stories
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              marginBottom: '0.75rem',
              color: 'var(--teal)',
              letterSpacing: '-0.5px',
            }}
          >
            Why Drivers Keep Coming Back
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--gray-dark)',
              opacity: 0.8,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            No upsells. No surprises. Just honest mechanics doing solid work.
          </p>
        </div>

        {/* Review cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          {reviewsData.map((review) => (
            <ReviewCard key={review.author} {...review} />
          ))}
        </div>

        {/* Read all link */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/reviews"
            style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--orange)',
              textDecoration: 'none',
            }}
          >
            Read All 187 Reviews →
          </Link>
        </div>
      </div>
    </section>
  )
}

function ReviewCard({
  quote,
  author,
  source,
}: {
  quote: string
  author: string
  source: string
}) {
  return (
    <div
      style={{
        background: 'var(--cream)',
        padding: '2rem',
        borderRadius: '1rem',
        border: '2px solid var(--gray)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'translateY(-10px)'
        el.style.boxShadow = 'var(--shadow-lg)'
        el.style.borderColor = 'var(--orange)'
        el.style.background = 'white'
        const bar = el.querySelector<HTMLSpanElement>('.review-top-bar')
        if (bar) bar.style.opacity = '1'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = ''
        el.style.boxShadow = 'var(--shadow-sm)'
        el.style.borderColor = 'var(--gray)'
        el.style.background = 'var(--cream)'
        const bar = el.querySelector<HTMLSpanElement>('.review-top-bar')
        if (bar) bar.style.opacity = '0'
      }}
    >
      {/* Orange top bar (reveals on hover) */}
      <span
        className="review-top-bar"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          background: 'linear-gradient(90deg, var(--orange), transparent)',
          opacity: 0,
          transition: 'opacity 0.3s',
        }}
      />

      {/* Stars */}
      <div style={{ display: 'flex', gap: '0.25rem' }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} style={{ color: 'var(--orange)', fontSize: '1.125rem' }}>
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p
        style={{
          fontSize: '1rem',
          color: 'var(--gray-dark)',
          lineHeight: 1.7,
          margin: '1rem 0',
          fontStyle: 'italic',
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <p
        style={{
          fontSize: '0.85rem',
          color: 'var(--gray-dark)',
          opacity: 0.7,
          fontWeight: 500,
        }}
      >
        — {author}
      </p>

      {/* Source */}
      <p
        style={{
          fontSize: '0.75rem',
          color: 'var(--orange)',
          opacity: 0.9,
          marginTop: '0.5rem',
          fontWeight: 600,
        }}
      >
        {source}
      </p>
    </div>
  )
}
