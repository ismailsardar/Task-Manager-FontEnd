import React, { Suspense } from "react";

const RegistrationPage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <h2>RegistrationPage</h2>
      </Suspense>
    </>
  );
};

export default RegistrationPage;
