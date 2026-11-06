import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Primary Care Hagerstown MD | Opal Medical Group',
  description: 'Looking for primary care in Hagerstown, MD? Opal Medical Group at 1126 Opal Ct offers annual exams, telehealth and medication management. New patients welcome.',
  alternates: { canonical: '/locations/hagerstown-md' },
  openGraph: {
    title: 'Primary Care Hagerstown MD | Opal Medical Group',
    description: 'Looking for primary care in Hagerstown, MD? Opal Medical Group at 1126 Opal Ct offers annual exams, telehealth and medication management. New patients welcome.',
    url: 'https://opalmedicalgroup.com/locations/hagerstown-md',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primary Care Hagerstown MD | Opal Medical Group',
    description: 'Looking for primary care in Hagerstown, MD? Opal Medical Group at 1126 Opal Ct offers annual exams, telehealth and medication management. New patients welcome.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const services = [
  {
    title: 'Preventive & Annual Health Exams',
    desc: 'Routine checkups and preventive visits to help you stay on top of your health year after year.',
    href: '/services',
    icon: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  },
  {
    title: 'Telehealth & Medication Management',
    desc: 'Video visits and ongoing review of your medications, without always needing to travel to the office.',
    href: '/services',
    icon: 'M15.75 10.5l4.5-2.25v7.5l-4.5-2.25M4.5 6.75h9a2.25 2.25 0 0 1 2.25 2.25v6a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 2.25 15V9a2.25 2.25 0 0 1 2.25-2.25Z',
  },
  {
    title: 'Ongoing Primary Care',
    desc: 'A long-term relationship with a provider who knows your history and supports your wellness journey.',
    href: '/services',
    icon: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z',
  },
]

const faqs = [
  {
    q: 'How do I get to the office from Hagerstown?',
    a: 'We are located at 1126 Opal Ct, Hagerstown, MD 21740. Enter the address in your preferred maps app for current directions from wherever you are starting.',
  },
  {
    q: 'Can I see a provider by telehealth?',
    a: 'Yes, we offer telehealth and video visits. Call (240) 420-2666 to ask whether a video visit suits your needs.',
  },
  {
    q: 'Are you accepting new patients?',
    a: 'Yes, Opal Medical Group is currently accepting new patients. Contact us to get started.',
  },
  {
    q: 'What should I bring to my first visit?',
    a: 'Bring a photo ID, a list of your current medications, and any relevant medical records or questions you would like to discuss with your provider.',
  },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/hero-locations.jpg" alt="Rolling hills and autumn foliage in the countryside">
        <div>
          <nav className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:underline">Home</Link> › Locations › Hagerstown, MD
          </nav>
          <h1 className="font-cormorant text-5xl font-light mb-6">Primary Care Near Hagerstown, MD</h1>
          <p className="text-xl text-white/90 mb-8">Serving patients from Hagerstown and surrounding MD communities.</p>
          <Link href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full font-medium">
            Schedule in Hagerstown
          </Link>
        </div>
      </SplitHero>


      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-6">Serving the Hagerstown Area</h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            Opal Medical Group is located at 1126 Opal Ct, Hagerstown, MD 21740. Patients coming from Hagerstown can enter our address in a maps app for up-to-date directions. Our office is open Monday through Friday, 8:00 AM to 5:00 PM.
          </p>
          <p className="text-[var(--color-ink)] mb-8 leading-relaxed">
            Patients from Hagerstown can expect a welcoming primary care experience with Yi Vance, CRNP, Dr. Farid Murshed, MD, and Dr. M. Khalid Waseem, MD, CMD. When getting to the office is not convenient, telehealth is available as an option for appropriate visits. Call (240) 420-2666 with questions.
          </p>
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center text-[var(--color-accent)]">
            <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-12">Services Available to Hagerstown Patients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="animate-fade-up bg-[var(--color-cream)] border border-[var(--color-border)] rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-[var(--color-accent)] mb-4">
                  <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <h3 className="font-cormorant text-2xl text-[var(--color-dark)] mb-3">{s.title}</h3>
                <p className="text-[var(--color-muted)] mb-4 leading-relaxed">{s.desc}</p>
                <Link href={s.href} className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="animate-fade-up bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20">
        <h2 className="font-cormorant text-3xl text-[var(--color-primary)] mb-4">Can&apos;t Make the Drive? We Offer Telehealth</h2>
        <p className="text-[var(--color-ink)] leading-relaxed mb-4">
          Hagerstown residents can use telehealth for appropriate visits, including medication management and follow-up conversations with their provider. All you need is a device with internet access and a private space.
        </p>
        <p className="text-[var(--color-ink)] leading-relaxed">
          Some concerns still need an in-person exam, and your provider will let you know when that is the case. Call (240) 420-2666 to ask about scheduling a video visit.
        </p>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-10">Hagerstown Patient FAQ</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="animate-fade-up bg-white border border-[var(--color-border)] rounded-2xl p-6">
                <h3 className="font-cormorant text-2xl text-[var(--color-dark)] mb-2">{f.q}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-6">Get Expert Care from Hagerstown</h2>
          <p className="text-white/90 mb-8">Opal Medical Group is currently accepting new patients.</p>
          <Link href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full font-medium">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}