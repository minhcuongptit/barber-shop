import cover from "~/assets/images/train/cover.jpg"
import trendding from "~/assets/images/train/trendding.jpg"
import { Reasons, objectTrainning } from "../../data"
import "./style.scss"
import { useState } from "react"

const Trainning = () => {
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [open, setOpen] = useState(false)
  const [err, setErr] = useState(false)

  const handleRegister = () => {
    setOpen(true)
  }

  const handleSubmit = () => {
    if (phone.trim() == "") {
      console.log("err")
      setErr(true)
    }
    console.log(name, phone)
  }

  return (
    <div className="trainning">
      <img src={cover} alt="" className="cover" />
      <div className="who-use">
        <h3>KHÓA HỌC NÀY DÀNH CHO AI</h3>
        <div className="object-list">
          {objectTrainning.map((object) => (
            <div className="object" key={object?.name}>
              <img src={object.image} alt="" />
              <p>{object.name}</p>
            </div>
          ))}
        </div>
      </div>
      <img src={trendding} alt="" className="trending-job" />

      <div className="show-on-tablet">
        <div className="line-drawer"></div>
      </div>
      <div className="btn-register" onClick={handleRegister}>
        <p>ĐĂNG KÍ TƯ VẤN KHÓA HỌC</p>
      </div>

      <div className="reason">
        <h3 className="title">
          9 LÝ DO PHONG BVB LÀ HỌC VIỆN ĐÀO TẠO BARBER CHUYÊN NGHIỆP SỐ 1 VIỆT
          NAM
        </h3>
        <p className="sub-title">
          Chúng tôi đã đào tạo ra nghề 1102 học viên, 100% học viên ra nghề có
          thu nhập ổn định 6 - 12 triệu/tháng, 48 học viên đã mở Barber Shop
          riêng.
        </p>
        <div className="reason-list">
          {Reasons.map((reason) => (
            <div className="reason-item" key={reason?.id}>
              <img src={reason?.image} alt="" />
              <h4>{reason?.title}</h4>
              <p>{reason?.subTitle}</p>
            </div>
          ))}
        </div>

        <div className="register-now">
          <h3>TÌM HIỂU THÔNG TIN KHÓA HỌC</h3>
          <div onClick={handleRegister}>ĐĂNG KÝ NGAY</div>
        </div>
      </div>
      {open && (
        <div className="modal-register">
          <div className="overlay"></div>
          <div className="modal">
            <i
              class="fa-solid fa-circle-xmark"
              onClick={() => setOpen(false)}
            ></i>
            <h2>ĐĂNG KÝ NGAY ĐỂ TRỞ THÀNH BARBER CHUYÊN NGHIỆP</h2>
            <p>
              Hơn 1000 học viên của Phong BvB đã thành công, bạn cũng có thể!
            </p>
            <div className="form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Họ và tên"
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Số điện thoại"
                onChange={(e) => {
                  setErr(false)
                  setPhone(e.target.value)
                }}
              />
              {err ? <p className="err">Vui lòng điền số điện thoại</p> : <></>}
              <button onClick={handleSubmit}>Đăng ký </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Trainning
