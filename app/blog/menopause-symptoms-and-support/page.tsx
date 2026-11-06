import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Menopause: Symptoms and Support',
  description: 'Learn the common symptoms of menopause, what causes them, and practical ways to find relief and support with your primary care team in Hagerstown, MD.',
  alternates: { canonical: '/blog/menopause-symptoms-and-support' },
  openGraph: {
    title: 'Menopause: Symptoms and Support',
    description: 'Learn the common symptoms of menopause, what causes them, and practical ways to find relief and support with your primary care team in Hagerstown, MD.',
    url: 'https://opalmedicalgroup.com/blog/menopause-symptoms-and-support',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menopause: Symptoms and Support',
    description: 'Learn the common symptoms of menopause, what causes them, and practical ways to find relief and support with your primary care team in Hagerstown, MD.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const tips = [
  'Keep a simple symptom diary for a few weeks so patterns and triggers become visible.',
  'Dress in layers, keep your bedroom cool, and note whether caffeine, alcohol or spicy food bring on hot flashes.',
  'Aim for regular movement, including walking and strength training, to support mood, sleep, muscle and bone health.',
  'Get enough calcium and vitamin D through food and, if needed, supplements recommended by your clinician.',
  'Build a steady sleep routine with consistent bed and wake times and a screen-free wind-down.',
  'Ask about treatment options, including hormone therapy and non-hormonal medicines, and whether they fit your health history.',
]

const related = [
  { title: 'Preventive and Annual Health Exams', href: '/services', desc: 'Why a yearly visit matters at every stage of life.' },
  { title: 'Telehealth and Medication Management', href: '/services', desc: 'Follow-up visits and medication review from home.' },
  { title: 'More Patient Resources', href: '/blog', desc: 'Browse all of our patient education articles.' },
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
      <SplitHero src="/images/stock/blog-menopause-symptoms-and-support.jpg" alt="Senior woman performing exercise on stability ball for fitness and strength.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Menopause: Symptoms and Support</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">You wake at 3 a.m., drenched in sweat, your mind racing. During the day you lose words, feel unlike yourself, and wonder whether anyone else is going through this. If that sounds familiar, you are far from alone. Menopause is a natural life transition, but that does not mean you have to simply endure it. Understanding what is happening in your body is the first step toward feeling better.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Menopause?</h2>
        <p>Menopause is the point at which you have gone 12 consecutive months without a menstrual period. It happens because the ovaries gradually produce less estrogen and progesterone. In the United States the average age is around 51, though it can occur earlier or later. The years leading up to it, called perimenopause, can begin in the 40s and last several years. Menopause may also occur earlier after surgery to remove the ovaries or following certain cancer treatments.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Symptoms</h2>
        <p>Every woman&apos;s experience is different. Some have few symptoms, while others find them disruptive to work, relationships and sleep. Commonly reported symptoms include:</p>
        <ul className="list-disc pl-6 my-4">
          <li>Hot flashes and night sweats, which are the most frequent complaints</li>
          <li>Irregular periods during perimenopause, with changes in flow and timing</li>
          <li>Trouble falling or staying asleep</li>
          <li>Mood changes, irritability, anxiety or low mood</li>
          <li>Vaginal dryness, discomfort with intercourse, and urinary urgency</li>
          <li>Difficulty concentrating and &quot;brain fog&quot;</li>
          <li>Joint aches, changes in skin and hair, and shifts in weight distribution</li>
        </ul>
        <p>Hot flashes often last several years for many women, and research suggests they can continue longer for some. Because other conditions, such as thyroid disease, can mimic menopause symptoms, it is worth having new symptoms evaluated rather than assuming the cause.</p>

        <div className="animate-fade-up bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Menopause is a natural life transition, but that does not mean you have to simply endure it.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters for Long-Term Health</h2>
        <p>Falling estrogen affects more than comfort. It is linked to faster bone loss, which raises the risk of osteoporosis and fractures. Cardiovascular risk also rises after menopause, with changes in cholesterol and blood pressure becoming more common. Sleep disruption and mood changes can compound one another and affect overall well-being. This is why menopause is a good time to review preventive care, including blood pressure, cholesterol, bone health, and age-appropriate screenings.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Says About Treatment</h2>
        <p>Menopausal hormone therapy is the most effective treatment for hot flashes and night sweats, and it also helps genitourinary symptoms. Major medical societies generally consider it a reasonable option for healthy women who are within 10 years of menopause onset or younger than 60, after weighing individual risks such as a history of breast cancer, blood clots, stroke or heart disease. Low-dose vaginal estrogen can treat dryness with minimal absorption into the bloodstream.</p>
        <p className="mt-4">For those who cannot or prefer not to use hormones, non-hormonal options exist. Certain antidepressants, gabapentin, and newer non-hormonal medicines can reduce hot flashes. Cognitive behavioral therapy has also shown benefit for sleep problems, mood and the distress caused by hot flashes. Supplements marketed for menopause have inconsistent evidence, so discuss them with a clinician before starting.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Feel Better</h2>
        <p>Small daily habits can meaningfully ease symptoms and protect your health:</p>
        <ul className="my-4 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Help</h2>
        <p>Reach out if symptoms interfere with daily life, if you have heavy or unusually frequent bleeding, or if you have any bleeding after menopause. Persistent low mood, anxiety or thoughts of self-harm also deserve prompt attention. You should not have to wait until symptoms feel unbearable to ask for support.</p>
        <p className="mt-4">At Opal Medical Group in Hagerstown, MD, our primary care team offers preventive and annual health exams as well as telehealth and medication management, and we are currently accepting new patients. Call us at (240) 420-2666 to talk through your symptoms and build a plan that fits you.</p>
      </article>

      <section className="animate-fade-up bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-dark)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
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
              <a key={r.title} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm mb-4">{r.desc}</p>
                <span className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm">Read more →</span>
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