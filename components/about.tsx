import Image from "next/image"

export function About() {
  return (
    <section id="about" className="bg-muted/40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div className="reveal relative overflow-hidden rounded-3xl">
          <Image
            src="/about.png"
            alt="Professional Vachellia cleaner caring for a luxury home"
            width={640}
            height={720}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="reveal">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">ABOUT VACHELLIA</p>
          <h2 className="mt-4 text-balance font-serif text-4xl text-foreground md:text-5xl">
            We Don&apos;t Just Clean.
            <br />
            We Care.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            At Vachellia Premier Cleaning, every detail is an expression of respect — for your home, your time, and your
            peace of mind. Our philosophy blends rigorous craft with quiet luxury, leaving spaces that feel renewed and
            effortlessly elegant.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From first booking to final inspection, our trained team treats your space as if it were our own. The result
            is more than clean — it&apos;s a better way of living.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <span className="font-serif text-5xl text-foreground">5</span>
            <span className="text-sm leading-tight text-muted-foreground">
              Years
              <br />
              Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
