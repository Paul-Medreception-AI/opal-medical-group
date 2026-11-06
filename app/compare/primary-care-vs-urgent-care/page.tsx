import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Primary Care vs Urgent Care: Which Is Right for You?',
  description: 'Compare primary care and urgent care side by side: cost structure, time, continuity and when to choose each. Guidance from Opal Medical Group in Hagerstown, MD.',
  alternates: { canonical: '/compare/primary-care-vs-urgent-care' },
  openGraph: {
    title: 'Primary Care vs Urgent Care: Which Is Right for You?',
    description: 'Compare primary care and urgent care side by side: cost structure, time, continuity and when to choose each. Guidance from Opal Medical Group in Hagerstown, MD.',
    url: 'https://opalmedicalgroup.com/compare/primary-care-vs-urgent-care',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primary Care vs Urgent Care: Which Is Right for You?',
    description: 'Compare primary care and urgent care side by side: cost structure, time, continuity and when to choose each. Guidance from Opal Medical Group in Hagerstown, MD.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const rows = [
  { label: 'Effectiveness', pc: 'Best for ongoing conditions, prevention and coordinated care over time, because one team knows your history.', uc: 'Effective for one-time, non-life-threatening problems that need attention the same day.' },
  { label: 'Side effects & risks', pc: 'Medications are reviewed against your full history, which helps reduce interactions and duplicate prescriptions.', uc: 'Clinicians may not see your full record, so medication choices rely on what you report that day.' },
  { label: 'Cost', pc: 'Billed through your insurance. Copays and deductibles apply as your plan sets them.', uc: 'Typically a per-visit charge; copays and deductibles apply with insurance.' },
  { label: 'Time commitment', pc: 'Scheduled visits; relationship builds over time and often means fewer repeat explanations.', uc: 'Walk-in style; wait times vary and each visit starts from scratch.' },
  { label: 'Best for', pc: 'Annual exams, chronic conditions, medication management, referrals, and questions about your health.', uc: 'Minor injuries, sprains, mild infections, and problems arising after hours.' },
]

const faqs = [
  { q: 'Can primary care replace urgent care?', a: 'For many concerns, yes. A primary care office that offers same-day or telehealth access can handle many minor issues. Call the office to ask what is available. True emergencies still need the emergency room.' },
  { q: 'When should I go to the emergency room instead?', a: 'Go to the ER or call 911 for chest pain, trouble breathing, signs of stroke, severe bleeding, or serious injury. Neither primary care nor urgent care is the right setting for these.' },
  { q: 'Does Opal Medical Group offer telehealth?', a: 'Yes. Telehealth and medication management visits are offered. Call (240) 420-2666 to ask whether your concern suits a video visit.' },
  { q: 'Is Opal Medical Group accepting new patients?', a: 'Yes, Opal Medical Group is currently accepting new patients at 1126 Opal Ct, Hagerstown, MD 21740.' },
  { q: 'Why does continuity of care matter?', a: 'A clinician who knows your history can spot changes, avoid repeated testing, and coordinate specialists. This matters most for chronic conditions and prevention.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Page() {
  const pcList = [
    'You want a long-term clinician who knows your history',
    'You manage a condition like high blood pressure or diabetes',
    'You need preventive care or an annual exam',
    'You need medication management or refills',
    'You want help coordinating specialists',
  ]
  const ucList = [
    'You have a minor injury or illness that cannot wait',
    'It is evening or weekend and your office is closed',
    'You are traveling away from home',
    'Your concern is not life-threatening but needs a prompt look',
  ]
  return (
    <main>
      <SplitHero src="/images/stock/compare-primary-care-vs-urgent-care.jpg" alt="Close-up of a modern hospital emergency room entrance with prominent red letters.">
        <div>
          <p className="text-sm mb-6">Home › Resources › Comparison</p>
          <h1 className="font-cormorant text-5xl font-light">Primary Care vs Urgent Care: Which Is Right for You?</h1>
          <p className="mt-6 text-lg">A practical guide to choosing where to go, from Opal Medical Group in Hagerstown, MD.</p>
        </div>
      </SplitHero>


      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-primary)]">Side-by-Side Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4">Factor</div>
              <div className="p-4">Primary Care</div>
              <div className="p-4">Urgent Care</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-3 text-[var(--color-ink)] ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-light)]'}`}>
                <div className="p-4 font-semibold">{r.label}</div>
                <div className="p-4 text-sm">{r.pc}</div>
                <div className="p-4 text-sm">{r.uc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-[var(--color-ink)]">
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Primary Care</h2>
            <p className="mb-4">Primary care is the home base for your health. A primary care clinician manages ongoing conditions, provides preventive screenings and annual exams, reviews medications, and refers you to specialists when needed.</p>
            <p className="mb-4">Research consistently links having a regular primary care source with better chronic disease management and more appropriate use of preventive services. The benefit comes from continuity: the same team sees patterns over time.</p>
            <p className="mb-12">A typical patient is someone with a long-term condition, someone who wants preventive care, or anyone who prefers a single trusted point of contact. At Opal Medical Group, care is provided by Yi Vance, CRNP, Dr. Farid Murshed, MD, and Dr. M. Khalid Waseem, MD, CMD, with telehealth also offered.</p>
          </div>
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Urgent Care</h2>
            <p className="mb-4">Urgent care centers treat problems that need prompt attention but are not emergencies, such as sprains, minor cuts, sore throats, and mild infections. Many offer extended hours and on-site basic imaging or testing.</p>
            <p className="mb-4">The tradeoff is fragmentation. Each visit is typically a standalone encounter, and follow-up usually falls back to your primary care clinician.</p>
            <p>Expect to describe your history at each visit, receive focused treatment for the immediate issue, and be advised to follow up with your regular clinician.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20 animate-fade-up">
        <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">How to Decide</h2>
        <h3 className="font-semibold text-xl mb-4 text-[var(--color-dark)]">Choose primary care if...</h3>
        <ul className="space-y-3 mb-8 text-[var(--color-ink)]">
          {pcList.map((t) => (<li key={t} className="flex gap-3"><Check />{t}</li>))}
        </ul>
        <h3 className="font-semibold text-xl mb-4 text-[var(--color-dark)]">Choose urgent care if...</h3>
        <ul className="space-y-3 text-[var(--color-ink)]">
          {ucList.map((t) => (<li key={t} className="flex gap-3"><Check />{t}</li>))}
        </ul>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group border border-[var(--color-border)] rounded-xl p-5 animate-fade-up">
                <summary className="cursor-pointer font-semibold text-[var(--color-ink)]">{f.q}</summary>
                <p className="mt-3 text-[var(--color-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-4">Not sure where to start?</h2>
          <p className="mb-8">Call (240) 420-2666 or send us a message. We are at 1126 Opal Ct, Hagerstown, MD 21740.</p>
          <a href="/contact" className="inline-block rounded-full bg-[var(--color-accent-dark)] px-8 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-ink)]">Discuss Your Options</a>
        </div>
      </section>
    </main>
  )
}