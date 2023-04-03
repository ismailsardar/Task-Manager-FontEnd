import React, { lazy, Suspense } from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Profile = lazy(() => import("../components/Profile/Profile"));
import MasterLayout from "../components/masterLayout/MasterLayout";

const ProfilePage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Profile />
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default ProfilePage;
