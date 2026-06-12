'use client'

import { motion } from 'motion/react'
import { ShieldCheck, Users, Leaf, BadgeCheck } from 'lucide-react'

const ITEMS = [
  {
    icon: ShieldCheck,
    title: 'Trusted & Reliable',
    desc: 'Fully vetted, insured, and consistently on time for every booking.',
  },
  {
    icon: Users,
    title: 'Professional Team',
    desc: 'Trained specialists who treat every space with meticulous care.',
  },
  {
    icon: Leaf,
    title: 'Eco Friendly',
    desc: 'Safe, sustainable products that protect your home and family.',
  },
  {
    icon: BadgeCheck,
    title: 'Satisfaction Guaranteed',
    desc: "Not happy? We'll return and make it right, no questions asked.",
  },
]

export function TrustSection() {
  return (
    <section className="relative z-10 -mt-2 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-foreground/5"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
