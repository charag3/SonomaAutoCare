// ServiceAreaCalloutV2 — Forest Green + Cream

import Link from 'next/link'
import { serviceAreas, shopInfo } from '@/lib/data/shop'

export default function ServiceAreaCalloutV2() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-display uppercase tracking-widest text-[#b89450] block mb-3">
            Proudly Local
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2d4a3d] mb-4">
            Serving Santa Rosa &amp; All of Sonoma County
          </h2>
          <p className="text-[#2d4a3d]/70 mb-6 max-w-md">
            Based at {shopInfo.address.full} — and worth the drive from anywhere
            in the county. Here&rsquo;s where our customers come from:
          </p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8">
            {serviceAreas.map((area) => (
              <li key={area.city} className="flex items-center gap-2 text-[#2d4a3d] font-medium text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a]" />
                {area.city}
              </li>
            ))}
          </ul>
          <Link
            href="/service-areas"
            className="inline-block border border-[#2d4a3d]/15 hover:border-[#c9a86a] text-[#2d4a3d] font-display font-medium px-7 py-3 rounded-base transition-colors duration-200"
          >
            See All Areas We Serve
          </Link>
        </div>

        {/* Styled map placeholder */}
        <div className="aspect-square sm:aspect-[4/3] rounded-2xl bg-[#f5f3f0] border border-[#2d4a3d]/10 shadow-card flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0" style={{
              backgroundImage:
                'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }} />
          </div>
          <div className="relative text-center px-8">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-16 h-16 mx-auto mb-3 text-[#c9a86a]" aria-hidden="true">
              <path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <p className="font-display text-[#2d4a3d]/60 text-sm uppercase tracking-widest">
              {shopInfo.address.full}
            </p>
            <p className="text-[#2d4a3d]/35 text-xs mt-2">[ Map embed to be added ]</p>
          </div>
        </div>
      </div>
    </section>
  )
}
