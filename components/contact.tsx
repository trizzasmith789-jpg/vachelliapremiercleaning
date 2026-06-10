"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { siteConfig, whatsappUrl } from "@/lib/site"

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const services = ["Residential Cleaning", "Commercial Cleaning", "Window Cleaning", "Deep Cleaning"]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">GET IN TOUCH</p>
        <h2 className="mt-4 text-balance font-serif text-4xl text-foreground md:text-5xl">Request a Quote</h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Tell us about your space and we&apos;ll craft a tailored plan for you.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        {/* Form */}
        <div className="reveal lg:col-span-3 rounded-3xl border border-border bg-card p-7 md:p-10">
          {submitted ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
              <h3 className="font-serif text-2xl text-foreground">Thank you!</h3>
              <p className="mt-3 max-w-sm text-muted-foreground">
                We&apos;ve received your request and will be in touch shortly. For anything urgent, reach us directly by
                phone or WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                  />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="text-sm font-medium text-foreground">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                  >
                    <option value="" disabled>
                      Service Required
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                />
              </div>
              <button
                type="submit"
                className="inline-flex justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send Request
              </button>
            </form>
          )}
        </div>

        {/* Business details */}
        <div className="reveal lg:col-span-2 flex flex-col gap-4">
          <div className="rounded-3xl border border-border bg-card p-7 md:p-8">
            <h3 className="font-serif text-xl text-foreground">Business Details</h3>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <Phone className="h-5 w-5 text-foreground" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground">PHONE</p>
                  <a href={`tel:${siteConfig.phoneTel}`} className="text-foreground transition-opacity hover:opacity-70">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <Mail className="h-5 w-5 text-foreground" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground">EMAIL</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="break-all text-foreground transition-opacity hover:opacity-70"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <MapPin className="h-5 w-5 text-foreground" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground">LOCATION</p>
                  <p className="text-foreground">{siteConfig.location}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <Clock className="h-5 w-5 text-foreground" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground">WORKING HOURS</p>
                  <p className="text-foreground">{siteConfig.workingHours}</p>
                </div>
              </li>
            </ul>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="shine-btn flex items-center justify-center gap-3 rounded-3xl border border-border bg-card px-6 py-6 text-sm font-medium text-foreground transition-shadow hover:shadow-xl hover:shadow-foreground/5"
          >
            <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
