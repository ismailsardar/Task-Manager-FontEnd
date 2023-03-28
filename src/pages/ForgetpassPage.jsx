import React, { lazy, Suspense } from "react";
// const Canceled = lazy(() => import("../components/));

const ForgetpassPage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <h2>ForgetpassPage</h2>
      </Suspense>
    </>
  );
};

export default ForgetpassPage;
