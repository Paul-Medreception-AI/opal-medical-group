import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="bg-[var(--color-cream)] min-h-screen flex items-center justify-center px-6">
      <div className="text-center animate-fade-up">
        <p className="font-cormorant text-9xl text-[var(--color-primary)] opacity-20 leading-none" aria-hidden="true">
          404
        </p>
        <h1 className="font-cormorant text-4xl text-[var(--color-ink)] mt-4">
          Page Not Found
        </h1>
        <p className="text-[var(--color-muted)] mt-2">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-6 py-3 text-white font-medium transition-colors hover:bg-[var(--color-accent-dark)]"
          >
            <svg className="w-5 h-5" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5" />
            </svg>
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-6 py-3 text-[var(--color-dark)] font-medium transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent-dark)]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}