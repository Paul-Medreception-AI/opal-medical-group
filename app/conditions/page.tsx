// Written by the MedReception website builder (code, not a model). Every card is
// mapped from lib/data/conditions.ts, so a page added there (including by the silo
// builder's data_append) appears here without editing this file.
import type { Metadata } from 'next'
import { CONDITIONS } from '../../lib/data/conditions'

const TITLE = "Conditions We Treat | Opal Medical Group"
const DESCRIPTION = "Conditions treated at Opal Medical Group include Type 2 Diabetes, Prediabetes, Hypertension, High Cholesterol, and more."
const URL = "https://opalmedicalgroup.com/conditions"
const HEADING = "Conditions We Treat"
const SUBHEADING = "Learn about the conditions we help patients manage, and what care for each one looks like."
const CTA = {"href":"/contact","label":"Book Appointment"}
// Pages under /conditions/ that are not in the data file (the data-driven transform left them static).
const EXTRA: { slug: string; title: string; description?: string; image?: { src: string; alt: string } }[] = []

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, siteName: "Opal Medical Group", type: 'website', images: [{ url: "/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg" }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ["/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg"] },
}

type Card = { slug: string; title: string; description?: string; image?: { src: string; alt: string } }

const CARDS: Card[] = [
  ...CONDITIONS.map((x) => ({ slug: x.slug, title: x.title || x.headline || x.slug, description: x.description, image: x.heroImage })),
  ...EXTRA,
]

export default function ConditionsHubPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-white/70 mb-4" aria-label="Breadcrumb">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <span>Conditions</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light">{HEADING}</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mt-4 leading-relaxed">{SUBHEADING}</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARDS.map((c) => (
            <a key={c.slug} href={"/conditions/" + c.slug} className="group block bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {c.image && c.image.src ? (
                <div className="w-full bg-[var(--color-light)] overflow-hidden">
                  <img src={c.image.src} alt={c.image.alt || c.title} loading="lazy" className="block w-full h-auto group-hover:scale-105 transition-transform duration-500" />
                </div>
              ) : null}
              <div className="p-8">
                <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)]">{c.title}</h2>
                {c.description ? <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3 line-clamp-3">{c.description}</p> : null}
                <span className="inline-block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">Learn more →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-6">Have questions about your condition?</h2>
          <a href={CTA.href} className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-xl transition-colors">{CTA.label}</a>
        </div>
      </section>
    </>
  )
}
