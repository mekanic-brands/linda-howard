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

export interface ExternalOptionBox {
  label: string
  url: string
}
export interface socialNetworks {
  icon: Image
  link: string
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
  robots?: string
  evercrispAppleLogo?: Image
  maiaInfo?: string
  footerLogo?: Image
  mobileLogo?: Image
  growersWebsite?: string
  consumersEmail?: string
  copyright?: string
  socialNetworks?: socialNetworks[]
  ctaBlock?: CtaBlock
}

export interface CtaBlock {
  title?: string
  subtitle?: string
  buttonLink?: IButtonLinkProps
}
export interface Card {
  label?: string
  image?: Image
}
export interface PairingBlockType {
  title?: string
  subtitle?: string
  cards?: Card[]
}
export interface MorphologyBlockType {
  title?: string
  leftApple?: Card
  rightApple?: Card
  centerApple?: Card
}
export interface item {
  title?: string
  content?: string
}
export interface AccordionBlock {
  title?: string
  items?: item[]
}
export interface TwoColContentBlockType {
  contentLeft?: PortableTextBlock[]
  contentRight?: PortableTextBlock[]
}
export interface FullWidthContentBlockType {
  content?: PortableTextBlock[]
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
export interface IAboutHeaderProps {
  title: string
  content: string
  video: IVideoProps
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
export interface ITextProps {
  title: string
  content: PortableTextBlock[]
}
export interface IGenericHeaderProps {
  title: string
  subtitle: string
  featureImage: Image
}

export interface ILogoProps {
  content: string
  logos: {
    linkUrl?: string
    image: Image
  }[]
}

export interface ISanityImageProps extends Omit<ImageProps, 'src'> {
  image: Image
}

export interface IMarkerListProps {
  title: string
  content: string
  marketList: {
    state: string
    items: {
      profileName: string
      city: string
      stateCode: string
      zip: string
    }[]
  }[]
}


export interface TestimonialPayload {
  position: 'Left' | 'Right'
  testimonialRow: {
    title: string
    quote: string
    attribution: string
  }[]
}
