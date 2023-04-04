import React from "react";

const SendOTP = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90 p-4">
              <div className="card-body">
                <h4>Email Address</h4>
                <br />
                <label>Your email address</label>
                <input
                  type="email"
                  className="form-control animated fadeInUp"
                  placeholder="enter your email..."
                />
                <br />
                <button className="btn btn-primary float-end w-100 animated fadeInUp">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendOTP;
