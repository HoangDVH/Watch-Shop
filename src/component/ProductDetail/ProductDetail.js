import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import "./ProductDetail.css";
import { AiFillLike } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link, useLocation, useParams } from "react-router-dom";
import { ProductSingleDetail } from "../ProductSingleDetail/ProductSingleDetail";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { toast } from "react-toastify";

export const ProductDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { productData } = location.state || {}; // Use empty object as default
  const { category, productTitle } = useParams(); // Get route parameters

  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    if (productData) {
      // Use productData if available
      setProductDetail(productData);
    } else {
      // Fetch product details using the category and productTitle
      const fetchProductDetail = async () => {
        try {
          const response = await fetch(
            `https://ktc99p-8080.csb.app/watches?categories=${category}&title=${productTitle}`
          );
          const data = await response.json();
          console.log({ data });
          if (data && data.length > 0) {
            setProductDetail(data[0]);
          }
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      };

      fetchProductDetail();
    }
  }, [productData, category, productTitle]);

  return (
    <>
      <div className="container">
        <div className="product-detail">
          <div className="product-left">
            <img src={productDetail?.image} alt="hinhanh"></img>
          </div>
          <div className="product-right">
            <h1 className="product-title">{productDetail?.title}</h1>
            <div className="product-content-info">
              <div class="product-content-view">
                Lượt xem: <span>147184</span> | Ngày đăng:{" "}
                <span>13/08/2023</span>
              </div>

              <div class="product-content-button">
                <Button color="primary">
                  <AiFillLike />
                  Thích
                  <span>377</span>
                </Button>
                <Button color="primary">Chia sẻ</Button>
              </div>
            </div>
            <div class="thong-so-box">
              <p className="text">
                <span className="text-name">Mã sản phẩm :</span>{" "}
                <span className="product-price">
                  {productDetail?.product_code}
                </span>
              </p>
              <p className="text">
                <span className="text-name">Giá đang khuyến mãi :</span>
                <span class="product-price">
                  {productDetail?.current_price.toLocaleString()} VNĐ
                </span>
              </p>
              <p className="text">
                <span className="text-name">Giá cũ :</span>
                <span className="product-price">
                  {productDetail?.old_price.toLocaleString()} VNĐ
                </span>
              </p>
              <p className="text">
                <span className="text-name"> Tiết kiệm được :</span>
                <span className="product-price">
                  {(
                    productDetail?.old_price - productDetail?.current_price
                  ).toLocaleString()}{" "}
                  VNĐ ({productDetail?.percentage_price}%)
                </span>
              </p>
              <p className="text">
                <span className="text-name">Trả góp :</span>{" "}
                <span className="product-price">
                  ≈ 1,663,333 VNĐ x 3 kỳ với{" "}
                </span>
              </p>
              <p className="text">
                <span className="text-name">Xuất xứ hàng hóa :</span>
                <span className="product-price">Chính Hãng</span>
              </p>
              <p className="text">
                <span className="text-name">Tình trạng :</span>
                <span className="product-price">Còn hàng</span>
              </p>
            </div>
            <div className="product-btn">
              <Link>
                <Button
                  className="btn-buy"
                  onClick={() => {
                    dispatch(addToCart(productDetail));
                    toast.success("Sản phẩm đã được thêm vào giỏ hàng!");
                  }}
                >
                  MUA NGAY
                  <p>Thanh toán khi nhận hàng</p>
                </Button>
              </Link>
              <Button className="btn-installment">
                TRẢ GÓP QUA CCCD
                <p>Căn cước - Sim chính chủ</p>
              </Button>
              <Button className="btn-hotline">
                <BsFillTelephoneFill />
                Hotline: 0298563779
              </Button>
            </div>
            <div className="promotional-content">
              <div className="promptional-title">
                <AiFillStar />
                <span>CHƯƠNG TRÌNH KHUYẾN MÃI</span>
              </div>
              <ul className="promotional-list">
                <li>Giảm 10% khi mua sản phẩm thứ 2 trở lên</li>
                <li>Tặng Voucher giảm giá khi mua lần sau</li>
                <li>Tặng 1 ĐH Mini Focus khi mua ĐH Kassaw</li>
                <li>Tặng 1 ĐH Mini Focus khi mua ĐH I&W Carnival</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ProductSingleDetail productDetail={productDetail} />
    </>
  );
};
