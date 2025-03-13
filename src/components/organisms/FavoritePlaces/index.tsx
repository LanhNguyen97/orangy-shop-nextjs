import Typography from '@/components/atoms/Typography'
import ImageWrapper from '@/components/molecules/ImageWrapper'
import couple from '@/images/couple.webp'
import conicalHat from '@/images/conical-hat.webp'

const FavoritePlaces = () => {
  return (
    <section className="favorite-palces-wrapper">
      <div className="favorite-palces-wrapper__item column-reverse">
        <ImageWrapper src={couple} parentClassName="favorite-palces-wrapper__item" alt="Couple" />
        <div className="favorite-palces-wrapper__item__content-container">
          <div className="favorite-palces-wrapper__item__content-container__wrapper">
            <Typography
              as="h3"
              className="favorite-palces-wrapper__item__content-container__wrapper__title"
            >
              Lorem ipsum
            </Typography>
            <div className="favorite-palces-wrapper__item__content-container__wrapper__description">
              <Typography
                as="p"
                className="favorite-palces-wrapper__item__content-container__wrapper__description__title"
              >
                Excepteur eiusmod consectetur
              </Typography>
              <Typography className="favorite-palces-wrapper__item__content-container__wrapper__description__content">
                Proident dolore nisi eiusmod excepteur aliquip esse ut excepteur. Non excepteur sunt
                reprehenderit sit ex ullamco eiusmod Lorem incididunt nisi mollit nostrud. Irure
                velit enim elit minim commodo qui culpa cillum duis fugiat consequat pariatur.
              </Typography>
            </div>
            <div className="favorite-palces-wrapper__item__content-container__wrapper__description">
              <Typography
                as="p"
                className="favorite-palces-wrapper__item__content-container__wrapper__description__title"
              >
                Quis aliqua reprehenderit
              </Typography>
              <Typography className="favorite-palces-wrapper__item__content-container__wrapper__description__content">
                Proident dolore nisi eiusmod excepteur aliquip esse ut excepteur. Non excepteur sunt
                reprehenderit sit ex ullamco eiusmod Lorem incididunt nisi mollit nostrud. Irure
                velit enim elit minim commodo qui culpa cillum duis fugiat consequat pariatur.
              </Typography>
            </div>
            <div className="favorite-palces-wrapper__item__content-container__wrapper__description">
              <Typography
                as="p"
                className="favorite-palces-wrapper__item__content-container__wrapper__description__title"
              >
                Ad sit cillum amet duis quis commodo
              </Typography>
              <Typography className="favorite-palces-wrapper__item__content-container__wrapper__description__content">
                Proident dolore nisi eiusmod excepteur aliquip esse ut excepteur. Non excepteur sunt
                reprehenderit sit ex ullamco eiusmod Lorem incididunt nisi mollit nostrud. Irure
                velit enim elit minim commodo qui culpa cillum duis fugiat consequat pariatur.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="favorite-palces-wrapper__item column-reverse row-reverse">
        <ImageWrapper
          src={conicalHat}
          parentClassName="favorite-palces-wrapper__item"
          alt="Conical Hat"
        />
        <div className="favorite-palces-wrapper__item__content-container">
          <div className="favorite-palces-wrapper__item__content-container__wrapper">
            <Typography
              as="h3"
              className="favorite-palces-wrapper__item__content-container__wrapper__title"
            >
              Lorem ipsum
            </Typography>
            <div className="favorite-palces-wrapper__item__content-container__wrapper__description">
              <Typography className="favorite-palces-wrapper__item__content-container__wrapper__description__content">
                Ex laborum ea qui consectetur mollit commodo eiusmod culpa dolor cupidatat. Ullamco
                dolore irure ea sit elit velit non officia. Ad eu reprehenderit in et voluptate
                mollit. Reprehenderit incididunt magna consequat enim sit eiusmod est dolor laborum
                cupidatat.
              </Typography>
            </div>
            <div className="favorite-palces-wrapper__item__content-container__wrapper__description">
              <Typography className="favorite-palces-wrapper__item__content-container__wrapper__description__content">
                Ipsum minim mollit irure dolore. Sint fugiat deserunt dolor aute enim et cillum
                adipisicing cillum nostrud anim. Sit dolore incididunt dolore do sunt pariatur
                consectetur id qui pariatur eu incididunt adipisicing. Irure sint fugiat officia
                veniam consectetur. Esse laborum amet aliqua ad in sunt labore duis.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FavoritePlaces
