import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { ProfileDetails } from "../../APIRequest/ApiRequest";
import { getBase64 } from "../../helper/FormHelper";

const Profile = () => {
  useEffect(() => {
    ProfileDetails();
  }, []);

  let profileData = useSelector((state) => state.profile.value);

  let emailRef,
    firstNameRef,
    lastNameRef,
    mobileRef,
    passwordRef,
    userImgRef,
    userImgView = useRef();

  const PreviewImage = () => {
    let ImgFile = userImgRef.files[0];
    getBase64(ImgFile).then((base64) => {
      userImgView.src = base64;
    });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="container-fluid m-0 p-0">
                  <div className="row m-0 p-0">
                    <img
                      ref={(input) => (userImgView = input)}
                      className="icon-nav-img-lg height-200 w-auto"
                      src={profileData["photo"]}
                      alt="profile-img"
                    />
                    <hr />
                    <div className="col-4 p-2">
                      <label>Profile Picture</label>
                      <input
                        onChange={PreviewImage}
                        ref={(input) => (userImgRef = input)}
                        placeholder="User Image"
                        className="form-control animated fadeInUp"
                        type="file"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>Email Address</label>
                      <input
                        ref={(input) => (emailRef = input)}
                        defaultValue={profileData["email"]}
                        type="email"
                        placeholder="Email"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>First Name</label>
                      <input
                        ref={(input) => (firstNameRef = input)}
                        defaultValue={profileData["firstName"]}
                        type="text"
                        placeholder="First Name"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>Last Name</label>
                      <input
                        ref={(input) => (lastNameRef = input)}
                        defaultValue={profileData["lastName"]}
                        type="text"
                        placeholder="Last Name"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>Mobile Number</label>
                      <input
                        ref={(input) => (mobileRef = input)}
                        defaultValue={profileData["mobile"]}
                        type="mobile"
                        placeholder="Mobile Number"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>Password</label>
                      <input
                        ref={(input) => (passwordRef = input)}
                        defaultValue={profileData["password"]}
                        type="password"
                        placeholder="Password"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-2">
                    <button
                      // onClick={UpdateMyProfile}
                      className="btn w-100 float-end btn-primary animated fadeInUp"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
