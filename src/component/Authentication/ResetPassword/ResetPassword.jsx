import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FaSpinner } from 'react-icons/fa6'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { baseUrl } from '../../../baseUrl'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function ResetPassword() {
  // eslint-disable-next-line no-unused-vars
  let [confirmation, setConfirmation] = useState(false)

  let [loading, setloading] = useState(false)

  let navigate = useNavigate()

  let validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required(),

    newPassword: Yup.string()
      .min(8, 'The newPassword must contain at least 8 characters')
      .matches(
        /[a-z]/,
        'The newPassword must contain at least one lowercase letter'
      )
      .matches(
        /[A-Z]/,
        'The newPassword must contain at least one capital letter'
      )
      .matches(/[0-9]/, 'The newPassword must contain at least one number')
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        'The newPassword must contain at least one special character'
      )
      .required(),
    // .matches(/^[a-z0-9A-Z@#$%]{7,}$/)
  })

  let registerFormik = useFormik({
    initialValues: {
      email: '',
      newPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setloading(true)
      console.log(values)
      axios
        .put(`${baseUrl}/auth/resetPassword`, values)
        .then((date) => {
          if (date.status === 200) {
            setloading(true)
            setConfirmation(true)
            toast.success('reset code is done')
            navigate("/BreastCancerAwareness/Home");
          }
          // else {
          //   setloading(false);
          
          // }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            toast.error(error.response.data.message)
            setloading(true)
            setConfirmation(true)
            console.log(error.response.data.message)
            console.log(error)
          }
        })
    },
  })
  // console.log(registerFormik.errors)
  // validationSchema
  //   .isValid()
  //   .then((valid) => {
  //     if (valid) {
  //       // إذا كان البريد الإلكتروني صالح، قم بالاستدعاء لـ API الخاص بك للتحقق من وجود البريد الإلكتروني
  //       axios
  //         .post("YOUR_API_ENDPOINT", {})
  //         .then((response) => {
  //           // التحقق من الرد من الخادم
  //           if (response.data.exists) {
  //             // إذا كان البريد الإلكتروني موجودًا، قم بإرسال رسالة تأكيد
  //             axios
  //               .post("YOUR_CONFIRMATION_API_ENDPOINT", {})
  //               .then((confirmationResponse) => {
  //                 console.log("تم إرسال رسالة تأكيد إلى:");
  //               })
  //               .catch((error) => {
  //                 console.error("حدث خطأ أثناء إرسال رسالة التأكيد:", error);
  //               });
  //           } else {
  //             console.error("البريد الإلكتروني غير موجود.");
  //           }
  //         })
  //         .catch((error) => {
  //           console.error(
  //             "حدث خطأ أثناء التحقق من وجود البريد الإلكتروني:",
  //             error
  //           );
  //         });
  //     } else {
  //       console.error("عنوان البريد الإلكتروني غير صالح.");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("حدث خطأ أثناء التحقق من عنوان البريد الإلكتروني:", error);
  //   });

  console.log(registerFormik)
  return (
    <>
      <div className='bg-dark'>
        <div className='home-img d-flex justify-content-center align-items-center'>
          <div className=' bac-blur px-3 d-flex justify-content-evenly flex-column'>
            <h2>"Welcome Where Care Meet technology."</h2>
            <div className='row w-100 home-img-input'>
              <form
                className='col-sm w-100'
                onSubmit={registerFormik.handleSubmit}
              >
                <div className='mb-3'>
                  <div className='code-input d-flex justify-content-center align-items-center'>
                    <label className='lable-iconn text-light ify-content-center align-items-center w-25'>
                      <FontAwesomeIcon icon={faEnvelope} className='mx-2' />
                      Emali
                    </label>
                    <input
                      type='email'
                      className='form-control w-75 m-auto '
                      id='exampleInputEmail3'
                      aria-describedby='emailHelp'
                      // placeholder="Email address"
                      name='email'
                      value={registerFormik.values.email}
                      onChange={registerFormik.handleChange}
                      onBlur={registerFormik.handleBlur}
                    />
                  </div>

                  {registerFormik.errors.email &&
                  registerFormik.touched.email ? (
                    <div className='alt d-flex justify-content-end'>
                      <div className='alert alert-danger w-75 '>
                        {registerFormik.errors.email}
                      </div>
                    </div>
                  ) : (
                    ''
                  )}

                  <div className='code-input mt-3 d-flex justify-content-center align-items-center'>
                    <label className='lable-iconn text-light ify-content-center align-items-center w-25'>
                      <FontAwesomeIcon icon={faLock} className='mx-2' />
                      newPassword
                    </label>

                    <input
                      type='newPassword'
                      className='form-control  w-75 m-auto mb-1'
                      id='pass'
                      // placeholder="Password"
                      name='newPassword'
                      value={registerFormik.values.newPassword}
                      onChange={registerFormik.handleChange}
                      onBlur={registerFormik.handleBlur}
                    />
                  </div>
                  {registerFormik.errors.newPassword &&
                  registerFormik.touched.newPassword ? (
                    <div className='alt d-flex justify-content-end'>
                      <div className='alert alert-danger w-75'>
                        {registerFormik.errors.newPassword}
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div className=''>
                  <button
                    type='submit'
                    className='btn btn-danger w-25 mx-1 mb-3 fs-5'
                    disabled={
                      !(
                        registerFormik.isValid &&
                        registerFormik.dirty &&
                        !loading
                      )
                    }
                  >
                    {!loading ? (
                      'Login'
                    ) : (
                      // <FontAwesomeIcon icon={faSpinner} />
                      <FaSpinner className='fa-spin' />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
