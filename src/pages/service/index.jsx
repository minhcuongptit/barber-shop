import serviceCover from "~/assets/images/service/trang-chu-cover-1.png"
import banner from "~/assets/images/about/banner.jpg"
import { ServiceDetailItem } from "../../component/service"
import { UonToc, comboCat } from "../../data"
import "./style.scss"

const ServicePage = () => {
  return (
    <div className="service-page">
      <a href="#basic">
        <img src={serviceCover} alt="" />
      </a>
      <div className="service-block basic" id="basic">
        <h2>COMBO ĐẾ VƯƠNG</h2>
        <div className="service-detail-item">
          {comboCat.map((detail, index) => (
            <ServiceDetailItem detail={detail} />
          ))}
        </div>
      </div>

      <div className="service-block uon-toc">
        <h2>UỐN TÓC ĐẸP ZAI</h2>
        <div className="service-detail-item">
          {UonToc.map((detail, index) => (
            <ServiceDetailItem detail={detail} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicePage
