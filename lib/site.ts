// Central contact configuration — single source of truth for all contact details.
export const siteConfig = {
  name: "Vachellia Premier Cleaning",
  email: "vachelliapremiercleaning@outlook.com",
  phoneDisplay: "0728666579",
  phoneTel: "+27728666579",
  location: "Sandton, Johannesburg",
  workingHours: "Mon – Sat, 7am – 7pm",
  whatsappNumber: "27728666579",
  whatsappMessage: "Hi, I would like to enquire about your cleaning services.",
}

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`
