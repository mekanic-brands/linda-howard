'use client'
import get from 'lodash/get'
import find from 'lodash/find'

import { cn } from '@/lib/utils'
import { useMemo, useState } from 'react'
import Foreach from './Foreach'
import { IIntroBlockProps } from '@/types'
import { CustomPortableText } from './CustomPortableText'

const Intro = ({
  sectionOutline,
  sectionContent,
}: Omit<IIntroBlockProps, 'title' | 'subtitle'>) => {
  const [step, setStep] = useState<number>(1)
  const currentSectionContent = useMemo(
    () => find(sectionContent, { sectionNumber: step }),
    [step, sectionContent],
  )
  const handleClick = (step: number) => () => {
    setStep(step)
  }

  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="flex-1 lg:min-w-[441px] mb-[24px] lg:mb-0">
        <p className="lg:text-[18px] font-helvetica font-bold leading-[1.25] mb-[24px] lg:max-w-[331px] w-full">
          {get(sectionOutline, 'headline', '')}
        </p>
        <div className="space-y-[16px] relative before:absolute before:w-[1px] before:left-[21px] lg:before:left-[25px] before:top-1/2 before:-translate-y-1/2 before:h-full before:bg-red100 overflow-hidden">
          <Foreach data={get(sectionOutline, 'outlineItems', []) as any[]}>
            {({ outlineNumber, outlineLabel }, { index }) => (
              <div
                className={cn(
                  'z-10 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[2px] before:bg-grey100 before:mt-[2px] cursor-pointer transition-all duration-200',
                  {
                    'before:w-0 lg:before:w-full ': step == outlineNumber,
                    'before:w-0 lg:before:w-0': step != outlineNumber,
                  },
                )}
                onClick={handleClick(+index + 1)}
              >
                <div className="relative z-10 flex items-center gap-[16px] bg-white w-fit pr-[10px]">
                  <div
                    className={cn(
                      'min-w-[42px] h-[42px] lg:min-w-[50px] lg:h-[50px] rounded-full bg-red100 flex items-center justify-center border border-red100 transition-all duration-200',
                      {
                        'bg-red100 text-white': step == outlineNumber,
                        'bg-white text-red100': step != outlineNumber,
                      },
                    )}
                  >
                    <span className="font-helvetica font-bold lg:text-[18px]">
                      {outlineNumber}
                    </span>
                  </div>
                  <p className="lg:text-[18px] font-medium text-green100">
                    {outlineLabel}
                  </p>
                </div>
              </div>
            )}
          </Foreach>
        </div>
      </div>
      <div className="bg-grey100 w-full flex-3 lg:px-[120px] lg:py-[72px] px-[20px] py-[24px]">
        <p className="text-gold100 text-[18px] lg:text-[24px]">
          {get(currentSectionContent, 'sectionIntro', '')}
        </p>
        <div className="my-[18px] lg:my-[24px] relative before:absolute before:w-full before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:bg-red100">
          <div className="w-fit mx-auto bg-red100 rounded-[3px] p-[8px] font-helvetica font-bold text-white text-sm relative z-10">
            Section Excerpt
          </div>
        </div>
        <CustomPortableText
          paragraphClasses="lg:text-[18px] text-green100 !mb-0"
          value={get(currentSectionContent, 'sectionExcerpt', [])}
        />
        <p className="text-sm font-helvetica font-bold mt-[8px]">
          {get(currentSectionContent, 'sectionLabel', '')}
        </p>
      </div>
    </div>
  )
}

export default Intro
