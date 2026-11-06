import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anemia and Fatigue: What Is the Connection?',
  description: 'Learn how anemia causes fatigue, who is at risk, which symptoms to watch for, and when to see a primary care provider for testing and treatment.',
  alternates: { canonical: '/blog/anemia-and-fatigue-what-is-the-connection' },
  openGraph: {
    title: 'Anemia and Fatigue: What Is the Connection?',
    description: 'Learn how anemia causes fatigue, who is at risk, which symptoms to watch for, and when to see a primary care provider for testing and treatment.',
    url: 'https://opalmedicalgroup.com/blog/anemia-and-fatigue-what-is-the-connection',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anemia and Fatigue: What Is the Connection?',
    description: 'Learn how anemia causes fatigue, who is at risk, which symptoms to watch for, and when to see a primary care provider for testing and treatment.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const tips = [
  'Ask your provider about a simple blood test (a complete blood count) if tiredness lasts more than a few weeks.',
  'Eat iron-rich foods such as beans, lentils, leafy greens, lean meats and fortified cereals.',
  'Pair plant-based iron with vitamin C foods like citrus or peppers to help absorption.',
  'Do not start high-dose iron supplements without testing, since too much iron can be harmful.',
  'Keep a short log of symptoms, heavy periods, diet changes and medications to share at your visit.',
]

const related = [
  { href: '/blog', title: 'Resources Hub', text: 'Browse all of our patient education articles.' },
  { href: '/services', title: 'Our Primary Care Services', text: 'See the care we offer for adults.' },
  { href: '/contact', title: 'Contact Our Office', text: 'Reach out to schedule a visit or ask a question.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white">Home</a> › <a href="/blog" className="hover:text-white">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-[Cormorant] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Anemia and Fatigue: What Is the Connection?</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-anemia-and-fatigue-what-is-the-connection.jpg"} alt={"A woman lying on a sofa showing visible stress and emotion, clutching a pillow."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You sleep a full night, drink your coffee, and still feel like you are dragging through the day. Climbing stairs leaves you winded, your thoughts feel foggy, and you wonder why everyone else seems to have more energy. If this sounds familiar, you are not imagining it, and you are not simply &quot;out of shape.&quot; One common and very treatable cause of persistent tiredness is anemia.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Anemia?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Anemia means your body does not have enough healthy red blood cells, or those cells do not carry enough hemoglobin. Hemoglobin is the protein that binds oxygen in your lungs and delivers it to muscles, organs and the brain. When oxygen delivery drops, every tissue has to work with less fuel than it needs.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Anemia Makes You Feel So Tired</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Your cells use oxygen to produce energy. With fewer working red blood cells, your heart pumps harder to move the oxygen you do have, and your muscles tire more quickly. The result is a deep, heavy fatigue that rest does not fully fix. Many people also notice:
        </p>
        <ul className="my-6 space-y-3">
          {['Shortness of breath with light activity', 'Pale skin or pale inner eyelids', 'Dizziness or lightheadedness', 'Cold hands and feet', 'Headaches and trouble concentrating', 'A fast or pounding heartbeat'].map((s) => (
            <li key={s} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">{check}<span>{s}</span></li>
          ))}
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant]">
          Anemia means your body does not have enough healthy red blood cells, or those cells do not carry enough hemoglobin.
        </div>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Causes of Anemia</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Anemia is a sign of something else going on, so finding the cause matters. The most common types include:
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          <strong>Iron deficiency anemia</strong> is the most frequent form worldwide. It can result from low iron intake, poor absorption, or blood loss, such as heavy menstrual periods or slow bleeding in the digestive tract.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          <strong>Vitamin B12 or folate deficiency anemia</strong> can occur with limited diets, certain digestive conditions, or some medications.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          <strong>Anemia of chronic disease</strong> may accompany kidney disease, inflammatory conditions or long-term infections. Inherited conditions and bone marrow problems are less common causes.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Most at Risk?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Anyone can develop anemia, but risk is higher for women of childbearing age, people who are pregnant, adults over 65, those following strict vegetarian or vegan diets without planning, and people with chronic medical conditions or digestive disorders. Frequent blood donors and people taking certain long-term medications may also be affected.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">How Anemia Is Diagnosed</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Diagnosis usually begins with a conversation about your symptoms, diet, menstrual history, medications and family history, followed by a physical exam. A complete blood count measures your hemoglobin and red blood cells. If the result is low, additional tests such as iron studies, vitamin B12 and folate levels can point to the cause. Because fatigue also has other causes, including thyroid problems, sleep disorders, depression and diabetes, your provider may check for these too.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Treatment and Practical Steps</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Treatment depends on the cause. Iron deficiency is often corrected with iron supplements and dietary changes, while B12 deficiency may be treated with supplements or injections. If blood loss is the source, finding and addressing it is essential. Most people begin to feel better within weeks once the underlying problem is treated, though rebuilding iron stores can take longer.
        </p>
        <ul className="my-6 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">{check}<span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Make an appointment if fatigue is lasting, getting worse, or interfering with work and daily life. Seek urgent care right away for chest pain, severe shortness of breath, fainting, or black or bloody stools.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Persistent tiredness is not something you have to push through. At Opal Medical Group in Hagerstown, MD, our primary care team can talk through your symptoms, arrange appropriate testing and help you plan next steps. Telehealth visits are available, and we are currently accepting new patients. Call (240) 420-2666 to get started.
        </p>
      </article>

      <section className="px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
            <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
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
          <h3 className="font-[Cormorant] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 transition hover:shadow-lg">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                <h4 className="font-[Cormorant] text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}