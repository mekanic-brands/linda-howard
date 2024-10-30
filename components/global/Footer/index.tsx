import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { SettingsPayload } from '@/types'

import FooterLayout from './FooterLayout'
const FooterPreview = dynamic(() => import('./FooterPreview'))

export async function Footer({initial}:{initial: {data:SettingsPayload}}) {
  if (draftMode().isEnabled) {
    return <FooterPreview initial={initial} />
  }

  return <FooterLayout data={initial.data} />
}
