import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    value: [],
  },
  reducers: {
    SetProfileDetails: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { SetProfileDetails } = profileSlice.actions;

export default profileSlice.reducer;
