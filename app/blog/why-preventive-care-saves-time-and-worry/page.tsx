import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Why Preventive Care Saves Time and Worry',
  description: 'Learn how regular preventive care and annual exams help catch problems early, reduce stress, and save time. Primary care in Hagerstown, MD.',
  alternates: { canonical: '/blog/why-preventive-care-saves-time-and-worry' },
  openGraph: {
    title: 'Why Preventive Care Saves Time and Worry',
    description: 'Learn how regular preventive care and annual exams help catch problems early, reduce stress, and save time. Primary care in Hagerstown, MD.',
    url: 'https://opalmedicalgroup.com/blog/why-preventive-care-saves-time-and-worry',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Preventive Care Saves Time and Worry',
    description: 'Learn how regular preventive care and annual exams help catch problems early, reduce stress, and save time. Primary care in Hagerstown, MD.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const tips = [
  'Schedule a yearly physical, even when you feel well',
  'Keep a running list of your medications and supplements',
  'Know your family health history and share it with your clinician',
  'Ask which screenings are right for your age and risk factors',
  'Write down questions before each visit so nothing gets missed',
  'Use telehealth for follow-ups and medication check-ins when appropriate',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'Browse All Patient Resources', text: 'Explore more articles on staying healthy and getting the most from your care.' },
  { href: '/services', label: 'Services', title: 'Our Primary Care Services', text: 'See the preventive, annual exam and telehealth services we offer.' },
  { href: '/contact', label: 'Contact', title: 'Book a Visit', text: 'Reach out to schedule an appointment or ask about becoming a new patient.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-why-preventive-care-saves-time-and-worry.jpg" alt="Doctors and nurses working together in a hospital, focused on patient care.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Why Preventive Care Saves Time and Worry</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Most of us know the feeling: a small ache that lingers, a number on a lab report we do not understand, or a vague sense that something is off. The worry can follow us through the day and keep us up at night. Often, the hardest part is not the answer itself but the waiting and wondering. Preventive care exists to shorten that wait, and in many cases to spare you from it altogether.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Preventive Care Really Means</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Preventive care is the set of routine steps that help you stay healthy or catch problems while they are still small. It includes annual health exams, age-appropriate screenings, vaccinations, blood pressure and cholesterol checks, and honest conversations about sleep, nutrition, stress and activity. It is not about finding something wrong. It is about knowing where you stand so that you and your clinician can make good decisions together.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Benefits From It</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Everyone. Young adults benefit from establishing a baseline and staying current on vaccines. Adults in midlife benefit from screening for conditions such as high blood pressure, type 2 diabetes, high cholesterol and certain cancers. Older adults benefit from fall-risk reviews, medication checks and attention to memory and mobility. People already managing a chronic condition benefit most of all, because steady monitoring keeps small changes from becoming emergencies.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How It Saves You Time</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Catching a problem early usually means a simpler plan. Elevated blood pressure found at a routine visit can often be managed with lifestyle changes and, if needed, a single medication. Left unnoticed, the same condition may eventually lead to specialist visits, hospital stays and weeks of recovery. Preventive visits also reduce the scramble of urgent appointments, because a clinician who already knows your history can answer questions faster and with more context.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Preventive care is not about finding something wrong; it is about knowing where you stand.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How It Eases Worry</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Uncertainty is stressful. A normal result gives real reassurance, while an early finding gives you a head start and a plan. Either way, you replace guessing with information. Having a clinician who knows you also makes it easier to call when something feels different, rather than talking yourself out of it or searching the internet at midnight.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Shows</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Large public health bodies, including the U.S. Preventive Services Task Force and the Centers for Disease Control and Prevention, recommend routine screenings and vaccinations because evidence shows they reduce illness and death from conditions like heart disease, colorectal cancer, cervical cancer and infectious disease. Studies also consistently link a stable relationship with a primary care clinician to better management of chronic conditions and higher use of recommended screenings. Which tests are right for you depends on your age, history and risks, so it is worth discussing rather than assuming.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Get Started</h2>
        <ul className="space-y-3 my-6">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the First Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If it has been a while since your last check-up, there is no need for guilt, only a good moment to begin. At Opal Medical Group in Hagerstown, MD, we offer preventive and annual health exams as well as telehealth and medication management, and we are currently accepting new patients. Call (240) 420-2666 or reach out online to schedule a visit. A little time now can spare you a great deal of worry later.
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

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.text}</p>
              </a>
            ))}
          </div>
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