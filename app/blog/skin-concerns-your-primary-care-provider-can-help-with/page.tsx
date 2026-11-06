import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skin Concerns Your Primary Care Provider Can Help With',
  description: 'Learn which common skin concerns, from rashes and acne to suspicious moles, your primary care provider can evaluate and treat, and when to seek more care.',
  alternates: { canonical: '/blog/skin-concerns-your-primary-care-provider-can-help-with' },
  openGraph: {
    title: 'Skin Concerns Your Primary Care Provider Can Help With',
    description: 'Learn which common skin concerns, from rashes and acne to suspicious moles, your primary care provider can evaluate and treat, and when to seek more care.',
    url: 'https://opalmedicalgroup.com/blog/skin-concerns-your-primary-care-provider-can-help-with',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skin Concerns Your Primary Care Provider Can Help With',
    description: 'Learn which common skin concerns, from rashes and acne to suspicious moles, your primary care provider can evaluate and treat, and when to seek more care.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

const tips = [
  'Note when the skin change started and whether it has spread, changed shape, or changed color.',
  'Write down any new soaps, detergents, medications, supplements, or plants you were exposed to.',
  'Take dated photos so changes are easy to compare over time.',
  'Bring a list of the creams and treatments you have already tried.',
  'Mention any itching, pain, fever, or other symptoms that came with the skin change.',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'More Patient Education Articles', text: 'Browse our library of health guidance for everyday questions.' },
  { href: '/services', label: 'Services', title: 'Our Primary Care Services', text: 'See the care we offer, from preventive exams to medication management.' },
  { href: '/contact', label: 'Contact', title: 'Schedule a Visit', text: 'Reach out to book an appointment or ask about telehealth visits.' },
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
          <h1 className="font-[Cormorant,serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Skin Concerns Your Primary Care Provider Can Help With</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-skin-concerns-your-primary-care-provider-can-help-with.jpg"} alt={"A woman looks at her skin with concern, touching her chin, worried about acne."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">A new spot, a stubborn rash, or an itch that will not quit can be more than annoying. Skin is the most visible part of your body, and changes to it can affect your comfort, your confidence, and your peace of mind. Many people assume they need a specialist right away, or they wait and hope the problem fades. In reality, a primary care provider is often the best first stop for skin concerns.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Start With Primary Care?</h2>
        <p className="mb-4">Your primary care provider knows your full health picture: your medications, chronic conditions, allergies, and family history. That context matters because skin often reflects what is happening elsewhere in the body. Dry, itchy skin can be linked to thyroid problems, a rash can be a medication reaction, and slow-healing sores can signal blood sugar issues.</p>
        <p className="mb-4">Primary care visits are also easier to get into than many specialty appointments. Many common skin problems can be diagnosed and treated in a single visit, and when a specialist is needed, your provider can guide you toward the right referral.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Skin Conditions We Can Evaluate</h2>
        <p className="mb-4">Primary care providers regularly diagnose and manage a wide range of everyday skin problems, including:</p>
        <ul className="space-y-3 mb-4">
          {['Eczema (atopic dermatitis) and contact dermatitis', 'Acne, including mild to moderate cases', 'Fungal infections such as athlete’s foot, ringworm, and nail fungus', 'Bacterial skin infections like impetigo or cellulitis', 'Hives and allergic skin reactions', 'Shingles and other viral rashes', 'Warts and other common benign growths', 'Insect bites, minor burns, and minor wounds'].map((t) => (
            <li key={t} className="flex gap-3">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Eczema, Rashes, and Itching</h2>
        <p className="mb-4">Eczema is one of the most common chronic skin conditions and affects both children and adults. It tends to cause dry, itchy, inflamed patches that flare and settle. Treatment usually combines gentle skin care, moisturizers applied regularly, trigger avoidance, and sometimes prescription topical medicine. Your provider can help you build a routine that you can actually keep up with.</p>
        <p className="mb-4">Rashes have many causes, including allergies, infections, medications, and irritants. Identifying the cause is the key to treating it well, which is why a careful history and exam matter so much.</p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant,serif] animate-fade-up">
          Skin often reflects what is happening elsewhere in the body.
        </div>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Moles and Skin Cancer Concerns</h2>
        <p className="mb-4">Skin cancer is among the most common cancers, and finding it early makes treatment far more effective. Guidance from dermatology organizations encourages people to watch for the ABCDE signs of melanoma:</p>
        <ul className="space-y-3 mb-4">
          {['Asymmetry: one half does not match the other', 'Border: edges that are irregular or blurred', 'Color: uneven shades of brown, black, red, or white', 'Diameter: larger than about a pencil eraser', 'Evolving: any change in size, shape, color, or symptoms'].map((t) => (
            <li key={t} className="flex gap-3">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="mb-4">If a spot looks suspicious, your primary care provider can examine it and, when appropriate, refer you to a dermatologist for further evaluation or biopsy. Do not wait if a mole is changing, bleeding, or not healing.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">How to Prepare for Your Visit</h2>
        <p className="mb-4">A little preparation helps your provider reach an answer faster:</p>
        <ul className="space-y-3 mb-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="mb-4">For some concerns, a telehealth visit may be a convenient way to show the area on camera and start the conversation. Your provider will tell you if an in-person exam is needed.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Care Quickly</h2>
        <p className="mb-4">Some skin changes need prompt attention. Seek urgent care or emergency help if you have a rapidly spreading red, warm, painful area, a rash with fever, blisters in the mouth or eyes, swelling of the face or lips, or trouble breathing. A painful, blistering rash on one side of the body may be shingles, which is best treated early.</p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Protecting Your Skin Every Day</h2>
        <p className="mb-4">Daily habits make a real difference. Use broad-spectrum sunscreen with SPF 30 or higher, wear protective clothing, avoid tanning beds, moisturize regularly, and check your skin monthly for new or changing spots. These simple steps lower your risk of many skin problems.</p>

        <p className="mt-8">You do not have to live with a skin concern that worries or bothers you. Opal Medical Group in Hagerstown, MD is currently accepting new patients, and you can call (240) 420-2666 to ask about an appointment.</p>
      </article>

      <section className="bg-white">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-dark)]">
            <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
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
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-[Cormorant,serif] text-2xl text-[var(--color-ink)] mb-2">{r.title}</p>
                <p className="text-sm text-[var(--color-muted)]">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant,serif] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}