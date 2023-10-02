import Slider from "react-slick"
import "./style.scss"

import slide1 from "~/assets/images/slide-intro/slide-1.jpg"
import slide2 from "~/assets/images/slide-intro/slide-2.jpg"
import slide3 from "~/assets/images/slide-intro/slide-3.jpg"
import slide4 from "~/assets/images/slide-intro/slide-4.png"
import slide5 from "~/assets/images/slide-intro/silde-5.jpg"
import slide6 from "~/assets/images/slide-intro/slide-6.jpg"

const data = [
  { id: 0, image: slide1 },
  { id: 1, image: slide2 },
  { id: 2, image: slide3 },
  { id: 3, image: slide4 },
  { id: 4, image: slide5 },
  { id: 5, image: slide6 },
]
const SlideIntro = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "transparent",
          right: "4px",
          zIndex: "1",
        }}
        onClick={onClick}
      />
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "transparent",
          left: "4px",
          zIndex: "1",
        }}
        onClick={onClick}
      />
    )
  }
  const settings = {
    infinite: true,
    speed: 300,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: true,
    dots: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    autoplay: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <Slider {...settings} className="slide-intro">
      {data?.map((item) => (
        <div key={item.id} className="slick-item">
          <img src={item.image} alt="" className="img-slick" />
        </div>
      ))}
    </Slider>
  )
}
export default SlideIntro
