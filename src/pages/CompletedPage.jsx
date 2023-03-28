import React, { lazy, Suspense } from "react";
import MasterLayout from "../components/masterLayout/MasterLayout";
const Completed = lazy(() => import("../components/Completed/Completed"));

const CompletedPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Completed />
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default CompletedPage;
