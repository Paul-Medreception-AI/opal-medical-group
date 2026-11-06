import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'When to Visit Primary Care Instead of Urgent Care',
  description: 'Learn when primary care is the better choice than urgent care, when to go to the ER, and how ongoing care can help you avoid repeat visits.',
  alternates: { canonical: '/blog/when-to-visit-primary-care-instead-of-urgent-care' },
  openGraph: {
    title: 'When to Visit Primary Care Instead of Urgent Care',
    description: 'Learn when primary care is the better choice than urgent care, when to go to the ER, and how ongoing care can help you avoid repeat visits.',
    url: 'https://opalmedicalgroup.com/blog/when-to-visit-primary-care-instead-of-urgent-care',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When to Visit Primary Care Instead of Urgent Care',
    description: 'Learn when primary care is the better choice than urgent care, when to go to the ER, and how ongoing care can help you avoid repeat visits.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const Check = () => (
  <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const tips1 = [
  'Ongoing conditions such as high blood pressure, diabetes, asthma or thyroid problems',
  'Medication refills and medication reviews',
  'Annual physicals, preventive screenings and vaccines',
  'Symptoms that keep coming back or have lasted for weeks',
  'Questions about weight, sleep, mood, fatigue or stress',
  'Follow-up after an urgent care or hospital visit',
]

const tips2 = [
  'Keep an up-to-date list of your medications and allergies',
  'Write down when symptoms started and what makes them better or worse',
  'Ask about telehealth if getting to the office is difficult',
  'Call your primary care office first when you are unsure where to go',
  'Bring urgent care paperwork to your next primary care visit',
]

const related = [
  { href: '/blog', title: 'More Articles from Our Resource Hub', text: 'Browse patient education articles on prevention and everyday health.' },
  { href: '/services', title: 'Primary Care Services', text: 'See the kinds of care available through ongoing primary care.' },
  { href: '/contact', title: 'Contact Our Hagerstown Office', text: 'Reach out with questions or to ask about becoming a new patient.' },
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
          <h1 className="font-[Cormorant,serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">When to Visit Primary Care Instead of Urgent Care</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-when-to-visit-primary-care-instead-of-urgent-care.jpg"} alt={"Flat lay of stethoscope, blank paper, and pen on blue surface, ideal for medical themes."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          It is a Tuesday evening, your throat hurts, and the thought of waiting for an appointment feels unbearable. Or maybe you have been feeling off for weeks and keep putting it off. Choosing where to go for care is a decision almost everyone faces, and the right choice can save you time, stress and repeat visits.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What Urgent Care Is Designed to Do</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Urgent care centers treat problems that need prompt attention but are not life-threatening, such as minor cuts, sprains, mild infections or a sudden fever. They are useful when your regular office is closed or you cannot be seen quickly. The tradeoff is that the clinician usually does not know your history, your other conditions or the medications you take.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What Primary Care Does Differently</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Primary care is built around relationship and continuity. Your clinician gets to know your health over time, so changes are easier to notice and decisions fit your whole picture rather than a single complaint. Primary care covers prevention, diagnosis, treatment of common illnesses, and the long-term management of chronic conditions.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">When Primary Care Is the Better Choice</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Consider scheduling with your primary care clinician for:
        </p>
        <ul className="space-y-3">
          {tips1.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-relaxed"><Check />{t}</li>
          ))}
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant,serif]">
          Primary care is built around relationship and continuity.
        </div>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Suggests</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Studies have consistently linked having a regular source of primary care with better management of chronic disease, higher rates of preventive screening and fewer avoidable emergency visits. Continuity matters because a clinician who knows your baseline can spot subtle changes sooner. Urgent care fills an important gap, but it is not designed to coordinate long-term care.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Skip Both and Go to the Emergency Room</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Some symptoms should never wait. Call 911 or go to the nearest emergency department for chest pain or pressure, trouble breathing, signs of stroke (face drooping, arm weakness, speech difficulty), severe bleeding, sudden severe headache, serious injury, or thoughts of harming yourself. When in doubt about a possible emergency, choose the emergency room.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Tips for Choosing Where to Go</h2>
        <ul className="space-y-3">
          {tips2.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-relaxed"><Check />{t}</li>
          ))}
        </ul>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Make Primary Care Your Home Base</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Urgent care can be a helpful backup, but your health is best supported by someone who knows you. Opal Medical Group in Hagerstown, MD offers primary care, preventive and annual exams, and telehealth visits, and is currently accepting new patients. Call (240) 420-2666 or reach out through our contact page to get started.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
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

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-[Cormorant,serif] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <h4 className="font-[Cormorant,serif] text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.text}</p>
            </a>
          ))}
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