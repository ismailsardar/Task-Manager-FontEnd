import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../slice/settingsSlice";
import summaryReducer from "../slice/summarySlice";
import taskReducer from "../slice/taskSlice";

export default configureStore({
    reducer:{
        settings: settingsReducer,
        task: taskReducer,
        summary: summaryReducer,
    }
});