'use client'

import { Logo } from '@/components/logo'
import { Reveal } from '@/components/reveal'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <Reveal>
          <div className="flex flex-col items-center gap-8 text-center">
            <Logo width={160} height={160} className="h-32 w-auto" />
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground -mt-2">
              Professional cleaning services designed for modern homes and
              businesses. Clean spaces, better living.
            </p>
            <nav
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
              aria-label="Footer"
            >
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </Reveal>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          © 2026 Vachellia Premier Cleaning. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
