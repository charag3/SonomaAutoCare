// Footer — shared across all pages
// Columns: NAP + hours, quick links, ratings recap + CTA

import Link from 'next/link'
import { shopInfo } from '@/lib/data/shop'
import StarRating from '@/components/shared/StarRating'

export default function Footer() {
  return (
    <footer className="bg-shop-navy-dark text-white/80 py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 — NAP + hours */}
        <div>
          <h3 className="font-display font-semibold text-lg text-white mb-4">
            {shopInfo.name}
          </h3>
          <address className="not-italic space-y-1.5 text-sm">
            <p>{shopInfo.address.street}</p>
            <p>{shopInfo.address.city}, {shopInfo.address.state} {shopInfo.address.zip}</p>
            <p className="pt-2">
              <a href={shopInfo.phoneHref} className="hover:text-white transition-colors duration-200">
                {shopInfo.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${shopInfo.email}`} className="hover:text-white transition-colors duration-200">
                {shopInfo.email}
              </a>
            </p>
          </address>
          <div className="mt-5 text-sm space-y-1">
            {shopInfo.hours.map((h) => (
              <p key={h.days}>
                <span className="text-white font-medium">{h.days}:</span> {h.time}
              </p>
            ))}
          </div>
        </div>

        {/* Column 2 — Quick links */}
        <div>
          <h3 className="font-display font-semibold text-lg text-white mb-4">Explore</h3>
          <ul className="text-sm space-y-2">
            <li><Link href="/services" className="hover:text-white transition-colors duration-200">Our Services</Link></li>
            <li><Link href="/reviews" className="hover:text-white transition-colors duration-200">Reviews</Link></li>
            <li><Link href="/fleet-services" className="hover:text-white transition-colors duration-200">Fleet Services</Link></li>
            <li><Link href="/service-areas" className="hover:text-white transition-colors duration-200">Service Areas</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors duration-200">Meet the Team</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 — Ratings recap + CTA */}
        <div>
          <h3 className="font-display font-semibold text-lg text-white mb-4">Santa Rosa&rsquo;s Highest-Rated Shop</h3>
          <div className="flex items-center gap-2 mb-2">
            <StarRating rating={shopInfo.ratings.combined.score} size="sm" />
            <span className="text-sm text-white">{shopInfo.ratings.combined.score}★</span>
          </div>
          <p className="text-sm mb-5">
            {shopInfo.ratings.combined.count} combined verified reviews across Google &amp; Yelp
          </p>
          <Link
            href="/schedule-an-appointment"
            className="inline-block bg-shop-amber hover:bg-shop-amber-dark text-shop-navy-dark font-display font-semibold text-sm px-5 py-2.5 rounded-base transition-colors duration-200"
          >
            Schedule an Appointment
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
        <p>&copy; {new Date().getFullYear()} {shopInfo.name}. All rights reserved.</p>
        <p>Honest auto repair, proudly serving Santa Rosa &amp; Sonoma County.</p>
      </div>
    </footer>
  )
}
