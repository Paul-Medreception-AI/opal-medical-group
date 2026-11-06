import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Managing Asthma Through the Seasons | Opal Medical Group',
  description: 'Learn how seasonal triggers affect asthma and practical steps to keep symptoms controlled all year, from spring pollen to winter cold air.',
  alternates: { canonical: '/blog/managing-asthma-through-the-seasons' },
  openGraph: {
    title: 'Managing Asthma Through the Seasons | Opal Medical Group',
    description: 'Learn how seasonal triggers affect asthma and practical steps to keep symptoms controlled all year, from spring pollen to winter cold air.',
    url: 'https://opalmedicalgroup.com/blog/managing-asthma-through-the-seasons',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managing Asthma Through the Seasons | Opal Medical Group',
    description: 'Learn how seasonal triggers affect asthma and practical steps to keep symptoms controlled all year, from spring pollen to winter cold air.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const tips = [
  'Keep a written asthma action plan and review it at least once a year.',
  'Use controller medicines as prescribed, even when you feel well.',
  'Carry your rescue inhaler everywhere, and check its expiration date.',
  'Track symptoms and peak flow readings to spot patterns early.',
  'Get an annual flu vaccine and ask which other vaccines are right for you.',
  'Wash bedding weekly in hot water and use allergen-proof covers.',
]

const related = [
  { title: 'Preventive and Annual Health Exams', href: '/services', desc: 'See how routine visits support long-term health.' },
  { title: 'Telehealth and Medication Management', href: '/services', desc: 'Learn about video visits and medication reviews.' },
  { title: 'More Patient Resources', href: '/blog', desc: 'Browse all of our patient education articles.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-managing-asthma-through-the-seasons.jpg" alt="Close-up of an adult using an inhaler for asthma management.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white">Home</a> › <a href="/blog" className="hover:text-white">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Managing Asthma Through the Seasons</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          The first warm day of spring should feel like a gift. For many people with asthma, it can also bring a tight chest, a nagging cough, and a worry about what the next breath will feel like. Asthma does not stay the same all year. It shifts with pollen, humidity, cold air, and the viruses that circulate each season. The good news is that when you understand your patterns, you can plan ahead and breathe with more confidence.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What asthma is and who it affects</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Asthma is a chronic condition in which the airways become inflamed and narrow, and the muscles around them can tighten. This leads to wheezing, shortness of breath, chest tightness, and coughing, often worse at night or early in the morning. It affects children and adults of every age. Some people have allergic asthma, which is tied to allergens such as pollen or dust mites. Others notice symptoms mainly with exercise, infections, or irritants such as smoke.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why seasons matter</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Airways that are already inflamed react strongly to triggers. Because many triggers follow the calendar, symptoms often do too. Research consistently links seasonal changes in allergens and respiratory infections with increases in asthma flares and urgent visits. Knowing which season affects you most lets you adjust treatment before symptoms take hold rather than after.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Spring and summer: pollen, mold, heat, and air quality</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Tree pollen peaks in spring, grass pollen in late spring and early summer, and weed pollen in late summer and fall. Thunderstorms can break pollen into smaller particles that reach deep into the lungs. Warm, damp weather encourages mold growth, and hot days can raise ozone and other pollutants that irritate the airways.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Helpful steps include checking daily pollen and air quality forecasts, keeping windows closed on high-pollen days, showering and changing clothes after time outdoors, and exercising when air quality is better. If allergies play a role, treating nasal symptoms can also help your chest.
        </p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Airways that are already inflamed react strongly to triggers.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Fall and winter: viruses, cold air, and indoor triggers</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Respiratory viruses, including colds, flu, and COVID-19, are among the most common causes of asthma flares, and they spread more easily as people gather indoors. Cold, dry air can also tighten the airways, especially during exercise. Indoors, heating systems stir up dust, and dust mites, pet dander, and mold can build up in closed homes.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Wearing a scarf loosely over your nose and mouth outside can warm the air you breathe. Frequent handwashing, staying current on recommended vaccines, and replacing furnace filters on schedule all help. Avoid wood smoke when you can, and never use unvented fuel-burning heaters indoors.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Year-round habits that make a difference</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Guidelines from groups such as the Global Initiative for Asthma emphasize regular follow-up, correct inhaler technique, and a personalized written plan. These habits work in every season:
        </p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              {check}
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to get help right away</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Seek emergency care if your rescue inhaler gives little or no relief, you struggle to speak in full sentences, your lips or fingernails look blue or gray, or breathing becomes rapidly harder. Call your clinician soon if you need your rescue inhaler more often than usual, wake at night with symptoms, or miss work or school because of your breathing.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Build a plan with your care team</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Asthma care works best as an ongoing partnership. A primary care visit is a good time to review your triggers, check how you use your inhaler, update your action plan, and talk through how your medicines may need to change with the seasons. Opal Medical Group in Hagerstown, MD offers telehealth and medication management, and is currently accepting new patients. Call (240) 420-2666 to start the conversation.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-dark)]">
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
            <a key={r.title} href={r.href} className="animate-fade-up block bg-white rounded-2xl border border-[var(--color-border)] p-6 transition hover:shadow-lg">
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
              <p className="text-[var(--color-muted)] text-sm mb-4">{r.desc}</p>
              <span className="text-[var(--color-accent)] text-sm">Read more →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition">Contact Us</a>
        </div>
      </section>
    </main>
  )
}