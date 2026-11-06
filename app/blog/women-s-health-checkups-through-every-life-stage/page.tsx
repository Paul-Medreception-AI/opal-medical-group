import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Women's Health Checkups Through Every Life Stage",
  description: "A guide to women's preventive care from your 20s through menopause and beyond: screenings, vaccines, and what to discuss with your primary care provider.",
  alternates: { canonical: '/blog/women-s-health-checkups-through-every-life-stage' },
  openGraph: {
    title: "Women's Health Checkups Through Every Life Stage",
    description: "A guide to women's preventive care from your 20s through menopause and beyond: screenings, vaccines, and what to discuss with your primary care provider.",
    url: 'https://opalmedicalgroup.com/blog/women-s-health-checkups-through-every-life-stage',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Women's Health Checkups Through Every Life Stage",
    description: "A guide to women's preventive care from your 20s through menopause and beyond: screenings, vaccines, and what to discuss with your primary care provider.",
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const Check = () => (
  <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const related = [
  { href: '/blog', label: 'Resources', title: 'Browse all patient education articles', text: 'Explore more guides on prevention and everyday health.' },
  { href: '/services', label: 'Services', title: 'Our primary care services', text: 'See how we support preventive and ongoing care.' },
  { href: '/contact', label: 'Contact', title: 'Schedule a visit', text: 'Reach out to our Hagerstown office to get started.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white">Home</a> › <a href="/blog" className="hover:text-white">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-[Cormorant] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Women's Health Checkups Through Every Life Stage</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-women-s-health-checkups-through-every-life-stage.jpg"} alt={"A specialist performing a skin analysis on a patient using advanced equipment in a clinic."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">Many women spend years taking care of everyone else: children, partners, parents, coworkers. Their own checkups slide to the bottom of the list. Yet the health questions you face at 25 are very different from those at 45 or 65, and regular preventive care is one of the most reliable ways to catch problems early and feel your best at every stage.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Regular Checkups Matter</h2>
        <p>Preventive visits are not just about finding disease. They are a chance to review your history, update vaccines, check blood pressure and cholesterol, talk about mood and sleep, and build a relationship with a provider who knows you. Research consistently shows that screening for conditions such as cervical cancer, breast cancer, and colorectal cancer lowers the risk of dying from them when abnormalities are found early.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Your 20s and Early 30s</h2>
        <p>This is the time to establish habits and a baseline. A primary care visit can cover blood pressure, weight, mental health, contraception, and sexual health, including screening for sexually transmitted infections when appropriate. Cervical cancer screening generally begins at age 21 and is repeated at intervals your provider will recommend based on the type of test and your results.</p>
        <ul className="space-y-3 my-6">
          {['Cervical cancer screening starting at 21', 'HPV vaccination if not already completed (typically recommended through age 26)', 'Annual flu vaccine and routine tetanus boosters', 'Conversations about contraception, pregnancy planning, and folic acid', 'Mental health and stress check-ins'].map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Your 30s and 40s</h2>
        <p>Careers, family, and caregiving often peak in these decades, and so does the temptation to skip appointments. Keep up with cervical screening, blood pressure, cholesterol, and diabetes risk assessment. If you are pregnant or planning to be, preconception and prenatal care become central. Many guidelines now suggest that women begin discussing mammography around age 40, and your provider can help you weigh personal and family risk to decide when to start.</p>
        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant]">Preventive visits are not just about finding disease.</blockquote>
        <p>Perimenopause can start in the 40s, bringing irregular periods, sleep disruption, hot flashes, or mood changes. These symptoms are common, and you do not have to simply endure them. Effective options exist.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Your 50s and Menopause</h2>
        <p>Menopause usually occurs around age 51, and the drop in estrogen affects bone density, cholesterol, and heart health. Heart disease is the leading cause of death in women, yet symptoms are often subtle or overlooked. This is also when colorectal cancer screening typically begins at age 45, and regular mammograms continue on the schedule you and your provider agree on.</p>
        <ul className="space-y-3 my-6">
          {['Colorectal cancer screening beginning at 45', 'Mammography at regular intervals', 'Cholesterol, blood pressure, and blood sugar monitoring', 'Discussion of menopause symptoms and treatment options', 'Shingles vaccine, generally recommended from age 50'].map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Your 60s and Beyond</h2>
        <p>Bone health takes center stage. Bone density screening is generally recommended for women starting at 65, or earlier if you have risk factors. Falls prevention, vision and hearing checks, memory concerns, and medication reviews become more important. Pneumonia and RSV vaccines may also be appropriate. Staying active, eating well, and keeping social connections all support healthy aging.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Getting the Most From Your Visit</h2>
        <ul className="space-y-3 my-6">
          {['Write down questions and symptoms before you go', 'Bring a list of medications and supplements', 'Share your family history, especially cancers and heart disease', 'Be candid about mood, sleep, and intimate health, since nothing is off limits', 'Ask which screenings are due and when to schedule the next ones'].map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>
        <p>Screening schedules are guidelines, and your own timeline may differ based on your history. A conversation with your provider is the best way to personalize it.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p>Whatever stage of life you are in, a checkup is an investment in the years ahead. Opal Medical Group in Hagerstown, MD offers preventive and annual health exams, along with telehealth visits, and is currently accepting new patients. Call (240) 420-2666 or reach out through our contact page to schedule.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-dark)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-ink)]">From Opal Medical Group</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[Cormorant] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.title} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 transition hover:shadow-lg">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-[Cormorant] text-2xl text-[var(--color-ink)] mb-2">{r.title}</p>
                <p className="text-sm text-[var(--color-muted)]">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}