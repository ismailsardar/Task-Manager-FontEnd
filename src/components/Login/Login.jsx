import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90 p-4">
              <div className="card-body">
                <h4>SIGN IN</h4>
                <hr />
                <input
                  type="email"
                  className="form-control animated fadeInUp"
                  placeholder="email"
                />
                <br />
                <input
                  type="password"
                  className="form-control animated fadeInUp"
                  placeholder="password"
                />
                <br />
                <button className="btn w-100 animated fadeInUp float-end btn-primary">
                  Next
                </button>
                <hr />
                <div className="float-end mt-3">
                  <span>
                    <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/registration"
                    >
                      Sign Up
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

export default Login;
