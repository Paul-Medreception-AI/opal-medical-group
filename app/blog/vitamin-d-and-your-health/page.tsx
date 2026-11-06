import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Vitamin D and Your Health | Opal Medical Group',
  description: 'Learn what vitamin D does, who is at risk for low levels, what the research says, and practical ways to support healthy vitamin D levels.',
  alternates: { canonical: '/blog/vitamin-d-and-your-health' },
  openGraph: {
    title: 'Vitamin D and Your Health | Opal Medical Group',
    description: 'Learn what vitamin D does, who is at risk for low levels, what the research says, and practical ways to support healthy vitamin D levels.',
    url: 'https://opalmedicalgroup.com/blog/vitamin-d-and-your-health',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitamin D and Your Health | Opal Medical Group',
    description: 'Learn what vitamin D does, who is at risk for low levels, what the research says, and practical ways to support healthy vitamin D levels.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const tips = [
  'Ask your clinician whether a blood test makes sense for you before starting high-dose supplements.',
  'Include food sources such as fatty fish, egg yolks, and fortified milk, cereal, or orange juice.',
  'Take vitamin D supplements with a meal that contains some fat, which helps absorption.',
  'Review every supplement and medication you take so interactions can be checked.',
  'Do not exceed the dose your clinician recommends. More is not better with fat-soluble vitamins.',
  'Stay active with weight-bearing exercise to support bones and muscles alongside good nutrition.',
]

const related = [
  { title: 'Preventive and Annual Health Exams', href: '/services', desc: 'See how routine visits help catch concerns early.' },
  { title: 'Telehealth and Medication Management', href: '/services', desc: 'Review supplements and prescriptions from home.' },
  { title: 'More Patient Resources', href: '/blog', desc: 'Browse all of our patient education articles.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-vitamin-d-and-your-health.jpg" alt="Close-up of various pills and supplements on a marble background, symbolizing health care and wellness.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Vitamin D and Your Health</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="text-lg">
          You may feel tired, achy, or simply run down, and wonder whether something small is missing. Vitamin D is one of the most talked-about nutrients for exactly that reason. It touches your bones, muscles, and immune system, and a surprising number of adults do not get enough. The good news is that low levels are common, easy to check, and usually manageable.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Vitamin D?</h2>
        <p>
          Vitamin D is a fat-soluble vitamin that works more like a hormone in the body. Your skin makes it when exposed to sunlight, and you can also get it from certain foods and supplements. The liver and kidneys then convert it into its active form, which the body uses to absorb calcium and phosphorus from food.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters</h2>
        <p>
          Vitamin D is essential for building and maintaining strong bones. Without enough of it, the body cannot absorb calcium well, which can lead to weak or brittle bones over time. In children, severe deficiency can cause rickets. In adults, it can contribute to osteomalacia, a softening of the bones, and may add to the risk of osteoporosis.
        </p>
        <p className="mt-4">
          Vitamin D also plays a role in muscle function and in the way immune cells communicate. Many people with low levels report muscle weakness or aches, although these symptoms have many possible causes and are not specific to vitamin D.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is at Risk for Low Levels?</h2>
        <p>Some people are more likely to have low vitamin D, including:</p>
        <ul className="mt-4 space-y-2 list-disc pl-6">
          <li>Older adults, since skin makes less vitamin D with age</li>
          <li>People who spend most of their time indoors or cover most of their skin outdoors</li>
          <li>People with darker skin, which produces less vitamin D from the same sun exposure</li>
          <li>Those living in northern climates with limited winter sunlight</li>
          <li>People with obesity, or who have had bariatric surgery</li>
          <li>Those with conditions affecting absorption, such as celiac disease, Crohn’s disease, or chronic kidney or liver disease</li>
          <li>People taking certain medications, such as some anticonvulsants and long-term steroids</li>
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Low levels are common, easy to check, and usually manageable.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Does the Research Say?</h2>
        <p>
          The link between vitamin D and bone health is well established. Research on other benefits is more mixed. Observational studies have connected low vitamin D with heart disease, depression, certain cancers, and infections, but large randomized trials have not consistently shown that supplementing prevents these conditions in people who already have adequate levels.
        </p>
        <p className="mt-4">
          What this means in practice: correcting a true deficiency is clearly worthwhile, while taking very high doses without a reason is unlikely to help and may cause harm. Excess vitamin D can raise blood calcium and contribute to kidney stones, nausea, and other problems.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Signs and Testing</h2>
        <p>
          Many people with low vitamin D have no symptoms at all. When symptoms do appear, they can include fatigue, bone pain, muscle weakness, or frequent fractures. A simple blood test measuring 25-hydroxyvitamin D can show where your level stands. Testing is not necessary for everyone, so it is best to talk with your clinician about whether it fits your health history and risk factors.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Support Healthy Levels</h2>
        <ul className="mt-4 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          Sensible sun exposure can contribute, but it must be balanced against skin cancer risk. Many clinicians do not recommend relying on sun alone, particularly for people with a history of skin cancer.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Talk With a Clinician</h2>
        <p>
          If you have persistent bone or muscle pain, a history of fractures, a condition that affects absorption, or you are simply unsure whether you need a supplement, a conversation with your primary care team is a good place to start. Together you can decide whether testing is appropriate and build a plan that fits your needs. Opal Medical Group in Hagerstown, MD is currently taking new patients, and telehealth visits are available for medication and supplement reviews. Call (240) 420-2666 to get started.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-ink)]">From Opal Medical Group</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.title} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
              <p className="text-[var(--color-muted)] text-sm">{r.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full font-medium">Contact Us</a>
        </div>
      </section>
    </main>
  )
}