import Image from 'next/image'
import { focus } from '@/lib/imageFocus'

/**
 * Every page's opening section: the copy on solid navy on the left, the photograph beside it.
 *
 * Paul, 2026-10-30: white copy laid over a full-bleed photo was hard to read, so no text sits on
 * a photo anywhere. The photo is framed by lib/imageFocus (its detected subject), so the crop
 * keeps faces in view. Below lg the photo stacks under the copy.
 */
export default function SplitHero({
  src,
  alt,
  position,
  children,
}: {
  src: string
  alt: string
  /** CSS object-position; defaults to the photo's detected subject. */
  position?: string
  children: React.ReactNode
}) {
  return (
    <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="min-w-0">{children}</div>
        <div className="relative h-64 sm:h-80 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-[var(--color-dark)]">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            quality={85}
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover"
            style={{ objectPosition: position || focus(src) }}
          />
        </div>
      </div>
    </section>
  )
}
