import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  IsMobile,
} from "../../helper/FormHelper";

const Registration = () => {
  let emailRef,
    firstNameRef,
    lastNameRef,
    mobileRef,
    passwordRef = useRef();

  const onRegistration = () => {
    let email = emailRef.value;
    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let mobile = mobileRef.value;
    let password = passwordRef.value;
    let photo = "demo";

    // debugger;
    // console.log(email + firstName + lastName + mobile + password);

    // form validation
    if (IsEmail(email)) {
      ErrorToast("Valid Email Address Required !");
    } else if (IsEmpty(firstName)) {
      ErrorToast("First Name is Required !");
    } else if (IsEmpty(lastName)) {
      ErrorToast("Last Name is Required !");
    } else if (!IsMobile(mobile)) {
      ErrorToast("Valid Mobile Required !");
    } else if (IsEmpty(password)) {
      ErrorToast("password Required !");
    } else {
      alert("success");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-10 center-screen">
            <div className="card w-100 p-3">
              <div className="card-body">
                <h4>SIGN UP</h4>
                <hr />
                <div className="container-fluid m-0 p-0">
                  <div className="row m-0 p-0">
                    <div className="col-md-4 p-2">
                      <label>Email Address</label>
                      <input
                        ref={(input) => (emailRef = input)}
                        type="email"
                        placeholder="Email"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>First Name</label>
                      <input
                        ref={(input) => (firstNameRef = input)}
                        type="text"
                        placeholder="First Name"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>Last Name</label>
                      <input
                        ref={(input) => (lastNameRef = input)}
                        type="text"
                        placeholder="Last Name"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>Mobile Number</label>
                      <input
                        ref={(input) => (mobileRef = input)}
                        type="mobile"
                        placeholder="Mobile Number"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>Password</label>
                      <input
                        ref={(input) => (passwordRef = input)}
                        type="password"
                        placeholder="Password"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                  </div>
                  <div className="row mt-2 p-0">
                    <div className="col-md-4 p-2">
                      <button
                        onClick={onRegistration}
                        className="btn btn-primary mt-3 w-100 float-end animated fadeInUp"
                      >
                        Complete
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="text-center mt-3">
                  <span>
                    <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/registration"
                    >
                      Sign In
                    </Link>
                    <span className="ms-1">|</span>
                    <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/registration"
                    >
                      Forget Password
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
