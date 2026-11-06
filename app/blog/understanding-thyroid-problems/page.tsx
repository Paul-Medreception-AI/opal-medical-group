import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Understanding Thyroid Problems | Opal Medical Group',
  description: 'Learn the signs of an underactive or overactive thyroid, who is at risk, how thyroid problems are tested and treated, and when to see a primary care provider.',
  alternates: { canonical: '/blog/understanding-thyroid-problems' },
  openGraph: {
    title: 'Understanding Thyroid Problems | Opal Medical Group',
    description: 'Learn the signs of an underactive or overactive thyroid, who is at risk, how thyroid problems are tested and treated, and when to see a primary care provider.',
    url: 'https://opalmedicalgroup.com/blog/understanding-thyroid-problems',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Understanding Thyroid Problems | Opal Medical Group',
    description: 'Learn the signs of an underactive or overactive thyroid, who is at risk, how thyroid problems are tested and treated, and when to see a primary care provider.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const Check = () => (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const related = [
  { href: '/blog', label: 'Resources', title: 'More Patient Education Articles', text: 'Browse our library of articles on everyday health and prevention.' },
  { href: '/contact', label: 'Visit Us', title: 'Request an Appointment', text: 'Reach out to our Hagerstown office to talk about your symptoms.' },
  { href: '/about', label: 'About', title: 'Meet Our Practice', text: 'Learn about our providers and our approach to primary care.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-understanding-thyroid-problems.jpg" alt="Close-up of a woman touching her neck, possibly indicating discomfort or throat pain.">
        <div>
          <nav className="text-sm text-white/80 mb-6">
            <a href="/" className="hover:underline">Home</a> › <a href="/blog" className="hover:underline">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Understanding Thyroid Problems</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">You have been tired for months. Your weight has shifted for no clear reason, your hair seems thinner, and you feel cold when everyone else is comfortable. Or perhaps your heart races, your hands tremble and you cannot sleep. Because thyroid symptoms are so common and so easy to blame on stress or aging, many people live with them far longer than they need to. Understanding the thyroid is the first step toward feeling like yourself again.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the thyroid does</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">The thyroid is a small, butterfly-shaped gland at the base of your neck. It releases hormones that help set the pace of your metabolism, influencing heart rate, body temperature, digestion, energy, mood and how your body uses calories. A pituitary hormone called TSH (thyroid-stimulating hormone) tells the thyroid how much to produce. When this system falls out of balance, nearly every organ can be affected.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common types of thyroid problems</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base"><strong>Hypothyroidism</strong> means the gland is underactive and makes too little hormone. The most common cause in the United States is Hashimoto&apos;s disease, an autoimmune condition in which the immune system gradually damages thyroid tissue. <strong>Hyperthyroidism</strong> means the gland is overactive. Graves&apos; disease, another autoimmune condition, is a frequent cause. Other problems include thyroid nodules, goiter (an enlarged thyroid), and thyroiditis, which is inflammation of the gland.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Symptoms to watch for</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Symptoms develop slowly and differ from person to person. With an underactive thyroid you may notice:</p>
        <ul className="my-4 space-y-3 text-[var(--color-ink)] leading-loose text-base">
          <li className="flex gap-3"><Check /><span>Fatigue and sluggishness</span></li>
          <li className="flex gap-3"><Check /><span>Weight gain and sensitivity to cold</span></li>
          <li className="flex gap-3"><Check /><span>Dry skin, thinning hair and constipation</span></li>
          <li className="flex gap-3"><Check /><span>Low mood, trouble concentrating and heavy or irregular periods</span></li>
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">With an overactive thyroid, common signs include:</p>
        <ul className="my-4 space-y-3 text-[var(--color-ink)] leading-loose text-base">
          <li className="flex gap-3"><Check /><span>A fast or irregular heartbeat</span></li>
          <li className="flex gap-3"><Check /><span>Unintended weight loss despite normal eating</span></li>
          <li className="flex gap-3"><Check /><span>Anxiety, irritability, tremor and trouble sleeping</span></li>
          <li className="flex gap-3"><Check /><span>Heat intolerance and sweating</span></li>
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Because thyroid symptoms are so common and so easy to blame on stress or aging, many people live with them far longer than they need to.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who is most affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Thyroid disease can occur at any age, but it is more common in women, particularly after pregnancy and around menopause, and becomes more frequent with age. Risk is higher if you have a family history of thyroid disease, another autoimmune condition such as type 1 diabetes or celiac disease, or a history of neck radiation. Certain medications and iodine levels that are too high or too low can also play a role.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How thyroid problems are diagnosed</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Diagnosis usually begins with a conversation about your symptoms and health history, a physical exam that includes feeling your neck, and a blood test. A TSH level is the standard starting point, and your provider may add free T4, T3 or thyroid antibody tests to clarify the cause. If a nodule or enlarged gland is found, an ultrasound is often the next step. Medical organizations generally recommend that testing be guided by symptoms and risk factors rather than done routinely for everyone, which is why a thoughtful visit matters.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Treatment and what research shows</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Hypothyroidism is typically treated with daily levothyroxine, a replacement thyroid hormone. Decades of clinical experience show that, when the dose is right, symptoms improve and blood levels return to a healthy range. Doses are adjusted based on follow-up blood tests. Hyperthyroidism may be managed with anti-thyroid medicines, beta blockers to ease symptoms, radioactive iodine, or sometimes surgery. Left untreated, thyroid disease can contribute to heart problems, bone loss, high cholesterol and fertility difficulties, so early evaluation is worthwhile.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical steps you can take</h2>
        <ul className="my-4 space-y-3 text-[var(--color-ink)] leading-loose text-base">
          <li className="flex gap-3"><Check /><span>Write down your symptoms, when they began and whether they are changing.</span></li>
          <li className="flex gap-3"><Check /><span>Share your family history of thyroid or autoimmune disease.</span></li>
          <li className="flex gap-3"><Check /><span>Bring a list of all medications and supplements; biotin, for example, can interfere with some lab results.</span></li>
          <li className="flex gap-3"><Check /><span>Take thyroid medicine consistently, usually on an empty stomach, and separate it from calcium or iron supplements as directed.</span></li>
          <li className="flex gap-3"><Check /><span>Keep follow-up appointments so your dose can be fine-tuned.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to seek help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">If any of these symptoms sound familiar, you do not have to keep guessing. A simple evaluation can provide answers, and thyroid conditions are very manageable once identified. Opal Medical Group in Hagerstown, MD is currently taking new patients, and telehealth visits are available for medication management. Call us at (240) 420-2666 or reach out online to start the conversation.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
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
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.text}</p>
              </a>
            ))}
          </div>
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