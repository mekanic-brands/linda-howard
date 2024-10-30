import get from 'lodash/get'
import map from 'lodash/map'
import uniqBy from 'lodash/uniqBy'
import { MetadataRoute } from 'next'

import { loadPages } from '@/sanity/loader/loadQuery'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!
  const dynamicPagesRes = await loadPages()
  let dynamicPages = get(dynamicPagesRes, 'data', []) as {
    slug: string
    _updatedAt: string
  }[]
  dynamicPages = uniqBy(dynamicPages, 'slug')
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      priority: 1,
    },
    ...map(dynamicPages, (page) => ({
      url: `${siteUrl}/${get(page, 'slug', '')}`,
      lastModified: get(page, '_updatedAt', new Date()),
    })),
  ]
}
