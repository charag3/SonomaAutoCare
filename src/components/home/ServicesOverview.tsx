// ServicesOverview — V3 services section
// Dark teal background, 4-column grid, featured card spans 2 cols
// Floating orb pseudo-element via inline div (no CSS pseudo in React inline styles)

import Link from 'next/link'

const servicesData = [
  {
    featured: true,
    title: 'Engine Diagnostics',
    description:
      'Modern cars need modern tools. We diagnose problems accurately and fast — with transparent pricing before we turn a wrench.',
    cta: 'Get Started →',
    href: '/services/engine-diagnostics',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '28px', height: '28px', color: 'white' }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    featured: false,
    title: 'Oil Change & Maintenance',
    description: 'Keep your engine running clean and efficient with our maintenance services.',
    cta: 'Learn more →',
    href: '/services/oil-change-maintenance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '28px', height: '28px', color: 'var(--orange)' }}>
        <path d="M9 12h6m-6 4h6M5 8h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V9a1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    featured: false,
    title: 'Brake Repair',
    description: 'Safe brakes are non-negotiable. We inspect and repair with precision.',
    cta: 'Learn more →',
    href: '/services/brake-repair',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '28px', height: '28px', color: 'var(--orange)' }}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    featured: false,
    title: 'Transmission Repair',
    description: 'Transmission problems? We handle repairs for all makes and models.',
    cta: 'Learn more →',
    href: '/services/transmission-repair',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '28px', height: '28px', color: 'var(--orange)' }}>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    ),
  },
  {
    featured: false,
    title: 'Performance Tune-Up',
    description: 'Keep your car running like new with a comprehensive tune-up.',
    cta: 'Learn more →',
    href: '/services/tune-ups',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '28px', height: '28px', color: 'var(--orange)' }}>
        <path d="M12 1l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 1z" />
      </svg>
    ),
  },
]

export default function ServicesOverview() {
  return (
    <section
      id="services"
      style={{
        background: 'var(--teal)',
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
          bottom: 0,
          right: '-200px',
          width: '600px',
          height: '600px',
          background: 'rgba(232,116,74,0.08)',
          borderRadius: '50%',
          zIndex: 0,
          animation: 'float 25s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section intro */}
        <div style={{ maxWidth: '600px', marginBottom: '3rem' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--orange-light)',
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(232,116,74,0.25)',
              borderRadius: '0.5rem',
              marginBottom: '0.75rem',
            }}
          >
            Full-Service Auto Repair
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              letterSpacing: '-0.5px',
            }}
          >
            Whatever&apos;s Wrong, We Tell You the Truth
          </h2>
          <p style={{ fontSize: '1.05rem', opacity: 0.9, lineHeight: 1.7 }}>
            From routine maintenance to nervous repairs — every visit gets the same
            plain-English explanation before any work begins.
          </p>
        </div>

        {/* Services grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {servicesData.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* View all */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/services"
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
              transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  featured,
  title,
  description,
  cta,
  href,
  icon,
}: {
  featured: boolean
  title: string
  description: string
  cta: string
  href: string
  icon: React.ReactNode
}) {
  if (featured) {
    return (
      <div
        style={{
          gridColumn: 'span 2',
          padding: '2.5rem',
          borderRadius: '1rem',
          background: 'linear-gradient(135deg, var(--orange), var(--orange-dark))',
          border: 'none',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          cursor: 'pointer',
        }}
      >
        {/* Inner orb */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '400px',
            height: '400px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '50%',
            animation: 'float 20s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '0.75rem',
              background: 'rgba(255,255,255,0.25)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
            }}
          >
            {icon}
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'white',
              marginBottom: '0.75rem',
            }}
          >
            {title}
          </h3>
          <p style={{ fontSize: '1rem', opacity: 0.95, marginBottom: '1rem', lineHeight: 1.6 }}>
            {description}
          </p>
          <Link
            href={href}
            style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.9)',
              textDecoration: 'none',
            }}
          >
            {cta}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '1.5rem',
        borderRadius: '1rem',
        border: '1.5px solid rgba(232,116,74,0.3)',
        transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 1,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.background = 'rgba(255,255,255,0.15)'
        el.style.borderColor = 'var(--orange)'
        el.style.transform = 'translateY(-6px)'
        el.style.boxShadow = '0 16px 40px rgba(232,116,74,0.3)'
        const iconEl = el.querySelector<HTMLDivElement>('.svc-icon')
        if (iconEl) {
          iconEl.style.background = 'var(--orange)'
          iconEl.style.transform = 'scale(1.15)'
          iconEl.style.boxShadow = '0 8px 20px rgba(232,116,74,0.3)'
        }
        const svgEl = el.querySelector<SVGElement>('.svc-icon svg')
        if (svgEl) svgEl.style.color = 'white'
        const linkEl = el.querySelector<HTMLAnchorElement>('.svc-link')
        if (linkEl) linkEl.style.color = 'white'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.background = 'rgba(255,255,255,0.1)'
        el.style.borderColor = 'rgba(232,116,74,0.3)'
        el.style.transform = ''
        el.style.boxShadow = ''
        const iconEl = el.querySelector<HTMLDivElement>('.svc-icon')
        if (iconEl) {
          iconEl.style.background = 'rgba(232,116,74,0.2)'
          iconEl.style.transform = ''
          iconEl.style.boxShadow = ''
        }
        const svgEl = el.querySelector<SVGElement>('.svc-icon svg')
        if (svgEl) svgEl.style.color = 'var(--orange)'
        const linkEl = el.querySelector<HTMLAnchorElement>('.svc-link')
        if (linkEl) linkEl.style.color = 'var(--orange-light)'
      }}
    >
      {/* Icon */}
      <div
        className="svc-icon"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '0.75rem',
          background: 'rgba(232,116,74,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
          transition: 'all 0.3s',
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          fontSize: '1.125rem',
          fontWeight: 600,
          color: 'white',
          marginBottom: '0.75rem',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '0.95rem',
          opacity: 0.9,
          marginBottom: '1rem',
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
      <Link
        href={href}
        className="svc-link"
        style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'var(--orange-light)',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'all 0.2s',
        }}
      >
        {cta}
      </Link>
    </div>
  )
}
