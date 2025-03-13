import FavoritePlaces from '@/components/organisms/FavoritePlaces'
import IntroductionSection from '@/components/organisms/IntroductionSection'
import '../styles/global.scss'

export default function Home() {
  return (
    <>
      <IntroductionSection />
      <FavoritePlaces />
    </>
  )
}
