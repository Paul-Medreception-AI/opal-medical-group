import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Telehealth Services | Opal Medical Group Hagerstown',
  description: 'Learn how virtual primary care visits work at Opal Medical Group in Hagerstown, MD, including what can be handled remotely and what to prepare.',
  alternates: { canonical: '/telehealth' },
  openGraph: {
    title: 'Telehealth Services | Opal Medical Group Hagerstown',
    description: 'Learn how virtual primary care visits work at Opal Medical Group in Hagerstown, MD, including what can be handled remotely and what to prepare.',
    url: 'https://opalmedicalgroup.com/telehealth',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telehealth Services | Opal Medical Group Hagerstown',
    description: 'Learn how virtual primary care visits work at Opal Medical Group in Hagerstown, MD, including what can be handled remotely and what to prepare.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const steps = [
  {
    number: '01',
    title: 'Schedule',
    description: 'Request a telehealth visit through our contact form or call the office at (240) 420-2666. Our team will follow up to confirm your visit.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Connect',
    description: 'At your appointment time, join your video visit from a phone, tablet, or computer and meet with your provider face to face on screen.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.5-2.25v7.5l-4.5-2.25M4.5 6.75h9a2.25 2.25 0 012.25 2.25v6a2.25 2.25 0 01-2.25 2.25h-9A2.25 2.25 0 012.25 15V9a2.25 2.25 0 012.25-2.25z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Get Care',
    description: 'Your provider reviews your concerns, discusses options, and outlines a clear plan, including any follow-up or in-person visit that may be needed.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 9 4 9 9z" />
      </svg>
    ),
  },
]

const remote = [
  'Medication management and follow-up',
  'Reviewing lab or screening results',
  'Discussing ongoing conditions and care plans',
  'Questions about common, non-urgent illnesses',
]

const inPerson = [
  'Physical exams and hands-on evaluation',
  'Vaccinations',
  'Certain screenings and tests',
  'Injuries or symptoms that need to be examined in person',
]

const benefits = [
  {
    title: 'No Commute',
    description: 'Skip the drive and waiting room. Meet with your provider from home or wherever you have a private space.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75V19.5a.75.75 0 00.75.75H9.75v-5.25h4.5v5.25h4.5a.75.75 0 00.75-.75V9.75" />
      </svg>
    ),
  },
  {
    title: 'Works From Any Device',
    description: 'Join from a smartphone, tablet, or computer with a camera and microphone.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
  },
  {
    title: 'Continuity With Your Provider',
    description: 'Stay connected with the same care team between office visits for follow-up and medication questions.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: 'Clear Answers',
    description: 'Your provider explains your options and next steps in plain language so you leave knowing what to do.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.3 48.3 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
]

export default function TelehealthPage() {
  return (
    <main className="bg-[var(--color-cream)] text-[var(--color-ink)]">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[Cormorant_Garamond,serif] text-5xl font-light">Telehealth Services</h1>
          <p className="mt-6 text-lg text-white/90">
            Virtual visits let you connect with your Opal Medical Group primary care provider from home, with the same personal attention you receive in the office.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl font-light text-center text-[var(--color-primary)]">How Telehealth Works</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.number} className="animate-fade-up bg-white border border-[var(--color-border)] rounded-2xl p-8 transition hover:shadow-lg">
                <div className="text-[var(--color-accent)]">{s.icon}</div>
                <p className="mt-4 text-sm tracking-widest text-[var(--color-muted)]">STEP {s.number}</p>
                <h3 className="mt-1 text-2xl font-semibold text-[var(--color-dark)]">{s.title}</h3>
                <p className="mt-3 text-[var(--color-muted)]">{s.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="animate-fade-up bg-white border border-[var(--color-border)] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[var(--color-dark)]">Often Handled Remotely</h3>
              <ul className="mt-4 space-y-3 text-[var(--color-muted)]">
                {remote.map((r) => (
                  <li key={r} className="flex gap-3">
                    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-up bg-white border border-[var(--color-border)] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[var(--color-dark)]">Best Seen In Person</h3>
              <ul className="mt-4 space-y-3 text-[var(--color-muted)]">
                {inPerson.map((r) => (
                  <li key={r} className="flex gap-3">
                    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-[var(--color-muted)]">
            Your provider will let you know if a concern is better addressed in the office. For emergencies, call 911.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl font-light text-center text-[var(--color-primary)]">Benefits of Virtual Visits</h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="animate-fade-up bg-[var(--color-cream)] border border-[var(--color-border)] rounded-2xl p-8 transition hover:shadow-lg">
                <div className="text-[var(--color-accent)]">{b.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-[var(--color-dark)]">{b.title}</h3>
                <p className="mt-3 text-[var(--color-muted)]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="animate-fade-up bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20">
        <h2 className="font-[Cormorant_Garamond,serif] text-4xl font-light text-[var(--color-primary)]">What You Need</h2>
        <ul className="mt-6 space-y-4 text-[var(--color-ink)]">
          <li className="flex gap-3">
            <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
            </svg>
            <span>A smartphone, tablet, or computer with a working camera and microphone.</span>
          </li>
          <li className="flex gap-3">
            <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
            <span>A stable internet connection that can support video calls.</span>
          </li>
          <li className="flex gap-3">
            <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <span>A quiet, private, well-lit space where you can talk openly.</span>
          </li>
          <li className="flex gap-3">
            <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            <span>Your medication list and any questions written down before the visit.</span>
          </li>
        </ul>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl font-light">Ready to Schedule a Virtual Visit?</h2>
          <p className="mt-4 text-white/90">Contact our Hagerstown office to request an appointment or call (240) 420-2666.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-[var(--color-accent)] px-8 py-3 font-semibold text-white transition hover:bg-[var(--color-accent-dark)]">
            Book Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}