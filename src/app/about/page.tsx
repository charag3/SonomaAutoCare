// /about — Meet the Shop
// IA H1: "Meet the Team Behind Santa Rosa's Most Trusted Auto Shop"
// Humanizes the brand — turns an anonymous transaction into a relationship.
// Section structure: story → meet Chris & Scott → "our promise" → CTA

import type { Metadata } from 'next'
import FinalCTA from '@/components/shared/FinalCTA'
import { team } from '@/lib/data/shop'

export const metadata: Metadata = {
  title: 'Meet Our Team | Sonoma County Auto Care, Santa Rosa',
  description:
    'Meet Chris and Scott — the team behind Sonoma County Auto Care, Santa Rosa’s most trusted independent auto shop, built on honest diagnoses and fair pricing.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-shop-navy text-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
            Meet the Team Behind Santa Rosa&rsquo;s Most Trusted Auto Shop
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            A 4.9-star reputation doesn&rsquo;t happen by accident — it happens one honest
            conversation, one fair invoice, and one returning customer at a time. Here&rsquo;s
            who&rsquo;s actually behind that reputation.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-shop-cream py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-shop-navy mb-4">
            How We Got Here
          </h2>
          <p className="text-shop-navy/70 leading-relaxed mb-4">
            Sonoma County Auto Care was built on a simple idea: tell people the truth about
            their cars, even when a half-truth would&rsquo;ve been more profitable. That idea
            turned into a shop on College Ave — and that shop turned into 187 verified
            five-star reviews from drivers across Santa Rosa and Sonoma County.
          </p>
          <p className="text-shop-navy/70 leading-relaxed">
            We&rsquo;re not the biggest name in town, and we&rsquo;re not the oldest. We&rsquo;re just the
            shop that Santa Rosa actually talks about — because the work speaks for itself,
            and so do the people doing it.
          </p>
        </div>
      </section>

      {/* Meet the team */}
      <section className="bg-shop-gray py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-shop-navy mb-8 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-card p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-shop-navy text-shop-amber font-display font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-display font-semibold text-xl text-shop-navy mb-1">
                  {member.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-shop-amber-dark font-display mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-shop-navy/65 leading-relaxed">{member.bio}</p>
                <p className="text-xs text-shop-navy/30 mt-4">[ Team photo to be added ]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our promise */}
      <section className="bg-shop-navy text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">Our Promise</h2>
          <p className="text-white/75 text-lg leading-relaxed">
            We will always tell you what your car actually needs — not what would make us the
            most money. We will explain it in plain English, give you a fair price in writing,
            and stand behind the work. That&rsquo;s not a slogan. It&rsquo;s the only reason 187 people
            took the time to leave us a five-star review.
          </p>
        </div>
      </section>

      <FinalCTA
        heading="Come Meet Us"
        subheading="The best way to know if a shop is honest is to walk in and see for yourself."
        ctaLabel="Schedule a Visit"
        ctaHref="/schedule-an-appointment"
      />
    </>
  )
}
