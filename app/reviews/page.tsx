import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Patient Reviews | Opal Medical Group Hagerstown',
  description: 'Share your experience with Opal Medical Group, a primary care practice in Hagerstown, MD. We welcome your feedback and appreciate hearing from you.',
  alternates: { canonical: '/reviews' },
  openGraph: {
    title: 'Patient Reviews | Opal Medical Group Hagerstown',
    description: 'Share your experience with Opal Medical Group, a primary care practice in Hagerstown, MD. We welcome your feedback and appreciate hearing from you.',
    url: 'https://opalmedicalgroup.com/reviews',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Reviews | Opal Medical Group Hagerstown',
    description: 'Share your experience with Opal Medical Group, a primary care practice in Hagerstown, MD. We welcome your feedback and appreciate hearing from you.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

export default function ReviewsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h1 className="font-[Cormorant_Garamond,serif] text-5xl font-light mb-6">Patient Reviews</h1>
          <p className="text-lg text-white/90">
            Your experience matters to us, and we welcome hearing how your care has gone.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center animate-fade-up">
          {/* TODO(optimize): drop in real Google/Healthgrades reviews here once available */}
          <svg className="w-8 h-8 mx-auto mb-6 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 4.418-4.03 8-9 8a9.9 9.9 0 01-3.6-.67L3 21l1.4-4.2A7.6 7.6 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl text-[var(--color-ink)] mb-4">We&apos;d Love Your Feedback</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-8">
            If you have been a patient at Opal Medical Group, we would be grateful to hear about your visit. Your comments help us keep improving the care we offer to Hagerstown families. Reach out to us and tell us how we are doing.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl font-light mb-4">Ready to Become a Patient?</h2>
          <p className="text-white/90 mb-8">
            Opal Medical Group is currently accepting new patients. Call (240) 420-2666 or send us a request online.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-dark)] hover:bg-[var(--color-light)] px-8 py-3 rounded-full font-medium transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}