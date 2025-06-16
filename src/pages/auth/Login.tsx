import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { publicApiRoutes, requests } from "../../helper/apiAgent";
import { ResponseHandler } from "../../helper/utils";
import { localstorage } from "../../enums/localStorage.enum";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { get } from "lodash";
import { route } from "../../enums/route.enum";
import { useFormik } from "formik";
import { ClipLoader } from "react-spinners";

interface InitialFormInterface {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  console.log(loading);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleFormSubmit = async (values: any, { setSubmitting }: any) => {
    setLoading(true);
    await requests
      .post(publicApiRoutes.adminLogin, {
        email: values.email,
        password: values.password,
      })
      .then((res: any) => {
        setLoading(false);
        const response = ResponseHandler(res);
        toast.success("Login Successful");
        localStorage.setItem(
          localstorage.token,
          get(response, "data.token", "")
        );
        console.log(get(response, "data.token", ""));

        navigate(route.dashboard);
        setSubmitting(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Login failed. Please try again.");
      });
  };

  const formik = useFormik<InitialFormInterface>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: (values, { setSubmitting }) => {
      handleFormSubmit(values, { setSubmitting });
    },
  });
  useEffect(() => {
    // Add classes when component mounts
    document.body.classList.add(
      "d-flex",
      "align-items-center",
      "justify-content-center"
    );

    // Cleanup on unmount
    return () => {
      document.body.classList.remove(
        "d-flex",
        "align-items-center",
        "justify-content-center"
      );
    };
  }, []);
  return (
    <>
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-contain-center">
          <div className="col-xl-12">
            <div className="card box">
              <div className="card-body box1">
                <div className="row m-0 ">
                  <div className="col-xl-6 col-md-6 sign">
                    <div className="">
                      <span>
                        <div className="col-xl-12 col-md-12">
                          <div className="logo my-4">
                            <center>
                              <img
                                src="/src/assets/images/Infyra-Logo.png"
                                height="70"
                              />
                            </center>
                          </div>
                          <div className="sign-in-your">
                            <h3 className="text-center">
                              Sign in your account
                            </h3>
                            <p className="text-white-50 text-center my-2">
                              Welcome back! Please enter your details to
                              continue.
                            </p>

                            <form onSubmit={formik.handleSubmit}>
                              <div className="mb-3">
                                <label htmlFor="email" className="mb-1">
                                  <strong>Email</strong>
                                </label>
                                <input
                                  name="email"
                                  type="email"
                                  placeholder="Email Id"
                                  value={formik.values.email}
                                  onChange={formik.handleChange}
                                  className="form-control"
                                />
                                {formik.errors.email && (
                                  <p
                                    data-testid="email-error"
                                    className="field__message error-msg text-danger"
                                  >
                                    {formik.errors.email}
                                  </p>
                                )}
                              </div>
                              <div className="mb-3">
                                <label htmlFor="password" className="mb-1">
                                  <strong>Password</strong>
                                </label>
                                <input
                                  name="password"
                                  type="password"
                                  placeholder="Password"
                                  value={formik.values.password}
                                  onChange={formik.handleChange}
                                  className="form-control"
                                />
                                {formik.errors.password && (
                                  <p
                                    data-testid="email-error"
                                    className="field__message error-msg text-danger"
                                  >
                                    {formik.errors.password}
                                  </p>
                                )}
                              </div>
                              <div className="row mt-4 mb-2">
                                <div className="mb-3 d-flex justify-content-between">
                                  <div className="form-check custom-checkbox ms-1">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id="basic_checkbox_1"
                                    />
                                    <label className="form-check-label">
                                      Remember my preference
                                    </label>
                                  </div>
                                  {/* <a href="/" className="text-danger">Forgot Password?</a> */}
                                </div>
                              </div>
                              <div className="text-center">
                                <button
                                  type="submit"
                                  className="btn btn-primary btn-block"
                                >
                                  {!loading ? (
                                    "Sign Me In"
                                  ) : (
                                    <ClipLoader size={20} color="#000" />
                                  )}
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                  {/* <img src="/src/assets/images/log.png" className="education-img"></img> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
