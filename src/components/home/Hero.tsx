// Home hero — V3 Fisher-inspired full-bleed hero
// Full-viewport height with background photo + teal/orange gradient overlay
// Zoom animation on background, entry animations on copy elements
// Social proof card pinned bottom-right (absolute)

import Link from 'next/link'

export default function Hero() {
  return (
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

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3rem 1.5rem',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3rem',
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
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '1.5rem',
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

          {/* Subheading */}
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              opacity: 0.95,
              marginBottom: '2rem',
              maxWidth: '500px',
              animation: 'fadeInUp 0.8s ease-out 0.4s both',
            }}
          >
            4.9 stars across 187 verified reviews. We don&apos;t upsell. We tell you
            what&apos;s actually wrong with your car — the truth, every time.
          </p>

          {/* Rating block */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              margin: '2rem 0',
              padding: '1.25rem',
              background: 'rgba(232,116,74,0.15)',
              borderLeft: '4px solid var(--orange)',
              borderRadius: '0.5rem',
              backdropFilter: 'blur(8px)',
              animation: 'fadeInUp 0.8s ease-out 0.6s both',
            }}
          >
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  style={{
                    color: 'var(--orange)',
                    fontSize: '1.25rem',
                    animation: 'popIn 0.6s ease-out both',
                    animationDelay: `${0.6 + i * 0.05}s`,
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            <span
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '1.5rem',
              }}
            >
              4.9
            </span>
            <span style={{ fontSize: '0.875rem', opacity: 0.75, flex: 1 }}>
              187 verified reviews
            </span>
          </div>

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

      {/* Social proof card — absolute, bottom-right, Fisher-style */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '1rem',
          padding: '1.5rem',
          boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
          zIndex: 3,
          animation: 'slideUp 0.8s ease-out 0.4s both',
          maxWidth: '280px',
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
  )
}
