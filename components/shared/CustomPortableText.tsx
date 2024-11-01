import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from 'next-sanity'
import type { Image } from 'sanity'

import ImageBox from '@/components/shared/ImageBox'

import { AboutBlock } from './AboutBlock'
import { CtaBlock } from './CtaBlock'
import { EmailSignUpBlock } from './EmailSignUpBlock'
import { FullWidthContentBlock } from './FullWidthContentBlock'
import { HeaderContentBlock } from './HeaderContentBlock'
import { IntroBlock } from './IntroBlock'
import { TestimonialBlock } from './TestimonalBlock'
import { VideoBlock } from './VideoBlock'

export function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className={paragraphClasses}>{children}</p>
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        )
      },
    },
    types: {
      image: ({
        value,
      }: {
        value: Image & { alt?: string; caption?: string }
      }) => {
        return (
          <div className="my-6 space-y-2">
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper="relative aspect-[16/9]"
            />
            {value?.caption && <div className="text-base">{value.caption}</div>}
          </div>
        )
      },
      ctaBlock: ({ value }) => {
        return <CtaBlock data={value} />
      },
      aboutBlock: ({ value }) => {
        return <AboutBlock data={value} />
      },
      headerContentBlock: ({ value }) => {
        return <HeaderContentBlock data={value} />
      },
      emailSignUpBlock: ({ value }) => {
        return <EmailSignUpBlock data={value} />
      },
      videoBlock: ({ value }) => {
        return <VideoBlock data={value} />
      },
      introBlock: ({ value }) => {
        return <IntroBlock data={value} />
      },
      fullWidthContentBlock: ({ value }) => {
        return <FullWidthContentBlock data={value} />
      },
      testimonialBlock: ({ value }) => {
        return <TestimonialBlock {...value} />
      },
    },
  }

  return <PortableText components={components} value={value} />
}
