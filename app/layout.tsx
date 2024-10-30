import './globals.css'

import { Metadata, Viewport } from 'next'
import { Literata, Montserrat } from 'next/font/google'

const literata = Literata({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-literata',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
})

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  maximumScale: 6,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Evercrisp Apple  - Home',
  description: 'Evercrisp Apple - Home',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${literata.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
