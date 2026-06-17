import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustSection } from '@/components/trust-section'
import { ServicesSection } from '@/components/services-section'
import { GallerySection } from '@/components/gallery-section'
import { PricingSection } from '@/components/pricing-section'
import { AboutSection } from '@/components/about-section'

import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustSection />
        <ServicesSection />
        <GallerySection />
        <PricingSection />
        <AboutSection />
        
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  )
}
