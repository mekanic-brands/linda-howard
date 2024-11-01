import '@/styles/index.css'

import type { Metadata, Viewport } from 'next'
import { toPlainText } from 'next-sanity'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { Suspense } from 'react'

import { Footer } from '@/components/global/Footer'
import { Navbar } from '@/components/global/Navbar'
import TopLoader from '@/components/shared/TopLoader'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { loadHomePage, loadSettings } from '@/sanity/loader/loadQuery'

const LiveVisualEditing = dynamic(
  () => import('@/sanity/loader/LiveVisualEditing'),
)

export async function generateMetadata(): Promise<Metadata> {
  const [{ data: settings }, { data: homePage }] = await Promise.all([
    loadSettings(),
    loadHomePage(),
  ])

  const ogImage = urlForOpenGraphImage(settings?.ogImage)
  return {
    title: homePage?.title
      ? {
          template: `%s | ${homePage.title}`,
          default: homePage.title || 'Linda Howard',
        }
      : undefined,
    description: homePage?.overview
      ? toPlainText(homePage.overview)
      : undefined,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

export const viewport: Viewport = {
  themeColor: '#000',
}

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const initial = await loadSettings()

  return (
    <>
      <TopLoader />
      <div className="min-h-screen" id="mainWrapper">
        <Suspense>
          <Navbar initial={initial} />
        </Suspense>
        <div>
          <Suspense>{children}</Suspense>
        </div>
        <Suspense>
          <Footer initial={initial} />
        </Suspense>
      </div>
      {draftMode().isEnabled && <LiveVisualEditing />}
    </>
  )
}
