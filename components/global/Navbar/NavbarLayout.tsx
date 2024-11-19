'use client'

import get from 'lodash/get'

import ButtonLinkBlock from '@/components/shared/ButtonLinkBlock'
import SanityImage from '@/components/shared/SanityImage'
import type { SettingsPayload } from '@/types'

interface NavbarProps {
  data: SettingsPayload
}

export default function Navbar({ data }: NavbarProps) {
  const { header } = data ?? {}

  return (
    <header className="bg-gold10">
      <div className="container-large flex py-[24px] lg:pt-[72px] lg:pb-0 justify-between items-center gap-4">
        <SanityImage
          image={get(header, 'logo', {})}
          alt="Linda Howard Logo"
          width={250}
          height={35}
          className='hidden sm:block w-[250px] aspect[250/35]'
        />
        <SanityImage
          image={get(header, 'mobileLogo', {})}
          alt="Linda Howard Logo"
          width={33}
          height={35}
          className='w-[35px] sm:hidden aspect[33/35]'
        />
        <div className="flex gap-4">
          <ButtonLinkBlock {...(get(header, 'secondaryButtonLink', {}) as any)} variant="outline" size="sm" />
          <ButtonLinkBlock {...(get(header, 'buttonLink', {}) as any)} size="sm" />
        </div>
      </div>
    </header>
  )
}
