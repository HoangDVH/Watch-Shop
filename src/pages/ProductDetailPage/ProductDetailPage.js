import React from "react";
import { Navbar } from "../../component/NavBar/Navbar";
import { HeaderSale } from "../../component/HeaderSale/HeaderSale";
import { BreadCrumb } from "../../component/BreadCrumb/BreadCrumb";
import { ProductDetail } from "../../component/ProductDetail/ProductDetail";
import { ProductPortfolio } from "../../component/Products/Productportfolio/ProductPortfolio";
import { Cart } from "../../component/Products/Card/Card";
import { SliderBrand } from "../../component/Banner/SlideBrand/SlideBrand";
import { Footer } from "../../component/Footer/Footer";

export const ProductDetailPage = () => {
  
  return (
    <div>
      <Navbar />
      <HeaderSale />
      <BreadCrumb />
      <ProductDetail />

      <ProductPortfolio name="Các sản phẩm khác" />
      <Cart />
      <ProductPortfolio name="thương hiệu phân phối" />
      <SliderBrand
        slidesPerView={6}
        name="thương hiệu phân phối"
        slideClassName="slider-brand"
      />
      <ProductPortfolio name="chúng tôi cam kết" />
      <SliderBrand slidesPerView={1} name="chúng tôi cam kết" />
      <Footer />
    </div>
  );
};
