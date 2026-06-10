import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Pricing } from "@/components/pricing"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { RevealProvider } from "@/components/reveal-provider"

export default function Page() {
  return (
    <RevealProvider>
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Gallery />
        <Pricing />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </RevealProvider>
  )
}
