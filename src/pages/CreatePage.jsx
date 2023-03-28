import React,{Suspense} from "react";
import MasterLayout from "../components/masterLayout/MasterLayout";

const CreatePage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <h1>Create Page</h1>
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default CreatePage;
