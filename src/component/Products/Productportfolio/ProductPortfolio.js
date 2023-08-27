import React from "react";
import "./ProductPortfolio.css";
export const ProductPortfolio = ({name}) => {
  return (
    <section className="main-content">
      <div className="container">
        <div className="home-box">
          <h2 className="box-title"><span>{name}</span></h2>
        </div>
       
      </div>
    </section>
  );
};
