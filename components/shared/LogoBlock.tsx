import get from 'lodash/get'
import Link from 'next/link'

import { getSanityImageDimension } from '@/lib/utils'
import { ILogoProps } from '@/types'

import Foreach from './Foreach'
import SanityImage from './SanityImage'

const LogoBlock = ({ logos, content }: ILogoProps) => {
  return (
    <div className="container-large py-[54px] lg:py-[76px]">
      <h4 className="text-center mb-[36px] lg:mb-[65px] font-tiempos font-extrabold [line-height:24px] lg:[line-height:28.8px]">{content}</h4>
      <div className="flex lg:flex-row flex-wrap gap-y-[20px] gap-x-[20px] lg:gap-x-[54px] items-center justify-center">
        <Foreach data={logos}>
          {({ linkUrl, image }, { index }) => {
            const [width, height] = getSanityImageDimension(
              get(image, 'asset._ref', '')?.toString()!,
            )
            return linkUrl ? (
              <Link href={linkUrl} target='_blank'>
                <SanityImage
                  width={width / 2}
                  height={height / 2}
                  image={image}
                  alt={`logo-${index}`}
                  className="object-scale-down"
                />
              </Link>
            ) : (
              <SanityImage
                width={width / 2}
                height={height / 2}
                image={image}
                alt={`logo-${index}`}
                className="object-scale-down"
              />
            )
          }}
        </Foreach>
      </div>
    </div>
  )
}

export default LogoBlock
