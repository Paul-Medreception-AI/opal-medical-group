import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preventive Screening vs Diagnostic Testing | Opal Medical',
  description: 'Learn how preventive screening differs from diagnostic testing, when each is used, and how to decide with your primary care clinician in Hagerstown, MD.',
  alternates: { canonical: '/compare/preventive-screening-vs-diagnostic-testing' },
  openGraph: {
    title: 'Preventive Screening vs Diagnostic Testing | Opal Medical',
    description: 'Learn how preventive screening differs from diagnostic testing, when each is used, and how to decide with your primary care clinician in Hagerstown, MD.',
    url: 'https://opalmedicalgroup.com/compare/preventive-screening-vs-diagnostic-testing',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preventive Screening vs Diagnostic Testing | Opal Medical',
    description: 'Learn how preventive screening differs from diagnostic testing, when each is used, and how to decide with your primary care clinician in Hagerstown, MD.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const rows = [
  { label: 'Purpose', a: 'Finds possible disease or risk before symptoms appear', b: 'Finds the cause of symptoms or confirms an abnormal screening result' },
  { label: 'Effectiveness', a: 'Most useful when matched to age, sex, and risk factors; a positive result usually calls for more testing', b: 'Designed to confirm or rule out a specific condition; more targeted and definitive' },
  { label: 'Side effects & risks', a: 'Generally low physical risk; false positives can cause worry and follow-up testing', b: 'Varies by test, from a simple blood draw to imaging or procedures with their own risks' },
  { label: 'Cost', a: 'Many recommended screenings are covered by insurance as preventive care; coverage varies by plan', b: 'Copays and deductibles commonly apply; coverage varies by plan and test' },
  { label: 'Time commitment', a: 'Often done during a routine or annual visit', b: 'May involve several visits, lab work, imaging, or specialist referrals' },
  { label: 'Best for', a: 'People without symptoms who want to stay ahead of health risks', b: 'People with symptoms, abnormal findings, or a known condition needing evaluation' },
]

const check = (
  <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const faqs = [
  { q: 'Can a screening test become a diagnostic test?', a: 'Yes. If a screening result is abnormal, your clinician may order diagnostic tests to find out whether a condition is actually present.' },
  { q: 'Do I need screening if I feel healthy?', a: 'Often yes. Screening exists because many conditions, such as high blood pressure, high cholesterol, and some cancers, cause no early symptoms.' },
  { q: 'Is an abnormal screening result a diagnosis?', a: 'No. A screening result signals that more evaluation may be needed. Diagnosis comes from confirmatory testing and clinical judgment.' },
  { q: 'Will insurance cover both?', a: 'Coverage depends on your plan. Recommended screenings are often covered as preventive care, while diagnostic testing may involve copays or deductibles. Check with your insurer.' },
  { q: 'How do I know which one I need?', a: 'Symptoms, age, family history, and prior results guide the choice. Your primary care clinician can review these with you and recommend a plan.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a> › <span>Resources</span> › <span>Comparison</span>
          </nav>
          <h1 className="font-[Cormorant_Garamond,serif] text-5xl font-light">Preventive Screening vs Diagnostic Testing</h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto">Understand what each type of testing does, when it is used, and how to talk through the right approach with your primary care team in Hagerstown, MD.</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/compare-preventive-screening-vs-diagnostic-testing.jpg"} alt={"Close-up of a healthcare worker performing a blood test using sterile gloves."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl mb-12 text-[var(--color-primary)]">Side-by-Side Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4"> </div>
              <div className="p-4">Preventive Screening</div>
              <div className="p-4">Diagnostic Testing</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-3 text-sm text-[var(--color-ink)] ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-light)]'}`}>
                <div className="p-4 font-semibold text-[var(--color-dark)]">{r.label}</div>
                <div className="p-4">{r.a}</div>
                <div className="p-4">{r.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-[var(--color-ink)]">
          <div className="animate-fade-up">
            <h2 className="font-[Cormorant_Garamond,serif] text-4xl mb-6 text-[var(--color-primary)]">Preventive Screening</h2>
            <p className="mb-4">Preventive screening looks for disease or risk factors in people who have no symptoms. Common examples include blood pressure checks, cholesterol and blood sugar testing, and age-appropriate cancer screenings. National guidelines, such as those from the U.S. Preventive Services Task Force, recommend specific screenings based on age and risk.</p>
            <p className="mb-4">The evidence is strongest where early detection leads to better outcomes. Screening is not perfect: it can miss some conditions, and it can flag findings that turn out to be harmless, which is why results are interpreted in context.</p>
            <p className="mb-12">A typical patient is someone who feels well and is due for an annual or periodic health exam. Expect questions about your history, a physical exam, and routine tests, with a plan for follow-up if anything looks abnormal.</p>
          </div>
          <div className="animate-fade-up">
            <h2 className="font-[Cormorant_Garamond,serif] text-4xl mb-6 text-[var(--color-primary)]">Diagnostic Testing</h2>
            <p className="mb-4">Diagnostic testing is used when there is a reason to suspect a problem: a symptom, an abnormal exam finding, or a positive screening result. It may include targeted blood work, imaging, or other studies chosen to answer a specific clinical question.</p>
            <p className="mb-4">Because it is directed at a particular concern, diagnostic testing is generally more definitive than screening. Its risks and burdens depend on the test, so clinicians weigh the likely benefit against inconvenience, exposure, and cost.</p>
            <p>A typical patient is someone with new or persistent symptoms, or someone managing a known condition. Expect a discussion of why the test is being ordered, how to prepare, and how results will be shared and acted on.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20 animate-fade-up">
        <h2 className="font-[Cormorant_Garamond,serif] text-4xl mb-8 text-[var(--color-primary)]">How to Decide</h2>
        <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-4">Choose preventive screening if...</h3>
        <ul className="space-y-3 mb-10 text-[var(--color-ink)]">
          <li className="flex gap-3">{check}<span>You feel well and have no current symptoms</span></li>
          <li className="flex gap-3">{check}<span>You are due for age- or risk-based recommended screenings</span></li>
          <li className="flex gap-3">{check}<span>You want to establish a health baseline</span></li>
        </ul>
        <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-4">Choose diagnostic testing if...</h3>
        <ul className="space-y-3 text-[var(--color-ink)]">
          <li className="flex gap-3">{check}<span>You have new, worsening, or persistent symptoms</span></li>
          <li className="flex gap-3">{check}<span>A screening or exam produced an abnormal result</span></li>
          <li className="flex gap-3">{check}<span>You are monitoring or confirming a known condition</span></li>
        </ul>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl mb-8 text-[var(--color-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="animate-fade-up group border border-[var(--color-border)] rounded-xl p-5 bg-[var(--color-cream)]">
                <summary className="cursor-pointer font-semibold text-[var(--color-dark)]">{f.q}</summary>
                <p className="mt-3 text-[var(--color-ink)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl mb-4">Not Sure Which You Need?</h2>
          <p className="mb-8">Opal Medical Group in Hagerstown, MD is accepting new patients. Call (240) 420-2666 or reach out to talk through your situation.</p>
          <a href="/contact" className="inline-block rounded-full bg-[var(--color-dark)] px-8 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-ink)]">Discuss Your Options</a>
          <p className="mt-6 text-xs opacity-90">This page is general information, not medical advice. Opal Medical Group</p>
        </div>
      </section>
    </main>
  )
}