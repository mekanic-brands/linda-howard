
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { SettingsPayload } from '@/types'

import NavbarLayout from './NavbarLayout'
const NavbarPreview = dynamic(() => import('./NavbarPreview'))

export async function Navbar({initial}:{initial: {data:SettingsPayload}}) {

  if (draftMode().isEnabled) {
    return <NavbarPreview initial={initial} />
  }

  return <NavbarLayout data={initial.data} />
}
