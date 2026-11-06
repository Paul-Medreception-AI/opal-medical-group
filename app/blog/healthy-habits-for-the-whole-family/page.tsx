import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthy Habits for the Whole Family | Opal Medical Group',
  description: 'Simple, evidence-based habits for sleep, nutrition, movement, screen time and preventive care that help every member of your family stay healthy.',
  alternates: { canonical: '/blog/healthy-habits-for-the-whole-family' },
  openGraph: {
    title: 'Healthy Habits for the Whole Family | Opal Medical Group',
    description: 'Simple, evidence-based habits for sleep, nutrition, movement, screen time and preventive care that help every member of your family stay healthy.',
    url: 'https://opalmedicalgroup.com/blog/healthy-habits-for-the-whole-family',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthy Habits for the Whole Family | Opal Medical Group',
    description: 'Simple, evidence-based habits for sleep, nutrition, movement, screen time and preventive care that help every member of your family stay healthy.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const Check = () => (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const tips1 = [
  'Fill half of each plate with vegetables or fruit, and let children help choose them.',
  'Keep water as the default drink and save sugary drinks for occasional treats.',
  'Eat together when you can, even if it is only a few evenings a week.',
  'Keep simple, ready-to-eat options like fruit, yogurt and nuts (for older children) within reach.',
]
const tips2 = [
  'Set a consistent bedtime and wake time, including weekends where possible.',
  'Keep screens out of bedrooms overnight.',
  'Build a short wind-down routine: dim lights, a bath, a book.',
  'Model the habit yourself. Children copy what they see.',
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
          <h1 className="font-[Cormorant,serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Healthy Habits for the Whole Family</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-healthy-habits-for-the-whole-family.jpg"} alt={"A young girl with curly hair brushes her teeth at a sink, promoting dental hygiene."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 animate-fade-up">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Every parent knows the feeling: a packed schedule, a tired child, a drive-thru line that looks easier than cooking. Most of us want our families to be healthy, yet daily life makes it hard. The good news is that lasting health rarely comes from dramatic changes. It comes from small, repeatable habits that the whole household shares, and those habits can shape wellbeing for decades.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Family Habits Matter</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Children learn far more from what they see than from what they are told. Research consistently shows that eating patterns, activity levels and sleep routines formed in childhood often carry into adulthood. When habits are shared across a household, they are also easier to maintain, because no one is trying to change alone.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Healthy routines help lower the risk of conditions such as type 2 diabetes, high blood pressure, obesity and depression. They affect adults and children alike, from toddlers to grandparents. Starting where you are, at any age, still makes a difference.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Build Balanced Eating Habits</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          You do not need a perfect diet. Aim for a variety of whole foods: vegetables, fruits, whole grains, beans, lean proteins and healthy fats. Avoid labeling foods as &quot;good&quot; or &quot;bad,&quot; which can create an unhealthy relationship with eating.
        </p>
        <ul className="space-y-3">
          {tips1.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base"><Check />{t}</li>
          ))}
        </ul>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Make Movement Part of the Day</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          National guidelines recommend about 60 minutes of physical activity a day for children and adolescents, and at least 150 minutes of moderate activity a week for adults. That sounds like a lot, but it does not have to be a gym session. Walks after dinner, bike rides, dancing in the kitchen, playground time and weekend hikes all count.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Choose activities your family actually enjoys. Fun is the most reliable motivator, and movement together builds connection as well as strength.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant,serif]">
          Lasting health rarely comes from dramatic changes; it comes from small, repeatable habits that the whole household shares.
        </div>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Protect Sleep for Every Age</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Sleep supports growth, learning, mood, immunity and weight regulation. School-age children generally need 9 to 12 hours, teenagers 8 to 10, and most adults 7 or more. Poor sleep is linked to trouble concentrating, irritability and higher long-term health risks.
        </p>
        <ul className="space-y-3">
          {tips2.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base"><Check />{t}</li>
          ))}
        </ul>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Balance Screen Time and Stress</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Screens are part of modern life, but heavy use can crowd out sleep, activity and face-to-face time. Consider a family media plan: device-free meals, clear limits on recreational use, and shared time offline. Pay attention to emotional health too. Check in regularly, listen without rushing to fix, and notice changes such as withdrawal, ongoing sadness, or trouble sleeping. These are worth discussing with a clinician.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Don&apos;t Skip Preventive Care</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Habits at home work best alongside regular preventive care. Annual checkups allow your clinician to track growth and blood pressure, review vaccinations, screen for conditions early, and answer questions about nutrition, sleep and mood. Catching a concern early is almost always easier than addressing it later.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Start Small, Stay Consistent</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Pick one habit this week, such as a family walk or a consistent bedtime, and practice it until it feels natural before adding another. Expect off days. Progress is built on returning to the routine, not on perfection.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          If you would like personalized guidance, Opal Medical Group in Hagerstown, MD is currently accepting new patients, and telehealth visits are available. Call (240) 420-2666 to talk about a plan that fits your family.
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
          <h3 className="font-[Cormorant,serif] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/services" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-[Cormorant,serif] text-2xl text-[var(--color-ink)] mb-2">Preventive &amp; Annual Health Exams</h4>
              <p className="text-sm text-[var(--color-muted)]">Learn how regular checkups support long-term health.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-[Cormorant,serif] text-2xl text-[var(--color-ink)] mb-2">Telehealth &amp; Medication Management</h4>
              <p className="text-sm text-[var(--color-muted)]">Care from home when an in-person visit is not needed.</p>
            </a>
            <a href="/blog" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-[Cormorant,serif] text-2xl text-[var(--color-ink)] mb-2">Resources Hub</h4>
              <p className="text-sm text-[var(--color-muted)]">Browse all patient education articles.</p>
            </a>
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