// Written by the MedReception website builder (code, not a model). It lists
// lib/data/blog.ts, which holds exactly the posts that exist, so it cannot link to a
// post that is not there or leave one out.
import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'
import Image from 'next/image'
import { focus } from '@/lib/imageFocus'
import { BLOG_POSTS } from '../../lib/data/blog'

const TITLE = "Health Articles | Opal Medical Group"
const DESCRIPTION = "Patient education from Opal Medical Group: What to Expect at Your Annual Physical, Which Screenings Do You Need at Every Age?, and more."
const URL = "https://opalmedicalgroup.com/blog"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, siteName: "Opal Medical Group", type: 'website', images: [{ url: "/images/stock/hero-home.jpg" }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ["/images/stock/hero-home.jpg"] },
}

export default function BlogIndexPage() {
  const [featured, ...rest] = BLOG_POSTS
  return (
    <>
      <SplitHero src="/images/stock/hub-blog.jpg" alt="A clinician writes notes during a consultation">
        <div>
          <nav className="text-sm text-white/70 mb-4" aria-label="Breadcrumb">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <span>Resources</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light">Health Articles</h1>
          <p className="text-xl text-white/85 max-w-2xl mt-4 leading-relaxed">Clear, practical information to help you make informed decisions about your health.</p>
        </div>
      </SplitHero>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-6">
          {featured ? (
            <a href={'/blog/' + featured.slug} className="group block bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm hover:shadow-xl transition-all duration-300">
              {featured.image ? (
                <div className="relative h-64 sm:h-80 lg:h-full min-h-[16rem] bg-[var(--color-light)] overflow-hidden">
                  <Image src={featured.image.src} alt={featured.image.alt || featured.title} fill priority sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" style={{ objectPosition: focus(featured.image.src) }} />
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
                    <div className="relative h-48 bg-[var(--color-light)] overflow-hidden">
                  <Image src={p.image.src} alt={p.image.alt || p.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px" className="object-cover group-hover:scale-105 transition-transform duration-500" style={{ objectPosition: focus(p.image.src) }} />
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
