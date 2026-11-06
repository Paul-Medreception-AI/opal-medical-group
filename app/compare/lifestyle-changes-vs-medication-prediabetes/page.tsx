import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Lifestyle Changes vs Medication for Prediabetes',
  description: 'Compare lifestyle changes and medication for prediabetes: effectiveness, side effects, cost, time commitment and who each approach suits best.',
  alternates: { canonical: '/compare/lifestyle-changes-vs-medication-prediabetes' },
  openGraph: {
    title: 'Lifestyle Changes vs Medication for Prediabetes',
    description: 'Compare lifestyle changes and medication for prediabetes: effectiveness, side effects, cost, time commitment and who each approach suits best.',
    url: 'https://opalmedicalgroup.com/compare/lifestyle-changes-vs-medication-prediabetes',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lifestyle Changes vs Medication for Prediabetes',
    description: 'Compare lifestyle changes and medication for prediabetes: effectiveness, side effects, cost, time commitment and who each approach suits best.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const rows = [
  { label: 'Effectiveness', a: 'In large trials, structured lifestyle programs lowered the risk of progressing to type 2 diabetes by more than half in many participants. Benefits last as long as habits do.', b: 'Metformin lowers progression risk more modestly in studies, with the greatest benefit in younger, higher-BMI adults. It works best alongside lifestyle habits.' },
  { label: 'Side effects', a: 'Few. Muscle soreness or the challenge of changing routines. Additional benefits include better blood pressure, lipids, sleep and mood.', b: 'Metformin can cause nausea, diarrhea or stomach upset, and long-term use may lower vitamin B12. Most effects ease with dose adjustment.' },
  { label: 'Cost', a: 'Mostly everyday spending on food and activity. Optional coaching or program fees vary.', b: 'Medication costs depend on your coverage. Copays and deductibles apply, and generic options are often inexpensive.' },
  { label: 'Time commitment', a: 'Significant at first: regular activity, meal planning and ongoing habit tracking.', b: 'Low daily effort, usually a pill once or twice a day, plus periodic lab monitoring.' },
  { label: 'Best for', a: 'Most people with prediabetes, especially those motivated to change habits and with a recent diagnosis.', b: 'People at high risk of progression, those with a history of gestational diabetes, rising A1C despite effort, or barriers to lifestyle change.' },
]

const faqs = [
  { q: 'Can prediabetes be reversed?', a: 'Many people return their blood sugar to the normal range through weight loss, regular physical activity and dietary changes. Ongoing monitoring matters because glucose can rise again.' },
  { q: 'Do I have to take medication if I have prediabetes?', a: 'No. Lifestyle changes are the first-line approach for most people. Medication is considered when risk is higher or when lifestyle changes alone are not enough.' },
  { q: 'Can I combine lifestyle changes and medication?', a: 'Yes. Many clinicians recommend lifestyle changes for everyone, with medication added when individual risk factors call for it.' },
  { q: 'How often should blood sugar be rechecked?', a: 'Typically at least once a year, and sometimes more often when starting a new treatment plan. Your clinician will set a schedule based on your A1C and risk factors.' },
  { q: 'Does Opal Medical Group offer telehealth for follow-ups?', a: 'Yes, telehealth visits are offered, which can be convenient for medication management and check-ins. Call (240) 420-2666 to ask what fits your situation.' },
]

const Check = () => (
  <svg className="w-5 h-5 shrink-0 mt-0.5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default function Page() {
  return (
    <main className="text-[var(--color-ink)]">
      <SplitHero src="/images/stock/compare-lifestyle-changes-vs-medication-prediabetes.jpg" alt="Close-up of diabetes management tools including glucometer and pills on a pink background.">
        <div>
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a> › <span>Resources</span> › <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light">Lifestyle Changes vs Medication for Prediabetes</h1>
          <p className="mt-6 text-lg opacity-95">A clear look at both approaches to help you make an informed decision with your primary care clinician in Hagerstown, MD.</p>
        </div>
      </SplitHero>


      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-dark)]">Side-by-Side Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-medium">
              <div className="p-4">Factor</div>
              <div className="p-4">Lifestyle Changes</div>
              <div className="p-4">Medication</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-light)]'}`}>
                <div className="p-4 font-semibold text-[var(--color-dark)]">{r.label}</div>
                <div className="p-4">{r.a}</div>
                <div className="p-4">{r.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-dark)]">Lifestyle Changes</h2>
            <p className="mb-4 leading-relaxed">Lifestyle change is the foundation of prediabetes care. It typically means moving toward about 150 minutes of moderate activity per week, eating more fiber-rich whole foods, cutting back on sugary drinks and refined carbohydrates, and losing a modest amount of weight (often 5–7% of body weight) if overweight.</p>
            <p className="mb-4 leading-relaxed">Landmark studies such as the Diabetes Prevention Program showed that intensive lifestyle programs reduced progression to type 2 diabetes substantially, and outperformed medication in the same trial, especially in adults over 60.</p>
            <p className="mb-12 leading-relaxed">Expect gradual progress. Many people see changes in A1C or fasting glucose within three to six months, with follow-up labs to confirm. Support, such as regular check-ins, makes habits easier to sustain.</p>
          </div>
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-dark)]">Medication</h2>
            <p className="mb-4 leading-relaxed">Metformin is the medication most often considered for prediabetes. It reduces glucose production in the liver and improves insulin sensitivity. It is generally used in addition to, not instead of, lifestyle changes.</p>
            <p className="mb-4 leading-relaxed">It tends to be discussed for people with a BMI of 35 or higher, those under 60, women with prior gestational diabetes, or anyone whose A1C keeps climbing. Your clinician weighs kidney function, other conditions and your preferences.</p>
            <p className="leading-relaxed">Expect a low starting dose that is gradually increased to limit stomach upset, along with periodic blood tests. Whether to continue long term is reviewed regularly.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20 animate-fade-up">
        <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-dark)]">How to Decide</h2>
        <h3 className="text-xl font-semibold mb-3">Choose lifestyle changes first if...</h3>
        <ul className="space-y-3 mb-8">
          {['Your A1C is in the prediabetes range and you were recently diagnosed', 'You are able and willing to change eating and activity habits', 'You want benefits for weight, blood pressure and cholesterol too', 'You prefer to avoid medication side effects'].map((t) => (
            <li key={t} className="flex gap-3"><Check />{t}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-3">Consider adding medication if...</h3>
        <ul className="space-y-3 mb-8">
          {['Your blood sugar keeps rising despite consistent effort', 'You have a history of gestational diabetes or a high BMI', 'Family history or other risk factors make progression more likely', 'Physical limits make lifestyle change difficult'].map((t) => (
            <li key={t} className="flex gap-3"><Check />{t}</li>
          ))}
        </ul>
        <p className="text-sm text-[var(--color-muted)]">This is general information, not personal medical advice. Your clinician can tailor a plan to you.</p>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-dark)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white border border-[var(--color-border)] rounded-xl p-5 animate-fade-up">
                <summary className="cursor-pointer font-semibold text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors">{f.q}</summary>
                <p className="mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl mb-4">Ready to Talk Through Your Options?</h2>
          <p className="mb-8">Opal Medical Group is accepting new patients at 1126 Opal Ct, Hagerstown, MD 21740. Call (240) 420-2666.</p>
          <a href="/contact" className="inline-block rounded-full bg-[var(--color-accent-dark)] px-8 py-4 font-medium text-white transition-colors hover:bg-[var(--color-ink)]">Discuss Your Options</a>
        </div>
      </section>
    </main>
  )
}