import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ProfileDetails } from "../../APIRequest/ApiRequest";

const Profile = () => {
  useEffect(() => {
    ProfileDetails();
  }, []);

  let profileData = useSelector((state) => state.profile.value);

  return <div>{JSON.stringify(profileData)}</div>;
};

export default Profile;
