import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stress and Physical Health | Opal Medical Group',
  description: 'Learn how chronic stress affects your heart, sleep, digestion and immunity, and practical steps to protect your physical health.',
  alternates: { canonical: '/blog/stress-and-physical-health' },
  openGraph: {
    title: 'Stress and Physical Health | Opal Medical Group',
    description: 'Learn how chronic stress affects your heart, sleep, digestion and immunity, and practical steps to protect your physical health.',
    url: 'https://opalmedicalgroup.com/blog/stress-and-physical-health',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stress and Physical Health | Opal Medical Group',
    description: 'Learn how chronic stress affects your heart, sleep, digestion and immunity, and practical steps to protect your physical health.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const tips = [
  'Move your body most days, even a brisk 20-minute walk',
  'Protect your sleep with a steady bedtime and a screen-free wind-down',
  'Practice slow breathing, meditation, or gentle stretching for a few minutes daily',
  'Limit alcohol, nicotine and excess caffeine, which can amplify stress symptoms',
  'Stay connected with friends, family or community who support you',
  'Set boundaries around work and say no when your plate is full',
]

const related = [
  { href: '/blog', title: 'Resources Hub', desc: 'Browse all patient education articles from Opal Medical Group.' },
  { href: '/services', title: 'Our Services', desc: 'See the primary care services we offer in Hagerstown, MD.' },
  { href: '/contact', title: 'Contact Our Office', desc: 'Reach out to schedule a visit, in person or by telehealth.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-[Cormorant,serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Stress and Physical Health</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-stress-and-physical-health.jpg"} alt={"Close-up of hands using a spiky massage ball for therapy against a blue backdrop."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You know the feeling: a tight chest before a big meeting, a stomach that churns during a hard week, a night spent staring at the ceiling while your mind races. Stress is often dismissed as &quot;just in your head,&quot; but it lives in your body too. Understanding the link between stress and physical health is the first step toward feeling better.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What Stress Does in the Body</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          When you face a threat, real or perceived, your brain triggers the &quot;fight or flight&quot; response. The adrenal glands release adrenaline and cortisol, your heart beats faster, blood pressure rises, breathing quickens and muscles tense. This system is helpful in short bursts, such as slamming on the brakes to avoid a collision. The trouble begins when the alarm never fully switches off.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Everyone experiences stress, but long-lasting stress is especially common among caregivers, shift workers, people managing chronic illness, those facing financial strain, and anyone balancing work and family demands. Stress does not discriminate by age, and children and older adults feel it too, though it may look different in each stage of life.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">How Chronic Stress Affects Your Health</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Research has linked prolonged stress to a wide range of physical concerns. Persistently elevated stress hormones can affect nearly every system in the body:
        </p>
        <ul className="my-6 space-y-3 text-[var(--color-ink)] leading-loose text-base">
          <li><strong>Heart and blood vessels:</strong> higher blood pressure and increased risk of heart disease over time.</li>
          <li><strong>Sleep:</strong> trouble falling or staying asleep, which in turn worsens stress.</li>
          <li><strong>Digestion:</strong> heartburn, stomach pain, nausea, and flares of irritable bowel symptoms.</li>
          <li><strong>Immunity:</strong> a weakened defense against colds and slower recovery from illness.</li>
          <li><strong>Muscles and pain:</strong> tension headaches, jaw clenching, and neck, shoulder and back pain.</li>
          <li><strong>Metabolism:</strong> changes in appetite, weight and blood sugar control.</li>
          <li><strong>Mood and focus:</strong> irritability, anxiety, low mood and trouble concentrating.</li>
        </ul>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant,serif]">
          The trouble begins when the alarm never fully switches off.
        </blockquote>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Tells Us</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Large studies from major health organizations, including the American Psychological Association and the National Institutes of Health, have found associations between chronic stress and cardiovascular disease, depression, anxiety and digestive disorders. Importantly, the evidence also shows that stress management techniques such as regular exercise, mindfulness, cognitive behavioral approaches and good sleep habits can lower stress and improve physical measures like blood pressure and pain.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Manage Stress</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You cannot remove every source of stress, but you can change how your body responds. Small, consistent habits make a real difference:
        </p>
        <ul className="my-6 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Reach out to a healthcare professional if stress is interfering with sleep, work or relationships, if you notice ongoing chest discomfort, headaches, stomach trouble or changes in mood, or if you are relying on alcohol or other substances to cope. If you ever have thoughts of harming yourself, call or text 988 or seek emergency care right away. Chest pain should always be evaluated promptly.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-6">
          At Opal Medical Group in Hagerstown, MD, we offer primary care and telehealth visits, and we are currently accepting new patients. Call us at (240) 420-2666 to talk through what you are experiencing and build a plan that supports your whole health.
        </p>
      </article>

      <section className="px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
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
          <h3 className="font-[Cormorant,serif] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl border border-[var(--color-border)] p-6 hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5M6.75 12h10.5" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
                <h4 className="font-[Cormorant,serif] text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-[Cormorant,serif] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full font-medium">Contact Us</a>
        </div>
      </section>
    </main>
  )
}