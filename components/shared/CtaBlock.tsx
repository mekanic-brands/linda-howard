import type { CtaBlock as CtaBlockType } from '@/types'

import ButtonLinkBlock from './ButtonLinkBlock'

export function CtaBlock({ data }: { data: CtaBlockType }) {
  const { title, subtitle, buttonLink } = data ?? {}
  return (
    <section className="bg-lightRed100">
      <div className="container-large py-[86px] lg:py-[136px]">
        <div className="text-center">
          {title && (
            <h2 className="mb-4 font-literata lg:mb-[22px] text-white">
              {title}
            </h2>
          )}
          {subtitle && <p className="text-white">{subtitle}</p>}
          {buttonLink && (
            <div className="mt-[20px] lg:mt-8">
              <ButtonLinkBlock {...buttonLink} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
