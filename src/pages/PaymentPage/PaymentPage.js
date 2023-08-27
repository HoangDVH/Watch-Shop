import React from "react";
import { Navbar } from "../../component/NavBar/Navbar";
import { Banner } from "../../component/Banner/Banner";
import { HeaderSale } from "../../component/HeaderSale/HeaderSale";
import { BreadCrumb } from "../../component/BreadCrumb/BreadCrumb";
import { Payment } from "../../component/Payment/Payment";
import { Footer } from "../../component/Footer/Footer";

export const PaymentPage = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumb />
      <Payment />
      <Footer />
    </div>
  );
};
