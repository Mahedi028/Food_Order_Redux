import { createSlice } from "@reduxjs/toolkit"
import { registerUser,loginUser } from "./authActions"


//define state
const initialState={
    activeAccountStatus:false,
    isLoggedIn:false,
    loading:false,
    user:null,
    token:null,
    error:null,
    success:null,
    message:null,
    pageRefreshStatus:false
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:{
        [registerUser.pending]:(state,action)=>{
            state.loading=true
        },
        [registerUser.fulfilled]:(state,action)=>{
            state.loading=false,
            // state.user=action.payload.user,
            // state.token=action.payload.token,
            state.message=action.payload.message,
            state.error=null,
            state.success=true
        },
        [registerUser.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
        [loginUser.pending]:(state,action)=>{
            state.loading=true
        },
        [loginUser.fulfilled]:(state,action)=>{
            console.log("[login-action]",action.payload)
            state.loading=false,
            state.user=action.payload.user,
            state.token=action.payload.token,
            state.message=action.payload.message,
            state.error=null,
            state.success=true,
            state.isLoggedIn=true,
            state.pageRefreshStatus=true
        },
        [loginUser.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
    }
})

export default authSlice.reducer;
