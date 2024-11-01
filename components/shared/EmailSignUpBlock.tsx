import type { IEmailSignUpProps } from '@/types'

import Foreach from './Foreach'
import SourcesForm from './SourcesForm'

export function EmailSignUpBlock({ data }: { data: IEmailSignUpProps }) {
  const { title, subtitle, headline, latestResources } = data ?? {}
  return (
    <section className="bg-white">
      <div className="container-small py-[86px] lg:py-[72px]">
        <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[50px]">
          <div className="flex-[1.3] lg:pr-[110px] lg:border-r border-green100 lg:py-[65px] mb-[20px] lg:mb-0">
            <h2 className="mb-[12px] font-tiempos text-gold100">{title}</h2>
            <p className="lg:text-[18px] mb-[16px] lg:mb-[32px]">{subtitle}</p>
            <SourcesForm />
          </div>
          <div className="flex-1 lg:py-[65px]">
            <p className="font-helvetica font-bold mb-[18px] lg:mb-[32px] lg:text-[18px] leading-[1.25]">
              {headline}
            </p>
            <div>
              <Foreach data={latestResources}>
                {(content) => (
                  <p className="py-[18px] lg:text-[18px] border-b border-green100 font-helvetica font-bold text-green100 !mb-0 last:border-b-0">
                    {content?.resource}
                  </p>
                )}
              </Foreach>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
