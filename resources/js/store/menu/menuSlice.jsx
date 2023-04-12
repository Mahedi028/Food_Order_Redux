import { createSlice} from "@reduxjs/toolkit";
import { fetchMenus,fetchMenu } from "./menuActions";
const initialState={
    menus:[],
    loading:false,
    error:null
}
const menuSlice=createSlice({
    name:"menu",
    initialState,
    reducers:{},
    extraReducers:{
        [fetchMenus.pending]:(state,action)=>{
            state.loading=true
        },
        [fetchMenus.fulfilled]:(state,action)=>{
            console.log("[state]",state.user);
            console.log("[action]",action);
            state.loading=false,
            state.menus=action.payload
        },
        [fetchMenus.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
        [fetchMenu.pending]:(state,action)=>{
            state.loading=true
        },
        [fetchMenu.fulfilled]:(state,action)=>{
            console.log("[state]",state.user);
            console.log("[action]",action);
            state.loading=false,
            state.menus=action.payload
        },
        [fetchMenu.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
    }
})

export default menuSlice.reducer
