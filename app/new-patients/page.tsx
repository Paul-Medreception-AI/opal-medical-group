import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Patients | Opal Medical Group in Hagerstown, MD',
  description: 'New to Opal Medical Group? Learn what to expect at your first primary care visit in Hagerstown, what to bring, which forms to expect, and how telehealth works.',
  alternates: { canonical: '/new-patients' },
  openGraph: {
    title: 'New Patients | Opal Medical Group in Hagerstown, MD',
    description: 'New to Opal Medical Group? Learn what to expect at your first primary care visit in Hagerstown, what to bring, which forms to expect, and how telehealth works.',
    url: 'https://opalmedicalgroup.com/new-patients',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Patients | Opal Medical Group in Hagerstown, MD',
    description: 'New to Opal Medical Group? Learn what to expect at your first primary care visit in Hagerstown, what to bring, which forms to expect, and how telehealth works.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const steps = [
  { number: '01', title: 'Schedule', description: 'Book online through our contact form or call the office at (240) 420-2666. Our team will follow up to confirm your visit. We are currently accepting new patients.' },
  { number: '02', title: 'Complete Paperwork', description: 'Intake forms can be completed before your visit or at your first appointment, so you can choose what is most convenient.' },
  { number: '03', title: 'First Visit', description: 'Your provider reviews your history, performs an examination as needed, and leaves time for your questions and goals.' },
  { number: '04', title: 'Care Plan', description: 'You leave with a plan you agree on together, and we stay connected for follow-up so your care continues smoothly.' },
]

const bring = [
  { label: 'Photo ID + Insurance Card', text: 'A government-issued photo ID and your current insurance card, if you have one, help us set up your record accurately.' },
  { label: 'Medication List', text: 'List every prescription, over-the-counter medicine and supplement, with doses, so your provider can review them with you.' },
  { label: 'Prior Records', text: 'Bring recent test results, imaging reports, vaccination records or notes from other providers if you have them.' },
  { label: 'Emergency Contact', text: 'Name and phone number of someone we can reach if needed.' },
]

const forms = [
  { label: 'Intake form', text: 'Your health history, current concerns and medications.' },
  { label: 'Consent forms', text: 'Your agreement to receive care and treatment.' },
  { label: 'HIPAA authorization', text: 'Explains how your health information is protected and who may receive it.' },
]

const Check = () => (
  <svg className="w-8 h-8 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default function NewPatientsPage() {
  return (
    <main>
      <SplitHero src="/images/stock/hub-new-patients.jpg" alt="A clinician takes notes on a clipboard during an intake visit">
        <div>
          <h1 className="font-cormorant text-5xl font-light">New Patients</h1>
          <p className="mt-4 text-lg">Everything you need to know before your first visit</p>
        </div>
      </SplitHero>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16 text-[var(--color-dark)]">Your First Visit</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.number} className="animate-fade-up bg-white rounded-2xl border border-[var(--color-border)] p-8">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">{s.number}</div>
                <h3 className="mt-4 text-xl font-semibold text-[var(--color-ink)]">{s.title}</h3>
                <p className="mt-2 text-[var(--color-muted)] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-12 text-[var(--color-dark)]">What to Bring</h2>
          <ul className="grid gap-8 md:grid-cols-2">
            {bring.map((b) => (
              <li key={b.label} className="animate-fade-up flex gap-4">
                <Check />
                <div>
                  <p className="font-bold text-[var(--color-ink)]">{b.label}</p>
                  <p className="text-[var(--color-muted)] leading-relaxed">{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="animate-fade-up bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20">
        <h2 className="font-cormorant text-3xl text-[var(--color-dark)]">Patient Forms</h2>
        <p className="mt-4 text-[var(--color-muted)]">Forms available at our office or can be completed at your first appointment.</p>
        <p className="mt-6 font-semibold text-[var(--color-ink)]">Forms you can expect:</p>
        <ul className="mt-4 space-y-4">
          {forms.map((f) => (
            <li key={f.label} className="flex gap-4">
              <Check />
              <div>
                <p className="font-bold text-[var(--color-ink)]">{f.label}</p>
                <p className="text-[var(--color-muted)]">{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white py-16">
        <div className="animate-fade-up max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-dark)]">Telehealth Visits</h2>
          <p className="mt-4 max-w-3xl text-[var(--color-muted)] leading-relaxed">
            Opal Medical Group offers telehealth and video visits for telehealth and medication management. You meet with your provider by video from home or another private place. Ask our office whether a video visit suits your concern.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="bg-[var(--color-cream)] rounded-2xl border border-[var(--color-border)] p-8">
              <svg className="w-8 h-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5h3a1.5 1.5 0 0 1 1.5 1.5v18a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 21V3a1.5 1.5 0 0 1 1.5-1.5Z" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-[var(--color-ink)]">What you need</h3>
              <p className="mt-2 text-[var(--color-muted)]">A smartphone, tablet or computer with a camera, microphone and speaker, plus a reliable internet connection.</p>
            </div>
            <div className="bg-[var(--color-cream)] rounded-2xl border border-[var(--color-border)] p-8">
              <svg className="w-8 h-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-[var(--color-ink)]">How it works</h3>
              <p className="mt-2 text-[var(--color-muted)]">Request a visit, and our team will confirm the details and how to connect. Have your medication list and questions ready.</p>
            </div>
            <div className="bg-[var(--color-cream)] rounded-2xl border border-[var(--color-border)] p-8">
              <svg className="w-8 h-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 0 0-9 0v3.75m-.75 0h10.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H6.75a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5Z" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-[var(--color-ink)]">Privacy tips</h3>
              <p className="mt-2 text-[var(--color-muted)]">Choose a private, quiet room, use headphones if you can, and avoid public Wi-Fi. Close other apps and check your camera beforehand.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-3xl text-[var(--color-dark)]">Scheduling Questions</h2>
          <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
            To reschedule or ask about the office&apos;s policies, please call us at (240) 420-2666. Office hours are Monday through Friday, 8:00 AM to 5:00 PM.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light">Ready to Become a Patient?</h2>
          <p className="mt-4">We are currently accepting new patients at 1126 Opal Ct, Hagerstown, MD 21740.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-[var(--color-accent-dark)] px-8 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-ink)]">
            Book Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}