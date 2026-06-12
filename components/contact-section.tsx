'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

const DETAILS = [
  { icon: Phone, label: 'Phone', value: '+27 72 866 6579' },
  { icon: Mail, label: 'Email', value: 'vachelliapremiercleaning@outlook.com' },
  { icon: MapPin, label: 'Location', value: 'Sandton, Johannesburg' },
  { icon: Clock, label: 'Working Hours', value: 'Mon – Sat, 7am – 7pm' },
]

const FIELD =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/40'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Form */}
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Get In Touch
              </p>
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Request a Quote
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tell us about your space and we&apos;ll craft a tailored plan
                for you.
              </p>

              <form
                className="mt-8 grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input id="name" name="name" required placeholder="Name" className={FIELD} />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required placeholder="Email" className={FIELD} />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input id="phone" name="phone" placeholder="Phone" className={FIELD} />
                  </div>
                  <div>
                    <label htmlFor="service" className="sr-only">
                      Service Required
                    </label>
                    <select id="service" name="service" defaultValue="" required className={FIELD}>
                      <option value="" disabled>
                        Service Required
                      </option>
                      <option>Residential Cleaning</option>
                      <option>Commercial Cleaning</option>
                      <option>Window Cleaning</option>
                      <option>Deep Cleaning</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your space"
                    className={`${FIELD} resize-none`}
                  />
                </div>
                <Button
                  type="submit"
                  className="shine-btn group mt-2 h-12 rounded-full text-sm font-medium"
                >
                  {submitted ? 'Thank you — we’ll be in touch!' : 'Send Request'}
                  {!submitted && (
                    <Send className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  )}
                </Button>
              </form>
            </div>
          </Reveal>

          {/* Details */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between gap-8">
              <div className="rounded-3xl border border-border bg-secondary/50 p-8 sm:p-10">
                <h3 className="font-serif text-2xl font-semibold">
                  Business Details
                </h3>
                <ul className="mt-8 grid gap-6">
                  {DETAILS.map((d) => (
                    <li key={d.label} className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-card text-foreground">
                        <d.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">
                          {d.label}
                        </div>
                        <div className="text-sm font-medium text-foreground">
                          {d.value}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/27112345678"
                target="_blank"
                rel="noreferrer"
                className="shine-btn flex items-center justify-center gap-3 rounded-3xl border border-border bg-card px-6 py-6 text-sm font-medium text-foreground transition-shadow hover:shadow-xl hover:shadow-foreground/5"
              >
                <MessageCircle className="h-5 w-5" />
                Chat with us on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
