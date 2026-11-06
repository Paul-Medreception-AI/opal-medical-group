import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Annual Physical vs Problem-Focused Visit | Opal Medical Group',
  description: 'Compare an annual physical with a problem-focused visit: purpose, time, cost structure and who each is best for. Primary care in Hagerstown, MD.',
  alternates: { canonical: '/compare/annual-physical-vs-problem-focused-visit' },
  openGraph: {
    title: 'Annual Physical vs Problem-Focused Visit | Opal Medical Group',
    description: 'Compare an annual physical with a problem-focused visit: purpose, time, cost structure and who each is best for. Primary care in Hagerstown, MD.',
    url: 'https://opalmedicalgroup.com/compare/annual-physical-vs-problem-focused-visit',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Annual Physical vs Problem-Focused Visit | Opal Medical Group',
    description: 'Compare an annual physical with a problem-focused visit: purpose, time, cost structure and who each is best for. Primary care in Hagerstown, MD.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const rows = [
  { label: 'Main purpose', a: 'Prevention, screening and a full review of your health', b: 'Evaluating and treating a specific symptom or concern' },
  { label: 'Effectiveness', a: 'Helps catch risk factors early and keeps vaccines and screenings current', b: 'Focused diagnosis and treatment of the issue that brought you in' },
  { label: 'Side effects / downsides', a: 'No treatment risks; screening can occasionally lead to follow-up tests', b: 'Limited scope; unrelated concerns may need a separate visit' },
  { label: 'Cost', a: 'Often covered as preventive care by insurance; membership models may include it', b: 'Copays and deductibles may apply; membership models may include visits for a monthly membership fee' },
  { label: 'Time commitment', a: 'Longer appointment, typically once a year', b: 'Shorter appointment, scheduled as needed' },
  { label: 'Best for', a: 'Anyone wanting a baseline, prevention plan or routine check-in', b: 'Anyone with new symptoms, a flare-up or a medication question' },
]

const check = (
  <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

const faqs = [
  { q: 'Can I discuss a problem during my annual physical?', a: 'Brief concerns can often be mentioned, but a significant new problem may need its own problem-focused visit so it gets enough time and proper documentation.' },
  { q: 'Do I need an annual physical if I feel healthy?', a: 'Many people benefit. Feeling well does not rule out high blood pressure, elevated cholesterol or blood sugar changes, which often cause no symptoms early on.' },
  { q: 'Can a problem-focused visit happen by telehealth?', a: 'Many concerns, such as medication management and some symptoms, can be handled by video visit. Opal Medical Group offers telehealth. Some problems still need an in-person exam.' },
  { q: 'Which visit costs less?', a: 'It depends on your coverage. Insurance plans often treat preventive visits differently from problem visits, so check your plan. Copays and deductibles may apply to problem visits.' },
  { q: 'Is Opal Medical Group accepting new patients?', a: 'Yes, Opal Medical Group is currently accepting new patients. Call (240) 420-2666 or use the contact page to get started.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link> › <span>Resources</span> › <span>Comparison</span>
          </nav>
          <h1 className="font-[Cormorant_Garamond,serif] text-5xl font-light">Annual Physical vs Problem-Focused Visit</h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto opacity-95">Understand which type of primary care appointment fits your needs, so you book the right visit in Hagerstown, MD.</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/compare-annual-physical-vs-problem-focused-visit.jpg"} alt={"Senior man consulting with female doctor in a colorful office setting."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl mb-12 text-[var(--color-dark)]">Side-by-Side Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4">Factor</div>
              <div className="p-4">Annual Physical</div>
              <div className="p-4">Problem-Focused Visit</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-3 text-sm text-[var(--color-ink)] ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-light)]'}`}>
                <div className="p-4 font-semibold">{r.label}</div>
                <div className="p-4">{r.a}</div>
                <div className="p-4">{r.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-[var(--color-ink)] leading-relaxed">
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl mb-6 text-[var(--color-dark)]">The Annual Physical</h2>
          <p className="mb-4">An annual physical is a planned, preventive visit. Your clinician reviews your history, medications, family risks and lifestyle, checks vital signs, performs an exam and recommends screenings and vaccines suited to your age and risk factors.</p>
          <p className="mb-4">Evidence supports specific preventive services, such as blood pressure checks, cholesterol and diabetes screening, and cancer screenings at recommended ages. The value of the visit comes largely from these targeted services and from building an ongoing relationship with your clinician.</p>
          <p className="mb-12">Typical patients include adults wanting a baseline, people with stable chronic conditions, and anyone due for screenings. Expect a longer conversation, possible lab work and a prevention plan afterward.</p>

          <h2 className="font-[Cormorant_Garamond,serif] text-4xl mb-6 text-[var(--color-dark)]">The Problem-Focused Visit</h2>
          <p className="mb-4">A problem-focused visit addresses a specific concern: a persistent cough, joint pain, dizziness, a skin change, or a medication adjustment. The clinician concentrates on that complaint, examines the relevant systems and orders targeted tests if needed.</p>
          <p className="mb-4">Because the visit is narrow by design, it is efficient and usually shorter. It is the right tool when something has changed and you want a diagnosis or treatment plan without waiting for a yearly appointment.</p>
          <p>Expect questions about when symptoms started, what makes them better or worse, and what you have tried. Some of these visits can be completed by telehealth, which Opal Medical Group offers; others require an in-person exam.</p>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20 animate-fade-up">
        <h2 className="font-[Cormorant_Garamond,serif] text-4xl mb-8 text-[var(--color-dark)]">How to Decide</h2>
        <h3 className="font-semibold text-xl mb-3 text-[var(--color-ink)]">Choose an annual physical if…</h3>
        <ul className="space-y-3 mb-8 text-[var(--color-ink)]">
          {['You feel well and want a preventive check-in', 'You are due for screenings or vaccines', 'You want a baseline for your health numbers', 'You are establishing care with a new clinician'].map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>
        <h3 className="font-semibold text-xl mb-3 text-[var(--color-ink)]">Choose a problem-focused visit if…</h3>
        <ul className="space-y-3 text-[var(--color-ink)]">
          {['You have a new or worsening symptom', 'You need a medication adjustment or refill review', 'You are recovering from an illness or injury', 'You want a specific concern evaluated soon'].map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl mb-8 text-[var(--color-dark)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="animate-fade-up bg-white border border-[var(--color-border)] rounded-xl p-5">
                <summary className="cursor-pointer font-semibold text-[var(--color-ink)]">{f.q}</summary>
                <p className="mt-3 text-[var(--color-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl font-light mb-4">Not Sure Which Visit You Need?</h2>
          <p className="mb-8">Call (240) 420-2666 or send us a message. We are at 1126 Opal Ct, Hagerstown, MD 21740.</p>
          <Link href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full font-semibold">Discuss Your Options</Link>
        </div>
      </section>
    </main>
  )
}