import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from 'next-sanity'
import type { Image } from 'sanity'

import ImageBox from '@/components/shared/ImageBox'

import { AccordionBlock } from './AccordionBlock'
import { CtaBlock } from './CtaBlock'
import { FullWidthContentBlock } from './FullWidthContentBlock'
import GenericHeaderBlock from './GenericHeaderBlock'
import LogoBlock from './LogoBlock'
import { MorphologyBlock } from './MorphologyBlock'
import { PairingBlock } from './PairingBlock'
import { TestimonialBlock } from './TestimonalBlock'
import TextBlock from './TextBlock'
import { TwoColContentBlock } from './TwoColContentBlock'

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
      accordionBlock: ({ value }) => {
        return <AccordionBlock data={value} />
      },
      twoColContentBlock: ({ value }) => {
        return <TwoColContentBlock data={value} />
      },
      fullWidthContentBlock: ({ value }) => {
        return <FullWidthContentBlock data={value} />
      },
      pairingBlock: ({ value }) => {
        return <PairingBlock data={value} />
      },
      morphologyBlock: ({ value }) => {
        return <MorphologyBlock data={value} />
      },
      textBlock: ({ value }) => {
        return <TextBlock {...value} />
      },
      genericHeaderBlock: ({ value }) => {
        return <GenericHeaderBlock {...value} />
      },
      logoBlock: ({ value }) => {
        return <LogoBlock {...value} />
      },
      testimonialBlock: ({ value }) => {
        return <TestimonialBlock {...value} />
      },
    },
  }

  return <PortableText components={components} value={value} />
}
