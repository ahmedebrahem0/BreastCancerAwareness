import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock, faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { FaSpinner } from 'react-icons/fa6'
import { useFormik } from 'formik'
import { FaLockOpen } from 'react-icons/fa'
import * as Yup from 'yup'
import axios from 'axios'
import { baseUrl } from '../../../baseUrl'

import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Register() {
  let [loading, setloading] = useState(false)

  let navigate = useNavigate()

  let validationSchema = Yup.object({
    name: Yup.string().min(10, 'Too Short!').max(40).required(),
    email: Yup.string().email('Invalid email').required(),
    password: Yup.string()
      .min(8, 'The password must contain at least 8 characters')
      .matches(
        /[a-z]/,
        'The password must contain at least one lowercase letter'
      )
      .matches(/[A-Z]/, 'The password must contain at least one capital letter')
      .matches(/[0-9]/, 'The password must contain at least one number')
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        'The password must contain at least one special character'
      )
      .required(),
    // .matches(/^[a-z0-9A-Z@#$%]{7,}$/)
    rePassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required(),
    phone: Yup.string()
      // .matches(/^[0-9()+-]*$/)
      .matches(/^\+?\d+$/, 'Phone number should only contain numbers')
      .min(11, 'Phone number must contain 10 digits')
      .max(12, 'Phone number must contain 10 digits')
      .required('Please enter phone number'),
  })

  // let validate = (values) => {
  //   let error = {}
  //   if (!values.name) {
  //     error.name='Required'
  //   } else if (values.name.length > 15) {
  //     error.name = "Must be 15 characters or less";
  //   }

  //   if (!values.email) {
  //     error.email = "Required";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //     error.email = "Invalid email address";
  //   }

  //   if (!values.password) {
  //     error.password = "Required";
  //   } else if (!/^[A-Z][a-z0-9A-Z@#$%]$/i.test(values.password)) {
  //     error.password = "Invalid password address";
  //   } else if (values.password.length > 20) {
  //     error.password = "Must be 20 characters or less";
  //   }

  //   if (!values.rePassword) {
  //     error.rePassword = "Required";
  //   } else if (values.password != values.rePassword) {
  //     error.rePassword = "rePassword must match";
  //   }

  //   if (!values.phone) {
  //     error.phone = "Required";
  //   } else if (!/^[0-9()+-]*$/i.test(values.phone)) {
  //     error.phone = "Invalid phone address";
  //   }
  //   // else if (values.phone.replace(/\D/g, "")) {
  //   //   error.phone = "Write numbers, not letters";
  //   // }
  //   return error
  // };

  let registerFormik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',
    },
    // validate:validate
    // validate,
    validationSchema,
    onSubmit: (values) => {
      setloading(true)
      console.log(values)
      axios
        .post(`${baseUrl}/auth/signup`, values)
        // console.log(Yup.date)
        .then((date) => {
          if (date.status === 201) {
            toast.success('success')
            setloading(true)
            // toast.success("success                                                                        ", {
            //   position: "top-right",
            //   autoClose: 5000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   theme: "colored",
            //   // width:"500px"
            //   // transition: Bounce,
            // });
            navigate("/BreastCancerAwareness/Login");
          }
        })
        .catch((error) => {
          if (error.response.status === 409) {
            toast.error('error')
            setloading(false)
            // alert(error.response.data.message)
            console.log(error)
          }
        })
    },
  })
  // console.log(registerFormik.errors);
  // console.log(error);

  return (
    <>
      <div className="">
        <div className="home-img d-flex justify-content-center align-items-center">
          <div className=" bac-blur  px-3 d-flex justify-content-center align-items-center flex-column">
            <h2>"Welcome Where Care Meet technology."</h2>
            <div className="row home-img-input w-100">
              <form
                className=" col-sm w-100"
                onSubmit={registerFormik.handleSubmit}
              >
                <div className="mb-3">
                  <div className="user-input d-flex justify-content-center align-items-center">
                    <label className="lable-icon w-25">
                      <FontAwesomeIcon icon={faUser} className="mx-2" />
                      User Name
                    </label>
                    <input
                      type="text"
                      className="form-control w-75 m-auto mb-1"
                      id="name"
                      aria-describedby="emailHelp"
                      // placeholder="User Name"
                      name="name"
                      value={registerFormik.values.name}
                      onChange={registerFormik.handleChange}
                      onBlur={registerFormik.handleBlur}
                    />
                  </div>
                  {registerFormik.errors.name && registerFormik.touched.name ? (
                    <div className="alt d-flex justify-content-end">
                      <div className="alert alert-danger w-75">
                        {registerFormik.errors.name}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="input-email d-flex justify-content-center align-items-center">
                    <label className="lable-icon w-25">
                      <FontAwesomeIcon icon={faEnvelope} className="mx-2" />
                      Emali
                    </label>
                    <input
                      type="email"
                      className="form-control w-75 m-auto mb-1"
                      id="exampleInputEmail3"
                      aria-describedby="emailHelp"
                      // placeholder="Email address"
                      name="email"
                      value={registerFormik.values.email}
                      onChange={registerFormik.handleChange}
                      onBlur={registerFormik.handleBlur}
                    />
                  </div>

                  {registerFormik.errors.email &&
                  registerFormik.touched.email ? (
                    <div className="alt d-flex justify-content-end">
                      <div className="alert alert-danger w-75">
                        {registerFormik.errors.email}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="input-pass d-flex justify-content-center align-items-center">
                    {" "}
                    <label className="lable-icon w-25">
                      <FontAwesomeIcon icon={faLock} className="mx-2" />
                      password
                    </label>
                    <input
                      type="password"
                      className="form-control  w-75 m-auto mb-1"
                      id="pass"
                      // placeholder="Password"
                      name="password"
                      value={registerFormik.values.password}
                      onChange={registerFormik.handleChange}
                      onBlur={registerFormik.handleBlur}
                    />
                  </div>
                  {registerFormik.errors.password &&
                  registerFormik.touched.password ? (
                    <div className="alt d-flex justify-content-end">
                      <div className="alert alert-danger w-75">
                        {registerFormik.errors.password}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="input-repass d-flex justify-content-center align-items-center">
                    <label className="lable-icon w-25">
                      <FaLockOpen className="mx-2" />
                      rePassword
                    </label>

                    <input
                      type="password"
                      className="form-control  w-75 m-auto mb-1"
                      id="rePass"
                      // placeholder="Password"
                      name="rePassword"
                      value={registerFormik.values.rePassword}
                      onChange={registerFormik.handleChange}
                      onBlur={registerFormik.handleBlur}
                    />
                  </div>
                  {registerFormik.errors.rePassword &&
                  registerFormik.touched.rePassword ? (
                    <div className="alt d-flex justify-content-end">
                      <div className="alert alert-danger w-75 ">
                        {registerFormik.errors.rePassword}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="input-phone d-flex justify-content-center align-items-center">
                    <label className="lable-icon w-25">
                      <FontAwesomeIcon icon={faPhoneFlip} className="mx-2" />
                      Phone
                    </label>

                    <input
                      type="tel"
                      className="form-control  w-75 m-auto mb-1"
                      id="phone"
                      // placeholder="Phone"
                      name="phone"
                      value={registerFormik.values.phone}
                      // pattern="[0-9()+-]*"
                      onChange={registerFormik.handleChange}
                      onBlur={registerFormik.handleBlur}
                    />
                  </div>
                  {registerFormik.errors.phone &&
                  registerFormik.touched.phone ? (
                    <div className="alt d-flex justify-content-end">
                      <div className="alert alert-danger w-75  ">
                        {registerFormik.errors.phone}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="login-submit">
                  <button
                    type="submit"
                    className="forget-send btn btn-danger w-25 mx-1 mb-3 fs-5"
                    disabled={
                      !(
                        registerFormik.isValid &&
                        registerFormik.dirty &&
                        !loading
                      )
                    }
                  >
                    {!loading ? (
                      "register"
                    ) : (
                      // <FontAwesomeIcon icon={faSpinner} />
                      <FaSpinner className="fa-spin" />
                    )}
                  </button>
                  <button
                    type="submit"
                    className="forget-send btn btn-primary w-25 mx-auto mb-3 fs-5"
                  >
                    <NavLink to="/BreastCancerAwareness/Login">Login</NavLink>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
