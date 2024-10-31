import { FullWidthContentBlockType } from '@/types'

import { CustomPortableText } from './CustomPortableText'

export function FullWidthContentBlock({
  data,
}: {
  data: FullWidthContentBlockType
}) {
  const { content, title } = data
  return (
    <section className="px-[20px] py-[54px] lg:py-[72px]">
      <div className="lg:max-w-[52.21vw] w-full mx-auto">
        <h2 className="mb-[20px] lg:mb-[50px]">
          <CustomPortableText
            paragraphClasses="text-gold100 lg:text-h2 text-[32px] leading-[1.125] text-center"
            value={title}
          />
        </h2>
        <div className="content-block font-montserrat">
          {content && <CustomPortableText value={content} />}
        </div>
      </div>
    </section>
  )
}
