import React,{Suspense} from "react";
import MasterLayout from "../components/masterLayout/MasterLayout";

const ProgressPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <h1>Progress Page</h1>
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default ProgressPage;
