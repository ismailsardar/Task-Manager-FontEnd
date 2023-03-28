import React,{Suspense} from "react";
import MasterLayout from "../components/masterLayout/MasterLayout";

const NewTaskPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <h1>New Task Page</h1>
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default NewTaskPage;
