import React, { lazy, Suspense } from "react";
import MasterLayout from "../components/masterLayout/MasterLayout";
const Progress = lazy(() => import("../components/Progress/Progress"));

const ProgressPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Progress />
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default ProgressPage;
