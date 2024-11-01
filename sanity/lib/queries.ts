import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    title,
    body[]{
      ...
    }
  }
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    body[]{
      ...
    }
  }
`

export const testimonialsQuery = groq`
  *[_type == "testimonials"] {
    position,
    testimonialRow[]{
      title, 
      quote,
      attribution
    }
  }
`

export const pagesQuery = groq`
  *[_type == "page"]{
    "slug": slug.current,
    _updatedAt
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    ogImage,
    robots,
    socialNetworks,
    mediaContact,
    header
  }
`