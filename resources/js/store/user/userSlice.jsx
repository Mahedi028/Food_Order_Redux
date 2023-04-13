import { createSlice} from "@reduxjs/toolkit";
import { fetchUser } from "./userActions";



const initialState={
    userData:{},
    loading:false,
    error:null,
    pageRefreshStatus:false
}
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        logout: (state) => {
            // localStorage.removeItem('token') // deletes token from storage
            localStorage.clear() // deletes token from storage
            state.loading = false
            state.userData = null
            state.error = null
          },
    },
    extraReducers:{
        [fetchUser.pending]:(state,action)=>{
            state.loading=true
        },
        [fetchUser.fulfilled]:(state,action)=>{
            console.log("[state]",state.userData);
            console.log("[action]",action);
            state.loading=false,
            state.userData=action.payload,
            state.pageRefreshStatus=true
        },
        [fetchUser.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
    }
})

export const {logout}=userSlice.actions;

export default userSlice.reducer
