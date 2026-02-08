import type { ImgHTMLAttributes } from 'react'

export interface CommonImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'loading'> {
  src: string
  alt: string
  loading?: 'lazy' | 'eager'
}
