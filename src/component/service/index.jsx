import iconKeo from "~/assets/images/service/icon-keo.png"
import nhuomToc from "~/assets/images/service/nhuom-toc.png"
import tatooHair from "~/assets/images/service/tatoo-hair.png"
import uonToc from "~/assets/images/service/uon-toc.png"
import tocDocLa from "~/assets/images/service/toc-doc-la.png"
import "./style.scss"
import { useState } from "react"
import { UonToc, comboCat } from "../../data"

const data = [
  { id: 0, text: "Combo Cắt", image: iconKeo },
  { id: 1, text: "Uốn tóc", image: uonToc },
  {
    id: 2,
    text: "Nhuộm tóc",
    image: nhuomToc,
  },
  { id: 3, text: "Tóc độc lạ", image: tocDocLa },
  { id: 4, text: "Tatoo hair", image: tatooHair },
]

const ServiceItem = ({ text, image, onClick, currentSelected }) => {
  console.log(text, image, onClick, currentSelected)
  return (
    <div className="item-block" onClick={onClick}>
      <div
        className="service-item"
        style={{
          backgroundColor: text == currentSelected ? "#fff200" : "#fff",
        }}
      >
        <span className="text">{text}</span>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export const ServiceDetailItem = ({ detail }) => {
  return (
    <div className="card-item-service">
      <img src={detail.image} alt="" />
      <div className="body">
        {detail?.price ? (
          <div className="block-title">
            <span className="name">{detail?.name}</span>
            <div className="block-price">
              <span className="price">{detail?.price}</span>
            </div>
          </div>
        ) : (
          <div className="block-title">
            <p className="txt-2line">
              {detail?.textLine1} <br />
              {detail?.textLine2}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

const Service = () => {
  const [currentSelected, setCurrentSelected] = useState("Combo Cắt")
  const [serviceDetailList, setServiceDetailList] = useState(comboCat)
  const handleChangeService = (text) => {
    setCurrentSelected(text)
    if (text == "Combo Cắt") {
      setServiceDetailList(comboCat)
    } else if (text == "Uốn tóc") {
      setServiceDetailList(UonToc)
    } else {
    }
  }
  return (
    <div className="service">
      <h2>Dịch vụ đế vương</h2>
      <div className="navigation">
        {data.map((item, index) => (
          <ServiceItem
            key={item.id}
            text={item.text}
            image={item.image}
            onClick={() => handleChangeService(item.text)}
            currentSelected={currentSelected}
          />
        ))}
      </div>
      <div className="service-detail-item">
        {serviceDetailList.map((detail, index) => (
          <ServiceDetailItem detail={detail} key={detail.id} />
        ))}
      </div>
    </div>
  )
}

export default Service
