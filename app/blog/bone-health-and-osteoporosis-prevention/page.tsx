import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bone Health and Osteoporosis Prevention',
  description: 'Learn who is at risk for osteoporosis, how nutrition, exercise and screening protect your bones, and when to talk with a primary care provider.',
  alternates: { canonical: '/blog/bone-health-and-osteoporosis-prevention' },
  openGraph: {
    title: 'Bone Health and Osteoporosis Prevention',
    description: 'Learn who is at risk for osteoporosis, how nutrition, exercise and screening protect your bones, and when to talk with a primary care provider.',
    url: 'https://opalmedicalgroup.com/blog/bone-health-and-osteoporosis-prevention',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bone Health and Osteoporosis Prevention',
    description: 'Learn who is at risk for osteoporosis, how nutrition, exercise and screening protect your bones, and when to talk with a primary care provider.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const tips = [
  'Get enough calcium and vitamin D from food first, and ask your provider before starting supplements.',
  'Do weight-bearing and resistance exercise most days of the week.',
  'Avoid smoking and keep alcohol to moderate amounts.',
  'Make your home safer to lower the risk of falls.',
  'Ask when a bone density scan is right for you.',
  'Review your medications with your provider, since some affect bone.',
]

const related = [
  { href: '/blog', title: 'More Resources from Opal Medical Group', text: 'Browse all of our patient education articles.' },
  { href: '/services', title: 'Our Primary Care Services', text: 'Preventive and annual health exams, plus telehealth and medication management.' },
  { href: '/contact', title: 'Schedule a Visit', text: 'Talk with our team about screening and prevention.' },
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
          <h1 className="font-[Cormorant,serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Bone Health and Osteoporosis Prevention</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-bone-health-and-osteoporosis-prevention.jpg"} alt={"Doctor examining a skull X-ray image on a digital tablet indoors."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="mb-6">Most people never think about their bones until one breaks. A small slip, a cough, or a simple step off a curb can lead to a fracture that changes how independent you feel. The encouraging news is that bone loss is often quiet but also often preventable, and the habits that protect your bones can begin at nearly any age.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Osteoporosis?</h2>
        <p className="mb-6">Bone is living tissue. All through life, your body breaks down old bone and builds new bone. In early adulthood you build more than you lose, and bone mass usually peaks around your late twenties or thirties. Later, the balance slowly shifts. Osteoporosis develops when bone loss outpaces bone formation, leaving bones thinner, more porous and more likely to fracture. Osteopenia is the earlier stage, when density is lower than normal but not yet in the osteoporosis range.</p>
        <p className="mb-6">Because it causes no pain on its own, osteoporosis is often called a silent condition. Many people learn they have it only after a fracture of the hip, wrist or spine.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Most at Risk?</h2>
        <p className="mb-4">Anyone can develop weak bones, but certain factors raise the risk:</p>
        <ul className="mb-6 space-y-2 list-disc pl-6">
          <li>Being a woman, especially after menopause when estrogen falls</li>
          <li>Older age, though men are affected too</li>
          <li>A family history of osteoporosis or hip fracture</li>
          <li>A small, thin body frame</li>
          <li>Long-term use of medicines such as corticosteroids</li>
          <li>Conditions such as thyroid disease, celiac disease or rheumatoid arthritis</li>
          <li>Smoking, heavy alcohol use and a sedentary lifestyle</li>
          <li>Low calcium or vitamin D intake over many years</li>
        </ul>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters</h2>
        <p className="mb-6">Fractures from fragile bones are more than an inconvenience. Hip fractures in particular can lead to long recoveries, loss of mobility and a lasting impact on independence. Spinal compression fractures can cause chronic pain, a stooped posture and loss of height. Protecting bone density is really about protecting your ability to walk, garden, travel and care for yourself and the people you love.</p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant,serif]">
          Protecting bone density is really about protecting your ability to walk, garden, travel and care for yourself and the people you love.
        </div>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Tells Us</h2>
        <p className="mb-6">Large bodies of research show that adequate calcium and vitamin D support bone strength, and that regular weight-bearing and resistance exercise helps maintain density and improves balance and muscle strength, which lowers fall risk. Bone density testing, usually a DXA scan, can measure bone mass and help estimate fracture risk. National guidelines generally recommend screening for women 65 and older and for younger postmenopausal women with risk factors, and many guidelines also address screening for men with risk factors. When bone loss is significant, there are prescription treatments that can slow loss or help rebuild bone. Your provider can help you weigh the benefits and risks.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps to Protect Your Bones</h2>
        <p className="mb-4">You do not need a dramatic overhaul. Small, steady habits add up:</p>
        <ul className="mb-6 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="mb-6">Good food sources of calcium include dairy products, fortified alternatives, leafy greens, canned fish with bones and tofu made with calcium. Vitamin D comes from fortified foods, fatty fish and sensible sun exposure, and some people need a supplement. A blood test and a conversation with your provider can show whether that applies to you.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Talk With a Provider</h2>
        <p className="mb-6">Bring up bone health if you are approaching menopause, have broken a bone from a minor fall, have noticed a loss of height, take medicines that affect bone, or have a family history of osteoporosis. A preventive visit is a natural time to review your risk, discuss screening and build a plan that fits your life.</p>
        <p className="mb-6">Opal Medical Group offers preventive and annual health exams, as well as telehealth and medication management, from our office at 1126 Opal Ct, Hagerstown, MD 21740. We are currently accepting new patients. Call us at (240) 420-2666 to start a conversation about keeping your bones strong for the years ahead.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-ink)]">From Opal Medical Group</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[Cormorant,serif] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-[Cormorant,serif] text-2xl text-[var(--color-dark)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm">{r.text}</p>
              </a>
            ))}
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