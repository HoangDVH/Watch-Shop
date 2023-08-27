import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { NewsDetailContent } from "../../component/News/NewsDetailContent";
import { useParams } from "react-router";
import { Navbar } from "../../component/NavBar/Navbar";
import { HeaderSale } from "../../component/HeaderSale/HeaderSale";
import { BreadCrumb } from "../../component/BreadCrumb/BreadCrumb";
import { Footer } from "../../component/Footer/Footer";
export const NewsDetailPage = () => {
  const { news } = useParams();
  return (
    <>
      <Navbar />
      <HeaderSale />
      <BreadCrumb />
      <NewsDetailContent news={news} />
      <Footer/>
    </>
  );
};
