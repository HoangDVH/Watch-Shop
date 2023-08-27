import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { FcGoogle } from "react-icons/fc";
import "./Register.css";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const Register = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .email("Vui lòng nhập địa chỉ email hợp lệ")
      .required("Không được bỏ trống"),
    password: Yup.string()
      .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
      .max(20, "Mật khẩu không được vượt quá 20 ký tự")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/,
        "Mật khẩu phải chứa ít nhất 1 chữ cái thường, 1 chữ cái in hoa, 1 số và 1 ký tự đặc biệt (!@#$%^&*()_+{}[]:;<>,.?~\\/-)"
      )
      .required("Không được bỏ trống"),
    repeatpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Mật khẩu phải trùng khớp")
      .required("Không được bỏ trống"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        repeatpassword: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
          // Registration successful, you can now handle the user or navigate to a different page
          console.log("User registered:", userCredential.user);
          navigate('/login');
        } catch (error) {
          console.error("Registration error:", error.message);
        } finally {
          setSubmitting(false);
        }
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
        <div className="login-form" onSubmit={handleSubmit}>
          <div className="login">
            <Form>
              <h1 className="login-head">REGISTER</h1>
              <FormGroup>
                <Label for="exampleEmail" className="login-title">
                  Email
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  type="email"
                  className={`login-input ${errors.email && touched.email ? 'error-border' : ''}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <div className="error">
                  {errors.email && touched.email && errors.email}
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword" className="login-title">
                  Password
                </Label>
                <Input
                  id="examplePassword"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className={`login-input ${errors.password && touched.password ? 'error-border' : ''}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {showPassword ? (
                  <AiFillEyeInvisible
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <AiFillEye
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}

                <div className="error">
                  {errors.password && touched.password && errors.password}
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword" className="login-title">
                  Repeat Password
                </Label>
                <Input
                  id="examplePassword"
                  name="repeatpassword"
                  type={showRePassword ? "text" : "password"}
                  className={`login-input ${errors.repeatpassword && touched.repeatpassword ? 'error-border' : ''}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.repeatpassword}
                />
                {showRePassword ? (
                  <AiFillEyeInvisible
                    className="eye-icon"
                    onClick={() => setShowRePassword(!showRePassword)}
                  />
                ) : (
                  <AiFillEye
                    className="eye-icon"
                    onClick={() => setShowRePassword(!showRePassword)}
                  />
                )}
                <div className="error">
                  {errors.repeatpassword &&
                    touched.repeatpassword &&
                    errors.repeatpassword}
                </div>
              </FormGroup>
              <Button className="login-btn">
                <div
                  className="login-btn-title"
                  type="submit"
                  disabled={isSubmitting}
                >
                  REGISTER
                </div>
              </Button>
            </Form>
            <div className="login-body">Or register with</div>
            <div className="login-dif">
              <Button className="login-gg">
                <FcGoogle className="gg-icon" />
                Google
              </Button>
              <Button className="login-gm">
                <BiLogoGmail className="gm-icon" />
                Gmail
              </Button>
            </div>
            <div className="login-footer">
              Has a account?{" "}
              <Link
                to={{ pathname: "/login", state: { fromRegistration: true } }}
              >
                Log in now
              </Link>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
