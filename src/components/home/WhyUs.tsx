// WhyUs — V3 "A Reputation Built on Honesty"
// White background, 3 pillar cards with orange top border
// Hover: lift + top border turns teal

const pillars = [
  {
    title: 'Honest Diagnostics',
    description:
      "We tell you what's actually wrong with your car. No upsells. No surprises. Just the truth about your vehicle.",
  },
  {
    title: 'Fair Pricing',
    description:
      'You get transparent pricing before any work starts. No hidden fees. No shock bills. Ever.',
  },
  {
    title: '20+ Years Local',
    description:
      "We know Sonoma County and your car inside and out. That expertise is worth something.",
  },
]

export default function WhyUs() {
  return (
    <section
      id="why-us"
      style={{
        background: 'white',
        padding: '4rem 1.5rem',
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
            Our Difference
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
            A Reputation Built on Honesty
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
            We didn&apos;t buy a 4.9-star rating. We earned it by telling customers the truth,
            every time.
          </p>
        </div>

        {/* Pillar cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PillarCard({ title, description }: { title: string; description: string }) {
  return (
    <div
      style={{
        background: 'var(--cream)',
        padding: '2rem',
        borderRadius: '1rem',
        border: '1px solid var(--gray)',
        borderTop: '4px solid var(--orange)',
        position: 'relative',
        transition: 'all 0.3s',
        boxShadow: 'var(--shadow-sm)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'translateY(-8px)'
        el.style.boxShadow = 'var(--shadow-md)'
        el.style.borderTopColor = 'var(--teal)'
        el.style.background = 'white'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = ''
        el.style.boxShadow = 'var(--shadow-sm)'
        el.style.borderTopColor = 'var(--orange)'
        el.style.background = 'var(--cream)'
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          fontSize: '1.25rem',
          fontWeight: 700,
          color: 'var(--teal)',
          marginBottom: '0.75rem',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '0.95rem',
          color: 'var(--gray-dark)',
          opacity: 0.85,
          lineHeight: 1.7,
        }}
      >
        {description}
      </p>
    </div>
  )
}
