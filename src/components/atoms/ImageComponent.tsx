import Image from 'next/image'

type ImageComponentProps = {
  src: string
  alt: string
  className?: string
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, className }) => {
  return <Image src={src} alt={alt} className={className} width={500} height={500} />
}

export default ImageComponent
