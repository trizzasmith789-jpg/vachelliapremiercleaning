'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { SectionHeading } from '@/components/reveal'
import { cn } from '@/lib/utils'

const IMAGES = [
  { src: '/gallery-1.png', alt: 'Spotless luxury living room', span: 'lg:row-span-2' },
  { src: '/gallery-2.png', alt: 'Pristine marble bathroom', span: '' },
  { src: '/gallery-3.png', alt: 'Immaculate dining area', span: '' },
  { src: '/gallery-4.png', alt: 'Freshly made luxury bedroom', span: 'lg:row-span-2' },
  { src: '/gallery-5.png', alt: 'Tidy home office', span: '' },
  { src: '/gallery-6.png', alt: 'Polished entryway floors', span: '' },
]

export function GallerySection() {
  return (
    <section id="gallery" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Work"
          title="Before & After Gallery"
          subtitle="A glimpse into the transformations we deliver — every surface restored to its most refined state."
          className="mb-14 max-w-2xl"
        />

        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {IMAGES.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                'group relative overflow-hidden rounded-2xl border border-border',
                img.span,
              )}
            >
              <Image
                src={img.src || '/placeholder.svg'}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(min-width: 1024px) 24vw, 48vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 translate-y-3 rounded-full bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                After
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
