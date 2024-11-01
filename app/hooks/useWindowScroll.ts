'use client'
import { useEffect } from 'react'

const useWindowScroll = (cb: (scrollY: number) => void) => {
  useEffect(() => {
    const handleScroll = () => {
      cb?.(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [cb])
}

export default useWindowScroll
