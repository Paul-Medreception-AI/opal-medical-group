// Written by the MedReception website builder from the site's final route set
// (code, not a model). Server component: the dropdowns open on CSS :hover and
// :focus-within, the mobile menu is a <details> element, so it needs no client JS.
// The full menu shows from the xl breakpoint (1280px) up; below that it lives in the
// menu button so the header never overflows. Every top-level title links to its hub.
import { SERVICES } from '../lib/data/services'
import { CONDITIONS } from '../lib/data/conditions'

type NavItem = { href: string; label: string }
type NavGroup = { href: string; label: string; items: NavItem[]; footer?: NavItem }
type Row = { slug: string; title?: string; headline?: string }

// The menus show at most this many pages; the hub link carries the rest (the silo
// builder keeps appending to lib/data, so a menu built from it grows without bound).
const MAX_ITEMS = 8
const rows = (hub: string, list: Row[]): NavItem[] => list.map((r) => ({ href: hub + '/' + r.slug, label: r.title || r.headline || r.slug }))

const NAME = "Opal Medical Group"
const LOGO: string | null = "/logo.png"
const CTA = {"href":"/contact#form","label":"Book Appointment"}
const PHONE: { href: string; label: string } | null = {"href":"tel:+12404202666","label":"(240) 420-2666"}

const NAV: NavGroup[] = [
  { href: "/services", label: "Services", items: [...rows("/services", SERVICES)], footer: {"href":"/services","label":"All services"} },
  { href: "/conditions", label: "Conditions", items: [...rows("/conditions", CONDITIONS)], footer: {"href":"/conditions","label":"All conditions we treat"} },
  { href: "/about", label: "About", items: [...[{"href":"/team","label":"Our Team"},{"href":"/reviews","label":"Patient Reviews"},{"href":"/locations/hagerstown-md","label":"Hagerstown, MD"}]] },
  { href: "/new-patients", label: "Patients", items: [...[{"href":"/insurance","label":"Insurance & Billing"},{"href":"/telehealth","label":"Telehealth"},{"href":"/faq","label":"FAQ"}]] },
  { href: "/blog", label: "Resources", items: [...[{"href":"/compare/annual-physical-vs-problem-focused-visit","label":"Annual Physical vs Problem-Focused Visit"},{"href":"/compare/lifestyle-changes-vs-medication-prediabetes","label":"Lifestyle Changes vs Medication for Prediabetes"},{"href":"/compare/physician-vs-nurse-practitioner","label":"Physician vs Nurse Practitioner: Who Should You See?"},{"href":"/compare/preventive-screening-vs-diagnostic-testing","label":"Preventive Screening vs Diagnostic Testing"},{"href":"/compare/primary-care-vs-urgent-care","label":"Primary Care vs Urgent Care: Which Is Right for You?"}]] },
  { href: "/contact", label: "Contact", items: [] },
]

function Chevron() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-32 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center min-w-0" aria-label={NAME + ', home'}>
          {LOGO ? (
            <img src={LOGO} alt={NAME} width={213} height={160} className="h-[99px] w-auto max-w-[min(330px,calc(100vw-7.5rem))] object-contain object-left" />
          ) : (
            <span className="font-cormorant text-xl line-clamp-2 font-semibold text-[var(--color-primary)] leading-tight max-w-[calc(100vw-6rem)] sm:max-w-[16rem]">{NAME}</span>
          )}
        </a>

        <nav className="hidden xl:flex items-center gap-1" aria-label="Main">
          {NAV.map((g) =>
            g.items.length ? (
              <div key={g.href} className="relative group">
                <a href={g.href} className="flex items-center gap-1 px-3 py-2 rounded-lg text-[15px] font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] hover:bg-[var(--color-light)] transition-colors">
                  {g.label}
                  <Chevron />
                </a>
                <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition duration-150 absolute left-0 top-full pt-2 z-50">
                  <div className="w-72 bg-white rounded-2xl shadow-xl border border-[var(--color-border)] p-3">
                    {g.items.slice(0, MAX_ITEMS).map((it) => (
                      <a key={it.href} href={it.href} className="block px-3 py-2 rounded-lg text-sm text-[var(--color-ink)] hover:bg-[var(--color-light)] hover:text-[var(--color-primary)] transition-colors">
                        {it.label}
                      </a>
                    ))}
                    {g.footer ? (
                      <a href={g.footer.href} className="block px-3 py-2 mt-1 rounded-lg text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-light)] border-t border-[var(--color-border)]">
                        {g.footer.label} →
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : (
              <a key={g.href} href={g.href} className="px-3 py-2 rounded-lg text-[15px] font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] hover:bg-[var(--color-light)] transition-colors">
                {g.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-3 flex-shrink-0">
          <a href={CTA.href} data-ga="consultation_click" className="hidden sm:inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors whitespace-nowrap">
            {CTA.label}
          </a>
          <details className="xl:hidden">
            <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer p-2 rounded-lg text-[var(--color-ink)]" aria-label="Open menu">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </summary>
            <div className="absolute inset-x-0 top-full bg-white border-b border-[var(--color-border)] shadow-xl max-h-[calc(100vh-8rem)] overflow-y-auto">
              <nav className="px-4 py-4 space-y-1" aria-label="Mobile">
                {NAV.map((g) =>
                  g.items.length ? (
                    <details key={g.href}>
                      <summary className="list-none [&::-webkit-details-marker]:hidden flex items-center justify-between px-3 py-3 rounded-lg font-medium text-[var(--color-ink)] cursor-pointer">
                        {g.label}
                        <Chevron />
                      </summary>
                      <div className="pl-4 pb-2">
                        <a href={g.href} className="block px-3 py-2 text-sm font-semibold text-[var(--color-primary)]">{g.label} overview</a>
                        {g.items.slice(0, MAX_ITEMS).map((it) => (
                          <a key={it.href} href={it.href} className="block px-3 py-2 text-sm text-[var(--color-ink)]">{it.label}</a>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <a key={g.href} href={g.href} className="block px-3 py-3 rounded-lg font-medium text-[var(--color-ink)]">{g.label}</a>
                  )
                )}
                <div className="pt-3 grid gap-3">
                  {PHONE ? (
                    <a href={PHONE.href} data-ga="phone_click" className="text-center border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-4 py-3 rounded-xl font-semibold text-sm">Call {PHONE.label}</a>
                  ) : null}
                  <a href={CTA.href} data-ga="consultation_click" className="text-center bg-[var(--color-accent)] text-white px-4 py-3 rounded-xl font-semibold text-sm">{CTA.label}</a>
                </div>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}
