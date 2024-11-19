import Link from 'next/link'
import React from 'react'

import { IButtonLinkProps } from '@/types'

import { Button } from '../ui/button'

const ButtonLinkBlock = ({
  label,
  className,
  variant,
  size,
  ...props
}: IButtonLinkProps) => {
  return props.href ? (
    <Link {...props}>
      <Button className={className} variant={variant || 'default'} size={size || 'default'}>
        {label}
      </Button>
    </Link>
  ) : (
    <></>
  )
}

export default ButtonLinkBlock
