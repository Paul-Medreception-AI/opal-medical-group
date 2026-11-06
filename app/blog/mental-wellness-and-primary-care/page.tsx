import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mental Wellness and Primary Care | Opal Medical Group',
  description: 'Learn how primary care supports mental wellness, from screening for anxiety and depression to practical daily habits and when to seek help.',
  alternates: { canonical: '/blog/mental-wellness-and-primary-care' },
  openGraph: {
    title: 'Mental Wellness and Primary Care | Opal Medical Group',
    description: 'Learn how primary care supports mental wellness, from screening for anxiety and depression to practical daily habits and when to seek help.',
    url: 'https://opalmedicalgroup.com/blog/mental-wellness-and-primary-care',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mental Wellness and Primary Care | Opal Medical Group',
    description: 'Learn how primary care supports mental wellness, from screening for anxiety and depression to practical daily habits and when to seek help.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const tips = [
  'Keep a regular sleep and wake schedule, even on weekends.',
  'Move your body most days; a brisk 20 to 30 minute walk counts.',
  'Limit alcohol, which can worsen anxiety and low mood.',
  'Stay connected with friends, family or community groups.',
  'Schedule time for activities that restore you, such as time outdoors.',
  'Bring up changes in mood, sleep or energy at your next visit.',
]

const related = [
  { href: '/blog', label: 'Blog', title: 'More Patient Resources', text: 'Browse all of our educational articles on staying well.' },
  { href: '/services', label: 'Services', title: 'Our Primary Care Services', text: 'See the care we offer, including telehealth and medication management.' },
  { href: '/contact', label: 'Contact', title: 'Schedule a Visit', text: 'Reach out to talk with our team about your health.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/80 mb-6">
            <a href="/" className="hover:underline">Home</a> › <a href="/blog" className="hover:underline">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-[Cormorant,serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Mental Wellness and Primary Care</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-mental-wellness-and-primary-care.jpg"} alt={"Close-up of 'Mental Health' text on cloth, symbolizing calmness and self-care."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="mb-6">Many of us notice it before we can name it: the trouble falling asleep, the short temper, the loss of interest in things we used to enjoy. Mental health is part of overall health, yet it is often the last thing people mention at a doctor visit. The good news is that your primary care office is a natural, welcoming place to start the conversation.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What Mental Wellness Really Means</h2>
        <p className="mb-6">Mental wellness is more than the absence of a diagnosis. It describes how we think, feel and cope with everyday stress, how we relate to others, and how we make choices. Wellness shifts over time. A demanding job, a loss, a new baby, a chronic illness or a hard season can all affect it, and that is a normal part of being human.</p>
        <p className="mb-6">When symptoms become persistent or begin to interfere with daily life, they may point to a condition such as depression or an anxiety disorder. These are common, medically recognized conditions, and they are treatable.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p className="mb-6">Mental health concerns affect people of every age, background and walk of life. Large national surveys estimate that roughly one in five U.S. adults lives with a mental illness in any given year. Many never seek care, whether because of stigma, cost worries, long waits for specialists, or the belief that they should simply push through.</p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant,serif] animate-fade-up">
          Mental health is part of overall health, yet it is often the last thing people mention at a doctor visit.
        </div>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why the Mind and Body Are Connected</h2>
        <p className="mb-6">Research consistently shows that mental and physical health influence each other. Long-term stress is linked with higher blood pressure and disrupted sleep. Depression is more common in people with heart disease, diabetes and chronic pain, and it can make those conditions harder to manage. Meanwhile, physical issues such as thyroid problems, vitamin deficiencies, sleep apnea and certain medications can produce symptoms that look like anxiety or depression.</p>
        <p className="mb-6">This is where primary care helps. A clinician who sees the whole picture can look for physical contributors, review your medications, and consider how your mood and your body are affecting one another.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">How Primary Care Supports Mental Wellness</h2>
        <p className="mb-6">Primary care is often the first and most consistent point of contact in the health system. Evidence supports the role it plays:</p>
        <ul className="mb-6 space-y-3">
          {[
            'Screening: short, validated questionnaires can help identify depression and anxiety early.',
            'Evaluation: a visit can rule out medical causes such as thyroid disease or anemia.',
            'Treatment: options may include counseling referrals, lifestyle changes and, when appropriate, medication.',
            'Follow-up: ongoing visits let your clinician check how you are doing and adjust the plan.',
            'Coordination: when you need a therapist or psychiatrist, primary care can help guide next steps.',
          ].map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="mb-6">At Opal Medical Group in Hagerstown, MD, we offer telehealth and medication management along with preventive and annual health exams, so follow-up can fit more easily into a busy life.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Everyday Habits That Help</h2>
        <p className="mb-6">Small, steady habits have real evidence behind them. Regular physical activity, for example, has been shown in studies to ease symptoms of mild to moderate depression and anxiety. Good sleep, social connection and limiting alcohol all support emotional resilience.</p>
        <ul className="mb-6 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="mb-6">These habits support treatment but do not replace it. If you have tried to feel better on your own and are still struggling, that is not a personal failing. It is a sign that more support could help.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Signs It Is Time to Reach Out</h2>
        <p className="mb-6">Consider making an appointment if, for two weeks or longer, you notice:</p>
        <ul className="mb-6 space-y-3">
          {[
            'Persistent sadness, hopelessness or irritability',
            'Constant worry, restlessness or panic',
            'Changes in sleep or appetite',
            'Trouble concentrating or making decisions',
            'Withdrawing from people or activities you used to enjoy',
          ].map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="mb-6">If you are having thoughts of harming yourself, call or text 988, the Suicide and Crisis Lifeline, or call 911 in an emergency. Help is available at any hour.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the First Step</h2>
        <p className="mb-6">Asking for help is one of the strongest things you can do for your health. Our practice is currently accepting new patients, and you can reach us at (240) 420-2666 to schedule a visit at 1126 Opal Ct, Hagerstown, MD 21740, or ask about a telehealth appointment. You do not need to have the right words. Start with how you have been feeling, and we will take it from there.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-ink)]">From Opal Medical Group</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[Cormorant,serif] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl border border-[var(--color-border)] p-6 transition hover:shadow-lg">
                <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">{r.label}</p>
                <h4 className="font-[Cormorant,serif] text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant,serif] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}