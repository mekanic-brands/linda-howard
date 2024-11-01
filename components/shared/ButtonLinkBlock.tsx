import Link from 'next/link'
import React from 'react'

import { IButtonLinkProps } from '@/types'

import { Button } from '../ui/button'

const ButtonLinkBlock = ({
  label,
  className,
  variant,
  ...props
}: IButtonLinkProps) => {
  return props.href ? (
    <Link {...props}>
      <Button className={className} variant={variant || 'default'}>
        {label}
      </Button>
    </Link>
  ) : (
    <></>
  )
}

export default ButtonLinkBlock
