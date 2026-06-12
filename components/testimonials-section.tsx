'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState, useCallback } from 'react'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { SectionHeading } from '@/components/reveal'

const TESTIMONIALS = [
  {
    quote:
      'Vachellia transformed our home. Every surface gleams and the team is impeccably professional. It feels like a five-star hotel every single week.',
    name: 'Amara Ndlovu',
    role: 'Homeowner, Sandton',
  },
  {
    quote:
      'The attention to detail is unmatched. Our offices have never looked better, and our clients notice the difference the moment they walk in.',
    name: 'James Carter',
    role: 'Managing Director, Lumen Co.',
  },
  {
    quote:
      'Reliable, discreet, and genuinely caring. Vachellia is the only cleaning service I trust with my home. Truly a premium experience.',
    name: 'Sophie Laurent',
    role: 'Interior Designer',
  },
]

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)

  const next = useCallback(
    () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
    [],
  )
  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  const active = TESTIMONIALS[index]

  return (
    <section className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by Discerning Clients"
          className="mb-14 flex flex-col items-center [&_h2]:text-balance"
        />

        <div className="relative min-h-[280px] rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-12">
          <Quote className="mx-auto mb-6 h-10 w-10 text-secondary-foreground/30" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-foreground text-foreground"
                  />
                ))}
              </div>
              <p className="font-serif text-xl leading-relaxed text-balance sm:text-2xl">
                &ldquo;{active.quote}&rdquo;
              </p>
              <footer className="mt-8">
                <div className="font-semibold">{active.name}</div>
                <div className="text-sm text-muted-foreground">
                  {active.role}
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-6 bg-foreground' : 'w-2 bg-border'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
