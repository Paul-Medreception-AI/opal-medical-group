import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Staying Active With Chronic Conditions | Opal Medical Group',
  description: 'Practical, evidence-based guidance on staying physically active when living with a chronic condition, and when to ask your primary care team for help.',
  alternates: { canonical: '/blog/staying-active-with-chronic-conditions' },
  openGraph: {
    title: 'Staying Active With Chronic Conditions | Opal Medical Group',
    description: 'Practical, evidence-based guidance on staying physically active when living with a chronic condition, and when to ask your primary care team for help.',
    url: 'https://opalmedicalgroup.com/blog/staying-active-with-chronic-conditions',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Staying Active With Chronic Conditions | Opal Medical Group',
    description: 'Practical, evidence-based guidance on staying physically active when living with a chronic condition, and when to ask your primary care team for help.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const tips = [
  'Start with just 5 to 10 minutes at a time and build gradually.',
  'Choose low-impact options such as walking, swimming, cycling or chair exercises.',
  'Include light strength work and gentle stretching on most weeks.',
  'Track how you feel, not only how far or how long you went.',
  'Rest on hard days and return when you are ready, without guilt.',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'More Patient Education Articles' },
  { href: '/services', label: 'Services', title: 'Our Primary Care Services' },
  { href: '/contact', label: 'Contact', title: 'Talk With Our Team' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-staying-active-with-chronic-conditions.jpg" alt="Crop sportswoman in sportswear tying sneakers while sitting on wooden floor with sport mat and dumbbells before exercising indoors">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white">Home</a> › <a href="/blog" className="hover:text-white">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Staying Active With Chronic Conditions</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          When your body hurts, tires easily or does not behave the way it used to, movement can feel like the last thing you want. Yet for many people living with a long-term health condition, staying active is one of the most powerful things they can do. The good news is that it does not require a gym membership or intense workouts. It requires a plan that fits you.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Movement Matters When You Have a Chronic Condition</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Chronic conditions such as type 2 diabetes, heart disease, high blood pressure, arthritis, asthma, COPD and depression affect millions of adults. Many people were once told to rest when symptoms flared. Current guidance from major health organizations has shifted: regular physical activity is generally recommended for most adults with chronic conditions, adjusted to their abilities and safety needs.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Research consistently links regular activity with better blood sugar control, improved blood pressure, stronger muscles and bones, better sleep, improved mood and a lower risk of complications over time. Even modest amounts of movement appear to offer benefit compared with being inactive.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Guidelines Suggest</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          General recommendations for adults are about 150 minutes a week of moderate activity, such as brisk walking, plus muscle-strengthening activities on two days. Guidelines also state that adults with chronic conditions should be as active as their abilities allow. If 150 minutes sounds out of reach today, that is fine. Some activity is better than none, and the total can build over weeks and months.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Even modest amounts of movement appear to offer benefit compared with being inactive.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Barriers and How to Work Around Them</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Pain, fatigue, fear of making symptoms worse, shortness of breath, balance concerns and low motivation are all real obstacles. They are not signs of weakness. Often a small change helps: breaking activity into short sessions, exercising seated, choosing water-based activity to reduce joint stress, or picking the time of day when you feel best.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Medication timing, blood sugar patterns and heart or lung symptoms can also influence what is safe on a given day. This is where an individualized conversation with your clinician makes a difference.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Tips to Get Started</h2>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <Check />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Listening to Your Body Safely</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A useful rule is the talk test: during moderate activity you should be able to talk but not sing. Mild muscle soreness or gentle breathlessness can be normal. Stop and seek care promptly for chest pain or pressure, severe shortness of breath, fainting or dizziness, a racing or irregular heartbeat, or sudden severe pain. If you have diabetes, keep a fast-acting carbohydrate nearby and ask how exercise may affect your medications.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Make Activity a Habit That Lasts</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Habits stick when they are enjoyable and attached to your day. Walk after a meal, stretch while the coffee brews, or invite a friend or family member to join you. Celebrate progress such as climbing stairs more easily or sleeping better. Setbacks happen with chronic illness; restarting at a lower level is part of the process, not a failure.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Talk With Your Primary Care Team</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Before starting or changing an exercise routine, it helps to review your conditions, medications and goals with a clinician who knows you. At Opal Medical Group in Hagerstown, MD, our primary care team can help you think through a realistic plan, and telehealth visits are available for follow-up conversations. If you are looking for a primary care home, we are currently accepting new patients. Call (240) 420-2666 or reach out through our contact page.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-dark)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-ink)]">From Opal Medical Group</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl border border-[var(--color-border)] p-6 hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-cormorant text-2xl text-[var(--color-ink)]">{r.title}</p>
                <span className="inline-block mt-4 text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-dark)]">Read more →</span>
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