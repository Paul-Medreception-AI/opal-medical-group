import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import SiteHeader from '../components/SiteHeader'

import { GoogleAnalytics } from '@next/third-parties/google'
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans' })


const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  title: 'Opal Medical Group | Trusted Primary Care for Hagerstown Families',
  description: 'Opal Medical Group provides quality, affordable healthcare backed by expert providers and compassionate care. From preventive check-ups to ongoing condition management, we support every step of your wellness journey.',
  metadataBase: new URL('https://opalmedicalgroup.com'),
  icons: {
    icon: ['/favicon.ico', '/favicon.png'],
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Opal Medical Group | Trusted Primary Care for Hagerstown Families',
    description: 'Opal Medical Group provides quality, affordable healthcare backed by expert providers and compassionate care. From preventive check-ups to ongoing condition management, we support every step of your wellness journey.',
    url: 'https://opalmedicalgroup.com',
    siteName: 'Opal Medical Group',
    type: 'website',
    images: [{ url: '/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opal Medical Group | Trusted Primary Care for Hagerstown Families',
    description: 'Opal Medical Group provides quality, affordable healthcare backed by expert providers and compassionate care. From preventive check-ups to ongoing condition management, we support every step of your wellness journey.',
    images: ['/images/587b7346a126883e7feca835_video_preview_h264-poster-00001.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)] bg-[var(--color-cream)] text-[var(--color-ink)]">
        <SiteHeader />
        <main>{children}</main>
        <footer className="bg-[var(--color-ink)] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <a href="/">
                  <img src="/logo.png" alt="Opal Medical Group" className="h-[66px] w-auto max-w-[min(330px,100%)] object-contain object-left" />
                </a>
                <p className="mt-4 text-white/70 text-sm leading-relaxed">Comprehensive, compassionate primary care for Hagerstown and beyond.</p>
                <div className="flex items-center gap-4 mt-6">
                  <a href="https://www.facebook.com/groups/170770144862242/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/70 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/opal-medical-company" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.2 8.7H2V21h3.2V8.7zM3.6 3.5a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM21 14.2c0-3.3-1.8-4.8-4.1-4.8-1.9 0-2.7 1-3.2 1.8V8.7h-3.2V21h3.2v-6.4c0-1.7.3-3.300 2.400-3.300 2 0 2.100 1.900 2.100 3.400V21H21v-6.800z"/></svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                  <li><a href="/conditions" className="hover:text-white transition-colors">Conditions</a></li>
                  <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="/team" className="hover:text-white transition-colors">Team</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>1126 Opal Ct, Hagerstown, MD 21740</li>
                  <li><a href="tel:(240) 420-2666" className="hover:text-white transition-colors">(240) 420-2666</a></li>
                  <li><a href="mailto:opalmed@opalmedicalgroup.com" className="hover:text-white transition-colors">opalmed@opalmedicalgroup.com</a></li>
                  <li>Mon 8:00 AM-5:30 PM, Tue 8:00 AM-5:00 PM, Wed 8:00 AM-5:00 PM, Thu 7:30 AM-8:30 PM, Fri 8:00 AM-4:30 PM, Sat-Sun Closed</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-xs text-white/60">
              <p>This website does not collect protected health information. Please do not send medical details through this website.</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span>© {new Date().getFullYear()} Opal Medical Group</span>
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
        {/* MedReception patient widget: callback, appointment request and the AI chat, filed on
            the practice's Studio board (qa-api lambdaWidget, client id opal-medical-group). */}
        <Script src="https://widget.medreception.ai/embed.js" data-client-id="opal-medical-group" strategy="afterInteractive" />
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

    </html>
  )
}