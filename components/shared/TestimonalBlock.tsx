'use server'
import get from 'lodash/get'

import { reorderTestimonials } from '@/lib/utils'
import { loadTestimonials } from '@/sanity/loader/loadQuery'
import { TestimonialPayload } from '@/types'

import { CustomPortableText } from './CustomPortableText'
import Foreach from './Foreach'

export async function TestimonialBlock({ title }) {
  const res = await loadTestimonials()
  const data = reorderTestimonials(
    get(res, 'data', []) as TestimonialPayload[],
  ) as TestimonialPayload[]

  return (
    <section className="bg-gold10 py-[54px] lg:py-[72px]">
      <div className="container-small">
        <h2 className="mb-[20px] lg:mb-[50px]">
          <CustomPortableText
            paragraphClasses="text-gold100 lg:text-h2 text-[32px] leading-[1.125] !mb-0"
            value={title}
          />
        </h2>
        <div className="flex flex-col lg:flex-row lg:items-center gap-[20px] lg:gap-[50px]">
          <Foreach data={data}>
            {({ testimonialRow }) => (
              <div className="space-y-[20px] lg:space-y-[50px]">
                <Foreach data={testimonialRow}>
                  {({ title, quote, attribution }) => (
                    <div className="bg-gold20 rounded-[12px] p-[24px] space-y-[12px]">
                      <h3 className="font-light text-gold100">{title}</h3>
                      <p className="font-helvetica text-[15px]">{quote}</p>
                      <p className="font-helvetica font-bold text-sm">{attribution}</p>
                    </div>
                  )}
                </Foreach>
              </div>
            )}
          </Foreach>
        </div>
      </div>
    </section>
  )
}
