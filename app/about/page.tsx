import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import SplitHero from '@/components/SplitHero'

const TITLE = 'About Opal Medical Group | Hagerstown, MD'
const DESCRIPTION = 'Opal Medical Group has provided internal medicine and family primary care in Hagerstown, MD since 2000. Meet the practice, our values and how we work.'
const HERO = { src: '/images/stock/hero-about.jpg', alt: 'A couple walking through a bright, modern medical clinic corridor' }

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/about' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://opalmedicalgroup.com/about', siteName: 'Opal Medical Group', type: 'website', images: [{ url: HERO.src }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO.src] },
}

// The four values are the practice's own, carried over from opalmedicalgroup.com.
const values = [
  { title: 'Compassion', body: 'Every patient is treated with empathy, kindness and respect, so each visit feels supportive rather than rushed.' },
  { title: 'Excellence', body: 'Evidence-based care, continued training and attention to detail, visit after visit.' },
  { title: 'Integrity', body: 'Honesty and transparency with every patient, family and the community we serve.' },
  { title: 'Innovation', body: 'One of the first practices in Hagerstown to adopt electronic records, and still adopting the tools that make care easier for patients.' },
]

const providers = [
  { name: 'Yi Vance, CRNP', role: 'Family Nurse Practitioner', photo: '/images/practice/yi-vance.jpg', position: '59% 40%', line: 'Joined full time in 2024 after years as a registered nurse at Meritus Medical Center. Speaks Chinese and English.' },
  { name: 'Farid Murshed, MD', role: 'Internal Medicine', photo: '/images/practice/farid-murshed.jpg', position: '47% 45%', line: 'Board-certified internist, more than 18 years at Opal. Speaks English, Persian and Bengali.' },
  { name: 'M. Khalid Waseem, MD, CMD', role: 'Internal Medicine', photo: '/images/practice/khalid-waseem.jpg', position: '48% 30%', line: 'Board-certified internist and certified medical director, more than 18 years at Opal. Speaks Hindi, Punjabi, Urdu and English.' },
]

const approach = [
  { title: 'We listen first', body: 'Your provider starts with your history and your concerns, not just today\'s symptoms, and explains options in plain language.' },
  { title: 'Prevention is the foundation', body: 'Annual exams, Medicare wellness visits, screenings and vaccines catch concerns early, when they are easiest to treat.' },
  { title: 'Care that continues', body: 'Chronic conditions are managed over time with regular check-ins, lab work and medication review, in the office or by telehealth.' },
]

export default function AboutPage() {
  return (
    <>
      <SplitHero src={HERO.src} alt={HERO.alt}>
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/80">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span>About</span>
        </nav>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light leading-tight">Hagerstown&apos;s Primary Care Home Since 2000</h1>
        <p className="mt-5 max-w-xl text-lg sm:text-xl text-white/85 leading-relaxed">Two internal medicine physicians and a family nurse practitioner, one office on Opal Court, and a front desk that knows your name.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/team" className="bg-white text-[var(--color-dark)] px-7 py-3.5 rounded-xl font-semibold hover:bg-[var(--color-light)] transition-colors">Meet the Team</Link>
          <Link href="/contact#form" data-ga="consultation_click" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-7 py-3.5 rounded-xl font-semibold transition-colors">Book Appointment</Link>
        </div>
      </SplitHero>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)] lg:col-span-3 lg:pr-12">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Who We Are</h2>
            <p>Opal Medical Group is an independent internal medicine and primary care practice at 1126 Opal Court in Hagerstown, Maryland. Dr. M. Khalid Waseem and Dr. Farid Murshed are board-certified internists who have each practiced here for more than 18 years. Yi Vance, CRNP, a board-certified family nurse practitioner, joined the team full time in 2024.</p>
            <p>We care for adults and families: annual physicals and Medicare wellness visits, same-day sick visits, women&apos;s health, and the long-term management of conditions such as diabetes, high blood pressure, heart disease, asthma and thyroid disease. Telehealth visits are available for follow-ups and medication questions, and a provider is on call after hours.</p>
            <p>Our mission is simple: accessible, high-quality care that pairs medical expertise with genuine compassion, so every patient leaves understanding their health and their next step.</p>
          </div>

          <aside className="h-fit rounded-2xl border border-[var(--color-border)] bg-white p-8 lg:col-span-2">
            <h2 className="font-cormorant text-3xl text-[var(--color-primary)]">Visit Us</h2>
            <dl className="mt-6 space-y-4 text-[var(--color-ink)]">
              <div>
                <dt className="text-xs uppercase tracking-wide text-[var(--color-muted)]">Address</dt>
                <dd>1126 Opal Ct, Hagerstown, MD 21740</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-[var(--color-muted)]">Phone</dt>
                <dd><a href="tel:+12404202666" data-ga="phone_click" className="text-[var(--color-primary)] font-semibold">(240) 420-2666</a></dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-[var(--color-muted)]">Fax</dt>
                <dd>(240) 420-0951</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-[var(--color-muted)]">Email</dt>
                <dd><a href="mailto:opalmed@opalmedicalgroup.com" data-ga="email_click" className="text-[var(--color-primary)]">opalmed@opalmedicalgroup.com</a></dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-[var(--color-muted)]">Hours</dt>
                <dd>Monday to Friday, 8:00 AM to 5:00 PM</dd>
                <dd className="text-sm text-[var(--color-muted)]">Closed Saturday and Sunday. After hours, calls go to the provider on call.</dd>
              </div>
            </dl>
            <Link href="/contact#form" data-ga="consultation_click" className="mt-8 inline-block w-full rounded-full bg-[var(--color-accent)] px-6 py-3 text-center font-medium text-white transition-colors hover:bg-[var(--color-accent-dark)]">Book Appointment</Link>
          </aside>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Our Providers</h2>
            <Link href="/team" className="text-[var(--color-primary)] font-semibold hover:underline">Full bios →</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {providers.map((p) => (
              <Link key={p.name} href="/team" className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-72 bg-[var(--color-light)]">
                  <Image src={p.photo} alt={`Portrait of ${p.name}`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" style={{ objectPosition: p.position }} />
                </div>
                <div className="p-6">
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-primary)]">{p.name}</h3>
                  <p className="text-xs uppercase tracking-wide text-[var(--color-primary)] font-semibold mt-1">{p.role}</p>
                  <p className="text-sm text-[var(--color-muted)] mt-3 leading-relaxed">{p.line}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center font-cormorant text-4xl text-[var(--color-ink)]">Our Core Values</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-[var(--color-border)] bg-white p-7">
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)]">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center font-cormorant text-4xl text-[var(--color-ink)]">How We Work</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {approach.map((a) => (
              <div key={a.title} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)]">{a.title}</h3>
                <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-cormorant text-4xl font-light">New patients are welcome</h2>
          <p className="mt-4 text-white/80">Call (240) 420-2666 or send a request and our front office will call you back.</p>
          <Link href="/contact#form" data-ga="consultation_click" className="mt-8 inline-block rounded-full bg-[var(--color-accent)] px-8 py-3 font-medium text-white transition-colors hover:bg-[var(--color-accent-dark)]">Book Appointment</Link>
        </div>
      </section>
    </>
  )
}
