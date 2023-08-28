import React from "react";
import { Navbar } from "../../component/NavBar/Navbar";
import { HeaderSale } from "../../component/HeaderSale/HeaderSale";
import { BreadCrumb } from "../../component/BreadCrumb/BreadCrumb";
import { Footer } from "../../component/Footer/Footer";
import { News } from "../../component/News/News";
import { useParams } from "react-router";

export const NewsPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderSale />
      <BreadCrumb />
      <News />
      <Footer />
    </div>
  );
};
