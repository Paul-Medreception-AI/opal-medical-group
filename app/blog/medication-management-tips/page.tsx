import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medication Management Tips | Opal Medical Group',
  description: 'Practical medication management tips to help you take medicines safely, avoid errors, and talk with your primary care team in Hagerstown, MD.',
  alternates: { canonical: '/blog/medication-management-tips' },
  openGraph: {
    title: 'Medication Management Tips | Opal Medical Group',
    description: 'Practical medication management tips to help you take medicines safely, avoid errors, and talk with your primary care team in Hagerstown, MD.',
    url: 'https://opalmedicalgroup.com/blog/medication-management-tips',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medication Management Tips | Opal Medical Group',
    description: 'Practical medication management tips to help you take medicines safely, avoid errors, and talk with your primary care team in Hagerstown, MD.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const tips = [
  'Keep one up-to-date list of every prescription, over-the-counter product, vitamin and supplement you take.',
  'Use a weekly pill organizer or phone alarms to tie doses to daily routines.',
  'Store medicines as the label directs, away from heat, moisture and children.',
  'Use one pharmacy when possible so interactions can be flagged.',
  'Never stop or change a dose without talking to your clinician first.',
]

const questions = [
  'What is this medicine for, and how will we know it is working?',
  'When and how should I take it, with or without food?',
  'What side effects should I watch for, and when should I call?',
  'Does it interact with anything else I take?',
  'How long will I need it, and when will we review it?',
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
          <h1 className="font-[Cormorant] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Medication Management Tips</h1>
          <p className="mt-6 text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-medication-management-tips.jpg"} alt={"Senior adult organizing daily medications using a weekly pill organizer on a table indoors."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          It is a familiar moment: you open the cabinet and wonder whether you already took this morning&apos;s pill. Or a new prescription arrives and you are not sure how it fits with the others. If that sounds like you, you are far from alone. Managing medicines is a real daily task, and doing it well is one of the most powerful ways to protect your health.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Medication Management?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Medication management means knowing what you take, why you take it, and how to take it correctly and consistently. It also includes regular reviews with your clinician to make sure each medicine is still needed, still working, and still safe alongside everything else you use. It covers prescriptions, over-the-counter products, vitamins, herbal supplements and anything else you swallow, inject, inhale or apply.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Anyone who takes a medicine can benefit, but the stakes rise with the number of medicines. Adults managing chronic conditions such as high blood pressure, diabetes, or heart disease often take several daily. Older adults may see more than one specialist, which makes it easier for lists to fall out of sync. Caregivers who help a parent or partner carry the same responsibility.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Public health research has long shown that many people do not take medicines exactly as prescribed. The World Health Organization has noted that only about half of people with chronic conditions take their medicines as directed in developed countries. Missed doses can let a condition worsen, while doubled doses or unrecognized interactions can cause harm. Adverse drug events are a recognized cause of preventable emergency visits, particularly among older adults.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant]">
          Keep one up-to-date list of every prescription, over-the-counter product, vitamin and supplement you take.
        </div>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Tips for Everyday Safety</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Small habits make a big difference. These strategies are widely recommended by pharmacists and patient safety groups:
        </p>
        <ul className="space-y-3 text-[var(--color-ink)] leading-loose text-base">
          {tips.map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions to Ask About Every Medicine</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Understanding a medicine makes you more likely to take it correctly. Bring these questions to your next visit or pharmacy conversation:
        </p>
        <ul className="space-y-3 text-[var(--color-ink)] leading-loose text-base">
          {questions.map((q) => (
            <li key={q} className="flex gap-3">{check}<span>{q}</span></li>
          ))}
        </ul>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Preparing for Medication Reviews</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A periodic review is a chance to simplify. Bring every bottle, or a clear photo of each label, to your appointment. Mention anything that causes side effects, costs you struggle with, or is hard to remember. Your clinician may be able to adjust timing, combine doses, or stop something no longer needed. Also tell your care team about changes made by other providers, including after hospital stays or urgent care visits.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Follow-up does not always require a trip to the office. Opal Medical Group offers telehealth visits, which can be a convenient way to talk through medication questions and follow-up.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Call Your Care Team</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Contact your clinician or pharmacist if you miss several doses, feel new symptoms after starting a medicine, or are unsure whether two products can be taken together. Call emergency services for signs of a severe allergic reaction, such as trouble breathing or swelling of the face or throat. If you cannot afford a medication, say so; there are often alternatives that can be discussed.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Get Support With Your Medications</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You do not have to sort this out alone. If you live in or near Hagerstown, MD and want help reviewing your medicines, our primary care team at 1126 Opal Ct is available at (240) 420-2666, and we are currently accepting new patients. Reach out to schedule a visit and bring your medication list.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-ink)]">From Opal Medical Group</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-[Cormorant] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/blog" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
            <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Resources</p>
            <p className="font-[Cormorant] text-2xl text-[var(--color-ink)]">Browse All Articles</p>
          </a>
          <a href="/services" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
            <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Services</p>
            <p className="font-[Cormorant] text-2xl text-[var(--color-ink)]">Our Primary Care Services</p>
          </a>
          <a href="/contact" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
            <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Contact</p>
            <p className="font-[Cormorant] text-2xl text-[var(--color-ink)]">Contact Our Office</p>
          </a>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <h2 className="font-[Cormorant] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
        <p className="mb-8 text-white/80">We are here to help.</p>
        <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
      </section>
    </main>
  )
}