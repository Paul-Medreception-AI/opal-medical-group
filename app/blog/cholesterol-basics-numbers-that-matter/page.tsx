import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Cholesterol Basics: Numbers That Matter',
  description: 'Learn what LDL, HDL, triglycerides and total cholesterol numbers mean, why they matter for heart health, and practical steps to improve them.',
  alternates: { canonical: '/blog/cholesterol-basics-numbers-that-matter' },
  openGraph: {
    title: 'Cholesterol Basics: Numbers That Matter',
    description: 'Learn what LDL, HDL, triglycerides and total cholesterol numbers mean, why they matter for heart health, and practical steps to improve them.',
    url: 'https://opalmedicalgroup.com/blog/cholesterol-basics-numbers-that-matter',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cholesterol Basics: Numbers That Matter',
    description: 'Learn what LDL, HDL, triglycerides and total cholesterol numbers mean, why they matter for heart health, and practical steps to improve them.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const tips = [
  'Fill half your plate with vegetables, fruit and legumes, and choose whole grains over refined ones.',
  'Swap saturated fats (butter, fatty meats) for olive oil, nuts, and fish.',
  'Aim for at least 150 minutes of moderate activity each week, such as brisk walking.',
  'Quit smoking, which lowers HDL and damages blood vessel walls.',
  'Limit alcohol and sugary drinks, both of which can raise triglycerides.',
  'Keep follow-up appointments so changes can be tracked over time.',
]

const related = [
  { title: 'Preventive and Annual Health Exams', href: '/services', label: 'Our Services' },
  { title: 'Explore More Patient Education', href: '/blog', label: 'Resources' },
  { title: 'Contact Our Hagerstown Office', href: '/contact', label: 'Get in Touch' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-cholesterol-basics-numbers-that-matter.jpg" alt="Wooden numbers with colorful blocks on vibrant red surface.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Cholesterol Basics: Numbers That Matter</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Many people leave a lab visit holding a page of numbers they do not fully understand, quietly wondering whether they should be worried. If that sounds familiar, you are far from alone. Cholesterol is one of the most common topics in primary care, and also one of the most misunderstood. The good news is that once you know what the numbers mean, they become a useful map for protecting your heart for years to come.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Cholesterol?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Cholesterol is a waxy, fat-like substance found in every cell of your body. Your liver makes most of what you need, and it helps build cell membranes, produce hormones, and make vitamin D. The trouble starts when too much of certain types circulates in your blood. Over time, excess cholesterol can collect in artery walls as plaque, narrowing them and raising the risk of heart attack and stroke.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">The Numbers on Your Lipid Panel</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A standard lipid panel is a blood test that usually reports four values:
        </p>
        <ul className="my-4 space-y-3 text-[var(--color-ink)] leading-loose text-base">
          <li><strong>Total cholesterol:</strong> the overall amount of cholesterol in your blood. Under 200 mg/dL is generally considered desirable.</li>
          <li><strong>LDL cholesterol:</strong> often called &quot;bad&quot; cholesterol because it drives plaque buildup. Lower is generally better, and your target depends on your personal risk.</li>
          <li><strong>HDL cholesterol:</strong> often called &quot;good&quot; cholesterol because it helps carry cholesterol back to the liver. Higher values are generally protective.</li>
          <li><strong>Triglycerides:</strong> a type of fat in the blood. Under 150 mg/dL is considered normal, and high levels are linked to excess sugar, alcohol, and refined carbohydrates.</li>
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          No single number tells the whole story. Your clinician looks at them together, along with your age, blood pressure, blood sugar, smoking status, and family history.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          No single number tells the whole story.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          High cholesterol affects people of all body types, including those who are slim and active. It usually causes no symptoms, which is why it is sometimes called a silent condition. Genetics play a large role: some people inherit a tendency toward very high LDL, a condition called familial hypercholesterolemia. Other contributors include diet, inactivity, smoking, diabetes, thyroid problems, and increasing age.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters: What the Research Shows</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Decades of large studies have shown a consistent link between high LDL cholesterol over time and atherosclerotic cardiovascular disease. Trials of lifestyle change and cholesterol-lowering medicines such as statins have shown reduced rates of heart attacks and strokes, especially in people at higher risk. Because plaque builds slowly, the cumulative exposure matters. Catching a trend early gives you more options and more time.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Take</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Small, steady changes often make a measurable difference. Consider these habits:
        </p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When Medication Enters the Conversation</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Lifestyle changes are the foundation, but they are not always enough, particularly when genetics or other conditions are involved. If medication is recommended, it is a tool, not a failure. Your clinician can explain the benefits, possible side effects, and how often to recheck your levels so the plan fits you.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you do not know your numbers, or you have not had them checked in a while, a preventive visit is a good place to start. Opal Medical Group in Hagerstown, MD is currently accepting new patients and offers preventive and annual health exams as well as telehealth visits and medication management. Call us at (240) 420-2666 to talk through your heart health.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-ink)]">From Opal Medical Group</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.title} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">{r.label}</p>
                <p className="font-cormorant text-2xl text-[var(--color-ink)]">{r.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}