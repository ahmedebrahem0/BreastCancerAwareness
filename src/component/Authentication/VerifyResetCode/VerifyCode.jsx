import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { FaSpinner } from 'react-icons/fa6'
import * as Yup from 'yup'
import { baseUrl } from '../../../baseUrl'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export default function Register() {
  // let [confirmationCode, setConfirmationCode] = useStatfconfirmationCode(false); // حالة لتحديد ما إذا كان يجب عرض حقل رمز التأكيد أم لا

  //   let reset = document.getElementById("resetCode");
  // reset.style.display = "none";

  let [loading, setloading] = useState(false)

  let navigate = useNavigate()

  let validationSchema = Yup.object({
    resetCode: Yup.string()
      .required('Please enter the reset code') // شرط عدم الفراغ
      .min(5, 'Must be 6 numbers') // الحد الأدنى للطول
      //   .min(6, "Must be 6 numbers") // الحد الأدنى للطول
      .matches(/^[0-9]*$/),
  })

  let registerFormik = useFormik({
    initialValues: {
      resetCode: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setloading(true)
      axios
        .post(`${baseUrl}/auth/verifyResetCode`, values)
        .then((date) => {
          if (date.status === 200) {
            setloading(false)
            // setConfirmationCode(true);
            toast.success('code is correct')
            navigate("/BreastCancerAwareness/ResetPassword");
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            setloading(false)
            toast.error(error.response.data.message)
            // setConfirmationCode(false);
            console.log(error.response.data.message)
            console.log(error)
          }
        })
    },
  })

  console.log('verify', registerFormik.errors)
  return (
    <>
      <div className='bg-dark'>
        <div className='row m-0 home-img d-flex justify-content-center align-items-center'>
          <div className='col-md-6 bac-blur  px-3 d-flex justify-content-evenly align-items-center  flex-column'>
            {/* <h2>"Please enter your email address "</h2> */}
            <div className='row w-100 home-img-input'>
              <form
                className='cl-sm w-100'
                onSubmit={registerFormik.handleSubmit}
              >
                <div className='mb-3'>
                  <div className='mb-3'>
                    <div className='code-input d-flex justify-content-center align-items-center'>
                      <label className='lable-icon d-flex justify-content-center align-items-center w-25'>
                        <FontAwesomeIcon icon={faLock} className='mx-2' />
                        Code
                      </label>
                      <input
                        type='text'
                        className='form-control w-75 m-auto  '
                        id='resetCode'
                        name='resetCode'
                        value={registerFormik.values.resetCode}
                        onChange={registerFormik.handleChange}
                        onBlur={registerFormik.handleBlur}
                      />
                    </div>
                    {registerFormik.errors.resetCode &&
                      registerFormik.touched.resetCode && (
                        <div className='alt d-flex justify-content-end'>
                          <div className='alert alert-danger w-75'>
                            {registerFormik.errors.resetCode}
                          </div>
                        </div>
                      )}
                  </div>
                </div>
                <div className='login-submit w-100'>
                  <button
                    type='submit'
                    className='forget-sen forget btn btn-danger  mx-1 mb-3 fs-5'
                    disabled={
                      !(
                        registerFormik.isValid &&
                        registerFormik.dirty &&
                        !loading
                      )
                    }
                  >
                    {!loading ? (
                      'Reset Password'
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
