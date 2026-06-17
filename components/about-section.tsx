'use client'


import Image from 'next/image'
import { Reveal } from '@/components/reveal'


  




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
        </div>
      </div>
    </section>
  )
}



