'use client'

// Frost pill navbar — V3 Fisher-inspired
// Position: absolute over the hero (transparent, overlays the full-bleed image)
// Center: pill container with sliding highlight pill on hover
// Right: orange CTA button linking to Calendly

import { useState, useRef } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/#why-us', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/schedule-an-appointment', label: 'Contact' },
]

export default function Nav() {
  const listRef = useRef<HTMLUListElement>(null)
  const [pill, setPill] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  })

  function handleItemEnter(e: React.MouseEvent<HTMLLIElement>) {
    if (!listRef.current) return
    const itemRect = e.currentTarget.getBoundingClientRect()
    const listRect = listRef.current.getBoundingClientRect()
    setPill({
      left: itemRect.left - listRect.left,
      width: itemRect.width,
      opacity: 1,
    })
  }

  function handleListLeave() {
    setPill((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <header
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        background: 'transparent',
        color: 'white',
        padding: '0.875rem 1.5rem',
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            letterSpacing: '-0.5px',
            whiteSpace: 'nowrap',
            color: 'white',
            textDecoration: 'none',
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          }}
        >
          Sonoma County Auto Care
        </Link>

        {/* Pill nav */}
        <nav
          style={{ flex: 1, margin: '0 2rem', display: 'flex', justifyContent: 'center' }}
        >
          <ul
            ref={listRef}
            onMouseLeave={handleListLeave}
            style={{
              position: 'relative',
              display: 'flex',
              listStyle: 'none',
              margin: 0,
              padding: '4px',
              borderRadius: '9999px',
              border: '1.5px solid rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.07)',
            }}
          >
            {/* Sliding pill */}
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '4px',
                left: `${pill.left}px`,
                width: `${pill.width}px`,
                height: 'calc(100% - 8px)',
                borderRadius: '9999px',
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.22)',
                opacity: pill.opacity,
                transition:
                  'left 0.22s cubic-bezier(0.4,0,0.2,1), width 0.22s cubic-bezier(0.4,0,0.2,1), opacity 0.16s ease',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />

            {links.map((link) => (
              <li
                key={link.href}
                onMouseEnter={handleItemEnter}
                style={{ position: 'relative', zIndex: 2 }}
              >
                <Link
                  href={link.href}
                  style={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    letterSpacing: '0.03em',
                    padding: '0.45rem 1.1rem',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.18s',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.color =
                      'rgba(255,255,255,0.8)'
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA button */}
        <a
          href="https://calendly.com/sonomaautocare/appointment"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'rgba(232,116,74,0.92)',
            color: 'white',
            padding: '0.575rem 1.4rem',
            borderRadius: '2rem',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.8125rem',
            letterSpacing: '0.02em',
            boxShadow: '0 4px 14px rgba(232,116,74,0.35)',
            display: 'inline-flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            border: '1px solid rgba(255,255,255,0.15)',
            transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.transform = 'translateY(-2px)'
            el.style.boxShadow = '0 6px 20px rgba(232,116,74,0.5)'
            el.style.background = 'var(--orange)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.transform = ''
            el.style.boxShadow = '0 4px 14px rgba(232,116,74,0.35)'
            el.style.background = 'rgba(232,116,74,0.92)'
          }}
        >
          Request <span style={{ marginLeft: '0.5rem' }}>→</span>
        </a>
      </div>
    </header>
  )
}
