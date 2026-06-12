import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vachellia Premier Cleaning | Luxury Cleaning Services',
  description:
    'Vachellia Premier Cleaning offers professional luxury cleaning services for modern homes and businesses. Clean spaces, better living.',
  generator: 'v0.app',
  keywords: [
    'luxury cleaning',
    'premium cleaning services',
    'residential cleaning',
    'commercial cleaning',
    'deep cleaning',
    'window cleaning',
  ],
  openGraph: {
    title: 'Vachellia Premier Cleaning | Luxury Cleaning Services',
    description:
      'Professional cleaning services designed for modern homes and businesses.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
