import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Back Pain: When to Seek Care | Opal Medical Group',
  description: 'Most back pain improves on its own, but some symptoms need prompt attention. Learn the warning signs, self-care tips and when to see a primary care provider.',
  alternates: { canonical: '/blog/back-pain-when-to-seek-care' },
  openGraph: {
    title: 'Back Pain: When to Seek Care | Opal Medical Group',
    description: 'Most back pain improves on its own, but some symptoms need prompt attention. Learn the warning signs, self-care tips and when to see a primary care provider.',
    url: 'https://opalmedicalgroup.com/blog/back-pain-when-to-seek-care',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Back Pain: When to Seek Care | Opal Medical Group',
    description: 'Most back pain improves on its own, but some symptoms need prompt attention. Learn the warning signs, self-care tips and when to see a primary care provider.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const selfCare = [
  'Stay gently active. Short walks are usually better than prolonged bed rest.',
  'Use heat or ice, whichever feels better, for short periods.',
  'Change positions often if you sit for long stretches.',
  'Avoid heavy lifting and twisting while the pain is flaring.',
  'Ask a clinician or pharmacist about over-the-counter pain relief that is safe for you.',
]

const urgent = [
  'Numbness in the groin or inner thighs (saddle area)',
  'New trouble controlling your bladder or bowels',
  'Sudden weakness in one or both legs',
  'Back pain after a fall, car accident or other significant injury',
  'Fever with back pain, or unexplained weight loss',
  'Severe pain that is worse at night or not eased by resting',
]

const related = [
  { t: 'Our Services', d: 'See the primary care we offer for ongoing health concerns.', h: '/services' },
  { t: 'Conditions We Treat', d: 'Browse common conditions managed in primary care.', h: '/conditions' },
  { t: 'More Health Resources', d: 'Read more patient education articles from our team.', h: '/blog' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-back-pain-when-to-seek-care.jpg" alt="From above of crop faceless slim female patient sitting on examination couch and indicating osteopath in uniform pain spot on back in clinic">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Back Pain: When to Seek Care</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="text-lg">
          It often starts with something ordinary: bending to pick up a bag, sitting through a long drive, or waking up with a stiff, aching spine. Suddenly every movement feels risky. Back pain is one of the most common reasons people seek medical care, and it can be worrying because it is hard to know whether to wait it out or get help.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Back Pain?</h2>
        <p>
          Back pain is discomfort anywhere along the spine, from the neck down to the tailbone, though the lower back is the most common location. It may feel dull, sharp, burning or like a deep ache. Doctors often describe it by how long it lasts: acute pain lasts days to a few weeks, subacute pain lasts up to about three months, and chronic pain continues longer than that.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Does It Affect?</h2>
        <p>
          Nearly anyone can develop back pain. It becomes more common with age, but younger adults get it too. Factors that raise the likelihood include a physically demanding job, long hours of sitting, low activity levels, excess body weight, smoking, and stress or poor sleep. Pregnancy and previous back injuries can also play a role.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Tells Us</h2>
        <p>
          Most episodes of acute low back pain are caused by strained muscles or ligaments, or by irritation of the joints and discs, and they improve substantially within a few weeks. Clinical guidelines generally encourage staying active, using simple self-care first, and avoiding imaging such as X-rays or MRI unless there are warning signs. Scans often show age-related changes in people with no pain at all, so they do not always explain symptoms and can sometimes lead to unnecessary worry or treatment.
        </p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Most episodes of acute low back pain are caused by strained muscles or ligaments, or by irritation of the joints and discs, and they improve substantially within a few weeks.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Self-Care That Often Helps</h2>
        <p className="mb-4">For mild pain without warning signs, these steps are commonly recommended:</p>
        <ul className="space-y-3">
          {selfCare.map((s) => (
            <li key={s} className="flex gap-3">{check}<span>{s}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Signs You Need Care Right Away</h2>
        <p className="mb-4">Some symptoms can point to a serious problem involving the nerves, spine or other organs. Seek emergency care promptly if you notice:</p>
        <ul className="space-y-3">
          {urgent.map((s) => (
            <li key={s} className="flex gap-3">{check}<span>{s}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Schedule a Primary Care Visit</h2>
        <p>
          Make an appointment if your pain has lasted more than a couple of weeks, keeps returning, interferes with sleep or work, or spreads down a leg with tingling or weakness. Also reach out if you have a history of cancer, osteoporosis, or long-term steroid use, or if you are simply unsure. A primary care provider can ask about your symptoms, examine your back and nerves, decide whether testing is truly needed, and build a plan that may include medication review, movement guidance, physical therapy or referral to a specialist.
        </p>
        <p className="mt-4">
          Opal Medical Group in Hagerstown, MD offers in-person primary care as well as telehealth visits, which can be a convenient way to start the conversation about ongoing back pain. Call us at (240) 420-2666 to ask about a visit. If your symptoms feel sudden or severe, do not wait: go to the nearest emergency department or call 911.
        </p>
      </article>

      <section className="px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
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
              <a key={r.h} href={r.h} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.t}</h4>
                <p className="text-[var(--color-muted)] text-sm mb-4">{r.d}</p>
                <span className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm">Read more →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/85">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}