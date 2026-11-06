import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Minor Injuries: Home Care or Office Visit?',
  description: 'Learn which minor injuries can be treated at home, which warning signs call for an office visit, and how to decide with confidence.',
  alternates: { canonical: '/blog/minor-injuries-home-care-or-office-visit' },
  openGraph: {
    title: 'Minor Injuries: Home Care or Office Visit?',
    description: 'Learn which minor injuries can be treated at home, which warning signs call for an office visit, and how to decide with confidence.',
    url: 'https://opalmedicalgroup.com/blog/minor-injuries-home-care-or-office-visit',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minor Injuries: Home Care or Office Visit?',
    description: 'Learn which minor injuries can be treated at home, which warning signs call for an office visit, and how to decide with confidence.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const h2 = 'font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4'
const p = 'text-[var(--color-ink)] leading-loose text-base mb-4'

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-minor-injuries-home-care-or-office-visit.jpg" alt="A close-up view of an adult applying a band aid to a child's wounded knee outdoors during the day.">
        <div>
          <nav className="text-sm text-white/80 mb-6">
            <a href="/" className="hover:underline">Home</a> › <a href="/blog" className="hover:underline">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Minor Injuries: Home Care or Office Visit?</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className={p}>It happens in a second: a slip on the stairs, a kitchen knife that goes a little too deep, a twisted ankle on an uneven sidewalk. Then comes the worry. Can I handle this myself, or should someone take a look? Many people either rush in for something that would have healed on its own or wait too long on an injury that needed attention. This guide offers a practical way to think it through.</p>

        <h2 className={h2}>What Counts as a Minor Injury?</h2>
        <p className={p}>Minor injuries are those that cause limited pain, do not impair major body functions, and are not life-threatening. Common examples include small cuts and scrapes, bruises, mild sprains and strains, minor burns, insect stings, and jammed fingers. They affect everyone, from children at play to adults doing yard work and older adults who may be more prone to falls.</p>

        <h2 className={h2}>Injuries You Can Often Manage at Home</h2>
        <p className={p}>Many everyday injuries heal well with simple self-care. Basic first aid is supported by widely accepted guidance from groups such as the American Academy of Family Physicians and the Red Cross.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Small cuts and scrapes:</strong> Wash your hands, rinse the wound with clean running water, apply gentle pressure to stop bleeding, and cover with a clean bandage.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Mild sprains and strains:</strong> Rest, ice for 15 to 20 minutes at a time, light compression, and elevation can ease swelling.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Bruises:</strong> Cold packs in the first day, then time. Most fade over one to two weeks.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Minor burns:</strong> Cool running water for several minutes, then a loose clean covering. Avoid butter, oils, or ice.</span></li>
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Most minor injuries improve steadily over several days, and a lack of improvement is itself useful information.
        </div>

        <h2 className={h2}>Signs It Is Time for an Office Visit</h2>
        <p className={p}>Home care works only while the injury behaves the way a minor one should. Contact a clinician if you notice any of the following:</p>
        <ul className="space-y-3 mb-6">
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>A cut that is deep, gaping, or will not stay closed, which may need stitches or adhesive closure.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>Redness spreading from a wound, warmth, swelling, pus, or fever, all possible signs of infection.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>Difficulty putting weight on a limb, a joint that looks misshapen, or pain that is severe or worsening.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>Numbness, tingling, or trouble moving a finger or toe.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>An injury that is not improving after several days.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>A wound from an animal bite, a rusty or dirty object, or when your tetanus vaccine may be out of date.</span></li>
        </ul>

        <h2 className={h2}>When to Skip the Office and Seek Emergency Care</h2>
        <p className={p}>Some situations are not appropriate for a routine visit. Call 911 or go to the nearest emergency department for bleeding that will not stop after 10 minutes of firm pressure, a suspected broken bone with visible deformity, a head injury with confusion, vomiting, or loss of consciousness, large or facial burns, chest pain, or trouble breathing.</p>

        <h2 className={h2}>Why Timing Matters</h2>
        <p className={p}>Early evaluation can prevent small problems from becoming larger ones. Wounds that need closure are best treated promptly, and infections are easier to treat when caught early. Sprains that are actually small fractures can heal poorly if ignored. At the same time, not every bump needs a visit, and knowing the difference saves worry, time, and unnecessary cost.</p>

        <h2 className={h2}>Practical Tips for Everyday Injuries</h2>
        <ul className="space-y-3 mb-6">
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>Keep a stocked first aid kit at home and in the car.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>Take a photo of a wound each day so you can track whether it is improving.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>Know when you last had a tetanus booster. Adults generally need one every ten years.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>Use over-the-counter pain relievers only as directed, and ask first if you take other medicines or have kidney, liver, or stomach concerns.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>Be extra cautious if you have diabetes or circulation problems, since even small wounds can heal slowly.</span></li>
        </ul>

        <h2 className={h2}>Getting Guidance When You Are Unsure</h2>
        <p className={p}>If you are on the fence, a quick conversation can settle the question. Opal Medical Group in Hagerstown, MD offers primary care along with telehealth visits, which can be a convenient way to have a clinician look at a rash, a minor wound, or a swollen joint and advise on next steps. We are also currently welcoming new patients.</p>
        <p className={p}>Call us at (240) 420-2666 or visit us at 1126 Opal Ct, Hagerstown, MD 21740. If an injury is worrying you, do not wait and wonder. We would rather help you early than see a small problem grow.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
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

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/blog" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 transition hover:shadow-lg">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)]">All Health Articles</h4>
              <p className="text-sm text-[var(--color-muted)] mt-2">Browse more patient education from our blog.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 transition hover:shadow-lg">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)]">Our Services</h4>
              <p className="text-sm text-[var(--color-muted)] mt-2">See the primary care services we offer in Hagerstown.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 transition hover:shadow-lg">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97c.363-.272.527-.734.417-1.173L6.963 3.102A1.125 1.125 0 005.872 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)]">Contact Us</h4>
              <p className="text-sm text-[var(--color-muted)] mt-2">Call or reach out to schedule a visit or telehealth appointment.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition text-white px-8 py-3 rounded-full font-medium">Contact Us</a>
        </div>
      </section>
    </main>
  )
}