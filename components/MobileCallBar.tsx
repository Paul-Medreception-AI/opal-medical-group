// Sticky call bar below lg: the two actions a phone visitor wants, always one thumb away.
// The MedReception widget launcher is lifted above it in globals.css (#medreception-widget-host).
export default function MobileCallBar() {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px bg-[var(--color-border)] border-t border-[var(--color-border)] pb-[env(safe-area-inset-bottom)]">
      <a href="tel:+12404202666" data-ga="phone_click" className="bg-white text-[var(--color-dark)] font-semibold text-center py-3.5 text-sm">
        Call (240) 420-2666
      </a>
      <a href="/contact#form" data-ga="consultation_click" className="bg-[var(--color-accent)] text-white font-semibold text-center py-3.5 text-sm">
        Book Appointment
      </a>
    </div>
  )
}
