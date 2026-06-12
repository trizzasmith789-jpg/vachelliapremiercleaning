'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/reveal'

const SERVICES = [
  {
    title: 'Residential Cleaning',
    desc: 'Luxury home cleaning tailored to your space and routine.',
    image: '/service-residential.png',
  },
  {
    title: 'Commercial Cleaning',
    desc: 'Pristine offices and workspaces that impress every visitor.',
    image: '/service-commercial.png',
  },
  {
    title: 'Window Cleaning',
    desc: 'Streak-free interior and exterior glass with a flawless finish.',
    image: '/service-window.png',
  },
  {
    title: 'Deep Cleaning',
    desc: 'Detailed, intensive cleaning that reaches every corner.',
    image: '/service-deep.png',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Cleaning Services"
          subtitle="A complete range of premium cleaning solutions, each delivered with the same uncompromising attention to detail."
          className="mb-14 max-w-2xl"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-foreground/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image || '/placeholder.svg'}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-xl font-semibold leading-snug">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
