import React, { lazy, Suspense } from "react";
import MasterLayout from "../components/masterLayout/MasterLayout";
const Create = lazy(() => import("../components/Create/Create"));

const CreatePage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Create />
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default CreatePage;
