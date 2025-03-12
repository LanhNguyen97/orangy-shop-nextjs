import ImageComponent from '../../atoms/ImageComponent'

interface ImageWrapperProps {
  src: string
  alt: string
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({ src, alt }) => {
  return (
    <div className="image-wrapper">
      <ImageComponent src={src} alt={alt} className="image-wrapper__img" />
    </div>
  )
}

export default ImageWrapper
