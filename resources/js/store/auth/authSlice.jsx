import { createSlice } from "@reduxjs/toolkit"
import { registerUser,loginUser, forgetPassword, resetPassword, googleLoginRedirect, googleLoginCallback } from "./authActions"


//define state
const initialState={
    activeAccountStatus:false,
    isLoggedIn:false,
    loading:false,
    user:{},
    token:null,
    error:null,
    success:null,
    message:null,
    pageRefreshStatus:false,
    googleLoginRedirectUrl:""
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
        [forgetPassword.pending]:(state,action)=>{
            state.loading=true
        },
        [forgetPassword.fulfilled]:(state,action)=>{
            console.log("[forget-action]",action.payload)
            state.loading=false,
            state.message=action.payload.message,
            state.error=null,
            state.success=action.payload.statusCode,
            state.pageRefreshStatus=true
        },
        [forgetPassword.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
        [resetPassword.pending]:(state,action)=>{
            state.loading=true
        },
        [resetPassword.fulfilled]:(state,action)=>{
            console.log("[forget-action]",action.payload)
            state.loading=false,
            state.message=action.payload.message,
            state.error=null,
            state.success=action.payload.statusCode,
            state.pageRefreshStatus=true
        },
        [resetPassword.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
        [googleLoginRedirect.pending]:(state,action)=>{
            state.loading=true
        },
        [googleLoginRedirect.fulfilled]:(state,action)=>{
            console.log("[google-action]",action.payload)
            state.loading=false,
            state.message=action.payload.message,
            state.error=null,
            state.isLoggedIn=true,
            state.success=action.payload.statusCode,
            state.googleLoginRedirectUrl=action.payload
        },
        [googleLoginRedirect.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
        [googleLoginCallback.pending]:(state,action)=>{
            state.loading=true
        },
        [googleLoginCallback.fulfilled]:(state,action)=>{
            console.log("[google-callback-action]",action.payload.user)
            state.loading=false,
            state.error=null,
            state.user=action.payload.user,
            state.token=action.payload.token,
            state.isLoggedIn=true,
            // state.success=action.payload.statusCode,
            state.pageRefreshStatus=true
        },
        [googleLoginCallback.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
    }
})

export default authSlice.reducer;
