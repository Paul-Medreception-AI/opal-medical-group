import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sleep and Your Overall Health | Opal Medical Group',
  description: 'Learn how sleep affects heart health, mood, weight and immunity, plus practical tips for better rest and when to talk with a primary care provider.',
  alternates: { canonical: '/blog/sleep-and-your-overall-health' },
  openGraph: {
    title: 'Sleep and Your Overall Health | Opal Medical Group',
    description: 'Learn how sleep affects heart health, mood, weight and immunity, plus practical tips for better rest and when to talk with a primary care provider.',
    url: 'https://opalmedicalgroup.com/blog/sleep-and-your-overall-health',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sleep and Your Overall Health | Opal Medical Group',
    description: 'Learn how sleep affects heart health, mood, weight and immunity, plus practical tips for better rest and when to talk with a primary care provider.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const tips = [
  'Keep a consistent bedtime and wake time, even on weekends.',
  'Keep your bedroom cool, dark and quiet.',
  'Put screens away 30 to 60 minutes before bed.',
  'Limit caffeine after midday and avoid large meals late at night.',
  'Get daylight and regular physical activity during the day.',
  'Use alcohol sparingly; it can fragment sleep later in the night.',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'More Patient Education Articles', text: 'Browse our library of health guidance from Opal Medical Group.' },
  { href: '/services', label: 'Our Care', title: 'Primary Care Services', text: 'See the ways we support your long-term health in Hagerstown.' },
  { href: '/contact', label: 'Contact', title: 'Schedule a Visit', text: 'Reach out to talk with our team about sleep or any health concern.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white">Home</a> › <a href="/blog" className="hover:text-white">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-[Cormorant] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Sleep and Your Overall Health</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-sleep-and-your-overall-health.jpg"} alt={"Peaceful elderly couple sleeping together in bed, showing relaxation and comfort."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p>You know the feeling: a night of tossing and turning, and the next day everything seems harder. Your focus slips, your patience runs thin and the coffee cup never seems full enough. Most of us treat sleep as something to squeeze in around everything else. Yet sleep is one of the most powerful things we do for our health, and it deserves a place near the top of the list.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">What Happens While You Sleep</h2>
        <p>Sleep is not simply rest. While you are asleep, your brain moves through repeating cycles of light sleep, deep sleep and REM sleep. During deep sleep, the body repairs tissue, supports immune function and regulates hormones. During REM sleep, the brain processes emotions and consolidates memory. Each stage plays a role, and cutting sleep short means missing out on them.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">How Much Sleep Do Adults Need?</h2>
        <p>Most adults do well with seven or more hours of sleep per night, according to major sleep and public health organizations. Needs vary somewhat from person to person, and older adults often experience lighter, more broken sleep even though their need for rest does not disappear. Teenagers and children need more. If you regularly wake up unrefreshed after seven or eight hours, that is worth discussing with a clinician.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Sleep Matters for the Whole Body</h2>
        <p>Research consistently links chronic short sleep with a wide range of health concerns. Sleep touches nearly every system in the body:</p>
        <ul className="my-6 space-y-3">
          {[
            ['Heart health', 'Poor sleep is associated with higher blood pressure and a greater risk of heart disease.'],
            ['Blood sugar and weight', 'Short sleep can affect hunger hormones and insulin sensitivity, raising the risk of weight gain and type 2 diabetes.'],
            ['Mood and mental health', 'Sleep problems and conditions like anxiety and depression often feed one another.'],
            ['Immune function', 'People who sleep poorly may be more susceptible to common infections and may recover more slowly.'],
            ['Thinking and safety', 'Drowsiness slows reaction time and impairs judgment, contributing to accidents and drowsy driving.'],
          ].map(([h, t]) => (
            <li key={h} className="flex gap-3">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span><strong>{h}:</strong> {t}</span>
            </li>
          ))}
        </ul>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant]">
          Sleep touches nearly every system in the body.
        </blockquote>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Sleep Problems</h2>
        <p>Insomnia, which means trouble falling asleep, staying asleep or waking too early, is among the most common. Obstructive sleep apnea is another frequent condition, in which breathing repeatedly pauses during sleep. Warning signs include loud snoring, gasping or choking at night, morning headaches and heavy daytime sleepiness. Restless legs syndrome, shift work, stress, pain, certain medications and menopause can also disrupt rest. Because sleep apnea is linked to high blood pressure and heart rhythm problems, it should not be ignored.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Sleep Better</h2>
        <p>Good sleep habits, often called sleep hygiene, are a first step for many people. Small, steady changes tend to work better than dramatic ones:</p>
        <ul className="my-6 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p>If you cannot fall asleep after about 20 minutes, get up, do something calm in dim light and return to bed when sleepy. For ongoing insomnia, cognitive behavioral therapy for insomnia (CBT-I) is widely recommended as an effective first-line approach.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Talk With a Provider</h2>
        <p>Consider making an appointment if poor sleep lasts more than a few weeks, if you snore loudly or stop breathing at night, if you feel sleepy while driving, or if sleep trouble comes with low mood, worry or pain. A primary care provider can review your medications, screen for conditions such as sleep apnea, check for contributing health issues and help you build a plan that fits your life.</p>
        <p className="mt-6">At Opal Medical Group in Hagerstown, MD, we welcome conversations about sleep as part of whole-person primary care. Call us at (240) 420-2666 or reach out through our contact page, and let us help you get the rest you deserve.</p>
      </article>

      <div className="bg-white px-6">
        <div className="animate-fade-up bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-dark)]">
            <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
          </div>
          <div>
            <p className="font-semibold text-[var(--color-ink)]">From Opal Medical Group</p>
            <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
          </div>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[Cormorant] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl border border-[var(--color-border)] p-6 transition hover:shadow-lg">
                <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">{r.label}</p>
                <p className="font-[Cormorant] text-2xl text-[var(--color-ink)] mb-2">{r.title}</p>
                <p className="text-sm text-[var(--color-muted)]">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition">Contact Us</a>
        </div>
      </section>
    </main>
  )
}