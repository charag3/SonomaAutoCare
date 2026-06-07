// Sonoma County Auto Care — shared content/data layer
//
// Single source of truth for facts used across pages: NAP, ratings, services,
// reviews, team. Pulled directly from:
//   clients/soma-usa/SonomaCountyAutoCare/branding_foundation_sonomaautocare.md
//   clients/soma-usa/SonomaCountyAutoCare/information_architecture_sonomaautocare.md
//
// IMPORTANT: review quotes below are illustrative placeholders written in the
// voice/theme patterns the brand doc says repeat across real reviews
// ("honest", "no unnecessary upsells", "thorough diagnostics", "friendly team").
// Swap in verbatim quotes pulled from the live Google/Yelp listings before
// this goes to production — flagged again at point of use.

export const shopInfo = {
  name: 'Sonoma County Auto Care',
  tagline: 'The shop Santa Rosa actually trusts. Proven in reviews, not promises.',
  usp: "Santa Rosa's highest-rated mechanic — proven by 187 combined verified five-star reviews, more than any other shop in town, including 30-year incumbents.",
  address: {
    street: '518 College Ave',
    city: 'Santa Rosa',
    state: 'CA',
    zip: '95404',
    full: '518 College Ave, Santa Rosa, CA',
  },
  phone: '(707) 823-3832',
  phoneHref: 'tel:+17078233832',
  email: 'info@sonomacountyautocare.com', // placeholder domain per IA doc note
  // Verified from research: Mon–Fri 8:00 AM – 5:00 PM. Weekend hours were not
  // part of the verified research set — confirm Sat/Sun status with the client
  // before this goes live (shown here as closed, the safer assumption for a
  // small independent shop, rather than inventing hours that could be wrong).
  hours: [
    { days: 'Monday – Friday', time: '8:00 AM – 5:00 PM' },
    { days: 'Saturday', time: 'Closed' },
    { days: 'Sunday', time: 'Closed' },
  ],
  ratings: {
    google: { score: 4.9, count: 115, label: 'Google' },
    yelp: { score: 4.9, count: 72, label: 'Yelp' },
    combined: { score: 4.9, count: 187 },
  },
}

export const team = [
  {
    name: 'Chris',
    role: 'Owner',
    bio: 'Built Sonoma County Auto Care on one rule: never recommend a repair he wouldn’t pay for out of his own pocket.',
  },
  {
    name: 'Scott',
    role: 'Head Mechanic',
    bio: 'Two decades under the hood — the guy who explains what’s actually wrong in plain English before any wrench gets picked up.',
  },
]

export type Service = {
  slug: string
  name: string
  shortName: string
  h1: string
  icon: 'brake' | 'transmission' | 'oil' | 'engine' | 'tuneup'
  summary: string
  symptoms?: string[]
  metaTitle: string
}

export const services: Service[] = [
  {
    slug: 'brake-repair',
    name: 'Brake Repair',
    shortName: 'Brakes',
    h1: 'Brake Repair in Santa Rosa, CA — Fixed Right, Explained Clearly',
    icon: 'brake',
    summary:
      'Squeaking, grinding, soft pedal, or pulling to one side — we diagnose the real cause before recommending a single part.',
    symptoms: [
      'Squeaking or squealing when braking',
      'Grinding noise (metal-on-metal)',
      'Soft, spongy, or sinking brake pedal',
      'Vehicle pulls to one side when braking',
      'Vibration or pulsing through the pedal or steering wheel',
    ],
    metaTitle: 'Brake Repair in Santa Rosa, CA | Sonoma County Auto Care',
  },
  {
    slug: 'transmission-repair',
    name: 'Transmission Repair & Service',
    shortName: 'Transmission',
    h1: 'Transmission Repair in Santa Rosa — Honest Diagnosis Before Any Work Begins',
    icon: 'transmission',
    summary:
      'The repair drivers fear most — we lead with a straight answer on what’s actually necessary versus what can wait.',
    symptoms: [
      'Slipping between gears',
      'Delayed engagement when shifting into drive or reverse',
      'Fluid leaks (reddish or brownish spots under the car)',
      'Unusual noises in neutral',
      'Check engine or transmission warning light',
    ],
    metaTitle: 'Transmission Repair Santa Rosa CA | Sonoma County Auto Care',
  },
  {
    slug: 'oil-change-maintenance',
    name: 'Oil Change & Routine Maintenance',
    shortName: 'Oil Change & Maintenance',
    h1: 'Oil Changes & Routine Maintenance in Santa Rosa — Keep Your Car Running Longer',
    icon: 'oil',
    summary:
      'The easiest way to start a relationship with a shop you can trust — fast, affordable, and the visit where most first-timers decide to come back.',
    metaTitle: 'Oil Change & Maintenance Santa Rosa | Sonoma County Auto Care',
  },
  {
    slug: 'engine-diagnostics',
    name: 'Engine Diagnostics & Check Engine Light',
    shortName: 'Engine Diagnostics',
    h1: 'Check Engine Light & Engine Diagnostics in Santa Rosa — Real Answers, No Guesswork',
    icon: 'engine',
    summary:
      'A check engine light can mean a $40 sensor or a $4,000 problem — we tell you which one it actually is, in plain English, before you spend a dime.',
    metaTitle: 'Engine Diagnostics in Santa Rosa, CA | Sonoma County Auto Care',
  },
  {
    slug: 'tune-ups',
    name: 'Tune-Ups & Performance Maintenance',
    shortName: 'Tune-Ups',
    h1: 'Tune-Ups in Santa Rosa — Small Maintenance That Prevents Big Repairs',
    icon: 'tuneup',
    summary:
      'The maintenance that quietly prevents the expensive repair — exactly the kind of long-game thinking that keeps an older car on the road for years.',
    metaTitle: 'Tune-Ups in Santa Rosa, CA | Sonoma County Auto Care',
  },
]

export type Review = {
  source: 'Google' | 'Yelp'
  author: string
  rating: number
  theme: 'Honest Diagnoses' | 'Fair Pricing' | 'Friendly Team'
  quote: string
}

// PLACEHOLDER QUOTES — written to match the verified review themes documented
// in the brand foundation doc ("honest, reliable, thorough diagnostics, no
// unnecessary upsells" — repeated consistently). Replace with verbatim
// excerpts pulled directly from the live Google Business Profile and Yelp
// listing before any client-facing / production deployment.
export const reviews: Review[] = [
  {
    source: 'Google',
    author: 'Maria S.',
    rating: 5,
    theme: 'Honest Diagnoses',
    quote:
      'They told me my brakes had another few thousand miles left instead of just selling me a new set. That’s the kind of honesty that earns a customer for life.',
  },
  {
    source: 'Yelp',
    author: 'Don R.',
    rating: 5,
    theme: 'Honest Diagnoses',
    quote:
      'I’ve been burned by shops before. These guys walked me through exactly what was wrong, what could wait, and what couldn’t — no pressure, no upsell.',
  },
  {
    source: 'Google',
    author: 'Elena T.',
    rating: 5,
    theme: 'Fair Pricing',
    quote:
      'Quoted me a fair price, finished faster than promised, and the final bill matched the estimate exactly. That almost never happens anymore.',
  },
  {
    source: 'Yelp',
    author: 'Jordan M.',
    rating: 5,
    theme: 'Friendly Team',
    quote:
      'Just moved here and had no idea who to trust with my car. Found this place on Yelp and they treated me like I’d been a customer for years.',
  },
  {
    source: 'Google',
    author: 'Mike P.',
    rating: 5,
    theme: 'Fair Pricing',
    quote:
      'Run a small landscaping crew — these guys get my trucks back on the road fast and never pad the invoice. That’s rare and it matters to my bottom line.',
  },
  {
    source: 'Yelp',
    author: 'Sarah K.',
    rating: 5,
    theme: 'Friendly Team',
    quote:
      'Chris and Scott actually remember who I am when I call. Feels like the neighborhood shop everyone talks about — because it is.',
  },
]

export const trustPillars = [
  {
    title: 'Honest Diagnostics',
    description:
      'We tell you what’s actually wrong — and what can wait — before a single part gets ordered. No scare tactics, no surprise add-ons.',
  },
  {
    title: 'Fair, Transparent Pricing',
    description:
      'The estimate you get is the bill you pay. Itemized, explained in plain English, and never padded to hit a number.',
  },
  {
    title: 'A Local Team You’ll Actually Know',
    description:
      'Chris and Scott aren’t a call center — they’re the people who’ll remember your name and your car the next time you walk in.',
  },
]

export const serviceAreas = [
  {
    city: 'Santa Rosa',
    blurb:
      'Our home base — proudly serving Santa Rosa drivers from our shop on College Ave with the kind of honest auto repair this city has talked about for years.',
  },
  {
    city: 'Rohnert Park',
    blurb:
      'A short drive from Rohnert Park for auto repair that’s actually worth the trip — ask any of your neighbors who already make the trip to us.',
  },
  {
    city: 'Sebastopol',
    blurb:
      'Sebastopol drivers come to us for the same reason they pick everything else local and trusted: word travels fast when a shop treats people right.',
  },
  {
    city: 'Windsor',
    blurb:
      'From Windsor, we’re closer than you think — and worth the extra few minutes when it’s your car, your safety, and your money on the line.',
  },
  {
    city: 'Cotati',
    blurb:
      'Cotati drivers trust us with everything from routine maintenance to the repairs that make you nervous — we’ll walk you through both the same way.',
  },
]

export const faviconNote = 'placeholder favicon — replace with shop logo asset when available'
