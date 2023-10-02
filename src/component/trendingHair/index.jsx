import Slider from "react-slick"
import "./style.scss"

import jaycut from "~/assets/images/trending-hair/jaycut.jpg"
import premlock from "~/assets/images/trending-hair/premlock.jpg"
import sidepartPhong from "~/assets/images/trending-hair/sidepart-phong.jpg"
import slickBack from "~/assets/images/trending-hair/slick-back.jpg"
const data = [
  { id: 0, image: jaycut, name: "Kiểu tóc Jaycut" },
  { id: 1, image: premlock, name: "Kiểu tóc Premlock" },
  { id: 2, image: sidepartPhong, name: "Kiểu tóc Side Part uốn phồng" },
  { id: 3, image: slickBack, name: "Kiểu tóc Slick Back" },
]

const TrendingHair = () => {
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
    autoplaySpeed: 2500,
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
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="trending-hair">
      <h2>TOP KIỂU TÓC THỊNH HÀNH TRONG THÁNG</h2>
      <Slider {...settings} className="trending-hair-slide">
        {data?.map((item) => (
          <div key={item.id} className="slick-item">
            <img src={item.image} alt="" className="img-slick" />
            <div className="text">
              <p>{item?.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default TrendingHair
