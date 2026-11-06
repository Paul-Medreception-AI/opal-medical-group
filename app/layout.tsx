import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import SiteHeader from '../components/SiteHeader'
import MobileCallBar from '../components/MobileCallBar'
import Track from '../components/Track'

import { GoogleAnalytics } from '@next/third-parties/google'
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans' })

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const SITE_TITLE = 'Opal Medical Group | Primary Care in Hagerstown, MD'
const SITE_DESCRIPTION = 'Internal medicine and family primary care at 1126 Opal Ct, Hagerstown, MD. Same-day sick visits, telehealth, chronic disease management and preventive care. Open Monday to Friday, 8 AM to 5 PM.'

export const metadata: Metadata = {
  verification: { google: '1i1BUJBoZD9EF-A_JkGJyYveqqTjDf6KMOOIctNsM4Q' },
  // A bare string: no title.template, so every page's own title ships exactly once.
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL('https://opalmedicalgroup.com'),
  icons: {
    icon: ['/favicon.ico', '/favicon.png'],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: 'https://opalmedicalgroup.com',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/stock/hero-home.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/stock/hero-home.jpg'],
  },
}

// Facts from NPPES (NPI 1477639862), the practice's site, and Dr. Waseem's discovery call
// (hours, 2026-10-28). Ratings are deliberately NOT embedded: Google owns that number.
const PRACTICE_LD = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': 'https://opalmedicalgroup.com/#clinic',
  name: 'Opal Medical Group',
  legalName: 'Opal Medical Group, P.A.',
  url: 'https://opalmedicalgroup.com',
  logo: 'https://opalmedicalgroup.com/logo.png',
  image: 'https://opalmedicalgroup.com/images/stock/hero-home.jpg',
  telephone: '+1-240-420-2666',
  faxNumber: '+1-240-420-0951',
  email: 'opalmed@opalmedicalgroup.com',
  medicalSpecialty: ['PrimaryCare', 'InternalMedicine'],
  address: { '@type': 'PostalAddress', streetAddress: '1126 Opal Ct', addressLocality: 'Hagerstown', addressRegion: 'MD', postalCode: '21740', addressCountry: 'US' },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' }],
  hasMap: 'https://www.google.com/maps/search/?api=1&query=Opal%20Medical%20Group&query_place_id=ChIJExicj97syYkRi8rwcgWw0r4',
  sameAs: ['https://www.facebook.com/groups/170770144862242/', 'https://www.linkedin.com/company/opal-medical-company'],
  employee: [
    { '@type': 'Person', name: 'Yi Vance', honorificSuffix: 'CRNP', jobTitle: 'Family Nurse Practitioner' },
    { '@type': 'Physician', name: 'Farid Murshed', honorificSuffix: 'MD', medicalSpecialty: 'InternalMedicine' },
    { '@type': 'Physician', name: 'M. Khalid Waseem', honorificSuffix: 'MD, CMD', medicalSpecialty: 'InternalMedicine' },
  ],
}

const quick = [
  ['/services', 'Services'], ['/conditions', 'Conditions'], ['/team', 'Our Providers'], ['/new-patients', 'New Patients'],
  ['/insurance', 'Insurance & Billing'], ['/telehealth', 'Telehealth'], ['/faq', 'FAQ'], ['/refer', 'Referrals & Records'], ['/reviews', 'Reviews'], ['/blog', 'Health Articles'],
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)] bg-[var(--color-cream)] text-[var(--color-ink)] pb-16 lg:pb-0">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRACTICE_LD) }} />
        <Track />
        <SiteHeader />
        <main>{children}</main>
        <footer className="bg-[var(--color-ink)] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div>
                <a href="/" aria-label="Opal Medical Group, home">
                  <img src="/logo-white.png" alt="Opal Medical Group" width={213} height={160} className="h-[66px] w-auto object-contain object-left" />
                </a>
                <p className="mt-4 text-white/70 text-sm leading-relaxed">Internal medicine and family primary care in Hagerstown, Maryland since 2000.</p>
                <div className="flex items-center gap-4 mt-6">
                  <a href="https://www.facebook.com/groups/170770144862242/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/70 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/opal-medical-company" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.2 8.7H2V21h3.2V8.7zM3.6 3.5a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM21 14.2c0-3.3-1.8-4.8-4.1-4.8-1.9 0-2.7 1-3.2 1.8V8.7h-3.2V21h3.2v-6.4c0-1.7.3-3.300 2.400-3.300 2 0 2.100 1.900 2.100 3.400V21H21v-6.800z"/></svg>
                  </a>
                  <a href="https://www.google.com/maps/search/?api=1&query=Opal%20Medical%20Group&query_place_id=ChIJExicj97syYkRi8rwcgWw0r4" target="_blank" rel="noopener noreferrer" aria-label="Google Business Profile" className="text-white/70 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"/></svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2 text-sm text-white/70">
                  {quick.map(([href, label]) => (<li key={href}><a href={href} className="hover:text-white transition-colors">{label}</a></li>))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>1126 Opal Ct, Hagerstown, MD 21740</li>
                  <li><a href="tel:+12404202666" data-ga="phone_click" className="hover:text-white transition-colors">(240) 420-2666</a></li>
                  <li>Fax (240) 420-0951</li>
                  <li><a href="mailto:opalmed@opalmedicalgroup.com" data-ga="email_click" className="hover:text-white transition-colors">opalmed@opalmedicalgroup.com</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Hours</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>Monday to Friday: 8:00 AM to 5:00 PM</li>
                  <li>Saturday and Sunday: Closed</li>
                  <li className="pt-2 text-white/60">After hours, calls go to the provider on call. In an emergency, call 911.</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-xs text-white/60">
              <p>This website does not collect protected health information. Please do not send medical details through this website.</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span>© {new Date().getFullYear()} Opal Medical Group, P.A.</span>
                <a href="/privacy-sms" className="hover:text-white transition-colors">Privacy Policy</a>
                <span>|</span>
                <a href="/terms-sms" className="hover:text-white transition-colors">Terms of Service</a>
                <span>|</span>
                <a href="/terms-sms#sms-terms" className="hover:text-white transition-colors">SMS Terms</a>
                <span>|</span>
                <a href="/patient-form-sms" className="hover:text-white transition-colors">Text Message Sign-Up</a>
              </div>
            </div>
            {/* site-credits:start */}
            <p className="mt-6 text-center sm:text-left text-xs opacity-60">Photos by <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">Pexels</a>{' · '}Website built by <a href="https://www.medreception.ai/" target="_blank" rel="noopener" className="underline-offset-2 hover:underline">MedReception AI</a></p>
            {/* site-credits:end */}
          </div>
        </footer>
        <MobileCallBar />
        {/* MedReception patient widget: callback, appointment request and the AI chat, filed on
            the practice's Studio board (qa-api lambdaWidget, client id opal-medical-group). */}
        <Script src="https://widget.medreception.ai/embed.js" data-client-id="opal-medical-group" strategy="afterInteractive" />
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

    </html>
  )
}
