import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Opal Medical Group | Hagerstown Primary Care',
  description: 'Learn about Opal Medical Group, a Hagerstown, MD primary care practice focused on affordable, accessible and compassionate care for families and individuals.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Opal Medical Group | Hagerstown Primary Care',
    description: 'Learn about Opal Medical Group, a Hagerstown, MD primary care practice focused on affordable, accessible and compassionate care for families and individuals.',
    url: 'https://opalmedicalgroup.com/about',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Opal Medical Group | Hagerstown Primary Care',
    description: 'Learn about Opal Medical Group, a Hagerstown, MD primary care practice focused on affordable, accessible and compassionate care for families and individuals.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const hours = [
  { day: 'Mon', time: '8:00 AM-5:30 PM' },
  { day: 'Tue', time: '8:00 AM-5:00 PM' },
  { day: 'Wed', time: '8:00 AM-5:00 PM' },
  { day: 'Thu', time: '7:30 AM-8:30 PM' },
  { day: 'Fri', time: '8:00 AM-4:30 PM' },
  { day: 'Sat-Sun', time: 'Closed' },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>About</span>
          </nav>
          <h1 className="font-['Cormorant_Garamond',serif] text-6xl font-light">
            Caring for Hagerstown Families
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-white/80">
            Trusted primary care built on listening, clear answers and compassion.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)] lg:col-span-3 lg:pr-12">
            <p>
              Opal Medical Group serves Hagerstown, Maryland with a commitment to delivering high-quality healthcare for families and individuals. From preventive check-ups to ongoing condition management, we put patient comfort, safety, and excellence first.
            </p>
            <p>
              Our providers take time to listen, explain, and build care plans that fit your life, so you always understand your options and next steps.
            </p>
            <p>
              We believe good healthcare should be affordable, accessible, and compassionate. Whether you come in for a routine screening or ongoing management of a long-term condition, we aim to be a trusted partner in your wellness journey.
            </p>
          </div>

          <aside className="animate-fade-up h-fit rounded-2xl border border-[var(--color-border)] bg-white p-8 lg:col-span-2">
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-primary)]">Visit Us</h2>
            <div className="mt-6 space-y-5 text-[var(--color-ink)]">
              <div className="flex gap-3">
                <svg className="h-6 w-6 shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>(240) 420-2666</span>
              </div>
              <div className="flex gap-3">
                <svg className="h-6 w-6 shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>1126 Opal Ct, Hagerstown, MD 21740</span>
              </div>
              <div className="flex gap-3">
                <svg className="h-6 w-6 shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                </svg>
                <ul className="w-full space-y-1">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span className="font-medium">{h.day}</span>
                      <span className="text-[var(--color-muted)]">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-block w-full rounded-full bg-[var(--color-accent)] px-6 py-3 text-center font-medium text-white transition-colors hover:bg-[var(--color-accent-dark)]"
            >
              Book Appointment
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 text-center font-['Cormorant_Garamond',serif] text-4xl text-[var(--color-primary)]">Our Approach</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
              <svg className="h-8 w-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-3.6-.68L3 20l1.4-3.7C3.5 15.3 3 13.8 3 12.25c0-4.556 4.03-8.25 9-8.25s9 3.694 9 7.25z" />
              </svg>
              <h3 className="mt-4 font-['Cormorant_Garamond',serif] text-xl font-bold text-[var(--color-primary)]">Clear Communication</h3>
              <p className="mt-2 text-[var(--color-muted)]">Your provider listens first and explains your options in plain language. You leave each visit knowing what comes next.</p>
            </div>
            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
              <svg className="h-8 w-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m6 2.25c0 5.25-3.75 8.25-9 10.5-5.25-2.25-9-5.25-9-10.5V5.25L12 2.25l9 3v6.75z" />
              </svg>
              <h3 className="mt-4 font-['Cormorant_Garamond',serif] text-xl font-bold text-[var(--color-primary)]">Prevention First</h3>
              <p className="mt-2 text-[var(--color-muted)]">Screenings, vaccinations and lifestyle guidance help catch concerns early. The goal is to keep small issues from becoming larger ones.</p>
            </div>
            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
              <svg className="h-8 w-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="mt-4 font-['Cormorant_Garamond',serif] text-xl font-bold text-[var(--color-primary)]">Personal, Ongoing Care</h3>
              <p className="mt-2 text-[var(--color-muted)]">Care plans are tailored to your needs and goals. We stay connected through follow-up so your care continues smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light">Ready to Get Started?</h2>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[var(--color-accent)] px-8 py-3 font-medium text-white transition-colors hover:bg-[var(--color-accent-dark)]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}