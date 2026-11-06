'use client'
import { useEffect } from 'react'

/**
 * GA4 click events without a client component per link: any element carrying data-ga="<event>"
 * (phone_click, email_click, consultation_click) reports that event when clicked.
 */
export default function Track() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-ga]')
      if (!el) return
      const w = window as unknown as { gtag?: (...args: unknown[]) => void }
      w.gtag?.('event', el.dataset.ga, { page_path: window.location.pathname, link_url: el.getAttribute('href') || '' })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}
