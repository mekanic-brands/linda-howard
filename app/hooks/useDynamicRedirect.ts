'use client'

import { useCallback } from 'react'

import useRouterChange from './useRouterChange'

const useDynamicRedirect = () => {
  const action = useCallback(() => {
    const currentDomain = window.location.hostname

    const anchorEls = [...document.querySelectorAll('a:not(.find-verified-providers)')] as HTMLAnchorElement[]

    if (!anchorEls) return

    anchorEls.forEach((el) => {
      const href = el.getAttribute('href') as string
      if (!href) return
      const isSameDomain =
        href.includes(currentDomain) ||
        href.startsWith('/') ||
        href.includes('tel:') ||
        href.includes('mailto:') ||
        href.startsWith('#')

      if (!isSameDomain) {
        el.setAttribute('target', '_blank')
      }
    })
  }, [])

  useRouterChange(action)
}

export default useDynamicRedirect
