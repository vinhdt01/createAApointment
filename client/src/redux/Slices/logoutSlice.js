import { createSlice } from "@reduxjs/toolkit";
export const logoutSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    status: "",
  },
  reducers: {
    logoutRequest: (state, action) => {
      state.isLoading = true;
    },

    logoutSuccess: (state, action) => {
      state.isLoading = false;

      state.status = action.payload.status;
    },
    logoutFailure: (state, action) => {
      state.isLoading = false;
    },
  },
});
// const  {  reducer , actions} = registerSlice
export const { logoutRequest, logoutSuccess, logoutFailure } =
  logoutSlice.actions;
export default logoutSlice.reducer;
