"use client";
import Link from "next/link";
import React from "react";
import { useFormik } from "formik";
import { forgotPasswordSchema } from "@/utils/validation-schema";
import ErrorMsg from "@/form/error-msg";

import { forgotPassword } from "../sign-in/action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ForgotForm = () => {
  const router = useRouter()
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    values,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: async ({ email }, { resetForm }) => {
      await forgotPassword(email, `${location.origin}`)
      toast.success('Password reset email has been sent successfully')
      router.push('/sign-in')
    },
  });

  return (
    <div className="container">
      <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 mt-80 mb-80">
        <div className="sign__wrapper white-bg">
          <div className="sign__header mb-35">
            <div className="sign__in text-center">
              <form onSubmit={handleSubmit}>
                <div className="sign__input-wrapper mb-25">
                  <h5 className="forgot-heading">Forgot Password</h5>
                  <p>Enter your email address to request password reset.</p>
                  <div className="sign__input">
                      <input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="email"
                        placeholder="Enter your email"
                        id="email"
                      />
                      
                  </div>
                  {touched.email && <ErrorMsg error={errors.email} />}
                </div>
                <div className="sing-buttom d-inline-block mx-auto px-5">
                  <button className="e-btn  w-100">Send Request</button>
                </div>
                <div className="sign__new text-center mt-20">
                  <p>
                    Remember your password? <Link href="/sign-in">Login</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotForm;
