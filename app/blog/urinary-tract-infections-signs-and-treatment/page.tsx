import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Urinary Tract Infections: Signs and Treatment',
  description: 'Learn the common signs of a urinary tract infection, who is most at risk, how UTIs are treated, and when to see a primary care provider.',
  alternates: { canonical: '/blog/urinary-tract-infections-signs-and-treatment' },
  openGraph: {
    title: 'Urinary Tract Infections: Signs and Treatment',
    description: 'Learn the common signs of a urinary tract infection, who is most at risk, how UTIs are treated, and when to see a primary care provider.',
    url: 'https://opalmedicalgroup.com/blog/urinary-tract-infections-signs-and-treatment',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urinary Tract Infections: Signs and Treatment',
    description: 'Learn the common signs of a urinary tract infection, who is most at risk, how UTIs are treated, and when to see a primary care provider.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const signs = [
  'A strong, persistent urge to urinate',
  'A burning sensation when passing urine',
  'Frequent, small amounts of urine',
  'Cloudy, dark, or strong-smelling urine',
  'Pelvic pressure or lower abdominal discomfort',
  'Blood in the urine, which may look pink or cola-colored',
]

const tips = [
  'Drink water regularly throughout the day',
  'Urinate when you feel the urge rather than holding it',
  'Urinate soon after sexual intercourse',
  'Wipe from front to back after using the toilet',
  'Avoid irritating feminine products such as douches and powders',
  'Finish every dose of an antibiotic if one is prescribed',
]

const related = [
  { href: '/blog', title: 'Resources Hub', text: 'Browse all of our patient education articles.' },
  { href: '/services', title: 'Our Primary Care Services', text: 'See how we support everyday health concerns.' },
  { href: '/contact', title: 'Contact Our Office', text: 'Reach out to schedule a visit or ask a question.' },
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
          <h1 className="font-[Cormorant,serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Urinary Tract Infections: Signs and Treatment</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-urinary-tract-infections-signs-and-treatment.jpg"} alt={"Red warning sign for COVID-19 affected area urging people not to enter."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          It often starts as a small twinge, then becomes an urgent, burning need to get to the bathroom again and again. A urinary tract infection (UTI) is uncomfortable, distracting, and can make it hard to focus on anything else. The good news is that UTIs are common, well understood, and very treatable when they are recognized early.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is a Urinary Tract Infection?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A UTI occurs when bacteria enter part of the urinary system, which includes the kidneys, ureters, bladder, and urethra. Most infections involve the lower tract, meaning the bladder (cystitis) and urethra. Bacteria from the bowel, most often E. coli, cause the majority of cases. When an infection travels upward to the kidneys, it is called pyelonephritis and is more serious.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Signs and Symptoms</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Symptoms can vary from person to person, but the most common include:
        </p>
        <ul className="space-y-3 text-[var(--color-ink)] leading-loose text-base">
          {signs.map((s) => (
            <li key={s} className="flex gap-3">{check}<span>{s}</span></li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Older adults sometimes show different signs, such as new confusion, agitation, or a sudden change in behavior, rather than the classic urinary symptoms.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Most Likely to Get a UTI?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Anyone can develop a UTI, but women are affected more often because the female urethra is shorter, which gives bacteria a shorter path to the bladder. Other factors that raise risk include sexual activity, menopause, pregnancy, diabetes, kidney stones, an enlarged prostate, urinary catheters, and conditions that prevent the bladder from emptying fully. Some people experience repeated infections, which deserve a closer look.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant,serif]">
          Most UTIs are straightforward to treat when they are recognized early.
        </div>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">How UTIs Are Diagnosed and Treated</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Diagnosis usually begins with a review of your symptoms and a simple urine test called a urinalysis. In some cases, a urine culture is sent to identify the specific bacteria and determine which antibiotics will work best. This is especially helpful for recurrent infections or when initial treatment does not clear the symptoms.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Bacterial UTIs are treated with antibiotics. A short course is often enough for an uncomplicated bladder infection, while kidney infections or complicated cases may need longer treatment. Over-the-counter pain relievers and plenty of fluids can ease discomfort, but they do not replace antibiotics when an infection is present. Stopping medication early, even if you feel better, can allow bacteria to linger and return.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Says About Prevention</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Studies suggest that staying well hydrated can reduce recurrent UTIs in some people. Cranberry products have been studied for years, and some research shows a modest benefit for certain groups, though results are mixed and they are not a treatment for an active infection. For postmenopausal women with recurrent infections, vaginal estrogen therapy has been shown to help in some cases. Your provider can talk through which options may suit you.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps to Lower Your Risk</h2>
        <ul className="space-y-3 text-[var(--color-ink)] leading-loose text-base">
          {tips.map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Care Right Away</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Contact a provider promptly if you have symptoms of a UTI. Seek urgent care if you develop fever, chills, back or side pain, nausea or vomiting, or if you are pregnant, since these can signal a kidney infection or a higher-risk situation. If you have severe symptoms, do not wait for an appointment.
        </p>

        <p className="text-[var(--color-ink)] leading-loose text-base mt-8">
          If you think you may have a UTI or keep getting them, Opal Medical Group in Hagerstown, MD is here to help. Call us at (240) 420-2666 or reach out through our contact page to talk with our team about your symptoms and next steps.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-dark)]">
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
          <h3 className="font-[Cormorant,serif] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <h4 className="font-[Cormorant,serif] text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-[Cormorant,serif] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}