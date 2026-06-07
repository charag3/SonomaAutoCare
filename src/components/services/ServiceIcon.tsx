// Lightweight inline-SVG icon set for the 5 core services — avoids adding an
// icon library dependency for a handful of shapes. Maps to the `icon` field
// on each Service record in src/lib/data/shop.ts.

import type { Service } from '@/lib/data/shop'

type ServiceIconProps = {
  icon: Service['icon']
  className?: string
}

const paths: Record<Service['icon'], React.ReactNode> = {
  brake: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3v3.5M12 17.5V21M3 12h3.5M17.5 12H21" />
    </>
  ),
  transmission: (
    <>
      <rect x="4" y="7" width="16" height="10" rx="2" />
      <path d="M8 7V5a1 1 0 011-1h6a1 1 0 011 1v2M9 11h2M13 11h2M9 14h2M13 14h2" />
    </>
  ),
  oil: (
    <>
      <path d="M12 3c2 2.5 5 6 5 9.5A5 5 0 017 12.5C7 9 10 5.5 12 3z" />
      <path d="M9.5 14.5c.5 1 1.5 1.5 2.5 1.5" />
    </>
  ),
  engine: (
    <>
      <rect x="3" y="9" width="13" height="8" rx="1.5" />
      <path d="M16 11h2.5l2.5 2v2l-2.5 2H16M6 9V6.5h4V9M9 9V7M3 13h13" />
    </>
  ),
  tuneup: (
    <>
      <path d="M14.7 6.3a4 4 0 00-5.4 5.4l-6 6a1.5 1.5 0 002.1 2.1l6-6a4 4 0 005.4-5.4l-2.4 2.4-1.7-.5-.5-1.7 2.5-2.3z" />
    </>
  ),
}

export default function ServiceIcon({ icon, className = 'w-7 h-7' }: ServiceIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  )
}
