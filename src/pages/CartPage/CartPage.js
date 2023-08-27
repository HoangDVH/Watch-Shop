import React from "react";
import { Navbar } from "../../component/NavBar/Navbar";
import { HeaderSale } from "../../component/HeaderSale/HeaderSale";
import { BreadCrumb } from "../../component/BreadCrumb/BreadCrumb";
import { ProductPortfolio } from "../../component/Products/Productportfolio/ProductPortfolio";
import { SliderBrand } from "../../component/Banner/SlideBrand/SlideBrand";
import { Footer } from "../../component/Footer/Footer";
import { Cart } from "../../component/Cart/Cart";

export const CartPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderSale />
      <BreadCrumb />
      <ProductPortfolio name="Giỏ hàng" />
      <Cart />

      <Footer />
    </div>
  );
};
