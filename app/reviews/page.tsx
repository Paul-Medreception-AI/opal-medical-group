import type { Metadata } from 'next'
import Link from 'next/link'
import SplitHero from '@/components/SplitHero'

const TITLE = 'Patient Reviews | Opal Medical Group, Hagerstown'
const DESCRIPTION = 'Read what patients say about Opal Medical Group in Hagerstown, MD, in their own words from Google, and share your own experience.'
const HERO = { src: '/images/stock/hub-reviews.jpg', alt: 'A bright clinic reception where patients check in with staff' }

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/reviews' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://opalmedicalgroup.com/reviews', siteName: 'Opal Medical Group', type: 'website', images: [{ url: HERO.src }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO.src] },
}

// Verbatim Google reviews of Opal Medical Group (Google Business Profile, pulled 2026-11-06),
// names as shown on Google. Nothing is edited or invented; the full listing is linked below.
const PLACE_ID = 'ChIJExicj97syYkRi8rwcgWw0r4'
const READ_URL = 'https://www.google.com/maps/search/?api=1&query=Opal%20Medical%20Group&query_place_id=' + PLACE_ID
const WRITE_URL = 'https://search.google.com/local/writereview?placeid=' + PLACE_ID

const reviews = [
  { name: 'Ellie Hutzell', when: 'Google review', text: 'The office staff and providers are great.  Love walking into a office were the staff is so nice and helpful. Yi Vance is a great provider she always listens to the patients and goes out of her way. Great practice always a happy staff.' },
  { name: 'Molly Love', when: 'Google review', text: 'I have been seeing NP Vance every 3 months for almost a year now, and she takes excellent care of my needs. Always listens to my concerns, addresses them within the visit, and genuinely cares how I am doing. Highly recommend Opal Medical group! Scheduling is also always simple, I never have to wait long to be seen once I arrive. 10/10' },
  { name: 'Shelly Barnhart', when: 'Google review', text: 'I have been a patient at Opal Medical Group for probably 25 hrs. Or more. I hav always been taken care of very well through the year. The staff & Doctor\'s, Nurse Practitioners have all been great. I have never been mistreated.' },
]

const Stars = () => (
  <div className="flex gap-1 text-[var(--color-primary)]" aria-label="5 out of 5 stars">
    {[0, 1, 2, 3, 4].map((i) => (<svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" /></svg>))}
  </div>
)

export default function ReviewsPage() {
  return (
    <main>
      <SplitHero src={HERO.src} alt={HERO.alt}>
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/80">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span>Patient Reviews</span>
        </nav>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light leading-tight">Patient Reviews</h1>
        <p className="mt-5 max-w-xl text-lg sm:text-xl text-white/85 leading-relaxed">In patients&apos; own words, from Google. We read every review and welcome yours.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={WRITE_URL} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-7 py-3.5 rounded-xl font-semibold transition-colors">Leave a Google Review</a>
          <a href={READ_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors">Read All Reviews</a>
        </div>
      </SplitHero>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure key={r.name} className="bg-white border border-[var(--color-border)] rounded-2xl p-7 shadow-sm">
              <Stars />
              <blockquote className="text-[var(--color-ink)] leading-relaxed mt-4">“{r.text}”</blockquote>
              <figcaption className="text-sm text-[var(--color-muted)] mt-4">{r.name} · {r.when}</figcaption>
            </figure>
          ))}
        </div>
        <p className="text-center text-sm text-[var(--color-muted)] mt-10 px-6">These are a selection of public Google reviews, shown as written. <a href={READ_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-semibold hover:underline">See every review on Google →</a></p>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Been a patient? Tell us how it went.</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mt-4">A Google review helps neighbours in Hagerstown find a primary care home. If something did not go well, please call the office at (240) 420-2666 first so we can put it right.</p>
          <a href={WRITE_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-8 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full font-medium transition-colors">Write a Review on Google</a>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light">Ready to become a patient?</h2>
          <p className="text-white/80 mt-4">Opal Medical Group is accepting new patients. Call (240) 420-2666 or send us a request online.</p>
          <Link href="/contact#form" data-ga="consultation_click" className="inline-block mt-8 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full font-medium transition-colors">Book Appointment</Link>
        </div>
      </section>
    </main>
  )
}
