import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Men's Health Checkups: What to Know",
  description: "Learn what a men's health checkup includes, which screenings matter at each age, and how to prepare for a primary care visit in Hagerstown, MD.",
  alternates: { canonical: '/blog/men-s-health-checkups-what-to-know' },
  openGraph: {
    title: "Men's Health Checkups: What to Know",
    description: "Learn what a men's health checkup includes, which screenings matter at each age, and how to prepare for a primary care visit in Hagerstown, MD.",
    url: 'https://opalmedicalgroup.com/blog/men-s-health-checkups-what-to-know',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Men's Health Checkups: What to Know",
    description: "Learn what a men's health checkup includes, which screenings matter at each age, and how to prepare for a primary care visit in Hagerstown, MD.",
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const tips = [
  'Write down symptoms, even ones that seem minor or embarrassing.',
  'Bring a list of medications, supplements and past surgeries.',
  'Learn your family history of heart disease, cancer and diabetes.',
  'Be honest about sleep, alcohol, tobacco, stress and mood.',
  'Ask which screenings are right for your age and risk.',
]

const related = [
  { href: '/blog', title: 'All Resources', text: 'Browse every patient education article from Opal Medical Group.' },
  { href: '/services', title: 'Our Services', text: 'See the primary care services we offer in Hagerstown.' },
  { href: '/contact', title: 'Schedule a Visit', text: 'Contact our office to book a checkup or ask a question.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-[Cormorant] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Men's Health Checkups: What to Know</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-men-s-health-checkups-what-to-know.jpg"} alt={"Doctor checking patient's blood pressure during medical consultation indoors."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p>Many men can name the last time they serviced their car but not the last time they saw a primary care clinician. Work, family and a habit of pushing through make it easy to put off a visit until something hurts. Yet many of the most serious conditions men face develop quietly, and a routine checkup is often the best chance to catch them while they are easiest to treat.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is a Men's Health Checkup?</h2>
        <p>A men's health checkup is a preventive visit focused on your overall health rather than a single complaint. It usually includes a review of your history, a physical exam, vital signs, and a conversation about lifestyle. Depending on your age and risk factors, it may also include blood work and screening tests. The goal is simple: find problems early, lower your risk of future illness, and build a relationship with a clinician who knows you.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why These Visits Matter</h2>
        <p>Heart disease is a leading cause of death among men in the United States, and high blood pressure, high cholesterol and type 2 diabetes often cause no symptoms for years. Men are also, on average, less likely than women to see a doctor regularly. Skipping preventive care means conditions can progress unnoticed. Public health guidance consistently shows that screening and early treatment reduce complications from cardiovascular disease, colorectal cancer and diabetes.</p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant] animate-fade-up">
          Many of the most serious conditions men face develop quietly, and a routine checkup is often the best chance to catch them while they are easiest to treat.
        </div>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Usually Checked</h2>
        <p>Every visit is tailored to the individual, but common elements include:</p>
        <ul className="my-6 space-y-3">
          <li className="flex gap-3">{check}<span><strong>Blood pressure and weight:</strong> blood pressure should be checked regularly, and body mass index and waist size help assess risk.</span></li>
          <li className="flex gap-3">{check}<span><strong>Cholesterol and blood sugar:</strong> blood tests can reveal risk for heart disease and diabetes before symptoms appear.</span></li>
          <li className="flex gap-3">{check}<span><strong>Cancer screening:</strong> colorectal cancer screening is generally recommended starting at 45. Lung cancer screening may be advised for certain long-term smokers.</span></li>
          <li className="flex gap-3">{check}<span><strong>Prostate health:</strong> screening with a PSA test is a personal decision. Guidelines suggest discussing benefits and limits with your clinician, typically beginning around age 50, or earlier with higher risk.</span></li>
          <li className="flex gap-3">{check}<span><strong>Immunizations:</strong> flu, tetanus, shingles and other vaccines are reviewed based on age and health.</span></li>
        </ul>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Topics Men Often Hesitate to Raise</h2>
        <p>A good checkup is also a safe place to talk about things that can feel awkward. Mood changes, persistent stress, trouble sleeping, low energy, sexual health concerns, snoring or urinary changes are all common and often treatable. Depression in men can show up as irritability, anger or withdrawal rather than sadness, so it is worth mentioning. Nothing you bring up is too small or too personal for a clinician to hear.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">How Often Should You Go?</h2>
        <p>Healthy younger men may do well with a visit every one to three years, while men over 40, or those with chronic conditions or a strong family history, are usually advised to be seen yearly. Your clinician can recommend a schedule based on your own risks. Any new or persistent symptom, such as chest discomfort, unexplained weight loss, blood in the urine or stool, or a lump, deserves prompt attention rather than waiting for your next annual visit.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">How to Prepare for Your Visit</h2>
        <ul className="my-6 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>
        <p>Small steps between visits also count: regular movement, a diet rich in vegetables and whole grains, limiting alcohol, avoiding tobacco, and keeping up with friends and family all support long-term health.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the First Step</h2>
        <p>If it has been a while since your last checkup, you are not behind, you are simply due. Opal Medical Group in Hagerstown, MD is accepting new patients, and telehealth visits are available for appropriate concerns and medication management. Call (240) 420-2666 or reach out through our contact page to schedule a preventive visit.</p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
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
          {related.map((r) => (
            <a key={r.title} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-[Cormorant] text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
              <p className="text-[var(--color-muted)] text-sm">{r.text}</p>
              <span className="inline-block mt-4 text-sm text-[var(--color-accent)]">Read more →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}