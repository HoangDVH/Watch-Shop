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
export const SliderTaxProduct = () => {
  return (
    <div className="home-box home-box-tax">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={3}
          spaceBetween={10}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="slider-img">
            <img
              src="https://thanhhungwatch.vn/thumb/crop/10847/410/260/"
              alt="hinh anh"
            />
            <span>Đồng hồ Nam</span>
          </SwiperSlide>
          <SwiperSlide className="slider-img">
            <img
              src="https://thanhhungwatch.vn/thumb/crop/10831/410/260/"
              alt="hinh anh"
            />
            <span>Đồng hồ lob</span>
          </SwiperSlide>
          <SwiperSlide className="slider-img">
            <img
              src="https://thanhhungwatch.vn/thumb/crop/5800/410/260/"
              alt="hinh anh"
            />
            <span>Đồng hồ Nữ</span>
          </SwiperSlide>
          <SwiperSlide className="slider-img">
            <img
              src="https://thanhhungwatch.vn/thumb/crop/5860/410/260/"
              alt="hinh anh"
            />
            <span>Đồng hồ Đôi</span>
          </SwiperSlide>
          <SwiperSlide className="slider-img">
            <img
              src="https://thanhhungwatch.vn/thumb/crop/9219/410/260/"
              alt="hinh anh"
            />
            <span>Đồng hồ Trang Trí</span>
          </SwiperSlide>
          <SwiperSlide className="slider-img">
            <img
              src="https://thanhhungwatch.vn/thumb/crop/12344/410/260/"
              alt="hinh anh"
            />
            <span>Đồng hồ Kassaw</span>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
