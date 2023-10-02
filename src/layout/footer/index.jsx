import "./style.scss"
import logoFull from "~/assets/images/footer/logo-full.png"
import facebook from "~/assets/images/footer/facebook.png"
import tiktok from "~/assets/images/footer/tiktok.png"
import gmail from "~/assets/images/footer/gmail.png"
import messenger from "~/assets/images/footer/messenger.png"
import youtube from "~/assets/images/footer/youtube.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="social">
          <img src={logoFull} alt="" className="logo-full" />
          <div className="social-list">
            <a href="https://www.facebook.com/Phongbvb22tranquochoan">
              <img src={facebook} alt="" />
            </a>
            <a href="https://www.facebook.com/Phongbvb22tranquochoan">
              <img src={youtube} alt="" />
            </a>
            <a href="https://www.tiktok.com/@tocnamdep.phongbvb">
              <img src={tiktok} alt="" />
            </a>
            <a href="mailto:phonghairbvb@gmail.com">
              <img src={gmail} alt="" />
            </a>
            <a href="//m.me/PhongVanBui">
              <img src={messenger} alt="" />
            </a>
          </div>
        </div>
        <div className="contact">
          <h2>TÓC NAM ĐẸP PHONG BVB</h2>
          <h3>PHONG BVB CAM KẾT BẢO HÀNH 10 NGÀY VÀ HOÀN TIỀN 300%</h3>
          <ul>
            <li>
              <i class="fa-solid fa-location-pin"></i>
              <p>
                Trụ sở chính: 1174 đường Láng - Đống Đa - Hà Nội <br /> CN miền
                Nam: 45/1 đường D5 - Bình Thanh - HCM
              </p>
            </li>
            <li>
              <i class="fa-solid fa-phone-flip"></i>
              <p>0977 455 423</p>
            </li>
            <li>
              <i class="fa-solid fa-envelope"></i>
              <p>minhcuong.ptit@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className="info">
          <h2>VỀ PHONG BVB</h2>
          <ul>
            <li>
              <a href="about">Câu chuyện thương hiệu</a>
            </li>
            <li>
              <a href="service">Sản phẩm - Dịch vụ</a>
            </li>
            <li>
              <a href="training">Đào tạo Barber</a>
            </li>
            <li>
              <a href="#!">Nhượng quyền</a>
            </li>
            <li>
              <a href="#!">Tin tức</a>
            </li>
            <li>
              <a href="#!">Tuyển dụng</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy-right">
        <p>Copyright © 2023 Cuong Tran. All rights reserved.</p>
      </div>

      <div class="hotline-phone-ring-wrap">
        <div class="hotline-phone-ring">
          <div class="hotline-phone-ring-circle"></div>
          <div class="hotline-phone-ring-circle-fill"></div>
          <div class="hotline-phone-ring-img-circle">
            <a href="tel:0977455423" class="pps-btn-img">
              <img
                src="https://isharevn.net/wp-content/uploads/2021/05/icon-call-nh.png"
                alt="Gọi điện thoại"
                width="50"
              />
            </a>
          </div>
        </div>
        <div class="hotline-bar">
          <a href="tel:0988488263">
            <span class="text-hotline">0988.488.263</span>
          </a>
        </div>
      </div>

      <div className="message-fixed">
        <a href="//m.me/PhongVanBui">
          <i class="fa-brands fa-facebook-messenger"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
