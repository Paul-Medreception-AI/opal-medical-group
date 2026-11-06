import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Weight Management Without Fad Diets',
  description: 'Learn how sustainable habits, sleep, movement and medical support help with long-term weight management without fad diets or quick fixes.',
  alternates: { canonical: '/blog/weight-management-without-fad-diets' },
  openGraph: {
    title: 'Weight Management Without Fad Diets',
    description: 'Learn how sustainable habits, sleep, movement and medical support help with long-term weight management without fad diets or quick fixes.',
    url: 'https://opalmedicalgroup.com/blog/weight-management-without-fad-diets',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weight Management Without Fad Diets',
    description: 'Learn how sustainable habits, sleep, movement and medical support help with long-term weight management without fad diets or quick fixes.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const tips = [
  'Build meals around vegetables, lean protein, whole grains and healthy fats',
  'Aim for about 150 minutes of moderate activity each week, as general guidelines suggest',
  'Protect your sleep, since short sleep can raise hunger and cravings',
  'Set small, specific goals such as a daily walk, rather than a dramatic target',
  'Track patterns, not perfection, and adjust when life changes',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'More Patient Education Articles' },
  { href: '/services', label: 'Services', title: 'Primary Care Services' },
  { href: '/contact', label: 'Contact', title: 'Schedule a Visit in Hagerstown' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-[Cormorant,serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Weight Management Without Fad Diets</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-weight-management-without-fad-diets.jpg"} alt={"A fork entwined with a blue measuring tape, symbolizing dieting and weight management."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p>If you have ever started a new diet with real hope, only to feel discouraged a few weeks later, you are far from alone. Many people have cycled through cabbage soups, juice cleanses and strict point systems. The frustration is real, and it is not a personal failing. Most fad diets are simply not designed to last.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Fad Diets Fall Short</h2>
        <p>Fad diets usually promise fast results by cutting entire food groups or severely limiting calories. They can work briefly, but they are hard to maintain. When the plan ends, old habits return and weight often returns with them. Restrictive eating can also leave you tired, irritable and preoccupied with food.</p>
        <p>Research on long-term weight management consistently points to the same conclusion: the best eating pattern is one you can realistically follow for years. Gradual changes tend to hold up better than dramatic ones.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p>Weight concerns affect adults of every age and background. Metabolism, hormones, medications, stress, sleep, family history, and the environment around us all play a part. Conditions such as thyroid disorders, polycystic ovary syndrome, and sleep apnea can make weight harder to manage, and some common medications can influence weight as well. That is why a one-size-fits-all diet rarely works.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters for Your Health</h2>
        <p>Carrying extra weight is associated with higher risk of type 2 diabetes, high blood pressure, heart disease, joint pain and some cancers. Even modest weight loss, often cited as 5 to 10 percent of body weight, can improve blood pressure, blood sugar and cholesterol for many people. Health is about much more than a number on the scale, and small improvements count.</p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant,serif]">
          The best eating pattern is one you can realistically follow for years.
        </blockquote>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Supports</h2>
        <p>Studies of people who keep weight off over time show common threads: regular physical activity, consistent meals, plenty of vegetables and fiber, limited sugary drinks, and ongoing self-monitoring. Behavioral support, such as regular check-ins and problem solving, also improves outcomes. For some people, medical treatment including prescription medication may be appropriate, and that is a decision best made with a clinician who knows your history.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Start Today</h2>
        <ul className="space-y-3 my-6">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Be Kind to Yourself</h2>
        <p>Setbacks are a normal part of change. Rather than starting over, treat a difficult week as information. What made it hard? Was it stress, travel, poor sleep? Small adjustments, made patiently, add up. Shame rarely helps; support does.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Get Professional Help</h2>
        <p>Consider talking with a clinician if you have struggled to make progress, have gained weight unexpectedly, or have conditions like diabetes or high blood pressure. A primary care visit can include a review of your health history, medications and goals, along with a plan that fits your life. Opal Medical Group in Hagerstown, MD is currently accepting new patients, and telehealth visits are offered. Call (240) 420-2666 to get started.</p>
      </article>

      <section className="max-w-3xl mx-auto px-6">
        <div className="animate-fade-up bg-[var(--color-cream)] rounded-2xl p-8 my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-dark)]">
            <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
          </div>
          <div>
            <p className="font-semibold text-[var(--color-ink)]">From Opal Medical Group</p>
            <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[Cormorant,serif] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.title} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-[Cormorant,serif] text-2xl text-[var(--color-ink)]">{r.title}</p>
                <span className="inline-block mt-4 text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-dark)]">Read more →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant,serif] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}