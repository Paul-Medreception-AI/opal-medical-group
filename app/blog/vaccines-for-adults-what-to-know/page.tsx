import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vaccines for Adults: What to Know',
  description: 'Learn which vaccines adults commonly need, why immunity changes with age, and how to talk with your primary care provider about staying up to date.',
  alternates: { canonical: '/blog/vaccines-for-adults-what-to-know' },
  openGraph: {
    title: 'Vaccines for Adults: What to Know',
    description: 'Learn which vaccines adults commonly need, why immunity changes with age, and how to talk with your primary care provider about staying up to date.',
    url: 'https://opalmedicalgroup.com/blog/vaccines-for-adults-what-to-know',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaccines for Adults: What to Know',
    description: 'Learn which vaccines adults commonly need, why immunity changes with age, and how to talk with your primary care provider about staying up to date.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const tips = [
  'Bring any vaccine records you have, including old school, military or work records.',
  'Tell your provider about allergies, pregnancy plans, and any condition that affects your immune system.',
  'Ask which vaccines fit your age, job, travel plans and health conditions.',
  'Ask what side effects to expect and when to call if something feels wrong.',
  'Set a yearly reminder for your flu vaccine and annual health exam.',
]

const related = [
  { href: '/blog', title: 'Resources Hub', text: 'Browse all patient education articles from Opal Medical Group.' },
  { href: '/services', title: 'Our Services', text: 'See the primary care services available at our Hagerstown office.' },
  { href: '/contact', title: 'Contact Us', text: 'Reach our team to ask questions or schedule a visit.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm text-white/70 mb-4">
            <a href="/" className="hover:underline">Home</a> › <a href="/blog" className="hover:underline">Resources</a> › Article
          </p>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-[Cormorant,serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Vaccines for Adults: What to Know</h1>
          <p className="mt-6 text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-vaccines-for-adults-what-to-know.jpg"} alt={"A close-up image of an adult with a bandage on the upper arm, likely after vaccination."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p>
          Many of us remember vaccines as something that happened in childhood, a sore arm and a sticker. Then life got busy. Years pass, and it is easy to wonder whether you are still protected. The good news is that staying up to date as an adult is simple, and it is one of the most effective ways to protect yourself and the people you love.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Adults Still Need Vaccines</h2>
        <p>
          Protection from some childhood vaccines fades over time, and some infections are more serious as we age. Adults can also be exposed to illnesses that children are not, through work, travel, chronic health conditions or simply getting older. Vaccines train your immune system to recognize germs before they make you sick, which can reduce your risk of severe illness, hospital stays and complications.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Vaccines Adults Commonly Discuss</h2>
        <p>
          Recommendations come from public health agencies such as the Centers for Disease Control and Prevention (CDC) and are updated regularly. Which ones apply to you depends on your age, health and circumstances. Common topics include:
        </p>
        <ul className="my-6 space-y-3 list-disc pl-6">
          <li><strong>Influenza (flu):</strong> recommended yearly for most adults, because the virus changes and protection wanes.</li>
          <li><strong>COVID-19:</strong> guidance has changed over time, so it is worth reviewing current recommendations with your provider.</li>
          <li><strong>Tetanus, diphtheria and pertussis (Tdap/Td):</strong> a booster is generally advised every 10 years, and Tdap is recommended during each pregnancy.</li>
          <li><strong>Shingles:</strong> recommended for adults starting at age 50, since the risk of this painful rash rises with age.</li>
          <li><strong>Pneumococcal:</strong> helps protect against pneumonia and related infections, especially for older adults and those with certain conditions.</li>
          <li><strong>RSV:</strong> may be recommended for older adults and some other higher-risk groups.</li>
          <li><strong>Hepatitis A and B, HPV, MMR:</strong> may be advised depending on your history, age, work and risk factors.</li>
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant,serif]">
          Vaccines train your immune system to recognize germs before they make you sick.
        </div>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Should Pay Extra Attention</h2>
        <p>
          Some people benefit from a closer look at their vaccine plan. This includes adults over 50 or 65, people living with diabetes, heart disease, lung disease or kidney disease, those with weakened immune systems, pregnant people, healthcare and childcare workers, caregivers of infants or older relatives, and anyone planning international travel. If any of these describe you, a conversation with your provider can clarify what is most important.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Shows</h2>
        <p>
          Decades of research show that vaccines are among the most thoroughly studied medical tools we have. They are monitored for safety after approval, and the benefits for most people far outweigh the risks. For example, flu vaccination has been associated with fewer hospitalizations and less severe illness, and the shingles vaccine substantially lowers the chance of developing shingles and its lingering nerve pain.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Side Effects and Safety</h2>
        <p>
          Most side effects are mild and short-lived: a sore arm, tiredness, a low fever or mild aches for a day or two. Serious allergic reactions are rare. Some people should delay or avoid certain vaccines, such as those with a prior severe reaction to a vaccine ingredient, so be sure to share your full history. If you have questions or worries, that is a normal and welcome part of the conversation.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">How to Prepare for the Conversation</h2>
        <ul className="my-6 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p>
          You do not have to sort through the schedules alone. A preventive or annual health exam is a natural time to review your vaccine history and build a plan that fits your life. Opal Medical Group in Hagerstown, MD is currently accepting new patients, and you can call (240) 420-2666 to ask questions or schedule a visit.
        </p>
      </article>

      <section className="px-6">
        <div className="animate-fade-up bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-dark)]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
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
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 transition hover:shadow-lg">
                <h4 className="font-[Cormorant,serif] text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)]">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant,serif] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}