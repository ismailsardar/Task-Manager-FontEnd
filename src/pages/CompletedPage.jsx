import React,{Suspense} from "react";
import MasterLayout from "../components/masterLayout/MasterLayout";

const CompletedPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <h1>Completed Page</h1>
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default CompletedPage;
