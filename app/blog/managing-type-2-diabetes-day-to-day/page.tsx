import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Managing Type 2 Diabetes Day to Day | Opal Medical Group',
  description: 'Practical, evidence-based daily habits for living well with type 2 diabetes: food, movement, glucose monitoring, medications, and when to call your care team.',
  alternates: { canonical: '/blog/managing-type-2-diabetes-day-to-day' },
  openGraph: {
    title: 'Managing Type 2 Diabetes Day to Day | Opal Medical Group',
    description: 'Practical, evidence-based daily habits for living well with type 2 diabetes: food, movement, glucose monitoring, medications, and when to call your care team.',
    url: 'https://opalmedicalgroup.com/blog/managing-type-2-diabetes-day-to-day',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managing Type 2 Diabetes Day to Day | Opal Medical Group',
    description: 'Practical, evidence-based daily habits for living well with type 2 diabetes: food, movement, glucose monitoring, medications, and when to call your care team.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const Check = () => (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const tips = [
  'Build plates around non-starchy vegetables, lean protein, and high-fiber carbohydrates.',
  'Choose water or unsweetened drinks over juice and regular soda.',
  'Eat at regular times so your glucose stays steadier through the day.',
  'Read labels for total carbohydrate, not just sugar.',
]

const habits = [
  'Take medications as prescribed, and tell us if cost or side effects get in the way.',
  'Check your feet every day for sores, blisters, or color changes.',
  'Move for at least 150 minutes per week, in sessions that fit your life.',
  'Keep a simple log of glucose readings, meals, and questions for your visits.',
  'Keep up with eye exams, kidney tests, and your A1C schedule.',
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
          <h1 className="font-[Cormorant,serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Managing Type 2 Diabetes Day to Day</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-managing-type-2-diabetes-day-to-day.jpg"} alt={"Top view of diabetes management tools including glucose meter and insulin syringes on purple background."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A diabetes diagnosis can feel like a heavy new job you never applied for. Suddenly there are numbers to track, foods to rethink, and appointments to keep. It is normal to feel overwhelmed. The encouraging truth is that type 2 diabetes responds well to steady, everyday choices, and small changes add up to real protection for your heart, nerves, eyes, and kidneys.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What type 2 diabetes is</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          In type 2 diabetes, the body does not use insulin effectively, and over time it may not make enough. Insulin moves sugar from the blood into cells for energy. When it falls short, glucose builds up in the bloodstream. Many people have no symptoms early on, while others notice increased thirst, frequent urination, fatigue, blurry vision, or slow-healing wounds.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Who it affects and why it matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Type 2 diabetes is most common in adults, and risk rises with age, excess weight, family history, inactivity, a history of gestational diabetes, and prediabetes. Over years, high blood sugar can damage blood vessels and nerves. That raises the risk of heart disease, stroke, kidney disease, vision loss, and foot problems. Good daily management lowers those risks substantially.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What the research tells us</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Large studies, including the Diabetes Prevention Program and the Look AHEAD trial, show that lifestyle changes can improve glucose control, and in some people lead to remission or delay progression. Losing even 5 to 7 percent of body weight can improve insulin sensitivity. Long-term research also shows that keeping blood sugar, blood pressure, and cholesterol in target ranges reduces complications. Many adults aim for an A1C under 7 percent, though the right goal is individual and should be set with your clinician.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant,serif]">
          Small changes add up to real protection for your heart, nerves, eyes, and kidneys.
        </div>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Eating in a way you can sustain</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          There is no single diabetes diet. Mediterranean-style, lower-carbohydrate, and plate-method approaches can all work. The best plan is one you enjoy enough to keep. Consider these starting points:
        </p>
        <ul className="space-y-3 mb-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base"><Check />{t}</li>
          ))}
        </ul>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Movement, sleep, and stress</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Muscles pull sugar from the blood during activity, so even a 10-minute walk after meals can lower glucose. Strength training twice a week adds benefit. Poor sleep and chronic stress raise hormones that push blood sugar up, so protecting seven or more hours of sleep and finding stress outlets, like walking, breathing exercises, or time with friends, is part of treatment, not an extra.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Monitoring and medication</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Some people check glucose with a fingerstick meter, others use a continuous glucose monitor. Your clinician can advise how often to test based on your medications and goals. Several medication classes are available, including metformin and newer options that also support heart and kidney health. If a medication causes side effects or is hard to afford, say so. There are often alternatives.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">A daily checklist</h2>
        <ul className="space-y-3 mb-4">
          {habits.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base"><Check />{t}</li>
          ))}
        </ul>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">When to call for help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Contact your care team if readings stay above your target, you have frequent lows (shaky, sweaty, confused), or you notice a foot wound that is not healing. Seek emergency care for severe confusion, trouble breathing, persistent vomiting, or chest pain.
        </p>

        <p className="text-[var(--color-ink)] leading-loose text-base mt-8">
          You do not have to manage diabetes alone. Opal Medical Group in Hagerstown, MD is currently accepting new patients, and telehealth visits are available for medication management and follow-up. Call us at (240) 420-2666 or reach out online to build a plan that fits your life.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-ink)]">From Opal Medical Group</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[Cormorant,serif] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/blog" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
              <h4 className="font-semibold text-[var(--color-ink)]">Resources Hub</h4>
              <p className="text-sm text-[var(--color-muted)] mt-2">Browse all patient education articles.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
              <h4 className="font-semibold text-[var(--color-ink)]">Our Services</h4>
              <p className="text-sm text-[var(--color-muted)] mt-2">See the primary care services we offer.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97c.363-.272.527-.734.417-1.173L6.963 3.102A1.125 1.125 0 005.872 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              <h4 className="font-semibold text-[var(--color-ink)]">Contact Us</h4>
              <p className="text-sm text-[var(--color-muted)] mt-2">Become a new patient or ask a question.</p>
            </a>
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