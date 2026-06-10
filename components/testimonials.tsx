"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Vachellia transformed our home. Every surface gleams and the team is impeccably professional. It feels like a five-star hotel every single week.",
    name: "Amara Ndlovu",
    role: "Homeowner, Sandton",
  },
  {
    quote:
      "The attention to detail is unmatched. Our offices have never looked better, and our clients notice the difference the moment they walk in.",
    name: "James Carter",
    role: "Managing Director, Lumen Co.",
  },
  {
    quote:
      "Reliable, discreet, and thorough. Vachellia has become an essential part of how we run our household. I wouldn't trust anyone else.",
    name: "Lerato Mokoena",
    role: "Homeowner, Bryanston",
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]

  const go = (dir: number) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length)

  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-24">
        <p className="reveal text-xs font-semibold tracking-[0.3em] text-muted-foreground">TESTIMONIALS</p>
        <h2 className="reveal mt-4 text-balance font-serif text-4xl text-foreground md:text-5xl">
          Loved by Discerning Clients
        </h2>

        <div className="reveal mt-10 rounded-3xl border border-border bg-card p-8 md:p-12">
          <div className="flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
            ))}
          </div>
          <blockquote className="mt-6">
            <p className="text-pretty font-serif text-xl leading-relaxed text-foreground md:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-6">
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </footer>
          </blockquote>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-foreground" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
