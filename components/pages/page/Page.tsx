import find from 'lodash/find'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { IMarkerListProps, PagePayload } from '@/types'

export interface PageProps {
  data: PagePayload | null
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, slug } = data ?? {}
  return (
    <div className={`${slug} ${slug}-page`}>
      {body && (
        <CustomPortableText
          paragraphClasses="max-w-3xl text-gray-600 text-xl"
          value={body}
        />
      )}
    </div>
  )
}

export default Page
