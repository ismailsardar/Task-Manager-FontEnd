import React, { lazy, Suspense } from "react";
const NotFound = lazy(() => import("../components/NotFound/NotFound"));

const Page404 = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <NotFound />
      </Suspense>
    </>
  );
};

export default Page404;
