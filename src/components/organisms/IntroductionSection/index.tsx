import Typography from '@/components/atoms/Typography'
import ImageWrapper from '@/components/molecules/ImageWrapper'
import hoanKiemLake from '@/images/hoan-kiem-lake.webp'
import conicalHatSeller from '@/images/conical-hat-seller.webp'

const IntroductionSection = () => {
  return (
    <section className="introduction-wrapper">
      <Typography as="h3" className="introduction-wrapper__title lora-title">
        Lorem ullamco
      </Typography>
      <div className="introduction-wrapper__image-section">
        <ImageWrapper src={hoanKiemLake} alt="Hoan Kiem Lake" />
        <ImageWrapper src={conicalHatSeller} alt="Conical Hat Seller" />
      </div>
      <Typography className="introduction-wrapper__description lato-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur eiusmod consectetur
        proident Lorem reprehenderit esse do anim velit in aliquip dolore ut officia. Consectetur
        reprehenderit proident do exercitation eu. Sunt fugiat pariatur elit est laboris quis. Esse
        mollit incididunt quis amet. Qui non irure incididunt laborum nisi cillum consequat aliquip
        aliquip cillum in. Ut excepteur labore voluptate tempor cupidatat dolor eiusmod do ipsum
        Lorem cupidatat do labore.
      </Typography>
      <Typography className="introduction-wrapper__description lato-text">
        Proident dolore nisi eiusmod excepteur aliquip esse ut excepteur. Non excepteur sunt
        reprehenderit sit ex ullamco eiusmod Lorem incididunt nisi mollit nostrud. Irure velit enim
        elit minim commodo qui culpa cillum duis fugiat consequat pariatur.
      </Typography>
    </section>
  )
}

export default IntroductionSection
