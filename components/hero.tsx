'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const shapeY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const logoY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  }
  const item = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section
      ref={ref}
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-secondary/60 via-background to-background pt-[90px]"
    >
      {/* floating shapes */}
      <motion.div
        style={{ y: shapeY }}
        className="pointer-events-none absolute -right-20 top-32 h-72 w-72 rounded-full bg-secondary/70 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: imageY }}
        className="pointer-events-none absolute -left-16 bottom-10 h-56 w-56 rounded-full bg-accent/60 blur-3xl"
        aria-hidden="true"
      />

      {/* large logo watermark background */}
      <motion.div
        style={{ y: logoY, scale: logoScale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <Logo
          width={1100}
          height={1100}
          priority
          className="h-[120vh] w-auto max-w-none"
        />
      </motion.div>

      <div className="mx-auto grid min-h-[calc(100vh-90px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-xl"
        >
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            Premier Cleaning
          </motion.p>

          <motion.h1
            variants={item}
            className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Clean Spaces.
            <br />
            <span className="italic text-muted-foreground">Better Living.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Professional cleaning services designed for modern homes and
            businesses. Meticulous detail, trusted care, and a finish that feels
            effortlessly luxurious.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className={cn(
                buttonVariants(),
                'shine-btn group h-12 rounded-full px-7 text-sm font-medium',
              )}
            >
              Get Free Quote
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'h-12 rounded-full border-foreground/20 bg-transparent px-7 text-sm font-medium hover:bg-card',
              )}
            >
              View Services
            </a>
          </motion.div>


        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 hidden lg:block"
        >
          <motion.div
            style={{ y: imageY }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border shadow-2xl shadow-foreground/5"
          >
            <Image
              src="/hero-interior.png"
              alt="Bright, immaculately clean luxury living room interior"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card px-6 py-5 shadow-xl"
          >
            <div className="font-serif text-3xl font-semibold">A+</div>
            <div className="text-xs text-muted-foreground">
              Spotless results, every visit
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
