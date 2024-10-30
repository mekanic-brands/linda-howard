import { type ClassValue, clsx } from 'clsx'
import chunk from 'lodash/chunk'
import map from 'lodash/map'
import split from 'lodash/split'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sleep = (ms = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const chunkProfileImages = <T>(profileImages: T[], limit = 7) => {
  return chunk(profileImages, limit)
}

export const getSanityImageDimension = (_ref: string) => {
  if (!_ref) return [0, 0]
  return map(split(split(_ref, '-')[2], 'x'), Number)
}
