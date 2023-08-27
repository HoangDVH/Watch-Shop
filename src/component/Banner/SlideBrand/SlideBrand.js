// Trong SlideBrand.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./SlideBrand.css";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

const brandImages = {
  "thương hiệu phân phối": [
    "https://thanhhungwatch.vn/uploads/logo-lobinni-black-new1_(1).png",
    "https://thanhhungwatch.vn/uploads/logo_kassaw.jpg",
    "https://thanhhungwatch.vn/uploads/logo_dong_ho_iw_carnival_(1).jpg",
    "https://thanhhungwatch.vn/uploads/1111111.jpg",
    "https://thanhhungwatch.vn/uploads/logo_teintop_-_Copy_(2).png",
    "https://thanhhungwatch.vn/uploads/hazeal_png-1.jpg",
    "https://thanhhungwatch.vn/uploads/logo_lorbern.jpg",
    "https://thanhhungwatch.vn/uploads/logo-thuong-hieu3.jpg",
    "https://thanhhungwatch.vn/uploads/logo_leonidas.jpg"
    // Các URL ảnh khác
  ],
  "chúng tôi cam kết": [
    "https://thanhhungwatch.vn/uploads/5-cam-ket-thw-vn-pc-img.png",
  ],
};

export const SliderBrand = ({ slidesPerView, name,slideClassName  }) => {
  const images = brandImages[name] || []; // Lấy mảng ảnh dựa trên tên

  return (
    <div className="home-box home-box-tax">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={slidesPerView}
          spaceBetween={10}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
        >
          {images.map((imageUrl, index) => (
            <SwiperSlide key={index} className={slideClassName}>
              <img src={imageUrl} alt={`Hình ảnh ${name}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
