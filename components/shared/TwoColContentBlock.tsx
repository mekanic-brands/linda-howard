import { cn } from '@/lib/utils'
import { TwoColContentBlockType } from '@/types'

import { CustomPortableText } from './CustomPortableText'

export function TwoColContentBlock({ data }: { data: TwoColContentBlockType }) {
  const { contentLeft, contentRight } = data
  return (
    <section className="container-large py-[54px] lg:py-[76px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[65px]">
        <div className="text-block font-montserrat">
          {contentLeft && <CustomPortableText value={contentLeft} />}
        </div>
        <div className="text-block font-montserrat">
          {contentRight && <CustomPortableText value={contentRight} />}
        </div>
      </div>
    </section>
  )
}
