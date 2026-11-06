import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Seasonal Allergies: Relief Strategies',
  description: 'Practical, evidence-based ways to ease seasonal allergy symptoms, from reducing exposure to choosing treatments, and when to see a primary care provider.',
  alternates: { canonical: '/blog/seasonal-allergies-relief-strategies' },
  openGraph: {
    title: 'Seasonal Allergies: Relief Strategies',
    description: 'Practical, evidence-based ways to ease seasonal allergy symptoms, from reducing exposure to choosing treatments, and when to see a primary care provider.',
    url: 'https://opalmedicalgroup.com/blog/seasonal-allergies-relief-strategies',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seasonal Allergies: Relief Strategies',
    description: 'Practical, evidence-based ways to ease seasonal allergy symptoms, from reducing exposure to choosing treatments, and when to see a primary care provider.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const tips = [
  'Check daily pollen counts and plan outdoor time for later in the day, when levels are often lower.',
  'Keep windows closed at home and in the car during high-pollen days, and use air conditioning with a clean filter.',
  'Shower and change clothes after time outdoors so pollen is not carried to your bed.',
  'Wash bedding weekly in hot water and consider allergen-proof pillow covers.',
  'Wear wraparound sunglasses outdoors to keep pollen away from your eyes.',
  'Rinse your nasal passages with saline made from distilled or boiled-and-cooled water.',
]

const related = [
  { href: '/blog', label: 'All Resources', title: 'Browse more patient education articles' },
  { href: '/services', label: 'Our Services', title: 'Primary care services at Opal Medical Group' },
  { href: '/contact', label: 'Contact', title: 'Schedule a visit with our team' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-seasonal-allergies-relief-strategies.jpg" alt="A young woman with closed eyes sneezing into a tissue, sitting indoors.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white">Home</a> › <a href="/blog" className="hover:text-white">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Seasonal Allergies: Relief Strategies</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 animate-fade-up">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You step outside on a beautiful day and within minutes your eyes itch, your nose runs and your head feels heavy. For millions of people, the seasons that others look forward to bring weeks of sneezing, fatigue and poor sleep. Seasonal allergies are common, but they do not have to dictate how you live. With the right strategies, most people can find real relief.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Are Seasonal Allergies?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Seasonal allergic rhinitis, often called hay fever, happens when your immune system overreacts to airborne particles such as tree pollen in spring, grass pollen in summer, and ragweed or mold spores in late summer and fall. Your body releases histamine and other chemicals, which cause inflammation in the nose, eyes, throat and sinuses.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Common symptoms include sneezing, nasal congestion, a runny nose, itchy or watery eyes, postnasal drip and an itchy throat. Unlike a cold, allergies do not cause fever, and symptoms usually last as long as you are exposed to the trigger, often for weeks.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected and Why It Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Seasonal allergies can begin at any age, and they are more common in people with a family history of allergies, asthma or eczema. They are more than a nuisance. Poor sleep, trouble concentrating and missed work or school are common, and uncontrolled nasal inflammation can worsen asthma, contribute to sinus infections and affect overall quality of life.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Reduce Your Exposure</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Research consistently shows that avoiding triggers is the foundation of allergy control. You cannot eliminate pollen, but you can lower how much reaches you.
        </p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <Check />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Research consistently shows that avoiding triggers is the foundation of allergy control.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Treatment Options That Work</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Clinical guidelines generally favor intranasal corticosteroid sprays as the most effective single option for nasal symptoms. They work best when used daily, and starting one to two weeks before your season begins can improve results. Oral second-generation antihistamines can relieve sneezing, itching and runny nose with less drowsiness than older versions. Antihistamine eye drops may help with itchy eyes.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Decongestants can help short term, but oral versions may raise blood pressure and heart rate, and nasal decongestant sprays can cause rebound congestion if used longer than a few days. Check with a clinician if you have high blood pressure, heart disease or other conditions, or if you take other medications.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Longer-Term Approaches</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If over-the-counter options are not enough, allergy testing can identify your specific triggers. Immunotherapy, given as allergy shots or under-the-tongue tablets for certain allergens, gradually builds tolerance and can reduce symptoms for years. These treatments are typically managed with an allergy specialist, and your primary care provider can help you decide whether a referral makes sense.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Reach out to a clinician if symptoms interfere with sleep or daily activities, if medicines are not helping, or if you notice wheezing, chest tightness or shortness of breath. Facial pain, thick discolored mucus or fever may point to a sinus infection rather than allergies. Seek emergency care for trouble breathing or swelling of the face or throat.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          At Opal Medical Group in Hagerstown, MD, our primary care team can help you build a plan for your allergy season, review your medications and offer telehealth visits for medication management. We are currently accepting new patients. Call (240) 420-2666 to get started.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
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
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">{r.label}</p>
                <p className="font-cormorant text-2xl text-[var(--color-ink)]">{r.title}</p>
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