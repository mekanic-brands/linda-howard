import './globals.css'

import { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

import { Toaster } from '@/components/ui/toaster'

const helvetica = localFont({
  src: [
    {
      path: '../public/fonts/Helvetica/Helvetica-Regular.ttf',
      weight: '400',
    },
    {
      path: '../public/fonts/Helvetica/Helvetica-Bold.ttf',
      weight: '800',
    },
  ],
  variable: '--font-helvetica',
})

const tiempos = localFont({
  src: [
    {
      path: '../public/fonts/Tiempos/TiemposHeadlineWeb-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Tiempos/TiemposHeadlineWeb-LightItalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/Tiempos/TiemposTextWeb-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Tiempos/TiemposTextWeb-RegularItalic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Tiempos/TiemposTextWeb-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Tiempos/TiemposTextWeb-RegularItalic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Tiempos/TiemposTextWeb-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Tiempos/TiemposTextWeb-MediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
  ],
  variable: '--font-tiempos',
})

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  maximumScale: 6,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Linda Howard - Home',
  description: 'Linda Howard - Home',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${helvetica.variable} ${tiempos.variable}`}>
      <body>
        <>
          {children}
          <Toaster />
        </>
      </body>
    </html>
  )
}
