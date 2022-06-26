import { createSlice } from "@reduxjs/toolkit";
export const listScheduleSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,

    data: [],
  },
  reducers: {
    listRequest: (state, action) => {
      state.isLoading = true;
    },

    listSuccess: (state, action) => {
      state.data.push(action.payload.data);
    },
    listFailure: (state, action) => {
      state.isLoading = false;
    },
  },
});
// const  {  reducer , actions} = registerSlice
export const { listRequest, listSuccess, listFailure } =
  listScheduleSlice.actions;
export default listScheduleSlice.reducer;
