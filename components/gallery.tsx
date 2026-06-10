import Image from "next/image"

const gallery = [
  { img: "/gallery-1.png", alt: "Spotless luxury living room" },
  { img: "/gallery-2.png", alt: "Pristine marble bathroom" },
  { img: "/gallery-3.png", alt: "Immaculate dining area" },
  { img: "/gallery-4.png", alt: "Freshly made luxury bedroom" },
  { img: "/gallery-5.png", alt: "Tidy home office" },
  { img: "/gallery-6.png", alt: "Polished entryway floors" },
]

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">OUR WORK</p>
        <h2 className="mt-4 text-balance font-serif text-4xl text-foreground md:text-5xl">Before &amp; After Gallery</h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          A glimpse into the transformations we deliver — every surface restored to its most refined state.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((g) => (
          <figure key={g.img} className="reveal group relative overflow-hidden rounded-2xl">
            <Image
              src={g.img || "/placeholder.svg"}
              alt={g.alt}
              width={560}
              height={560}
              className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold tracking-wide text-foreground backdrop-blur-sm">
              AFTER
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
