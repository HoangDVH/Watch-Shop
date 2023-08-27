import React from "react";
import { Navbar } from "../../component/NavBar/Navbar";
import { Banner } from "../../component/Banner/Banner";

import { Product } from "../../component/Products/Products";
import { Footer } from "../../component/Footer/Footer";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Product />
      <Footer />
    </div>
  );
};
