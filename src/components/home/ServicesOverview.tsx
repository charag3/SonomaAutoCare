// Home "Services overview" section — IA spec: visual grid of 5 core services
// with icons, links to /services

import Link from 'next/link'
import ServiceIcon from '@/components/services/ServiceIcon'
import { services } from '@/lib/data/shop'

export default function ServicesOverview() {
  return (
    <section className="bg-shop-cream py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-display uppercase tracking-widest text-shop-amber-dark block mb-3">
            Full-Service, All Makes &amp; Models
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-shop-navy mb-4">
            Whatever&rsquo;s Wrong, We&rsquo;ll Tell You the Truth About It
          </h2>
          <p className="text-shop-navy/70">
            From routine maintenance to the repairs that make you nervous — every visit gets
            the same plain-English explanation before any work begins.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white rounded-xl shadow-card p-6 hover:-translate-y-1 transition-transform duration-200 flex flex-col"
            >
              <div className="w-12 h-12 rounded-base bg-shop-amber/10 text-shop-amber-dark flex items-center justify-center mb-4 group-hover:bg-shop-amber group-hover:text-white transition-colors duration-200">
                <ServiceIcon icon={service.icon} className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-shop-navy mb-2">
                {service.shortName}
              </h3>
              <p className="text-sm text-shop-navy/65 leading-relaxed flex-1">
                {service.summary}
              </p>
              <span className="mt-4 text-sm font-display font-medium text-shop-amber-dark group-hover:text-shop-navy transition-colors duration-200">
                Learn more →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block border border-shop-navy/15 hover:border-shop-amber text-shop-navy font-display font-medium px-7 py-3 rounded-base transition-colors duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
