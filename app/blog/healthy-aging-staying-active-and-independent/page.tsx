import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Healthy Aging: Staying Active and Independent',
  description: 'Practical, evidence-based ways to stay strong, active and independent as you age, from movement and nutrition to prevention and regular primary care.',
  alternates: { canonical: '/blog/healthy-aging-staying-active-and-independent' },
  openGraph: {
    title: 'Healthy Aging: Staying Active and Independent',
    description: 'Practical, evidence-based ways to stay strong, active and independent as you age, from movement and nutrition to prevention and regular primary care.',
    url: 'https://opalmedicalgroup.com/blog/healthy-aging-staying-active-and-independent',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthy Aging: Staying Active and Independent',
    description: 'Practical, evidence-based ways to stay strong, active and independent as you age, from movement and nutrition to prevention and regular primary care.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const tips = [
  'Aim for about 150 minutes a week of moderate activity, such as brisk walking',
  'Add strength training on two or more days each week',
  'Practice balance exercises several times a week',
  'Keep up with vaccines, screenings and annual health exams',
  'Review all medications and supplements with your clinician at least once a year',
  'Stay socially connected and keep your mind engaged',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'More Patient Education Articles', text: 'Browse all of our health education articles for patients and families.' },
  { href: '/services', label: 'Services', title: 'Our Primary Care Services', text: 'Learn about preventive care, annual exams and ongoing health management.' },
  { href: '/contact', label: 'Contact', title: 'Schedule a Visit', text: 'Reach out to our Hagerstown office to ask about becoming a new patient.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-healthy-aging-staying-active-and-independent.jpg" alt="Elderly man in blue shirt lifting dumbbells near laptop, embracing home fitness.">
        <div>
          <p className="text-sm text-white/80 mb-4">
            <a href="/" className="hover:underline">Home</a> › <a href="/blog" className="hover:underline">Resources</a> › Article
          </p>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Healthy Aging: Staying Active and Independent</h1>
          <p className="mt-6 text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Almost everyone shares the same hope for the later decades of life: to keep doing the things that matter, in the places we love, on our own terms. Whether that means gardening, traveling, playing with grandchildren or simply living in your own home, independence is deeply tied to dignity and happiness. The encouraging news is that much of how we age is shaped by daily habits and steady preventive care, and it is rarely too late to begin.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Healthy Aging Really Means</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Healthy aging does not mean avoiding every health problem or looking younger. It means preserving the physical ability, mental sharpness and emotional well-being you need to live fully. Many people manage chronic conditions such as high blood pressure, diabetes or arthritis and still stay active and independent. The goal is to protect function: walking confidently, managing daily tasks, thinking clearly and staying connected to others.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Movement Matters So Much</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Starting around midlife, adults gradually lose muscle mass and strength unless they work to maintain them. This loss, called sarcopenia, can make stairs, grocery bags and getting out of a chair harder. Research consistently shows that regular physical activity lowers the risk of heart disease, type 2 diabetes, depression, some cancers and falls. Public health guidelines recommend at least 150 minutes of moderate aerobic activity weekly for older adults, plus muscle-strengthening activity on two or more days.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Balance training is just as important. Falls are a leading cause of injury among older adults, and exercises such as standing on one foot, heel-to-toe walking, tai chi and gentle yoga have been shown to reduce fall risk. If you have not exercised in a while, start slowly and talk with your clinician first, especially if you have heart disease, joint problems or dizziness.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          It is rarely too late to begin.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Nutrition, Sleep and Mental Health</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Eating patterns rich in vegetables, fruits, whole grains, beans, nuts, fish and olive oil, such as the Mediterranean diet, are linked to better heart health and may support brain health. Adequate protein helps preserve muscle, and staying hydrated matters because the sense of thirst can fade with age. Sleep also changes, but persistent insomnia, loud snoring or daytime exhaustion deserve attention rather than being dismissed as normal aging.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Emotional health is part of physical health. Loneliness and isolation are associated with higher risks of heart disease and cognitive decline. Regular contact with friends, family, faith communities, volunteer work or hobby groups all help. Feeling persistently sad, anxious or withdrawn is not something you have to accept; it is treatable.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">The Role of Preventive Primary Care</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Regular visits with a primary care clinician let small concerns be caught early. Depending on your age and history, this may include blood pressure and cholesterol checks, diabetes screening, cancer screenings, bone density testing, vision and hearing checks, memory screening and recommended vaccines such as influenza, pneumococcal, shingles and COVID-19. Medication review is especially valuable: the more prescriptions and supplements someone takes, the greater the chance of side effects or interactions that cause dizziness, confusion or falls.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Start Today</h2>
        <ul className="space-y-3 my-6">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <Check />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Making your home safer also helps: good lighting, removing loose rugs, installing grab bars and wearing supportive footwear all lower the chance of a fall. Do not smoke, and limit alcohol, which affects balance and interacts with many medications.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Talk With a Clinician</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Reach out if you notice unexplained weight loss, a fall or near-fall, new memory trouble, ongoing fatigue, changes in mood, or difficulty with everyday tasks. These are not simply &quot;part of getting older,&quot; and many have treatable causes. Seek emergency care right away for chest pain, sudden weakness, trouble speaking or severe shortness of breath.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Opal Medical Group offers preventive and annual health exams, medication management and telehealth visits from our office at 1126 Opal Ct, Hagerstown, MD, and we are currently accepting new patients. Call (240) 420-2666 to start a conversation about your goals for staying active and independent.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
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

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
              <p className="text-[var(--color-muted)] text-sm">{r.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}