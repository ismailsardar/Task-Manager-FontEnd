import React,{Suspense} from "react";

const CanceledPage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <h1>CanceledPage Page</h1>
      </Suspense>
    </>
  );
};

export default CanceledPage;
