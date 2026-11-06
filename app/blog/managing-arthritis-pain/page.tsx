import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Managing Arthritis Pain | Opal Medical Group',
  description: 'Practical, evidence-based ways to manage arthritis pain: movement, weight, heat and cold, medications, sleep, and when to see a primary care provider.',
  alternates: { canonical: '/blog/managing-arthritis-pain' },
  openGraph: {
    title: 'Managing Arthritis Pain | Opal Medical Group',
    description: 'Practical, evidence-based ways to manage arthritis pain: movement, weight, heat and cold, medications, sleep, and when to see a primary care provider.',
    url: 'https://opalmedicalgroup.com/blog/managing-arthritis-pain',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managing Arthritis Pain | Opal Medical Group',
    description: 'Practical, evidence-based ways to manage arthritis pain: movement, weight, heat and cold, medications, sleep, and when to see a primary care provider.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const tips = [
  'Keep moving every day with low-impact activity such as walking, swimming, or cycling.',
  'Use warmth for stiffness and cold for flare-ups and swelling.',
  'Protect joints by pacing tasks, using supportive footwear, and choosing assistive tools.',
  'Work toward a healthy weight, which reduces load on hips, knees, and spine.',
  'Prioritize sleep, since poor rest can make pain feel stronger.',
  'Review every medication and supplement with your provider before starting it.',
]

const related = [
  { href: '/blog', title: 'All Resources', text: 'Browse every patient education article from Opal Medical Group.' },
  { href: '/services', title: 'Our Services', text: 'See the primary care services we offer in Hagerstown, MD.' },
  { href: '/contact', title: 'Schedule a Visit', text: 'Talk with our team about joint pain and your care options.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-managing-arthritis-pain.jpg" alt="Person sitting on sofa, holding knee in pain. Indoor lifestyle health concept.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Managing Arthritis Pain</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up text-lg">
          The first few steps out of bed feel like walking on rusty hinges. Opening a jar, climbing stairs, or holding a grandchild can turn into a negotiation with your own body. If this sounds familiar, you are far from alone, and you do not have to simply accept it. Arthritis pain can be managed, and small daily choices often add up to real relief.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Arthritis Really Is</h2>
        <p>
          Arthritis is not a single disease. It is a broad term for conditions that cause pain, stiffness, and swelling in the joints. The two most common forms are osteoarthritis and rheumatoid arthritis. Osteoarthritis develops as cartilage, the smooth cushion at the ends of bones, gradually wears down over time. Rheumatoid arthritis is an autoimmune condition in which the immune system mistakenly attacks the lining of the joints. Other types include psoriatic arthritis and gout, which is triggered by uric acid crystals in a joint.
        </p>
        <p className="mt-4">
          Because the causes differ, the best treatment differs too. That is why an accurate diagnosis matters before you settle on a plan.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who It Affects</h2>
        <p>
          Arthritis is among the most common causes of chronic pain and disability in adults. Risk rises with age, but it is not only an older person&apos;s condition. Previous joint injuries, family history, excess body weight, repetitive physical work, and certain autoimmune conditions can all raise your risk. Women are more likely to develop rheumatoid arthritis, while gout is more common in men. Arthritis can appear in your thirties or forties, and it can affect how you work, sleep, and enjoy time with family.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Treating It Early Matters</h2>
        <p>
          Persistent joint pain often leads people to move less, and less movement tends to weaken the muscles that support the joint, which can increase pain. Chronic pain is also linked with low mood, poor sleep, and withdrawal from activities you love. In inflammatory types such as rheumatoid arthritis, early treatment can help limit permanent joint damage. Even with osteoarthritis, an early plan can protect function and independence.
        </p>

        <blockquote className="animate-fade-up bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Keep moving every day with low-impact activity such as walking, swimming, or cycling.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Shows</h2>
        <p>
          Guidelines from major rheumatology and orthopedic organizations consistently place exercise at the center of arthritis care. Studies show that regular physical activity reduces pain and improves function in people with knee and hip osteoarthritis, often as much as some medications. Strengthening the muscles around a joint helps absorb shock. Gentle practices such as tai chi and yoga have also shown benefit for pain and balance.
        </p>
        <p className="mt-4">
          Weight matters as well. Research suggests that each pound of body weight lost can take roughly four pounds of pressure off the knees with every step. Even modest weight loss can noticeably reduce knee pain.
        </p>
        <p className="mt-4">
          For medications, options range from topical anti-inflammatory gels and acetaminophen to oral anti-inflammatory drugs and, for autoimmune forms, disease-modifying therapies. Each carries benefits and risks, particularly for people with heart, kidney, or stomach concerns, so they should be chosen with your provider.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Ease Arthritis Pain</h2>
        <p className="mb-4">These everyday strategies are a good place to begin:</p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3">
              {check}
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          Physical or occupational therapy can teach you exercises and joint-protection techniques tailored to your needs. Some people find relief from bracing, injections, or, when joints are severely damaged, surgical options. Your primary care provider can help you decide when to consider these steps and can coordinate referrals.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Help</h2>
        <p>
          Make an appointment if joint pain lasts more than a few weeks, if stiffness lingers for more than 30 minutes in the morning, or if a joint is red, hot, swollen, or suddenly very painful. Seek prompt care for a swollen joint with fever. Tell your provider if pain is interfering with sleep, work, or daily tasks, because those are signs your current approach needs adjusting.
        </p>
        <p className="mt-4">
          At Opal Medical Group in Hagerstown, MD, our primary care team can evaluate joint pain, review your medications, and help build a plan that fits your life. We are currently welcoming new patients, and telehealth visits are available for appropriate follow-ups. Call (240) 420-2666 or reach out through our contact page to get started.
        </p>
      </article>

      <section className="animate-fade-up bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
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

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.title} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-dark)] mb-2">{r.title}</h4>
              <p className="text-[var(--color-muted)] text-sm">{r.text}</p>
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