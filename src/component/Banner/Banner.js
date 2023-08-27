import React from "react";
import "./Banner.css";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { HeaderSale } from "../HeaderSale/HeaderSale";
export const Banner = () => {
  return (
    <div className="banner-container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        spaceBetween={35}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="banner-img">
          <img
            src="https://thanhhungwatch.vn/thumb/crop/15506/1920/600/"
            alt="hinh anh"
          ></img>
        </SwiperSlide>
        <SwiperSlide className="banner-img">
          <img
            src="https://thanhhungwatch.vn/thumb/crop/18878/1920/600/"
            alt="hinh anh"
            v
          ></img>
        </SwiperSlide>
        <SwiperSlide className="banner-img">
          <img
            src="https://thanhhungwatch.vn/thumb/crop/15508/1920/600/"
            alt="hinh anh"
          ></img>
        </SwiperSlide>
        <SwiperSlide className="banner-img">
          <img
            src="https://thanhhungwatch.vn/thumb/crop/11886/1920/600/"
            alt="hinh anh"
          ></img>
        </SwiperSlide>
      </Swiper>
      <HeaderSale />
    </div>
  );
};
