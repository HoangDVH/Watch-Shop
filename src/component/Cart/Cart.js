import React, { useState } from "react";
import { Button, Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { AiFillDelete } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectTotalPrice,
} from "../../store/cartSlice";
import { Link } from "react-router-dom";
import { Form } from "../Modal/NotificationModal";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemName, setSelectedItemName] = useState("");
  const removeItem = () => {
    if (selectedItem) {
      dispatch(removeFromCart(selectedItem));
      toggleModal(); // Close the modal after deleting
    }
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <div className="container">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-message">
            Chưa có sản phẩm trong giỏ hàng
          </div>
          <Link to={"/"} className="link-style">
            <Button className="continue-btn">
              <IoIosArrowBack className="return-icon" />
              <span>Quay về trang chủ</span>
            </Button>
          </Link>
        </div>
      ) : (
        <div className="cart">
          <Table className="table">
            <thead>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="cart-content">
                  <td className="cart-img">
                    <img src={item.image} alt="hinhanh"></img>
                    <div className="productcart-title">{item.title}</div>
                  </td>
                  <td className="cart-price">
                    <div>
                      {item.current_price
                        ? item.current_price.toLocaleString() + "đ"
                        : ""}
                    </div>
                  </td>

                  <td className="cart-quantity">
                    <div className="quantity-controls">
                      <div className="cart-btn">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item))}
                        >
                          -
                        </button>
                        <div className="cart-count">{item.quantity}</div>
                        <button
                          onClick={() => dispatch(increaseQuantity(item))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="total-money">
                    {item.quantity && item.current_price
                      ? (item.quantity * item.current_price).toLocaleString() +
                        "đ"
                      : ""}
                  </td>
                  <td className="delete-area">
                    <button
                      className="button-delete"
                      onClick={() => {
                        setSelectedItem(item); // Set the selected item before opening the modal
                        setSelectedItemName(item.title);
                        toggleModal(); // Open the modal when delete button is clicked
                      }}
                    >
                      <AiFillDelete />
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="cart-footer">
            <Link to={"/"} className="link-style">
              <Button className="continue-btn">
                <IoIosArrowBack className="return-icon" />
                <span>Tiếp tục mua hàng</span>
              </Button>
            </Link>
            <div className="cart-container">
              <div className="total-price">
                Tổng tiền: {totalPrice.toLocaleString()}đ
              </div>
              <Link to={"/gio-hang/thanh-toan"} className="link-style">
                <Button className="payment-btn">
                  <span>Thanh toán</span>
                  <IoIosArrowForward className="next-icon" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <Form
        isOpen={modalVisible}
        toggle={toggleModal}
        onDelete={removeItem}
        selectedItemName={selectedItemName}
      />
    </div>
  );
};
