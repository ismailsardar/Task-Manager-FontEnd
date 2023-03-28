import React,{Suspense} from "react";

const Page404 = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <h1>page404</h1>
      </Suspense>
    </>
  );
};

export default Page404;
