import Image from 'next/image'
import React from 'react'

import { urlForImage } from '@/sanity/lib/utils'
import type { MorphologyBlockType } from '@/types'

export function MorphologyBlock({ data }: { data: MorphologyBlockType }) {
  const { title, leftApple, centerApple, rightApple } = data
  const convertNewlinesToBreaks = (text: string) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))
  }
  return (
    <section>
      <div className="flex bg-mobileGradientBg  lg:bg-gradientBg pb-[54px] lg:pb-[76px] lg:mb-[76px] justify-between lg:gap-[22px]">
        {leftApple && (
          <div className="flex justify-between  w-[33%] gap-4 z-10 relative">
            <div className="relative flex items-end  justify-start w-full ">
              <h3 className="absolute bottom-[10px] lg:bottom-[37px] leading-none left-[20px] right-[unset] lg:-right-[44px] lg:left-[unset] 2xl:left-[145px] 2xl:right-[unset] bg-white rounded-[12px] lg:rounded-[22px] p-4 lg:p-[22px] text-darkRed100 z-10">
                {leftApple.label}
              </h3>
              {leftApple.image && (
                <Image
                  src={urlForImage(leftApple.image)?.url() || ''}
                  alt="apple"
                  width={245}
                  height={430}
                  className="w-[85.5px] h-[150px] lg:w-[245px] lg:h-[430px] object-contain object-bottom"
                />
              )}
            </div>
            <div className="absolute rotate-[-23deg] md:rotate-0 bottom-[160px] left-0 flex items-end justify-center md:pb-[145px] w-full md:static">
              <Image
                src="/icons/ArrowRight.svg"
                alt="arrow right"
                width={173}
                height={53}
                className="w-[72px] h-[22px] md:w-[173px] md:h-[53px] object-contain"
              />
            </div>
          </div>
        )}

        {centerApple && (
          <div className="relative text-center flex justify-center items-center flex-col pb-[100px] lg:pb-0">
            {centerApple.image && (
              <Image
                src={urlForImage(centerApple.image)?.url() || ''}
                alt="apple"
                width={588}
                height={588}
                className="w-[236px] h-[236px] lg:w-[588px] lg:h-[588px] object-contain"
              />
            )}
            {title && (
              <div className="lg:p-[76px] relative -mt-[72px] lg:mt-0 lg:absolute lg:-bottom-[152px] p-9 lg:rounded-[42px]  rounded-[12px] bg-darkRed100 w-full xl:w-[682px]">
                <h2 className="font-literata text-white">
                  {convertNewlinesToBreaks(title)}
                </h2>
                <h3 className="absolute -top-[32px] leading-none left-[50%] translate-x-[-50%] bg-white rounded-[12px] lg:rounded-[22px] p-4 lg:p-[22px] text-darkRed100">
                  {centerApple.label}
                </h3>
              </div>
            )}
          </div>
        )}

        {rightApple && (
          <div className="flex justify-between w-[33%] gap-4 z-10 relative">
            <div className="absolute rotate-[23deg] md:rotate-0 bottom-[160px] right-0 flex items-end justify-center md:pb-[145px] w-full md:static">
              <Image
                src="/icons/ArrowLeft.svg"
                alt="arrow left"
                width={173}
                height={53}
                className="w-[72px] h-[22px] md:w-[173px] md:h-[53px] object-contain"
              />
            </div>
            <div className="relative  items-end flex w-full justify-end ">
              <h3 className="absolute  bottom-[10px] lg:bottom-[37px] leading-none right-[44px] bg-white rounded-[12px] lg:rounded-[22px] p-4 lg:p-[22px] text-darkRed100 z-10">
                {rightApple.label}
              </h3>
              {rightApple.image && (
                <Image
                  src={urlForImage(rightApple.image)?.url() || ''}
                  alt="apple"
                  width={245}
                  height={430}
                  className="w-[85.5px] h-[150px] lg:w-[245px] lg:h-[430px] object-contain object-bottom"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
