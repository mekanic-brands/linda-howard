import type { IVideoBlockProps } from '@/types'

import ButtonLinkBlock from './ButtonLinkBlock'
import Foreach from './Foreach'
import Video from './Video'

export function VideoBlock({ data }: { data: IVideoBlockProps }) {
  const { title, subtitle, actions, videos } = data ?? {}
  return (
    <section className="pt-[54px] lg:py-0 bg-gold10 lg:bg-white relative">
      <div className="px-[20px] flex flex-col lg:flex-row items-center justify-center lg:absolute lg:top-0 w-full gap-[32px] lg:gap-[50px]">
        <Foreach data={videos}>{({ url }) => <Video src={url} />}</Foreach>
      </div>
      <div className="lg:h-[190px]" />
      <div className="py-[54px] lg:pb-[72px] bg-gold10 lg:pt-[190px]">
        <div className="container-large text-center">
          {title && (
            <h2 className="mb-4 font-tiempos lg:mb-[18px] text-gold100">
              {title}
            </h2>
          )}
          <p className="text-[18px] lg:text-[32px] mb-[24px] lg:mb-[32px]">
            {subtitle}
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-[18px] justify-center">
            <Foreach data={actions}>
              {(action) => <ButtonLinkBlock {...action} />}
            </Foreach>
          </div>
        </div>
      </div>
    </section>
  )
}
