import AuthComponent from '@/components/organisms/AuthComponent'
import FavoritePlaces from '@/components/organisms/FavoritePlaces'
import IntroductionSection from '@/components/organisms/IntroductionSection'
import '../styles/global.scss'

export default function Home() {
  return (
    <AuthComponent>
      <IntroductionSection />
      <FavoritePlaces />
    </AuthComponent>
  )
}
