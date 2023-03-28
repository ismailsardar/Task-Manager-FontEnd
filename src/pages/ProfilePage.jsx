import React,{Suspense} from "react";

const ProfilePage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <h2>profile page</h2>
      </Suspense>
    </>
  );
};

export default ProfilePage;
