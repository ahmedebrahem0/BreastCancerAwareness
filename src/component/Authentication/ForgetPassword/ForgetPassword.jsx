import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FaSpinner } from 'react-icons/fa6'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { baseUrl } from '../../../baseUrl'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

export default function Register() {
  let [loading, setloading] = useState(false)
  let navigate = useNavigate()

  let validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required(),
    resetCode: Yup.string(),
  })

  let registerFormik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setloading(true)
      axios
        .post(`${baseUrl}/auth/forgotPasswords`, values)
        .then((date) => {
          if (date.status === 200) {
            toast.success('Check your Email')
            setloading(false)
            navigate("/BreastCancerAwareness/VerifyCode");
            console.log(date)
          }
        })
        .catch((error) => {
          if (error.response.status === 404) {
            toast.error('error')
            setloading(false)
            console.log(error.response.data.message)
            console.log(error)
          }
        })
    },
  })
  console.log('forget', registerFormik.errors)

  return (
    <>
      <div className='bg-dark'>
        <div className='home-img d-flex justify-content-center align-items-center'>
          <div className='bac-blur px-3 d-flex justify-content-evenly align-items-center flex-column'>
            <h2>"Welcome Where Care Meet technology."</h2>
            <div className='row home-img-input w-100'>
              <form className='col-sm' onSubmit={registerFormik.handleSubmit}>
                <div className='mb-3'>
                  <div className='email-input d-flex justify-content-center align-items-center'>
                    <label className='lable-icon text-light d-flex justify-content-center align-items-center w-25'>
                      <FontAwesomeIcon icon={faEnvelope} className='mx-2' />
                      Email
                    </label>
                    <input
                      autoComplete='ex123@example.com'
                      type='email'
                      className='form-control w-75 m-auto'
                      id='exampleInputEmail3'
                      aria-describedby='emailHelp'
                      name='email'
                      value={registerFormik.values.email}
                      onChange={registerFormik.handleChange}
                      onBlur={registerFormik.handleBlur}
                    />
                  </div>
                  {registerFormik.errors.email &&
                    registerFormik.touched.email && (
                      <div className='alt altt d-flex justify-content-end'>
                        <div className='alert alert-danger w-75'>
                          {registerFormik.errors.email}
                        </div>
                      </div>
                    )}
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <button
                    type='submit'
                    className='forget-send login-btn btn btn-danger w-25 mx-1 mb-3 fs-5'
                    disabled={
                      !registerFormik.isValid ||
                      !registerFormik.dirty ||
                      loading
                    }
                  >
                    {!loading ? (
                      'Send email'
                    ) : (
                      <FaSpinner className='fa-spin' />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Toaster /> */}
    </>
  )
}
