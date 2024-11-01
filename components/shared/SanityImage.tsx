import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/utils'
import { ISanityImageProps } from '@/types'

const SanityImage = ({ image, ...props }: ISanityImageProps) => {
  return (
    <Image {...props} alt={props.alt} src={urlForImage(image)?.url() || ''} />
  )
}

export default SanityImage
