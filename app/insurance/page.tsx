import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Insurance & Billing | Opal Medical Group Hagerstown',
  description: 'Learn how insurance verification, billing, and self-pay estimates work at Opal Medical Group, your primary care office in Hagerstown, MD.',
  alternates: { canonical: '/insurance' },
  openGraph: {
    title: 'Insurance & Billing | Opal Medical Group Hagerstown',
    description: 'Learn how insurance verification, billing, and self-pay estimates work at Opal Medical Group, your primary care office in Hagerstown, MD.',
    url: 'https://opalmedicalgroup.com/insurance',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insurance & Billing | Opal Medical Group Hagerstown',
    description: 'Learn how insurance verification, billing, and self-pay estimates work at Opal Medical Group, your primary care office in Hagerstown, MD.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const steps = [
  {
    title: 'Verify Coverage',
    text: 'Before your first visit, our team checks your specific benefits so you know what to expect. Your plan determines what it covers.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m6 2.25c0 5-3.5 8.5-9 10-5.5-1.5-9-5-9-10V5.5L12 3l9 2.5V12Z" />
      </svg>
    ),
  },
  {
    title: 'Service Provided',
    text: 'You meet with your provider and receive the care you need. A co-pay is a set amount some plans ask you to pay at the time of your visit.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.5-2-4.5-4.5-4.5-1.7 0-3.2 1-4.5 2.5-1.3-1.5-2.8-2.5-4.5-2.5C5 3.75 3 5.75 3 8.25c0 6 9 12 9 12s9-6 9-12Z" />
      </svg>
    ),
  },
  {
    title: 'Claim Submitted',
    text: 'We send the claim to your insurance company. They review it and decide how much of the cost your plan covers under your benefits.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.6a3.4 3.4 0 0 0-3.4-3.4h-1.5a1.9 1.9 0 0 1-1.9-1.9v-1.5a3.4 3.4 0 0 0-3.4-3.4H8.25m0 12.75h7.5m-7.5 3h4.5M10.5 2.25H5.6c-.6 0-1.1.5-1.1 1.1v17.3c0 .6.5 1.1 1.1 1.1h12.8c.6 0 1.1-.5 1.1-1.1V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: 'You Pay Remainder',
    text: 'Your insurer sends you an Explanation of Benefits (EOB), which is not a bill. Any remaining balance, such as a deductible amount, is then due.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
      </svg>
    ),
  },
]

const faqs = [
  {
    q: 'How do I find out if my plan covers a visit?',
    a: 'Call our office at (240) 420-2666. Coverage varies a great deal between plans, so we verify your specific benefits before your first visit.',
  },
  {
    q: 'What is a deductible?',
    a: 'A deductible is the amount you pay for covered care each plan year before your insurance begins to share costs. Your plan documents list your specific amount.',
  },
  {
    q: 'What is an Explanation of Benefits (EOB)?',
    a: 'An EOB is a statement from your insurer showing what was billed, what the plan covered, and what you may owe. It is not a bill, but it helps you check your statements.',
  },
  {
    q: 'Can I be seen if I do not have insurance?',
    a: 'Yes. Self-pay patients are welcome and receive an estimate up front, so you understand the expected cost of care before your visit.',
  },
  {
    q: 'What should I do if I have a question about a statement?',
    a: 'Contact our office at (240) 420-2666 and we will walk through it with you. It helps to have your statement and any EOB from your insurer nearby.',
  },
]

export default function InsurancePage() {
  return (
    <main>
      <SplitHero src="/images/stock/hub-insurance.jpg" alt="A smiling woman holds up an insurance card">
        <div>
          <h1 className="font-cormorant text-5xl font-light">Insurance &amp; Billing</h1>
          <p className="mt-4 text-lg text-white/90">Transparent pricing and billing information</p>
        </div>
      </SplitHero>

      {/* The real accepted-carrier list must be supplied by the practice before any carrier is named on this page. */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16 text-[var(--color-primary)]">Accepted Insurance Plans</h2>
          <div className="animate-fade-up max-w-3xl mx-auto bg-white border border-[var(--color-border)] rounded-2xl p-10 text-center">
            <div className="flex justify-center text-[var(--color-accent)] mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.3 6.7 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.4a1.1 1.1 0 0 0-.8-1.1l-4.1-1.2a1.1 1.1 0 0 0-1.1.3l-1 1.1a12 12 0 0 1-5.6-5.6l1.1-1a1.1 1.1 0 0 0 .3-1.1L8 3.3a1.1 1.1 0 0 0-1.1-.8H5.5a2.25 2.25 0 0 0-2.25 2.25v2Z" />
              </svg>
            </div>
            <p className="text-[var(--color-ink)] leading-relaxed">
              Coverage for primary care varies a great deal between insurance plans, even plans from the same company. Rather than give you a general list, we verify your specific benefits before your first visit so you know what to expect.
            </p>
            <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
              Self-pay patients are welcome and receive an estimate up front.
            </p>
            <a href="tel:+12404202666" data-ga="phone_click" className="inline-block mt-8 rounded-full bg-[var(--color-accent)] px-8 py-3 text-white font-medium transition-colors hover:bg-[var(--color-accent-dark)]">
              Call (240) 420-2666
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16 text-[var(--color-primary)]">How Billing Works</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="animate-fade-up bg-[var(--color-cream)] border border-[var(--color-border)] rounded-2xl p-8 text-center transition-shadow hover:shadow-lg">
                <div className="flex justify-center text-[var(--color-accent)] mb-4">{s.icon}</div>
                <p className="text-sm text-[var(--color-muted)]">Step {i + 1}</p>
                <h3 className="font-cormorant text-2xl text-[var(--color-dark)] mt-1">{s.title}</h3>
                <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="animate-fade-up bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto mx-6 my-20">
        <h3 className="font-cormorant text-3xl text-[var(--color-dark)]">Self-Pay Options</h3>
        <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
          If you do not have insurance, or choose not to use it, you are welcome here. Before your care, you can request a good faith estimate of the expected costs so there are no surprises.
        </p>
        <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
          Under the federal No Surprises Act, patients who are uninsured or self-paying have the right to receive a good faith estimate of expected charges before scheduled care. Call (240) 420-2666 to ask for yours.
        </p>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-12 text-[var(--color-primary)]">Billing Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="animate-fade-up group bg-white border border-[var(--color-border)] rounded-xl p-6">
                <summary className="cursor-pointer font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-dark)]">{f.q}</summary>
                <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light">Questions About Coverage?</h2>
          <p className="mt-4 text-white/90">Reach out and our team will help you understand your options before your visit.</p>
          <a href="/contact" className="inline-block mt-8 rounded-full bg-[var(--color-accent-dark)] px-8 py-3 font-medium text-white transition-colors hover:bg-[var(--color-ink)]">
            Book Appointment
          </a>
        </div>
      </section>
    </main>
  )
}