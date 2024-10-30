import Image from 'next/image'
import React from 'react'

import { urlForImage } from '@/sanity/lib/utils'
import { IGenericHeaderProps } from '@/types'

const GenericHeaderBlock = ({
  title,
  subtitle,
  featureImage,
}: IGenericHeaderProps) => {
  const featureImageUrl = featureImage
    ? urlForImage(featureImage)?.url() || ''
    : ''
  return (
    <>
      <div className="bg-lightRed100">
        <div className="container-large pt-2 pb-9 lg:pt-[42px] lg:pb-[76px] text-center">
          {title && <h1 className="text-white">{title}</h1>}
          {subtitle && (
            <p className=" text-white text-[32px] leading-[38.4px] lg:text-h2 mt-5 lg:mt-8">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {featureImageUrl && (
        <div className="bg-headerBg bg-top 3xl:bg-bottom bg-contain 3xl:bg-cover  bg-no-repeat  flex items-center justify-center">
          <Image
            src={featureImageUrl}
            alt="feature image"
            width={750}
            height={750}
            className="w-[278px] h-[278px]  md:w-[550px] md:h-[550px]  lg:w-[750px] lg:h-[750px] rounded-full"
          />
        </div>
      )}
    </>
  )
}
export default GenericHeaderBlock
