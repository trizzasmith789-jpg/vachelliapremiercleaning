import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 md:grid-cols-2 md:px-8 md:pb-24">
        <div className="reveal">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">PREMIER CLEANING</p>
          <h1 className="mt-5 text-balance font-serif text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            Clean Spaces.
            <br />
            Better Living.
          </h1>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Professional cleaning services designed for modern homes and businesses. Meticulous detail, trusted care,
            and a finish that feels effortlessly luxurious.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get Free Quote
            </a>
            <a
              href="#services"
              className="rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              View Services
            </a>
          </div>
          <dl className="mt-12 flex gap-10">
            {[
              { n: "500+", l: "Happy Clients" },
              { n: "5", l: "Years Experience" },
              { n: "100%", l: "Satisfaction" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-serif text-3xl text-foreground md:text-4xl">{s.n}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal relative">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/hero-interior.png"
              alt="Bright, immaculately clean luxury living room interior"
              width={720}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute bottom-6 left-6 rounded-2xl bg-card/90 px-5 py-4 backdrop-blur-sm shadow-lg">
            <p className="font-serif text-2xl text-foreground">A+</p>
            <p className="text-xs text-muted-foreground">Spotless results, every visit</p>
          </div>
        </div>
      </div>
    </section>
  )
}
