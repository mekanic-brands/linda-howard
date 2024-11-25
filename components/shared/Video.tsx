import { YouTubeEmbed } from '@next/third-parties/google'

import { IVideoProps } from '@/types'

const Video = ({
  videoid
}: IVideoProps) => {
  return videoid ? (
    <div className="relative lg:w-[40.31vw] lg:max-w-[610px] w-full aspect-video bg-black rounded-[12px] overflow-hidden">
      <YouTubeEmbed videoid={videoid} />
    </div>
  ) : (
    <></>
  )
}

export default Video
