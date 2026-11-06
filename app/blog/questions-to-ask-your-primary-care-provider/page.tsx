import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Questions to Ask Your Primary Care Provider',
  description: 'Make the most of your next appointment. Learn which questions to ask your primary care provider about screenings, medications, symptoms and long-term health.',
  alternates: { canonical: '/blog/questions-to-ask-your-primary-care-provider' },
  openGraph: {
    title: 'Questions to Ask Your Primary Care Provider',
    description: 'Make the most of your next appointment. Learn which questions to ask your primary care provider about screenings, medications, symptoms and long-term health.',
    url: 'https://opalmedicalgroup.com/blog/questions-to-ask-your-primary-care-provider',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Questions to Ask Your Primary Care Provider',
    description: 'Make the most of your next appointment. Learn which questions to ask your primary care provider about screenings, medications, symptoms and long-term health.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const related = [
  { href: '/blog', title: 'More Patient Resources', text: 'Browse all of our patient education articles.' },
  { href: '/services', title: 'Our Primary Care Services', text: 'See the care we offer for adults in Hagerstown.' },
  { href: '/contact', title: 'Schedule a Visit', text: 'Reach out to become a new patient.' },
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
          <h1 className="font-[Cormorant] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Questions to Ask Your Primary Care Provider</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-questions-to-ask-your-primary-care-provider.jpg"} alt={"Close-up of a magnifying glass focusing on the phrase 'Frequently Asked Questions'."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">You sit down in the exam room, and the visit seems to be over in a blink. Then, in the parking lot, you remember the three things you meant to ask. It happens to nearly everyone. A little preparation turns a rushed appointment into a real conversation, and the right questions help you understand your health instead of simply hearing about it.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why the questions you ask matter</h2>
        <p>Your primary care provider is often the first person you turn to for new symptoms, ongoing conditions and prevention. Research on patient engagement consistently links patients who take part in decisions with a better understanding of their care and better follow-through with treatment plans. Questions are not an inconvenience. They give your provider the information needed to tailor advice to you.</p>
        <p className="mt-4">Visits are also short, so it helps to decide ahead of time what matters most. Write down your top three concerns and bring them up early in the appointment.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions about your overall health</h2>
        <p>Start with the big picture. These questions help you see where you stand and what to focus on:</p>
        <ul className="mt-4 space-y-3">
          {['Based on my age, family history and lifestyle, which screenings or vaccines are due?', 'Are my blood pressure, cholesterol and blood sugar where they should be?', 'What is one change that would do the most for my health this year?', 'How often should I come in for routine and annual exams?'].map((q) => (
            <li key={q} className="flex gap-3">{check}<span>{q}</span></li>
          ))}
        </ul>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions about a new symptom or diagnosis</h2>
        <p>When something feels wrong, or you receive a diagnosis, clarity is the goal. Many people leave appointments unsure of what was said, particularly when they are worried. Consider asking:</p>
        <ul className="mt-4 space-y-3">
          {['What could be causing this, and what else should we rule out?', 'Which tests do you recommend, and how will the results change my care?', 'What should I expect over the next few days or weeks?', 'Which warning signs mean I should call you or seek urgent care?', 'Is this condition likely to be temporary or long term?'].map((q) => (
            <li key={q} className="flex gap-3">{check}<span>{q}</span></li>
          ))}
        </ul>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant]">
          Questions are not an inconvenience.
        </blockquote>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions about medications</h2>
        <p>Medication errors and misunderstandings are a well-documented cause of preventable problems, especially when several prescribers are involved. Bring a list of everything you take, including over-the-counter products and supplements, and ask:</p>
        <ul className="mt-4 space-y-3">
          {['What is this medication for, and how will we know it is working?', 'What side effects are common, and which ones need a call?', 'Could it interact with anything else I take?', 'What happens if I miss a dose?', 'How long will I need to take it, and is there a non-medication option?'].map((q) => (
            <li key={q} className="flex gap-3">{check}<span>{q}</span></li>
          ))}
        </ul>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions about access and follow-up</h2>
        <p>A good relationship with your provider depends on knowing how to reach them. Ask how to get in touch between visits, how test results will be shared, and whether a telehealth visit is an option for follow-ups or medication management. At Opal Medical Group, telehealth visits are offered, which can make some check-ins easier to fit into a busy week.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Tips for a more productive visit</h2>
        <ul className="mt-4 space-y-3">
          {['Write your questions down and put the most important first.', 'Bring a medication list and any recent records from other providers.', 'Consider bringing a trusted friend or relative to help listen and remember.', 'Be candid, even about topics that feel awkward. Providers have heard it before.', 'Repeat the plan back in your own words to confirm you understood it.', 'Ask for written instructions if anything feels complicated.'].map((q) => (
            <li key={q} className="flex gap-3">{check}<span>{q}</span></li>
          ))}
        </ul>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the next step</h2>
        <p>Your health is worth a few minutes of preparation. If you are looking for a primary care team in Hagerstown, Opal Medical Group is currently accepting new patients. Call us at (240) 420-2666 or visit us at 1126 Opal Ct, Hagerstown, MD 21740, and bring your questions with you.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-dark)]">
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
          <h3 className="font-[Cormorant] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.title} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-[Cormorant] text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)]">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}