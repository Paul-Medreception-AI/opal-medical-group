import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Physician vs Nurse Practitioner: Who Should You See?',
  description: 'Compare physicians and nurse practitioners in primary care: training, scope, visit style and how to choose the right clinician for your health needs.',
  alternates: { canonical: '/compare/physician-vs-nurse-practitioner' },
  openGraph: {
    title: 'Physician vs Nurse Practitioner: Who Should You See?',
    description: 'Compare physicians and nurse practitioners in primary care: training, scope, visit style and how to choose the right clinician for your health needs.',
    url: 'https://opalmedicalgroup.com/compare/physician-vs-nurse-practitioner',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Physician vs Nurse Practitioner: Who Should You See?',
    description: 'Compare physicians and nurse practitioners in primary care: training, scope, visit style and how to choose the right clinician for your health needs.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const rows = [
  { label: 'Effectiveness', a: 'Research on routine primary care shows comparable outcomes for many common conditions. Physicians have the deepest training for complex or multi-system illness.', b: 'Research shows comparable outcomes for many common conditions, especially preventive care and chronic disease follow-up, within their scope of practice.' },
  { label: 'Training', a: 'Medical school plus residency, often several years of supervised training in internal medicine or family medicine.', b: 'Graduate nursing degree (master’s or doctorate) with clinical hours in a population focus such as family practice.' },
  { label: 'Side effects / risks', a: 'Treatment risks depend on the medication or procedure, not the title. Complex medication lists benefit from detailed review.', b: 'Same: risks depend on the treatment. Good NPs collaborate or refer when a case is beyond routine care.' },
  { label: 'Cost', a: 'Billed to your insurance like any office visit. Copays and deductibles apply as your plan sets them.', b: 'The same. Copays and deductibles apply under your plan. Ask the office if you have a question about a specific visit.' },
  { label: 'Time commitment', a: 'Visit length varies by practice. Complex histories may call for longer visits.', b: 'Visit length varies by practice. Many NPs emphasize education and counseling during visits.' },
  { label: 'Best for', a: 'Complex, multiple chronic conditions, older adults on many medications, diagnostic puzzles.', b: 'Preventive care, annual exams, stable chronic conditions, acute problems, and medication management.' },
]

const faqs = [
  { q: 'Is a nurse practitioner as good as a doctor?', a: 'For many routine primary care needs, studies show similar outcomes. The better fit depends on how complex your health situation is and how you like to receive care.' },
  { q: 'Can a nurse practitioner prescribe medication?', a: 'Yes. Nurse practitioners can prescribe medications, order tests and diagnose conditions. Exact rules vary by state and practice setting.' },
  { q: 'Can I switch between clinicians?', a: 'Often yes. Many practices with both physicians and nurse practitioners work as a team, so you can ask about seeing either one depending on your needs.' },
  { q: 'Who should I see for a complex condition?', a: 'A physician trained in internal medicine is often a good starting point for complex or multi-system conditions, and care can still be shared with a nurse practitioner.' },
  { q: 'Who does Opal Medical Group have?', a: 'Our clinicians are Yi Vance, CRNP (Family Nurse Practitioner), Dr. Farid Murshed, MD (Internal Medicine), and Dr. M. Khalid Waseem, MD, CMD (Internal Medicine). We are accepting new patients.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Page() {
  const a = ['You have several chronic conditions at once', 'You take many medications that need careful review', 'You have an unclear diagnosis needing broad evaluation', 'You want the deepest level of medical training']
  const b = ['Your needs are mainly preventive or routine', 'You have a stable condition needing regular follow-up', 'You value time for education and counseling', 'You want help with medication management or an acute concern']
  return (
    <main>
      <SplitHero src="/images/stock/compare-physician-vs-nurse-practitioner.jpg" alt="Physician vs Nurse Practitioner: Who Should You See?">
        <div>
          <nav className="text-sm mb-6 opacity-90">Home › Resources › Comparison</nav>
          <h1 className="font-cormorant text-5xl font-light">Physician vs Nurse Practitioner: Who Should You See?</h1>
          <p className="mt-6 text-lg opacity-90">Both are trusted primary care clinicians. Here is how they differ and how to choose.</p>
        </div>
      </SplitHero>


      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-primary)]">Side-by-Side Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4">Factor</div>
              <div className="p-4">Physician</div>
              <div className="p-4">Nurse Practitioner</div>
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
        <div className="max-w-4xl mx-auto px-6 text-[var(--color-ink)]">
          <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Seeing a Physician</h2>
          <p className="mb-4">Physicians complete medical school and a residency. Internal medicine physicians focus on adults and are trained to manage layered problems, such as diabetes alongside heart and kidney disease.</p>
          <p className="mb-4">A typical patient is an adult with several diagnoses, a long medication list, or symptoms that do not fit an obvious pattern.</p>
          <p className="mb-12">Expect a thorough history, careful medication review, and coordination with specialists when needed.</p>
          <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Seeing a Nurse Practitioner</h2>
          <p className="mb-4">Nurse practitioners are advanced practice nurses with graduate education and clinical training. Family nurse practitioners care for patients across ages and are well suited to everyday primary care.</p>
          <p className="mb-4">A typical patient wants preventive care, annual exams, help with a stable chronic condition, or a partner for lifestyle and medication management.</p>
          <p>Expect a collaborative visit with time for questions, and referral or consultation if your needs go beyond routine care. Telehealth visits are available at our practice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20 animate-fade-up">
        <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">How to Decide</h2>
        <h3 className="font-semibold text-xl mb-3 text-[var(--color-dark)]">Choose a physician if…</h3>
        <ul className="space-y-3 mb-8 text-[var(--color-ink)]">
          {a.map((t) => <li key={t} className="flex gap-3"><Check />{t}</li>)}
        </ul>
        <h3 className="font-semibold text-xl mb-3 text-[var(--color-dark)]">Choose a nurse practitioner if…</h3>
        <ul className="space-y-3 text-[var(--color-ink)]">
          {b.map((t) => <li key={t} className="flex gap-3"><Check />{t}</li>)}
        </ul>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="animate-fade-up border border-[var(--color-border)] rounded-xl p-5 bg-[var(--color-cream)]">
                <summary className="cursor-pointer font-semibold text-[var(--color-ink)]">{f.q}</summary>
                <p className="mt-3 text-[var(--color-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-4">Not Sure Who Fits You Best?</h2>
          <p className="mb-8">Call (240) 420-2666 or reach out online. We are accepting new patients at 1126 Opal Ct, Hagerstown, MD 21740.</p>
          <a href="/contact" className="inline-block rounded-full bg-[var(--color-dark)] px-8 py-4 font-semibold text-white transition hover:bg-[var(--color-ink)]">Discuss Your Options</a>
        </div>
      </section>
    </main>
  )
}