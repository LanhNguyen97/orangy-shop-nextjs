import { FC } from 'react'

type ImageProps = { src: string; alt: string; className?: string }

export const Image: FC<ImageProps> = props => {
  const { src, alt, className } = props
  return <img src={src} alt={alt} className={className} />
}
