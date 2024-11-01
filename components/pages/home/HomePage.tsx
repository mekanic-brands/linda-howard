import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { HomePagePayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data }: HomePageProps) {
  const { body } = data ?? {}

  return (
    <div>
      {body && (
        <CustomPortableText paragraphClasses="text-sm lg:text-p" value={body} />
      )}
    </div>
  )
}

export default HomePage
