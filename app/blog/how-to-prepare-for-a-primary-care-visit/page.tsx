import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'How to Prepare for a Primary Care Visit',
  description: 'Simple steps to prepare for a primary care visit: gather your history, list questions, bring medications, and make the most of your time with your provider.',
  alternates: { canonical: '/blog/how-to-prepare-for-a-primary-care-visit' },
  openGraph: {
    title: 'How to Prepare for a Primary Care Visit',
    description: 'Simple steps to prepare for a primary care visit: gather your history, list questions, bring medications, and make the most of your time with your provider.',
    url: 'https://opalmedicalgroup.com/blog/how-to-prepare-for-a-primary-care-visit',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Prepare for a Primary Care Visit',
    description: 'Simple steps to prepare for a primary care visit: gather your history, list questions, bring medications, and make the most of your time with your provider.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const Tips = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 my-6">
    {items.map((t) => (
      <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
        {check}
        <span>{t}</span>
      </li>
    ))}
  </ul>
)

const related = [
  { href: '/blog', label: 'Resources', title: 'More Patient Education Articles', text: 'Browse guides on staying healthy and getting the most from your care.' },
  { href: '/services', label: 'Services', title: 'Our Primary Care Services', text: 'See the care we offer, from preventive exams to ongoing management.' },
  { href: '/contact', label: 'Contact', title: 'Request an Appointment', text: 'Reach out to schedule a visit or ask a question.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-how-to-prepare-for-a-primary-care-visit.jpg" alt="Two female doctors in masks assist a child in a bright medical room.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">How to Prepare for a Primary Care Visit</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You finally get an appointment, and then the visit seems to fly by. You walk out to the parking lot and remember the one question you meant to ask. If that sounds familiar, you are far from alone. A little preparation turns a rushed appointment into a conversation that actually moves your health forward.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Preparation Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Primary care is built on relationship and context. Your provider is looking at the whole picture: your symptoms, history, medications, habits, and goals. Research on patient-clinician communication consistently shows that when patients come with clear priorities and share complete information, they tend to understand their care plans better and feel more involved in decisions. Visits are limited in time, so organized information helps every minute count.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Benefits From Preparing</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Everyone does. Someone coming in for a yearly physical benefits from reviewing screenings and vaccines. Someone managing blood pressure, diabetes, or thyroid concerns benefits from bringing recent readings. A new patient benefits most of all, because your provider is learning your story from the beginning.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Gather Your Health Information</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Before your appointment, collect the basics. Having them on one page saves time and reduces the chance of something important being missed.
        </p>
        <Tips items={[
          'A list of every medication, including doses, plus vitamins, supplements, and over-the-counter products.',
          'Your personal medical history: past diagnoses, surgeries, hospital stays, and allergies.',
          'Family history of conditions such as heart disease, cancer, diabetes, or stroke.',
          'Records from other providers or recent lab and imaging results, if you have them.',
          'Home readings, such as blood pressure or blood sugar logs.',
          'Your insurance card and a photo ID, if applicable.',
        ]} />

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Write Down Your Concerns and Questions</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Make a short list and put the most important item first. If you have several concerns, tell your provider at the start of the visit so the time can be planned well. For symptoms, note when they began, how often they happen, what makes them better or worse, and how they affect daily life. Specific details help far more than general descriptions.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Specific details help far more than general descriptions.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Be Honest, Even About Hard Topics</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Sleep, stress, alcohol, tobacco, mood, diet, and intimate health are all part of primary care. Your provider is there to help, not to judge. If you have not been taking a medication as prescribed, say so; there is usually a reason, such as side effects or cost, and a different plan may be possible. Honest information leads to safer, more useful advice.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Tips for the Day</h2>
        <Tips items={[
          'Arrive a few minutes early so you are not rushed or stressed.',
          'Wear comfortable clothing that is easy to adjust for an exam.',
          'Bring a trusted friend or family member if it helps you remember details.',
          'Take notes, or ask for a written summary of the plan.',
          'Ask about next steps: tests, follow-up timing, and when to call with concerns.',
          'Repeat back the plan in your own words to confirm you understood it.',
        ]} />

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Preparing for a Telehealth Visit</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you meet by video, test your device and connection ahead of time, choose a quiet, well-lit space, and keep your medication bottles and any home readings within reach. Have a pharmacy name ready and write down your questions just as you would for an in-person visit.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Good care is a partnership, and you do not need to have everything perfectly organized to start. Opal Medical Group in Hagerstown, MD is currently accepting new patients. Call (240) 420-2666 or visit us at 1126 Opal Ct to schedule your appointment, and bring your questions with you.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-2xl text-[var(--color-ink)]">From Opal Medical Group</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
              <p className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</p>
              <p className="text-[var(--color-muted)] text-sm">{r.text}</p>
            </a>
          ))}
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