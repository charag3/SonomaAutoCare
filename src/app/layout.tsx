// Root layout — shared font loading + metadata for the prototype
// Brand fonts: Poppins (display/headlines) + Inter (body/UI) — clean,
// modern, trustworthy pairing that reads professional without feeling cold.

import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import Nav from '@/components/shared/Nav'
import Footer from '@/components/shared/Footer'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sonoma County Auto Care | Auto Repair in Santa Rosa, CA',
  description:
    "Santa Rosa's highest-rated auto repair shop — 4.9★ across 187 verified Google + Yelp reviews. Honest diagnostics, fair pricing, no unnecessary upsells.",
  keywords: [
    'auto repair Santa Rosa CA',
    'mechanic near me Santa Rosa',
    'honest auto repair shop Sonoma County',
    'Sonoma County Auto Care',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased font-body bg-shop-cream text-shop-teal">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
