import { createSlice } from "@reduxjs/toolkit";
export const registerSlice = createSlice({
    name:'user',
    initialState: {
        name: '',
        isLoading:false,
        status:'',
        error:'',    
    },
    reducers: {
    registerRequest: (state , action) => {
 
  
        state.isLoading = true;

      
   },

    registerSuccess: (state , action) => {
         state.name = action.payload.result
        
         state.error = ''

    
       
    },
    registerFailure: (state , action) => {
        state.isLoading = false;
        state.error = action.payload

   
      
   },
   registerStatus: (state , action) => {
  
    state.status = action.payload.status



  
},

    }
})
export const {registerRequest , registerSuccess , registerFailure , registerStatus} = registerSlice.actions
export default registerSlice.reducer