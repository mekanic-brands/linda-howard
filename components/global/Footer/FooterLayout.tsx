'use client'
import get from 'lodash/get'

import Foreach from '@/components/shared/Foreach'
import SanityImage from '@/components/shared/SanityImage'
import type { SettingsPayload } from '@/types'
import Link from 'next/link'

interface FooterProps {
  data: SettingsPayload
}

export default function Footer({ data }: FooterProps) {
  const { socialNetworks = {}, mediaContact } = data ?? {}
  return (
    <footer className="w-full bg-red100 text-white">
      <div className="container-large w-full lg:py-[72px] py-[55px] flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className='mb-[16px] lg:mb-[0]'>
          <p className="text-[18px] lg:text-[24px] text-white">
            {get(socialNetworks, 'title', '')}
          </p>
          <div className="flex lg:items-center gap-[18px]">
            <Foreach data={get(socialNetworks, 'items', [])}>
              {({ icon, link }) => (
                <Link href={link}>
                  <SanityImage width={52} height={52} image={icon} alt={link} className='w-[35px] h-[35px] lg:h-[52px] lg:w-[52px]'/>
                </Link>
              )}
            </Foreach>
          </div>
        </div>
        <div className="lg:max-w-[391px] w-full">
          <p className="text-[18px] lg:text-[24px] !mb-[8px] text-white">
            {get(mediaContact, 'title', '')}
          </p>
          <p className="text-[15px] font-helvetica !mb-[0] text-white">
            {get(mediaContact, 'subtitle', '')}
          </p>
          <Link
            href={`mailto:${get(mediaContact, 'email', '')}`}
            className='className="text-[15px] font-helvetica !mb-[0] text-white !underline'
          >
            {get(mediaContact, 'email', '')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
