import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import SplitHero from '@/components/SplitHero'

const TITLE = 'Contact Opal Medical Group | Hagerstown, MD'
const DESCRIPTION = 'Contact Opal Medical Group at 1126 Opal Ct, Hagerstown, MD 21740. Call (240) 420-2666, fax (240) 420-0951, or request an appointment online. Open Monday to Friday, 8 AM to 5 PM.'
const HERO = { src: '/images/stock/hub-contact.jpg', alt: 'Medical staff at a modern clinic reception desk' }
const DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=1126+Opal+Ct%2C+Hagerstown%2C+MD+21740'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/contact' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://opalmedicalgroup.com/contact', siteName: 'Opal Medical Group', type: 'website', images: [{ url: HERO.src }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO.src] },
}

// Hours per Dr. Waseem (discovery call, 2026-10-28): Monday through Friday, 8 to 5. The old
// website's late Thursday was wrong.
const hours = [
  { day: 'Monday', time: '8:00 AM to 5:00 PM' },
  { day: 'Tuesday', time: '8:00 AM to 5:00 PM' },
  { day: 'Wednesday', time: '8:00 AM to 5:00 PM' },
  { day: 'Thursday', time: '8:00 AM to 5:00 PM' },
  { day: 'Friday', time: '8:00 AM to 5:00 PM' },
  { day: 'Saturday and Sunday', time: 'Closed' },
]

export default function ContactPage() {
  return (
    <main>
      <SplitHero src={HERO.src} alt={HERO.alt}>
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/80">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span>Contact</span>
        </nav>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light leading-tight">Contact Us</h1>
        <p className="mt-5 max-w-xl text-lg sm:text-xl text-white/85 leading-relaxed">Call, send a request, or stop by. Our front office answers Monday to Friday, 8 AM to 5 PM, and a provider is on call after hours.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="tel:+12404202666" data-ga="phone_click" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-7 py-3.5 rounded-xl font-semibold transition-colors">Call (240) 420-2666</a>
          <a href="#form" className="border-2 border-white text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors">Request an Appointment</a>
        </div>
      </SplitHero>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div id="form" className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-[var(--color-border)] self-start scroll-mt-28">
            <h2 className="font-cormorant text-3xl mb-2 text-[var(--color-dark)]">Request an Appointment</h2>
            <p className="mb-6 text-[var(--color-muted)]">Leave your name and the best way to reach you. Our front office calls back during business hours to find a time.</p>
            <ContactForm />
            <p className="text-[var(--color-muted)] text-xs mt-4">Please do not send medical details through this form or by email. For anything about your health, call the office. In an emergency, call 911.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl text-[var(--color-dark)]">Visit Us</h3>
              <p className="mt-2 text-[var(--color-ink)]">Opal Medical Group</p>
              <p className="text-[var(--color-ink)]">1126 Opal Ct</p>
              <p className="text-[var(--color-ink)]">Hagerstown, MD 21740</p>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-[var(--color-primary)] font-semibold hover:underline">Get directions →</a>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl text-[var(--color-dark)]">Call, Fax or Email</h3>
              <a href="tel:+12404202666" data-ga="phone_click" className="block mt-2 font-cormorant text-4xl font-bold text-[var(--color-primary)] hover:text-[var(--color-dark)] transition-colors">(240) 420-2666</a>
              <p className="mt-2 text-[var(--color-ink)]">Fax (240) 420-0951</p>
              <a href="mailto:opalmed@opalmedicalgroup.com" data-ga="email_click" className="block mt-2 text-[var(--color-primary)] hover:underline">opalmed@opalmedicalgroup.com</a>
              <p className="mt-3 text-sm text-[var(--color-muted)]">Referring offices and records requests: see <Link href="/refer" className="text-[var(--color-primary)] hover:underline">Referrals &amp; Records</Link>.</p>
            </div>

            <div className="bg-[var(--color-light)] rounded-2xl p-8">
              <h3 className="font-cormorant text-2xl mb-4 text-[var(--color-dark)]">Hours</h3>
              <ul className="space-y-2 text-[var(--color-ink)]">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 border-b border-[var(--color-border)] pb-2 last:border-0">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-[var(--color-muted)]">After 5 PM, calls are forwarded to the provider on call. Same-day sick visits: call in the morning.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
