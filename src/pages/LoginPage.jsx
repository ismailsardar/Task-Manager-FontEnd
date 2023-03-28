import React, { lazy, Suspense } from "react";
const Login = lazy(() => import("../components/Login/Login"));

const LoginPage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <Login />
      </Suspense>
    </>
  );
};

export default LoginPage;
