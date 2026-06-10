"use client"

import { useReveal } from "@/hooks/use-reveal"

export function RevealProvider({ children }: { children: React.ReactNode }) {
  useReveal()
  return <>{children}</>
}
