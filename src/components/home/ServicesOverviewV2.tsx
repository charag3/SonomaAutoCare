// ServicesOverviewV2 — Forest Green + Cream

import Link from 'next/link'
import ServiceIcon from '@/components/services/ServiceIcon'
import { services } from '@/lib/data/shop'

export default function ServicesOverviewV2() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-display uppercase tracking-widest text-[#b89450] block mb-3">
            Full-Service, All Makes &amp; Models
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2d4a3d] mb-4">
            Whatever&rsquo;s Wrong, We&rsquo;ll Tell You the Truth About It
          </h2>
          <p className="text-[#2d4a3d]/70">
            From routine maintenance to the repairs that make you nervous — every visit gets
            the same plain-English explanation before any work begins.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-[#f5f3f0] rounded-xl shadow-card p-6 hover:-translate-y-1 transition-transform duration-200 flex flex-col border border-[#e8e5de]"
            >
              <div className="w-12 h-12 rounded-base bg-[#c9a86a]/10 text-[#b89450] flex items-center justify-center mb-4 group-hover:bg-[#c9a86a] group-hover:text-white transition-colors duration-200">
                <ServiceIcon icon={service.icon} className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-[#2d4a3d] mb-2">
                {service.shortName}
              </h3>
              <p className="text-sm text-[#2d4a3d]/65 leading-relaxed flex-1">
                {service.summary}
              </p>
              <span className="mt-4 text-sm font-display font-medium text-[#b89450] group-hover:text-[#2d4a3d] transition-colors duration-200">
                Learn more →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block border border-[#2d4a3d]/15 hover:border-[#c9a86a] text-[#2d4a3d] font-display font-medium px-7 py-3 rounded-base transition-colors duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
