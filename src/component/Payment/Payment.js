import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./Payment.css";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalPrice,updateSoldQuantity } from "../../store/cartSlice";
import { updateCart } from "../../store/cartSlice";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
export const Payment = () => {
  const cartItems = useSelector((state) => state.cart);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  

  // const [paymentSuccess, setPaymentSuccess] = useState(false);

  const PaySchema = Yup.object().shape({
    fullName: Yup.string()
      .matches(/^[a-zA-ZÀ-ỹ ]+$/, "Vui lòng nhập đầy đủ họ tên")
      .required("Không được bỏ trống"),
    phoneNumber: Yup.string()
      .matches(/^\d{9}$/, "Số điện thoại phải gồm có 10 số")
      .required("Không được bỏ trống"),

    address: Yup.string().required("Không được bỏ trống"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Vui lòng nhập địa chỉ email hợp lệ"
      )
      .required("Không được bỏ trống"),
  });
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="container">
          <div className="pay-acsess">
            <p className="payacess-title">
              Đặt hàng thành công! Cảm ơn bạn đã mua hàng!
            </p>
            <Link to={"/"}>
              <Button className="payaccess-btn">Quay về trang chủ</Button>
            </Link>
          </div>
        </div>
      ) : (
        <Formik
          initialValues={{
            email: "",
            fullName: "",
            phoneNumber: "",
            address: "",
          }}
          validationSchema={PaySchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              toast.success("Đặt hàng thành công!");
              dispatch(updateCart([]));
              // alert(JSON.stringify(values, null, 2));
              // setPaymentSuccess(true);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <div className="container" onSubmit={handleSubmit}>
              <Form className="form-payment">
                <div className="form-group">
                  <FormGroup className="form-content">
                    <Label for="exampleEmail" className="form-label">
                      Họ tên
                    </Label>

                    <Input
                      id="exampleName"
                      name="fullName"
                      placeholder="with a placeholder"
                      type="text"
                      className="form-input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fullName}
                    />
                    <div className="error">
                      {errors.fullName && touched.fullName && errors.fullName}
                    </div>
                  </FormGroup>

                  <FormGroup className="form-content">
                    <Label for="exampleEmail" className="form-label">
                      Số điện thoại
                    </Label>
                    <Input
                      id="examplePhone"
                      name="phoneNumber"
                      placeholder="with a placeholder"
                      type="number"
                      className="form-input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                    />
                    <div className="error">
                      {errors.phoneNumber &&
                        touched.phoneNumber &&
                        errors.phoneNumber}
                    </div>
                  </FormGroup>

                  <FormGroup className="form-content">
                    <Label for="exampleEmail" className="form-label">
                      Địa chỉ giao hàng
                    </Label>
                    <Input
                      id="exampleAdress"
                      name="address"
                      placeholder="with a placeholder"
                      type="text"
                      className="form-input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                    />
                    <div className="error">
                      {errors.address && touched.address && errors.address}
                    </div>
                  </FormGroup>

                  <FormGroup className="form-content">
                    <Label for="exampleEmail" className="form-label">
                      Email
                    </Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                      className="form-input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <div className="error">
                      {errors.email && touched.email && errors.email}
                    </div>
                  </FormGroup>
                </div>
                <div className="pay-btn">
                  <Button
                    className="pay-title"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    ĐẶT HÀNG
                  </Button>
                </div>
              </Form>

              <div className="order">
                <div className="order-title">Đơn hàng của bạn</div>
                <div className="order-header">
                  <div>Sản phẩm</div>
                  <div className="order-count">Số lượng</div>
                  <div>Thành tiền</div>
                </div>
                {cartItems.map((item) => {
                  return (
                    <div className="order-body" key={item.id}>
                      <div className="order-content">
                        <div className="order-name">{item.title}</div>
                        <div className="order-quantity">{item.quantity}</div>
                        <div className="order-price">
                          {(
                            item.current_price * item.quantity
                          ).toLocaleString()}
                          đ
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="order-total">
                  <div>Tổng</div>
                  <div className="pay-totalprice">
                    {totalPrice.toLocaleString()}đ
                  </div>
                </div>

                <FormGroup check className="bank-transfer">
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>Chuyển khoản ngân hàng</Label>
                </FormGroup>

                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>Thanh toán trực tiếp</Label>
                </FormGroup>
              </div>
            </div>
          )}
        </Formik>
      )}
    </>
  );
};
