// Written by the MedReception website builder (code, not a model). It lists
// lib/data/blog.ts, which holds exactly the posts that exist, so it cannot link to a
// post that is not there or leave one out.
import type { Metadata } from 'next'
import { BLOG_POSTS } from '../../lib/data/blog'

const TITLE = "Health Articles | Opal Medical Group"
const DESCRIPTION = "Patient education from Opal Medical Group: What to Expect at Your Annual Physical, Which Screenings Do You Need at Every Age?, and more."
const URL = "https://opalmedicalgroup.com/blog"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, siteName: "Opal Medical Group", type: 'website', images: [{ url: "/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg" }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ["/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg"] },
}

export default function BlogIndexPage() {
  const [featured, ...rest] = BLOG_POSTS
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-white/70 mb-4" aria-label="Breadcrumb">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <span>Resources</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light">Health Articles</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mt-4 leading-relaxed">Clear, practical information to help you make informed decisions about your health.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-6">
          {featured ? (
            <a href={'/blog/' + featured.slug} className="group block bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm hover:shadow-xl transition-all duration-300">
              {featured.image ? (
                <div className="w-full -mt-2 mb-8 rounded-xl overflow-hidden bg-[var(--color-light)]">
                  <img src={featured.image.src} alt={featured.image.alt || featured.title} className="block w-full h-auto" />
                </div>
              ) : null}
              <p className="text-xs uppercase tracking-widest text-[var(--color-primary)]">Featured article</p>
              <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mt-3 leading-tight">{featured.title}</h2>
              {featured.excerpt ? <p className="text-[var(--color-muted)] leading-relaxed mt-4 max-w-3xl">{featured.excerpt}</p> : null}
              <span className="inline-block mt-6 text-[var(--color-primary)] font-semibold group-hover:underline">Read article →</span>
            </a>
          ) : (
            <div className="bg-white rounded-2xl p-10 border border-[var(--color-border)] text-center">
              <h2 className="font-cormorant text-3xl text-[var(--color-ink)]">Articles are on the way</h2>
              <p className="text-[var(--color-muted)] mt-3">In the meantime, <a href={"/contact"} className="text-[var(--color-primary)] font-semibold underline">get in touch</a> with any question.</p>
            </div>
          )}
          {rest.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {rest.map((p) => (
                <a key={p.slug} href={'/blog/' + p.slug} className="group block bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  {p.image ? (
                    <div className="w-full bg-[var(--color-light)] overflow-hidden">
                      <img src={p.image.src} alt={p.image.alt || p.title} loading="lazy" className="block w-full h-auto group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  ) : null}
                  <div className="p-8">
                  <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] leading-snug">{p.title}</h2>
                  {p.excerpt ? <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3 line-clamp-3">{p.excerpt}</p> : null}
                  <span className="inline-block mt-5 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">Read article →</span>
                  </div>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </>
  )
}
