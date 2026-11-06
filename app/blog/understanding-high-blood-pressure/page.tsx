import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Understanding High Blood Pressure | Opal Medical Group',
  description: 'Learn what high blood pressure is, who it affects, why it matters, and practical steps to lower your risk. Patient education from Opal Medical Group.',
  alternates: { canonical: '/blog/understanding-high-blood-pressure' },
  openGraph: {
    title: 'Understanding High Blood Pressure | Opal Medical Group',
    description: 'Learn what high blood pressure is, who it affects, why it matters, and practical steps to lower your risk. Patient education from Opal Medical Group.',
    url: 'https://opalmedicalgroup.com/blog/understanding-high-blood-pressure',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Understanding High Blood Pressure | Opal Medical Group',
    description: 'Learn what high blood pressure is, who it affects, why it matters, and practical steps to lower your risk. Patient education from Opal Medical Group.',
    images: ['/images/stock/hero-home.jpg'],
  },
}

const tips = [
  'Check your blood pressure regularly, at the office and, if advised, at home.',
  'Choose meals rich in vegetables, fruit, whole grains, beans and lean protein.',
  'Limit sodium by cooking at home and reading food labels.',
  'Move your body for about 150 minutes a week, as your health allows.',
  'Keep a healthy weight; even modest weight loss can lower pressure.',
  'Limit alcohol, avoid tobacco, and make time to manage stress and sleep.',
  'Take prescribed medications exactly as directed and ask before stopping any.',
]

const related = [
  { href: '/blog', title: 'Resources Hub', text: 'Browse all patient education articles from our team.' },
  { href: '/services', title: 'Our Primary Care Services', text: 'See the care we offer, from annual exams to medication management.' },
  { href: '/contact', title: 'Schedule a Visit', text: 'Talk with us about your blood pressure and overall health.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-understanding-high-blood-pressure.jpg" alt="A healthcare professional checks a patient's blood pressure in a clinic in Lagos, Nigeria.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Understanding High Blood Pressure</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You may feel perfectly fine and still have a number on a cuff that deserves attention. High blood pressure rarely announces itself, which is exactly why it matters so much. The good news is that once you understand it, there is a great deal you can do, and you do not have to do it alone.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is High Blood Pressure?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Blood pressure is the force of blood pushing against the walls of your arteries as your heart pumps. It is written as two numbers. The top number (systolic) measures pressure when the heart beats, and the bottom number (diastolic) measures pressure between beats. Under current American guidelines, a reading below 120/80 mmHg is considered normal, and hypertension is generally diagnosed when readings are consistently 130/80 mmHg or higher.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          A single high reading does not always mean you have hypertension. Stress, caffeine, pain, or a rushed trip to the office can raise numbers temporarily. Clinicians typically look at readings taken on more than one occasion before making a diagnosis.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          High blood pressure is very common. The Centers for Disease Control and Prevention estimates that roughly half of adults in the United States have it, and many do not have it under control. Risk rises with age, but younger adults are affected too. Factors that raise your risk include:
        </p>
        <ul className="mt-4 space-y-2 text-[var(--color-ink)] leading-loose text-base list-disc pl-6">
          <li>A family history of hypertension</li>
          <li>Excess weight or low physical activity</li>
          <li>A diet high in sodium and low in potassium</li>
          <li>Heavy alcohol use or tobacco use</li>
          <li>Diabetes, kidney disease, or sleep apnea</li>
          <li>Chronic stress and poor sleep</li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Often called the &quot;silent&quot; condition, hypertension usually causes no symptoms until damage has occurred. Over time, constant extra pressure can injure artery walls and make the heart work harder. Left uncontrolled, it increases the risk of heart attack, stroke, heart failure, kidney disease, vision problems, and cognitive decline.
        </p>
        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Once you understand it, there is a great deal you can do, and you do not have to do it alone.
        </blockquote>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Severe symptoms such as chest pain, shortness of breath, sudden vision changes, confusion, or weakness on one side of the body with very high readings are an emergency. Call 911 right away.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Shows</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Large clinical trials have shown that lowering blood pressure reduces the risk of cardiovascular events. The SPRINT trial, published in 2015, found that adults at high risk who aimed for a systolic target of 120 had fewer heart attacks, strokes and heart failure events than those aiming for 140. The DASH eating pattern, which emphasizes fruits, vegetables, low-fat dairy and whole grains, has been shown to lower blood pressure within weeks, and reducing sodium adds to the effect.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Lifestyle changes are the foundation of care, and many people also benefit from medication. Several well-studied drug classes are available, and the right choice depends on your health history, other conditions, and how you respond.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Take</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Small, steady habits make the biggest difference. Consider these starting points:
        </p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Measuring at Home</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Home readings can give a fuller picture than occasional office checks. Use a validated upper-arm cuff in the right size, sit quietly for five minutes with your back supported and feet flat, and rest your arm at heart level. Avoid caffeine, exercise and tobacco for 30 minutes beforehand. Record your readings and share them at your visits.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Getting Support</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you have not had your blood pressure checked recently, or your numbers have been running high, now is a good time to talk with a clinician. At Opal Medical Group in Hagerstown, MD, our primary care team offers preventive and annual health exams as well as telehealth and medication management, and we are currently welcoming new patients. Call us at (240) 420-2666 or reach out through our contact page to get started.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
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
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5M6.75 12h10.5" />
                </svg>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full font-medium">Contact Us</a>
        </div>
      </section>
    </main>
  )
}