import React, { lazy, Suspense } from "react";
const Profile = lazy(() => import("../components/Profile/Profile"));

const ProfilePage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <Profile />
      </Suspense>
    </>
  );
};

export default ProfilePage;
