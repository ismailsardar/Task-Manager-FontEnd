import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "../slice/settingsSlice";

export default configureStore({
    reducer:{
        settings: settingsSlice,
    }
});