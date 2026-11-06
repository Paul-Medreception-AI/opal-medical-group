import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Opal Medical Group | Hagerstown, MD Primary Care',
  description: 'Contact Opal Medical Group in Hagerstown, MD. Call (240) 420-2666, send a message, view office hours, or request a primary care appointment.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Opal Medical Group | Hagerstown, MD Primary Care',
    description: 'Contact Opal Medical Group in Hagerstown, MD. Call (240) 420-2666, send a message, view office hours, or request a primary care appointment.',
    url: 'https://opalmedicalgroup.com/contact',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Opal Medical Group | Hagerstown, MD Primary Care',
    description: 'Contact Opal Medical Group in Hagerstown, MD. Call (240) 420-2666, send a message, view office hours, or request a primary care appointment.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const hours = [
  { day: 'Monday', time: '8:00 AM-5:30 PM' },
  { day: 'Tuesday', time: '8:00 AM-5:00 PM' },
  { day: 'Wednesday', time: '8:00 AM-5:00 PM' },
  { day: 'Thursday', time: '7:30 AM-8:30 PM' },
  { day: 'Friday', time: '8:00 AM-4:30 PM' },
  { day: 'Saturday-Sunday', time: 'Closed' },
]

export default function ContactPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-[Cormorant,serif] text-6xl font-light">Get In Touch</h1>
          <p className="mt-6 text-lg text-white/90">
            We&apos;d love to hear from you. Reach out to schedule an appointment or ask a question.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div id="form" className="animate-fade-up bg-white rounded-2xl p-10 shadow-sm border border-[var(--color-border)] self-start">
            <h2 className="font-[Cormorant,serif] text-3xl mb-8 text-[var(--color-dark)]">Send Us a Message</h2>
            <p className="mb-6 text-[var(--color-ink)]">
              Leave us a message below or call us at (240) 420-2666.
            </p>
            <ContactForm />
            <p className="text-[var(--color-muted)] text-xs mt-4">
              Please do not send medical details through this form or by email. For anything about your health, call the office.
            </p>
          </div>

          <div className="space-y-8">
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)]">
              <svg className="w-8 h-8 stroke-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              <h3 className="font-[Cormorant,serif] text-2xl mt-4 text-[var(--color-dark)]">Visit Us</h3>
              <p className="mt-2 text-[var(--color-ink)]">Opal Medical Group</p>
              <p className="text-[var(--color-ink)]">1126 Opal Ct</p>
              <p className="text-[var(--color-ink)]">Hagerstown, MD 21740</p>
            </div>

            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)]">
              <svg className="w-8 h-8 stroke-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.5l1.5 4-2 1.5a11 11 0 006.5 6.5L15 13l4 1.5V17a2 2 0 01-2 2A14 14 0 013 5z" />
              </svg>
              <h3 className="font-[Cormorant,serif] text-2xl mt-4 text-[var(--color-dark)]">Call Us</h3>
              <a href="tel:(240) 420-2666" className="block mt-2 font-[Cormorant,serif] text-4xl font-bold text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">
                (240) 420-2666
              </a>
              <a href="mailto:opalmed@opalmedicalgroup.com" className="block mt-3 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">
                opalmed@opalmedicalgroup.com
              </a>
            </div>

            <div className="animate-fade-up bg-[var(--color-light)] rounded-2xl p-8">
              <svg className="w-8 h-8 stroke-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
              </svg>
              <h3 className="font-[Cormorant,serif] text-2xl mt-4 mb-4 text-[var(--color-dark)]">Hours</h3>
              <ul className="space-y-2 text-[var(--color-ink)]">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 border-b border-[var(--color-border)] pb-2 last:border-0">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-up bg-[var(--color-primary)] text-white rounded-2xl p-8">
              <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M8 3v4M16 3v4" />
              </svg>
              <h3 className="font-[Cormorant,serif] text-2xl mt-4">Book an Appointment</h3>
              <p className="mt-2 text-white/90">
                We are currently accepting new patients. Send us a request and our team will follow up to confirm your visit.
              </p>
              <a href="#form" className="inline-block mt-6 rounded-full bg-[var(--color-dark)] px-8 py-3 font-medium text-white hover:bg-[var(--color-ink)] transition-colors">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}