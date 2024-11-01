'use client'

import ButtonLinkBlock from '@/components/shared/ButtonLinkBlock'
import SanityImage from '@/components/shared/SanityImage'
import type { SettingsPayload } from '@/types'
import get from 'lodash/get'
interface NavbarProps {
  data: SettingsPayload
}

export default function Navbar({ data }: NavbarProps) {
  const { header } = data ?? {}

  return (
    <header className="bg-gold10">
      <div className="container-large flex py-[20px] lg:pt-[72px] lg:pb-0 justify-between items-center gap-4">
        <SanityImage
          image={get(header, 'logo', {})}
          alt="header logo"
          width={250}
          height={35}
        />
        <ButtonLinkBlock {...(get(header, 'buttonLink', {}) as any)} />
      </div>
    </header>
  )
}
