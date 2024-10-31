import type { CtaBlock as CtaBlockType } from '@/types'

import ButtonLinkBlock from './ButtonLinkBlock'

export function CtaBlock({ data }: { data: CtaBlockType }) {
  const { title, subtitle, buttonLink } = data ?? {}
  return (
    <section className="bg-gold10">
      <div className="container-small py-[86px] lg:py-[120px]">
        <div className="text-center">
          {title && (
            <h2 className="mb-4 font-literata lg:mb-[18px] text-gold100">
              {title}
            </h2>
          )}
          {subtitle && <p className="text-green100 text-[18px] lg:text-[32px]">{subtitle}</p>}
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
