import Image from "next/image"
import { Phone, Mail } from "lucide-react"
import { siteConfig } from "@/lib/site"

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-sm">
            <Image
              src="/vachellia-logo.png"
              alt="Vachellia Premier Cleaning"
              width={160}
              height={52}
              className="h-12 w-auto"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Professional cleaning services designed for modern homes and businesses. Clean spaces, better living.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg text-foreground">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-foreground">Contact</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 break-all text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Vachellia Premier Cleaning. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
