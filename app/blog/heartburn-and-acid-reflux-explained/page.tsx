import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Heartburn and Acid Reflux Explained | Opal Medical Group',
  description: 'Learn what causes heartburn and acid reflux, who is affected, when to seek care, and practical steps that can ease symptoms. From Opal Medical Group.',
  alternates: { canonical: '/blog/heartburn-and-acid-reflux-explained' },
  openGraph: {
    title: 'Heartburn and Acid Reflux Explained | Opal Medical Group',
    description: 'Learn what causes heartburn and acid reflux, who is affected, when to seek care, and practical steps that can ease symptoms. From Opal Medical Group.',
    url: 'https://opalmedicalgroup.com/blog/heartburn-and-acid-reflux-explained',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heartburn and Acid Reflux Explained | Opal Medical Group',
    description: 'Learn what causes heartburn and acid reflux, who is affected, when to seek care, and practical steps that can ease symptoms. From Opal Medical Group.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const tips = [
  'Eat smaller meals and avoid lying down for two to three hours afterward.',
  'Notice your personal triggers, which often include fatty or fried foods, chocolate, caffeine, alcohol, mint, citrus, tomato and spicy dishes.',
  'Raise the head of your bed six to eight inches if symptoms strike at night.',
  'Work toward a healthy weight if extra weight is adding pressure on your abdomen.',
  'Quit smoking, which relaxes the valve between the esophagus and stomach.',
  'Wear looser clothing around the waist.',
]

const related = [
  { href: '/blog', label: 'Blog', title: 'More Patient Resources', text: 'Browse all of our patient education articles.' },
  { href: '/services', label: 'Services', title: 'Primary Care Services', text: 'See how we support everyday and long-term health.' },
  { href: '/contact', label: 'Contact', title: 'Schedule a Visit', text: 'Talk with our team about persistent symptoms.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-heartburn-and-acid-reflux-explained.jpg" alt="Close-up of a red stethoscope symbolizing medical care and healthcare diagnostics.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Heartburn and Acid Reflux Explained</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">That burning feeling behind your breastbone after dinner, the sour taste creeping into your throat, the night you cannot get comfortable lying flat: heartburn is easy to dismiss as a minor annoyance, yet it can wear down your sleep, your meals and your peace of mind. You are far from alone, and there are real, practical ways to feel better.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Are Heartburn and Acid Reflux?</h2>
        <p>Acid reflux happens when stomach contents flow backward into the esophagus, the tube that carries food from your mouth to your stomach. At the bottom of the esophagus sits a ring of muscle called the lower esophageal sphincter. It normally opens to let food in and closes to keep acid out. When it relaxes at the wrong time or is weak, acid escapes upward.</p>
        <p className="mt-4">Heartburn is the symptom most people notice: a burning discomfort in the chest, often after eating, when bending over or when lying down. Reflux can also cause regurgitation of a sour or bitter liquid, a lump-in-the-throat sensation, a chronic cough, hoarseness or throat clearing.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p>Occasional heartburn is very common among adults, and many people experience it at least once a month. Certain factors raise the likelihood of symptoms:</p>
        <ul className="mt-4 space-y-2 list-disc pl-6">
          <li>Excess weight, especially around the midsection</li>
          <li>Pregnancy, due to hormonal changes and pressure on the stomach</li>
          <li>Smoking or exposure to secondhand smoke</li>
          <li>A hiatal hernia, where part of the stomach pushes up through the diaphragm</li>
          <li>Certain medications, including some anti-inflammatory pain relievers and blood pressure drugs</li>
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant animate-fade-up">
          Occasional heartburn is very common among adults, and many people experience it at least once a month.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When Reflux Becomes GERD</h2>
        <p>When reflux occurs frequently, generally more than twice a week, or causes ongoing symptoms, it may be diagnosed as gastroesophageal reflux disease, or GERD. Research shows that long-term, untreated acid exposure can inflame the esophagus (esophagitis), cause narrowing or scarring, and in some people lead to changes in the esophageal lining known as Barrett's esophagus. Most people with reflux never develop these complications, but persistent symptoms deserve a conversation with a clinician rather than years of self-treatment.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps That Can Help</h2>
        <p>Studies consistently support lifestyle changes as a first step, and they are often effective on their own for mild symptoms.</p>
        <ul className="mt-4 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>
        <p className="mt-4">Over-the-counter antacids can offer quick, short-term relief. Other medicines, such as H2 blockers and proton pump inhibitors, reduce acid production and are widely used, but they work best when matched to your situation and used for the right length of time. Talk with a clinician before taking them regularly.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Warning Signs You Should Not Ignore</h2>
        <p>Chest pain can also signal a heart problem. Seek emergency care right away for chest pressure with shortness of breath, sweating, or pain spreading to the arm or jaw. Schedule an appointment promptly if you have:</p>
        <ul className="mt-4 space-y-3">
          {[
            'Difficulty or pain when swallowing',
            'Unexplained weight loss or loss of appetite',
            'Vomiting, especially with blood, or black, tarry stools',
            'Symptoms that continue despite lifestyle changes or medication',
            'Heartburn that has lasted several weeks',
          ].map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Getting Help</h2>
        <p>You do not have to simply live with reflux. A primary care visit can sort out whether your symptoms are typical heartburn, GERD or something else, review your medications, and build a plan that fits your daily life. Opal Medical Group in Hagerstown, MD is currently taking new patients, and telehealth visits are available for many concerns. Call (240) 420-2666 or reach out through our contact page to get started.</p>
      </article>

      <section className="max-w-3xl mx-auto px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 my-12 flex gap-6 items-start animate-fade-up">
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
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</p>
                <p className="text-[var(--color-muted)] text-sm">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}