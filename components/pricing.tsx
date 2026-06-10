import { Check } from "lucide-react"

const tiers = [
  {
    name: "Basic",
    price: "R899",
    popular: false,
    features: ["Basic Cleaning", "Kitchen Cleaning", "Bathroom Cleaning", "Dusting", "Vacuuming"],
  },
  {
    name: "Standard",
    price: "R1099",
    popular: true,
    features: ["Everything in Basic", "Deep Cleaning", "Window Cleaning", "Appliance Cleaning"],
  },
  {
    name: "Premium",
    price: "R1999",
    popular: false,
    features: [
      "Everything in Standard",
      "Carpet Cleaning",
      "Upholstery Cleaning",
      "Post Construction Cleaning",
      "Priority Booking",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">PRICING</p>
        <h2 className="mt-4 text-balance font-serif text-4xl text-foreground md:text-5xl">Choose Your Package</h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Transparent, flexible packages crafted to match the way you live and work.
        </p>
      </div>

      <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`reveal relative rounded-3xl border p-8 ${
              t.popular
                ? "border-foreground bg-primary text-primary-foreground shadow-xl"
                : "border-border bg-card text-foreground"
            }`}
          >
            {t.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-xs font-semibold tracking-wide text-foreground">
                MOST POPULAR
              </span>
            )}
            <h3 className="font-serif text-2xl">{t.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className={`text-xs ${t.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                from
              </span>
              <span className="font-serif text-4xl">{t.price}</span>
              <span className={`text-sm ${t.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                / visit
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <Check className={`h-4 w-4 ${t.popular ? "text-secondary" : "text-foreground"}`} />
                  <span className={t.popular ? "text-primary-foreground/90" : "text-foreground/90"}>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-8 inline-flex w-full justify-center rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90 ${
                t.popular ? "bg-secondary text-foreground" : "bg-primary text-primary-foreground"
              }`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
