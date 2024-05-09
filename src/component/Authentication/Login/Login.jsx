import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa6";
// import { FaLockOpen } from "react-icons/fa";
import axios from "axios";
import * as Yup from "yup";
import { baseUrl } from "../../../baseUrl";

// import ForgetPassword from "../ForgetPassword/ForgetPassword";
import { NavLink, useNavigate } from "react-router-dom";
// import {  toast } from "react-toastify";
import { toast } from "react-toastify";

export default function Register({ getUserData }) {
  let [loading, setloading] = useState(false);

  let navigate = useNavigate();

  let validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required(),
    password: Yup.string()
      .min(8, "The password must contain at least 8 characters")
      .matches(
        /[a-z]/,
        "The password must contain at least one lowercase letter"
      )
      .matches(/[A-Z]/, "The password must contain at least one capital letter")
      .matches(/[0-9]/, "The password must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "The password must contain at least one special character"
      )
      .required(),
  });

  let registerFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validate:validate
    // validate,
    validationSchema,
    onSubmit: (values) => {
      setloading(true);
      console.log(values);
      axios
        .post(`${baseUrl}/auth/signin`, values)
        .then((data) => {
          if (data.data.user.email === "amezo2866@gmail.com") {
            console.log(data.data.user);
            toast.success("welcome admin");
            navigate("/BreastCancerAwareness/DashBord");
          } else if (data.status === 200) {
            localStorage.setItem("token", data.data.token);
            getUserData();
            // console.log(data.data.user.email);
            setloading(false);
            toast.success("Login successfully");
            navigate("/BreastCancerAwareness/Home");
            // console.log("error i login  is : ", data.data.user.role);
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            // setConfirmationCodeVisible(false);
            setloading(false);
            toast.error("Invalid email or password");
            console.log("error i login", error);
          }
        });
    },
  });
  // localStorage.clear();
  // console.log("login un", registerFormik.error);
  return (
    <div className="home-img d-flex justify-content-center align-items-center row m-0">
      <div className="bac-blur px-3 d-flex justify-content-evenly align-items-center flex-column col-md-6">
        <h2>"Welcome Where Care Meet technology."</h2>
        <div className="row home-img-input w-100">
          <form className="col-sx" onSubmit={registerFormik.handleSubmit}>
            <div className="mb-3 d-flex flex-column">
              <div className="email-input d-flex justify-content-center align-items-center">
                <label className="lable-icon w-25 text-light">
                  <FontAwesomeIcon icon={faEnvelope} className="mx-2" />
                  Email
                </label>
                <input
                  type="email"
                  className="form-control w-75 m-auto mb-1"
                  name="email"
                  value={registerFormik.values.email}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                />
              </div>

              {registerFormik.errors.email && registerFormik.touched.email && (
                <div className="alt d-flex justify-content-end">
                  <div className="alert alert-danger w-75 ">
                    {registerFormik.errors.email}
                  </div>
                </div>
              )}

              <div className="email-input d-flex mt-3 justify-content-center align-items-center">
                <label className="lable-icon w-25">
                  <FontAwesomeIcon icon={faLock} className="mx-2" />
                  Password
                </label>

                <input
                  type="password"
                  className="form-control w-75 m-auto mb-1"
                  name="password"
                  value={registerFormik.values.password}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                />
              </div>

              {registerFormik.errors.password &&
                registerFormik.touched.password && (
                  <div className="alt d-flex justify-content-end">
                    <div className="alert alert-danger w-75">
                      {registerFormik.errors.password}
                    </div>
                  </div>
                )}
            </div>

            <div className="login-submit ">
              <button
                type="submit"
                className="login-btn btn btn-danger w-25 mx-1 mb-3 fs-5"
                disabled={
                  !registerFormik.isValid || !registerFormik.dirty || loading
                }
              >
                {!loading ? "Login" : <FaSpinner className="fa-spin" />}
              </button>

              <button
                type="submit"
                className="login-btn btn btn-primary w-25 mx-auto mb-3 fs-6 p-2"
              >
                <NavLink to="/BreastCancerAwareness/ForgetPass">Forgot Password</NavLink>
              </button>
            </div>

            <NavLink
              to="/BreastCancerAwareness/Register"
              className="fs-3 text-decoration-underline"
            >
              Create account
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}
