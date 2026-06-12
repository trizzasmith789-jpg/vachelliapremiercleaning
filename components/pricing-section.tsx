'use client'

import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { SectionHeading } from '@/components/reveal'
import { cn } from '@/lib/utils'

const PLANS = [
  {
    name: 'Basic',
    price: 'R899',
    features: [
      'Basic Cleaning',
      'Kitchen Cleaning',
      'Bathroom Cleaning',
      'Dusting',
      'Vacuuming',
    ],
    featured: false,
  },
  {
    name: 'Standard',
    price: 'R1099',
    features: [
      'Everything in Basic',
      'Deep Cleaning',
      'Window Cleaning',
      'Appliance Cleaning',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: 'R1999',
    features: [
      'Everything in Standard',
      'Carpet Cleaning',
      'Upholstery Cleaning',
      'Post Construction Cleaning',
      'Priority Booking',
    ],
    featured: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Pricing"
          title="Choose Your Package"
          subtitle="Transparent, flexible packages crafted to match the way you live and work."
          className="mb-14 max-w-2xl"
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                'relative flex flex-col rounded-3xl border bg-card p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-foreground/5',
                plan.featured
                  ? 'border-foreground shadow-xl shadow-foreground/5 lg:-my-4 lg:scale-[1.03]'
                  : 'border-border shadow-sm',
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-4 py-1 text-xs font-medium uppercase tracking-wider text-background">
                  Most Popular
                </span>
              )}
              <h3 className="font-serif text-2xl font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="mb-2 text-sm text-muted-foreground">from</span>
                <span className="font-serif text-5xl font-semibold">
                  {plan.price}
                </span>
                <span className="mb-1.5 text-sm text-muted-foreground">
                  / visit
                </span>
              </div>
              <div className="my-7 h-px w-full bg-border" />
              <ul className="flex flex-1 flex-col gap-3.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  buttonVariants({
                    variant: plan.featured ? 'default' : 'outline',
                  }),
                  'mt-8 h-12 rounded-full text-sm font-medium',
                  plan.featured
                    ? 'shine-btn'
                    : 'border-foreground/20 bg-transparent',
                )}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
