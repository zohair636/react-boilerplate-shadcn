import { forwardRef } from 'react'
import type { CommonImageProps } from './types'

const CommonImage = forwardRef<HTMLImageElement, CommonImageProps>(
  ({ src, alt, loading = 'lazy', ...rest }, ref) => {
    if (typeof src !== 'string') {
      return src
    }

    return <img ref={ref} src={src} alt={alt} loading={loading} {...rest} />
  },
)

CommonImage.displayName = 'CommonImage'

export default CommonImage
