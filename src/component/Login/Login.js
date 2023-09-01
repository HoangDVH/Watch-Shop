import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";
export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(null); // State to store email error
  const [passwordError, setPasswordError] = useState(null); // State to store password error
  const [isGoogleSignInCompleted, setIsGoogleSignInCompleted] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Vui lòng nhập địa chỉ email hợp lệ")
      .required("Không được bỏ trống"),
    password: Yup.string().required("Không được bỏ trống"),
  });
  const { googleSignIn, user } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      setIsGoogleSignInCompleted(true);
    } catch (error) {
      console.log(error);
    }
  };
 

  useEffect(() => {
    if (user != null && isGoogleSignInCompleted) {
      navigate(-1);
    }
  }, [user, isGoogleSignInCompleted]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await signInWithEmailAndPassword(auth, values.email, values.password);
          if (values.email === "admin@gmail.com") {
            navigate("/admin"); // Redirect to the admin page
          } else {
            navigate("/"); // Redirect to the default page
          }
          console.log("User logged in");
          setEmailError(null);
          setPasswordError(null);
        } catch (error) {
          console.error("Login error:", error.message);
          // Check for specific error cases

          if (error.code === "auth/user-not-found") {
            setEmailError("Nhập sai email");
            setPasswordError(null);
          } else if (error.code === "auth/wrong-password") {
            setEmailError(null);
            setPasswordError("Nhập sai mật khẩu");
          } else {
            setEmailError(null);
            setPasswordError(null);
          }
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
              <h1 className="login-head">LOGIN</h1>
              <FormGroup>
                <Label for="exampleEmail" className="login-title">
                  User Name
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                  className={`login-input ${
                    errors.email && touched.email ? "error-border" : ""
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <div className="error">
                  {errors.email && touched.email && errors.email}
                  {emailError && <div className="auth-error">{emailError}</div>}
                </div>
              </FormGroup>
              <FormGroup className="password-area">
                <Label for="examplePassword" className="login-title">
                  Password
                </Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type={showPassword ? "text" : "password"}
                  className={`login-input ${
                    errors.password && touched.password ? "error-border" : ""
                  }`}
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
                  {passwordError && (
                    <div className="auth-error">{passwordError}</div>
                  )}
                </div>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" />{" "}
                <Label check className="login-remem">
                  Remember me
                </Label>
              </FormGroup>
              <Button className="login-btn">
                <div
                  className="login-btn-title"
                  type="submit"
                  disabled={isSubmitting}
                >
                  LOGIN
                </div>
              </Button>
            </Form>
            <div className="login-body">Or login with</div>
            <div className="login-dif">
              <Button className="login-gg" onClick={handleGoogleSignIn}>
                <FcGoogle className="gg-icon" />
                Google
              </Button>
              <Button className="login-gm">
                <BiLogoGmail className="gm-icon" />
                Gmail
              </Button>
            </div>
            <div className="login-footer">
              Not a member?
              <Link to={"/register"}>Sign up now</Link>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
