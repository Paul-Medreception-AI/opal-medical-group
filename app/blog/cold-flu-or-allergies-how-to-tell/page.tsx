import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cold, Flu, or Allergies: How to Tell',
  description: 'Not sure if it is a cold, the flu, or allergies? Learn the key differences in symptoms, timing and treatment, and when to call a primary care provider.',
  alternates: { canonical: '/blog/cold-flu-or-allergies-how-to-tell' },
  openGraph: {
    title: 'Cold, Flu, or Allergies: How to Tell',
    description: 'Not sure if it is a cold, the flu, or allergies? Learn the key differences in symptoms, timing and treatment, and when to call a primary care provider.',
    url: 'https://opalmedicalgroup.com/blog/cold-flu-or-allergies-how-to-tell',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cold, Flu, or Allergies: How to Tell',
    description: 'Not sure if it is a cold, the flu, or allergies? Learn the key differences in symptoms, timing and treatment, and when to call a primary care provider.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const tips = [
  'Note when symptoms started: sudden onset points toward flu, gradual toward a cold.',
  'Check for fever and body aches, which are common with flu and uncommon with allergies.',
  'Notice itchy eyes and sneezing that repeat every season, which suggest allergies.',
  'Rest, drink plenty of fluids and treat symptoms for colds and mild flu.',
  'Stay home while you have a fever to avoid spreading illness to others.',
]

const related = [
  { href: '/blog', title: 'More Patient Resources', text: 'Browse all of our health education articles on the Opal Medical Group blog.' },
  { href: '/services', title: 'Our Primary Care Services', text: 'See the everyday and preventive care we offer in Hagerstown, MD.' },
  { href: '/contact', title: 'Contact Our Office', text: 'Call or reach out to schedule a visit, including telehealth when appropriate.' },
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
          <h1 className="font-[Cormorant,serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Cold, Flu, or Allergies: How to Tell</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-cold-flu-or-allergies-how-to-tell.jpg"} alt={"Small sick redhead kid with eyes closed cleaning nose with white tissue paper while lying alone in bed in light modern bedroom in daytime"} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You wake up with a scratchy throat, a stuffy nose and a heavy head. Is it a cold that will pass in a few days, the flu that could knock you out for a week, or allergies that will linger all season? It is a question almost everyone asks, and the answer changes how you rest, what you take and whether you should see a provider.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          The three conditions share many symptoms, which is why they are so easy to confuse. The good news is that a few clues, especially timing, fever and itching, can help you tell them apart.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What Causes Each One?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Colds and the flu are both caused by viruses. Many different viruses, most often rhinoviruses, cause the common cold. Influenza viruses cause the flu. Both spread through droplets when someone coughs or sneezes, and by touching contaminated surfaces and then your face.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Allergies are different. They are not an infection at all. Your immune system overreacts to something harmless, such as pollen, dust mites, mold or pet dander, and releases chemicals like histamine. That is why allergies are not contagious and do not cause a true fever.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Comparing Symptoms</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          <strong>Colds</strong> usually come on gradually. Expect a sore throat, runny or stuffy nose, sneezing and a mild cough. A low fever is possible, but body aches and fatigue are usually mild.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          <strong>Flu</strong> tends to hit suddenly. Fever, chills, muscle aches, headache, a dry cough and marked exhaustion are typical. Many people describe feeling as if they were run over. Some, especially children, may also have vomiting or diarrhea.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          <strong>Allergies</strong> bring sneezing, a clear and watery runny nose, congestion, and itchy, watery eyes, nose or throat. There is no fever and no body aches. Symptoms can last for weeks and often return at the same time each year.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant,serif]">
          Allergies are not an infection at all.
        </div>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">How Long Does Each Last?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Duration is one of the most helpful clues. A cold typically improves within about 7 to 10 days. The flu often causes the worst symptoms for several days, with cough and tiredness sometimes lingering for a week or two. Allergy symptoms continue as long as you are exposed to the trigger, which could be weeks or an entire season.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          If a "cold" has dragged on beyond ten days, or keeps coming back around the same time every year, allergies or a secondary problem such as a sinus infection may be involved.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Telling Them Apart Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Treatment differs. Antibiotics do not work on colds or flu because they are viral. Antiviral medicines for influenza work best when started within the first couple of days of symptoms, so early recognition matters, particularly for people at higher risk of complications such as older adults, young children, pregnant women and those with chronic conditions like asthma, diabetes or heart disease.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Allergies, meanwhile, often respond to avoiding triggers and to antihistamines or nasal steroid sprays. Treating allergies as if they were an infection means weeks of discomfort without relief. Annual flu vaccination is also recommended by public health authorities as the best way to reduce your risk of influenza.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Tips at Home</h2>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              {check}
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Care</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Reach out to a provider if you have a high or lasting fever, trouble breathing, chest pain, confusion, severe sinus pain, symptoms that improve and then suddenly worsen, or if you are in a higher-risk group. Seek emergency care right away for severe shortness of breath or chest pressure.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          If you are not sure what you are dealing with, Opal Medical Group in Hagerstown, MD can help sort it out. We offer telehealth visits as well as in-office care, and we are currently accepting new patients. Call us at (240) 420-2666 to talk through your symptoms and find the right next step.
        </p>
      </article>

      <section className="px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-dark)]">
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
          <h3 className="font-[Cormorant,serif] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.title} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-[Cormorant,serif] text-2xl text-[var(--color-dark)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-[Cormorant,serif] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}