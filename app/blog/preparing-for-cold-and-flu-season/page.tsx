import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Preparing for Cold and Flu Season | Opal Medical Group',
  description: 'Practical, evidence-based steps to prepare for cold and flu season: vaccination, hygiene, sleep, when to seek care, and how to recover well at home.',
  alternates: { canonical: '/blog/preparing-for-cold-and-flu-season' },
  openGraph: {
    title: 'Preparing for Cold and Flu Season | Opal Medical Group',
    description: 'Practical, evidence-based steps to prepare for cold and flu season: vaccination, hygiene, sleep, when to seek care, and how to recover well at home.',
    url: 'https://opalmedicalgroup.com/blog/preparing-for-cold-and-flu-season',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preparing for Cold and Flu Season | Opal Medical Group',
    description: 'Practical, evidence-based steps to prepare for cold and flu season: vaccination, hygiene, sleep, when to seek care, and how to recover well at home.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const tips = [
  'Get an annual flu vaccine, ideally in early autumn',
  'Wash hands with soap and water for at least 20 seconds',
  'Keep up with sleep, hydration, movement and balanced meals',
  'Stay home when you are sick to protect others',
  'Stock your home with a thermometer, fluids, tissues and basic remedies',
]

const related = [
  { href: '/blog', label: 'Blog', title: 'More Patient Resources', text: 'Browse all of our articles on staying healthy.' },
  { href: '/services', label: 'Services', title: 'Our Primary Care Services', text: 'See how we support you through the year.' },
  { href: '/contact', label: 'Contact', title: 'Schedule a Visit', text: 'Talk with our team about prevention and care.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-preparing-for-cold-and-flu-season.jpg" alt="Close-up of medication and thermometer on a bed beside a plush rabbit toy, symbolizing childhood illness care.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white">Home</a> › <a href="/blog" className="hover:text-white">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Preparing for Cold and Flu Season</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Few things disrupt a family's routine like a household full of coughs, fevers and sleepless nights. One person catches a virus at school or work, and within days everyone is run down. The good news is that a little preparation before the season peaks can make illness less likely, milder when it comes, and easier to recover from.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Colds and Flu: What Is the Difference?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Both colds and influenza are respiratory illnesses caused by viruses, and they share symptoms such as cough, sore throat and congestion. Colds tend to come on gradually and are usually milder, with a runny or stuffy nose as the main complaint. Influenza more often arrives suddenly with fever, chills, body aches, headache and marked fatigue. Flu can also lead to complications such as pneumonia, especially in vulnerable people.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Most at Risk?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Anyone can get sick, but some people are more likely to develop serious illness. This includes adults 65 and older, young children, pregnant women, and people living with conditions such as asthma, COPD, diabetes, heart disease or a weakened immune system. If you are in one of these groups, or you live with or care for someone who is, prevention deserves extra attention.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Says About Prevention</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Annual vaccination is the single most effective step against influenza. Public health agencies such as the CDC recommend a yearly flu vaccine for nearly everyone six months and older. The vaccine does not always prevent infection, but studies consistently show it reduces the risk of illness, hospitalization and severe outcomes. Because circulating strains change, the vaccine is updated each year, which is why a fresh dose is needed each season.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-6">
          Hand hygiene also has solid research behind it. Washing with soap and water removes viruses from the skin and reduces the spread of respiratory illness. When soap is not available, an alcohol-based sanitizer is a reasonable alternative. Avoiding touching your eyes, nose and mouth, and cleaning frequently touched surfaces, adds further protection.
        </p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Annual vaccination is the single most effective step against influenza.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps to Take Now</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Preparation does not need to be complicated. These habits add up:
        </p>
        <ul className="space-y-4 animate-fade-up">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <Check />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-6">
          Good sleep supports immune function, and regular activity and a varied diet help your body stay resilient. Managing stress matters too, since ongoing strain can make it harder to stay well. If you have a chronic condition, make sure it is well controlled and that your medications are refilled before the busy season begins.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Caring for Yourself When You Do Get Sick</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Most colds and many cases of flu can be managed at home. Rest, drink plenty of fluids, and use over-the-counter remedies as directed to ease fever, aches and congestion. Antibiotics do not work against viruses, so they will not help a cold or flu. For influenza, prescription antiviral medicines can shorten illness and reduce complications, but they work best when started within the first two days, so early contact with a clinician matters, particularly for higher-risk patients.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Medical Care</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Reach out to a clinician if symptoms are severe, if you are in a higher-risk group, or if you start to improve and then get worse. Seek urgent care for trouble breathing, chest pain, confusion, persistent vomiting, a very high or lasting fever, or signs of dehydration. In an emergency, call 911. For milder concerns, a telehealth visit can be a convenient way to talk through symptoms and next steps without leaving home.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Let Us Help You Stay Well</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you have questions about vaccination, managing a chronic condition through the winter, or what to do about symptoms you have now, our team in Hagerstown is here to help. Call us at (240) 420-2666 or visit us at 1126 Opal Ct, Hagerstown, MD 21740 to talk about a plan that fits you and your family.
        </p>
      </article>

      <section className="bg-white">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-dark)]">
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
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</p>
                <p className="text-[var(--color-muted)] text-sm">{r.text}</p>
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