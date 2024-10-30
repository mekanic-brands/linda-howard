'use client'
import Image from 'next/image'
import { useCallback, useState } from 'react'

import { cn, sleep } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/utils'
import { IVideoProps } from '@/types'

import PlayButton from '../ui/play-button'
import React from 'react'

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
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [showPlayButton, setShowPlayButton] = useState<boolean>(true)

  const handlePlay = useCallback(async () => {
    setIsPlaying(true)
    await sleep(400)
    setShowPlayButton(false)
  }, [])

  return src ? (
    <div className="container-small">
      <div className="relative w-full aspect-video bg-black lg:rounded-[30px] rounded-[15px] overflow-hidden">
        {showPlayButton && (
          <PlayButton onClick={handlePlay} isPlaying={isPlaying}>
            {content && (
              <p className="text-white font-semibold text-h3">{content}</p>
            )}
          </PlayButton>
        )}
        {!isPlaying && (
          <Image
            className={cn('w-full h-full absolute top-0 left-0')}
            src={
              posterUrl
                ? urlForImage(posterUrl)?.url() || ''
                : '/images/poster-default.webp'
            }
            layout="fill"
            alt="poster"
            objectFit="cover"
            priority
          />
        )}

        {isPlaying && (
          <iframe
            className={cn(
              'w-full h-full absolute top-0 left-0 transition duration-700',
              className,
            )}
            data-src={`${src}?autoplay=1`}
            allowFullScreen={allowFullScreen}
            allow={allow}
            src={`${src}?autoplay=1`}
            {...restProps}
          />
        )}
      </div>
    </div>
  ) : (
    <></>
  )
}

export default Video
