import {
  faEnvelope
} from '@fortawesome/free-regular-svg-icons'
import {
  faLock
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { FaSpinner } from 'react-icons/fa6'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { baseUrl } from './../../baseUrl'
export default function Register() {
  let [confirmationCodeVisible, setConfirmationCodeVisible] = useState(false) // حالة لتحديد ما إذا كان يجب عرض حقل رمز التأكيد أم لا

  // reset.style.display = "none";

  let [loading, setloading] = useState(false)


  let validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required(),
    resetCode: Yup.string(),
  })

  let registerFormik = useFormik({
    initialValues: {
      email: '',
      resetCode: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setloading(true)
      console.log(values)
      axios
        .post(`${baseUrl}/auth/forgotPasswords`, values)
        .then((date) => {
          if (date.status === 200) {
            setloading(false)
            setConfirmationCodeVisible(true)
            toast.success('Check your Email')
            // navigate("/breastcancer/ResetPassword");
          } else if (registerFormik.values.resetCode === values.resetCode) 
            {
              setConfirmationCodeVisible(true)
              console.log('done')
              // navigate("/breastcancer/ResetPassword");
            }
          
        })
        .catch((error) => {
          if (error.response.status === 404) {
            setloading(false)
            toast.error('There is no user with this email')
            setConfirmationCodeVisible(false)
            console.log(error.response.data.message)
            console.log(error)
          }
        })
    },

    // axios.post(`${baseUrl}/auth/forgotPasswords`, { email: values.email })

    //   .then((response) => {
    //     // التحقق من الرد من الخادم
    //     if (response.data.exists) {
    //       // إذا كان البريد الإلكتروني موجودًا، قم بإرسال رسالة تأكيد
    //       axios
    //         .post(`${baseUrl}/auth/forgotPasswords`, values)
    //         .then((confirmationResponse) => {
    //           console.log("تم إرسال رسالة تأكيد إلى:", values.email);
    //         })
    //         .catch((error) => {
    //           console.error("حدث خطأ أثناء إرسال رسالة التأكيد:", error);
    //         });
    //     } else {
    //       console.error("البريد الإلكتروني غير موجود.");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(
    //       "حدث خطأ أثناء التحقق من وجود البريد الإلكتروني:",
    //       error
    //     );
    //   });
  })

  // validationSchema
  //   .isValid(registerFormik.errors.email)
  //   .then((valid) => {
  //     if (valid) {
  //       // إذا كان البريد الإلكتروني صالح، قم بالاستدعاء لـ API الخاص بك للتحقق من وجود البريد الإلكتروني
  //       axios
  //         .post(`${baseUrl}/auth/forgotPasswords`, {registerFormik.errors.email})
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
          <div className=' bac-blur w-50 px-3 d-flex justify-content-evenly flex-column'>
            <h2>"Welcome Where Care Meet technology."</h2>
            <div className='home-img-input'>
              <form className='w-100' onSubmit={registerFormik.handleSubmit}>
                <div className='mb-3'>
                  <label className='lable-icon'>
                    <FontAwesomeIcon icon={faEnvelope} className='mx-2' />
                    Emali
                  </label>
                  <input
                    type='email'
                    className='form-control w-50 m-auto mb-1'
                    id='exampleInputEmail3'
                    aria-describedby='emailHelp'
                    // placeholder="Email address"
                    name='email'
                    value={registerFormik.values.email}
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                  />

                  {registerFormik.errors.email &&
                  registerFormik.touched.email ? (
                    <div className='alert alert-danger w-50 m-auto'>
                      {registerFormik.errors.email}
                    </div>
                  ) : (
                    ''
                  )}
                  {confirmationCodeVisible && (
                    <div className='mb-3'>
                      <label className='lable-icon'>
                        <FontAwesomeIcon icon={faLock} className='mx-2' />
                        Code
                      </label>
                      <input
                        type='text'
                        className='form-control w-50 m-auto mb-1'
                        id='resetCode'
                        name='resetCode'
                        value={registerFormik.values.resetCode}
                        onChange={registerFormik.handleChange}
                        onBlur={registerFormik.handleBlur}
                      />
                      {registerFormik.errors.resetCode &&
                        registerFormik.touched.resetCode && (
                          <div className='alert alert-danger w-50 m-auto'>
                            {registerFormik.errors.resetCode}
                          </div>
                        )}
                    </div>
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
                      'Send email'
                    ) : (
                      // <FontAwesomeIcon icon={faSpinner} />
                      <FaSpinner className='fa-spin' />
                    )}
                  </button>
                  {/* <button
                    type="submit"
                    className="btn btn-primary w-25 mx-auto mb-3 fs-5"
                  >
                    Login
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
