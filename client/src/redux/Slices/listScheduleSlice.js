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
      state.data = action.payload.data;
    },
    removeListSuccess: (state, action) => {
      state.data = state.data.filter((state) => state._id !== action.payload);
    },
    listFailure: (state, action) => {
      state.isLoading = false;
    },
  },
});
// const  {  reducer , actions} = registerSlice
export const { listRequest, listSuccess, removeListSuccess, listFailure } =
  listScheduleSlice.actions;
export default listScheduleSlice.reducer;
