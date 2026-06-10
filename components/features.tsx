import { ShieldCheck, Users, Leaf, BadgeCheck } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted & Reliable",
    text: "Fully vetted, insured, and consistently on time for every booking.",
  },
  {
    icon: Users,
    title: "Professional Team",
    text: "Trained specialists who treat every space with meticulous care.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    text: "Safe, sustainable products that protect your home and family.",
  },
  {
    icon: BadgeCheck,
    title: "Satisfaction Guaranteed",
    text: "Not happy? We'll return and make it right, no questions asked.",
  },
]

export function Features() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="reveal rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg hover:shadow-foreground/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
              <f.icon className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="mt-5 font-serif text-xl text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
