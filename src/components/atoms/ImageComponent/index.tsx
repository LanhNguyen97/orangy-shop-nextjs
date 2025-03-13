import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

export type ImageComponentProps = {
  src: string | StaticImport
  alt: string
  className?: string
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, className }) => {
  return <Image src={src} alt={alt} className={className} width={500} height={500} />
}

export default ImageComponent
