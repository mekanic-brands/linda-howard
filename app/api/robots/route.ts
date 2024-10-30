import get from 'lodash/get'
import { NextResponse } from 'next/server'

import { loadSettings } from '@/sanity/loader/loadQuery'
export async function GET() {
  const settings = await loadSettings()
  const robotsText = get(settings, 'data.robots')?.trim()
  return new NextResponse(robotsText, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
