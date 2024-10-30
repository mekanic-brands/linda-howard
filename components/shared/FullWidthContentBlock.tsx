import { FullWidthContentBlockType } from '@/types'

import { CustomPortableText } from './CustomPortableText'

export function FullWidthContentBlock({
  data,
}: {
  data: FullWidthContentBlockType
}) {
  const { content } = data
  return (
    <section className="container-large py-[54px] lg:py-[76px]">
      <div className="text-center">
        <div className="content-block font-montserrat">
          {content && <CustomPortableText value={content} />}
        </div>
      </div>
    </section>
  )
}
