import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meet Our Team | Opal Medical Group in Hagerstown',
  description: 'Meet the providers at Opal Medical Group in Hagerstown, MD: a family nurse practitioner and two internal medicine physicians dedicated to your care.',
  alternates: { canonical: '/team' },
  openGraph: {
    title: 'Meet Our Team | Opal Medical Group in Hagerstown',
    description: 'Meet the providers at Opal Medical Group in Hagerstown, MD: a family nurse practitioner and two internal medicine physicians dedicated to your care.',
    url: 'https://opalmedicalgroup.com/team',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Our Team | Opal Medical Group in Hagerstown',
    description: 'Meet the providers at Opal Medical Group in Hagerstown, MD: a family nurse practitioner and two internal medicine physicians dedicated to your care.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const team = [
  {
    name: 'Yi Vance, CRNP',
    role: 'Family Nurse Practitioner',
    image: null as string | null,
    bio: 'Yi Vance joined the Opal Medical Group team full-time in January 2024. Previously, she worked as a Registered Nurse at Meritus Medical Center and in a wound clinic, and she brings that hands-on nursing background to every visit. She listens carefully and explains your options clearly.',
  },
  {
    name: 'Dr. Farid Murshed, MD',
    role: 'Internal Medicine',
    image: null as string | null,
    bio: 'Dr. Murshed is an internal medicine physician with over 18 years of experience, delivering comprehensive adult care. He is fluent in English, Persian, and Bengali. Patients can expect thoughtful, clear communication at every step.',
  },
  {
    name: 'Dr. M. Khalid Waseem, MD, CMD',
    role: 'Internal Medicine',
    image: null as string | null,
    bio: 'Dr. Waseem is a highly respected internal medicine physician with over 18 years of experience. Fluent in Hindi, Punjabi, Urdu, and English, he delivers compassionate, patient-focused care across a wide range of adult health needs.',
  },
]

export default function TeamPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[Cormorant] text-6xl font-light">Meet Our Team</h1>
          <p className="mt-6 text-lg leading-relaxed">
            Experienced, compassionate providers serving Hagerstown families with personalized, evidence-based primary care.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[Cormorant] text-4xl text-center mb-16 text-[var(--color-dark)]">Our Providers &amp; Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((m) => (
              <div key={m.name} className="animate-fade-up bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative bg-[var(--color-light)] h-72 flex items-center justify-center">
                  {m.image ? (
                    <Image src={`/images/${m.image}`} alt={`Portrait of ${m.name}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  ) : (
                    <svg className="w-24 h-24 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="12" cy="8" r="4" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                    </svg>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-[Cormorant] text-2xl text-[var(--color-ink)]">{m.name}</h3>
                  <p className="font-[DM_Sans] text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mt-1">{m.role}</p>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant] text-4xl font-light">Ready to Meet Your Provider?</h2>
          <p className="mt-4 text-white/80">We are currently accepting new patients. Call (240) 420-2666 or send us a request online.</p>
          <Link href="/contact" className="inline-block mt-8 px-8 py-3 rounded-full bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-dark)] transition-colors">
            Book Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}