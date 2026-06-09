'use client'

// Home hero — V3 Fisher-inspired full-bleed hero
// Full-viewport height with background photo + teal/orange gradient overlay
// Zoom animation on background, entry animations on copy elements
// Social proof card pinned bottom-right (absolute)

import Link from 'next/link'

const heroStyles = `
  .hero-social-proof-card {
    display: none;
  }
  @media (min-width: 1024px) {
    .hero-social-proof-card {
      display: block !important;
      position: absolute !important;
      bottom: 2rem;
      right: 2rem;
      width: 280px;
    }
  }
`

export default function Hero() {
  return (
    <>
      <style>{heroStyles}</style>
      <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '700px',
        height: '100vh',
        maxHeight: '900px',
        paddingTop: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      {/* Full-bleed background: gradient + photo + zoom animation */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(135deg, rgba(26,61,79,0.5) 0%, rgba(232,116,74,0.15) 100%), url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          animation: 'zoomHero 25s ease-in-out infinite',
        }}
      />
      {/* Dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          zIndex: 1,
        }}
      />

      <div
        className="hero-inner"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3rem 1.5rem',
          width: '100%',
          minHeight: '100%',
        }}
      >
        {/* Hero copy — left column */}
        <div style={{ flex: '0 1 55%', color: 'white' }}>
          {/* Badge */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: 'rgba(232,116,74,0.2)',
              color: 'white',
              border: '1.5px solid rgba(232,116,74,0.7)',
              padding: '0.5rem 1.25rem',
              borderRadius: '0.75rem',
              marginBottom: '1.5rem',
              backdropFilter: 'blur(8px)',
            }}
          >
            Santa Rosa, CA · Est. 20+ Years
          </span>

          {/* H1 */}
          <h1
            style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontSize: 'clamp(1.875rem, 4vw, 3.25rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '2rem',
              letterSpacing: '-0.5px',
              animation: 'slideInLeft 0.8s ease-out',
            }}
          >
            Santa Rosa&apos;s Highest-Rated Auto Repair
            <span
              style={{
                color: 'var(--orange)',
                display: 'block',
                animation: 'slideInRight 0.8s ease-out 0.2s both',
              }}
            >
              Honest Work. No Surprises.
            </span>
          </h1>

          {/* CTA buttons */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '2rem',
              animation: 'fadeInUp 0.8s ease-out 0.8s both',
            }}
          >
            <a
              href="https://calendly.com/sonomaautocare/appointment"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                border: 'none',
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-block',
                background: 'linear-gradient(135deg, var(--orange), var(--orange-dark))',
                color: 'white',
                boxShadow: '0 8px 24px rgba(232,116,74,0.35)',
                transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                cursor: 'pointer',
              }}
            >
              Schedule Now
            </a>
            <Link
              href="#reviews"
              style={{
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-block',
                border: '2px solid rgba(255,255,255,0.5)',
                color: 'white',
                background: 'transparent',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                cursor: 'pointer',
              }}
            >
              See Our Reviews
            </Link>
          </div>
        </div>
      </div>

      {/* Social proof card — hidden on mobile, shown on desktop */}
      <div
        className="hero-social-proof-card"
        style={{
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '1rem',
          padding: '1.5rem',
          boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
          zIndex: 3,
          animation: 'slideUp 0.8s ease-out 0.4s both',
        }}
      >
        {/* Avatar stack */}
        <div style={{ display: 'flex', marginBottom: '1rem' }}>
          {[
            { initial: 'S', title: 'Sarah' },
            { initial: 'M', title: 'Mike' },
            { initial: 'J', title: 'Jennifer' },
            { initial: '+50', title: '+50 more' },
          ].map((av, i) => (
            <div
              key={av.initial}
              title={av.title}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--teal), var(--orange))',
                border: '2px solid white',
                marginLeft: i === 0 ? 0 : '-0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '0.7rem',
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {av.initial}
            </div>
          ))}
        </div>
        <div
          style={{
            color: 'var(--teal)',
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '1.25rem',
            marginBottom: '0.5rem',
          }}
        >
          187 Reviews
        </div>
        <div
          style={{
            color: 'var(--gray-dark)',
            fontSize: '0.875rem',
            lineHeight: 1.5,
          }}
        >
          Customers trust us to{' '}
          <strong style={{ color: 'var(--orange)', fontWeight: 600 }}>tell the truth</strong>{' '}
          about their cars.
        </div>
      </div>
    </section>
    </>
  )
}
