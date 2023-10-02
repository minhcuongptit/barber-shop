import who from "~/assets/images/intro/who.png"
import "./style.scss"

const Intro = ({ more }) => {
  console.log("more", more)
  return (
    <div className="intro">
      <div className="media">
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
      </div>
      <div className="content">
        <h2>GIỚI THIỆU VỀ PHONG BVB</h2>
        <img src={who} alt="" />
        <p>
          Phong BVB là chuỗi tóc nam số 1 dành cho giới trẻ hiện nay. Sau 6 năm
          thành lập, Phong BVB hiện có 27 cơ sở trên cả nước và phục vụ 1,2
          triệu khách hàng. Ngoài ra, chúng tôi vinh dự được Top 1 Streamer như:
          Độ Mixi, Bộ Bim, Nhím, Rambo,... và 1 số Idol Tiktok như Long Thổ,
          Chiến Đỗ,... tin tưởng lựa chọn.
        </p>
        <p>
          Lý do Phong BVB phát triển lớn mạnh như hiện nay vì nơi đây luôn tạo
          ra xu hướng kiểu tóc hot như: Mohican năm 2018, Jaycut và Ziczac năm
          2019. Phong BVB giúp các bạn trẻ sống đúng với cá tính và dám làm điều
          khác biệt qua những kiểu tóc cực CHẤT. Ngoài cắt được 127 kiểu tóc
          thịnh hành, Phong BVB còn là nơi chuyên khắc phục những khuyết điểm
          như: đầu lồi lõm, tóc mỏng, chỉa, xoăn xù, trán chữ M,... giúp trả lại
          sự tự tin cho các bạn trẻ.{" "}
        </p>
        <p>
          Giá dịch vụ tại Phong BVB cũng rất phù hợp với học sinh, sinh viên. Cụ
          thể chỉ với 70k bạn sẽ nhận ngay Combo SWAG Đế Vương 5 bước bao gồm:
          Tư vấn, cắt, cạo, gội, vuốt tóc. Hãy nhắn tin ngay cho{" "}
          <a href="#!">Phong BVB</a> để được tư vấn thêm và xem địa chỉ các cơ
          sở <a href="#!">tại đây</a>.
        </p>
        {more ? (
          <a href="about" className="btn-more">
            Tìm hiểu thêm
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Intro
