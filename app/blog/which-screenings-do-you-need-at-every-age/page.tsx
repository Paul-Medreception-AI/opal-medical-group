import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Which Screenings Do You Need at Every Age?',
  description: 'A plain-language guide to common health screenings by age, from blood pressure in your 20s to cancer and bone screenings later in life.',
  alternates: { canonical: '/blog/which-screenings-do-you-need-at-every-age' },
  openGraph: {
    title: 'Which Screenings Do You Need at Every Age?',
    description: 'A plain-language guide to common health screenings by age, from blood pressure in your 20s to cancer and bone screenings later in life.',
    url: 'https://opalmedicalgroup.com/blog/which-screenings-do-you-need-at-every-age',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Which Screenings Do You Need at Every Age?',
    description: 'A plain-language guide to common health screenings by age, from blood pressure in your 20s to cancer and bone screenings later in life.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const check = (
  <svg className="w-5 h-5 mt-1 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const tips = [
  'Keep a list of your screenings and the dates they were done.',
  'Share your family history openly, since it can change when screening starts.',
  'Ask which tests are right for you instead of assuming a standard schedule fits.',
  'Do not wait for symptoms. Screening is meant to catch problems early.',
  'Bring up any concern about cost or discomfort so we can talk through options.',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'Browse All Health Resources' },
  { href: '/services', label: 'Services', title: 'Our Primary Care Services' },
  { href: '/contact', label: 'Contact', title: 'Schedule a Preventive Visit' },
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
          <h1 className="font-[Cormorant] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Which Screenings Do You Need at Every Age?</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-which-screenings-do-you-need-at-every-age.jpg"} alt={"Close-up of a doctor examining a patient's throat with a tongue depressor in a clinical setting."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">Most of us feel fine until the day we do not. That is exactly why screenings exist. They look for early signs of a problem before you notice anything, when treatment is often simpler and outcomes are often better. Yet it is easy to lose track of what you need and when. This guide walks through common recommendations by life stage so you can walk into your next visit informed and calm.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">What a Screening Actually Is</h2>
        <p>A screening is a test or exam done in people who have no symptoms, to find a condition early. It is different from a diagnostic test, which investigates a symptom you already have. Recommendations come from groups such as the U.S. Preventive Services Task Force and national medical societies, and they are based on weighing benefits against possible harms like false positives. Because guidelines are updated over time, the schedule below is a general outline, not a personal prescription.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Ages 18 to 39: Building a Baseline</h2>
        <p>Younger adults often skip checkups, but this is when healthy habits and baseline numbers are set. Common screenings include:</p>
        <ul className="my-4 space-y-2">
          <li className="flex gap-3">{check}<span>Blood pressure, generally at least every couple of years and more often if it runs high.</span></li>
          <li className="flex gap-3">{check}<span>Cervical cancer screening for women, usually beginning at age 21.</span></li>
          <li className="flex gap-3">{check}<span>Screening for sexually transmitted infections, based on age and risk.</span></li>
          <li className="flex gap-3">{check}<span>Depression and anxiety check-ins, which matter at every age.</span></li>
          <li className="flex gap-3">{check}<span>Cholesterol and diabetes screening earlier if you have risk factors such as family history or excess weight.</span></li>
        </ul>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Ages 40 to 49: Screening Picks Up</h2>
        <p>This decade is when several routine tests enter the picture. Diabetes screening is commonly recommended starting around age 35 for people who are overweight, and cholesterol testing becomes part of regular care. Many guidelines now recommend that women begin mammograms at 40, though timing is worth discussing based on your own risk. Colorectal cancer screening is recommended to start at 45 for average-risk adults, through options like stool-based tests or colonoscopy.</p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant]">
          Screening is meant to catch problems early, before you notice anything is wrong.
        </blockquote>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Ages 50 to 64: Cancer and Heart Focus</h2>
        <p>Cardiovascular risk rises through midlife, so blood pressure, cholesterol and diabetes checks remain central. Continue colorectal and breast screening as advised. Lung cancer screening with low-dose CT is recommended for adults aged 50 to 80 with a significant smoking history who currently smoke or quit within the past 15 years. Men may want to discuss prostate cancer screening, which is a shared decision because the benefits and drawbacks vary from person to person. Hepatitis C screening is recommended at least once for adults, and many people have never had it.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Ages 65 and Older: Protecting Independence</h2>
        <p>Later in life, screening shifts toward preserving strength, mobility and independence. Bone density testing for osteoporosis is recommended for women at 65, and sometimes sooner for those with risk factors. A one-time ultrasound for abdominal aortic aneurysm is suggested for men aged 65 to 75 who have ever smoked. Falls risk, vision, hearing, memory and mood are all worth reviewing regularly. Your clinician may also adjust or stop certain cancer screenings based on your overall health and life expectancy.</p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Making Screening Work for You</h2>
        <p>No schedule fits everyone. A strong family history, past test results, or conditions like diabetes can move your timeline earlier or call for extra tests. A few practical steps help:</p>
        <ul className="my-4 space-y-2">
          {tips.map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p>If you are unsure what you are due for, a preventive visit is a good place to start. Opal Medical Group in Hagerstown, MD offers preventive and annual health exams and is currently accepting new patients. Call (240) 420-2666 or reach out through our contact page, and we will help you build a screening plan that fits your age, history and goals.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-dark)]">
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
          <h3 className="font-[Cormorant] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 transition hover:shadow-lg">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-[Cormorant] text-2xl text-[var(--color-ink)]">{r.title}</p>
                <span className="inline-block mt-4 text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-dark)]">Read more →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block rounded-full bg-[var(--color-accent)] px-8 py-3 text-white transition hover:bg-[var(--color-accent-dark)]">Contact Us</a>
        </div>
      </section>
    </main>
  )
}