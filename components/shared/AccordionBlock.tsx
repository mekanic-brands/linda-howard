import type { AccordionBlock as AccordionBlockType } from '@/types'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../ui/accordion'
import Foreach from './Foreach'

export function AccordionBlock({ data }: { data: AccordionBlockType }) {
  const { title, items } = data
  return (
    <section className="bg-yellow100">
      <div className="container-large px-0 2xl:px-[8.99vw] py-[86px] lg:py-[136px]">
        {title && (
          <h2 className="mb-[32px] text-darkRed100">
            {title}
          </h2>
        )}
        {items && (
          <Accordion type="single" collapsible>
            <Foreach data={items}>
              {(item) => {
                return (
                  <AccordionItem value={`item-${item.title}`}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                  </AccordionItem>
                )
              }}
            </Foreach>
          </Accordion>
        )}
      </div>
    </section>
  )
}
