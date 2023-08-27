// Trong Product.js
import React from "react";
import { ProductPortfolio } from "./Productportfolio/ProductPortfolio";
import { SliderTaxProduct } from "./SliderTaxProduct/SliderTaxProduct";
import { Cart } from "./Card/Card";
import { SliderBrand } from "../Banner/SlideBrand/SlideBrand";
import "./Products.css";
export const Product = () => {
  return (
    <div>
      <ProductPortfolio name="danh mục sản phẩm" />
      <SliderTaxProduct />
      <ProductPortfolio name="sản phẩm bán chạy" />
      <Cart />
      <ProductPortfolio name="sản phẩm giảm giá" />
      <Cart category="đồng hồ nữ" />

      <ProductPortfolio name="thương hiệu phân phối" />
      <SliderBrand
        slidesPerView={6}
        name="thương hiệu phân phối"
        slideClassName="slider-brand"
      />
      <ProductPortfolio name="chúng tôi cam kết" />
      <SliderBrand slidesPerView={1} name="chúng tôi cam kết" />
    </div>
  );
};
