import Image from "next/image"

const services = [
  {
    img: "/service-residential.png",
    title: "Residential Cleaning",
    text: "Luxury home cleaning tailored to your space and routine.",
  },
  {
    img: "/service-commercial.png",
    title: "Commercial Cleaning",
    text: "Pristine offices and workspaces that impress every visitor.",
  },
  {
    img: "/service-window.png",
    title: "Window Cleaning",
    text: "Streak-free interior and exterior glass with a flawless finish.",
  },
  {
    img: "/service-deep.png",
    title: "Deep Cleaning",
    text: "Detailed, intensive cleaning that reaches every corner.",
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">WHAT WE OFFER</p>
        <h2 className="mt-4 text-balance font-serif text-4xl text-foreground md:text-5xl">Our Cleaning Services</h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          A complete range of premium cleaning solutions, each delivered with the same uncompromising attention to
          detail.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <article
            key={s.title}
            className="reveal group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg hover:shadow-foreground/5"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={s.img || "/placeholder.svg"}
                alt={s.title}
                width={480}
                height={360}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
