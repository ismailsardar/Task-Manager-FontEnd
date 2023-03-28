import React, { lazy, Suspense } from "react";
const Registration = lazy(() =>
  import("../components/Registration/Registration")
);

const RegistrationPage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <Registration />
      </Suspense>
    </>
  );
};

export default RegistrationPage;
