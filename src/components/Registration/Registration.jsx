import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
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
                        type="email"
                        placeholder="Email"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>First Name</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>Last Name</label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>Mobile Number</label>
                      <input
                        type="mobile"
                        placeholder="Mobile Number"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                  </div>
                  <div className="row mt-2 p-0">
                    <div className="col-md-4 p-2">
                      <button className="btn btn-primary mt-3 w-100 float-end animated fadeInUp">
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
