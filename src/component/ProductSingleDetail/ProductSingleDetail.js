import React from "react";
import "./ProductSingleDetail.css";
import { Table } from "reactstrap";
export const ProductSingleDetail = ({ productDetail }) => {
  return (
    <div className="container">
      <div className="productsingle-detail">
        <div className="tab-header">
          <ul className="tab-header-list">
            <li>THÔNG TIN CHI TIẾT</li>
            <li>HƯỚNG DẪN MUA HÀNG</li>
            <li>GIỚI THIỆU THÀNH HƯNG WATCH</li>
          </ul>
        </div>
        <div className="tab-content">
          <h5 className="table-name">NGUỒN GỐC VÀ THÔNG SỐ SẢN PHẨM</h5>
          <Table className="product-table">
            <tr>
              <td className="product-content">Thương hiệu</td>
              <td className="product-content">
                {productDetail?.brand?.split("-").slice(-1)[0].toUpperCase()}
              </td>
            </tr>
            <tr>
              <td className="product-content">Quốc gia đăng ký thương hiệu</td>
              <td className="product-content">Thụy Sĩ</td>
            </tr>
            <tr>
              <td className="product-content">Mã sản phẩm</td>
              <td className="product-content">{productDetail?.product_code}</td>
            </tr>
            <tr>
              <td className="product-content">Giới tính</td>
              <td className="product-content">{productDetail?.sex}</td>
            </tr>
            <tr>
              <td className="product-content">Loại sản phẩm</td>
              <td className="product-content">{productDetail?.product_type}</td>
            </tr>
            <tr>
              <td className="product-content">Chiều dày</td>
              <td className="product-content">11 mm</td>
            </tr>
            <tr>
              <td className="product-content">Chất liệu vỏ</td>
              <td className="product-content">Thép không gỉ 316L</td>
            </tr>
            <tr>
              <td className="product-content">Chất liệu dây</td>
              <td className="product-content">{productDetail?.wire_material}</td>
            </tr>
            <tr>
              <td className="product-content">Chất liệu mặt kính</td>
              <td className="product-content">Lobinn</td>
            </tr>
            <tr>
              <td className="product-content">Nơi sản xuất</td>
              <td className="product-content">Trung Quốc</td>
            </tr>
            <tr>
              <td className="product-content">Độ chịu nước</td>
              <td className="product-content">5 ATM</td>
            </tr>
            <tr>
              <td className="product-content">Bảo hành</td>
              <td className="product-content">24 tháng</td>
            </tr>
          </Table>
        </div>
      </div>
    </div>
  );
};
