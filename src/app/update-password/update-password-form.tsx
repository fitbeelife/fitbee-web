"use client";
import { useState } from "react";
import { useFormik } from "formik";
// internal
import ErrorMsg from "../../form/error-msg";
import { register_schema } from "@/utils/validation-schema";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { signup, updatePassword } from "../sign-in/action";
import { toast } from "react-toastify";

const UpdatePasswordForm = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  console.log(code);
  const [showPass, setShowPass] = useState(false);
  const [showConPass, setShowConPass] = useState(false);

  const router = useRouter();

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        password: "",
        passwordConfirmation: "",
      },
      validationSchema: register_schema,
      onSubmit: async ({ password }, { resetForm }) => {
        const { error } = await updatePassword(password);
        if (error) {
          toast.error(error.message);
          return;
        }
        router.push("/sign-in");
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="sign__input-wrapper">
        <div className="sign__input-wrapper mb-25">
          <h5>Password</h5>
          <div className="sign__input">
            <input
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type={showPass ? "text" : "password"}
              placeholder="Password"
              id="password"
              required
            />
            <i className="fal fa-lock"></i>
          </div>
          {touched.password && <ErrorMsg error={errors.password} />}
        </div>

        <div className="sign__input-wrapper mb-10">
          <h5>Re-Password</h5>
          <div className="sign__input">
            <input
              name="passwordConfirmation"
              value={values.passwordConfirmation}
              onChange={handleChange}
              onBlur={handleBlur}
              type={showConPass ? "text" : "password"}
              placeholder="Confirm Password"
              id="passwordConfirmation"
              required
            />
            <i className="fal fa-lock"></i>
          </div>
          {touched.passwordConfirmation && (
            <ErrorMsg error={errors.passwordConfirmation} />
          )}
        </div>
      </div>
      <button className="e-btn w-100">
        {" "}
        <span></span> Update Password
      </button>
      <div className="sign__new text-center mt-20">
        <p>
          Already in Fitbee ? <Link href="/sign-in"> Sign In</Link>
        </p>
      </div>
      <div className="sign__new text-center mt-20">
        <p>
          Back to <Link href="/"> Home</Link>
        </p>
      </div>
    </form>
  );
};

export default UpdatePasswordForm;
