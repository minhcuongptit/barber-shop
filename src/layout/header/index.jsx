import "./style.scss"
import logo from "~/assets/logo/logo.png"

const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img src={logo} alt="" />
      </a>

      {/* <!-- menu tablet mobile --> */}
      <div className="menu-icon hide-on-desktop">
        <label for="menu-icon">
          <i className="fa-solid fa-bars"></i>
        </label>
      </div>

      <div className="menu-drawer hide-on-desktop">
        <input
          type="checkbox"
          className="checkbox-menu"
          name=""
          id="menu-icon"
          hidden
        />
        <label for="menu-icon" className="overlay"></label>
        <div className="content">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <ul>
            <li>
              <a href="/">Trang chủ</a>
            </li>
            <li>
              <a href="about">Về chúng tôi</a>
            </li>
            <li>
              <a href="service">Dịch vụ</a>
            </li>
            <li>
              <a href="training">Đào tạo</a>
            </li>

            {/* <li className="sign-up-mobile">
              <a href="#!">Sign Up</a>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="menu-desktop show-on-desktop">
        <ul>
          <li>
            <a href="/">Trang chủ</a>
          </li>
          <li>
            <a href="about">Về chúng tôi</a>
          </li>
          <li>
            <a href="service">Dịch vụ</a>
          </li>
          <li>
            <a href="training">Đào tạo</a>
          </li>

          {/* <li className="sign-up-mobile">
              <a href="#!">Sign Up</a>
            </li> */}
        </ul>
      </div>
    </header>
  )
}

export default Header
