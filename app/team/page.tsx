import type { Metadata } from 'next'
import Link from 'next/link'
import SplitHero from '@/components/SplitHero'

const TITLE = 'Our Providers | Opal Medical Group, Hagerstown'
const DESCRIPTION = 'Meet the providers at Opal Medical Group in Hagerstown, MD: Yi Vance, CRNP, Dr. Farid Murshed and Dr. M. Khalid Waseem, board-certified internal medicine physicians.'
const HERO = { src: '/images/stock/hero-team.jpg', alt: 'Two clinicians walking down a bright clinic hallway' }

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/team' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://opalmedicalgroup.com/team', siteName: 'Opal Medical Group', type: 'website', images: [{ url: HERO.src }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO.src] },
}

// Bios carry over the practice's own provider pages (opalmedicalgroup.com/doctors/*), with the
// credentials the NPPES registry confirms. No photos were available; a silhouette is shown
// rather than a stock stand-in.
const team = [
  {
    name: 'Yi Vance, CRNP',
    role: 'Family Nurse Practitioner',
    facts: ['Board certified, American Academy of Nurse Practitioners', 'Advanced nursing degree, Shenandoah University, Winchester, VA', 'Speaks Chinese and English'],
    bio: 'Yi Vance joined Opal Medical Group full time in January 2024 after working as a registered nurse at Meritus Medical Center and in a wound clinic. She brings that hands-on nursing background to every visit, listens carefully and explains your options clearly. Patients see her for annual exams, sick visits, chronic condition follow-ups and telehealth.',
  },
  {
    name: 'Farid Murshed, MD',
    role: 'Internal Medicine',
    facts: ['Board certified in internal medicine', 'More than 18 years at Opal Medical Group in Hagerstown', 'Speaks English, Persian and Bengali'],
    bio: 'Dr. Murshed is a board-certified internist providing comprehensive adult care, from preventive visits and Medicare wellness exams to the long-term management of diabetes, high blood pressure, heart disease and other chronic conditions. Patients can expect thoughtful, clear communication at every step.',
  },
  {
    name: 'M. Khalid Waseem, MD, CMD',
    role: 'Internal Medicine',
    facts: ['Board certified in internal medicine', 'Certified Medical Director (CMD) in post-acute and long-term care', 'More than 18 years at Opal Medical Group in Hagerstown', 'Speaks Hindi, Punjabi, Urdu and English'],
    bio: 'Dr. Waseem leads Opal Medical Group and has practiced internal medicine in Hagerstown for more than two decades. Alongside the office practice he serves as a medical director for local nursing and assisted living facilities. He delivers compassionate, patient-focused care across the full range of adult health needs.',
  },
]

export default function TeamPage() {
  return (
    <main>
      <SplitHero src={HERO.src} alt={HERO.alt}>
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/80">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span>Our Providers</span>
        </nav>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light leading-tight">Our Providers</h1>
        <p className="mt-5 max-w-xl text-lg sm:text-xl text-white/85 leading-relaxed">Two board-certified internal medicine physicians and a family nurse practitioner, caring for Hagerstown families together in one office.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact#form" data-ga="consultation_click" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-7 py-3.5 rounded-xl font-semibold transition-colors">Book Appointment</Link>
          <a href="tel:+12404202666" data-ga="phone_click" className="border-2 border-white text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors">Call (240) 420-2666</a>
        </div>
      </SplitHero>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {team.map((m) => (
            <article key={m.name} className="bg-white rounded-2xl border border-[var(--color-border)] shadow-sm grid md:grid-cols-[200px_1fr] gap-8 p-8">
              <div className="h-48 md:h-full min-h-[12rem] rounded-xl bg-[var(--color-light)] flex items-center justify-center">
                <svg className="w-20 h-20 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
              </div>
              <div>
                <h2 className="font-cormorant text-3xl text-[var(--color-ink)]">{m.name}</h2>
                <p className="text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mt-1">{m.role}</p>
                <p className="text-[var(--color-ink)] leading-relaxed mt-4">{m.bio}</p>
                <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm text-[var(--color-muted)]">
                  {m.facts.map((f) => (
                    <li key={f} className="flex gap-2">
                      <svg className="w-5 h-5 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Choosing a provider</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mt-4">You may ask for any of our three providers when you schedule, and we keep you with the same provider for follow-up whenever we can. If you have no preference, our front office offers the first available opening. All three providers see patients in the office and by telehealth.</p>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light">Ready to meet your provider?</h2>
          <p className="mt-4 text-white/80">We are accepting new patients. Call (240) 420-2666 or send a request online.</p>
          <Link href="/contact#form" data-ga="consultation_click" className="inline-block mt-8 px-8 py-3 rounded-full bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-dark)] transition-colors">Book Appointment</Link>
        </div>
      </section>
    </main>
  )
}
