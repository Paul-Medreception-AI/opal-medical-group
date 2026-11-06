import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building a Long-Term Relationship With Your Provider',
  description: 'Why a lasting relationship with your primary care provider improves care, and practical ways to build trust, communicate openly and get more from every visit.',
  alternates: { canonical: '/blog/building-a-long-term-relationship-with-your-provider' },
  openGraph: {
    title: 'Building a Long-Term Relationship With Your Provider',
    description: 'Why a lasting relationship with your primary care provider improves care, and practical ways to build trust, communicate openly and get more from every visit.',
    url: 'https://opalmedicalgroup.com/blog/building-a-long-term-relationship-with-your-provider',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Building a Long-Term Relationship With Your Provider',
    description: 'Why a lasting relationship with your primary care provider improves care, and practical ways to build trust, communicate openly and get more from every visit.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const tips = [
  'Write down your top three questions or concerns before each visit.',
  'Bring a current list of medications, supplements and allergies.',
  'Share symptoms, habits and worries honestly, even when they feel awkward.',
  'Repeat back the plan in your own words to confirm you understood it.',
  'Ask what to do if things do not improve, and when to reach out.',
  'Keep preventive visits on the calendar, even when you feel well.',
]

const related = [
  { href: '/blog', label: 'Blog', title: 'More Patient Resources', text: 'Browse all of our patient education articles.' },
  { href: '/services', label: 'Services', title: 'Our Primary Care Services', text: 'See the care we offer, from annual exams to medication management.' },
  { href: '/contact', label: 'Contact', title: 'Schedule a Visit', text: 'Reach our Hagerstown office to ask questions or book an appointment.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white">Home</a> › <a href="/blog" className="hover:text-white">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-[Cormorant] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Building a Long-Term Relationship With Your Provider</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-building-a-long-term-relationship-with-your-provider.jpg"} alt={"A doctor uses a stethoscope to examine a young boy with his mother present in a medical office."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Think about the last time you had to explain your health history to someone who had never met you. The surgeries, the family patterns, the medication that never agreed with you. Now imagine sitting across from someone who already knows that story and notices when something has changed. That difference is what a long-term relationship with a provider offers, and it shapes your health in ways that are easy to overlook.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">What a long-term provider relationship really means</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          In primary care, this is often called continuity of care. It simply means seeing the same clinician, or a small consistent team, over months and years rather than starting fresh with each visit. Your provider becomes the person who understands your baseline: your usual blood pressure, your typical energy, your stress level, your goals. When something shifts, they are more likely to recognize it early.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Who benefits most</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Everyone benefits, but the effect is especially strong for people managing chronic conditions such as diabetes, high blood pressure or heart disease, for adults taking several medications, and for anyone navigating care across multiple specialists. Healthy adults benefit too. Preventive screening works best when someone is tracking your history and reminding you what is due.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">What the research suggests</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Studies of primary care have repeatedly linked continuity with better outcomes. Patients who see the same clinician over time tend to receive more of their recommended preventive care, are more satisfied with their care, and are less likely to use emergency departments or be hospitalized for conditions that can be managed in the outpatient setting. Several large analyses have also associated higher continuity with lower mortality. These studies show association rather than proof of cause, but the pattern is consistent across many health systems.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant]">
          Your provider becomes the person who understands your baseline: your usual blood pressure, your typical energy, your stress level, your goals.
        </div>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why trust makes care better</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Good medicine depends on accurate information. People are far more likely to mention a embarrassing symptom, admit they stopped a medication, or ask a frightening question when they trust the person in the room. Trust also makes shared decision-making possible. Instead of being handed a plan, you and your provider weigh options together, considering your values, your schedule and your concerns about side effects or cost.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Time matters here as well. Relationships grow when visits feel unhurried and when it is easy to follow up between appointments. Telehealth and video visits can help with this, making check-ins and medication management simpler when an in-person trip is not necessary.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical ways to strengthen the relationship</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          A strong partnership is built by both sides. Small habits on your end make a real difference:
        </p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">When the fit is not right</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Sometimes a relationship does not click, and that is okay. If you feel dismissed, rushed or unable to speak openly, say so first; many concerns can be resolved with a direct conversation. If they cannot, it is reasonable to look for a provider whose communication style suits you. The goal is a partnership in which you feel heard and informed.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the first step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Opal Medical Group in Hagerstown, MD is currently accepting new patients. Our providers include Yi Vance, CRNP, Dr. Farid Murshed, MD, and Dr. M. Khalid Waseem, MD, CMD. Whether you need a preventive exam, help managing a long-term condition or simply a place to start, call (240) 420-2666 or reach out through our contact page to begin a relationship built for the long run.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
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
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 transition hover:shadow-lg">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <h4 className="font-[Cormorant] text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}