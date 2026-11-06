import type { Metadata } from 'next'
import Link from 'next/link'
import SplitHero from '@/components/SplitHero'

const TITLE = 'Referrals & Records | Opal Medical Group'
const DESCRIPTION = 'How to refer a patient to Opal Medical Group in Hagerstown, MD, or request records: fax (240) 420-0951, phone (240) 420-2666, and what to include.'
const HERO = { src: '/images/stock/hub-faq.jpg', alt: 'A clinician and patient review documents together' }

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/refer' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://opalmedicalgroup.com/refer', siteName: 'Opal Medical Group', type: 'website', images: [{ url: HERO.src }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO.src] },
}

const include = [
  'Patient name, date of birth and a phone number we can reach',
  'Reason for referral or the records requested',
  'Insurance information, if available',
  'Recent notes, labs or imaging that relate to the referral',
  'The referring office\'s phone and fax for our reply',
]

export default function ReferPage() {
  return (
    <main>
      <SplitHero src={HERO.src} alt={HERO.alt}>
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/80">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span>Referrals &amp; Records</span>
        </nav>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light leading-tight">Referrals &amp; Records</h1>
        <p className="mt-5 max-w-xl text-lg sm:text-xl text-white/85 leading-relaxed">For hospitals, specialists, nursing facilities and patients requesting records. We accept new patients and return calls the same business day.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="tel:+12404202666" data-ga="phone_click" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-7 py-3.5 rounded-xl font-semibold transition-colors">Call (240) 420-2666</a>
        </div>
      </SplitHero>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8">
            <h2 className="font-cormorant text-3xl text-[var(--color-dark)]">Send referrals and records to</h2>
            <dl className="mt-6 space-y-4 text-[var(--color-ink)]">
              <div><dt className="text-xs uppercase tracking-wide text-[var(--color-muted)]">Fax</dt><dd className="text-2xl font-semibold">(240) 420-0951</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-[var(--color-muted)]">Phone</dt><dd><a href="tel:+12404202666" data-ga="phone_click" className="text-xl font-semibold text-[var(--color-primary)]">(240) 420-2666</a></dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-[var(--color-muted)]">Mail</dt><dd>Opal Medical Group, 1126 Opal Ct, Hagerstown, MD 21740</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-[var(--color-muted)]">Hours</dt><dd>Monday to Friday, 8:00 AM to 5:00 PM</dd></div>
            </dl>
            <p className="mt-6 text-sm text-[var(--color-muted)]">Please do not send patient information through this website or by email. Fax and phone are the right channels for protected health information.</p>
          </div>
          <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8">
            <h2 className="font-cormorant text-3xl text-[var(--color-dark)]">What to include</h2>
            <ul className="mt-6 space-y-3">
              {include.map((i) => (
                <li key={i} className="flex gap-3 text-[var(--color-ink)]">
                  <svg className="w-5 h-5 shrink-0 mt-0.5 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <h3 className="font-cormorant text-2xl text-[var(--color-dark)] mt-8">Patients requesting your own records</h3>
            <p className="mt-2 text-[var(--color-ink)] leading-relaxed">Call the office and our staff will walk you through the authorization form. Records can be sent to you or directly to another provider.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Who we see</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mt-4">Adults and families for primary care and internal medicine: hospital follow-up, chronic disease management, preventive care, Medicare wellness visits and medication management. Dr. Waseem also serves as a medical director for area nursing and assisted living facilities. Telehealth follow-ups are available.</p>
          <Link href="/services" className="inline-block mt-6 text-[var(--color-primary)] font-semibold hover:underline">See all services →</Link>
        </div>
      </section>
    </main>
  )
}
