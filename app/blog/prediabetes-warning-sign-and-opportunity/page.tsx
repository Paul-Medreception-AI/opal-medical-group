import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Prediabetes: Warning Sign and Opportunity',
  description: 'Learn what prediabetes is, who is at risk, why it matters, and the practical steps that can help lower your risk of type 2 diabetes.',
  alternates: { canonical: '/blog/prediabetes-warning-sign-and-opportunity' },
  openGraph: {
    title: 'Prediabetes: Warning Sign and Opportunity',
    description: 'Learn what prediabetes is, who is at risk, why it matters, and the practical steps that can help lower your risk of type 2 diabetes.',
    url: 'https://opalmedicalgroup.com/blog/prediabetes-warning-sign-and-opportunity',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prediabetes: Warning Sign and Opportunity',
    description: 'Learn what prediabetes is, who is at risk, why it matters, and the practical steps that can help lower your risk of type 2 diabetes.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const tips = [
  'Aim for about 150 minutes of moderate activity each week, such as brisk walking.',
  'Build meals around vegetables, beans, whole grains, lean protein and healthy fats.',
  'Cut back on sugary drinks, which raise blood sugar quickly.',
  'If you carry extra weight, even a modest loss of 5 to 7 percent of body weight can help.',
  'Prioritize sleep and find ways to manage stress.',
  'If you smoke, ask for help quitting.',
  'Repeat blood sugar testing as often as your clinician recommends.',
]

const related = [
  { href: '/blog', title: 'All Resources', text: 'Browse more patient education articles from our blog.' },
  { href: '/services', title: 'Our Primary Care Services', text: 'See the care we offer, including preventive and annual health exams.' },
  { href: '/contact', title: 'Contact Our Hagerstown Office', text: 'Reach out to ask questions or schedule a visit.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-prediabetes-warning-sign-and-opportunity.jpg" alt="Yellow triangular warning sign indicating slippery surface in lush forest setting.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Prediabetes: Warning Sign and Opportunity</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 animate-fade-up">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Many people hear the word “prediabetes” at a routine visit and feel a jolt of worry. Nothing hurt. Nothing felt different. Yet a simple blood test says your body is struggling to manage sugar. It is easy to feel alarmed, but here is the hopeful truth: prediabetes is one of the few health warnings that can often be acted on before lasting damage is done.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Prediabetes?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Prediabetes means your blood sugar is higher than normal but not yet high enough to be diagnosed as type 2 diabetes. It usually develops when cells respond less well to insulin, the hormone that moves sugar from the blood into cells. The pancreas makes more insulin to compensate, and over time it may not keep up.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Clinicians commonly diagnose it with a fasting glucose of 100 to 125 mg/dL, an A1C of 5.7 to 6.4 percent, or a two-hour glucose tolerance test result of 140 to 199 mg/dL. Most people have no symptoms, which is why it often goes unnoticed for years.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Most Likely to Develop It?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Prediabetes is very common among adults in the United States, and many people who have it do not know. Risk is higher if you:
        </p>
        <ul className="space-y-3 mb-4">
          {['Are age 35 or older', 'Carry extra weight, especially around the abdomen', 'Have a parent or sibling with type 2 diabetes', 'Are physically inactive', 'Had gestational diabetes or polycystic ovary syndrome', 'Have high blood pressure or abnormal cholesterol'].map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">{check}<span>{t}</span></li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Some groups face higher risk for reasons that include genetics and access to care. Talk with your clinician about whether screening makes sense for you, even if you feel well.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Without changes, a significant share of people with prediabetes go on to develop type 2 diabetes. Even before that point, higher blood sugar is linked with greater risk of heart disease and stroke. Type 2 diabetes itself can affect the eyes, kidneys, nerves and blood vessels.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          That is the warning side. The opportunity side is just as real: this stage is when your body is still responsive to change.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          The opportunity side is just as real: this stage is when your body is still responsive to change.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Shows</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          The landmark Diabetes Prevention Program trial followed adults with prediabetes and found that structured lifestyle changes, including healthier eating and regular physical activity leading to modest weight loss, reduced the risk of developing type 2 diabetes by about 58 percent over three years. The benefit was even larger in adults over 60. Follow-up studies have shown the protective effect can last for many years.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          In some situations, a clinician may also discuss medication such as metformin. The right approach depends on your health history, so it is a conversation to have with your care team.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Start Now</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          You do not need a perfect plan. Small, steady habits tend to work better than dramatic overhauls.
        </p>
        <ul className="space-y-3 mb-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">{check}<span>{t}</span></li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Pick one or two changes to begin with. Once they feel routine, add another. Walking after meals is a simple place to start, since muscle activity helps your body use sugar.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Getting Support</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          A prediabetes result is not a verdict and it is not your fault. Having a primary care team to review your labs, set realistic goals and check in over time can make the difference between good intentions and lasting change.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you are in or near Hagerstown, MD and want to talk about your blood sugar, preventive screening or an annual health exam, Opal Medical Group is currently accepting new patients. Call (240) 420-2666 or reach out through our contact page, and we can help you plan next steps. Telehealth visits are also offered.
        </p>
      </article>

      <section className="px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-dark)]">
            <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
            </svg>
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
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] mb-4">{r.text}</p>
                <span className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">Read more →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center px-6">
        <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
        <p className="mb-8 text-white/80">We are here to help.</p>
        <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
      </section>
    </main>
  )
}