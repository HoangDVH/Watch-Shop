import React from "react";
import { Navbar } from "../../component/NavBar/Navbar";
import { HeaderSale } from "../../component/HeaderSale/HeaderSale";
import { Product } from "../../component/Products/Products";
import { ProductPortfolio } from "../../component/Products/Productportfolio/ProductPortfolio";
import { Cart } from "../../component/Products/Card/Card";
import { useParams } from "react-router-dom";
import { SliderBrand } from "../../component/Banner/SlideBrand/SlideBrand";
import { Footer } from "../../component/Footer/Footer";
import { BreadCrumb } from "../../component/BreadCrumb/BreadCrumb";
import { SortBox } from "../../component/SortBox/SortBox";

const categorySlugToName = {
  "dong-ho-nam": "Đồng hồ nam",
  "dong-ho-nu": "Đồng hồ nữ",
  "dong-ho-doi": "Đồng hồ đôi",
  "dong-ho-trang-tri": "Đồng hồ trang trí",
  "phu-kien-dong-ho": "Phụ kiện đồng hồ",
  "tin-tuc-su-kien": "Tin tức và sự kiện",
  "dong-ho-lobinni": "Đồng hồ LOBINNI",
  "dong-ho-kassaw": "Đồng hồ KASSAW",
  "dong-ho-teintop": "Đồng hồ TEINTOP",
  "dong-ho-lisheng": "Đồng hồ LISHENG",
  "dong-ho-border": "Đồng hồ BORDER",
  "dong-ho-lixing": "Đồng hồ LIXING",
};
const getCategoryNameFromSlug = (slug) => {
  return categorySlugToName[slug] || "Unknown";
};

export const HomeProduct = () => {
  const { category } = useParams();
  const categoryName = getCategoryNameFromSlug(category);

  return (
    <div>
      <Navbar />
      <HeaderSale />
      <BreadCrumb categoryName={categoryName} categorySlug={category} />
      <SortBox />
      <ProductPortfolio name={category} />
      <Cart category={category} />
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
