'use client'

import { motion, useInView, useMotionValue, animate } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const STATS = [
  { value: 10, suffix: '', label: 'Years Experience' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return controls.stop
  }, [inView, value, count])

  return (
    <span ref={ref} className="font-serif text-4xl font-semibold sm:text-5xl">
      {display}
      {suffix}
    </span>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-xl shadow-foreground/5">
            <Image
              src="/about.png"
              alt="Professional Vachellia cleaner caring for a luxury home"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              About Vachellia
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
              We Don&apos;t Just Clean.
              <br />
              <span className="italic text-muted-foreground">We Care.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
              At Vachellia Premier Cleaning, every detail is an expression of
              respect — for your home, your time, and your peace of mind. Our
              philosophy blends rigorous craft with quiet luxury, leaving spaces
              that feel renewed and effortlessly elegant.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              From first booking to final inspection, our trained team treats
              your space as if it were our own. The result is more than clean —
              it&apos;s a better way of living.
            </p>
          </Reveal>

          <div className="mt-10 flex gap-8 border-t border-border pt-10">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
