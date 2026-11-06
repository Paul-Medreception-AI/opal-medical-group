import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What to Expect at Your Annual Physical',
  description: 'Learn what happens at an annual physical, how to prepare, which screenings may be discussed, and how to get the most from your yearly primary care visit.',
  alternates: { canonical: '/blog/what-to-expect-at-your-annual-physical' },
  openGraph: {
    title: 'What to Expect at Your Annual Physical',
    description: 'Learn what happens at an annual physical, how to prepare, which screenings may be discussed, and how to get the most from your yearly primary care visit.',
    url: 'https://opalmedicalgroup.com/blog/what-to-expect-at-your-annual-physical',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Expect at Your Annual Physical',
    description: 'Learn what happens at an annual physical, how to prepare, which screenings may be discussed, and how to get the most from your yearly primary care visit.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const prep = [
  'A list of current medications, vitamins and supplements',
  'Records of recent tests, procedures or hospital visits',
  'Your family health history, especially heart disease, diabetes and cancer',
  'Questions or concerns you want to discuss, written down in advance',
  'Names of other doctors or specialists you see',
]

const related = [
  { href: '/blog', label: 'Blog', title: 'More Patient Resources', text: 'Browse more articles on prevention and everyday health.' },
  { href: '/services', label: 'Services', title: 'Our Primary Care Services', text: 'See the care we offer, from preventive exams to medication management.' },
  { href: '/contact', label: 'Contact', title: 'Schedule a Visit', text: 'Reach out to book your annual exam or ask a question.' },
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
          <h1 className="font-[Cormorant,serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">What to Expect at Your Annual Physical</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-what-to-expect-at-your-annual-physical.jpg"} alt={"A female doctor uses a stethoscope to listen to a young boy's heartbeat, conducting a health check outdoors."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="mb-6 text-lg">
          Many of us put off the annual physical. Life is busy, you feel fine, and walking into a doctor’s office without a specific problem can feel unnecessary, or even a little nerve-racking. But this single visit is one of the best opportunities you have to understand your health and catch small issues before they become big ones. Knowing what happens can take the worry out of it.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is an Annual Physical?</h2>
        <p className="mb-6">
          An annual physical, sometimes called a preventive or wellness exam, is a yearly visit with your primary care provider focused on keeping you healthy rather than treating a specific illness. It combines a conversation about your history and lifestyle, a hands-on exam, a review of screenings and vaccines, and a plan for the year ahead.
        </p>
        <p className="mb-6">
          It is different from a sick visit. Instead of addressing one complaint, your provider looks at the whole picture: your heart, lungs, mood, sleep, nutrition, activity, and the risks that run in your family.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters</h2>
        <p className="mb-6">
          Many common conditions, including high blood pressure, high cholesterol, type 2 diabetes and some cancers, can develop quietly without symptoms. Screening and early detection are well established in public health guidance, and organizations such as the U.S. Preventive Services Task Force recommend specific screenings based on age, sex and risk factors. Catching a problem early often means simpler treatment and better outcomes.
        </p>
        <p className="mb-6">
          A yearly visit also builds a relationship. When your provider knows your baseline, changes in your weight, blood pressure or mood stand out more clearly, and you are more likely to feel comfortable raising sensitive topics.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant,serif]">
          Many common conditions, including high blood pressure, high cholesterol, type 2 diabetes and some cancers, can develop quietly without symptoms.
        </div>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What Happens During the Visit</h2>
        <p className="mb-4">While every visit is tailored to the individual, most include these steps:</p>
        <ul className="space-y-3 mb-6">
          <li className="flex gap-3">{check}<span><strong>Health history review.</strong> Your provider asks about past illnesses, surgeries, medications, allergies, family history and any changes since your last visit.</span></li>
          <li className="flex gap-3">{check}<span><strong>Vital signs.</strong> Blood pressure, heart rate, temperature, height, weight and often body mass index are measured.</span></li>
          <li className="flex gap-3">{check}<span><strong>Physical exam.</strong> This commonly includes listening to your heart and lungs, checking your abdomen, reviewing your skin, eyes, ears, throat and joints, and checking reflexes as appropriate.</span></li>
          <li className="flex gap-3">{check}<span><strong>Lifestyle conversation.</strong> Expect questions about diet, exercise, sleep, stress, alcohol, tobacco and safety.</span></li>
          <li className="flex gap-3">{check}<span><strong>Mental health check-in.</strong> Brief questionnaires about mood and anxiety are common, because emotional health is part of overall health.</span></li>
        </ul>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Screenings, Labs and Vaccines</h2>
        <p className="mb-6">
          Depending on your age and risk factors, your provider may recommend blood work such as cholesterol and blood sugar tests, along with screenings for certain cancers, bone density, or infections. Immunizations such as the annual flu vaccine or tetanus boosters may also be reviewed. Not everyone needs every test every year. The goal is to match recommendations to you, not to run tests for their own sake.
        </p>
        <p className="mb-6">
          Be honest about habits and symptoms, even ones that feel embarrassing. Your provider has heard it before, and accurate information leads to better advice.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">How to Prepare</h2>
        <p className="mb-4">A little preparation helps you make the most of your time:</p>
        <ul className="space-y-3 mb-6">
          {prep.map((p) => (
            <li key={p} className="flex gap-3">{check}<span>{p}</span></li>
          ))}
        </ul>
        <p className="mb-6">
          If your provider has asked you to fast before blood work, follow those instructions. Otherwise, wear comfortable clothing, bring your questions, and give yourself time to arrive without rushing.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">After the Visit</h2>
        <p className="mb-6">
          Before you leave, make sure you understand any follow-up tests, medication changes or lifestyle goals. Choose one or two realistic steps, such as a daily walk or an earlier bedtime, rather than trying to change everything at once. Lab results are typically shared afterward, and your provider can explain what they mean for you.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p className="mb-6">
          An annual physical is not a test you can pass or fail. It is a chance to be heard, to ask questions and to plan for a healthier year. Opal Medical Group offers preventive and annual health exams at 1126 Opal Ct in Hagerstown, MD, and we are currently accepting new patients. Call us at (240) 420-2666 to schedule your visit.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-dark)]">
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
          <h3 className="font-[Cormorant,serif] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <h4 className="font-[Cormorant,serif] text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant,serif] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}