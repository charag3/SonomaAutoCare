// WhyUsV2 — Forest Green + Cream

import Link from 'next/link'
import { trustPillars, team } from '@/lib/data/shop'

export default function WhyUsV2() {
  return (
    <section className="bg-[#2d4a3d] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-display uppercase tracking-widest text-[#c9a86a] block mb-3">
            Why Drivers Choose Us — And Stay
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            A Reputation Built One Honest Conversation at a Time
          </h2>
          <p className="text-white/65">
            We didn&rsquo;t buy a 4.9-star rating with promotions. We earned it the slow way —
            by telling {team[0].name} and {team[1].name}&rsquo;s customers the truth, every time, even
            when the easy answer would&rsquo;ve made us more money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustPillars.map((pillar) => (
            <div key={pillar.title} className="bg-white/5 border border-[#c9a86a]/20 rounded-xl p-6 hover:bg-white/8 transition-colors duration-200">
              <h3 className="font-display font-semibold text-lg text-[#c9a86a] mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/about"
            className="inline-block font-display font-semibold text-[#c9a86a] hover:text-white transition-colors duration-200 text-sm uppercase tracking-wide"
          >
            Meet {team[0].name} &amp; {team[1].name} →
          </Link>
        </div>
      </div>
    </section>
  )
}
