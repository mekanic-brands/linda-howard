import first from 'lodash/first'
import last from 'lodash/last'

import type { IHeaderContentProps } from '@/types'

import SanityImage from './SanityImage'

export function HeaderContentBlock({ data }: { data: IHeaderContentProps }) {
  const { testimonials, bookCover } = data ?? {}
  const leftTestimonials = first(testimonials)
  const rightTestimonials = last(testimonials)
  return (
    <section className="bg-gold10 relative">
      <div>
        <div className="container-large py-[34px] lg:py-[72px] flex flex-col lg:flex-row gap-[24px] items-center justify-between">
          <div className="bg-gold20 rounded-[12px] p-[24px] space-y-[12px] lg:w-[31%] w-full">
            <h3 className="font-light text-gold100">
              {leftTestimonials?.title}
            </h3>
            <p className="font-helvetica text-[15px]">
              {leftTestimonials?.quote}
            </p>
            <p className="font-helvetica font-bold text-sm">
              {leftTestimonials?.attribution}
            </p>
          </div>

          <div className="lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2">
            <div className="relative w-[250px] lg:w-[28.88vw] 2xl:w-[400px] aspect-[437/732]">
              <SanityImage image={bookCover} fill alt="book cover"  className='object-scale-down'/>
            </div>
          </div>
          <div className="bg-gold20 rounded-[12px] p-[24px] space-y-[12px] lg:w-[31%] w-full">
            <h3 className="font-light text-gold100">
              {rightTestimonials?.title}
            </h3>
            <p className="font-helvetica text-[15px]">
              {rightTestimonials?.quote}
            </p>
            <p className="font-helvetica font-bold text-sm">
              {rightTestimonials?.attribution}
            </p>
          </div>
        </div>
        <div className="lg:h-[180px] 2xl:h-[200px] bg-white w-full" />
      </div>
    </section>
  )
}
