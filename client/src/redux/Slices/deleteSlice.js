import { createSlice } from "@reduxjs/toolkit";
export const deleteSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    status: "",
    error: "",
  },
  reducers: {
    deleteRequest: (state, action) => {
      state.isLoading = true;
    },

    deleteSuccess: (state, action) => {
      state.isLoading = false;
      state.status = action.payload;
    },
    deleteFailure: (state, action) => {
      state.isLoading = false;
    },
  },
});
// const  {  reducer , actions} = registerSlice
export const { deleteRequest, deleteSuccess, deleteFailure } =
  deleteSlice.actions;
export default deleteSlice.reducer;
