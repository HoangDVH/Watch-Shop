import React from "react";
import { BiTimeFive } from "react-icons/bi";
export const NewsDetailContent = ({ news }) => {
  return (
    <div className="container">
      <div className="news-wrapper">
        <div className="news-content">
          <div className="content-title">{news}</div>
          <div className="news-icon">
            {" "}
            <BiTimeFive /> <div className="news-time">04-08-2023</div>
          </div>
          <div className="content-news">
            TeinTop là thương hiệu đồng hồ nam tầm trung được yêu thích tại Việt
            Nam. Với chất lượng bền bỉ, thiết kế đa dạng và mức giá bình dân,
            các mẫu đồng hồ nam TeinTop ngày càng được đông đảo khách hàng tin
            dùng.{" "}
          </div>
          <div className="content-news">
            Tại Việt Nam, Thương hiệu đồng hồ Teintop đang được phân phối chính
            thức tại Thành Hưng Watch - Số 1 Về Đồng Hồ Chính Hãng.Thương hiệu
            đồng hồ TeinTop ra đời từ năm 1986 tại Miami, Hoa Kỳ. Với lịch sử
            gần 40 năm hình thành và phát triển, TeinTop đã chứng minh được chất
            lượng bền bỉ cùng tinh thần thời trang của mình được thể hiện rõ
            ràng trong những kiệt tác đồng hồ nổi tiếng.
          </div>
          <div className="content-news">
            Với xuất xứ từ USA nơi có nền công nghiệp phát triển bậc nhất thế
            giới hiện nay, các mẫu đồng hồ TeinTop luôn khiến cho người dùng hài
            lòng bởi sự hiện đại và đa dạng trong các tính năng. Sự kết hợp hài
            hoà giữa giá trị cốt lõi truyền thống và cải tiến mẫu mã chính là
            đặc trưng khiến cho các sản phẩm đồng hồ TeinTop có được ưu thế cạnh
            tranh so với các dòng đồng hồ khác trên thị trường.
          </div>
          <div className="contentnews-image">
            <img
              src="https://thanhhungwatch.vn/uploads/t8660-7_(8).jpg"
              alt="hh"
            ></img>
            <div className="image-captions">
              Teintop là thương hiệu đồng hồ nam được yêu thích tại Việt Nam
            </div>
          </div>
          <div className="content-news">
            Những mẫu đồng hồ nam có thiết kế sang trọng luôn chiếm được cảm
            tình của những quý ông thành đạt. Với sự kết hợp ấn tượng bởi các
            gam màu ấn tượng như vàng-bạc-xanh, chúng giúp cho người đeo thể
            hiện được sự quyền uy và khả năng lãnh đạo của mình. Bên cạnh đó,
            chi tiết đính đá trên các cọc số cũng được coi là yếu tố khiến cho
            các siêu phẩm sang trọng này trở nên đắt giá hơn.Với thiết kế độc
            đáo và thời trang, những sản phẩm này sẽ là lựa chọn tuyệt vời dành
            cho quý ông, doanh nhân thành đạt khi tới công sở.
          </div>
        </div>
        <div className="comment">
          <div className="comment-title">BÌNH LUẬN</div>
          <div className="comment-container">
            <div className="comment-logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png"
                alt="dsd"
              />
            </div>
            <input className="comment-input" placeholder="Viết bình luận..." />
          </div>
        </div>
      </div>
    </div>
  );
};
