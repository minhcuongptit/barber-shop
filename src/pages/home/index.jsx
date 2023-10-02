import Intro from "../../component/Intro"
import Service from "../../component/service"
import SlideIntro from "../../component/slideIntro"
import TrendingHair from "../../component/trendingHair"

const Home = () => {
  return (
    <>
      <SlideIntro />
      <Intro more={true} />
      <Service />
      <TrendingHair />
    </>
  )
}

export default Home
