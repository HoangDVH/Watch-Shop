import React from "react";
import { Navbar } from "../../component/NavBar/Navbar";
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
