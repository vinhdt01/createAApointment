import { createSlice } from "@reduxjs/toolkit";
export const scheduleSlice = createSlice({
    name:'user',
    initialState: {
        status:'',
        number:''

    },
    reducers: {
    scheduleRequest: (state , action) => {
 
  
        

      
   },

    scheduleSuccess: (state , action) => {
       
       state.status = action.payload.status;
       state.number = action.payload.numberTurn;

       
    },
    scheduleFailure: (state , action) => {
        state.status = action.payload.status;

   
      
   },
   registerStatus: (state , action) => {
  
    state.status = action.payload.status



  
},

    }
})
export const {scheduleRequest , scheduleSuccess , scheduleFailure , scheduleStatus} = scheduleSlice.actions
export default scheduleSlice.reducer