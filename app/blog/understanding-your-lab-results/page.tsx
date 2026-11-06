import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Understanding Your Lab Results | Opal Medical Group',
  description: 'Learn how to read common blood test results, what reference ranges mean, and which questions to ask your primary care clinician about your lab report.',
  alternates: { canonical: '/blog/understanding-your-lab-results' },
  openGraph: {
    title: 'Understanding Your Lab Results | Opal Medical Group',
    description: 'Learn how to read common blood test results, what reference ranges mean, and which questions to ask your primary care clinician about your lab report.',
    url: 'https://opalmedicalgroup.com/blog/understanding-your-lab-results',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Understanding Your Lab Results | Opal Medical Group',
    description: 'Learn how to read common blood test results, what reference ranges mean, and which questions to ask your primary care clinician about your lab report.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const tips = [
  'Look at the reference range printed next to each result.',
  'Compare against your own past results, not just the range.',
  'Note whether you fasted, and any medicines or supplements you take.',
  'Write down questions before your follow-up conversation.',
  'Ask what, if anything, needs to be repeated and when.',
]

const related = [
  { href: '/blog', title: 'Resources Hub', desc: 'Browse all of our patient education articles.' },
  { href: '/services', title: 'Preventive & Annual Health Exams', desc: 'See how routine visits and screening labs fit into primary care.' },
  { href: '/contact', title: 'Talk With Our Team', desc: 'Have a question about a recent result? Reach out to us.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-understanding-your-lab-results.jpg" alt="A blood sample tube placed on a chemistry panel document, showcasing medical testing.">
        <div>
          <nav className="text-sm text-white/80 mb-6">
            <a href="/" className="hover:underline">Home</a> › <a href="/blog" className="hover:underline">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Understanding Your Lab Results</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">You open a patient portal or a envelope and see rows of abbreviations, numbers and a few flagged values. Your heart skips. It is completely normal to feel anxious when you cannot tell whether a result is a small blip or something that matters. The good news is that most lab reports follow a logical pattern, and a little background can turn confusion into a useful conversation with your clinician.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Lab Tests Actually Measure</h2>
        <p>Blood and urine tests give a snapshot of what is happening inside your body at one moment in time. They can show how well your organs are working, how your body handles sugar and fat, whether you have enough of certain nutrients, and whether there are signs of inflammation or infection. Doctors use them for screening when you feel well, for diagnosing symptoms, and for monitoring chronic conditions.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How to Read a Lab Report</h2>
        <p>Most reports list the test name, your result, the units, a reference range, and sometimes a flag such as H (high) or L (low). The reference range is the span of values seen in a large group of healthy people, usually the middle 95 percent. That means roughly one in twenty healthy people will fall slightly outside the range on any single test without having a problem.</p>
        <p className="mt-4">Units matter too. Glucose, for example, may be reported in mg/dL, and the same number means something very different in another unit. Always read the number together with its unit and range.</p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          A result outside the reference range is a prompt for a question, not a diagnosis.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Panels and What They Tell You</h2>
        <p><strong>Complete blood count (CBC).</strong> Counts red cells, white cells and platelets. It can point toward anemia, infection or clotting issues.</p>
        <p className="mt-4"><strong>Basic or comprehensive metabolic panel.</strong> Looks at blood sugar, electrolytes such as sodium and potassium, and kidney function markers like creatinine. The comprehensive version adds liver enzymes and proteins.</p>
        <p className="mt-4"><strong>Lipid panel.</strong> Reports total cholesterol, LDL, HDL and triglycerides, which help estimate cardiovascular risk.</p>
        <p className="mt-4"><strong>Hemoglobin A1C.</strong> Reflects average blood sugar over about three months and is used to screen for and monitor diabetes.</p>
        <p className="mt-4"><strong>Thyroid tests.</strong> TSH is commonly the first test used to see whether the thyroid is underactive or overactive.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why a Single Number Rarely Tells the Whole Story</h2>
        <p>Many things can nudge a result: dehydration, a recent illness, intense exercise, time of day, certain medicines, supplements such as biotin, and whether you fasted. Your own trend over time is often more informative than one value. A cholesterol number that has crept up over three years tells a different story than one that has always sat in the same place.</p>
        <p className="mt-4">Clinical guidelines also consider your age, family history, blood pressure and other health conditions. That is why the same result can call for reassurance in one person and a plan in another. Research consistently supports interpreting tests in context rather than in isolation, which also helps avoid unnecessary follow-up testing.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps When Your Results Arrive</h2>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L19 7.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Try Not to Search Your Way Into Worry</h2>
        <p>Searching each abnormal value online can lead to worst-case scenarios that rarely match your situation. Instead, save your questions for someone who knows your history. Helpful ones include: What does this result mean for me? Is it a change from before? Do we need to repeat it? Are lifestyle changes, medication or further testing appropriate?</p>

        <p className="mt-8">If you have results you do not understand, Opal Medical Group in Hagerstown, MD is here to help you make sense of them. Our practice offers preventive and annual health exams and telehealth visits, and we are currently accepting new patients. Call (240) 420-2666 or contact us to talk through your next step.</p>
      </article>

      <section className="px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-dark)]">
            <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
          </div>
          <div>
            <p className="font-semibold text-[var(--color-ink)]">From Opal Medical Group</p>
            <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.title} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm mb-4">{r.desc}</p>
                <span className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium">Read more →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full font-medium">Contact Us</a>
        </div>
      </section>
    </main>
  )
}