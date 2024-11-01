import { ImageProps } from 'next/image'
import { LinkProps } from 'next/link'
import type { PortableTextBlock } from 'next-sanity'
import type { Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  title?: string
  body?: PortableTextBlock[]
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
  _updatedAt?: string
}

export interface socialNetworks {
  title: string
  items: {
    icon: Image
    link: string
  }[]
}

export interface SettingsPayload {
  header: {
    buttonLink: IButtonLinkProps
    logo: Image
  }
  ogImage?: Image
  robots?: string
  socialNetworks?: socialNetworks
  mediaContact: {
    title: string
    subtitle: string
    email: string
  }
}

export interface CtaBlock {
  title?: string
  subtitle?: string
  buttonLink?: IButtonLinkProps
}

export interface FullWidthContentBlockType {
  content?: PortableTextBlock[]
  title: PortableTextBlock[]
}
export interface Button {
  title: string
  url: string
}

export interface IVideoProps
  extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  posterUrl?: Image
  content?: string
}

export interface IPlayButtonProps extends React.PropsWithChildren {
  onClick: () => void
  isPlaying?: boolean
}

export interface IButtonLinkProps
  extends React.PropsWithChildren<
      Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>
    >,
    LinkProps {
  label: string
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined
}

export interface IIntroProps {
  title: string
  content: PortableTextBlock[]
  buttonLink: IButtonLinkProps
  video: IVideoProps
}

export interface ISanityImageProps extends Omit<ImageProps, 'src'> {
  image: Image
}

export interface TestimonialPayload {
  position: 'Left' | 'Right'
  testimonialRow: {
    title: string
    quote: string
    attribution: string
  }[]
}

export interface IHeaderContentProps {
  testimonials: { title: string; quote: string; attribution: string }[]
  bookCover: Image
}

export interface IAboutProps {
  title: string
  content: PortableTextBlock[]
  image: Image
  buttonLink: IButtonLinkProps
}

export interface IEmailSignUpProps {
  title: string
  subtitle: string
  headline: string
  latestResources: { resource: string }[]
}

export interface IVideoBlockProps {
  title: string
  subtitle: string
  videos: { url: string }[]
  actions: IButtonLinkProps[]
}

export interface IIntroBlockProps {
  title: string
  subtitle: string
  sectionOutline: {
    headline: string
    outlineItems: { outlineNumber: number; outlineLabel: string }[]
  }
  sectionContent: {
    sectionNumber: number
    sectionIntro: string
    sectionExcerpt: PortableTextBlock[]
    sectionLabel: string
  }[]
}
