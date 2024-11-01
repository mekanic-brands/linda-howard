import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import size from 'lodash/size'
import React from 'react'

import { cn } from '@/lib/utils'

interface IForeachProps<T> {
  children: (
    item: T,
    info: { index: number; isFirst: boolean; isLast: boolean },
  ) => React.ReactNode
  showEmpty?: boolean
  data?: T[]
  emptyClassName?: string
  textEmpty?: string
}

const Foreach = <T,>({
  children,
  data: items = [],
  showEmpty = false,
  emptyClassName,
  textEmpty = 'No data found.',
}: IForeachProps<T>) => {
  if (isEmpty(items) && showEmpty)
    return (
      <div className={cn('text-gray-500', emptyClassName)}>{textEmpty}</div>
    )
  return (
    <React.Fragment>
      {map(items, (item, index) => (
        <React.Fragment key={index}>
          {children(item, {
            index: +index,
            isFirst: +index === 0,
            isLast: size(items) - 1 === +index,
          })}
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default Foreach
