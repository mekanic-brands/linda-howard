import React from 'react'

import { cn } from '@/lib/utils'
import { ITextProps } from '@/types'

import { CustomPortableText } from './CustomPortableText'

const TextBlock = ({ title, content }: ITextProps) => {
  return (
    <div className="container-small flex flex-col lg:flex-row lg:gap-[20px] lg:py-[84px] py-[66px]">
      {title && (
        <h2 className="lg:max-w-[423px] lg:min-w-[423px] w-full mb-[18px] lg:mb-0">
          {title}
        </h2>
      )}
      <div className='text-block'>
        {content && (
          <CustomPortableText
            paragraphClasses={cn(
              '',
              {
                '!mb-0 first:text-lightBlue100 first:font-victorSerif first:font-medium lg:first:text-[28px] first:text-[22px] first:leading-[1.45]':
                  title,
              },
              { '!mb-[1.5rem]': !title },
            )}
            value={content}
          />
        )}
      </div>
    </div>
  )
}

export default TextBlock
