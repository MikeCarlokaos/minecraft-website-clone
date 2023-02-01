import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../../../../assets/page/login/icon/msalogin-Microsoft-Logo-White.svg";
import help from "../../../../assets/page/login/icon/line-help.svg";
import bgImg from "../../../../assets/page/login/image/msalogin-bg-glob.jpg";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("This field is required."),
    password: Yup.string().required("This field is required."),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    alert("This is only a sample");
  };

  return (
    <section
      style={{ backgroundImage: `url(${bgImg})` }}
      className="w-full h-full py-10 flex items-center justify-center bg-cover"
    >
      <div className="w-[475px] h-full text-center p-5 bg-white">
        <div className="w-full mb-5 mt-3">
          <h3 className="text-[28px] tracking-[1px] leading-[34px] uppercase font-bold">
            log in
          </h3>
        </div>
        <div className="w-full">
          <a
            href="blank"
            className="w-full flex text-white items-center justify-center bg-dark-green shadow-base-button h-[50px] font-bold text-lg py-[15px] px-6 tracking-[0.54px] leading-5 hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-secondary transition-all"
          >
            Sign in with
            <img src={logo} alt="Microsoft logo" className="w-28 ml-3" />
          </a>
          <p className="w-full mt-5 text-grey-primary">
            No Microsoft account?
            <a
              href="blank"
              className="text-text-green tracking-tight underline ml-1 hover:bg-base-gray hover:text-white"
            >
              Sign up for free!
            </a>
          </p>
        </div>
        <div className="w-full h-[1px] bg-ash mt-3"></div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className="w-full py-4 flex flex-col gap-3">
                <p className="w-full">
                  Still have a Mojang account? Log in here:
                </p>
                <div>
                  <label
                    htmlFor="email"
                    className="w-full flex items-center text-grey-primary text-sm "
                  >
                    Mojang Account(Email)
                    <div className="relative group w-[16px] h-[16px] ml-1">
                      <img
                        src={help}
                        alt="help-line"
                        className=" w-full h-full group-hover:block"
                      />
                      <p className="hidden absolute top-6 -left-36 w-80 text-sm text-start p-1 bg-dirty-white shadow border rounded group-hover:block ">
                        If your account was created after November 2012 or has
                        been migrated to a Microsoft account, sign in with your
                        email. Otherwise, sign in with your username.
                      </p>
                    </div>
                  </label>
                  <Field
                    type="email"
                    label="Email"
                    name="email"
                    className="w-full border border-black p-2"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="w-full flex text-grey-primary text-sm"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    label="Password"
                    name="password"
                    className="w-full border border-black p-2"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>
                <div className="w-full flex justify-end my-4">
                  <a
                    href="blank"
                    className="w-44 text-text-green tracking-tight underline hover:bg-base-gray hover:text-white"
                  >
                    Forgot your password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className=" w-full flex items-center text-white py-3 justify-center font-bold text-lg  uppercase tracking-[0.54px] leading-5 bg-grey-primary shadow-base-button-gray hover:bg-gradient-to-b from-base-gray to-dark-gray  hover:shadow-hover-button-gray transition-all "
                >
                  log in
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};

export default LoginForm;
