'use client'

// ServiceAreaCallout — V3 teal gradient service area section
// 2-col grid: left = intro + area list with pulsing dots; right = map visual box

import Link from 'next/link'

const areas = [
  'Santa Rosa',
  'Sebastopol',
  'Healdsburg',
  'Rohnert Park',
  'Petaluma',
  'Cotati',
]

export default function ServiceAreaCallout() {
  return (
    <section
      id="area"
      style={{
        background: 'linear-gradient(135deg, var(--teal) 0%, var(--teal-light) 100%)',
        color: 'white',
        padding: '4rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floating orb */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-200px',
          right: '-200px',
          width: '500px',
          height: '500px',
          background: 'var(--orange)',
          borderRadius: '50%',
          opacity: 0.08,
          animation: 'float 30s ease-in-out infinite',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="area-v3-grid">
          {/* Left: intro + area list */}
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--orange-light)',
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'rgba(232,116,74,0.2)',
                borderRadius: '0.5rem',
                marginBottom: '0.75rem',
              }}
            >
              Proudly Local
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                fontWeight: 700,
                marginBottom: '1rem',
                letterSpacing: '-0.5px',
              }}
            >
              Serving Santa Rosa &amp; All of Sonoma County
            </h2>
            <p style={{ fontSize: '1rem', opacity: 0.95, marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Based at 518 College Ave, Santa Rosa — and worth the drive from anywhere in the
              county. We serve:
            </p>

            {/* Area list */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
              }}
            >
              {areas.map((area) => (
                <AreaItem key={area} city={area} />
              ))}
            </div>

            <Link
              href="/service-areas"
              style={{
                display: 'inline-block',
                marginTop: '2rem',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.5)',
                color: 'white',
                background: 'transparent',
                transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
              }}
            >
              See All Areas We Serve
            </Link>
          </div>

          {/* Right: map visual */}
          <div
            style={{
              aspectRatio: '1/1',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '1.5rem',
              border: '2px solid rgba(232,116,74,0.3)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Radial glow overlays */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(circle at 30% 30%, rgba(232,116,74,0.08) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(232,116,74,0.06) 0%, transparent 50%)',
              }}
            />
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                style={{
                  width: '80px',
                  height: '80px',
                  marginBottom: '1rem',
                  opacity: 0.9,
                  color: 'var(--orange)',
                  filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
                }}
                aria-hidden="true"
              >
                <path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <p
                style={{
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                518 College Ave
              </p>
              <p style={{ fontSize: '1rem', fontWeight: 600, marginTop: '0.75rem' }}>
                Santa Rosa, CA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AreaItem({ city }: { city: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        fontSize: '0.95rem',
        fontWeight: 500,
        transition: 'all 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.transform = 'translateX(8px)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.transform = ''
      }}
    >
      <span
        style={{
          width: '8px',
          height: '8px',
          background: 'var(--orange)',
          borderRadius: '50%',
          flexShrink: 0,
          boxShadow: '0 0 12px var(--orange)',
          animation: 'pulse 2s ease-in-out infinite',
        }}
      />
      {city}
    </div>
  )
}
