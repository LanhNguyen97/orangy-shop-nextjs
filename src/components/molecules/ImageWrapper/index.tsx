import ImageComponent, { ImageComponentProps } from '@/components/atoms/ImageComponent'

type ImageWrapperProps = ImageComponentProps & { parentClassName?: string }

const ImageWrapper: React.FC<ImageWrapperProps> = ({ src, alt, parentClassName }) => {
  const wrapperClassName = parentClassName ? `${parentClassName}__image-wrapper` : ''
  const imgClassName = wrapperClassName ? `${wrapperClassName}__img` : ''

  return (
    <div className={`image-wrapper ${wrapperClassName}`}>
      <ImageComponent src={src} alt={alt} className={`image-wrapper__img ${imgClassName}`} />
    </div>
  )
}

export default ImageWrapper
