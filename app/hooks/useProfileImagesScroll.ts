'use client'

import { useEffect } from 'react'

const useProfileImagesScroll = () => {
  useEffect(() => {
    const MAX_X = 99999999999999
    const els = [
      ...document.querySelectorAll('.profile-images'),
    ] as HTMLDivElement[]

    if (!els) return
    els.forEach((el, index) => {
      if (index) return
      el.scroll({ left: MAX_X, top: 0, behavior: 'smooth' })
    })
  }, [])
}

export default useProfileImagesScroll
