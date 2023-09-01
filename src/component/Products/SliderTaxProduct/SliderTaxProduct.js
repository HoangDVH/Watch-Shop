import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./SliderTaxProduct.css";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Link } from "react-router-dom";
export const SliderTaxProduct = () => {
  const handleImageClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="home-box home-box-tax">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={3}
          spaceBetween={10}
          navigation
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="slider-img">
            <Link to={"/đồng hồ nam"} onClick={handleImageClick}>
              {" "}
              <img
                src="https://thanhhungwatch.vn/thumb/crop/10847/410/260/"
                alt="hinh anh"
              />
            </Link>
            <span>Đồng hồ Nam</span>
          </SwiperSlide>
          <SwiperSlide className="slider-img">
            <Link to={"/lobinni"} onClick={handleImageClick}>
              {" "}
              <img
                src="https://thanhhungwatch.vn/thumb/crop/10831/410/260/"
                alt="hinh anh"
              />
            </Link>
            <span>Đồng hồ lobinni</span>
          </SwiperSlide>
          <SwiperSlide className="slider-img">
            <Link to={"/đồng hồ nữ"} onClick={handleImageClick}>
              {" "}
              <img
                src="https://thanhhungwatch.vn/thumb/crop/5800/410/260/"
                alt="hinh anh"
              />
            </Link>
            <span>Đồng hồ Nữ</span>
          </SwiperSlide>
          <SwiperSlide className="slider-img">
            <Link to={"/đồng hồ đôi"} onClick={handleImageClick}>
              {" "}
              <img
                src="https://thanhhungwatch.vn/thumb/crop/5860/410/260/"
                alt="hinh anh"
              />
            </Link>
            <span>Đồng hồ Đôi</span>
          </SwiperSlide>
          <SwiperSlide className="slider-img">
            <Link to={"/đồng hồ trang trí"} onClick={handleImageClick}>
              <img
                src="https://thanhhungwatch.vn/thumb/crop/9219/410/260/"
                alt="hinh anh"
              />
            </Link>
            <span>Đồng hồ Trang Trí</span>
          </SwiperSlide>
          <SwiperSlide className="slider-img">
            <Link to={"/kassaw"} onClick={handleImageClick}>
              {" "}
              <img
                src="https://thanhhungwatch.vn/thumb/crop/12344/410/260/"
                alt="hinh anh"
              />
            </Link>
            <span>Đồng hồ Kassaw</span>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
