// Top navigation — shared across all pages
// Desktop: full link row + amber "Schedule an Appointment" CTA
// Mobile: collapsible menu (client component for the toggle state)

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { shopInfo } from '@/lib/data/shop'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/fleet-services', label: 'Fleet Services' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-shop-navy text-white shadow-card">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-lg md:text-xl tracking-tight">
          Sonoma County <span className="text-shop-amber">Auto Care</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 font-body text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/schedule-an-appointment"
            className="inline-block bg-shop-amber hover:bg-shop-amber-dark text-shop-navy-dark font-display font-semibold text-sm px-5 py-2.5 rounded-base transition-colors duration-200"
          >
            Schedule an Appointment
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="lg:hidden inline-flex flex-col justify-center gap-1.5 w-9 h-9"
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav className="lg:hidden bg-shop-navy-dark border-t border-white/10 px-6 py-4 flex flex-col gap-3 font-body text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white py-1.5 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/schedule-an-appointment"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block text-center bg-shop-amber hover:bg-shop-amber-dark text-shop-navy-dark font-display font-semibold text-sm px-5 py-3 rounded-base transition-colors duration-200"
          >
            Schedule an Appointment
          </Link>
          <a
            href={shopInfo.phoneHref}
            className="text-center text-white/70 text-xs pt-1"
          >
            Or call {shopInfo.phone}
          </a>
        </nav>
      )}
    </header>
  )
}
