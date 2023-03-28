import React,{Suspense} from "react";

const LoginPage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>LoginPage</Suspense>
    </>
  );
};

export default LoginPage;
