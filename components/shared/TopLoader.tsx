'use client'
import NextTopLoader from 'nextjs-toploader'

import useDynamicRedirect from '@/app/hooks/useDynamicRedirect'

export default function TopLoader() {
  useDynamicRedirect()
  return (
    <NextTopLoader
      color="#FFCD29"
      initialPosition={0.08}
      crawlSpeed={200}
      height={4}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={200}
      shadow="0 0 10px #FFCD29,0 0 5px #FFCD29"
      template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
      zIndex={99999999}
      showAtBottom={false}
    />
  )
}
