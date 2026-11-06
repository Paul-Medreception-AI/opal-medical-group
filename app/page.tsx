import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SERVICES } from '../lib/data/services'
import { CONDITIONS } from '../lib/data/conditions'
import ContactForm from '@/components/ContactForm'
import { focus } from '@/lib/imageFocus'

const TITLE = 'Primary Care in Hagerstown, MD | Opal Medical Group'
const DESCRIPTION = 'Internal medicine and family primary care at 1126 Opal Ct, Hagerstown, MD. Same-day sick visits, telehealth, chronic disease management and preventive care. New patients welcome.'
const HERO = { src: '/images/stock/hero-home.jpg', alt: 'A clinician checks a patient\'s blood pressure in an exam room' }

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://opalmedicalgroup.com/', siteName: 'Opal Medical Group', type: 'website', images: [{ url: HERO.src }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO.src] },
}

// Facts only. Sources: the practice's own site, Dr. Waseem's discovery calls (2026-10-19 and
// 2026-10-28) and the NPPES registry. Nothing here is a claim the practice has not made.
const trust = [
  'Accepting New Patients',
  'Same-Day Sick Visits',
  'Telehealth Available',
]

const why = [
  { title: 'Three providers, one team', body: 'Yi Vance, CRNP, Dr. Farid Murshed and Dr. M. Khalid Waseem share one office and one chart, so you can see the provider you prefer and the others know your history.' },
  { title: 'Same-day sick visits', body: 'A cough, a fever, a sprain or a stomach bug should not wait weeks. Sick visits are worked into the schedule the same day. Call in the morning.' },
  { title: 'Seven languages', body: 'Between them, our providers speak English, Chinese, Persian, Bengali, Hindi, Punjabi and Urdu.' },
  { title: 'A provider on call after hours', body: 'After 5 PM, calls go to the provider on call until the office opens at 8 AM.' },
  { title: 'Telehealth and medication management', body: 'Follow-ups, results reviews and medication questions can often be handled by video from home.' },
  { title: 'Most insurance plans, including Medicare', body: 'We accept most major plans and provide Medicare annual wellness visits. Call with your plan details and we will verify your benefits.' },
]

const team = [
  { name: 'Yi Vance, CRNP', role: 'Family Nurse Practitioner' },
  { name: 'Farid Murshed, MD', role: 'Internal Medicine' },
  { name: 'M. Khalid Waseem, MD, CMD', role: 'Internal Medicine' },
]

// Verbatim Google reviews of Opal Medical Group (Google Business Profile, pulled 2026-11-06).
const reviews = [
  { name: 'Ellie Hutzell', text: 'The office staff and providers are great.  Love walking into a office were the staff is so nice and helpful. Yi Vance is a great provider she always listens to the patients and goes out of her way. Great practice always a happy staff.' },
  { name: 'Molly Love', text: 'I have been seeing NP Vance every 3 months for almost a year now, and she takes excellent care of my needs. Always listens to my concerns, addresses them within the visit, and genuinely cares how I am doing. Highly recommend Opal Medical group! Scheduling is also always simple, I never have to wait long to be seen once I arrive. 10/10' },
  { name: 'Shelly Barnhart', text: 'I have been a patient at Opal Medical Group for probably 25 hrs. Or more. I hav always been taken care of very well through the year. The staff & Doctor\'s, Nurse Practitioners have all been great. I have never been mistreated.' },
]
const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/search/?api=1&query=Opal%20Medical%20Group&query_place_id=ChIJExicj97syYkRi8rwcgWw0r4'

const resources = [
  { href: '/new-patients', label: 'New Patients', body: 'What to bring and what to expect at your first visit.' },
  { href: '/insurance', label: 'Insurance & Billing', body: 'How verification, billing and self-pay estimates work.' },
  { href: '/telehealth', label: 'Telehealth', body: 'Which visits work by video and how to join.' },
  { href: '/faq', label: 'Questions & Answers', body: 'Hours, scheduling, refills, referrals and more.' },
  { href: '/blog', label: 'Health Articles', body: 'Plain-language guides from our providers.' },
  { href: '/refer', label: 'Referrals & Records', body: 'Fax and phone for referring offices and records requests.' },
]

const next = [
  { n: '1', t: 'We call you back', b: 'Our front office reviews your request during business hours and calls to find a time.' },
  { n: '2', t: 'You pick your provider', b: 'Ask for Yi Vance, Dr. Murshed or Dr. Waseem, or take the first opening.' },
  { n: '3', t: 'Your visit is scheduled', b: 'New patient visits run about 45 minutes. Bring your ID, insurance card and medication list.' },
]

export default function Home() {
  return (
    <main>
      {/* Hero: copy on solid navy, photo beside it. Never text over a photo. */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-white/80">Internal Medicine &amp; Family Care</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl font-light leading-[1.05] mt-4">Primary Care in Hagerstown, MD</h1>
            <p className="text-lg sm:text-xl text-white/90 mt-6 leading-relaxed">Care from two internal medicine physicians and a family nurse practitioner. Conveniently located on Opal Court.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact#form" data-ga="consultation_click" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-colors">Book Appointment</Link>
              <a href="tel:+12404202666" data-ga="phone_click" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">Call (240) 420-2666</a>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-[var(--color-dark)]">
            <Image src={HERO.src} alt={HERO.alt} fill priority quality={85} sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" style={{ objectPosition: focus(HERO.src) }} />
          </div>
        </div>
      </section>

      {/* Slim fact band below the hero */}
      <section className="bg-white py-5 border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-3">
          {trust.map((t) => (
            <div key={t} className="flex items-center gap-2 text-sm">
              <svg className="w-5 h-5 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span className="font-semibold text-[var(--color-ink)]">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl text-center text-[var(--color-ink)]">Our Services</h2>
          <p className="text-center text-[var(--color-muted)] mt-3 mb-12">Primary care for adults and families, in the office or by video.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={'/services/' + s.slug} className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {s.heroImage?.src ? (
                  <div className="relative h-44 bg-[var(--color-light)]">
                    <Image src={s.heroImage.src} alt={s.heroImage.alt || s.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" className="object-cover group-hover:scale-105 transition-transform duration-500" style={{ objectPosition: focus(s.heroImage.src) }} />
                  </div>
                ) : null}
                <div className="p-6">
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)]">{s.title}</h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-2 line-clamp-3">{s.description}</p>
                  <span className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-4 group-hover:underline">Learn more →</span>
                </div>
              </Link>
            ))}
            <Link href="/telehealth" className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-44 bg-[var(--color-light)]">
                <Image src="/images/stock/hero-telehealth.jpg" alt="A woman has a video visit with her provider from her sofa" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" className="object-cover group-hover:scale-105 transition-transform duration-500" style={{ objectPosition: focus('/images/stock/hero-telehealth.jpg') }} />
              </div>
              <div className="p-6">
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)]">Telehealth &amp; Medication Management</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-2">Video visits for follow-ups, results and prescription questions, with ongoing medication review.</p>
                <span className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-4 group-hover:underline">Learn more →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-cormorant text-5xl text-[var(--color-ink)]">Conditions We Treat</h2>
              <p className="text-[var(--color-muted)] mt-3">Ongoing care for the conditions adults bring to primary care most often.</p>
            </div>
            <Link href="/conditions" className="text-[var(--color-primary)] font-semibold hover:underline">All conditions →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {CONDITIONS.slice(0, 12).map((c) => (
              <Link key={c.slug} href={'/conditions/' + c.slug} className="block rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] px-4 py-4 text-[var(--color-ink)] font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Opal: facts only */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl text-center text-[var(--color-ink)] mb-12">Why Patients Choose Opal Medical Group</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {why.map((w) => (
              <div key={w.title} className="bg-white rounded-2xl p-7 border border-[var(--color-border)]">
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)]">{w.title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <h2 className="font-cormorant text-5xl text-[var(--color-ink)]">Meet Your Providers</h2>
            <p className="text-[var(--color-muted)] mt-4 leading-relaxed">Opal Medical Group has cared for Hagerstown since 2000. Both physicians are board certified in internal medicine and have practiced here for more than 18 years. Yi Vance joined full time in 2024 after years as a registered nurse at Meritus Medical Center.</p>
            <Link href="/team" className="inline-block text-[var(--color-primary)] font-semibold mt-6 hover:underline">Meet the team →</Link>
          </div>
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-4">
            {team.map((m) => (
              <Link key={m.name} href="/team" className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center">
                  <svg className="w-8 h-8 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path strokeLinecap="round" strokeLinejoin="round" d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" /></svg>
                </div>
                <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)] mt-4">{m.name}</p>
                <p className="text-xs uppercase tracking-wide text-[var(--color-primary)] font-semibold mt-1">{m.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Real reviews */}
      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl text-center">What Patients Say</h2>
          <p className="text-center text-white/70 mt-3 mb-12">From Google reviews of Opal Medical Group.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <figure key={r.name} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <div className="flex gap-1 text-[var(--color-primary)]" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((i) => (<svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" /></svg>))}
                </div>
                <blockquote className="text-white/85 text-sm leading-relaxed mt-4">“{r.text}”</blockquote>
                <figcaption className="text-white/60 text-xs mt-4">{r.name} · Google review</figcaption>
              </figure>
            ))}
          </div>
          <p className="text-center mt-10"><a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-semibold hover:underline">Read all reviews on Google →</a></p>
        </div>
      </section>

      {/* Patient resources */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl text-center text-[var(--color-ink)] mb-12">Patient Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((r) => (
              <Link key={r.href} href={r.href} className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-6 hover:border-[var(--color-primary)] transition-colors">
                <p className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-primary)]">{r.label}</p>
                <p className="text-sm text-[var(--color-muted)] mt-2">{r.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Request an appointment */}
      <section id="appointment" className="bg-[var(--color-cream)] py-20 border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[var(--color-border)] shadow-sm">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Request an Appointment</h2>
            <p className="text-[var(--color-muted)] mt-3 mb-6">Or call <a href="tel:+12404202666" data-ga="phone_click" className="text-[var(--color-primary)] font-semibold">(240) 420-2666</a>, Monday to Friday, 8 AM to 5 PM.</p>
            <ContactForm pagePath="/" />
            <p className="text-[var(--color-muted)] text-xs mt-4">Please do not send medical details through this form. For anything about your health, call the office.</p>
          </div>
          <div>
            <h3 className="font-cormorant text-3xl text-[var(--color-ink)]">What happens next</h3>
            <ol className="mt-6 space-y-6">
              {next.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="font-cormorant text-4xl text-[var(--color-primary)] leading-none">{s.n}</span>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">{s.t}</p>
                    <p className="text-[var(--color-muted)] text-sm mt-1">{s.b}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 rounded-2xl bg-white border border-[var(--color-border)] p-6 text-sm text-[var(--color-ink)]">
              <p className="font-semibold">Opal Medical Group</p>
              <p className="mt-1">1126 Opal Ct, Hagerstown, MD 21740</p>
              <p>Phone <a href="tel:+12404202666" data-ga="phone_click" className="text-[var(--color-primary)]">(240) 420-2666</a> · Fax (240) 420-0951</p>
              <p className="text-[var(--color-muted)] mt-2">Monday to Friday, 8:00 AM to 5:00 PM. After hours, calls go to the provider on call.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
