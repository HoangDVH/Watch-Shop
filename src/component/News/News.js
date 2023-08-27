import React from "react";
import "./News.css";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
export const News = () => {
  return (
    <div className="container">
      <div className="news-wrapper">
        <div className="news-container">
          <Link
            to={
              "/tin tức và sự kiện/TEINTOP - THƯƠNG HIỆU ĐỒNG HỒ MỸ ĐƯỢC ƯA CHUỘNG TẠI VIỆT NAM"
            }
            className="link-style"
          >
            <div className="news-image">
              <img
                src="https://thanhhungwatch.vn/thumb/crop/5353/255/175/"
                alt="h"
              ></img>
            </div>
          </Link>
          <div className="news-body">
            <Link
              to={
                "/tin tức và sự kiện/TEINTOP - THƯƠNG HIỆU ĐỒNG HỒ MỸ ĐƯỢC ƯA CHUỘNG TẠI VIỆT NAM"
              }
              className="link-style"
            >
              <div className="news-title">
                TEINTOP - THƯƠNG HIỆU ĐỒNG HỒ MỸ ĐƯỢC ƯA CHUỘNG TẠI VIỆT NAM
              </div>
            </Link>
            <div className="news-icon">
              {" "}
              <BiTimeFive /> <div className="news-time">04-08-2023</div>
            </div>
            <div className="news-content">
              TeinTop là thương hiệu đồng hồ nam tầm trung được yêu thích tại
              Việt Nam. Với chất lượng bền bỉ, thiết kế đa dạng và mức giá bình
              dân, các mẫu đồng hồ nam TeinTop ngày càng được đông đảo khách
              hàng tin dùng.
            </div>
          </div>
        </div>

        <div className="news-container">
          <Link to={"/tin tức và sự kiện/THƯƠNG HIỆU ĐỒNG HỒ LOBINNI"}>
            <div className="news-image">
              <img
                src="https://thanhhungwatch.vn/thumb/crop/5114/255/175/"
                alt="h"
              ></img>
            </div>
          </Link>
          <div className="news-body">
            <Link
              to={"/tin tức và sự kiện/THƯƠNG HIỆU ĐỒNG HỒ LOBINNI"}
              className="link-style"
            >
              <div className="news-title">THƯƠNG HIỆU ĐỒNG HỒ LOBINNI</div>
            </Link>
            <div className="news-icon">
              {" "}
              <BiTimeFive /> <div className="news-time">04-08-2023</div>
            </div>
            <div className="news-content">
              Lobinni luôn quan niệm chiếc đồng hồ là thứ ghi lại những khoảnh
              khắc quý giá nhất trong cuộc sống. Mỗi sản phẩm được tạo ra đều
              xuất phát từ cảm xúc của nghệ nhân sáng tác. Mỗi chiếc đồng hồ
              đánh dấu một khoảnh khắc quý giá của của các nghệ nhân và là một
              phần lịch sử thương hiệu trong chặng đường ...
            </div>
          </div>
        </div>

        <div className="news-container">
          <div className="news-image">
            <Link
              to={"/tin tức và sự kiện/KIẾN THỨC CƠ BẢN VỀ ĐỒNG HỒ ĐEO TAY"}
            >
              <img
                src="https://thanhhungwatch.vn/thumb/crop/5121/255/175/"
                alt="h"
              ></img>
            </Link>
          </div>
          <div className="news-body">
            <Link
              to={"/tin tức và sự kiện/KIẾN THỨC CƠ BẢN VỀ ĐỒNG HỒ ĐEO TAY"}
              className="link-style"
            >
              {" "}
              <div className="news-title">
                KIẾN THỨC CƠ BẢN VỀ ĐỒNG HỒ ĐEO TAY
              </div>
            </Link>
            <div className="news-icon">
              {" "}
              <BiTimeFive /> <div className="news-time">04-08-2023</div>
            </div>
            <div className="news-content">
              Đồng hồ đeo tay là một kiệt tác của những nhà thiết kế vĩ đại, họ
              đã chế tác ra những chiếc đồng hồ không chỉ để đếm giờ một cách
              chính xác mà còn mang lại niềm tự hào cho những ai sở hữu nó.
              Ngoài vẻ đẹp và sự sang trọng, bạn đã thực sự hiểu về chiếc đồng
              hồ mà mình đang sở hữu?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
