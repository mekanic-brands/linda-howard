import type { IIntroBlockProps } from '@/types'
import Intro from './Intro'

export function IntroBlock({ data }: { data: IIntroBlockProps }) {
  const { title, subtitle, sectionContent, sectionOutline } = data ?? {}
  return (
    <section className="bg-white relative">
      <div className="px-[20px] lg:pr-0 lg:pl-[11.89vw] py-[54px] lg:py-[72px]">
        <div className="lg:max-w-[57.54vw] w-full mb-[24px] lg:mb-[50px]">
          {title && (
            <h2 className="mb-4 font-tiempos lg:mb-[16px] text-gold100">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-[18px] lg:text-[32px] leading-[1.25] text-green100">
              {subtitle}
            </p>
          )}
        </div>
        <Intro
          sectionContent={sectionContent}
          sectionOutline={sectionOutline}
        />
      </div>
    </section>
  )
}
