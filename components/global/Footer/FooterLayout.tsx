'use client'
import Image from 'next/image'
import Link from 'next/link'

import Foreach from '@/components/shared/Foreach'
import { urlForImage } from '@/sanity/lib/utils'
import type { SettingsPayload } from '@/types'
import { CtaBlock } from '@/components/shared/CtaBlock'

interface FooterProps {
  data: SettingsPayload
}

export default function Footer({ data }: FooterProps) {
  const {
    copyright = '',
    menuItems = [],
    footerLogo = '',
    growersWebsite = '',
    consumersEmail = '',
    maiaInfo = '',
    socialNetworks = [],
    ctaBlock = {},
  } = data ?? {}
  const footerLogoUrl = footerLogo ? urlForImage(footerLogo)?.url() || '' : ''
  return (
    <div>
      <CtaBlock data={ctaBlock} />
      <footer className="w-full bg-white border-t-[6px] border-baseDark10">
        <div className="container-large lg:py-[75px]  py-[55px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] xl:gap-20 2xl:gap-[18.5rem]">
            <div className="flex-col">
              {footerLogoUrl && (
                <Link href={growersWebsite ? `https://${growersWebsite}` : `/`}>
                  <Image
                    width={211}
                    height={80}
                    src={footerLogoUrl}
                    alt="Maia logo"
                    className="m-auto lg:m-0"
                  />
                </Link>
              )}
              {maiaInfo && (
                <p className="text-small mt-4 lg:mt-[22px]">{maiaInfo}</p>
              )}
            </div>
            <div className="flex-col lg:ml-auto">
              <h4 className="font-extrabold  text-darkRed100 mb-[14px] lg:mb-4 font-tiempos">
                Contact Information
              </h4>
              {consumersEmail && (
                <div className="mb-[14px] lg:mb-4">
                  <div className="text-small font-tiempos font-extrabold  leading-[16.8px]">
                    Consumers
                  </div>
                  <Link
                    href={`mailto:${consumersEmail}`}
                    className="text-small font-bold text-link"
                  >
                    {consumersEmail}
                  </Link>
                </div>
              )}
              {growersWebsite && (
                <div>
                  <div className="text-small font-tiempos font-extrabold leading-[16.8px]">
                    Growers
                  </div>
                  <Link
                    href={`https://${growersWebsite}`}
                    className="text-small font-bold text-link"
                  >
                    {growersWebsite}
                  </Link>
                </div>
              )}
              {socialNetworks?.length > 0 && (
                <div className="flex gap-[22px] mt-[14px] lg:mt-4'">
                  <Foreach data={socialNetworks}>
                    {(item) => {
                      if (!item.link) {
                        return null
                      }
                      return (
                        <Link href={item.link || '#'}>
                          <Image
                            width={42}
                            height={42}
                            src={urlForImage(item.icon)?.url() || ''}
                            alt="social network"
                            className="bg-yellow100 transition duration-300 rounded-full hover:bg-yellow60"
                          />
                        </Link>
                      )
                    }}
                  </Foreach>
                </div>
              )}
            </div>
          </div>
          {copyright && (
            <div className="text-small mt-5 lg:mt-8">{copyright}</div>
          )}
        </div>
      </footer>
    </div>
  )
}
