import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Staying Healthy as a Caregiver | Opal Medical Group',
  description: 'Caring for a loved one can strain your own health. Learn practical, evidence-based ways caregivers can protect their sleep, mood, body and checkups.',
  alternates: { canonical: '/blog/staying-healthy-as-a-caregiver' },
  openGraph: {
    title: 'Staying Healthy as a Caregiver | Opal Medical Group',
    description: 'Caring for a loved one can strain your own health. Learn practical, evidence-based ways caregivers can protect their sleep, mood, body and checkups.',
    url: 'https://opalmedicalgroup.com/blog/staying-healthy-as-a-caregiver',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Staying Healthy as a Caregiver | Opal Medical Group',
    description: 'Caring for a loved one can strain your own health. Learn practical, evidence-based ways caregivers can protect their sleep, mood, body and checkups.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const Check = () => (
  <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const tips = [
  'Keep your own checkups, screenings and vaccinations on the calendar.',
  'Protect sleep with a steady schedule, even if nights are interrupted.',
  'Move your body for a few minutes at a time, every day.',
  'Accept specific offers of help and ask for it by name.',
  'Tell a clinician early if you feel hopeless, anxious or constantly worn out.',
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-staying-healthy-as-a-caregiver.jpg" alt="A family assists in measuring blood pressure at home, promoting healthcare awareness.">
        <div>
          <p className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </p>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Staying Healthy as a Caregiver</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">You know every medication, every appointment time and every small change in the person you love. But when did you last schedule your own checkup? Caregivers often put themselves last, and slowly their health pays the price. Looking after yourself is not selfish. It is what makes it possible to keep caring for someone else.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is a Caregiver?</h2>
        <p>A caregiver is anyone who regularly helps a family member, partner or friend who cannot fully manage on their own. That might mean assisting a parent with dementia, supporting a spouse after a stroke, or coordinating care for a child with a chronic illness. Many people do this while working and raising a family, and many never think of themselves as caregivers at all. They simply see it as what you do for someone you love.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Caregiver Health Matters</h2>
        <p>Caregiving is rewarding, but it can be demanding physically and emotionally. Research on family caregivers has repeatedly linked long-term, high-intensity caregiving with higher rates of depression and anxiety, poorer sleep, and more difficulty keeping up with preventive care. Chronic stress raises stress hormones, which over time can contribute to high blood pressure, weakened immune response and fatigue.</p>
        <p className="mt-4">There is also a practical side. If your own health declines, the person who depends on you is affected too. Staying well is part of the care plan.</p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Looking after yourself is not selfish.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Recognizing Caregiver Burnout</h2>
        <p>Burnout builds gradually. Common signs include:</p>
        <ul className="mt-4 space-y-2 list-disc pl-6">
          <li>Exhaustion that rest does not seem to fix</li>
          <li>Irritability, sadness or feeling emotionally numb</li>
          <li>Withdrawing from friends and activities you once enjoyed</li>
          <li>Changes in appetite or weight</li>
          <li>Frequent headaches, aches or getting sick more often</li>
          <li>Feeling resentful, then guilty about feeling resentful</li>
        </ul>
        <p className="mt-4">These feelings are common and do not mean you are failing. They are a signal that your needs deserve attention.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Protect Your Health</h2>
        <p className="mb-4">You do not need a total life overhaul. Small, repeatable habits help most.</p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Sleep, Food and Movement</h2>
        <p>Adults generally need seven or more hours of sleep. If nights are broken, short naps and a consistent wind-down routine can help. Aim for regular meals with vegetables, protein and whole grains rather than relying on whatever is quickest. For activity, current guidelines suggest about 150 minutes of moderate exercise weekly, but even ten-minute walks count and add up.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Build Your Support System</h2>
        <p>Isolation is one of the hardest parts of caregiving. Share the load where you can: ask relatives to take specific tasks, look into respite care or adult day programs in your community, and consider a caregiver support group. Talking with others who understand can ease guilt and offer practical ideas. If your mood stays low or worry feels constant, counseling and medical treatment are effective and worth pursuing.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Talk With a Clinician</h2>
        <p>Make an appointment if you notice persistent sadness, trouble sleeping for weeks, new physical symptoms, or if you have postponed your own care. Preventive exams, blood pressure checks and medication reviews are easy to skip when you are busy, yet they catch problems early.</p>
        <p className="mt-4">Opal Medical Group in Hagerstown, MD offers primary care, preventive and annual health exams, and telehealth visits, which can be helpful when leaving the house is difficult. The practice is currently accepting new patients. Call (240) 420-2666 to talk about your own health, because you matter in this story too.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
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
          <h3 className="font-cormorant text-3xl mb-8">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/blog" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Resources Hub</h4>
              <p className="text-[var(--color-muted)] text-sm">Browse all patient education articles.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Our Services</h4>
              <p className="text-[var(--color-muted)] text-sm">See the primary care services we offer.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Contact Us</h4>
              <p className="text-[var(--color-muted)] text-sm">Reach out to schedule a visit.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}