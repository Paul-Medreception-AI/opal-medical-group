import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthy Eating for Chronic Condition Management',
  description: 'Learn how everyday food choices can support blood pressure, blood sugar, cholesterol and weight, plus practical tips for eating well with a chronic condition.',
  alternates: { canonical: '/blog/healthy-eating-for-chronic-condition-management' },
  openGraph: {
    title: 'Healthy Eating for Chronic Condition Management',
    description: 'Learn how everyday food choices can support blood pressure, blood sugar, cholesterol and weight, plus practical tips for eating well with a chronic condition.',
    url: 'https://opalmedicalgroup.com/blog/healthy-eating-for-chronic-condition-management',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthy Eating for Chronic Condition Management',
    description: 'Learn how everyday food choices can support blood pressure, blood sugar, cholesterol and weight, plus practical tips for eating well with a chronic condition.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const tips = [
  'Fill half your plate with non-starchy vegetables at lunch and dinner.',
  'Choose whole grains such as oats, brown rice and whole wheat over refined versions.',
  'Pick lean proteins: fish, poultry, beans, lentils and unsalted nuts.',
  'Cook with olive oil or other unsaturated fats rather than butter or shortening.',
  'Read labels for sodium, added sugar and saturated fat.',
  'Drink water or unsweetened beverages instead of sugary drinks.',
]

const related = [
  { href: '/blog', title: 'More Resources from Our Blog', text: 'Browse all of our patient education articles.' },
  { href: '/services', title: 'Our Primary Care Services', text: 'See how ongoing primary care supports chronic conditions.' },
  { href: '/contact', title: 'Contact Our Hagerstown Office', text: 'Ask a question or request an appointment.' },
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
          <h1 className="font-[Cormorant] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Healthy Eating for Chronic Condition Management</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-healthy-eating-for-chronic-condition-management.jpg"} alt={"A senior man supported by a volunteer with groceries at home."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          When you are living with diabetes, high blood pressure, heart disease or another long-term condition, every meal can feel like a test. Maybe you have been handed a list of foods to avoid and left wondering what is actually left to eat. The good news is that food is one of the most powerful tools you have, and managing a chronic condition through eating does not mean giving up everything you enjoy.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Food Matters So Much</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Chronic conditions develop and progress over years, and daily habits influence how they behave. What you eat affects blood sugar, blood pressure, cholesterol, body weight, inflammation and even energy and mood. Because you eat several times a day, small improvements add up in a way that occasional big changes rarely do.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Large bodies of research support this. Eating patterns rich in vegetables, fruits, whole grains, legumes, nuts and fish are consistently linked with lower risk of heart disease and better control of type 2 diabetes. Food works alongside medication and regular medical care, not in place of them.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Benefits From Eating Strategies</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Nearly anyone with a long-term condition can benefit, including people with type 2 diabetes, prediabetes, hypertension, high cholesterol, heart disease, chronic kidney disease, fatty liver disease, obesity and some digestive conditions. The details differ by condition, which is why general advice should be tailored to your own health history, lab results and medications.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Eating Patterns With Good Evidence</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Rather than chasing a trendy diet, look to patterns that have been studied for years.
        </p>
        <ul className="mt-4 space-y-3 text-[var(--color-ink)] leading-loose text-base">
          <li className="flex gap-3">{check}<span><strong>Mediterranean-style eating:</strong> emphasizes olive oil, vegetables, legumes, fish and whole grains, and is associated with better heart health.</span></li>
          <li className="flex gap-3">{check}<span><strong>DASH-style eating:</strong> designed to lower blood pressure by emphasizing produce, low-fat dairy and less sodium.</span></li>
          <li className="flex gap-3">{check}<span><strong>Carbohydrate-aware eating:</strong> for diabetes, focusing on the type, amount and timing of carbohydrates helps steady blood sugar.</span></li>
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant]">
          Small improvements add up in a way that occasional big changes rarely do.
        </div>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Tips for Everyday Meals</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You do not need to overhaul everything at once. Start with one or two changes and build from there.
        </p>
        <ul className="mt-4 space-y-3 text-[var(--color-ink)] leading-loose text-base">
          {tips.map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Planning Ahead Makes It Easier</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Healthy eating is much easier when decisions are made before you are hungry. Plan a few dinners each week, keep simple staples like canned beans, frozen vegetables and plain oats on hand, and prepare extra portions to freeze. Frozen and canned produce is nutritious; just choose low-sodium or no-added-sugar versions when possible. When eating out, look for grilled or baked dishes, ask for dressings on the side and share larger portions.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Be Kind to Yourself</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Perfection is not the goal. Holidays, stress and busy weeks happen. What matters most is the overall pattern across weeks and months. If you slip, simply return to your next meal. Guilt tends to make habits harder to sustain, while steady, realistic changes last.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Some medications interact with foods, and some conditions, such as kidney disease, require specific limits on potassium, phosphorus or protein. Check with your clinician before making major changes, especially if you take insulin or blood pressure medicines, since your dosing may need to be adjusted as your diet improves.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Get Support That Fits You</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Your best eating plan reflects your conditions, culture, budget and preferences. At Opal Medical Group in Hagerstown, MD, our primary care team can talk with you about how nutrition fits into your overall care, and telehealth visits are available for follow-up and medication management. We are currently accepting new patients. Call (240) 420-2666 or reach out through our contact page to start the conversation.
        </p>
      </article>

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

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[Cormorant] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                <h4 className="font-[Cormorant] text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)]">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}