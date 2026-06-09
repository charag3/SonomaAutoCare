// FinalCTA — V3 orange gradient banner
// linear-gradient(135deg, orange → orange-dark) with radial overlay
// White "Book Now" button linking to Calendly

type FinalCTAProps = {
  heading?: string
  subheading?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function FinalCTA({
  heading = 'Schedule Your Appointment Today',
  subheading = 'Join the hundreds of Santa Rosa drivers who trust us to tell the truth.',
  ctaLabel = 'Book Now',
  ctaHref = 'https://calendly.com/sonomaautocare/appointment',
}: FinalCTAProps) {
  const isExternal = ctaHref.startsWith('http')

  return (
    <section
      id="contact"
      style={{
        background: 'linear-gradient(135deg, var(--orange) 0%, var(--orange-dark) 100%)',
        padding: '3.5rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial overlays */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(26,61,79,0.08) 0%, transparent 50%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2
          style={{
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            color: 'white',
            marginBottom: '0.75rem',
            letterSpacing: '-0.5px',
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            color: 'rgba(255,255,255,0.95)',
            marginBottom: '2rem',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6,
          }}
        >
          {subheading}
        </p>
        <a
          href={ctaHref}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            borderRadius: '0.75rem',
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '1rem',
            textDecoration: 'none',
            background: 'white',
            color: 'var(--orange)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.transform = 'translateY(-3px)'
            el.style.boxShadow = '0 12px 36px rgba(0,0,0,0.3)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.transform = ''
            el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)'
          }}
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  )
}
