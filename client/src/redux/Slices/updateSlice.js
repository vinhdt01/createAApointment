import { createSlice } from "@reduxjs/toolkit";
export const updateSlice = createSlice({
  name: "update",
  initialState: {
    status: "false",
    loading: false,
    title: "",
  },
  reducers: {
    updateRequest: (state, action) => {
      state.status = action.payload.status;
      state.loading = false;
    },

    updateSuccess: (state, action) => {
      state.status = action.payload.status;
      state.loading = true;
    },
    updateFailure: (state, action) => {
      state.status = action.payload.status;
      state.loading = false;
    },
  },
});
export const { updateRequest, updateSuccess, updateFailure } =
  updateSlice.actions;
export default updateSlice.reducer;
