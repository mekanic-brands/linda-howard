import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/utils'
import type { PairingBlockType } from '@/types'

import Foreach from './Foreach'

export function PairingBlock({ data }: { data: PairingBlockType }) {
  const { title, subtitle, cards } = data
  return (
    <section>
      <div className="container-large py-[54px] lg:py-[136px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-14">
          <div className="xl:col-span-2 ">
            <div className="sticky left-0 top-[54px]">
              {title && (
                <h2 className="mb-4 font-tiempos lg:mb-[22px] text-darkRed100  ">
                  {title}
                </h2>
              )}
              {subtitle && <p>{subtitle}</p>}
            </div>
          </div>
          {cards && (
            <div className="flex flex-col gap-20 lg:gap-28 justify-center items-center lg:items-start">
              {
                <Foreach data={cards}>
                  {(card) => {
                    const imageUrl = card.image
                      ? urlForImage(card.image)?.url() || ''
                      : ''
                    return (
                      <div className="card-item sticky left-0 top-[54px] w-fit">
                        <div className="relative">
                          <h3 className="absolute top-[32px] leading-none left-[50%] translate-x-[-50%] bg-white rounded-[12px] lg:rounded-[22px] p-4 lg:p-[22px] text-darkRed100">
                            {card.label}
                          </h3>
                          {card.image && (
                            <Image
                              src={imageUrl}
                              alt="icon"
                              width={376}
                              height={478}
                              className="w-[280px] h-[350px] lg:w-[376px] lg:h-[478px] rounded-[12px] lg:rounded-[22px] object-cover shadow-cardShadow"
                            />
                          )}
                        </div>
                      </div>
                    )
                  }}
                </Foreach>
              }
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
