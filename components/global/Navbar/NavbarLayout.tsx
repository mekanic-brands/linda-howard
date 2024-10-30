'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Foreach from '@/components/shared/Foreach'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { resolveHref, urlForImage } from '@/sanity/lib/utils'
import type { SettingsPayload } from '@/types'

interface NavbarProps {
  data: SettingsPayload
}

// spell-checker: disable-next-line
export default function Navbar({ data }: NavbarProps) {
  const pathname = usePathname()
  const { menuItems = [], evercrispAppleLogo = '', mobileLogo } = data ?? {}
  const evercrispAppleLogoUrl = evercrispAppleLogo
    ? urlForImage(evercrispAppleLogo)?.url() || ''
    : ''
  const mobileLogoUrl = mobileLogo ? urlForImage(mobileLogo)?.url() || '' : ''
  return (
    <header className="bg-lightRed100">
      <div
        className={`container-large flex py-[20px] lg:py-8 justify-between items-center gap-4 `}
      >
        {evercrispAppleLogoUrl && (
          <Link href="/" className="hidden lg:block">
            <Image
              width={261}
              height={89.66}
              src={evercrispAppleLogoUrl}
              alt="logo"
            />
          </Link>
        )}
        {mobileLogoUrl && (
          <Link href="/" className="lg:hidden">
            <Image width={72} height={76.66} src={mobileLogoUrl} alt="logo" />
          </Link>
        )}
        <div className={`flex gap-6 items-center `}>
          <Foreach data={menuItems}>
            {(menuItem, { index }) => {
              const href = resolveHref(menuItem?._type, menuItem?.slug)
              if (!href) {
                return null
              }
              // Check if this is the last item
              const isLastItem = index === menuItems.length - 1 
              if (isLastItem) {
                return (
                  <Link href={href}>
                    <Button>{menuItem.title}</Button>
                  </Link>
                )
              }

              return (
                <Link
                  className={cn('text-white text-[18px] lg:text-[22px] font-extrabold')}
                  href={href}
                >
                  {menuItem.title}
                </Link>
              )
            }}
          </Foreach>
        </div>
      </div>
    </header>
  )
}
