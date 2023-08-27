import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Card.css";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:5293/watches";

export const Cart = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let url = API_URL;

      if (
        category === "lobinni" ||
        category === "kassaw" ||
        category === "teintop" ||
        category === "border" ||
        category === "lixing" ||
        category === "lisheng"
      ) {
        url = `${API_URL}?brand=${category}`;
      } else if (category) {
        url = `${API_URL}?categories=${category}`;
      }

      const res = await axios.get(url);
      setProducts(res.data);
      setVisibleProducts(res.data.slice(0, visibleCount));
      setIsLoading(false);
    };
    fetchData();
  }, [category, visibleCount]);

  return (
    <div className="container">
      <div className="cart-list home-box-tax">
        <div className="grid">
          {visibleProducts.map((product) => {
            return (
              <Link
                key={product.id}
                to={{
                  pathname: `/${product.categories}/${product.title}`,
                  state: { productData: product }, // Pass product data as state
                }}
                className="no-underline"
                onClick={scrollToTop}
              >
                <Card key={product.id}>
                  <img alt="Sample" src={product.image} />
                  <CardBody>
                    <CardTitle>{product.title}</CardTitle>
                    <CardText>
                      <span className="product-curentprice">
                        {product.current_price.toLocaleString()}đ
                      </span>
                      <span className="product-oldprice">
                        {product.old_price.toLocaleString()}đ
                      </span>
                      <span className="product-perprice">
                        -{product.percentage_price}%
                      </span>
                    </CardText>
                  </CardBody>
                  <div className="icon-installment">Trả gớp 0%</div>
                </Card>
              </Link>
            );
          })}
        </div>

        <Button
          className="load-more"
          onClick={() => {
            setIsLoading(true); // Đặt trạng thái "ĐANG TẢI"
            setTimeout(() => {
              setVisibleCount((prevCount) => prevCount + 8);
              setIsLoading(false); // Dừng trạng thái "ĐANG TẢI" sau khi hiển thị thêm sản phẩm
            }, 600); // Đặt độ trễ 1 giây (có thể thay đổi)
          }}
        >
          {isLoading ? "ĐANG TẢI..." : "Xem thêm sản phẩm"}
        </Button>
      </div>
    </div>
  );
};
