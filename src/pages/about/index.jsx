import banner from "~/assets/images/about/banner.jpg"

import "./style.scss"
import Intro from "../../component/Intro"

import khatVong from "~/assets/images/about/thuong-hieu-khat-vong.jpg"

const About = () => {
  return (
    <div className="about">
      <img className="banner" src={banner} alt="" />
      <Intro />
      <div className="beSuccess">
        <h2>Điều tạo nên thành công của Phong BVB</h2>
        <p>
          Phong BvB nhiều năm gần đây trở thành thương hiệu tóc nam được nhiều
          bạn trẻ săn đón trong cả nước nhờ không gian độc đáo &amp; có phong
          cách riêng cùng với đội ngũ Barber chất theo phong cách SWAG do chính
          PhongBvB đào tạo.
        </p>
        <p>
          Không ngừng cập nhật các kiểu tóc mới nhất theo xu hướng của thế giới
          mà PhongBvB còn tự sáng tạo ra các kiểu tóc phù hợp với người Việt Nam
          như Mohican, Sóng Zizac. Đến với &nbsp;Phong BvB &nbsp;không chỉ là
          cắt tóc cho ngắn, cho gọn mà bạn sẽ được tư vấn kiểu tóc phù hợp để có
          1 vẻ đẹp trai theo phong cách riêng của mình.
        </p>
        <p>
          Swag - Phong BvB - Thánh Địa Đàn Ông: Đến với chúng tôi đơn giản là sự
          khác biệt!
        </p>
      </div>
      <img src={khatVong} alt="" className="khat-vong" />
    </div>
  )
}

export default About
