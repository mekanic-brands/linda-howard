'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

const useRouterChange = (cb: (pathname: string) => void) => {
  const pathname = usePathname()
  const previousPathname = useRef(pathname)

  useEffect(() => {
    cb(pathname)
  }, [pathname, cb])

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname
    }
  }, [pathname, cb])
}

export default useRouterChange
