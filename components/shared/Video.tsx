'use client'

import { cn } from '@/lib/utils'
import { IVideoProps } from '@/types'

const Video = ({
  src = '',
  allowFullScreen = true,
  allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
  referrerPolicy = 'strict-origin-when-cross-origin',
  posterUrl,
  className,
  content,
  ...restProps
}: IVideoProps) => {
  return src ? (
    <div className="relative lg:w-[40.31vw] lg:max-w-[610px] w-full aspect-video bg-black rounded-[12px] overflow-hidden">
      <iframe
        className={cn(
          'w-full h-full absolute top-0 left-0 transition duration-700',
          className,
        )}
        data-src={`${src}`}
        allowFullScreen={allowFullScreen}
        allow={allow}
        src={`${src}`}
        {...restProps}
      />
    </div>
  ) : (
    <></>
  )
}

export default Video
