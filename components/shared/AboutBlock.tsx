import type { IAboutProps } from '@/types'

import ButtonLinkBlock from './ButtonLinkBlock'
import { CustomPortableText } from './CustomPortableText'
import SanityImage from './SanityImage'

export function AboutBlock({ data }: { data: IAboutProps }) {
  const { title, content, buttonLink, image } = data ?? {}
  return (
    <section className="bg-gold100 relative">
      <div className="container-large py-[54px] lg:py-[72px]">
        <div className="lg:max-w-[43.68vw] w-full">
          {title && (
            <h2 className="mb-4 font-tiempos lg:mb-[16px] text-white">
              {title}
            </h2>
          )}
          <CustomPortableText
            paragraphClasses="text-sm lg:text-[18px] text-white leading-[1.45] !mb-0"
            value={content}
          />
          {buttonLink && (
            <div className="mt-[20px] lg:mt-8">
              <ButtonLinkBlock {...buttonLink} variant="secondary" />
            </div>
          )}
        </div>
      </div>
      <div className="lg:max-w-[42.1vw] hidden lg:block h-full w-full absolute bottom-[30px] right-0">
        <SanityImage
          image={image}
          alt="about"
          fill
          className="object-scale-down"
        />
      </div>
    </section>
  )
}
