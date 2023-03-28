import React,{Suspense} from "react";

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
