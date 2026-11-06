import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Primary Care in Hagerstown, MD | Opal Medical Group',
  description: 'Opal Medical Group offers primary care in Hagerstown, MD: preventive visits, chronic disease management, women\'s health and care for common illnesses.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Primary Care in Hagerstown, MD | Opal Medical Group',
    description: 'Opal Medical Group offers primary care in Hagerstown, MD: preventive visits, chronic disease management, women\'s health and care for common illnesses.',
    url: 'https://opalmedicalgroup.com/',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primary Care in Hagerstown, MD | Opal Medical Group',
    description: 'Opal Medical Group offers primary care in Hagerstown, MD: preventive visits, chronic disease management, women\'s health and care for common illnesses.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const trust = [
  'Personalized Care Plans',
  'Evidence-Based Care',
  'Clear Answers to Your Questions',
  'Compassionate, Patient-Centered Providers',
]

const steps = [
  { number: '01', title: 'Request an Appointment', description: 'Choose your preferred provider and send your request through our online form or call the office. Our team will follow up to confirm your visit.' },
  { number: '02', title: 'Meet Your Provider', description: 'Your provider listens to your history, concerns, and goals. Together you discuss any needed exams or screenings.' },
  { number: '03', title: 'Follow Your Care Plan', description: 'You leave with a clear plan tailored to your needs. We stay connected for follow-up so your care continues smoothly.' },
]

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden">
        <Image src="/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg" alt="Opal Medical Group" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/85 to-primary/75" />
        <div className="relative max-w-5xl mx-auto px-6 text-center py-20">
          <h1 className="font-['Cormorant_Garamond'] text-6xl sm:text-7xl font-light tracking-tight leading-tight">Primary Care in Hagerstown Built Around Your Whole Health</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mt-6 leading-relaxed">Opal Medical Group provides quality, affordable healthcare backed by expert providers and compassionate care. From preventive check-ups to ongoing condition management, we support every step of your wellness journey.</p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all">Book Appointment</Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">View Our Services</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-4">
          {trust.map((t) => (
            <div key={t} className="flex items-center gap-2">
              <svg className="w-6 h-6 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span className="font-bold text-[var(--color-ink)]">{t}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-5xl text-center text-[var(--color-ink)] mb-4">How We Can Help</h2>
          <p className="text-center text-[var(--color-muted)] mb-16">Primary care services for every stage of life.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg className="w-10 h-10 stroke-[var(--color-primary)]" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6a1 1 0 011 1v1H8V4a1 1 0 011-1zM8 5H6a1 1 0 00-1 1v6M16 5h2a1 1 0 011 1v3" /><circle cx="14" cy="15" r="3.5" /><path strokeLinecap="round" d="M16.5 17.5L20 21" /></svg>
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--color-ink)] mt-5">Age-Related Screening</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">Targeted screenings for age-related conditions support early detection and healthier aging. Your provider reviews results with you and plans next steps together.</p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">Learn More →</Link>
            </div>
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg className="w-10 h-10 stroke-[var(--color-primary)]" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.600-7 10-7 10z" /><circle cx="12" cy="10" r="2" /><path strokeLinecap="round" d="M12 12v3M10.500 13.500h3" /></svg>
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--color-ink)] mt-5">Women&apos;s Health</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">Personalized services cover routine checkups, reproductive care, and specialized treatments for every stage of life. Care is delivered with comfort and respect.</p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">Learn More →</Link>
            </div>
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg className="w-10 h-10 stroke-[var(--color-primary)]" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-45 12 12)" /><path strokeLinecap="round" d="M10 10l4 4M12 8.500l.01 0M15.500 12l.01 0" /></svg>
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--color-ink)] mt-5">General Illness &amp; Injuries</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">Timely evaluation and treatment for common illnesses and minor injuries help restore your well-being quickly. Your provider explains your options clearly.</p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 animate-fade-up">
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[var(--color-ink)]">Caring for Hagerstown Families Since 2000</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mt-6">Opal Medical Group has served Hagerstown, Maryland since 2000, with a commitment to delivering high-quality healthcare for families and individuals. From preventive check-ups to advanced treatments, we put patient comfort, safety, and excellence first.</p>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">Our providers and staff bring combined experience in medicine to every visit. We take time to listen, explain, and build care plans that fit your life, so you always understand your options and next steps.</p>
            <Link href="/team" className="inline-block text-[var(--color-primary)] font-semibold mt-6 hover:underline">Meet Our Team →</Link>
          </div>
          <div className="lg:col-span-2 bg-[var(--color-light)] rounded-2xl h-80 w-full flex items-center justify-center animate-fade-up">
            <svg className="w-20 h-20 stroke-[var(--color-primary)] opacity-40" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" /><rect x="3" y="3" width="18" height="18" rx="4" /></svg>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl text-center mb-16">Getting Started Is Simple</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.number} className="animate-fade-up">
                <div className="font-['Cormorant_Garamond'] text-7xl text-[var(--color-primary)] opacity-60">{s.number}</div>
                <h3 className="font-['Cormorant_Garamond'] text-2xl mt-2">{s.title}</h3>
                <p className="font-['DM_Sans'] text-sm text-white/70 mt-3 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-5xl font-light mb-6">Trusted Primary Care for Hagerstown Families</h2>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-dark)] font-bold px-12 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all text-lg">Book Appointment</Link>
        </div>
      </section>
    </main>
  )
}